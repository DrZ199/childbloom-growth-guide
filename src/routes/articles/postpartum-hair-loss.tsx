import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/postpartum-hair-loss")({
  head: () => ({
    meta: [
      { title: "Postpartum Hair Loss: Why It Happens and How to Cope | ChildBloom" },
      {
        name: "description",
        content: "Complete guide to postpartum hair loss (telogen effluvium). Why it happens, when it peaks, how long it lasts, and practical ways to manage hair shedding after pregnancy.",
      },
      { property: "og:title", content: "Postpartum Hair Loss: Why It Happens and How to Cope | ChildBloom" },
      { property: "og:description", content: "Complete guide to postpartum hair loss (telogen effluvium). Why it happens, when it peaks, how long it lasts, and practical ways to manage hair shedding." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/postpartum-hair-loss" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Postpartum Hair Loss: Why It Happens and How to Cope",
          description: "Complete guide to postpartum hair loss (telogen effluvium). Why it happens, when it peaks, how long it lasts, and practical ways to manage hair shedding.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/postpartum-hair-loss" },
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
            { "@type": "ListItem", position: 3, name: "Postpartum Hair Loss", item: "https://childbloom.site/articles/postpartum-hair-loss" },
          ],
        }),
      },
    ],
  }),
  component: PostpartumHairLossArticle,
});

function PostpartumHairLossArticle() {
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
              Postpartum Hair Loss: Why It Happens and How to Cope
            </h1>
            <p className="text-sm text-muted-foreground">13 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#why-it-happens" className="text-primary hover:underline">Why Postpartum Hair Loss Happens</a></li>
              <li><a href="#when-it-peaks" className="text-primary hover:underline">When It Peaks and How Long It Lasts</a></li>
              <li><a href="#coping-strategies" className="text-primary hover:underline">Practical Coping Strategies</a></li>
              <li><a href="#when-to-worry" className="text-primary hover:underline">When to See a Doctor</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="why-it-happens" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Why Postpartum Hair Loss Happens</h2>
            <p>
              During pregnancy, high estrogen levels keep hair in the growth phase longer, so many women experience thicker, fuller hair. 
              After birth, estrogen drops sharply, causing a large number of hairs to enter the shedding phase at once (telogen effluvium).
            </p>
          </section>

          <section id="when-it-peaks" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">When It Peaks and How Long It Lasts</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Most women notice increased shedding between 3 and 6 months postpartum</li>
              <li>Peak shedding usually occurs around 4 months</li>
              <li>Hair typically returns to normal within 6–12 months</li>
              <li>New growth may appear as short “baby hairs” around the hairline</li>
            </ul>
          </section>

          <section id="coping-strategies" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Practical Coping Strategies</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Use gentle shampoos and avoid harsh styling</li>
              <li>Consider a shorter haircut to reduce the appearance of thinning</li>
              <li>Avoid tight hairstyles that pull on the hair</li>
              <li>Eat a nutrient-rich diet (protein, iron, biotin)</li>
              <li>Be patient — this is temporary</li>
            </ul>
          </section>

          <section id="when-to-worry" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">When to See a Doctor</h2>
            <p>
              While postpartum hair loss is normal, consult your doctor if:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Hair loss is extreme or patchy</li>
              <li>You notice bald spots</li>
              <li>Shedding continues beyond 12–18 months</li>
              <li>You have other symptoms (fatigue, weight changes)</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Will my hair ever go back to normal?</dt>
                <dd className="mt-2">Yes. For the vast majority of women, hair returns to its pre-pregnancy thickness within 6–12 months after giving birth.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Can I prevent postpartum hair loss?</dt>
                <dd className="mt-2">You can’t fully prevent it, but maintaining good nutrition and gentle hair care can minimize the impact.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/postpartum-recovery" className="text-primary hover:underline">Postpartum Recovery Timeline</a>
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
