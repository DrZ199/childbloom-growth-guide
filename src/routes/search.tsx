import { useMemo, useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { articles, siteDescription } from "@/lib/site-data";

export const Route = createFileRoute("/search")({
  head: () => ({
    meta: [
      { title: "Search | ChildBloom" },
      {
        name: "description",
        content: "Search parenting and child health articles across ChildBloom.",
      },
      { property: "og:title", content: "Search | ChildBloom" },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/search" }],
  }),
  component: SearchPage,
});

function SearchPage() {
  const [query, setQuery] = useState("");
  const results = useMemo(
    () =>
      articles.filter((article) =>
        [article.title, article.excerpt, article.category, ...article.tags]
          .join(" ")
          .toLowerCase()
          .includes(query.toLowerCase()),
      ),
    [query],
  );

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <section className="space-y-6">
        <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Search ChildBloom
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Find a guide, parenting tip, or product review.
          </h1>
          <p className="mt-4 max-w-2xl text-base text-muted-foreground">
            Search across our curated articles and discover practical advice for your child’s next
            milestone.
          </p>
          <div className="mt-8">
            <label htmlFor="search-input" className="sr-only">
              Search articles
            </label>
            <input
              id="search-input"
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search by keyword, age, or concern…"
              className="w-full rounded-3xl border border-border bg-muted px-5 py-4 text-sm text-foreground outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/30"
            />
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {results.length > 0 ? (
            results.map((article) => (
              <article
                key={article.slug}
                className="rounded-3xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
              >
                <h2 className="text-xl font-semibold">{article.title}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{article.excerpt}</p>
                <a
                  href={`/articles/${article.slug}`}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline"
                >
                  Read article →
                </a>
              </article>
            ))
          ) : (
            <div className="rounded-3xl border border-border bg-muted p-8 text-center text-muted-foreground">
              <p className="text-base">
                No articles matched your search. Try “sleep,” “nutrition,” or “newborn.”
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
