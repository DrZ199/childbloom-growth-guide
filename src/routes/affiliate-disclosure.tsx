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
      { property: "og:url", content: "https://childbloom.site/affiliate-disclosure" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/affiliate-disclosure" }],
  }),
  component: AffiliateDisclosurePage,
});

function AffiliateDisclosurePage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
        <header>
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Affiliate disclosure
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            How affiliate partnerships support ChildBloom
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: June 11, 2026</p>
        </header>
        <section className="space-y-4 text-sm leading-7 text-muted-foreground">
          <p>
            In compliance with the U.S. Federal Trade Commission's{" "}
            <a
              href="https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary underline"
            >
              16 CFR Part 255 endorsement guides
            </a>
            , we disclose that ChildBloom participates in affiliate programs.
          </p>

          <h2 className="text-xl font-semibold text-foreground">Programs we participate in</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Amazon Associates Program</li>
            <li>Other retailer and brand affiliate networks (rotated periodically)</li>
          </ul>
          <p>
            As an Amazon Associate, ChildBloom earns from qualifying purchases. When you click an
            affiliate link and purchase through it, we may receive a small commission at{" "}
            <strong className="text-foreground">no additional cost to you</strong>.
          </p>

          <h2 className="text-xl font-semibold text-foreground">How we choose what to recommend</h2>
          <p>
            Editorial and commercial decisions are kept separate. Products are evaluated on
            safety, evidence, quality, value, and pediatric guidance — never on commission rate
            alone. We are not paid by manufacturers to feature products and we do not accept paid
            placements in editorial content.
          </p>

          <h2 className="text-xl font-semibold text-foreground">How affiliate links are marked</h2>
          <p>
            Every article that contains affiliate links displays an{" "}
            <em>affiliate disclosure notice at the top of the article</em>. Links that earn us a
            commission carry <code>rel="sponsored nofollow"</code> attributes.
          </p>

          <h2 className="text-xl font-semibold text-foreground">Questions</h2>
          <p>
            If you have questions about a specific recommendation or our review process, reach us
            via <a href="/contact" className="text-primary underline">our contact page</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
