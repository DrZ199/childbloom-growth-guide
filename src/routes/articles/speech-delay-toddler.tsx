import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/speech-delay-toddler" as const)({
  head: () => ({
    meta: [
      { title: "Speech Delay in Toddlers: When to Worry and How to Help | ChildBloom" },
      {
        name: "description",
        content: "Complete guide to toddler speech delay. Red flags by age, causes, evaluation process, and practical ways parents can support language development at home.",
      },
      { property: "og:title", content: "Speech Delay in Toddlers: When to Worry and How to Help | ChildBloom" },
      { property: "og:description", content: "Complete guide to toddler speech delay. Red flags by age, causes, evaluation process, and practical ways parents can support language development." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/speech-delay-toddler" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Speech Delay in Toddlers: When to Worry and How to Help",
          description: "Complete guide to toddler speech delay. Red flags by age, causes, evaluation process, and practical ways parents can support language development.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/speech-delay-toddler" },
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
            { "@type": "ListItem", position: 3, name: "Speech Delay in Toddlers", item: "https://childbloom.site/articles/speech-delay-toddler" },
          ],
        }),
      },
    ],
  }),
  component: SpeechDelayToddlerArticle,
});

function SpeechDelayToddlerArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Development
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Speech Delay in Toddlers: When to Worry and How to Help
            </h1>
            <p className="text-sm text-muted-foreground">17 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#normal-development" className="text-primary hover:underline">Normal Speech Development</a></li>
              <li><a href="#red-flags" className="text-primary hover:underline">Red Flags by Age</a></li>
              <li><a href="#causes" className="text-primary hover:underline">Common Causes of Speech Delay</a></li>
              <li><a href="#evaluation" className="text-primary hover:underline">When and How to Get Evaluated</a></li>
              <li><a href="#home-strategies" className="text-primary hover:underline">How Parents Can Help at Home</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="normal-development" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Normal Speech Development</h2>
            <p>
              While every child develops at their own pace, there are general milestones that help identify when extra support may be needed.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>12 months: 1–3 words + gestures</li>
              <li>18 months: 10–25 words</li>
              <li>24 months: 50+ words, 2-word phrases</li>
              <li>30 months: 200–300 words, simple sentences</li>
            </ul>
          </section>

          <section id="red-flags" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Red Flags by Age</h2>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <ul className="list-disc space-y-2 pl-6 text-sm text-red-700">
                <li>No babbling by 12 months</li>
                <li>No words by 16–18 months</li>
                <li>Less than 50 words at 24 months</li>
                <li>No two-word combinations by 30 months</li>
                <li>Loss of previously used words</li>
              </ul>
            </div>
          </section>

          <section id="causes" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Common Causes of Speech Delay</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Hearing problems (even mild loss affects speech)</li>
              <li>Speech or language disorders</li>
              <li>Autism spectrum disorder</li>
              <li>Developmental delays</li>
              <li>Bilingual environment (usually temporary)</li>
              <li>Limited language exposure at home</li>
            </ul>
          </section>

          <section id="evaluation" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">When and How to Get Evaluated</h2>
            <p>
              If you have concerns, speak with your pediatrician. They can refer you for a free early intervention evaluation 
              (available in all states for children under 3).
            </p>
          </section>

          <section id="home-strategies" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">How Parents Can Help at Home</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Talk constantly during daily routines</li>
              <li>Read books together every day</li>
              <li>Expand on what your child says (“Ball!” → “Yes, the big red ball!”)</li>
              <li>Limit screen time</li>
              <li>Model correct speech without correcting your child</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Will my child catch up on their own?</dt>
                <dd className="mt-2">Some late talkers do catch up naturally, but many benefit from early intervention. It’s better to evaluate early than wait and see.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Does bilingualism cause speech delay?</dt>
                <dd className="mt-2">No. Bilingual children may have slightly smaller vocabularies in each language initially, but they catch up and often have cognitive advantages.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/speech-development-guide" className="text-primary hover:underline">Speech Development Guide</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/signs-of-autism-in-toddlers" className="text-primary hover:underline">Signs of Autism in Toddlers</a>
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
