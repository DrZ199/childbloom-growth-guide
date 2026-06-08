import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://childbloom-growth-guide.lovable.app";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticEntries: SitemapEntry[] = [
          { path: "/", changefreq: "daily", priority: "1.0" },
          { path: "/articles", changefreq: "daily", priority: "0.9" },
          { path: "/categories", changefreq: "weekly", priority: "0.7" },
          { path: "/search", changefreq: "weekly", priority: "0.5" },
          { path: "/about", changefreq: "monthly", priority: "0.6" },
          { path: "/contact", changefreq: "monthly", priority: "0.5" },
          { path: "/privacy", changefreq: "yearly", priority: "0.3" },
          { path: "/terms", changefreq: "yearly", priority: "0.3" },
          { path: "/affiliate-disclosure", changefreq: "yearly", priority: "0.3" },
          { path: "/medical-disclaimer", changefreq: "yearly", priority: "0.3" },
        ];

        const dynamicEntries: SitemapEntry[] = [];
        try {
          const { supabaseAdmin } = await import(
            "@/integrations/supabase/client.server"
          );

          const [articlesRes, categoriesRes, tagsRes, authorsRes] = await Promise.all([
            supabaseAdmin
              .from("articles")
              .select("slug, updated_at, published_at")
              .eq("status", "published")
              .order("published_at", { ascending: false })
              .limit(5000),
            supabaseAdmin.from("categories").select("slug, updated_at").limit(500),
            supabaseAdmin.from("tags").select("slug").limit(2000),
            supabaseAdmin.from("profiles").select("slug, updated_at").limit(500),
          ]);

          for (const a of articlesRes.data ?? []) {
            dynamicEntries.push({
              path: `/articles/${a.slug}`,
              lastmod: (a.updated_at ?? a.published_at ?? undefined)?.slice(0, 10),
              changefreq: "weekly",
              priority: "0.8",
            });
          }
          for (const c of categoriesRes.data ?? []) {
            dynamicEntries.push({
              path: `/categories/${c.slug}`,
              lastmod: c.updated_at?.slice(0, 10),
              changefreq: "weekly",
              priority: "0.7",
            });
          }
          for (const t of tagsRes.data ?? []) {
            dynamicEntries.push({
              path: `/tags/${t.slug}`,
              changefreq: "weekly",
              priority: "0.4",
            });
          }
          for (const p of authorsRes.data ?? []) {
            dynamicEntries.push({
              path: `/authors/${p.slug}`,
              lastmod: p.updated_at?.slice(0, 10),
              changefreq: "monthly",
              priority: "0.5",
            });
          }
        } catch (err) {
          console.error("[sitemap] failed to load dynamic entries", err);
        }

        const entries = [...staticEntries, ...dynamicEntries];

        const urls = entries.map((e) =>
          [
            `  <url>`,
            `    <loc>${BASE_URL}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`,
          ]
            .filter(Boolean)
            .join("\n"),
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});