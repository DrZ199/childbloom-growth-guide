/**
 * SEO helper utilities used across the app.
 */

/**
 * Generate SEO metadata for TanStack Router head function.
 */
export function seo(options: {
  title: string;
  description: string;
  url: string;
  type?: string;
  publishedTime?: string;
  modifiedTime?: string;
  author?: string;
  image?: string;
}) {
  const meta = [
    { name: 'description', content: options.description },
    { property: 'og:title', content: options.title },
    { property: 'og:description', content: options.description },
    { property: 'og:url', content: options.url },
    { property: 'og:type', content: options.type || 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: options.title },
    { name: 'twitter:description', content: options.description },
  ];

  if (options.image) {
    meta.push({ property: 'og:image', content: options.image });
    meta.push({ name: 'twitter:image', content: options.image });
  }

  if (options.publishedTime) {
    meta.push({ property: 'article:published_time', content: options.publishedTime });
  }

  if (options.modifiedTime) {
    meta.push({ property: 'article:modified_time', content: options.modifiedTime });
  }

  if (options.author) {
    meta.push({ property: 'article:author', content: options.author });
  }

  return {
    title: options.title,
    meta,
    link: [{ rel: 'canonical', href: options.url }],
  };
}

/**
 * Generate a URL-safe slug from a title string.
 * Lowercases, strips non-alphanumeric characters (except hyphens/spaces),
 * collapses whitespace and hyphens to single hyphens, trims hyphens.
 */
export function slugify(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // strip diacritics
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/[\s-]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

/**
 * Calculate approximate reading time in minutes from word count.
 * Assumes average reading speed of 200 WPM.
 */
export function calculateReadingTime(text: string, wordsPerMinute = 200): number {
  const words = text.trim().split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / wordsPerMinute));
}

/**
 * Format a date string for display in articles.
 */
export function formatDate(isoDate: string): string {
  const date = new Date(isoDate);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

/**
 * Format a date for ISO use in structured data (YYYY-MM-DD).
 */
export function formatDateISO(isoDate: string): string {
  return new Date(isoDate).toISOString().split("T")[0] ?? "";
}

/**
 * Generate a meta description by truncating text to a safe length.
 */
export function truncateMetaDescription(text: string, maxLength = 155): string {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return (lastSpace > 0 ? truncated.slice(0, lastSpace) : truncated) + "…";
}

/**
 * Build an absolute URL from a base and path.
 */
export function absoluteUrl(base: string, path: string): string {
  const b = base.replace(/\/+$/, "");
  const p = path.startsWith("/") ? path : `/${path}`;
  return `${b}${p}`;
}

/**
 * Generate Organization JSON-LD structured data.
 */
export function buildOrganizationSchema(siteUrl: string, siteName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    sameAs: [
      "https://www.pinterest.com/childbloom",
      "https://www.facebook.com/childbloom",
    ],
  };
}

/**
 * Generate WebSite JSON-LD with SearchAction for homepage.
 */
export function buildWebsiteSearchSchema(siteUrl: string, siteName: string) {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteName,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };
}

/**
 * Generate Article JSON-LD structured data.
 */
export function buildArticleSchema(params: {
  title: string;
  slug: string;
  excerpt: string | null;
  coverImageUrl: string | null;
  publishedAt: string | null;
  authorName?: string;
  siteUrl: string;
  siteName: string;
  categoryName?: string;
  faq?: Array<{ question: string; answer: string }> | null;
}) {
  const url = absoluteUrl(params.siteUrl, `/articles/${params.slug}`);
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: params.title,
    description: params.excerpt ?? "",
    url,
    image: params.coverImageUrl ?? undefined,
    datePublished: params.publishedAt ?? undefined,
    author: params.authorName
      ? { "@type": "Person", name: params.authorName }
      : undefined,
    publisher: {
      "@type": "Organization",
      name: params.siteName,
      logo: { "@type": "ImageObject", url: `${params.siteUrl}/logo.png` },
    },
    articleSection: params.categoryName ?? undefined,
  };

  return schema;
}

/**
 * Generate FAQPage JSON-LD structured data.
 */
export function buildFaqSchema(
  faq: Array<{ question: string; answer: string }>,
  pageUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

/**
 * Generate ItemList JSON-LD for article listing pages.
 */
export function buildItemListSchema(
  items: Array<{ title: string; slug: string; position: number }>,
  siteUrl: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: items.map((item) => ({
      "@type": "ListItem",
      position: item.position,
      name: item.title,
      url: absoluteUrl(siteUrl, `/articles/${item.slug}`),
    })),
  };
}
