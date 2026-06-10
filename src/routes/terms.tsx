import { createFileRoute } from "@tanstack/react-router";
import { siteDescription } from "@/lib/site-data";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | ChildBloom" },
      {
        name: "description",
        content: "Read ChildBloom's terms of service for using the website and newsletter.",
      },
      { property: "og:title", content: "Terms of Service | ChildBloom" },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Terms of Service
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Use ChildBloom with confidence.
        </h1>
        <section className="space-y-4 text-sm leading-7 text-muted-foreground">
          <p>
            ChildBloom provides educational content for parents and caregivers. The website is not a
            substitute for professional medical advice.
          </p>
          <p>
            By using our site, you agree to our editorial standards and understand that content is
            for informational purposes only.
          </p>
          <p>
            We reserve the right to update these terms as the site evolves and to better serve our
            community.
          </p>
        </section>
      </article>
    </main>
  );
}
