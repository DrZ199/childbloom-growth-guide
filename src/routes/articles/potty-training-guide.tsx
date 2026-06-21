import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/potty-training-guide")({
  head: () => ({
    meta: [
      { title: "Potty Training Guide: Complete Step-by-Step for Toddlers 18-36 Months | ChildBloom" },
      {
        name: "description",
        content: "Complete potty training guide for toddlers 18-36 months. Step-by-step methods, signs of readiness, common mistakes, night training, and gentle approaches that work.",
      },
      { property: "og:title", content: "Potty Training Guide: Complete Step-by-Step for Toddlers 18-36 Months | ChildBloom" },
      { property: "og:description", content: "Complete potty training guide for toddlers 18-36 months. Step-by-step methods, signs of readiness, common mistakes, night training, and gentle approaches." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://childbloom.site/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://childbloom.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/articles/potty-training-guide" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Potty Training Guide: Complete Step-by-Step for Toddlers 18-36 Months",
          description: "Complete potty training guide for toddlers 18-36 months. Step-by-step methods, signs of readiness, common mistakes, night training, and gentle approaches that work.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/potty-training-guide" },
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
            { "@type": "ListItem", position: 3, name: "Potty Training Guide", item: "https://childbloom.site/articles/potty-training-guide" },
          ],
        }),
      },
    ],
  }),
  component: PottyTrainingGuideArticle,
});

function PottyTrainingGuideArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Parenting • Development
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Potty Training Guide: Complete Step-by-Step for Toddlers 18-36 Months
            </h1>
            <p className="text-sm text-muted-foreground">19 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#signs-of-readiness" className="text-primary hover:underline">Signs Your Toddler Is Ready</a></li>
              <li><a href="#when-to-start" className="text-primary hover:underline">When to Start Potty Training</a></li>
              <li><a href="#step-by-step" className="text-primary hover:underline">Step-by-Step Potty Training Method</a></li>
              <li><a href="#common-mistakes" className="text-primary hover:underline">Common Mistakes to Avoid</a></li>
              <li><a href="#night-training" className="text-primary hover:underline">Night Training &amp; Bedwetting</a></li>
              <li><a href="#gentle-approaches" className="text-primary hover:underline">Gentle &amp; Child-Led Approaches</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="signs-of-readiness" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Signs Your Toddler Is Ready</h2>
            <p>
              Most children show readiness between 18 and 30 months, though some are ready earlier and others later. 
              Forcing training before your child shows these signs often leads to resistance and setbacks.
            </p>
            
            <h3 className="text-xl font-semibold">Physical Readiness Signs</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Stays dry for 2+ hours during the day</li>
              <li>Shows awareness of needing to go (squatting, holding, facial expressions)</li>
              <li>Can pull pants up and down independently</li>
              <li>Has regular, predictable bowel movements</li>
              <li>Can follow simple instructions</li>
            </ul>

            <h3 className="text-xl font-semibold">Behavioral &amp; Language Signs</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Shows interest in the potty or watching others use the bathroom</li>
              <li>Can communicate the need to go (words, signs, or gestures)</li>
              <li>Dislikes being in a wet or dirty diaper</li>
              <li>Wants to wear underwear like older siblings or parents</li>
            </ul>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-semibold text-amber-800 mb-2">⚠️ Important Note</h3>
              <p className="text-sm text-amber-700">
                If your child shows signs of resistance, fear, or has recently experienced major life changes (new sibling, moving, starting daycare), 
                it’s often better to wait a few weeks. Pushing too hard can create long-term negative associations.
              </p>
            </div>
          </section>

          <section id="when-to-start" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">When to Start Potty Training</h2>
            <p>
              There is no single “perfect” age. The best time is when your child shows consistent readiness signs 
              and you have the time and patience to stay consistent for several weeks.
            </p>
            
            <h3 className="text-xl font-semibold">Best Windows</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>18–24 months:</strong> Many children are physically ready; works well with child-led approaches</li>
              <li><strong>24–30 months:</strong> Most common successful window for structured training</li>
              <li><strong>30–36 months:</strong> Still very normal; some children need more time</li>
            </ul>

            <p>
              Related: <a href="/articles/potty-training-autism" className="text-primary hover:underline">Potty Training with Speech Delay or Autism</a>
            </p>
          </section>

          <section id="step-by-step" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Step-by-Step Potty Training Method</h2>
            
            <h3 className="text-xl font-semibold">Step 1: Preparation (1–2 Weeks Before)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Buy a child-sized potty or potty seat that fits securely on the toilet</li>
              <li>Choose training underwear or easy-to-remove pants</li>
              <li>Read potty books together daily</li>
              <li>Let your child pick out fun underwear</li>
              <li>Establish a consistent phrase (“Time to go potty”)</li>
            </ul>

            <h3 className="text-xl font-semibold">Step 2: The First Days (Bare-Bottom Method)</h3>
            <p>
              Many experts recommend starting with no pants or underwear for the first 1–3 days so your child can 
              see and feel what’s happening. Stay close to the potty and watch for signs.
            </p>

            <h3 className="text-xl font-semibold">Step 3: Build the Routine</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Take your child to the potty every 90–120 minutes</li>
              <li>Also go right after waking, before naps, and after meals</li>
              <li>Stay with them for 5–10 minutes — read a book or sing songs</li>
              <li>Celebrate successes (praise, stickers, small rewards)</li>
              <li>Stay calm and matter-of-fact about accidents</li>
            </ul>

            <h3 className="text-xl font-semibold">Step 4: Transition to Underwear</h3>
            <p>Once your child is consistently using the potty, switch to underwear during the day. 
            Keep diapers or pull-ups for naps and nighttime for the first few weeks.</p>
          </section>

          <section id="common-mistakes" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Common Mistakes to Avoid</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Starting too early or during stressful periods</li>
              <li>Punishing accidents or showing frustration</li>
              <li>Comparing your child to others</li>
              <li>Using rewards that create pressure (big toys, candy every time)</li>
              <li>Giving up after a few accidents</li>
              <li>Forcing long sitting times on the potty</li>
            </ul>
          </section>

          <section id="night-training" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Night Training &amp; Bedwetting</h2>
            <p>
              Nighttime dryness usually comes much later than daytime success — often between ages 3 and 7. 
              It’s largely developmental and not something you can force.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Wait until your child is consistently dry during the day for 1–2 months</li>
              <li>Use waterproof mattress protectors</li>
              <li>Limit fluids 1–2 hours before bed</li>
              <li>Take them to the potty right before sleep</li>
              <li>Consider a bedwetting alarm if your child is over 6 and motivated</li>
            </ul>
          </section>

          <section id="gentle-approaches" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Gentle &amp; Child-Led Approaches</h2>
            <p>
              Some children respond better to a slower, more child-led process. 
              This can take longer but often results in fewer power struggles.
            </p>
            <p>
              Related: <a href="/articles/sleep-training-methods" className="text-primary hover:underline">Gentle parenting approaches</a> often pair well with gentle potty training.
            </p>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">How long does potty training usually take?</dt>
                <dd className="mt-2">Most children achieve daytime dryness within 1–3 months of consistent training. Some master it in a few weeks, while others need several months. Nighttime training often takes longer.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Should I use pull-ups or go straight to underwear?</dt>
                <dd className="mt-2">Many parents use pull-ups during the transition or for naps/night. However, some children treat pull-ups like diapers. If progress stalls, switching to underwear during the day can help them feel the difference.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">What if my child refuses to sit on the potty?</dt>
                <dd className="mt-2">Never force them. Take a break for a few weeks and try again with a different approach (new potty, books, or letting them watch you or siblings). Pressure often backfires.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">My child was trained but started having accidents again. What should I do?</dt>
                <dd className="mt-2">Regression is very common around 18–24 months, during major life changes, or when teething. Stay calm, go back to more frequent potty trips, and reduce pressure. It usually resolves within a few weeks.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Is it normal for boys to train later than girls?</dt>
                <dd className="mt-2">On average, girls tend to train a few months earlier than boys, but there is huge individual variation. Focus on your child’s readiness rather than gender averages.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/toddler-sleep-problems" className="text-primary hover:underline">Toddler Sleep Problems</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/toddler-nutrition-tips" className="text-primary hover:underline">Toddler Nutrition Tips</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/speech-development-guide" className="text-primary hover:underline">Speech Development Guide</a>
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
