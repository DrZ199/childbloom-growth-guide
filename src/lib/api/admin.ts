import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

// ---------------------------------------------------------------------------
// Admin: Get dashboard stats
// ---------------------------------------------------------------------------

export const getAdminDashboardStats = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const [articlesRes, subscribersRes, messagesRes] = await Promise.all([
      supabaseAdmin.from("articles").select("id", { count: "exact", head: true }),
      supabaseAdmin.from("newsletter_subscribers").select("id", { count: "exact", head: true }),
      supabaseAdmin
        .from("contact_messages")
        .select("id", { count: "exact", head: true })
        .eq("handled", false),
    ]);

    return {
      articleCount: articlesRes.count ?? 0,
      subscriberCount: subscribersRes.count ?? 0,
      unhandledMessages: messagesRes.count ?? 0,
    };
  });

// ---------------------------------------------------------------------------
// Admin: List all articles (including drafts)
// ---------------------------------------------------------------------------

const adminListArticlesInput = z.object({
  page: z.number().int().min(1).default(1),
  pageSize: z.number().int().min(1).max(50).default(20),
  status: z.enum(["draft", "published", "archived"]).optional(),
});

export const adminListArticles = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator(adminListArticlesInput)
  .handler(async ({ data }) => {
    const { page, pageSize, status } = data;
    const from = (page - 1) * pageSize;
    const to = from + pageSize - 1;

    let query = supabaseAdmin
      .from("articles")
      .select(
        `id, title, slug, status, published_at, created_at, updated_at, view_count, categories(name)`,
        { count: "exact" },
      )
      .order("updated_at", { ascending: false });

    if (status) {
      query = query.eq("status", status);
    }

    const { data: rows, count, error } = await query.range(from, to);
    if (error) return { data: [], total: 0, page, pageSize, hasMore: false };

    return {
      data: rows ?? [],
      total: count ?? 0,
      page,
      pageSize,
      hasMore: from + (rows?.length ?? 0) < (count ?? 0),
    };
  });

// ---------------------------------------------------------------------------
// Admin: Create article
// ---------------------------------------------------------------------------

const createArticleInput = z.object({
  title: z.string().min(1).max(500),
  slug: z.string().min(1).max(200),
  content: z.string().min(1),
  excerpt: z.string().max(1000).optional(),
  categoryId: z.string().uuid().optional(),
  seoTitle: z.string().max(200).optional(),
  seoDescription: z.string().max(500).optional(),
  status: z.enum(["draft", "published", "archived"]).default("draft"),
});

export const adminCreateArticle = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(createArticleInput)
  .handler(async ({ data, context }) => {
    const { error } = await supabaseAdmin.from("articles").insert({
      title: data.title,
      slug: data.slug,
      content: data.content,
      excerpt: data.excerpt ?? null,
      category_id: data.categoryId ?? null,
      seo_title: data.seoTitle ?? null,
      seo_description: data.seoDescription ?? null,
      status: data.status,
      author_id: context.userId,
    });

    if (error) {
      console.error("[admin/create-article]", error);
      return { error: error.message };
    }
    return { success: true };
  });

// ---------------------------------------------------------------------------
// Admin: Update article
// ---------------------------------------------------------------------------

const updateArticleInput = z.object({
  id: z.string().uuid(),
  title: z.string().min(1).max(500).optional(),
  slug: z.string().min(1).max(200).optional(),
  content: z.string().optional(),
  excerpt: z.string().max(1000).optional().nullable(),
  categoryId: z.string().uuid().optional().nullable(),
  seoTitle: z.string().max(200).optional().nullable(),
  seoDescription: z.string().max(500).optional().nullable(),
  status: z.enum(["draft", "published", "archived"]).optional(),
  isFeatured: z.boolean().optional(),
  isPillar: z.boolean().optional(),
});

export const adminUpdateArticle = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(updateArticleInput)
  .handler(async ({ data }) => {
    const updateData: Record<string, unknown> = { updated_at: new Date().toISOString() };
    if (data.title !== undefined) updateData.title = data.title;
    if (data.slug !== undefined) updateData.slug = data.slug;
    if (data.content !== undefined) updateData.content = data.content;
    if (data.excerpt !== undefined) updateData.excerpt = data.excerpt;
    if (data.categoryId !== undefined) updateData.category_id = data.categoryId;
    if (data.seoTitle !== undefined) updateData.seo_title = data.seoTitle;
    if (data.seoDescription !== undefined) updateData.seo_description = data.seoDescription;
    if (data.status !== undefined) updateData.status = data.status;
    if (data.isFeatured !== undefined) updateData.is_featured = data.isFeatured;
    if (data.isPillar !== undefined) updateData.is_pillar = data.isPillar;

    const { error } = await supabaseAdmin
      .from("articles")
      .update(updateData)
      .eq("id", data.id);

    if (error) {
      console.error("[admin/update-article]", error);
      return { error: error.message };
    }
    return { success: true };
  });

// ---------------------------------------------------------------------------
// Admin: Delete article
// ---------------------------------------------------------------------------

export const adminDeleteArticle = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(z.object({ id: z.string().uuid() }))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("articles").delete().eq("id", data.id);
    if (error) return { error: error.message };
    return { success: true };
  });

// ---------------------------------------------------------------------------
// Admin: CRUD Categories
// ---------------------------------------------------------------------------

export const adminListCategories = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const { data, error } = await supabaseAdmin
      .from("categories")
      .select("*")
      .order("sort_order", { ascending: true });
    if (error) return [];
    return data ?? [];
  });

const createCategoryInput = z.object({
  name: z.string().min(1).max(200),
  slug: z.string().min(1).max(200),
  description: z.string().max(1000).optional(),
});

export const adminCreateCategory = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(createCategoryInput)
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.from("categories").insert({
      name: data.name,
      slug: data.slug,
      description: data.description ?? null,
    });
    if (error) return { error: error.message };
    return { success: true };
  });

// ---------------------------------------------------------------------------
// Admin: List subscribers
// ---------------------------------------------------------------------------

export const adminListSubscribers = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const { data, error } = await supabaseAdmin
      .from("newsletter_subscribers")
      .select("id, email, confirmed, source, created_at, unsubscribed_at")
      .order("created_at", { ascending: false })
      .limit(1000);
    if (error) return [];
    return data ?? [];
  });

// ---------------------------------------------------------------------------
// Admin: List contact messages
// ---------------------------------------------------------------------------

export const adminListMessages = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const { data, error } = await supabaseAdmin
      .from("contact_messages")
      .select("*")
      .order("created_at", { ascending: false })
      .limit(200);
    if (error) return [];
    return data ?? [];
  });

export const adminMarkMessageHandled = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(z.object({ id: z.string().uuid(), handled: z.boolean() }))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from("contact_messages")
      .update({ handled: data.handled })
      .eq("id", data.id);
    if (error) return { error: error.message };
    return { success: true };
  });
