import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { getAuthor, authors } from "@/lib/authors";

export const Route = createFileRoute("/authors/$slug")({
  loader: ({ params }) => {
    const author = getAuthor(params.slug);
    if (!author) throw notFound();
    return { author };
  },
  head: ({ params, loaderData }) => {
    const author = loaderData?.author;
    const url = `https://childbloom.site/authors/${params.slug}`;
    if (!author) {
      return {
        meta: [{ title: "Author not found | ChildBloom" }],
      };
    }
    return {
      meta: [
        { title: `${author.name}, ${author.credentials} | ChildBloom` },
        { name: "description", content: author.bio.slice(0, 155) },
        { property: "og:title", content: `${author.name} — ${author.title}` },
        { property: "og:description", content: author.bio.slice(0, 155) },
        { property: "og:url", content: url },
        { property: "og:type", content: "profile" },
        ...(author.photoUrl
          ? [
              { property: "og:image", content: author.photoUrl },
              { name: "twitter:image", content: author.photoUrl },
            ]
          : []),
        { name: "twitter:card", content: "summary" },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: author.name,
            jobTitle: author.title,
            description: author.bio,
            url,
            image: author.photoUrl,
            sameAs: [author.links.linkedin, author.links.twitter, author.links.website].filter(
              Boolean,
            ),
            worksFor: { "@type": "Organization", name: "ChildBloom" },
          }),
        },
      ],
    };
  },
  notFoundComponent: () => (
    <main className="mx-auto max-w-2xl px-4 py-16 text-center sm:px-6">
      <h1 className="text-2xl font-semibold">Author not found</h1>
      <Link to="/authors" className="mt-4 inline-block text-primary hover:underline">
        ← Back to authors
      </Link>
    </main>
  ),
  component: AuthorPage,
});

function AuthorPage() {
  const { author } = Route.useLoaderData();
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <Link to="/authors" className="text-sm text-primary hover:underline">
        ← All authors
      </Link>
      <article className="mt-6 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
        <div className="flex flex-col items-start gap-6 sm:flex-row">
          {author.photoUrl ? (
            <img
              src={author.photoUrl}
              alt={`Portrait of ${author.name}`}
              width={128}
              height={128}
              className="h-32 w-32 rounded-full object-cover"
              loading="lazy"
            />
          ) : (
            <div
              className="grid h-32 w-32 shrink-0 place-items-center rounded-full text-4xl font-semibold text-primary-foreground"
              style={{ background: "var(--gradient-primary)" }}
              aria-hidden="true"
            >
              {author.name
                .split(" ")
                .map((p: string) => p[0])
                .slice(0, 2)
                .join("")}
            </div>
          )}
          <div>
            <h1 className="text-3xl font-semibold tracking-tight">{author.name}</h1>
            <p className="mt-1 text-sm font-medium text-primary">{author.credentials}</p>
            <p className="text-sm text-muted-foreground">{author.title}</p>
          </div>
        </div>
        <section className="mt-8 space-y-4 text-sm leading-7 text-muted-foreground">
          <p>{author.bio}</p>
        </section>
        {(author.links.linkedin || author.links.twitter || author.links.website) && (
          <section className="mt-6 flex flex-wrap gap-3 text-sm">
            {author.links.linkedin && (
              <a
                href={author.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-4 py-1.5 hover:bg-muted"
              >
                LinkedIn
              </a>
            )}
            {author.links.twitter && (
              <a
                href={author.links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-4 py-1.5 hover:bg-muted"
              >
                Twitter / X
              </a>
            )}
            {author.links.website && (
              <a
                href={author.links.website}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-border px-4 py-1.5 hover:bg-muted"
              >
                Website
              </a>
            )}
          </section>
        )}
      </article>
    </main>
  );
}

// Reference `authors` to keep the import; used to validate slugs at build time.
void authors;