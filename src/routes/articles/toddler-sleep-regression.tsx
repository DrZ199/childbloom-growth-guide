import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/toddler-sleep-regression" as const)({
  head: () => ({
    meta: [
      { title: "Toddler Sleep Regression: 18 Months, 2 Years & 3 Years Explained | ChildBloom" },
      {
        name: "description",
        content: "Complete guide to toddler sleep regressions at 18 months, 2 years, and 3 years. Causes, how long they last, and gentle strategies to get back on track.",
      },
      { property: "og:title", content: "Toddler Sleep Regression: 18 Months, 2 Years & 3 Years Explained | ChildBloom" },
      { property: "og:description", content: "Complete guide to toddler sleep regressions at 18 months, 2 years, and 3 years. Causes, duration, and gentle strategies." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/toddler-sleep-regression" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Toddler Sleep Regression: 18 Months, 2 Years & 3 Years Explained",
          description: "Complete guide to toddler sleep regressions at 18 months, 2 years, and 3 years. Causes, how long they last, and gentle strategies.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/toddler-sleep-regression" },
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
            { "@type": "ListItem", position: 3, name: "Toddler Sleep Regression", item: "https://childbloom.site/articles/toddler-sleep-regression" },
          ],
        }),
      },
    ],
  }),
  component: ToddlerSleepRegressionArticle,
});

function ToddlerSleepRegressionArticle() {
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
              Toddler Sleep Regression: 18 Months, 2 Years &amp; 3 Years Explained
            </h1>
            <p className="text-sm text-muted-foreground">16 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#what-is-regression" className="text-primary hover:underline">What Is a Sleep Regression?</a></li>
              <li><a href="#18-month" className="text-primary hover:underline">18-Month Sleep Regression</a></li>
              <li><a href="#2-year" className="text-primary hover:underline">2-Year Sleep Regression</a></li>
              <li><a href="#3-year" className="text-primary hover:underline">3-Year Sleep Regression</a></li>
              <li><a href="#strategies" className="text-primary hover:underline">Gentle Strategies That Help</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="what-is-regression" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">What Is a Sleep Regression?</h2>
            <p>
              A sleep regression is a period when a previously good sleeper suddenly starts waking frequently, resisting bedtime, 
              or having trouble falling asleep. These are usually tied to developmental leaps, separation anxiety, or changes in routine.
            </p>
          </section>

          <section id="18-month" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">18-Month Sleep Regression</h2>
            <p>
              Often triggered by walking, new words, and increased separation anxiety. Toddlers may fight naps and wake multiple times at night.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Duration: Usually 2–6 weeks</li>
              <li>Common signs: Night wakings, nap refusal, bedtime battles</li>
              <li>Helpful strategies: Consistent routine, comfort object, earlier bedtime</li>
            </ul>
          </section>

          <section id="2-year" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">2-Year Sleep Regression</h2>
            <p>
              Often coincides with language explosion, testing boundaries, and fear of missing out. Many toddlers start climbing out of cribs during this time.
            </p>
          </section>

          <section id="3-year" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">3-Year Sleep Regression</h2>
            <p>
              Triggered by imagination development, nightmares, and preschool transitions. Some children experience increased night wakings due to vivid dreams.
            </p>
          </section>

          <section id="strategies" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Gentle Strategies That Help</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Maintain a consistent bedtime routine</li>
              <li>Offer extra comfort without creating new sleep crutches</li>
              <li>Ensure enough daytime activity and outdoor time</li>
              <li>Address separation anxiety with gradual check-ins</li>
              <li>Consider a toddler clock for early risers</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">How long do toddler sleep regressions last?</dt>
                <dd className="mt-2">Most last between 2 and 6 weeks. The 18-month and 2-year regressions tend to be shorter if handled consistently.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Should I sleep train again during a regression?</dt>
                <dd className="mt-2">It’s usually best to maintain your current approach and add extra comfort. Major changes during regressions can prolong the disruption.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/baby-sleep-guide" className="text-primary hover:underline">Baby Sleep Guide</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/toddler-sleep-problems" className="text-primary hover:underline">Toddler Sleep Problems</a>
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
