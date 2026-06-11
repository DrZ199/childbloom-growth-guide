import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

// ---------------------------------------------------------------------------
// Analytics API — powers the admin analytics dashboard
// ---------------------------------------------------------------------------

export interface AnalyticsOverview {
  totalArticles: number;
  publishedArticles: number;
  draftArticles: number;
  totalSubscribers: number;
  confirmedSubscribers: number;
  totalPageViews: number;
  totalMessages: number;
  unhandledMessages: number;
  totalAffiliateClicks: number;
}

export interface TopArticle {
  id: string;
  title: string;
  slug: string;
  view_count: number;
  published_at: string | null;
}

export interface SubscriberGrowth {
  date: string;
  count: number;
}

export interface SearchQueryStat {
  query: string;
  count: number;
}

// ---------------------------------------------------------------------------
// GET /api/analytics/overview
// ---------------------------------------------------------------------------

export const getAnalyticsOverview = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async (): Promise<AnalyticsOverview> => {
    const [
      totalArticlesRes,
      publishedArticlesRes,
      draftArticlesRes,
      totalSubscribersRes,
      confirmedSubscribersRes,
      pageViewsRes,
      messagesRes,
      unhandledMessagesRes,
      affiliateClicksRes,
    ] = await Promise.all([
      supabaseAdmin.from("articles").select("id", { count: "exact", head: true }),
      supabaseAdmin
        .from("articles")
        .select("id", { count: "exact", head: true })
        .eq("status", "published"),
      supabaseAdmin
        .from("articles")
        .select("id", { count: "exact", head: true })
        .eq("status", "draft"),
      supabaseAdmin.from("newsletter_subscribers").select("id", { count: "exact", head: true }),
      supabaseAdmin
        .from("newsletter_subscribers")
        .select("id", { count: "exact", head: true })
        .eq("confirmed", true),
      supabaseAdmin.from("articles").select("view_count"),
      supabaseAdmin.from("contact_messages").select("id", { count: "exact", head: true }),
      supabaseAdmin
        .from("contact_messages")
        .select("id", { count: "exact", head: true })
        .eq("handled", false),
      supabaseAdmin.from("affiliate_products" as never).select("click_count" as never),
    ]);

    const totalPageViews = (pageViewsRes.data ?? []).reduce(
      (sum: number, row: Record<string, unknown>) => sum + ((row.view_count as number) ?? 0),
      0,
    );

    const totalAffiliateClicks = (affiliateClicksRes.data ?? []).reduce(
      (sum: number, row: Record<string, unknown>) => sum + ((row.click_count as number) ?? 0),
      0,
    );

    return {
      totalArticles: totalArticlesRes.count ?? 0,
      publishedArticles: publishedArticlesRes.count ?? 0,
      draftArticles: draftArticlesRes.count ?? 0,
      totalSubscribers: totalSubscribersRes.count ?? 0,
      confirmedSubscribers: confirmedSubscribersRes.count ?? 0,
      totalPageViews,
      totalMessages: messagesRes.count ?? 0,
      unhandledMessages: unhandledMessagesRes.count ?? 0,
      totalAffiliateClicks,
    };
  });

// ---------------------------------------------------------------------------
// GET /api/analytics/top-articles
// ---------------------------------------------------------------------------

export const getTopArticles = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator(
    z.object({
      limit: z.number().int().min(1).max(50).default(10),
    }),
  )
  .handler(async ({ data }): Promise<TopArticle[]> => {
    const { data: rows, error } = await supabaseAdmin
      .from("articles")
      .select("id, title, slug, view_count, published_at")
      .eq("status", "published")
      .order("view_count", { ascending: false })
      .limit(data.limit);

    if (error || !rows) return [];

    return rows.map((r: Record<string, unknown>) => ({
      id: r.id as string,
      title: r.title as string,
      slug: r.slug as string,
      view_count: r.view_count as number,
      published_at: r.published_at as string | null,
    }));
  });

// ---------------------------------------------------------------------------
// GET /api/analytics/subscriber-growth
// ---------------------------------------------------------------------------

export const getSubscriberGrowth = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator(
    z.object({
      days: z.number().int().min(1).max(365).default(30),
    }),
  )
  .handler(async ({ data }): Promise<SubscriberGrowth[]> => {
    const since = new Date();
    since.setDate(since.getDate() - data.days);

    const { data: rows, error } = await supabaseAdmin
      .from("newsletter_subscribers")
      .select("created_at")
      .gte("created_at", since.toISOString())
      .order("created_at", { ascending: true });

    if (error || !rows) return [];

    // Group by date
    const dayMap = new Map<string, number>();
    for (const row of rows) {
      const date = (row.created_at as string).split("T")[0]!;
      dayMap.set(date, (dayMap.get(date) ?? 0) + 1);
    }

    return Array.from(dayMap.entries())
      .map(([date, count]) => ({ date, count }))
      .sort((a, b) => a.date.localeCompare(b.date));
  });

// ---------------------------------------------------------------------------
// GET /api/analytics/category-performance
// ---------------------------------------------------------------------------

export const getCategoryPerformance = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const { data: rows, error } = await supabaseAdmin
      .from("articles")
      .select("category_id, view_count, status")
      .eq("status", "published");

    if (error || !rows) return [];

    const { data: categories } = await supabaseAdmin.from("categories").select("id, name, slug");

    const categoryMap = new Map<string, string>();
    for (const c of categories ?? []) {
      categoryMap.set(c.id as string, c.name as string);
    }

    const perfMap = new Map<string, { views: number; count: number }>();
    for (const row of rows as Array<Record<string, unknown>>) {
      const catId = row.category_id as string;
      const views = (row.view_count as number) ?? 0;
      const existing = perfMap.get(catId) ?? { views: 0, count: 0 };
      perfMap.set(catId, { views: existing.views + views, count: existing.count + 1 });
    }

    return Array.from(perfMap.entries()).map(([catId, perf]) => ({
      category_name: categoryMap.get(catId) ?? "Uncategorized",
      article_count: perf.count,
      total_views: perf.views,
      avg_views: perf.count > 0 ? Math.round(perf.views / perf.count) : 0,
    }));
  });

// ---------------------------------------------------------------------------
// GET /api/analytics/affiliate-clicks
// ---------------------------------------------------------------------------

export const getAffiliateClickStats = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const { data: rows, error } = await supabaseAdmin
      .from("affiliate_products" as never)
      .select("id, name, slug, click_count" as never)
      .order("click_count" as never, { ascending: false })
      .limit(20);

    if (error || !rows) return [];

    return (rows as Array<Record<string, unknown>>).map((r) => ({
      id: r.id as string,
      name: r.name as string,
      slug: r.slug as string,
      click_count: r.click_count as number,
    }));
  });
