import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/best-strollers")({
  head: () => ({
    meta: [
      { title: "Best Strollers 2026: Travel Systems, Jogging & Everyday Picks | ChildBloom" },
      {
        name: "description",
        content:
          "Best strollers 2026: top travel systems, lightweight, jogging, and double strollers with expert reviews, pros/cons, and Amazon affiliate links for every family need.",
      },
      {
        property: "og:title",
        content: "Best Strollers 2026: Travel Systems, Jogging & Everyday Picks | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "Best strollers 2026: top travel systems, lightweight, jogging, and double strollers with expert reviews, pros/cons, and Amazon affiliate links.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://childbloom.site/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://childbloom.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/articles/best-strollers" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Best Strollers 2026: Travel Systems, Jogging & Everyday Picks",
          description:
            "Best strollers 2026: top travel systems, lightweight, jogging, and double strollers with expert reviews, pros/cons, and Amazon affiliate links.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/best-strollers" },
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
              name: "Best Strollers",
              item: "https://childbloom.site/articles/best-strollers",
            },
          ],
        }),
      },
    ],
  }),
  component: BestStrollersArticle,
});

function BestStrollersArticle() {
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
              Best Strollers 2026: Travel Systems, Jogging &amp; Everyday Picks
            </h1>
            <p className="text-sm text-muted-foreground">
              14 min read • Published June 11, 2026 • Medically reviewed by Dr. Emma Lane, MD
            </p>
          </div>

          <nav
            className="rounded-2xl border border-border bg-muted p-5 text-sm"
            aria-label="Table of contents"
          >
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li>
                <a href="#stroller-types" className="text-primary hover:underline">
                  Types of Strollers
                </a>
              </li>
              <li>
                <a href="#travel-systems" className="text-primary hover:underline">
                  Best Travel Systems
                </a>
              </li>
              <li>
                <a href="#lightweight" className="text-primary hover:underline">
                  Best Lightweight Strollers
                </a>
              </li>
              <li>
                <a href="#jogging" className="text-primary hover:underline">
                  Best Jogging Strollers
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
            id="stroller-types"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Types of Strollers</h2>
            <p>
              Choosing the right stroller depends on your lifestyle: city walking, running, travel,
              or multiple children.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Travel Systems:</strong> Stroller + infant car seat combo
              </li>
              <li>
                <strong>Lightweight Umbrella:</strong> Easy to carry, great for travel
              </li>
              <li>
                <strong>Jogging:</strong> Large wheels, suspension for running
              </li>
              <li>
                <strong>Double/Tandem:</strong> For two children
              </li>
            </ul>
          </section>

          <section
            id="travel-systems"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Best Travel Systems</h2>

            <h3 className="text-xl font-semibold">Graco Modes Travel System</h3>
            <p>Versatile 3-in-1 system with car seat, stroller, and bassinet mode.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Pros:</strong> Multiple configurations, good value, easy fold
              </li>
              <li>
                <strong>Cons:</strong> Heavier than some premium options
              </li>
              <li>
                <a
                  href="/go/graco-modes"
                  className="text-primary hover:underline"
                  rel="sponsored nofollow"
                >
                  Buy on Amazon
                </a>
              </li>
            </ul>
          </section>

          <section id="lightweight" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Best Lightweight Strollers</h2>
            <h3 className="text-xl font-semibold">UPPAbaby G-LUXE</h3>
            <p>Premium lightweight with excellent maneuverability and one-hand fold.</p>
          </section>

          <section id="jogging" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Best Jogging Strollers</h2>
            <h3 className="text-xl font-semibold">Thule Urban Glide 2</h3>
            <p>Excellent for active parents with smooth ride and all-terrain wheels.</p>
          </section>

          <section id="comparison" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Stroller</th>
                    <th className="p-3 text-left font-medium">Type</th>
                    <th className="p-3 text-left font-medium">Weight</th>
                    <th className="p-3 text-left font-medium">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Graco Modes</td>
                    <td className="p-3">Travel System</td>
                    <td className="p-3">~25 lbs</td>
                    <td className="p-3">New parents</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Thule Urban Glide</td>
                    <td className="p-3">Jogging</td>
                    <td className="p-3">~28 lbs</td>
                    <td className="p-3">Active families</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Do I need a travel system?</dt>
                <dd className="mt-2">
                  Helpful for newborns, but many parents use a lightweight stroller + separate car
                  seat base instead.
                </dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/best-car-seats" className="text-primary hover:underline">
                Best Car Seats
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/best-baby-carriers" className="text-primary hover:underline">
                Best Baby Carriers
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
