import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/best-baby-carriers")({
  head: () => ({
    meta: [
      {
        title:
          "Best Baby Carriers 2026: Ergonomic Wraps, Slings & Structured Carriers | ChildBloom",
      },
      {
        name: "description",
        content:
          "Best baby carriers 2026: top ergonomic wraps, ring slings, and structured carriers with safety tips, pros/cons, and Amazon affiliate recommendations for comfortable babywearing.",
      },
      {
        property: "og:title",
        content:
          "Best Baby Carriers 2026: Ergonomic Wraps, Slings & Structured Carriers | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "Best baby carriers 2026: top ergonomic wraps, ring slings, and structured carriers with safety tips, pros/cons, and Amazon affiliate recommendations.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://childbloom.site/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://childbloom.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/articles/best-baby-carriers" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Best Baby Carriers 2026: Ergonomic Wraps, Slings & Structured Carriers",
          description:
            "Best baby carriers 2026: top ergonomic wraps, ring slings, and structured carriers with safety tips, pros/cons, and Amazon affiliate recommendations.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/best-baby-carriers" },
          datePublished: "2026-06-11",
          dateModified: "2026-06-11",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://childbloom.site" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Articles",
              item: "https://childbloom.site/articles",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Best Baby Carriers",
              item: "https://childbloom.site/articles/best-baby-carriers",
            },
          ],
        }),
      },
    ],
  }),
  component: BestBabyCarriersArticle,
});

function BestBabyCarriersArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Product Reviews
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Best Baby Carriers 2026: Ergonomic Wraps, Slings &amp; Structured Carriers
            </h1>
            <p className="text-sm text-muted-foreground">
              13 min read • Published June 11, 2026 • Medically reviewed by Dr. Emma Lane, MD
            </p>
          </div>

          <nav
            className="rounded-2xl border border-border bg-muted p-5 text-sm"
            aria-label="Table of contents"
          >
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li>
                <a href="#benefits" className="text-primary hover:underline">
                  Benefits of Babywearing
                </a>
              </li>
              <li>
                <a href="#wraps" className="text-primary hover:underline">
                  Best Wrap Carriers
                </a>
              </li>
              <li>
                <a href="#slings" className="text-primary hover:underline">
                  Best Ring Slings
                </a>
              </li>
              <li>
                <a href="#structured" className="text-primary hover:underline">
                  Best Structured Carriers
                </a>
              </li>
              <li>
                <a href="#safety" className="text-primary hover:underline">
                  Safety Guidelines
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          <section id="benefits" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Benefits of Babywearing</h2>
            <p>
              Babywearing promotes bonding, helps with colic, supports development, and keeps your
              hands free.
            </p>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-2">Key Benefits</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Reduces crying and improves sleep</li>
                <li>Supports hip and spine development when ergonomic</li>
                <li>Convenient for travel and daily tasks</li>
              </ul>
            </div>
          </section>

          <section id="wraps" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Best Wrap Carriers</h2>
            <h3 className="text-xl font-semibold">Solly Baby Wrap</h3>
            <p>Soft, stretchy wrap perfect for newborns. Lightweight and breathable.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Pros:</strong> Comfortable, easy to learn, machine washable
              </li>
              <li>
                <strong>Cons:</strong> Learning curve for tying
              </li>
              <li>
                <a
                  href="/go/solly-baby-wrap"
                  className="text-primary hover:underline"
                  rel="sponsored nofollow"
                >
                  Buy on Amazon
                </a>
              </li>
            </ul>
          </section>

          <section id="slings" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Best Ring Slings</h2>
            <h3 className="text-xl font-semibold">Maya Ring Sling</h3>
            <p>Adjustable and supportive for one-shoulder carry.</p>
          </section>

          <section id="structured" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Best Structured Carriers</h2>
            <h3 className="text-xl font-semibold">Ergobaby 360</h3>
            <p>Structured carrier with multiple positions including forward-facing.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Pros:</strong> Supportive, easy to use, multiple positions
              </li>
              <li>
                <a
                  href="/go/ergobaby-360"
                  className="text-primary hover:underline"
                  rel="sponsored nofollow"
                >
                  Buy on Amazon
                </a>
              </li>
            </ul>
          </section>

          <section id="safety" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Safety Guidelines</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Keep baby visible and kissable at all times</li>
              <li>Ensure proper M-position for hips</li>
              <li>Check for proper airway (chin off chest)</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">When can I start babywearing?</dt>
                <dd className="mt-2">
                  From birth with proper newborn positioning. Always follow the carrier's age/weight
                  guidelines.
                </dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a
                href="/articles/newborn-essentials-checklist"
                className="text-primary hover:underline"
              >
                Newborn Essentials Checklist
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/best-strollers" className="text-primary hover:underline">
                Best Strollers
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Medical Disclaimer:</strong> This article is for educational purposes only and
              does not constitute medical advice. Always consult your pediatrician or healthcare
              provider for concerns about your child's health.
            </p>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}
