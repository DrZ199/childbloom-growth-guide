import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/sleep-training-methods" as const)({
  head: () => ({
    meta: [
      {
        title:
          "Sleep Training Methods 2026: Cry It Out, Ferber, Gentle & Chair Methods Compared | ChildBloom",
      },
      {
        name: "description",
        content:
          "Complete guide to popular sleep training methods: Cry It Out, Ferber, Gentle Sleep Training, Chair Method, and more. Pros, cons, age recommendations, and evidence-based advice for parents.",
      },
      {
        property: "og:title",
        content:
          "Sleep Training Methods 2026: Cry It Out, Ferber, Gentle & Chair Methods Compared | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "Complete guide to popular sleep training methods: Cry It Out, Ferber, Gentle Sleep Training, Chair Method, and more. Pros, cons, age recommendations.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/sleep-training-methods" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "Sleep Training Methods 2026: Cry It Out, Ferber, Gentle & Chair Methods Compared",
          description:
            "Complete guide to popular sleep training methods: Cry It Out, Ferber, Gentle Sleep Training, Chair Method, and more.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/sleep-training-methods" },
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
              name: "Sleep Training Methods",
              item: "https://childbloom.site/articles/sleep-training-methods",
            },
          ],
        }),
      },
    ],
  }),
  component: SleepTrainingMethodsArticle,
});

function SleepTrainingMethodsArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Sleep • Parenting
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Sleep Training Methods 2026: Cry It Out, Ferber, Gentle &amp; Chair Methods Compared
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
                <a href="#when-to-start" className="text-primary hover:underline">
                  When to Start Sleep Training
                </a>
              </li>
              <li>
                <a href="#cry-it-out" className="text-primary hover:underline">
                  Cry It Out (Extinction)
                </a>
              </li>
              <li>
                <a href="#ferber" className="text-primary hover:underline">
                  Ferber Method (Check &amp; Console)
                </a>
              </li>
              <li>
                <a href="#gentle" className="text-primary hover:underline">
                  Gentle Sleep Training Methods
                </a>
              </li>
              <li>
                <a href="#chair-method" className="text-primary hover:underline">
                  Chair Method / Camping Out
                </a>
              </li>
              <li>
                <a href="#comparison" className="text-primary hover:underline">
                  Method Comparison Table
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          <section id="when-to-start" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">When to Start Sleep Training</h2>
            <p>
              Most experts recommend waiting until at least 4–6 months when babies are
              developmentally ready and have established healthy sleep foundations.
            </p>
            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-semibold text-amber-800 mb-2">Important Prerequisites</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-amber-700">
                <li>Baby is at least 4–6 months old</li>
                <li>Healthy weight gain and no medical issues</li>
                <li>Consistent bedtime routine in place</li>
                <li>Parents are ready for a few difficult nights</li>
              </ul>
            </div>
          </section>

          <section id="cry-it-out" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Cry It Out (Extinction)</h2>
            <p>
              The most direct method: put baby down awake and do not return until morning (except
              for safety checks).
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Pros:</strong> Fast results (often 3–7 nights), clear boundaries
              </li>
              <li>
                <strong>Cons:</strong> Emotionally difficult for parents, not suitable for all
                families
              </li>
              <li>
                <strong>Best for:</strong> Babies 6+ months with no anxiety issues
              </li>
            </ul>
          </section>

          <section id="ferber" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Ferber Method (Check &amp; Console)</h2>
            <p>Graduated extinction: check on baby at increasing intervals without picking up.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Pros:</strong> More supportive than pure CIO, still effective
              </li>
              <li>
                <strong>Cons:</strong> Can still involve significant crying
              </li>
              <li>
                <a href="/articles/baby-sleep-guide" className="text-primary hover:underline">
                  Learn more in our Baby Sleep Guide
                </a>
              </li>
            </ul>
          </section>

          <section id="gentle" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Gentle Sleep Training Methods</h2>
            <p>
              Methods that minimize crying through fading techniques, pick-up/put-down, or fading
              the parent out gradually.
            </p>
            <h3 className="text-xl font-semibold">Pick Up / Put Down</h3>
            <p>Pick baby up when crying, soothe, then put down again. Repeat as needed.</p>
          </section>

          <section id="chair-method" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Chair Method / Camping Out</h2>
            <p>
              Parent sits in a chair next to the crib and gradually moves the chair farther away
              each night.
            </p>
          </section>

          <section id="comparison" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Method Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Method</th>
                    <th className="p-3 text-left font-medium">Crying Level</th>
                    <th className="p-3 text-left font-medium">Speed</th>
                    <th className="p-3 text-left font-medium">Parent Involvement</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Cry It Out</td>
                    <td className="p-3">High</td>
                    <td className="p-3">Fast (3-7 nights)</td>
                    <td className="p-3">Minimal</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Ferber</td>
                    <td className="p-3">Moderate-High</td>
                    <td className="p-3">Fast</td>
                    <td className="p-3">Low-Moderate</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Gentle</td>
                    <td className="p-3">Low-Moderate</td>
                    <td className="p-3">Slower (1-3 weeks)</td>
                    <td className="p-3">High</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Is sleep training harmful?</dt>
                <dd className="mt-2">
                  Research shows that behavioral sleep training is safe and effective when done
                  appropriately. The key is choosing a method that fits your family's values and
                  baby's temperament.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  What if my baby has reflux or other issues?
                </dt>
                <dd className="mt-2">
                  Always consult your pediatrician before starting sleep training if there are
                  medical concerns. Some conditions require modified approaches.
                </dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/baby-sleep-guide" className="text-primary hover:underline">
                Baby Sleep Guide
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/toddler-sleep-problems" className="text-primary hover:underline">
                Toddler Sleep Problems
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/best-baby-sleep-products" className="text-primary hover:underline">
                Best Baby Sleep Products
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
