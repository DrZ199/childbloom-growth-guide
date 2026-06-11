import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/potty-training-autism")({
  head: () => ({
    meta: [
      { title: "Potty Training with Autism or Speech Delay: Gentle Methods That Work | ChildBloom" },
      {
        name: "description",
        content: "Potty training guide for children with autism, speech delay, or developmental delays. Visual supports, routines, communication strategies, and realistic timelines that actually work.",
      },
      { property: "og:title", content: "Potty Training with Autism or Speech Delay: Gentle Methods That Work | ChildBloom" },
      { property: "og:description", content: "Potty training guide for children with autism, speech delay, or developmental delays. Visual supports, routines, and communication strategies." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/potty-training-autism" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Potty Training with Autism or Speech Delay: Gentle Methods That Work",
          description: "Potty training guide for children with autism, speech delay, or developmental delays. Visual supports, routines, communication strategies, and realistic timelines.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/potty-training-autism" },
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
            { "@type": "ListItem", position: 3, name: "Potty Training with Autism", item: "https://childbloom.site/articles/potty-training-autism" },
          ],
        }),
      },
    ],
  }),
  component: PottyTrainingAutismArticle,
});

function PottyTrainingAutismArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Development • Parenting
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Potty Training with Autism or Speech Delay: Gentle Methods That Work
            </h1>
            <p className="text-sm text-muted-foreground">20 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#unique-challenges" className="text-primary hover:underline">Unique Challenges</a></li>
              <li><a href="#readiness-signs" className="text-primary hover:underline">Signs of Readiness</a></li>
              <li><a href="#visual-supports" className="text-primary hover:underline">Visual Supports &amp; Communication</a></li>
              <li><a href="#step-by-step" className="text-primary hover:underline">Step-by-Step Approach</a></li>
              <li><a href="#common-challenges" className="text-primary hover:underline">Common Challenges &amp; Solutions</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="unique-challenges" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Unique Challenges</h2>
            <p>
              Children with autism, speech delays, or developmental delays often face additional hurdles during potty training, 
              including sensory sensitivities, difficulty understanding social expectations, and challenges with communication.
            </p>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-2">Common Barriers</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Sensory issues with the feel of the toilet or wiping</li>
                <li>Difficulty understanding the purpose of toileting</li>
                <li>Resistance to changes in routine</li>
                <li>Limited verbal communication</li>
                <li>Need for visual schedules and clear expectations</li>
              </ul>
            </div>
          </section>

          <section id="readiness-signs" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Signs of Readiness</h2>
            <p>
              Readiness signs may appear later than in neurotypical children. Focus on physical readiness rather than age.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Stays dry for longer periods</li>
              <li>Shows awareness of needing to go (even if they can’t verbalize it)</li>
              <li>Can follow simple visual instructions</li>
              <li>Has some bladder and bowel control</li>
            </ul>
          </section>

          <section id="visual-supports" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Visual Supports &amp; Communication</h2>
            <p>
              Visual supports are often the key to success for children with autism or speech delays.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Use picture schedules showing each step of using the potty</li>
              <li>Create a communication board with “potty,” “pee,” and “poop” symbols</li>
              <li>Use social stories that explain what happens in the bathroom</li>
              <li>Teach simple signs (ASL or gestures) for “potty” if verbal speech is limited</li>
            </ul>
          </section>

          <section id="step-by-step" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Step-by-Step Approach</h2>
            <ol className="list-decimal space-y-3 pl-6">
              <li><strong>Build familiarity:</strong> Let your child explore the bathroom and sit on the potty fully clothed</li>
              <li><strong>Use consistent routines:</strong> Take them at the same times every day (after meals, upon waking)</li>
              <li><strong>Start with short sits:</strong> Begin with 1–2 minutes and gradually increase</li>
              <li><strong>Celebrate small wins:</strong> Use preferred rewards (stickers, favorite toy, praise)</li>
              <li><strong>Be patient with accidents:</strong> Stay calm and redirect without shame</li>
            </ol>
          </section>

          <section id="common-challenges" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Common Challenges &amp; Solutions</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Sensory sensitivities:</strong> Try different toilet seats, footstools, or even training on the floor potty first</li>
              <li><strong>Resistance to sitting:</strong> Use preferred activities (books, tablets) during potty time</li>
              <li><strong>Not recognizing the sensation:</strong> Use scheduled sits every 60–90 minutes</li>
              <li><strong>Difficulty generalizing:</strong> Practice at home, school, and in public restrooms</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">At what age should I start potty training if my child has autism?</dt>
                <dd className="mt-2">Focus on readiness signs rather than age. Many children with autism are successfully trained between 3–6 years old, though some achieve it earlier with the right supports.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Should I use pull-ups or go straight to underwear?</dt>
                <dd className="mt-2">Many families use pull-ups during the learning phase and switch to underwear once the child shows consistent success. Some children benefit from feeling wet in underwear to make the connection.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/potty-training-guide" className="text-primary hover:underline">Potty Training Guide</a>
              <span className="text-muted-foreground">•</span>
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
