import { createFileRoute } from "@tanstack/react-router";
import { siteDescription } from "@/lib/site-data";

export const Route = createFileRoute("/affiliate-disclosure")({
  head: () => ({
    meta: [
      { title: "Affiliate Disclosure | ChildBloom" },
      {
        name: "description",
        content:
          "ChildBloom participates in affiliate programs. Learn how our recommendations are selected and how affiliate links support the site.",
      },
      { property: "og:title", content: "Affiliate Disclosure | ChildBloom" },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/affiliate-disclosure" }],
  }),
  component: AffiliateDisclosurePage,
});

function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Affiliate disclosure
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          How affiliate partnerships support ChildBloom.
        </h1>
        <section className="space-y-4 text-sm leading-7 text-muted-foreground">
          <p>
            Some articles on ChildBloom contain affiliate links. When you click and buy through
            these links, we may earn a small commission at no extra cost to you.
          </p>
          <p>
            Affiliate relationships allow us to keep publishing free, evidence-based content while
            testing products that matter for families.
          </p>
          <p>
            Recommendations are chosen based on quality, safety, and trustworthiness — never solely
            on earnings potential.
          </p>
        </section>
      </article>
    </main>
  );
}
