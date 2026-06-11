import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import type { ArticleSummary, ArticleDetail, PaginatedResponse } from "@/types/article";

// ---------------------------------------------------------------------------
// GET /api/articles — list with pagination, filtering, sorting
// ---------------------------------------------------------------------------

const listArticlesInput = z.object({
  page: z.number().int().min(1).default(1),
  pageSize: z.number().int().min(1).max(50).default(12),
  category: z.string().optional(),
  sort: z.enum(["newest", "popular", "featured"]).default("newest"),
});

export const listArticles = createServerFn({ method: "GET" })
  .validator(listArticlesInput)
  .handler(async ({ data }) => {
    const { page, pageSize, category, sort } = data;
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    let query = supabaseAdmin
      .from("articles")
      .select(
        `id, title, slug, excerpt, cover_image_url, cover_image_alt, reading_minutes,
         published_at, is_featured, is_pillar, view_count, seo_title, seo_description,
         categories!inner(name, slug)`,
        { count: "exact" },
      )
      .eq("status", "published");

    if (category) {
      query = query.eq("categories.slug", category);
    }

    switch (sort) {
      case "popular":
        query = query.order("view_count", { ascending: false });
        break;
      case "featured":
        query = query.eq("is_featured", true).order("published_at", { ascending: false });
        break;
      default:
        query = query.order("published_at", { ascending: false });
    }

    const { data: rows, count, error } = await query.range(from, to);
    if (error) {
      console.error("[api/articles] query error:", error);
      return {
        data: [],
        total: 0,
        page,
        pageSize,
        hasMore: false,
      } as PaginatedResponse<ArticleSummary>;
    }

    const articles: ArticleSummary[] = (rows ?? []).map((r: Record<string, unknown>) => ({
      id: r.id as string,
      title: r.title as string,
      slug: r.slug as string,
      excerpt: r.excerpt as string | null,
      cover_image_url: r.cover_image_url as string | null,
      cover_image_alt: r.cover_image_alt as string | null,
      reading_minutes: r.reading_minutes as number | null,
      published_at: r.published_at as string | null,
      category_name: (r.categories as Record<string, unknown>)?.name as string | undefined,
      category_slug: (r.categories as Record<string, unknown>)?.slug as string | undefined,
      is_featured: r.is_featured as boolean,
      is_pillar: r.is_pillar as boolean,
      view_count: r.view_count as number,
      seo_title: r.seo_title as string | null,
      seo_description: r.seo_description as string | null,
    }));

    return {
      data: articles,
      total: count ?? 0,
      page,
      pageSize,
      hasMore: from + articles.length < (count ?? 0),
    } as PaginatedResponse<ArticleSummary>;
  });

// ---------------------------------------------------------------------------
// GET /api/articles/:slug — single article with relations
// ---------------------------------------------------------------------------

const getArticleInput = z.object({
  slug: z.string().min(1),
});

export const getArticleBySlug = createServerFn({ method: "GET" })
  .validator(getArticleInput)
  .handler(async ({ data }): Promise<ArticleDetail | null> => {
    const { slug } = data;

    const { data: row, error } = await supabaseAdmin
      .from("articles")
      .select(
        `id, title, slug, excerpt, content, content_html, cover_image_url, cover_image_alt,
         reading_minutes, published_at, is_featured, is_pillar, view_count, seo_title,
         seo_description, faq, og_image_url, canonical_url, medically_reviewed_by,
         medically_reviewed_at,
         categories(name, slug),
         profiles:author_id(display_name, slug, credentials),
         article_tags(tag_id, tags(name, slug))`,
      )
      .eq("slug", slug)
      .eq("status", "published")
      .maybeSingle();

    if (error || !row) {
      console.error("[api/article] not found or error:", error);
      return null;
    }

    const r = row as Record<string, unknown>;
    const cat = r.categories as Record<string, unknown> | null;
    const author = r.profiles as Record<string, unknown> | null;
    const tagRows = (r.article_tags as Array<Record<string, unknown>>) ?? [];

    return {
      id: r.id as string,
      title: r.title as string,
      slug: r.slug as string,
      excerpt: r.excerpt as string | null,
      content: r.content as string,
      content_html: (r.content_html as string) ?? null,
      cover_image_url: r.cover_image_url as string | null,
      cover_image_alt: r.cover_image_alt as string | null,
      reading_minutes: r.reading_minutes as number | null,
      published_at: r.published_at as string | null,
      category_name: cat?.name as string | undefined,
      category_slug: cat?.slug as string | undefined,
      tags: tagRows.map((t) => (t.tags as Record<string, unknown>)?.name as string).filter(Boolean),
      is_featured: r.is_featured as boolean,
      is_pillar: r.is_pillar as boolean,
      view_count: r.view_count as number,
      seo_title: r.seo_title as string | null,
      seo_description: r.seo_description as string | null,
      author_name: author?.display_name as string | undefined,
      author_slug: author?.slug as string | undefined,
      author_credentials: author?.credentials as string | undefined,
      faq: r.faq as Array<{ question: string; answer: string }> | null,
      og_image_url: r.og_image_url as string | null,
      canonical_url: r.canonical_url as string | null,
      medically_reviewed_by: r.medically_reviewed_by as string | null,
      medically_reviewed_at: r.medically_reviewed_at as string | null,
    };
  });

