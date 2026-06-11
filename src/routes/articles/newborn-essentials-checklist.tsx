import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/newborn-essentials-checklist" as const)({
  head: () => ({
    meta: [
      { title: "Newborn Essentials Checklist 2026: Must-Have Baby Registry Items | ChildBloom" },
      {
        name: "description",
        content:
          "Complete newborn essentials checklist: must-have baby registry items for the first 3 months including clothing, feeding, sleep, diapering, and safety gear with shopping tips.",
      },
      {
        property: "og:title",
        content: "Newborn Essentials Checklist 2026: Must-Have Baby Registry Items | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "Complete newborn essentials checklist: must-have baby registry items for the first 3 months including clothing, feeding, sleep, diapering, and safety gear.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/newborn-essentials-checklist" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Newborn Essentials Checklist 2026: Must-Have Baby Registry Items",
          description:
            "Complete newborn essentials checklist: must-have baby registry items for the first 3 months.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/newborn-essentials-checklist" },
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
              name: "Newborn Essentials Checklist",
              item: "https://childbloom.site/articles/newborn-essentials-checklist",
            },
          ],
        }),
      },
    ],
  }),
  component: NewbornEssentialsChecklistArticle,
});

function NewbornEssentialsChecklistArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Newborn Care
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Newborn Essentials Checklist 2026: Must-Have Baby Registry Items
            </h1>
            <p className="text-sm text-muted-foreground">
              11 min read • Published June 11, 2026 • Medically reviewed by Dr. Emma Lane, MD
            </p>
          </div>

          <nav
            className="rounded-2xl border border-border bg-muted p-5 text-sm"
            aria-label="Table of contents"
          >
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li>
                <a href="#clothing" className="text-primary hover:underline">
                  Clothing Essentials
                </a>
              </li>
              <li>
                <a href="#feeding" className="text-primary hover:underline">
                  Feeding Supplies
                </a>
              </li>
              <li>
                <a href="#sleep" className="text-primary hover:underline">
                  Sleep &amp; Nursery
                </a>
              </li>
              <li>
                <a href="#diapering" className="text-primary hover:underline">
                  Diapering &amp; Hygiene
                </a>
              </li>
              <li>
                <a href="#safety" className="text-primary hover:underline">
                  Safety &amp; Health
                </a>
              </li>
              <li>
                <a href="#gear" className="text-primary hover:underline">
                  On-the-Go Gear
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          <section id="clothing" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Clothing Essentials</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>6–8 onesies (long and short sleeve)</li>
              <li>4–6 footed pajamas / sleepers</li>
              <li>3–4 pairs of socks and mittens</li>
              <li>2–3 hats (for temperature regulation)</li>
              <li>2–3 swaddles or sleep sacks</li>
              <li>Light jacket or cardigan</li>
            </ul>
          </section>

          <section id="feeding" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Feeding Supplies</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Breast pump (if breastfeeding) + storage bags</li>
              <li>4–6 bottles (if formula or combo feeding)</li>
              <li>Bottle brush and drying rack</li>
              <li>Burp cloths (8–10)</li>
              <li>Nursing pillow and covers</li>
            </ul>
          </section>

          <section id="sleep" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Sleep &amp; Nursery</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Bassinet or crib with firm mattress</li>
              <li>Fitted sheets (3–4)</li>
              <li>Swaddles or sleep sacks</li>
              <li>White noise machine</li>
              <li>Blackout curtains</li>
              <li>Changing table or pad</li>
            </ul>
          </section>

          <section id="diapering" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Diapering &amp; Hygiene</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Diapers (size newborn + size 1)</li>
              <li>Wipes (fragrance-free)</li>
              <li>Diaper cream (zinc oxide)</li>
              <li>Diaper bag or caddy</li>
              <li>Baby bathtub or sink insert</li>
              <li>Gentle baby wash and lotion</li>
            </ul>
          </section>

          <section id="safety" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Safety &amp; Health</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Digital thermometer (rectal preferred for newborns)</li>
              <li>Nasal aspirator (bulb or electric)</li>
              <li>Baby nail clippers or file</li>
              <li>Infant car seat (with base)</li>
              <li>First aid kit for babies</li>
            </ul>
          </section>

          <section id="gear" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">On-the-Go Gear</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Stroller or travel system</li>
              <li>Baby carrier or wrap</li>
              <li>Diaper bag</li>
              <li>Portable changing pad</li>
            </ul>
            <p className="mt-4">
              Related:{" "}
              <a href="/articles/newborn-care-guide" className="text-primary hover:underline">
                Newborn Care Guide
              </a>
            </p>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">
                  How many onesies do I really need?
                </dt>
                <dd className="mt-2">
                  Start with 6–8. Babies go through several per day due to spit-up and diaper leaks.
                  You can always buy more later.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  Do I need both a bassinet and a crib?
                </dt>
                <dd className="mt-2">
                  A bassinet is convenient for the first 3–6 months. Many families use a bedside
                  bassinet for easier night feeds.
                </dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/newborn-care-guide" className="text-primary hover:underline">
                Newborn Care Guide
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/parenting-hacks" className="text-primary hover:underline">
                Parenting Hacks
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
