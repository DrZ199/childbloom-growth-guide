import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/best-cribs-bassinets")({
  head: () => ({
    meta: [
      { title: "Best Cribs & Bassinets 2026: Convertible, Mini & Next-to-Bed Options | ChildBloom" },
      {
        name: "description",
        content: "Expert review of the best cribs and bassinets in 2026. Compare convertible cribs, mini cribs, bedside bassinets, and safe sleep recommendations.",
      },
      { property: "og:title", content: "Best Cribs & Bassinets 2026: Convertible, Mini & Next-to-Bed Options | ChildBloom" },
      { property: "og:description", content: "Expert review of the best cribs and bassinets in 2026. Compare convertible cribs, mini cribs, bedside bassinets, and safe sleep recommendations." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://childbloom.site/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://childbloom.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/articles/best-cribs-bassinets" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Best Cribs & Bassinets 2026: Convertible, Mini & Next-to-Bed Options",
          description: "Expert review of the best cribs and bassinets in 2026. Compare convertible cribs, mini cribs, bedside bassinets, and safe sleep recommendations.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/best-cribs-bassinets" },
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
            { "@type": "ListItem", position: 3, name: "Best Cribs & Bassinets 2026", item: "https://childbloom.site/articles/best-cribs-bassinets" },
          ],
        }),
      },
    ],
  }),
  component: BestCribsBassinetsArticle,
});

function BestCribsBassinetsArticle() {
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
              Best Cribs &amp; Bassinets 2026: Convertible, Mini &amp; Next-to-Bed Options
            </h1>
            <p className="text-sm text-muted-foreground">14 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#crib-types" className="text-primary hover:underline">Types of Cribs &amp; Bassinets</a></li>
              <li><a href="#top-picks" className="text-primary hover:underline">Top Crib &amp; Bassinet Picks</a></li>
              <li><a href="#comparison" className="text-primary hover:underline">Comparison Table</a></li>
              <li><a href="#safety-tips" className="text-primary hover:underline">Safe Sleep Tips</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="crib-types" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Types of Cribs &amp; Bassinets</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Full-size cribs:</strong> Standard size, often convertible</li>
              <li><strong>Mini cribs:</strong> Smaller footprint, good for small spaces</li>
              <li><strong>Bassinets:</strong> Portable, ideal for the first few months</li>
              <li><strong>Bedside bassinets:</strong> Attach to the bed for easy nighttime access</li>
            </ul>
          </section>

          <section id="top-picks" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Top Crib &amp; Bassinet Picks</h2>
            
            <h3 className="text-xl font-semibold">Graco Benton 5-in-1 Convertible Crib</h3>
            <p>Affordable convertible crib that grows with your child.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Pros:</strong> Good value, multiple configurations</li>
              <li><a href="/go/graco-benton-crib" className="text-primary hover:underline" rel="sponsored nofollow">Buy on Amazon</a></li>
            </ul>

            <h3 className="text-xl font-semibold">Halo Bassinest Swivel Sleeper</h3>
            <p>Popular bedside bassinet with 360° swivel for easy access.</p>
          </section>

          <section id="comparison" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Item</th>
                    <th className="p-3 text-left font-medium">Type</th>
                    <th className="p-3 text-left font-medium">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Graco Benton Crib</td>
                    <td className="p-3">Convertible crib</td>
                    <td className="p-3">Long-term use</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Halo Bassinest</td>
                    <td className="p-3">Bedside bassinet</td>
                    <td className="p-3">Newborn convenience</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="safety-tips" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Safe Sleep Tips</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Always place baby on their back</li>
              <li>Use a firm, flat mattress</li>
              <li>Keep the sleep space bare (no blankets, pillows, or bumpers)</li>
              <li>Room-share without bed-sharing for the first 6–12 months</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Do I need both a bassinet and a crib?</dt>
                <dd className="mt-2">Many parents use a bassinet for the first 3–6 months and then transition to a crib. A bedside bassinet makes nighttime feeds easier.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/newborn-essentials-checklist" className="text-primary hover:underline">Newborn Essentials Checklist</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/newborn-care-guide" className="text-primary hover:underline">Newborn Care Guide</a>
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
