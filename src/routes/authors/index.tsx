import { createFileRoute, Link } from "@tanstack/react-router";
import { authors } from "@/lib/authors";

export const Route = createFileRoute("/authors/")({
  head: () => ({
    meta: [
      { title: "Authors & Editorial Team | ChildBloom" },
      {
        name: "description",
        content:
          "Meet the pediatricians, writers, and editors who research, write, and medically review ChildBloom content for accuracy.",
      },
      { property: "og:title", content: "Authors & Editorial Team | ChildBloom" },
      {
        property: "og:description",
        content:
          "The pediatricians and editors behind ChildBloom's evidence-based content.",
      },
      { property: "og:url", content: "https://childbloom.site/authors" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/authors" }],
  }),
  component: AuthorsIndex,
});

function AuthorsIndex() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <header className="mb-10">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Our team
        </p>
        <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
          Authors & medical reviewers
        </h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          ChildBloom's content is researched by our editorial team and clinically reviewed by
          practicing pediatricians.
        </p>
      </header>
      <ul className="grid gap-6 sm:grid-cols-2">
        {authors.map((a) => (
          <li
            key={a.slug}
            className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]"
          >
            <h2 className="text-xl font-semibold">
              <Link
                to="/authors/$slug"
                params={{ slug: a.slug }}
                className="hover:text-primary"
              >
                {a.name}
              </Link>
            </h2>
            <p className="mt-1 text-sm font-medium text-primary">{a.credentials}</p>
            <p className="mt-3 text-sm text-muted-foreground">{a.bio}</p>
            <Link
              to="/authors/$slug"
              params={{ slug: a.slug }}
              className="mt-4 inline-block text-sm font-medium text-primary hover:underline"
            >
              View profile →
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}