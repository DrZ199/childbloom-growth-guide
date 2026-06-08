/**
 * Broken Link Checker
 *
 * Scans all published articles for internal and external links.
 * Reports broken links (4xx/5xx responses or unreachable URLs).
 *
 * Usage:
 *   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npx tsx scripts/check-broken-links.ts
 *   npm run check:links
 *
 * Options:
 *   CONCURRENCY=5  — Max concurrent requests (default: 5)
 *   VERBOSE=true   — Log every URL being checked
 */

import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = process.env.SUPABASE_URL!;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY!;
const CONCURRENCY = parseInt(process.env.CONCURRENCY ?? "5", 10);
const VERBOSE = process.env.VERBOSE === "true";

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Error: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.");
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

interface BrokenLink {
  articleSlug: string;
  articleTitle: string;
  href: string;
  status: number | "unreachable";
  error?: string;
}

/**
 * Extract all href values from HTML content.
 */
function extractLinks(html: string): string[] {
  const linkRegex = /href=["']([^"']+)["']/gi;
  const links: string[] = [];
  let match: RegExpExecArray | null;
  while ((match = linkRegex.exec(html)) !== null) {
    if (match[1]) links.push(match[1]);
  }
  return [...new Set(links)];
}

/**
 * Check if a URL is reachable (returns non-error status).
 */
async function checkUrl(url: string): Promise<{ ok: boolean; status: number | "unreachable"; error?: string }> {
  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);

    const response = await fetch(url, {
      method: "HEAD",
      signal: controller.signal,
      redirect: "follow",
      headers: { "User-Agent": "ChildBloom-LinkChecker/1.0" },
    });

    clearTimeout(timeout);

    if (response.ok || response.status === 301 || response.status === 302) {
      return { ok: true, status: response.status };
    }

    return { ok: false, status: response.status };
  } catch (err) {
    return {
      ok: false,
      status: "unreachable",
      error: err instanceof Error ? err.message : String(err),
    };
  }
}

/**
 * Process URLs in batches with concurrency limit.
 */
async function processBatch<T, R>(
  items: T[],
  processor: (item: T) => Promise<R>,
  concurrency: number,
): Promise<R[]> {
  const results: R[] = [];
  const queue = [...items];

  async function worker() {
    while (queue.length > 0) {
      const item = queue.shift();
      if (item) {
        results.push(await processor(item));
      }
    }
  }

  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, () => worker()));
  return results;
}

async function main() {
  console.log("=== ChildBloom Broken Link Checker ===");
  console.log(`Concurrency: ${CONCURRENCY}`);

  // Fetch all published articles
  const { data: articles, error } = await supabase
    .from("articles")
    .select("id, title, slug, content, content_html")
    .eq("status", "published");

  if (error) {
    console.error("Failed to fetch articles:", error.message);
    process.exit(1);
  }

  if (!articles || articles.length === 0) {
    console.log("No published articles found.");
    return;
  }

  console.log(`Scanning ${articles.length} articles...\n`);

  // Collect all links from all articles
  interface LinkWithArticle {
    href: string;
    articleSlug: string;
    articleTitle: string;
  }

  const allLinks: LinkWithArticle[] = [];
  for (const article of articles) {
    const html = (article.content_html ?? article.content ?? "") as string;
    const links = extractLinks(html);

    for (const href of links) {
      // Only check http/https links
      if (href.startsWith("http://") || href.startsWith("https://")) {
        allLinks.push({
          href,
          articleSlug: article.slug,
          articleTitle: article.title,
        });
      }
    }
  }

  // Deduplicate URLs but track which articles reference them
  const urlMap = new Map<string, LinkWithArticle[]>();
  for (const link of allLinks) {
    const existing = urlMap.get(link.href) ?? [];
    existing.push(link);
    urlMap.set(link.href, existing);
  }

  console.log(`Found ${urlMap.size} unique URLs to check.\n`);

  // Check all URLs
  const brokenLinks: BrokenLink[] = [];
  let checked = 0;

  await processBatch(
    [...urlMap.entries()],
    async ([url, articles]) => {
      if (VERBOSE) console.log(`  Checking: ${url}`);

      const result = await checkUrl(url);
      checked++;

      if (checked % 20 === 0) {
        console.log(`  Progress: ${checked}/${urlMap.size} URLs checked...`);
      }

      if (!result.ok) {
        for (const article of articles) {
          brokenLinks.push({
            articleSlug: article.articleSlug,
            articleTitle: article.articleTitle,
            href: url,
            status: result.status,
            error: result.error,
          });
        }
      }
    },
    CONCURRENCY,
  );

  // Report
  console.log("\n=== Results ===");
  console.log(`URLs checked: ${checked}`);
  console.log(`Broken links: ${brokenLinks.length}`);

  if (brokenLinks.length > 0) {
    console.log("\nBroken links found:\n");
    for (const bl of brokenLinks) {
      console.log(`  [${bl.status}] ${bl.href}`);
      console.log(`    Article: ${bl.articleTitle} (/articles/${bl.articleSlug})`);
      if (bl.error) console.log(`    Error: ${bl.error}`);
      console.log();
    }
  } else {
    console.log("\nNo broken links found!");
  }
}

main().catch((err) => {
  console.error("Link check failed:", err);
  process.exit(1);
});
