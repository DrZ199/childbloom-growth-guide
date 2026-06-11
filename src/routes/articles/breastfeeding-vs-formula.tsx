import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/breastfeeding-vs-formula")({
  head: () => ({
    meta: [
      { title: "Breastfeeding vs Formula: Pros, Cons, and How to Decide | ChildBloom" },
      {
        name: "description",
        content: "Balanced comparison of breastfeeding vs formula feeding. Pros and cons of each, hybrid approaches, and how to make the best decision for your family.",
      },
      { property: "og:title", content: "Breastfeeding vs Formula: Pros, Cons, and How to Decide | ChildBloom" },
      { property: "og:description", content: "Balanced comparison of breastfeeding vs formula feeding. Pros and cons of each, hybrid approaches, and how to make the best decision." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/breastfeeding-vs-formula" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Breastfeeding vs Formula: Pros, Cons, and How to Decide",
          description: "Balanced comparison of breastfeeding vs formula feeding. Pros and cons of each, hybrid approaches, and how to make the best decision.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/breastfeeding-vs-formula" },
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
            { "@type": "ListItem", position: 3, name: "Breastfeeding vs Formula", item: "https://childbloom.site/articles/breastfeeding-vs-formula" },
          ],
        }),
      },
    ],
  }),
  component: BreastfeedingVsFormulaArticle,
});

function BreastfeedingVsFormulaArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Nutrition • Parenting
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Breastfeeding vs Formula: Pros, Cons, and How to Decide
            </h1>
            <p className="text-sm text-muted-foreground">16 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#breastfeeding-pros-cons" className="text-primary hover:underline">Breastfeeding: Pros and Cons</a></li>
              <li><a href="#formula-pros-cons" className="text-primary hover:underline">Formula Feeding: Pros and Cons</a></li>
              <li><a href="#hybrid-approach" className="text-primary hover:underline">The Hybrid Approach</a></li>
              <li><a href="#how-to-decide" className="text-primary hover:underline">How to Make the Right Decision</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="breastfeeding-pros-cons" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Breastfeeding: Pros and Cons</h2>
            <h3 className="text-xl font-semibold">Benefits</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Perfect nutrition tailored to your baby</li>
              <li>Antibodies and immune protection</li>
              <li>Convenience and cost savings</li>
              <li>Bonding and skin-to-skin contact</li>
              <li>Health benefits for mom (reduced risk of certain cancers)</li>
            </ul>
            <h3 className="text-xl font-semibold">Challenges</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Learning curve and potential difficulties</li>
              <li>Time commitment (especially early on)</li>
              <li>Physical demands on mom</li>
              <li>Public feeding considerations</li>
            </ul>
          </section>

          <section id="formula-pros-cons" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Formula Feeding: Pros and Cons</h2>
            <h3 className="text-xl font-semibold">Benefits</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Anyone can feed the baby</li>
              <li>More flexibility and freedom for mom</li>
              <li>Easier to track intake</li>
              <li>Less physical demand on mom</li>
            </ul>
            <h3 className="text-xl font-semibold">Challenges</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Cost of formula</li>
              <li>Preparation and sterilization</li>
              <li>Lack of antibodies</li>
              <li>Potential digestive issues for some babies</li>
            </ul>
          </section>

          <section id="hybrid-approach" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">The Hybrid Approach</h2>
            <p>
              Many families successfully combine breastfeeding and formula. This can include:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Exclusive pumping + formula supplementation</li>
              <li>Breastfeeding during the day + formula at night</li>
              <li>Mostly breastfeeding with occasional formula bottles</li>
            </ul>
          </section>

          <section id="how-to-decide" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">How to Make the Right Decision</h2>
            <p>
              There is no one-size-fits-all answer. Consider your health, lifestyle, support system, and personal goals. 
              Both breastfeeding and formula feeding can result in healthy, thriving babies.
            </p>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Can I switch from breastfeeding to formula later?</dt>
                <dd className="mt-2">Yes. Many moms transition to formula at various points. Your body will adjust, and your baby will adapt to the change.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Is it okay to breastfeed and give formula?</dt>
                <dd className="mt-2">Absolutely. Combination feeding is very common and works well for many families.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/best-breast-pumps" className="text-primary hover:underline">Best Breast Pumps 2026</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/postpartum-recovery" className="text-primary hover:underline">Postpartum Recovery Timeline</a>
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
