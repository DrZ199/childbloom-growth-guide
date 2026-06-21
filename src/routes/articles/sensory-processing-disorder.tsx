import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/sensory-processing-disorder")({
  head: () => ({
    meta: [
      { title: "Sensory Processing Disorder in Toddlers: Signs and Support Strategies | ChildBloom" },
      {
        name: "description",
        content: "Complete guide to Sensory Processing Disorder (SPD) in toddlers. Common signs, sensory-seeking vs sensory-avoiding behaviors, and practical strategies parents can use at home.",
      },
      { property: "og:title", content: "Sensory Processing Disorder in Toddlers: Signs and Support Strategies | ChildBloom" },
      { property: "og:description", content: "Complete guide to Sensory Processing Disorder (SPD) in toddlers. Common signs, sensory-seeking vs sensory-avoiding behaviors, and practical strategies." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://childbloom.site/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://childbloom.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/articles/sensory-processing-disorder" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Sensory Processing Disorder in Toddlers: Signs and Support Strategies",
          description: "Complete guide to Sensory Processing Disorder (SPD) in toddlers. Common signs, sensory-seeking vs sensory-avoiding behaviors, and practical strategies.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/sensory-processing-disorder" },
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
            { "@type": "ListItem", position: 3, name: "Sensory Processing Disorder", item: "https://childbloom.site/articles/sensory-processing-disorder" },
          ],
        }),
      },
    ],
  }),
  component: SensoryProcessingDisorderArticle,
});

function SensoryProcessingDisorderArticle() {
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
              Sensory Processing Disorder in Toddlers: Signs and Support Strategies
            </h1>
            <p className="text-sm text-muted-foreground">16 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#what-is-spd" className="text-primary hover:underline">What Is Sensory Processing Disorder?</a></li>
              <li><a href="#signs" className="text-primary hover:underline">Common Signs in Toddlers</a></li>
              <li><a href="#sensory-seeking-vs-avoiding" className="text-primary hover:underline">Sensory Seeking vs Sensory Avoiding</a></li>
              <li><a href="#support-strategies" className="text-primary hover:underline">Support Strategies at Home</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="what-is-spd" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">What Is Sensory Processing Disorder?</h2>
            <p>
              Sensory Processing Disorder (SPD) occurs when the brain has trouble receiving and responding to information from the senses. 
              Children with SPD may over-respond or under-respond to sensory input, affecting daily functioning.
            </p>
          </section>

          <section id="signs" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Common Signs in Toddlers</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Extreme reactions to sounds, textures, lights, or smells</li>
              <li>Constant need to touch or mouth objects</li>
              <li>Difficulty with transitions or changes in routine</li>
              <li>Picky eating or strong food texture preferences</li>
              <li>Clumsiness or poor coordination</li>
              <li>Seeking intense movement (spinning, jumping, crashing)</li>
            </ul>
          </section>

          <section id="sensory-seeking-vs-avoiding" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Sensory Seeking vs Sensory Avoiding</h2>
            <p><strong>Sensory Seekers</strong> crave intense input (loud sounds, rough play, spicy foods).</p>
            <p><strong>Sensory Avoiders</strong> are overwhelmed by input (cover ears, refuse certain textures, avoid messy play).</p>
          </section>

          <section id="support-strategies" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Support Strategies at Home</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Create a sensory-friendly environment</li>
              <li>Offer sensory activities (playdough, water play, swinging)</li>
              <li>Use deep pressure (weighted blankets, hugs)</li>
              <li>Prepare your child for transitions</li>
              <li>Work with an occupational therapist if needed</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Is Sensory Processing Disorder the same as autism?</dt>
                <dd className="mt-2">No. While many autistic children have sensory processing differences, SPD can occur on its own. A professional evaluation can help determine the best support.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Can my child outgrow SPD?</dt>
                <dd className="mt-2">Many children improve significantly with therapy and supportive strategies. Occupational therapy is often very effective.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/signs-of-autism-in-toddlers" className="text-primary hover:underline">Signs of Autism in Toddlers</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/adhd-in-toddlers" className="text-primary hover:underline">ADHD in Toddlers</a>
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
