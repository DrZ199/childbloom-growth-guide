import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/best-high-chairs")({
  head: () => ({
    meta: [
      { title: "Best High Chairs 2026: Convertible, Portable & Space-Saving Options | ChildBloom" },
      {
        name: "description",
        content: "Expert review of the best high chairs in 2026. Compare convertible, portable, and space-saving high chairs with pros, cons, and top recommendations for every family.",
      },
      { property: "og:title", content: "Best High Chairs 2026: Convertible, Portable & Space-Saving Options | ChildBloom" },
      { property: "og:description", content: "Expert review of the best high chairs in 2026. Compare convertible, portable, and space-saving high chairs with pros, cons, and top recommendations." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://childbloom.site/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://childbloom.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/articles/best-high-chairs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Best High Chairs 2026: Convertible, Portable & Space-Saving Options",
          description: "Expert review of the best high chairs in 2026. Compare convertible, portable, and space-saving high chairs with pros, cons, and top recommendations.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/best-high-chairs" },
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
            { "@type": "ListItem", position: 3, name: "Best High Chairs 2026", item: "https://childbloom.site/articles/best-high-chairs" },
          ],
        }),
      },
    ],
  }),
  component: BestHighChairsArticle,
});

function BestHighChairsArticle() {
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
              Best High Chairs 2026: Convertible, Portable &amp; Space-Saving Options
            </h1>
            <p className="text-sm text-muted-foreground">14 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#types" className="text-primary hover:underline">Types of High Chairs</a></li>
              <li><a href="#top-picks" className="text-primary hover:underline">Top High Chair Recommendations</a></li>
              <li><a href="#comparison" className="text-primary hover:underline">Comparison Table</a></li>
              <li><a href="#features" className="text-primary hover:underline">Key Features to Look For</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="types" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Types of High Chairs</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Traditional high chairs:</strong> Full-size, often with trays</li>
              <li><strong>Convertible high chairs:</strong> Grow with your child into booster seats</li>
              <li><strong>Portable / travel high chairs:</strong> Lightweight, foldable options</li>
              <li><strong>Hook-on chairs:</strong> Attach to tables (use with caution)</li>
            </ul>
          </section>

          <section id="top-picks" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Top High Chair Recommendations</h2>
            
            <h3 className="text-xl font-semibold">Stokke Tripp Trapp</h3>
            <p>Iconic convertible chair that grows with your child from 6 months to adulthood.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Pros:</strong> Excellent ergonomics, timeless design, long-lasting</li>
              <li><strong>Cons:</strong> Expensive, requires additional accessories</li>
              <li><a href="/go/stokke-tripp-trapp" className="text-primary hover:underline" rel="sponsored nofollow">Buy on Amazon</a></li>
            </ul>

            <h3 className="text-xl font-semibold">Graco Blossom 6-in-1</h3>
            <p>Versatile convertible high chair with multiple configurations.</p>
          </section>

          <section id="comparison" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">High Chair</th>
                    <th className="p-3 text-left font-medium">Type</th>
                    <th className="p-3 text-left font-medium">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Stokke Tripp Trapp</td>
                    <td className="p-3">Convertible</td>
                    <td className="p-3">Long-term use</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Graco Blossom</td>
                    <td className="p-3">6-in-1 convertible</td>
                    <td className="p-3">Versatility + value</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="features" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Key Features to Look For</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Easy-to-clean surfaces and removable tray</li>
              <li>Adjustable height and footrest</li>
              <li>5-point harness for safety</li>
              <li>Stable base (important for wiggly toddlers)</li>
              <li>Foldability for small spaces</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">When can my baby start using a high chair?</dt>
                <dd className="mt-2">Most babies can start using a high chair around 6 months, once they have good head and trunk control and are starting solids.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Are hook-on chairs safe?</dt>
                <dd className="mt-2">Hook-on chairs can be convenient but carry risks (tipping, pinching). Only use on sturdy tables and never leave your child unattended.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/best-strollers" className="text-primary hover:underline">Best Strollers</a>
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
