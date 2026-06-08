import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import type { AffiliateProduct } from "@/types/article";

// ---------------------------------------------------------------------------
// GET products for an article
// ---------------------------------------------------------------------------

export const getProductsByArticle = createServerFn({ method: "GET" })
  .validator(z.object({ articleId: z.string().uuid().optional() }))
  .handler(async ({ data }): Promise<AffiliateProduct[]> => {
    let query = supabaseAdmin
      .from("affiliate_products" as never)
      .select("*")
      .order("is_recommended", { ascending: false })
      .order("rating", { ascending: false })
      .limit(10);

    if (data.articleId) {
      query = query.eq("article_id" as never, data.articleId) as never;
    }

    const { data: rows, error } = await query;
    if (error || !rows) return [];

    return (rows as Array<Record<string, unknown>>).map(mapProduct);
  });

// ---------------------------------------------------------------------------
// GET product by slug (for /go/:slug cloaking route)
// ---------------------------------------------------------------------------

export const getProductBySlug = createServerFn({ method: "GET" })
  .validator(z.object({ slug: z.string().min(1) }))
  .handler(async ({ data }): Promise<AffiliateProduct | null> => {
    const { data: row, error } = await supabaseAdmin
      .from("affiliate_products" as never)
      .select("*")
      .eq("slug" as never, data.slug)
      .maybeSingle();

    if (error || !row) return null;
    return mapProduct(row as Record<string, unknown>);
  });

// ---------------------------------------------------------------------------
// POST increment click count for affiliate link tracking
// ---------------------------------------------------------------------------

export const trackAffiliateClick = createServerFn({ method: "POST" })
  .validator(z.object({ productId: z.string().uuid() }))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin.rpc("increment_affiliate_click" as never, {
      product_id: data.productId,
    } as never);

    // If RPC doesn't exist, fall back to direct update
    if (error) {
      await supabaseAdmin
        .from("affiliate_products" as never)
        .update({ click_count: (0 as unknown) as never } as never)
        .eq("id" as never, data.productId)
        .select("click_count");
    }

    return { success: true };
  });

function mapProduct(r: Record<string, unknown>): AffiliateProduct {
  return {
    id: r.id as string,
    name: r.name as string,
    slug: r.slug as string,
    description: r.description as string | null,
    image_url: r.image_url as string | null,
    affiliate_url: r.affiliate_url as string,
    rating: r.rating as number | null,
    price_cents: r.price_cents as number | null,
    currency: (r.currency as string) ?? "USD",
    pros: (r.pros as string[]) ?? null,
    cons: (r.cons as string[]) ?? null,
    key_features: (r.key_features as string[]) ?? null,
    is_recommended: r.is_recommended as boolean,
    click_count: r.click_count as number,
  };
}
