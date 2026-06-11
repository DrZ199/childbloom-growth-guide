import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/preschool-readiness")({
  head: () => ({
    meta: [
      { title: "Preschool Readiness: Skills Your Child Needs Before Starting School | ChildBloom" },
      {
        name: "description",
        content: "Complete guide to preschool readiness. Academic, social, emotional, and self-care skills your child should have before starting preschool or pre-K.",
      },
      { property: "og:title", content: "Preschool Readiness: Skills Your Child Needs Before Starting School | ChildBloom" },
      { property: "og:description", content: "Complete guide to preschool readiness. Academic, social, emotional, and self-care skills your child should have before starting preschool." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/preschool-readiness" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Preschool Readiness: Skills Your Child Needs Before Starting School",
          description: "Complete guide to preschool readiness. Academic, social, emotional, and self-care skills your child should have before starting preschool.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/preschool-readiness" },
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
            { "@type": "ListItem", position: 3, name: "Preschool Readiness", item: "https://childbloom.site/articles/preschool-readiness" },
          ],
        }),
      },
    ],
  }),
  component: PreschoolReadinessArticle,
});

function PreschoolReadinessArticle() {
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
              Preschool Readiness: Skills Your Child Needs Before Starting School
            </h1>
            <p className="text-sm text-muted-foreground">15 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#academic-skills" className="text-primary hover:underline">Academic Readiness Skills</a></li>
              <li><a href="#social-emotional" className="text-primary hover:underline">Social &amp; Emotional Skills</a></li>
              <li><a href="#self-care" className="text-primary hover:underline">Self-Care &amp; Independence</a></li>
              <li><a href="#motor-skills" className="text-primary hover:underline">Motor Skills</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="academic-skills" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Academic Readiness Skills</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Recognizes some letters and numbers</li>
              <li>Can follow simple directions</li>
              <li>Shows interest in books and stories</li>
              <li>Can sort objects by color or shape</li>
              <li>Understands basic concepts (big/small, in/out)</li>
            </ul>
          </section>

          <section id="social-emotional" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Social &amp; Emotional Skills</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Can separate from parents with minimal distress</li>
              <li>Plays alongside other children</li>
              <li>Expresses emotions with words</li>
              <li>Can take turns with support</li>
              <li>Shows empathy toward others</li>
            </ul>
          </section>

          <section id="self-care" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Self-Care &amp; Independence</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Uses the bathroom independently (or with minimal help)</li>
              <li>Can feed themselves with utensils</li>
              <li>Puts on simple clothing items</li>
              <li>Washes hands independently</li>
              <li>Cleans up toys with reminders</li>
            </ul>
          </section>

          <section id="motor-skills" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Motor Skills</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Can run, jump, and climb</li>
              <li>Holds crayons or markers</li>
              <li>Can stack blocks</li>
              <li>Uses scissors with supervision</li>
              <li>Has good balance and coordination</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">What if my child isn’t ready for preschool?</dt>
                <dd className="mt-2">Many children start preschool with varying skill levels. Teachers are trained to support different developmental stages. Focus on social-emotional readiness more than academic skills.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">At what age should children start preschool?</dt>
                <dd className="mt-2">Most preschools accept children at 2.5–3 years old. Some programs start as early as 2, while others prefer children closer to 3 or 4.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/child-development-milestones" className="text-primary hover:underline">Child Development Milestones</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/toddler-activities-at-home" className="text-primary hover:underline">Toddler Activities at Home</a>
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
