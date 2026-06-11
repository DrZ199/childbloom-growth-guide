import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/best-diaper-bags" as const)({
  head: () => ({
    meta: [
      { title: "Best Diaper Bags 2026: Backpack, Tote & Messenger Styles | ChildBloom" },
      {
        name: "description",
        content:
          "Best diaper bags 2026: top backpack, tote, and messenger diaper bags with features, pros/cons, and Amazon affiliate recommendations for stylish and functional parenting.",
      },
      {
        property: "og:title",
        content: "Best Diaper Bags 2026: Backpack, Tote & Messenger Styles | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "Best diaper bags 2026: top backpack, tote, and messenger diaper bags with features, pros/cons, and Amazon affiliate recommendations.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/best-diaper-bags" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Best Diaper Bags 2026: Backpack, Tote & Messenger Styles",
          description:
            "Best diaper bags 2026: top backpack, tote, and messenger diaper bags with features, pros/cons, and Amazon affiliate recommendations.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/best-diaper-bags" },
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
              name: "Best Diaper Bags",
              item: "https://childbloom.site/articles/best-diaper-bags",
            },
          ],
        }),
      },
    ],
  }),
  component: BestDiaperBagsArticle,
});

function BestDiaperBagsArticle() {
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
              Best Diaper Bags 2026: Backpack, Tote &amp; Messenger Styles
            </h1>
            <p className="text-sm text-muted-foreground">
              12 min read • Published June 11, 2026 • Medically reviewed by Dr. Emma Lane, MD
            </p>
          </div>

          <nav
            className="rounded-2xl border border-border bg-muted p-5 text-sm"
            aria-label="Table of contents"
          >
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li>
                <a href="#what-to-look-for" className="text-primary hover:underline">
                  What to Look For in a Diaper Bag
                </a>
              </li>
              <li>
                <a href="#backpack-style" className="text-primary hover:underline">
                  Best Backpack Diaper Bags
                </a>
              </li>
              <li>
                <a href="#tote-style" className="text-primary hover:underline">
                  Best Tote Diaper Bags
                </a>
              </li>
              <li>
                <a href="#messenger" className="text-primary hover:underline">
                  Best Messenger Diaper Bags
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
            id="what-to-look-for"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">What to Look For in a Diaper Bag</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Multiple compartments and easy-access pockets</li>
              <li>Insulated bottle pockets</li>
              <li>Wipeable or machine-washable interior</li>
              <li>Comfortable straps (backpack preferred for hands-free)</li>
              <li>Stroller clips and changing pad included</li>
            </ul>
          </section>

          <section
            id="backpack-style"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Best Backpack Diaper Bags</h2>
            <h3 className="text-xl font-semibold">Skip Hop Forma Backpack</h3>
            <p>Stylish backpack with excellent organization and vegan leather options.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Pros:</strong> Comfortable, lots of pockets, stylish
              </li>
              <li>
                <strong>Cons:</strong> Premium price
              </li>
              <li>
                <a
                  href="/go/skip-hop-forma"
                  className="text-primary hover:underline"
                  rel="sponsored nofollow"
                >
                  Buy on Amazon
                </a>
              </li>
            </ul>
          </section>

          <section id="tote-style" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Best Tote Diaper Bags</h2>
            <h3 className="text-xl font-semibold">Petunia Pickle Bottom Boxy Backpack</h3>
            <p>Convertible tote/backpack with beautiful prints.</p>
          </section>

          <section id="messenger" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Best Messenger Diaper Bags</h2>
            <h3 className="text-xl font-semibold">Dad diaper bags from brands like DadGear</h3>
          </section>

          <section id="comparison" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Bag</th>
                    <th className="p-3 text-left font-medium">Style</th>
                    <th className="p-3 text-left font-medium">Key Feature</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Skip Hop Forma</td>
                    <td className="p-3">Backpack</td>
                    <td className="p-3">Organization</td>
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
                  Backpack vs tote – which is better?
                </dt>
                <dd className="mt-2">
                  Backpacks are more comfortable for long wear and leave hands free. Totes are
                  easier to access but can strain shoulders.
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
