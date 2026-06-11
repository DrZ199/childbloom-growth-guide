import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/toddler-tantrums" as const)({
  head: () => ({
    meta: [
      { title: "Toddler Tantrums: Why They Happen and How to Handle Them Calmly | ChildBloom" },
      {
        name: "description",
        content: "Complete guide to toddler tantrums: why they happen, how to prevent them, calm in-the-moment strategies, and when to seek help. Evidence-based parenting advice.",
      },
      { property: "og:title", content: "Toddler Tantrums: Why They Happen and How to Handle Them Calmly | ChildBloom" },
      { property: "og:description", content: "Complete guide to toddler tantrums: why they happen, how to prevent them, calm in-the-moment strategies, and when to seek help." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/toddler-tantrums" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Toddler Tantrums: Why They Happen and How to Handle Them Calmly",
          description: "Complete guide to toddler tantrums: why they happen, how to prevent them, calm in-the-moment strategies, and when to seek help.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/toddler-tantrums" },
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
            { "@type": "ListItem", position: 3, name: "Toddler Tantrums", item: "https://childbloom.site/articles/toddler-tantrums" },
          ],
        }),
      },
    ],
  }),
  component: ToddlerTantrumsArticle,
});

function ToddlerTantrumsArticle() {
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
              Toddler Tantrums: Why They Happen and How to Handle Them Calmly
            </h1>
            <p className="text-sm text-muted-foreground">17 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#why-tantrums-happen" className="text-primary hover:underline">Why Tantrums Happen</a></li>
              <li><a href="#common-triggers" className="text-primary hover:underline">Common Tantrum Triggers</a></li>
              <li><a href="#in-the-moment" className="text-primary hover:underline">In-the-Moment Strategies</a></li>
              <li><a href="#prevention" className="text-primary hover:underline">Prevention Strategies</a></li>
              <li><a href="#when-to-worry" className="text-primary hover:underline">When to Seek Professional Help</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="why-tantrums-happen" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Why Tantrums Happen</h2>
            <p>
              Tantrums are a normal part of toddler development. Between ages 1 and 4, children experience big emotions 
              but lack the brain development and language skills to manage them effectively.
            </p>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-2">Key Developmental Reasons</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Prefrontal cortex (impulse control) is still developing</li>
                <li>Limited vocabulary to express complex feelings</li>
                <li>Strong need for independence mixed with need for security</li>
                <li>Overwhelm from too many choices or stimulation</li>
              </ul>
            </div>
          </section>

          <section id="common-triggers" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Common Tantrum Triggers</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Hunger, tiredness, or overstimulation</li>
              <li>Transitioning between activities</li>
              <li>Being told “no” or having something taken away</li>
              <li>Wanting independence but needing help</li>
              <li>Feeling ignored or not understood</li>
              <li>Sensory overload (loud places, bright lights, crowds)</li>
            </ul>
          </section>

          <section id="in-the-moment" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">In-the-Moment Strategies</h2>
            
            <h3 className="text-xl font-semibold">1. Stay Calm (The Most Important Step)</h3>
            <p>Your calm presence helps regulate your child’s nervous system. Take deep breaths and remind yourself this is normal development.</p>

            <h3 className="text-xl font-semibold">2. Ensure Safety</h3>
            <p>Move your child to a safe space if they’re hitting, kicking, or throwing things. Stay nearby but give space if needed.</p>

            <h3 className="text-xl font-semibold">3. Use Simple Language</h3>
            <p>“I see you’re very upset.” “You’re feeling frustrated.” Naming the emotion helps children learn to identify feelings.</p>

            <h3 className="text-xl font-semibold">4. Offer Limited Choices</h3>
            <p>“Do you want the blue cup or the red cup?” Giving small choices restores a sense of control.</p>

            <h3 className="text-xl font-semibold">5. Wait It Out</h3>
            <p>Most tantrums last 1–3 minutes. Once your child is calm, reconnect with a hug or gentle touch.</p>
          </section>

          <section id="prevention" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Prevention Strategies</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Maintain consistent routines for meals and sleep</li>
              <li>Give warnings before transitions (“5 more minutes, then we’re leaving”)</li>
              <li>Offer choices throughout the day to reduce power struggles</li>
              <li>Make sure your child feels heard and understood</li>
              <li>Limit screen time and overstimulation before outings</li>
              <li>Teach emotional vocabulary through books and daily conversation</li>
            </ul>
          </section>

          <section id="when-to-worry" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">When to Seek Professional Help</h2>
            <p>While tantrums are normal, consult your pediatrician if:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Tantrums last longer than 15–20 minutes regularly</li>
              <li>Your child hurts themselves or others frequently</li>
              <li>Tantrums increase dramatically after age 4</li>
              <li>Your child seems unable to calm down even with support</li>
              <li>There are concerns about speech, social skills, or development</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Is it okay to ignore a tantrum?</dt>
                <dd className="mt-2">For minor attention-seeking tantrums, calmly ignoring can work. However, always ensure safety and reconnect once your child is calm. Complete ignoring can feel rejecting to a young child.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Should I give in to stop the tantrum?</dt>
                <dd className="mt-2">Consistently giving in teaches that tantrums work. It’s better to stay firm on boundaries while offering comfort and connection. This is hard in public — it’s okay to leave the situation if needed.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">My child has tantrums every day. Is this normal?</dt>
                <dd className="mt-2">Daily tantrums are common between ages 2–3. If they’re becoming more frequent or intense, look at sleep, hunger, overstimulation, or unmet emotional needs.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/parenting-survival-guide" className="text-primary hover:underline">Parenting Survival Guide</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/potty-training-guide" className="text-primary hover:underline">Potty Training Guide</a>
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
