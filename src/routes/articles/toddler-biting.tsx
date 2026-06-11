import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/toddler-biting" as const)({
  head: () => ({
    meta: [
      { title: "Biting in Toddlers: Why It Happens and How to Stop It | ChildBloom" },
      {
        name: "description",
        content: "Complete guide to toddler biting. Why toddlers bite, how to respond in the moment, prevention strategies, and when to seek help.",
      },
      { property: "og:title", content: "Biting in Toddlers: Why It Happens and How to Stop It | ChildBloom" },
      { property: "og:description", content: "Complete guide to toddler biting. Why toddlers bite, how to respond in the moment, prevention strategies, and when to seek help." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/toddler-biting" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Biting in Toddlers: Why It Happens and How to Stop It",
          description: "Complete guide to toddler biting. Why toddlers bite, how to respond in the moment, prevention strategies, and when to seek help.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/toddler-biting" },
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
            { "@type": "ListItem", position: 3, name: "Biting in Toddlers", item: "https://childbloom.site/articles/toddler-biting" },
          ],
        }),
      },
    ],
  }),
  component: ToddlerBitingArticle,
});

function ToddlerBitingArticle() {
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
              Biting in Toddlers: Why It Happens and How to Stop It
            </h1>
            <p className="text-sm text-muted-foreground">14 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#why-toddlers-bite" className="text-primary hover:underline">Why Toddlers Bite</a></li>
              <li><a href="#in-the-moment" className="text-primary hover:underline">How to Respond in the Moment</a></li>
              <li><a href="#prevention" className="text-primary hover:underline">Prevention Strategies</a></li>
              <li><a href="#when-to-worry" className="text-primary hover:underline">When to Seek Professional Help</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="why-toddlers-bite" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Why Toddlers Bite</h2>
            <p>
              Biting is a common behavior in toddlers, especially between 12 and 36 months. It is often a form of communication when children lack the words to express strong emotions.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Frustration or anger</li>
              <li>Overstimulation or tiredness</li>
              <li>Teething pain</li>
              <li>Seeking attention</li>
              <li>Exploration (especially in younger toddlers)</li>
              <li>Difficulty with sharing or taking turns</li>
            </ul>
          </section>

          <section id="in-the-moment" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">How to Respond in the Moment</h2>
            <ol className="list-decimal space-y-3 pl-6">
              <li><strong>Stay calm</strong> — Reacting with anger can escalate the situation.</li>
              <li><strong>Ensure safety</strong> — Separate the children and check for injury.</li>
              <li><strong>Use simple language</strong> — “Biting hurts. We don’t bite.”</li>
              <li><strong>Redirect</strong> — Offer an alternative (e.g., “You can bite this teether instead”).</li>
              <li><strong>Follow up later</strong> — Talk about feelings when everyone is calm.</li>
            </ol>
          </section>

          <section id="prevention" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Prevention Strategies</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Watch for early signs of frustration and intervene early</li>
              <li>Teach words for emotions (“You’re feeling mad”)</li>
              <li>Ensure your child is well-rested and fed</li>
              <li>Model calm behavior during conflicts</li>
              <li>Provide teething toys if appropriate</li>
              <li>Supervise closely during playdates</li>
            </ul>
          </section>

          <section id="when-to-worry" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">When to Seek Professional Help</h2>
            <p>
              Most biting is a normal phase. However, consult your pediatrician or a child behavior specialist if:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Biting continues past age 3–4</li>
              <li>Your child bites frequently and aggressively</li>
              <li>Biting is accompanied by other concerning behaviors</li>
              <li>Your child seems unable to control impulses</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Should I bite my child back to teach them a lesson?</dt>
                <dd className="mt-2">No. Biting back models the exact behavior you want to stop and can frighten or confuse your child.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">How long does the biting phase usually last?</dt>
                <dd className="mt-2">Most children stop biting between ages 2 and 3 as their language skills improve. Consistent, calm responses help shorten the phase.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/toddler-tantrums" className="text-primary hover:underline">Toddler Tantrums</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/parenting-hacks" className="text-primary hover:underline">Parenting Hacks</a>
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
