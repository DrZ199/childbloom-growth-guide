import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { checkRateLimit, RATE_LIMIT_SEARCH } from "@/lib/rate-limiter";
import type { SearchResult } from "@/types/article";

const searchInput = z.object({
  q: z.string().min(1).max(200),
  limit: z.number().int().min(1).max(50).default(20),
});

export const searchArticles = createServerFn({ method: "GET" })
  .validator(searchInput)
  .handler(async ({ data }): Promise<SearchResult[]> => {
    const { q, limit } = data;

    // Rate limit check
    const ipLimit = checkRateLimit("search:server", RATE_LIMIT_SEARCH);
    if (!ipLimit.allowed) {
      return [];
    }

    // Use Supabase full-text search via search_tsv tsvector column
    const { data: rows, error } = await supabaseAdmin.rpc("search_articles_fts" as never, {
      search_query: q,
      result_limit: limit,
    } as never);

    // If RPC doesn't exist, fall back to ilike search
    if (error || !rows) {
      const { data: fallbackRows, error: fallbackError } = await supabaseAdmin
        .from("articles")
        .select(
          `id, title, slug, excerpt, categories(name)`,
        )
        .eq("status", "published")
        .or(`title.ilike.%${q}%,excerpt.ilike.%${q}%`)
        .order("published_at", { ascending: false })
        .limit(limit);

      if (fallbackError || !fallbackRows) return [];

      return fallbackRows.map((r: Record<string, unknown>) => ({
        id: r.id as string,
        title: r.title as string,
        slug: r.slug as string,
        excerpt: r.excerpt as string | null,
        category_name: (r.categories as Record<string, unknown>)?.name as string | undefined,
        rank: 1,
      }));
    }

    return (rows as Array<Record<string, unknown>>).map((r) => ({
      id: r.id as string,
      title: r.title as string,
      slug: r.slug as string,
      excerpt: r.excerpt as string | null,
      category_name: r.category_name as string | undefined,
      rank: (r.rank as number) ?? 1,
    }));
  });
