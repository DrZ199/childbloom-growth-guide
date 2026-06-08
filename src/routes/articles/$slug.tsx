import { createFileRoute } from "@tanstack/react-router";
import { getArticleBySlug, getRelatedArticles } from "@/lib/api/articles";
import { Breadcrumbs, generateBreadcrumbSchema } from "@/components/content/breadcrumbs";
import { TableOfContents, addHeadingIds } from "@/components/content/table-of-contents";
import { ShareButtons } from "@/components/content/share-buttons";
import { RelatedArticles } from "@/components/content/related-articles";
import { AdSlot } from "@/components/monetization/ad-slot";
import {
  StructuredData,
  generateArticleSchema,
  generateFaqSchema,
} from "@/components/seo/structured-data";
import { Clock, Calendar, Eye, Stethoscope } from "lucide-react";

export const Route = createFileRoute("/articles/$slug")({
  loader: async ({ params }) => {
    const article = await getArticleBySlug({ data: { slug: params.slug } });
    if (!article) {
      throw new Error("Article not found");
    }

    let related: Awaited<ReturnType<typeof getRelatedArticles>> = [];
    try {
      related = await getRelatedArticles({
        data: {
          articleId: article.id,
          categorySlug: article.category_slug,
          limit: 4,
        },
      });
    } catch {
      // non-critical
    }

    return { article, related };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { article } = loaderData;
    const baseUrl = "https://childbloom.app";
    const url = `${baseUrl}/articles/${article.slug}`;
    return {
      meta: [
        { title: article.seo_title ?? `${article.title} | ChildBloom` },
        { name: "description", content: article.seo_description ?? article.excerpt ?? "" },
        { property: "og:title", content: article.seo_title ?? article.title },
        { property: "og:description", content: article.seo_description ?? article.excerpt ?? "" },
        { property: "og:type", content: "article" },
        { property: "og:image", content: article.og_image_url ?? article.cover_image_url ?? "/og-image.png" },
        { property: "og:url", content: url },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: article.seo_title ?? article.title },
        { name: "article:published_time", content: article.published_at ?? undefined },
        { name: "article:section", content: article.category_name ?? undefined },
      ],
      links: [{ rel: "canonical", href: article.canonical_url ?? url }],
    };
  },
  errorComponent: ({ error }: { error: Error }) => (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-border bg-card p-8 text-center">
        <h1 className="text-2xl font-semibold">Article not found</h1>
        <p className="mt-2 text-muted-foreground">
          The article you're looking for doesn't exist or has been removed.
        </p>
        <a href="/articles" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
          Browse all articles
        </a>
      </div>
    </main>
  ),
  component: DynamicArticlePage,
});

function DynamicArticlePage() {
  const { article, related } = Route.useLoaderData();
  const baseUrl = "https://childbloom.app";
  const articleUrl = `${baseUrl}/articles/${article.slug}`;

  // Process content HTML — add IDs to headings for TOC
  const rawHtml = article.content_html ?? article.content;
  const processedHtml = addHeadingIds(rawHtml);

  const breadcrumbItems = [
    { label: "Articles", href: "/articles" },
    ...(article.category_name
      ? [{ label: article.category_name, href: `/categories/${article.category_slug}` }]
      : []),
    { label: article.title },
  ];

  return (
    <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Structured data */}
      <StructuredData
        data={generateArticleSchema({
          title: article.title,
          description: article.seo_description ?? article.excerpt ?? "",
          url: articleUrl,
          imageUrl: article.og_image_url ?? article.cover_image_url ?? undefined,
          authorName: article.author_name,
          publishedAt: article.published_at ?? undefined,
          categoryName: article.category_name,
        })}
      />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems, baseUrl)} />
      {article.faq && article.faq.length > 0 && (
        <StructuredData data={generateFaqSchema(article.faq)} />
      )}

      {/* Header */}
      <article>
        <header className="space-y-4">
          {article.category_name && (
            <a
              href={`/categories/${article.category_slug}`}
              className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary transition hover:bg-primary/20"
            >
              {article.category_name}
            </a>
          )}
          <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
          {article.excerpt && (
            <p className="max-w-3xl text-lg text-muted-foreground">{article.excerpt}</p>
          )}
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {article.author_name && (
              <span className="font-medium text-foreground">By {article.author_name}</span>
            )}
            {article.published_at && (
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {new Date(article.published_at).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
            )}
            {article.reading_minutes && (
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" /> {article.reading_minutes} min read
              </span>
            )}
            {article.view_count > 0 && (
              <span className="flex items-center gap-1">
                <Eye className="h-3.5 w-3.5" /> {article.view_count.toLocaleString()} views
              </span>
            )}
          </div>
          {article.medically_reviewed_by && (
            <div className="flex items-center gap-2 text-sm text-green-700">
              <Stethoscope className="h-4 w-4" />
              <span>
                Medically reviewed by {article.medically_reviewed_by}
                {article.medically_reviewed_at &&
                  ` on ${new Date(article.medically_reviewed_at).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}`}
              </span>
            </div>
          )}
        </header>

        {/* Cover image */}
        {article.cover_image_url && (
          <div className="my-8 overflow-hidden rounded-2xl">
            <img
              src={article.cover_image_url}
              alt={article.cover_image_alt ?? article.title}
              className="w-full object-cover"
              width={1200}
              height={630}
            />
          </div>
        )}

        {/* Share buttons */}
        <div className="my-6">
          <ShareButtons title={article.title} url={articleUrl} imageUrl={article.cover_image_url ?? undefined} />
        </div>

        {/* Ad: header banner */}
        <AdSlot placement="header-banner" className="mb-8" />

        {/* Content with TOC sidebar */}
        <div className="grid gap-8 lg:grid-cols-[1fr_260px]">
          <div
            className="prose prose-sm max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:text-primary prose-img:rounded-xl"
            dangerouslySetInnerHTML={{ __html: processedHtml }}
          />
          <aside className="hidden lg:block">
            <div className="sticky top-20">
              <TableOfContents html={processedHtml} />
            </div>
          </aside>
        </div>

        {/* In-article ad */}
        <AdSlot placement="in-article" className="my-10" />

        {/* FAQ section */}
        {article.faq && article.faq.length > 0 && (
          <section className="mt-10 rounded-2xl border border-border bg-card p-6">
            <h2 className="mb-4 text-2xl font-semibold">Frequently asked questions</h2>
            <div className="space-y-4">
              {article.faq.map((item: { question: string; answer: string }, i: number) => (
                <div key={i}>
                  <h3 className="text-base font-semibold">{item.question}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.answer}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Footer ad */}
        <AdSlot placement="footer" className="mt-10" />

        {/* Related articles */}
        <RelatedArticles articles={related} />
      </article>
    </main>
  );
}