// ---------------------------------------------------------------------------
// GET /api/popular — most viewed articles
// ---------------------------------------------------------------------------

export const getPopularArticles = createServerFn({ method: "GET" })
  .validator(z.object({ limit: z.number().int().min(1).max(20).default(6) }))
  .handler(async ({ data }): Promise<ArticleSummary[]> => {
    const { data: rows, error } = await supabaseAdmin
      .from("articles")
      .select(
        `id, title, slug, excerpt, cover_image_url, reading_minutes, published_at,
         is_featured, is_pillar, view_count, seo_title, seo_description,
         categories(name, slug)`,
      )
      .eq("status", "published")
      .order("view_count", { ascending: false })
      .limit(data.limit);

    if (error || !rows) return [];

    return rows.map((r: Record<string, unknown>) => ({
      id: r.id as string,
      title: r.title as string,
      slug: r.slug as string,
      excerpt: r.excerpt as string | null,
      cover_image_url: r.cover_image_url as string | null,
      cover_image_alt: null,
      reading_minutes: r.reading_minutes as number | null,
      published_at: r.published_at as string | null,
      category_name: (r.categories as Record<string, unknown>)?.name as string | undefined,
      category_slug: (r.categories as Record<string, unknown>)?.slug as string | undefined,
      is_featured: r.is_featured as boolean,
      is_pillar: r.is_pillar as boolean,
      view_count: r.view_count as number,
      seo_title: r.seo_title as string | null,
      seo_description: r.seo_description as string | null,
    }));
  });

// ---------------------------------------------------------------------------
// GET /api/featured — featured/pillar articles
// ---------------------------------------------------------------------------

export const getFeaturedArticles = createServerFn({ method: "GET" }).handler(
  async (): Promise<ArticleSummary[]> => {
    const { data: rows, error } = await supabaseAdmin
      .from("articles")
      .select(
        `id, title, slug, excerpt, cover_image_url, reading_minutes, published_at,
         is_featured, is_pillar, view_count, seo_title, seo_description,
         categories(name, slug)`,
      )
      .eq("status", "published")
      .or("is_featured.eq.true,is_pillar.eq.true")
      .order("published_at", { ascending: false })
      .limit(6);

    if (error || !rows) return [];

    return rows.map((r: Record<string, unknown>) => ({
      id: r.id as string,
      title: r.title as string,
      slug: r.slug as string,
      excerpt: r.excerpt as string | null,
      cover_image_url: r.cover_image_url as string | null,
      cover_image_alt: null,
      reading_minutes: r.reading_minutes as number | null,
      published_at: r.published_at as string | null,
      category_name: (r.categories as Record<string, unknown>)?.name as string | undefined,
      category_slug: (r.categories as Record<string, unknown>)?.slug as string | undefined,
      is_featured: r.is_featured as boolean,
      is_pillar: r.is_pillar as boolean,
      view_count: r.view_count as number,
      seo_title: r.seo_title as string | null,
      seo_description: r.seo_description as string | null,
    }));
  },
);

// ---------------------------------------------------------------------------
// Related articles engine — match by category, then tags
// ---------------------------------------------------------------------------

const relatedArticlesInput = z.object({
  articleId: z.string().uuid(),
  categorySlug: z.string().optional(),
  limit: z.number().int().min(1).max(6).default(4),
});

export const getRelatedArticles = createServerFn({ method: "GET" })
  .validator(relatedArticlesInput)
  .handler(async ({ data }): Promise<ArticleSummary[]> => {
    const { articleId, categorySlug, limit } = data;

    let query = supabaseAdmin
      .from("articles")
      .select(
        `id, title, slug, excerpt, cover_image_url, reading_minutes, published_at,
         is_featured, is_pillar, view_count, seo_title, seo_description,
         categories(name, slug)`,
      )
      .eq("status", "published")
      .neq("id", articleId)
      .order("published_at", { ascending: false })
      .limit(limit);

    if (categorySlug) {
      query = query.eq("categories.slug", categorySlug);
    }

    const { data: rows } = await query;
    if (!rows) return [];

    return rows.map((r: Record<string, unknown>) => ({
      id: r.id as string,
      title: r.title as string,
      slug: r.slug as string,
      excerpt: r.excerpt as string | null,
      cover_image_url: r.cover_image_url as string | null,
      cover_image_alt: null,
      reading_minutes: r.reading_minutes as number | null,
      published_at: r.published_at as string | null,
      category_name: (r.categories as Record<string, unknown>)?.name as string | undefined,
      category_slug: (r.categories as Record<string, unknown>)?.slug as string | undefined,
      is_featured: r.is_featured as boolean,
      is_pillar: r.is_pillar as boolean,
      view_count: r.view_count as number,
      seo_title: r.seo_title as string | null,
      seo_description: r.seo_description as string | null,
    }));
  });
