import { createFileRoute } from "@tanstack/react-router";
import { categories, siteDescription } from "@/lib/site-data";

export const Route = createFileRoute("/categories")({
  head: () => ({
    meta: [
      { title: "Categories | ChildBloom" },
      {
        name: "description",
        content:
          "Explore ChildBloom categories for child health, parenting, nutrition, newborn care, development, and product reviews.",
      },
      { property: "og:title", content: "Categories | ChildBloom" },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/categories" }],
  }),
  component: CategoriesPage,
});

function CategoriesPage() {
  return (
    <main className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Browse by topic
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          The most helpful parenting and child health categories.
        </h1>
        <p className="mt-4 max-w-2xl text-base text-muted-foreground">
          Find reliable guides, product reviews, and wellness advice organized by the moments
          parents search for most.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {categories.map((category) => (
          <a
            key={category.slug}
            href={`/articles`}
            className="group overflow-hidden rounded-3xl border border-border bg-muted p-6 transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
          >
            <h2 className="text-xl font-semibold">{category.name}</h2>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">{category.description}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition group-hover:underline">
              Explore {category.name}
            </span>
          </a>
        ))}
      </div>
    </main>
  );
}
