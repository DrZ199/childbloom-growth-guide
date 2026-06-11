/**
 * Content Migration Script
 *
 * Migrates hardcoded articles from src/lib/site-data.ts into Supabase.
 * Maintains backward compatibility — the static site-data.ts file remains
 * intact so the app continues to work during migration.
 *
 * Usage:
 *   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npx tsx scripts/migrate-site-data.ts
 *   SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npm run migrate:content
 *
 * Options (environment variables):
 *   DRY_RUN=true   — Preview what would be inserted without writing
 *   FORCE=true     — Overwrite existing articles with matching slugs
 */

import { createClient } from "@supabase/supabase-js";
import { articles, categories } from "../src/lib/site-data";

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;
const DRY_RUN = process.env.DRY_RUN === "true";
const FORCE = process.env.FORCE === "true";

if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
  console.error("Error: SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY are required.");
  console.error(
    "Usage: SUPABASE_URL=... SUPABASE_SERVICE_ROLE_KEY=... npx tsx scripts/migrate-site-data.ts",
  );
  process.exit(1);
}

const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, {
  auth: { persistSession: false, autoRefreshToken: false },
});

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

const CATEGORY_MAP: Record<string, string> = {
  "Child Health": "child-health",
  Parenting: "parenting",
  "Newborn Care": "newborn-care",
  Nutrition: "nutrition",
  Development: "development",
  "Product Reviews": "product-reviews",
};

function slugToCategoryId(slug: string, categoryMap: Record<string, string>): string | null {
  // We'll fetch actual UUIDs from the DB at runtime
  return slug;
}

/**
 * Parse HTML content to extract headings for TOC and calculate reading time.
 */
function extractReadingMinutes(html: string): number {
  const text = html.replace(/<[^>]*>/g, " ").trim();
  const wordCount = text.split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(wordCount / 200));
}

/**
 * Parse FAQ section from HTML if present.
 */
function extractFAQ(html: string): Array<{ question: string; answer: string }> | null {
  const faqMatch = html.match(/<h2>FAQ<\/h2>\s*([\s\S]*?)(?:<h2>|$)/i);
  if (!faqMatch) return null;

  // Extract Q&A pairs — look for patterns like <p>Q: ... A: ...</p>
  const faqHtml = faqMatch[1] ?? "";
  const paragraphs = faqHtml.match(/<p>([\s\S]*?)<\/p>/gi);
  if (!paragraphs || paragraphs.length === 0) return null;

  const faq: Array<{ question: string; answer: string }> = [];
  for (const p of paragraphs) {
    const text = p.replace(/<\/?p>/gi, "").trim();
    // Try to split into question and answer
    const qMatch = text.match(/^(Q:?\s*)([\s\S]*?)(?:\s*A:?\s*)([\s\S]*)$/i);
    if (qMatch) {
      faq.push({ question: qMatch[2]!.trim(), answer: qMatch[3]!.trim() });
    }
  }

  return faq.length > 0 ? faq : null;
}

// ---------------------------------------------------------------------------
// Migration
// ---------------------------------------------------------------------------

interface MigrationResult {
  slug: string;
  status: "inserted" | "updated" | "skipped" | "error";
  error?: string;
}

async function migrateCategories(): Promise<Map<string, string>> {
  console.log("\n--- Migrating Categories ---");
  const idMap = new Map<string, string>();

  for (const cat of categories) {
    const { data: existing } = await supabase
      .from("categories")
      .select("id")
      .eq("slug", cat.slug)
      .maybeSingle();

    if (existing) {
      idMap.set(cat.name, existing.id);
      console.log(`  [skip] ${cat.name} (already exists)`);
      continue;
    }

    if (DRY_RUN) {
      console.log(`  [dry-run] Would insert category: ${cat.name}`);
      idMap.set(cat.name, `dry-run-${cat.slug}`);
      continue;
    }

    const { data: inserted, error } = await supabase
      .from("categories")
      .insert({
        name: cat.name,
        slug: cat.slug,
        description: cat.description,
      })
      .select("id")
      .single();

    if (error) {
      console.error(`  [error] ${cat.name}: ${error.message}`);
      continue;
    }

    idMap.set(cat.name, inserted.id);
    console.log(`  [ok] ${cat.name}`);
  }

  return idMap;
}

async function migrateArticles(categoryIds: Map<string, string>): Promise<MigrationResult[]> {
  console.log("\n--- Migrating Articles ---");
  const results: MigrationResult[] = [];

  for (const article of articles) {
    // Check if article already exists
    const { data: existing } = await supabase
      .from("articles")
      .select("id, status")
      .eq("slug", article.slug)
      .maybeSingle();

    if (existing && !FORCE) {
      results.push({ slug: article.slug, status: "skipped" });
      console.log(`  [skip] ${article.slug} (already exists, use FORCE=true to overwrite)`);
      continue;
    }

    const readingMinutes = extractReadingMinutes(article.content);
    const faq = extractFAQ(article.content);
    const categoryId = categoryIds.get(article.category) ?? null;

    const record = {
      title: article.title,
      slug: article.slug,
      excerpt: article.excerpt,
      content: article.content,
      content_html: article.content,
      reading_minutes: readingMinutes,
      published_at: article.publishedAt,
      seo_title: article.seoTitle,
      seo_description: article.metaDescription,
      category_id: categoryId,
      status: "published" as const,
      is_featured: false,
      is_pillar: false,
      faq,
      view_count: 0,
    };

    if (DRY_RUN) {
      console.log(`  [dry-run] Would ${existing ? "update" : "insert"}: ${article.slug}`);
      results.push({ slug: article.slug, status: existing ? "updated" : "inserted" });
      continue;
    }

    if (existing && FORCE) {
      const { error } = await supabase.from("articles").update(record).eq("slug", article.slug);

      if (error) {
        results.push({ slug: article.slug, status: "error", error: error.message });
        console.error(`  [error] ${article.slug}: ${error.message}`);
      } else {
        results.push({ slug: article.slug, status: "updated" });
        console.log(`  [updated] ${article.slug}`);
      }
    } else {
      const { error } = await supabase.from("articles").insert(record);

      if (error) {
        results.push({ slug: article.slug, status: "error", error: error.message });
        console.error(`  [error] ${article.slug}: ${error.message}`);
      } else {
        results.push({ slug: article.slug, status: "inserted" });
        console.log(`  [inserted] ${article.slug}`);
      }
    }
  }

  return results;
}

async function main() {
  console.log("=== ChildBloom Content Migration ===");
  console.log(`Target: ${SUPABASE_URL}`);
  console.log(`Dry run: ${DRY_RUN}`);
  console.log(`Force overwrite: ${FORCE}`);
  console.log(`Articles to migrate: ${articles.length}`);
  console.log(`Categories to migrate: ${categories.length}`);

  const categoryIds = await migrateCategories();
  const results = await migrateArticles(categoryIds);

  // Summary
  console.log("\n--- Summary ---");
  const counts = { inserted: 0, updated: 0, skipped: 0, error: 0 };
  for (const r of results) counts[r.status]++;
  console.log(`  Inserted: ${counts.inserted}`);
  console.log(`  Updated:  ${counts.updated}`);
  console.log(`  Skipped:  ${counts.skipped}`);
  console.log(`  Errors:   ${counts.error}`);

  if (counts.error > 0) {
    process.exit(1);
  }
}

main().catch((err) => {
  console.error("Migration failed:", err);
  process.exit(1);
});
