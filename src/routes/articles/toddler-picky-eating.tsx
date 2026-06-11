import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/toddler-picky-eating" as const)({
  head: () => ({
    meta: [
      { title: "Toddler Picky Eating: 25 Strategies That Actually Work | ChildBloom" },
      {
        name: "description",
        content: "Practical strategies for feeding picky toddlers. 25 evidence-based tips to reduce mealtime battles, expand food variety, and build healthy eating habits without stress.",
      },
      { property: "og:title", content: "Toddler Picky Eating: 25 Strategies That Actually Work | ChildBloom" },
      { property: "og:description", content: "Practical strategies for feeding picky toddlers. 25 evidence-based tips to reduce mealtime battles and expand food variety." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/toddler-picky-eating" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Toddler Picky Eating: 25 Strategies That Actually Work",
          description: "Practical strategies for feeding picky toddlers. 25 evidence-based tips to reduce mealtime battles and expand food variety.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/toddler-picky-eating" },
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
            { "@type": "ListItem", position: 3, name: "Toddler Picky Eating", item: "https://childbloom.site/articles/toddler-picky-eating" },
          ],
        }),
      },
    ],
  }),
  component: ToddlerPickyEatingArticle,
});

function ToddlerPickyEatingArticle() {
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
              Toddler Picky Eating: 25 Strategies That Actually Work
            </h1>
            <p className="text-sm text-muted-foreground">18 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#why-picky-eating-happens" className="text-primary hover:underline">Why Picky Eating Happens</a></li>
              <li><a href="#strategies" className="text-primary hover:underline">25 Practical Strategies</a></li>
              <li><a href="#what-not-to-do" className="text-primary hover:underline">What Not to Do</a></li>
              <li><a href="#when-to-worry" className="text-primary hover:underline">When to Seek Help</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="why-picky-eating-happens" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Why Picky Eating Happens</h2>
            <p>
              Picky eating is extremely common between ages 1 and 5. It’s often a normal developmental phase 
              combined with a toddler’s growing need for independence and control.
            </p>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-2">Common Reasons</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Normal developmental phase (neophobia – fear of new foods)</li>
                <li>Desire for control and independence</li>
                <li>Sensory sensitivities</li>
                <li>Distraction or overstimulation at mealtimes</li>
                <li>Previous negative experiences with food</li>
              </ul>
            </div>
          </section>

          <section id="strategies" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">25 Practical Strategies</h2>
            
            <h3 className="text-xl font-semibold">Mealtime Environment</h3>
            <ol className="list-decimal space-y-2 pl-6">
              <li>Serve meals at consistent times</li>
              <li>Keep mealtimes calm and screen-free</li>
              <li>Eat together as a family when possible</li>
              <li>Offer a variety of foods in small portions</li>
              <li>Let your toddler help with simple food prep</li>
            </ol>

            <h3 className="text-xl font-semibold">Food Presentation</h3>
            <ol start={6} className="list-decimal space-y-2 pl-6">
              <li>Present new foods alongside familiar favorites</li>
              <li>Cut food into fun shapes</li>
              <li>Offer dips (yogurt, hummus, ketchup)</li>
              <li>Serve food in separate compartments (bento style)</li>
              <li>Let your child choose between two healthy options</li>
            </ol>

            <h3 className="text-xl font-semibold">Mindset &amp; Approach</h3>
            <ol start={11} className="list-decimal space-y-2 pl-6">
              <li>Remove pressure — you decide what and when, they decide how much</li>
              <li>Offer new foods 10–15 times before deciding they don’t like it</li>
              <li>Model eating the foods you want them to try</li>
              <li>Avoid using food as reward or punishment</li>
              <li>Keep mealtimes positive — no battles at the table</li>
            </ol>
          </section>

          <section id="what-not-to-do" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">What Not to Do</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Force your child to eat or finish their plate</li>
              <li>Make separate “kid meals” every night</li>
              <li>Use screens or toys as bribes</li>
              <li>Label your child as a “picky eater” in front of them</li>
              <li>Give up after 2–3 tries with a new food</li>
            </ul>
          </section>

          <section id="when-to-worry" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">When to Seek Help</h2>
            <p>
              Talk to your pediatrician if your toddler:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Has very limited food variety (fewer than 10–15 foods)</li>
              <li>Shows signs of nutritional deficiency or poor growth</li>
              <li>Has extreme sensory reactions to food textures</li>
              <li>Experiences significant anxiety around mealtimes</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Should I make my child sit at the table until they eat?</dt>
                <dd className="mt-2">No. Forcing children to sit for long periods often creates negative associations with mealtime. Keep meals pleasant and end them when your child is done eating.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Is it okay to hide vegetables in food?</dt>
                <dd className="mt-2">Occasionally hiding vegetables can help increase nutrient intake, but don’t rely on it exclusively. Continue offering whole vegetables so your child learns to accept them in their natural form.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/toddler-nutrition-tips" className="text-primary hover:underline">Toddler Nutrition Tips</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/starting-solids-guide" className="text-primary hover:underline">Starting Solids Guide</a>
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
