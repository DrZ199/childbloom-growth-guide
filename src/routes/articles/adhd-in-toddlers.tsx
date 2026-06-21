import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/adhd-in-toddlers")({
  head: () => ({
    meta: [
      { title: "ADHD in Toddlers: Early Signs and What Parents Can Do | ChildBloom" },
      {
        name: "description",
        content: "Early signs of ADHD in toddlers (ages 2–4). What symptoms look like, when to seek evaluation, and practical strategies parents can use at home.",
      },
      { property: "og:title", content: "ADHD in Toddlers: Early Signs and What Parents Can Do | ChildBloom" },
      { property: "og:description", content: "Early signs of ADHD in toddlers (ages 2–4). What symptoms look like, when to seek evaluation, and practical strategies parents can use at home." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://childbloom.site/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://childbloom.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/articles/adhd-in-toddlers" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "ADHD in Toddlers: Early Signs and What Parents Can Do",
          description: "Early signs of ADHD in toddlers (ages 2–4). What symptoms look like, when to seek evaluation, and practical strategies parents can use at home.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/adhd-in-toddlers" },
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
            { "@type": "ListItem", position: 3, name: "ADHD in Toddlers", item: "https://childbloom.site/articles/adhd-in-toddlers" },
          ],
        }),
      },
    ],
  }),
  component: ADHDInToddlersArticle,
});

function ADHDInToddlersArticle() {
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
              ADHD in Toddlers: Early Signs and What Parents Can Do
            </h1>
            <p className="text-sm text-muted-foreground">15 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#can-toddlers-have-adhd" className="text-primary hover:underline">Can Toddlers Have ADHD?</a></li>
              <li><a href="#early-signs" className="text-primary hover:underline">Early Signs of ADHD in Toddlers</a></li>
              <li><a href="#when-to-seek-help" className="text-primary hover:underline">When to Seek an Evaluation</a></li>
              <li><a href="#parent-strategies" className="text-primary hover:underline">Strategies for Parents</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="can-toddlers-have-adhd" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Can Toddlers Have ADHD?</h2>
            <p>
              While ADHD is most commonly diagnosed in school-age children, many parents notice signs much earlier. 
              Diagnosing ADHD in toddlers is challenging because many typical toddler behaviors overlap with ADHD symptoms.
            </p>
          </section>

          <section id="early-signs" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Early Signs of ADHD in Toddlers</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Extreme hyperactivity compared to peers</li>
              <li>Very short attention span, even for age-appropriate activities</li>
              <li>Impulsivity (acting without thinking, grabbing, interrupting constantly)</li>
              <li>Difficulty following simple instructions</li>
              <li>Constant need for movement or stimulation</li>
              <li>Emotional dysregulation (intense tantrums that are hard to soothe)</li>
            </ul>
          </section>

          <section id="when-to-seek-help" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">When to Seek an Evaluation</h2>
            <p>
              Talk to your pediatrician if your toddler’s behavior is significantly different from other children their age and is causing problems at home or in daycare.
            </p>
          </section>

          <section id="parent-strategies" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Strategies for Parents</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Keep routines consistent</li>
              <li>Break tasks into very small steps</li>
              <li>Use visual schedules and timers</li>
              <li>Provide lots of physical activity</li>
              <li>Offer immediate, positive feedback</li>
              <li>Work closely with daycare providers</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Can ADHD be diagnosed before age 4?</dt>
                <dd className="mt-2">Diagnosis before age 4 is rare and difficult. Most clinicians prefer to wait until a child is in a structured preschool or kindergarten setting before making a formal diagnosis.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Is medication ever used for toddlers with ADHD?</dt>
                <dd className="mt-2">Medication is rarely recommended before age 4–5. Behavioral therapy and parent training are the first-line approaches for young children.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/signs-of-autism-in-toddlers" className="text-primary hover:underline">Signs of Autism in Toddlers</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/child-development-milestones" className="text-primary hover:underline">Child Development Milestones</a>
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
