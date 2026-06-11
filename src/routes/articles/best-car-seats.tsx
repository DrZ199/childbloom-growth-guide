import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/best-car-seats" as const)({
  head: () => ({
    meta: [
      { title: "Best Car Seats 2026: Infant, Convertible & Booster Picks | ChildBloom" },
      {
        name: "description",
        content:
          "Expert-reviewed best car seats 2026: top infant, convertible, and booster seats with safety ratings, pros/cons, and Amazon affiliate recommendations for every stage.",
      },
      {
        property: "og:title",
        content: "Best Car Seats 2026: Infant, Convertible & Booster Picks | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "Expert-reviewed best car seats 2026: top infant, convertible, and booster seats with safety ratings, pros/cons, and Amazon affiliate recommendations.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/best-car-seats" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Best Car Seats 2026: Infant, Convertible & Booster Picks",
          description:
            "Expert-reviewed best car seats 2026: top infant, convertible, and booster seats with safety ratings, pros/cons, and Amazon affiliate recommendations.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/best-car-seats" },
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
              name: "Best Car Seats",
              item: "https://childbloom.site/articles/best-car-seats",
            },
          ],
        }),
      },
    ],
  }),
  component: BestCarSeatsArticle,
});

function BestCarSeatsArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Product Reviews • Safety
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Best Car Seats 2026: Infant, Convertible &amp; Booster Picks
            </h1>
            <p className="text-sm text-muted-foreground">
              15 min read • Published June 11, 2026 • Medically reviewed by Dr. Emma Lane, MD
            </p>
          </div>

          <nav
            className="rounded-2xl border border-border bg-muted p-5 text-sm"
            aria-label="Table of contents"
          >
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li>
                <a href="#car-seat-basics" className="text-primary hover:underline">
                  Car Seat Basics &amp; Safety Standards
                </a>
              </li>
              <li>
                <a href="#infant-seats" className="text-primary hover:underline">
                  Best Infant Car Seats
                </a>
              </li>
              <li>
                <a href="#convertible-seats" className="text-primary hover:underline">
                  Best Convertible Car Seats
                </a>
              </li>
              <li>
                <a href="#booster-seats" className="text-primary hover:underline">
                  Best Booster Seats
                </a>
              </li>
              <li>
                <a href="#comparison" className="text-primary hover:underline">
                  Comparison Table
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          <section
            id="car-seat-basics"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Car Seat Basics &amp; Safety Standards</h2>
            <p>
              Car seats are one of the most important purchases for new parents. All seats sold in
              the US must meet NHTSA and FMVSS 213 standards.
            </p>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-2">Key Safety Features to Look For</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>5-point harness (infant &amp; convertible)</li>
                <li>Side-impact protection</li>
                <li>Easy LATCH installation</li>
                <li>Recline angle indicator</li>
                <li>Energy-absorbing foam</li>
              </ul>
            </div>
          </section>

          <section id="infant-seats" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Best Infant Car Seats (Birth – 12 months)</h2>

            <h3 className="text-xl font-semibold">Chicco KeyFit 30</h3>
            <p>Top-rated infant seat with excellent safety ratings and easy base installation.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Pros:</strong> Simple LATCH, comfortable, machine-washable cover
              </li>
              <li>
                <strong>Cons:</strong> Heavier than some competitors
              </li>
              <li>
                <a
                  href="/go/chicco-keyfit-30"
                  className="text-primary hover:underline"
                  rel="sponsored nofollow"
                >
                  Buy on Amazon
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold">Graco SnugRide 35 Lite</h3>
            <p>Lightweight option with good value and safety features.</p>
          </section>

          <section
            id="convertible-seats"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">
              Best Convertible Car Seats (Birth – 7+ years)
            </h2>

            <h3 className="text-xl font-semibold">Graco Extend2Fit</h3>
            <p>
              Extended rear-facing capability up to 50 lbs – highly recommended by safety experts.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Pros:</strong> Extended rear-facing, 10-position headrest, machine washable
              </li>
              <li>
                <strong>Cons:</strong> Bulkier than some
              </li>
              <li>
                <a
                  href="/go/graco-extend2fit"
                  className="text-primary hover:underline"
                  rel="sponsored nofollow"
                >
                  Buy on Amazon
                </a>
              </li>
            </ul>
          </section>

          <section id="booster-seats" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Best Booster Seats (4–12 years)</h2>
            <p>
              High-back boosters with side-impact protection are preferred until children are ready
              for seat belts alone.
            </p>
          </section>

          <section id="comparison" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Quick Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Seat</th>
                    <th className="p-3 text-left font-medium">Type</th>
                    <th className="p-3 text-left font-medium">Max Rear-Facing</th>
                    <th className="p-3 text-left font-medium">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Chicco KeyFit 30</td>
                    <td className="p-3">Infant</td>
                    <td className="p-3">30 lbs / 30"</td>
                    <td className="p-3">Newborns</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Graco Extend2Fit</td>
                    <td className="p-3">Convertible</td>
                    <td className="p-3">50 lbs / 49"</td>
                    <td className="p-3">Extended rear-facing</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">
                  How long should my child stay rear-facing?
                </dt>
                <dd className="mt-2">
                  As long as possible, ideally until at least 2 years or until they reach the seat's
                  maximum rear-facing limits. It's significantly safer.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Can I use a used car seat?</dt>
                <dd className="mt-2">
                  Only if you know the full history and it hasn't been in a crash. Never buy used
                  seats from unknown sources.
                </dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/best-strollers" className="text-primary hover:underline">
                Best Strollers
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="/articles/newborn-essentials-checklist"
                className="text-primary hover:underline"
              >
                Newborn Essentials Checklist
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
