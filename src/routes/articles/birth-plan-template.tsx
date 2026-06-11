import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/birth-plan-template" as const)({
  head: () => ({
    meta: [
      { title: "Birth Plan Template: How to Write One + Sample Birth Plan | ChildBloom" },
      {
        name: "description",
        content: "Complete guide to creating a birth plan. Free template, what to include, sample birth plan, and how to communicate your preferences with your birth team.",
      },
      { property: "og:title", content: "Birth Plan Template: How to Write One + Sample Birth Plan | ChildBloom" },
      { property: "og:description", content: "Complete guide to creating a birth plan. Free template, what to include, sample birth plan, and how to communicate your preferences." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/birth-plan-template" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Birth Plan Template: How to Write One + Sample Birth Plan",
          description: "Complete guide to creating a birth plan. Free template, what to include, sample birth plan, and how to communicate your preferences.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/birth-plan-template" },
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
            { "@type": "ListItem", position: 3, name: "Birth Plan Template", item: "https://childbloom.site/articles/birth-plan-template" },
          ],
        }),
      },
    ],
  }),
  component: BirthPlanTemplateArticle,
});

function BirthPlanTemplateArticle() {
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
              Birth Plan Template: How to Write One + Sample Birth Plan
            </h1>
            <p className="text-sm text-muted-foreground">15 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#what-is-a-birth-plan" className="text-primary hover:underline">What Is a Birth Plan?</a></li>
              <li><a href="#what-to-include" className="text-primary hover:underline">What to Include in Your Birth Plan</a></li>
              <li><a href="#sample-template" className="text-primary hover:underline">Sample Birth Plan Template</a></li>
              <li><a href="#how-to-use" className="text-primary hover:underline">How to Use and Communicate Your Plan</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="what-is-a-birth-plan" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">What Is a Birth Plan?</h2>
            <p>
              A birth plan is a written document that outlines your preferences for labor, delivery, and immediate postpartum care. 
              It helps communicate your wishes to your birth team while remaining flexible.
            </p>
          </section>

          <section id="what-to-include" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">What to Include in Your Birth Plan</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Labor preferences (mobility, pain relief, monitoring)</li>
              <li>Delivery preferences (positions, interventions, cord clamping)</li>
              <li>Newborn care (immediate skin-to-skin, feeding, procedures)</li>
              <li>Postpartum preferences (rooming-in, visitors, breastfeeding support)</li>
              <li>Special requests or medical considerations</li>
            </ul>
          </section>

          <section id="sample-template" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Sample Birth Plan Template</h2>
            <div className="rounded-2xl border border-border bg-muted p-6 text-sm">
              <p><strong>Birth Plan for [Your Name]</strong></p>
              <p><strong>Due Date:</strong> [Date] | <strong>Provider:</strong> [Name]</p>
              <br />
              <p><strong>Labor Preferences:</strong></p>
              <ul className="list-disc pl-6">
                <li>Intermittent monitoring preferred</li>
                <li>Freedom to move and change positions</li>
                <li>Minimal interventions unless medically necessary</li>
              </ul>
              <br />
              <p><strong>Delivery Preferences:</strong></p>
              <ul className="list-disc pl-6">
                <li>Delayed cord clamping</li>
                <li>Immediate skin-to-skin</li>
                <li>No episiotomy unless emergency</li>
              </ul>
            </div>
          </section>

          <section id="how-to-use" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">How to Use and Communicate Your Plan</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Share with your provider at prenatal visits</li>
              <li>Bring copies to the hospital or birth center</li>
              <li>Discuss with your support team</li>
              <li>Remember: Flexibility is key — birth can be unpredictable</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Do I need a birth plan?</dt>
                <dd className="mt-2">A birth plan is helpful but not required. Many parents find it reduces anxiety and improves communication with their care team.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Can my birth plan change during labor?</dt>
                <dd className="mt-2">Yes. Birth plans should always remain flexible. Medical needs or your changing preferences can alter the plan.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/postpartum-recovery" className="text-primary hover:underline">Postpartum Recovery Timeline</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/parenting-survival-guide" className="text-primary hover:underline">Parenting Survival Guide</a>
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
