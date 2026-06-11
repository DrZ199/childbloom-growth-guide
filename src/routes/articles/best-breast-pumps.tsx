import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/best-breast-pumps")({
  head: () => ({
    meta: [
      { title: "Best Breast Pumps 2026: Hospital-Grade, Portable & Wearable Comparison | ChildBloom" },
      {
        name: "description",
        content: "Expert comparison of the best breast pumps in 2026 including Spectra, Elvie, Willow, Medela, and hospital-grade options. Pros, cons, and recommendations for working moms and travel.",
      },
      { property: "og:title", content: "Best Breast Pumps 2026: Hospital-Grade, Portable & Wearable Comparison | ChildBloom" },
      { property: "og:description", content: "Expert comparison of the best breast pumps in 2026 including Spectra, Elvie, Willow, Medela, and hospital-grade options." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/best-breast-pumps" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Best Breast Pumps 2026: Hospital-Grade, Portable & Wearable Comparison",
          description: "Expert comparison of the best breast pumps in 2026 including Spectra, Elvie, Willow, Medela, and hospital-grade options.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/best-breast-pumps" },
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
            { "@type": "ListItem", position: 3, name: "Best Breast Pumps 2026", item: "https://childbloom.site/articles/best-breast-pumps" },
          ],
        }),
      },
    ],
  }),
  component: BestBreastPumpsArticle,
});

function BestBreastPumpsArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Product Reviews • Parenting
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Best Breast Pumps 2026: Hospital-Grade, Portable &amp; Wearable Comparison
            </h1>
            <p className="text-sm text-muted-foreground">16 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#types-of-pumps" className="text-primary hover:underline">Types of Breast Pumps</a></li>
              <li><a href="#hospital-grade" className="text-primary hover:underline">Best Hospital-Grade Pumps</a></li>
              <li><a href="#portable" className="text-primary hover:underline">Best Portable &amp; Wearable Pumps</a></li>
              <li><a href="#comparison" className="text-primary hover:underline">Quick Comparison Table</a></li>
              <li><a href="#how-to-choose" className="text-primary hover:underline">How to Choose the Right Pump</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="types-of-pumps" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Types of Breast Pumps</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Hospital-grade / Double electric:</strong> Most powerful, best for establishing supply</li>
              <li><strong>Portable electric:</strong> Good balance of power and convenience</li>
              <li><strong>Wearable / Hands-free:</strong> Discreet, great for working moms</li>
              <li><strong>Manual:</strong> Affordable backup option</li>
            </ul>
          </section>

          <section id="hospital-grade" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Best Hospital-Grade Pumps</h2>
            
            <h3 className="text-xl font-semibold">Spectra S1 &amp; S2</h3>
            <p>Top-rated hospital-grade pumps with excellent suction, quiet operation, and rechargeable battery (S1).</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Pros:</strong> Strong suction, customizable settings, affordable compared to other hospital-grade</li>
              <li><strong>Cons:</strong> Not wearable, requires outlet or battery</li>
              <li><a href="/go/spectra-s1" className="text-primary hover:underline" rel="sponsored nofollow">Buy on Amazon</a></li>
            </ul>

            <h3 className="text-xl font-semibold">Medela Symphony</h3>
            <p>Premium hospital-grade pump often used in NICUs. Excellent for establishing supply after premature birth.</p>
          </section>

          <section id="portable" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Best Portable &amp; Wearable Pumps</h2>
            
            <h3 className="text-xl font-semibold">Elvie Stride / Elvie Pump</h3>
            <p>Premium wearable pumps with app connectivity and strong suction in a discreet design.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Pros:</strong> Completely hands-free, app tracking, discreet under clothes</li>
              <li><strong>Cons:</strong> Expensive, parts can be finicky</li>
              <li><a href="/go/elvie-pump" className="text-primary hover:underline" rel="sponsored nofollow">Buy on Amazon</a></li>
            </ul>

            <h3 className="text-xl font-semibold">Willow Go / Willow 3.0</h3>
            <p>Another top wearable option with good battery life and strong performance.</p>
          </section>

          <section id="comparison" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Quick Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Pump</th>
                    <th className="p-3 text-left font-medium">Type</th>
                    <th className="p-3 text-left font-medium">Best For</th>
                    <th className="p-3 text-left font-medium">Price Range</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Spectra S1</td>
                    <td className="p-3">Hospital-grade</td>
                    <td className="p-3">Establishing supply</td>
                    <td className="p-3">$$</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Elvie Stride</td>
                    <td className="p-3">Wearable</td>
                    <td className="p-3">Working moms, travel</td>
                    <td className="p-3">$$$</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Willow Go</td>
                    <td className="p-3">Wearable</td>
                    <td className="p-3">Discreet pumping</td>
                    <td className="p-3">$$$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="how-to-choose" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">How to Choose the Right Pump</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Return to work:</strong> Prioritize wearable or portable options</li>
              <li><strong>Establishing supply:</strong> Hospital-grade (Spectra or Medela) is often best</li>
              <li><strong>Travel:</strong> Wearable pumps with good battery life</li>
              <li><strong>Budget:</strong> Spectra S2 offers excellent value</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">How often should I replace pump parts?</dt>
                <dd className="mt-2">Replace valves and membranes every 1–3 months with daily use. Tubing and bottles should be replaced every 3–6 months or if they show wear.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Are wearable pumps as effective as traditional ones?</dt>
                <dd className="mt-2">Modern wearables have improved significantly. Many moms get comparable output, though hospital-grade pumps are still considered the gold standard for establishing supply.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/postpartum-recovery" className="text-primary hover:underline">Postpartum Recovery Timeline</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/breastfeeding-vs-formula" className="text-primary hover:underline">Breastfeeding vs Formula</a>
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
