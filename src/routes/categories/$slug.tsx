import { createFileRoute } from "@tanstack/react-router";
import { getCategoryBySlug } from "@/lib/api/categories";
import { Breadcrumbs, generateBreadcrumbSchema } from "@/components/content/breadcrumbs";
import { StructuredData } from "@/components/seo/structured-data";
import { Clock } from "lucide-react";

export const Route = createFileRoute("/categories/$slug")({
  loader: async ({ params }) => {
    const category = await getCategoryBySlug({ data: { slug: params.slug, page: 1, pageSize: 12 } });
    if (!category) {
      throw new Error("Category not found");
    }
    return { category };
  },
  head: ({ loaderData }) => {
    if (!loaderData) return {};
    const { category } = loaderData;
    return {
      meta: [
        { title: category.seo_title ?? `${category.name} | ChildBloom` },
        {
          name: "description",
          content: category.seo_description ?? category.description ?? "",
        },
        { property: "og:title", content: category.seo_title ?? category.name },
        { property: "og:description", content: category.seo_description ?? category.description ?? "" },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
      links: [{ rel: "canonical", href: `/categories/${category.slug}` }],
    };
  },
  errorComponent: () => (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-border bg-card p-8 text-center">
        <h1 className="text-2xl font-semibold">Category not found</h1>
        <p className="mt-2 text-muted-foreground">This category doesn't exist.</p>
        <a href="/categories" className="mt-4 inline-block text-sm font-medium text-primary hover:underline">
          Browse all categories
        </a>
      </div>
    </main>
  ),
  component: DynamicCategoryPage,
});

function DynamicCategoryPage() {
  const { category } = Route.useLoaderData();
  const baseUrl = "https://childbloom.app";

  const breadcrumbItems = [
    { label: "Categories", href: "/categories" },
    { label: category.name },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
      <Breadcrumbs items={breadcrumbItems} />
      <StructuredData data={generateBreadcrumbSchema(breadcrumbItems, baseUrl)} />

      <header className="mb-10 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Category
        </span>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">{category.name}</h1>
        {category.description && (
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">{category.description}</p>
        )}
        {category.article_count != null && (
          <p className="mt-3 text-sm text-muted-foreground">
            {category.article_count} article{category.article_count !== 1 ? "s" : ""}
          </p>
        )}
      </header>

      {category.articles.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2">
          {category.articles.map((article) => (
            <article
              key={article.id}
              className="group overflow-hidden rounded-2xl border border-border bg-muted p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
            >
              <h2 className="text-xl font-semibold leading-tight">{article.title}</h2>
              {article.excerpt && (
                <p className="mt-2 text-sm text-muted-foreground">{article.excerpt}</p>
              )}
              <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                {article.reading_minutes && (
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {article.reading_minutes} min read
                  </span>
                )}
                {article.published_at && (
                  <span>
                    {new Date(article.published_at).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    })}
                  </span>
                )}
              </div>
              <a
                href={`/articles/${article.slug}`}
                className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
              >
                Read article →
              </a>
            </article>
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-border bg-muted p-8 text-center text-muted-foreground">
          <p>No articles in this category yet. Check back soon!</p>
        </div>
      )}
    </main>
  );
}
