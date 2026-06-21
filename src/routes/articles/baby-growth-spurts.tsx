import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/baby-growth-spurts")({
  head: () => ({
    meta: [
      { title: "Baby & Toddler Growth Spurts: Signs, Timing & What to Do | ChildBloom" },
      {
        name: "description",
        content:
          "Everything parents need to know about baby and toddler growth spurts — when they happen, what signs to look for, how long they last, and how to support your child through each one.",
      },
      {
        property: "og:title",
        content: "Baby & Toddler Growth Spurts: Signs, Timing & What to Do | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "When growth spurts happen, what signs to watch for, how long they last, and how to get through them.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://childbloom.site/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://childbloom.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/articles/baby-growth-spurts" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Baby & Toddler Growth Spurts: Signs, Timing & What to Do",
          description:
            "Everything parents need to know about baby and toddler growth spurts — when they happen, what signs to look for, how long they last, and how to support your child through each one.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://childbloom.site/articles/baby-growth-spurts",
          },
          datePublished: "2026-06-21",
          dateModified: "2026-06-21",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://childbloom.site" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Articles",
              item: "https://childbloom.site/articles",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Baby Growth Spurts",
              item: "https://childbloom.site/articles/baby-growth-spurts",
            },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: [
            {
              "@type": "Question",
              name: "When do babies have growth spurts?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Common growth spurts happen around 1 to 3 weeks, 6 weeks, 3 months, 6 months, and 9 months, though every baby is different. Toddlers also have growth spurts, just less frequently and predictably than in the first year.",
              },
            },
            {
              "@type": "Question",
              name: "What are the signs of a growth spurt?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Signs include sudden increased hunger and more frequent feeding, changes in sleep (either more sleep or more night waking), extra fussiness or clinginess, and sometimes a noticeable jump in weight, length, or clothing size afterward.",
              },
            },
            {
              "@type": "Question",
              name: "How long do growth spurts last?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most growth spurts last 2 to 3 days, though some can stretch to about a week. They are temporary, and feeding and sleep usually settle back to normal once the spurt passes.",
              },
            },
            {
              "@type": "Question",
              name: "Do growth spurts affect breastfeeding?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. During a growth spurt, a breastfed baby often cluster feeds to boost your milk supply to meet their increased needs. This is normal and temporary — feeding on demand for a few days usually brings supply and demand back into balance.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: BabyGrowthSpurtsArticle,
});

function BabyGrowthSpurtsArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          {/* Header */}
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Development
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Baby &amp; Toddler Growth Spurts: Signs, Timing &amp; What to Do
            </h1>
            <p className="text-sm text-muted-foreground">
              14 min read &bull; Published June 21, 2026 &bull; Medically reviewed by Dr. Emma Lane,
              MD
            </p>
          </div>

          {/* Quick Answer */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <h2 className="font-semibold text-foreground mb-2">Quick Answer</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Growth spurts are short bursts of rapid growth, most common around 1–3 weeks, 6 weeks,
              3 months, 6 months, and 9 months. Typical signs are sudden extra hunger, changes in
              sleep, and increased fussiness, usually lasting 2 to 3 days. The best response is to
              feed on demand, offer extra comfort, and ride it out — it passes quickly.
            </p>
          </div>

          {/* Table of Contents */}
          <nav
            className="rounded-2xl border border-border bg-muted p-5 text-sm"
            aria-label="Table of contents"
          >
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li>
                <a href="#what-are-they" className="text-primary hover:underline">
                  What Are Growth Spurts?
                </a>
              </li>
              <li>
                <a href="#when" className="text-primary hover:underline">
                  When Growth Spurts Happen
                </a>
              </li>
              <li>
                <a href="#signs" className="text-primary hover:underline">
                  Signs of a Growth Spurt
                </a>
              </li>
              <li>
                <a href="#feeding" className="text-primary hover:underline">
                  Feeding During a Growth Spurt
                </a>
              </li>
              <li>
                <a href="#what-to-do" className="text-primary hover:underline">
                  How to Support Your Child
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          {/* Key Takeaways */}
          <div className="rounded-2xl border border-border bg-muted p-5">
            <h2 className="font-semibold text-foreground mb-3">Key Takeaways</h2>
            <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
              <li>Growth spurts are short bursts of rapid physical growth, usually lasting 2–3 days.</li>
              <li>Common ages: 1–3 weeks, 6 weeks, 3 months, 6 months, and 9 months.</li>
              <li>Hallmark signs are increased hunger, disrupted sleep, and extra fussiness.</li>
              <li>Cluster feeding during a spurt naturally boosts breast milk supply.</li>
              <li>Feed on demand, offer comfort, and the spurt resolves on its own.</li>
              <li>Persistent feeding or sleep problems beyond a week may have another cause.</li>
            </ul>
          </div>

          {/* Section 1 */}
          <section id="what-are-they" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">What Are Growth Spurts?</h2>
            <p>
              A growth spurt is a short period during which your baby or toddler grows unusually
              quickly — gaining weight, length, and sometimes head circumference faster than usual.
              Babies grow more in their first year than at any other time of life, and that growth
              does not happen at a steady pace. Instead, it comes in bursts.
            </p>
            <p>
              To fuel a sudden surge of growth, your child&apos;s body demands more energy. That is
              why the most noticeable feature of a growth spurt is usually a dramatic increase in
              appetite, often paired with changes in mood and sleep as the body works overtime.
            </p>
            <p>
              Growth spurts are completely normal and healthy. While they can be exhausting for
              parents — especially the ones that disrupt sleep — they are a sign that your child is
              developing exactly as they should.
            </p>
          </section>

          {/* Section 2 */}
          <section id="when" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">When Growth Spurts Happen</h2>
            <p>
              Every child is unique, so think of these as common windows rather than a fixed
              schedule. Your baby may hit them earlier, later, or skip the obvious signs entirely.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium text-foreground">Age</th>
                    <th className="p-3 text-left font-medium text-foreground">What to Expect</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">1–3 weeks</td>
                    <td className="p-3">Frequent feeding as your baby establishes milk supply and recovers birth weight</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">6 weeks</td>
                    <td className="p-3">Cluster feeding and fussiness, often coinciding with a fussy peak</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">3 months</td>
                    <td className="p-3">Increased hunger and sometimes more night waking</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">6 months</td>
                    <td className="p-3">A spurt often overlapping with starting solids and new mobility</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">9 months</td>
                    <td className="p-3">Appetite and sleep shifts alongside crawling and pulling to stand</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Toddler years</td>
                    <td className="p-3">Less frequent, less predictable spurts with periodic appetite swings</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Note that growth spurts often overlap with developmental leaps (new skills) and
              teething, which can make for especially intense stretches. The combination is normal,
              even if it is hard.
            </p>
          </section>

          {/* Section 3 */}
          <section id="signs" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Signs of a Growth Spurt</h2>
            <p>
              Growth spurts do not announce themselves, but a cluster of these signs appearing
              together is a strong clue:
            </p>
            <h3 className="text-xl font-semibold text-foreground">Increased Hunger</h3>
            <p>
              The most reliable sign. Your baby suddenly wants to feed far more often — a breastfed
              baby may seem to want the breast constantly, and a bottle-fed baby may drain bottles
              and still seem hungry.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Changes in Sleep</h3>
            <p>
              Growth spurts can go either way. Some babies sleep more than usual as their body
              focuses energy on growing. Others wake more frequently at night, often to feed.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Fussiness and Clinginess</h3>
            <p>
              Many babies are more irritable, harder to settle, and want extra closeness during a
              spurt. This is normal and temporary.
            </p>
            <h3 className="text-xl font-semibold text-foreground">A Visible Jump Afterward</h3>
            <p>
              After the busy few days pass, you may notice clothes suddenly fitting more snugly, a
              fuller face, or a jump on the scale at the next check-up.
            </p>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-foreground mb-2">Growth Spurt or Something Else?</h3>
              <p className="text-sm text-muted-foreground">
                If fussiness comes with fever, vomiting, diarrhea, a rash, or fewer wet diapers, it
                is likely an illness rather than a growth spurt. See our guide on{" "}
                <a href="/articles/when-to-call-pediatrician" className="text-primary hover:underline">
                  when to call the pediatrician
                </a>{" "}
                if you are unsure.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="feeding" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Feeding During a Growth Spurt</h2>
            <h3 className="text-xl font-semibold text-foreground">Breastfeeding</h3>
            <p>
              During a growth spurt, breastfed babies often <strong>cluster feed</strong> — feeding
              many times in a short window, sometimes for hours in the evening. This is not a sign
              that your supply is failing. It is the opposite: the frequent feeding signals your body
              to make more milk to meet your baby&apos;s growing needs. Within a couple of days,
              supply catches up and feeding settles down.
            </p>
            <p>
              Feed on demand, stay hydrated, and rest when you can. Avoid the temptation to top up
              with formula unless advised by your provider, as it can interfere with the natural
              supply-and-demand adjustment.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Bottle-Feeding</h3>
            <p>
              Formula-fed babies also need more during a spurt. Follow your baby&apos;s hunger cues
              and offer a little more when they finish a bottle and still seem hungry. Their intake
              will return to normal once the spurt ends.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Older Babies and Toddlers</h3>
            <p>
              For children on solids, offer extra healthy snacks and nutrient-dense foods during a
              hungry stretch, then expect appetite to swing back — toddler eating is naturally
              uneven from week to week.
            </p>
          </section>

          {/* Section 5 */}
          <section id="what-to-do" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">How to Support Your Child</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Feed responsively:</strong> Follow hunger cues rather than the clock during
                a spurt.
              </li>
              <li>
                <strong>Offer extra comfort:</strong> More holding, cuddling, and closeness helps a
                fussy baby through the discomfort of rapid growth.
              </li>
              <li>
                <strong>Be flexible with sleep:</strong> Temporarily relax expectations; the spurt
                will pass and routines can resume.
              </li>
              <li>
                <strong>Take care of yourself:</strong> Growth spurts are demanding. Rest when you
                can, accept help, and stay nourished and hydrated.
              </li>
              <li>
                <strong>Remember it is short:</strong> Most spurts resolve within a few days. Knowing
                there is an end in sight makes the hard nights easier.
              </li>
            </ul>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <h3 className="font-semibold text-foreground mb-2">When to Check In With Your Doctor</h3>
              <p className="text-sm text-muted-foreground">
                Contact your pediatrician if increased fussiness or feeding changes last more than a
                week, your baby is not having enough wet diapers, is not gaining weight at check-ups,
                or you simply feel something is off. Trust your instincts.
              </p>
            </div>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">When do babies have growth spurts?</dt>
                <dd className="mt-2">
                  Common growth spurts happen around 1 to 3 weeks, 6 weeks, 3 months, 6 months, and 9
                  months, though every baby is different. Toddlers also have growth spurts, just less
                  frequently and predictably than in the first year.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">What are the signs of a growth spurt?</dt>
                <dd className="mt-2">
                  Signs include sudden increased hunger and more frequent feeding, changes in sleep
                  (either more sleep or more night waking), extra fussiness or clinginess, and
                  sometimes a noticeable jump in weight, length, or clothing size afterward.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">How long do growth spurts last?</dt>
                <dd className="mt-2">
                  Most growth spurts last 2 to 3 days, though some can stretch to about a week. They
                  are temporary, and feeding and sleep usually settle back to normal once the spurt
                  passes.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Do growth spurts affect breastfeeding?</dt>
                <dd className="mt-2">
                  Yes. During a growth spurt, a breastfed baby often cluster feeds to boost your milk
                  supply to meet their increased needs. This is normal and temporary — feeding on
                  demand for a few days usually brings supply and demand back into balance.
                </dd>
              </div>
            </dl>
          </section>

          {/* Related Articles */}
          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/when-to-call-pediatrician" className="text-primary hover:underline">
                When to Call the Pediatrician
              </a>
              <span className="text-muted-foreground">&bull;</span>
              <a href="/articles/co-sleeping-safety" className="text-primary hover:underline">
                Co-Sleeping Safety
              </a>
              <span className="text-muted-foreground">&bull;</span>
              <a href="/articles/best-breast-pumps-working-moms" className="text-primary hover:underline">
                Best Breast Pumps for Working Moms
              </a>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Medical Disclaimer:</strong> This article is for educational purposes only and
              does not constitute medical advice. Always consult your pediatrician or healthcare
              provider for concerns about your child&apos;s health.
            </p>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}
