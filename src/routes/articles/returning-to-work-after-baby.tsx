import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/returning-to-work-after-baby")({
  head: () => ({
    meta: [
      { title: "Returning to Work After Baby: A Practical Guide for New Parents | ChildBloom" },
      {
        name: "description",
        content: "Complete guide to returning to work after maternity leave. Pumping at work, daycare tips, emotional preparation, and how to make the transition smoother for you and your baby.",
      },
      { property: "og:title", content: "Returning to Work After Baby: A Practical Guide for New Parents | ChildBloom" },
      { property: "og:description", content: "Complete guide to returning to work after maternity leave. Pumping at work, daycare tips, emotional preparation, and how to make the transition smoother." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/returning-to-work-after-baby" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Returning to Work After Baby: A Practical Guide for New Parents",
          description: "Complete guide to returning to work after maternity leave. Pumping at work, daycare tips, emotional preparation, and how to make the transition smoother.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/returning-to-work-after-baby" },
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
            { "@type": "ListItem", position: 3, name: "Returning to Work After Baby", item: "https://childbloom.site/articles/returning-to-work-after-baby" },
          ],
        }),
      },
    ],
  }),
  component: ReturningToWorkArticle,
});

function ReturningToWorkArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Parenting
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Returning to Work After Baby: A Practical Guide for New Parents
            </h1>
            <p className="text-sm text-muted-foreground">17 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#emotional-preparation" className="text-primary hover:underline">Emotional Preparation</a></li>
              <li><a href="#childcare-options" className="text-primary hover:underline">Childcare Options</a></li>
              <li><a href="#pumping-at-work" className="text-primary hover:underline">Pumping at Work</a></li>
              <li><a href="#first-week-tips" className="text-primary hover:underline">First Week Back Tips</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="emotional-preparation" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Emotional Preparation</h2>
            <p>
              Returning to work after having a baby is often emotionally challenging. It’s normal to feel a mix of guilt, anxiety, sadness, and relief.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Acknowledge your feelings — they’re valid</li>
              <li>Practice short separations before your return date</li>
              <li>Build a support network of other working parents</li>
              <li>Remember that your baby will be well cared for</li>
            </ul>
          </section>

          <section id="childcare-options" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Childcare Options</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Daycare centers:</strong> Structured environment, socialization</li>
              <li><strong>In-home daycare:</strong> Smaller groups, more personal</li>
              <li><strong>Nanny or au pair:</strong> One-on-one care in your home</li>
              <li><strong>Family member:</strong> Familiar caregiver, potential cost savings</li>
              <li><strong>Part-time or flexible work:</strong> Easing back gradually</li>
            </ul>
          </section>

          <section id="pumping-at-work" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Pumping at Work</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Know your rights under the PUMP Act</li>
              <li>Find a private, clean space with an outlet</li>
              <li>Invest in a good portable or wearable pump</li>
              <li>Store milk properly (cooler bag with ice packs)</li>
              <li>Communicate with your manager about break times</li>
            </ul>
          </section>

          <section id="first-week-tips" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">First Week Back Tips</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Start mid-week if possible</li>
              <li>Have backup childcare plans</li>
              <li>Keep a photo of your baby at your desk</li>
              <li>Give yourself grace — the transition takes time</li>
              <li>Check in with your baby’s caregiver regularly at first</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">How long should I take for maternity leave?</dt>
                <dd className="mt-2">The ideal length varies. Many experts recommend at least 12 weeks. Longer leaves (16–20 weeks) are associated with better mental health outcomes for moms.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Will my baby forget me if I go back to work?</dt>
                <dd className="mt-2">No. Babies form strong attachments even when parents work. Consistent, loving care from you during non-work hours is what matters most.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/parenting-survival-guide" className="text-primary hover:underline">Parenting Survival Guide</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/postpartum-mental-health" className="text-primary hover:underline">Postpartum Mental Health</a>
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
