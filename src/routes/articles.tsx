import { createFileRoute } from "@tanstack/react-router";
import { articles, siteDescription } from "@/lib/site-data";

export const Route = createFileRoute("/articles")({
  head: () => ({
    meta: [
      { title: "Articles | ChildBloom" },
      {
        name: "description",
        content:
          "Explore child health, newborn care, nutrition, development, and parenting articles from ChildBloom.",
      },
      { property: "og:title", content: "Articles | ChildBloom" },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles" }],
  }),
  component: ArticlesPage,
});

function ArticlesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <section className="space-y-6">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            ChildBloom articles
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Evidence-based parenting, newborn care, and child health articles.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Browse our most trusted guidance for busy parents, caregivers, and families growing
            children in the first years.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="group overflow-hidden rounded-3xl border border-border bg-muted p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
            >
              <span className="inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {article.category}
              </span>
              <h2 className="mt-4 text-2xl font-semibold leading-tight">{article.title}</h2>
              <p className="mt-3 text-sm text-muted-foreground">{article.excerpt}</p>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                <span>{article.readTime}</span>
                <span className="inline-flex h-1.5 w-1.5 rounded-full bg-border" />
                <span>{article.publishedAt}</span>
              </div>
              <a
                href={`/articles/${article.slug}`}
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:underline"
              >
                Read article →
              </a>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
