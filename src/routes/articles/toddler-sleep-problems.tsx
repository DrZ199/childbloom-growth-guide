import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/toddler-sleep-problems")({
  head: () => ({
    meta: [
      {
        title:
          "Toddler Sleep Problems: Night Wakings, Bedtime Battles & Regression Solutions | ChildBloom",
      },
      {
        name: "description",
        content:
          "Solve common toddler sleep problems: night wakings, bedtime resistance, sleep regression, early rising, and separation anxiety with gentle, evidence-based strategies for ages 1-3.",
      },
      {
        property: "og:title",
        content:
          "Toddler Sleep Problems: Night Wakings, Bedtime Battles & Regression Solutions | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "Solve common toddler sleep problems: night wakings, bedtime resistance, sleep regression, early rising, and separation anxiety.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/toddler-sleep-problems" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Toddler Sleep Problems: Night Wakings, Bedtime Battles & Regression Solutions",
          description:
            "Solve common toddler sleep problems: night wakings, bedtime resistance, sleep regression, early rising, and separation anxiety.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/toddler-sleep-problems" },
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
              name: "Toddler Sleep Problems",
              item: "https://childbloom.site/articles/toddler-sleep-problems",
            },
          ],
        }),
      },
    ],
  }),
  component: ToddlerSleepProblemsArticle,
});

function ToddlerSleepProblemsArticle() {
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
              Toddler Sleep Problems: Night Wakings, Bedtime Battles &amp; Regression Solutions
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
                <a href="#common-problems" className="text-primary hover:underline">
                  Common Toddler Sleep Problems
                </a>
              </li>
              <li>
                <a href="#night-wakings" className="text-primary hover:underline">
                  Night Wakings &amp; Early Rising
                </a>
              </li>
              <li>
                <a href="#bedtime-battles" className="text-primary hover:underline">
                  Bedtime Battles &amp; Resistance
                </a>
              </li>
              <li>
                <a href="#sleep-regression" className="text-primary hover:underline">
                  Sleep Regression (18 months, 2 years)
                </a>
              </li>
              <li>
                <a href="#separation-anxiety" className="text-primary hover:underline">
                  Separation Anxiety at Bedtime
                </a>
              </li>
              <li>
                <a href="#solutions" className="text-primary hover:underline">
                  Gentle Solutions &amp; Strategies
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
            id="common-problems"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Common Toddler Sleep Problems</h2>
            <p>
              Toddlers (1–3 years) often experience sleep disruptions due to developmental leaps,
              separation anxiety, and changing sleep needs.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Night wakings (multiple times per night)</li>
              <li>Bedtime resistance and stalling</li>
              <li>Early morning waking (before 6am)</li>
              <li>Short naps or refusing naps</li>
              <li>Sleep regression around 18 months and 2 years</li>
            </ul>
          </section>

          <section id="night-wakings" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Night Wakings &amp; Early Rising</h2>
            <p>
              Most toddlers still need 11–14 hours of sleep total. Night wakings are often due to
              sleep associations or overtiredness.
            </p>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-2">Quick Fixes</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Ensure consistent bedtime routine</li>
                <li>Check room temperature (68–72°F ideal)</li>
                <li>Use white noise and blackout curtains</li>
                <li>Avoid screens 1 hour before bed</li>
              </ul>
            </div>
          </section>

          <section
            id="bedtime-battles"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Bedtime Battles &amp; Resistance</h2>
            <p>
              Common stalling tactics include “one more book”, requests for water, or needing the
              potty repeatedly.
            </p>
            <p>
              <strong>Strategy:</strong> Set clear limits in advance and stick to them. Use a visual
              bedtime chart.
            </p>
          </section>

          <section
            id="sleep-regression"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Sleep Regression (18 months, 2 years)</h2>
            <p>
              Developmental milestones, teething, and increased independence often cause temporary
              sleep setbacks.
            </p>
            <p>
              Stay consistent with your routine and avoid creating new sleep crutches during
              regressions.
            </p>
          </section>

          <section
            id="separation-anxiety"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Separation Anxiety at Bedtime</h2>
            <p>
              Very common between 8–18 months and can resurface at 2 years. Gentle reassurance and
              consistent responses help.
            </p>
          </section>

          <section id="solutions" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Gentle Solutions &amp; Strategies</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Establish a predictable bedtime routine (bath → books → bed)</li>
              <li>Use a consistent phrase like “I love you, sleep tight”</li>
              <li>Gradually reduce parental presence</li>
              <li>Offer comfort objects (lovey, special blanket)</li>
              <li>Consider a toddler clock for early risers</li>
            </ul>
            <p className="mt-4">
              Related:{" "}
              <a href="/articles/sleep-training-methods" className="text-primary hover:underline">
                Sleep Training Methods
              </a>{" "}
              and{" "}
              <a href="/articles/baby-sleep-guide" className="text-primary hover:underline">
                Baby Sleep Guide
              </a>
            </p>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">
                  Why does my toddler wake up multiple times at night?
                </dt>
                <dd className="mt-2">
                  Common causes include overtiredness, hunger, teething, separation anxiety, or
                  learned sleep associations. Review the full sleep environment and routine.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  Is it okay to let my toddler cry at bedtime?
                </dt>
                <dd className="mt-2">
                  Gentle methods with check-ins are usually preferred. Pure cry-it-out can work but
                  may not suit every family or child.
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
              <a href="/articles/sleep-training-methods" className="text-primary hover:underline">
                Sleep Training Methods
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
