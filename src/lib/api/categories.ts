import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import type { CategorySummary, CategoryDetail, ArticleSummary } from "@/types/article";

// ---------------------------------------------------------------------------
// GET /api/categories — list with article counts
// ---------------------------------------------------------------------------

export const listCategories = createServerFn({ method: "GET" }).handler(
  async (): Promise<CategorySummary[]> => {
    const { data: categories, error } = await supabaseAdmin
      .from("categories")
      .select("id, name, slug, description, icon, color")
      .order("sort_order", { ascending: true });

    if (error || !categories) return [];

    // Fetch article counts per category
    const { data: counts } = await supabaseAdmin
      .from("articles")
      .select("category_id")
      .eq("status", "published");

    const countMap = new Map<string, number>();
    for (const a of counts ?? []) {
      const cid = a.category_id as string;
      countMap.set(cid, (countMap.get(cid) ?? 0) + 1);
    }

    return categories.map((c: Record<string, unknown>) => ({
      id: c.id as string,
      name: c.name as string,
      slug: c.slug as string,
      description: c.description as string | null,
      icon: c.icon as string | null,
      color: c.color as string | null,
      article_count: countMap.get(c.id as string) ?? 0,
    }));
  },
);

// ---------------------------------------------------------------------------
// GET /api/categories/:slug — category with articles
// ---------------------------------------------------------------------------

const getCategoryInput = z.object({
  slug: z.string().min(1),
  page: z.number().int().min(1).default(1),
  pageSize: z.number().int().min(1).max(50).default(12),
});

export const getCategoryBySlug = createServerFn({ method: "GET" })
  .validator(getCategoryInput)
  .handler(async ({ data }): Promise<CategoryDetail | null> => {
    const { slug, page, pageSize } = data;
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    const { data: cat, error } = await supabaseAdmin
      .from("categories")
      .select("id, name, slug, description, icon, color, seo_title, seo_description")
      .eq("slug", slug)
      .maybeSingle();

    if (error || !cat) return null;
    const c = cat as Record<string, unknown>;

    // Fetch articles for this category
    const { data: articles, count } = await supabaseAdmin
      .from("articles")
      .select(
        `id, title, slug, excerpt, cover_image_url, reading_minutes, published_at,
         is_featured, is_pillar, view_count, seo_title, seo_description`,
        { count: "exact" },
      )
      .eq("category_id", c.id as string)
      .eq("status", "published")
      .order("published_at", { ascending: false })
      .range(from, to);

    const articleSummaries: ArticleSummary[] = (articles ?? []).map(
      (a: Record<string, unknown>) => ({
        id: a.id as string,
        title: a.title as string,
        slug: a.slug as string,
        excerpt: a.excerpt as string | null,
        cover_image_url: a.cover_image_url as string | null,
        cover_image_alt: null,
        reading_minutes: a.reading_minutes as number | null,
        published_at: a.published_at as string | null,
        category_name: c.name as string,
        category_slug: c.slug as string,
        is_featured: a.is_featured as boolean,
        is_pillar: a.is_pillar as boolean,
        view_count: a.view_count as number,
        seo_title: a.seo_title as string | null,
        seo_description: a.seo_description as string | null,
      }),
    );

    return {
      id: c.id as string,
      name: c.name as string,
      slug: c.slug as string,
      description: c.description as string | null,
      icon: c.icon as string | null,
      color: c.color as string | null,
      seo_title: c.seo_title as string | null,
      seo_description: c.seo_description as string | null,
      article_count: count ?? 0,
      articles: articleSummaries,
    };
  });
