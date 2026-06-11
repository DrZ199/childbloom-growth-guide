import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/best-convertible-car-seats" as const)({
  head: () => ({
    meta: [
      { title: "Best Convertible Car Seats 2026: Extended Rear-Facing Picks | ChildBloom" },
      {
        name: "description",
        content: "Expert-reviewed best convertible car seats for 2026 with extended rear-facing capability. Safety ratings, pros/cons, and top recommendations for long-term use.",
      },
      { property: "og:title", content: "Best Convertible Car Seats 2026: Extended Rear-Facing Picks | ChildBloom" },
      { property: "og:description", content: "Expert-reviewed best convertible car seats for 2026 with extended rear-facing capability. Safety ratings, pros/cons, and top recommendations." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/best-convertible-car-seats" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Best Convertible Car Seats 2026: Extended Rear-Facing Picks",
          description: "Expert-reviewed best convertible car seats for 2026 with extended rear-facing capability. Safety ratings, pros/cons, and top recommendations.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/best-convertible-car-seats" },
          datePublished: "2026-06-12",
          dateModified: "2026-06-12",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://childbloom.site" },
            { "@type": "ListItem", position: 2, name: "Articles", item: "https://childbloom.site/articles" },
            { "@type": "ListItem", position: 3, name: "Best Convertible Car Seats 2026", item: "https://childbloom.site/articles/best-convertible-car-seats" },
          ],
        }),
      },
    ],
  }),
  component: BestConvertibleCarSeatsArticle,
});

function BestConvertibleCarSeatsArticle() {
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
              Best Convertible Car Seats 2026: Extended Rear-Facing Picks
            </h1>
            <p className="text-sm text-muted-foreground">15 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#why-extended-rear-facing" className="text-primary hover:underline">Why Extended Rear-Facing Matters</a></li>
              <li><a href="#top-picks" className="text-primary hover:underline">Top Convertible Car Seat Picks</a></li>
              <li><a href="#comparison" className="text-primary hover:underline">Comparison Table</a></li>
              <li><a href="#how-to-choose" className="text-primary hover:underline">How to Choose</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="why-extended-rear-facing" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Why Extended Rear-Facing Matters</h2>
            <p>
              The American Academy of Pediatrics recommends keeping children rear-facing as long as possible. 
              Convertible seats that allow rear-facing up to 40–50 lbs provide significantly better protection in a crash.
            </p>
          </section>

          <section id="top-picks" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Top Convertible Car Seat Picks</h2>
            
            <h3 className="text-xl font-semibold">Graco Extend2Fit</h3>
            <p>One of the most popular extended rear-facing seats. Allows rear-facing up to 50 lbs.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Pros:</strong> Excellent value, easy install, machine-washable cover</li>
              <li><strong>Cons:</strong> Bulkier than some premium options</li>
              <li><a href="/go/graco-extend2fit" className="text-primary hover:underline" rel="sponsored nofollow">Buy on Amazon</a></li>
            </ul>

            <h3 className="text-xl font-semibold">Chicco NextFit Zip</h3>
            <p>Premium option with excellent safety features and easy adjustments.</p>
          </section>

          <section id="comparison" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Seat</th>
                    <th className="p-3 text-left font-medium">Max Rear-Facing</th>
                    <th className="p-3 text-left font-medium">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Graco Extend2Fit</td>
                    <td className="p-3">50 lbs / 49"</td>
                    <td className="p-3">Value + longevity</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Chicco NextFit Zip</td>
                    <td className="p-3">40 lbs / 43"</td>
                    <td className="p-3">Premium features</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="how-to-choose" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">How to Choose</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Prioritize extended rear-facing limits</li>
              <li>Check LATCH ease and vehicle compatibility</li>
              <li>Consider machine-washable covers</li>
              <li>Look for side-impact protection</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">How long should my child stay rear-facing?</dt>
                <dd className="mt-2">As long as possible — ideally until they reach the seat’s maximum rear-facing height and weight limits (often 40–50 lbs).</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/best-car-seats" className="text-primary hover:underline">Best Car Seats 2026</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/newborn-essentials-checklist" className="text-primary hover:underline">Newborn Essentials Checklist</a>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Medical Disclaimer:</strong> This article is for educational purposes only and does not constitute medical advice. 
              Always consult your pediatrician or healthcare provider for concerns about your child's health.
            </p>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}
