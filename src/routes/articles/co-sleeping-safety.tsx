import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/co-sleeping-safety")({
  head: () => ({
    meta: [
      { title: "Co-Sleeping Safety: AAP Guidelines, Risks & Safer Alternatives | ChildBloom" },
      {
        name: "description",
        content:
          "Everything parents need to know about co-sleeping safety — AAP safe sleep guidelines, bedsharing vs room-sharing, SIDS risk factors, and safer alternatives.",
      },
      {
        property: "og:title",
        content: "Co-Sleeping Safety: AAP Guidelines, Risks & Safer Alternatives | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "Everything parents need to know about co-sleeping safety — AAP safe sleep guidelines, bedsharing vs room-sharing, SIDS risk factors, and safer alternatives.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://childbloom.site/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://childbloom.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/articles/co-sleeping-safety" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Co-Sleeping Safety: AAP Guidelines, Risks & Safer Alternatives",
          description:
            "Everything parents need to know about co-sleeping safety — AAP safe sleep guidelines, bedsharing vs room-sharing, SIDS risk factors, and safer alternatives.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://childbloom.site/articles/co-sleeping-safety",
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
              name: "Co-Sleeping Safety",
              item: "https://childbloom.site/articles/co-sleeping-safety",
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
              name: "Is co-sleeping safe?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The AAP recommends room-sharing (baby on a separate sleep surface in your room) for at least the first 6 months. The AAP advises against bedsharing — having a baby sleep in an adult bed — because it increases the risk of SIDS and accidental suffocation, especially under 4 months.",
              },
            },
            {
              "@type": "Question",
              name: "What is the difference between co-sleeping and bedsharing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Co-sleeping is an umbrella term for sleeping near your baby. It includes room-sharing (recommended) and bedsharing (not recommended). Room-sharing means the baby sleeps on a separate surface like a bassinet in your room. Bedsharing means the baby sleeps in the same bed as an adult.",
              },
            },
            {
              "@type": "Question",
              name: "When is bedsharing most dangerous?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Bedsharing is most dangerous for babies under 4 months, babies born preterm or at low birth weight, and any time a parent has consumed alcohol, sedating medication, or is a smoker. It is also extremely dangerous on a sofa, couch, or armchair.",
              },
            },
            {
              "@type": "Question",
              name: "Are there safer alternatives to bedsharing?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. A bedside bassinet or sidecar crib that attaches to your bed lets you stay close for feeding and comforting while keeping the baby on a separate, firm sleep surface. This satisfies the closeness many families want while following safe sleep guidelines.",
              },
            },
            {
              "@type": "Question",
              name: "How long should the baby sleep in my room?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The AAP recommends room-sharing for at least 6 months, and ideally up to 12 months, as it can reduce the risk of SIDS by as much as 50 percent.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: CoSleepingSafetyArticle,
});

function CoSleepingSafetyArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          {/* Header */}
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Parenting
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Co-Sleeping Safety: AAP Guidelines, Risks &amp; Safer Alternatives
            </h1>
            <p className="text-sm text-muted-foreground">
              16 min read &bull; Published June 21, 2026 &bull; Medically reviewed by Dr. Emma Lane,
              MD
            </p>
          </div>

          {/* Quick Answer */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <h2 className="font-semibold text-foreground mb-2">Quick Answer</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The American Academy of Pediatrics recommends <strong>room-sharing</strong> — keeping
              your baby on a separate firm sleep surface in your room — for at least the first 6
              months. It advises <strong>against bedsharing</strong> (baby in an adult bed) because
              it raises the risk of SIDS and accidental suffocation. If you want to stay close, a
              bedside bassinet or sidecar crib is the safest way to do it.
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
                <a href="#definitions" className="text-primary hover:underline">
                  Co-Sleeping vs. Bedsharing vs. Room-Sharing
                </a>
              </li>
              <li>
                <a href="#aap-guidelines" className="text-primary hover:underline">
                  What the AAP Actually Recommends
                </a>
              </li>
              <li>
                <a href="#risks" className="text-primary hover:underline">
                  The Risks of Bedsharing
                </a>
              </li>
              <li>
                <a href="#never" className="text-primary hover:underline">
                  When Bedsharing Is Never Safe
                </a>
              </li>
              <li>
                <a href="#safer-bedsharing" className="text-primary hover:underline">
                  Making Bedsharing Less Dangerous
                </a>
              </li>
              <li>
                <a href="#alternatives" className="text-primary hover:underline">
                  Safer Alternatives
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
              <li>Room-sharing on a separate surface can cut SIDS risk by up to 50 percent.</li>
              <li>The AAP does not recommend bedsharing for any infant.</li>
              <li>Bedsharing is most dangerous under 4 months and with smoking, alcohol, or medication.</li>
              <li>Never sleep with a baby on a sofa, couch, or armchair — this is extremely high risk.</li>
              <li>A bedside bassinet or sidecar crib gives closeness without the danger of an adult bed.</li>
              <li>Always follow the ABCs of safe sleep: Alone, on the Back, in a bare Crib.</li>
            </ul>
          </div>

          {/* Section 1 */}
          <section id="definitions" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">
              Co-Sleeping vs. Bedsharing vs. Room-Sharing
            </h2>
            <p>
              A lot of confusion and conflict among parents comes from mixing up three different
              terms. They do not mean the same thing, and the safety differences between them are
              enormous.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Co-sleeping</strong> is a broad umbrella term that simply means sleeping in
                close proximity to your baby. It includes both of the terms below.
              </li>
              <li>
                <strong>Room-sharing</strong> means your baby sleeps on their own separate, firm
                sleep surface — a crib, bassinet, or play yard — in the same room as you. This is
                the configuration the AAP actively recommends.
              </li>
              <li>
                <strong>Bedsharing</strong> means your baby sleeps on the same surface as an adult,
                usually in an adult bed. This is the configuration the AAP recommends against.
              </li>
            </ul>
            <p>
              When people argue about whether &quot;co-sleeping&quot; is safe, they are often
              talking past each other because one person means room-sharing and the other means
              bedsharing. Getting the terms straight is the first step to making a safe decision.
            </p>
          </section>

          {/* Section 2 */}
          <section id="aap-guidelines" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">
              What the AAP Actually Recommends
            </h2>
            <p>
              The American Academy of Pediatrics updates its safe sleep guidance regularly based on
              the latest research. The current recommendations are clear and consistent:
            </p>
            <h3 className="text-xl font-semibold text-foreground">The ABCs of Safe Sleep</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>A — Alone:</strong> Baby sleeps on their own separate surface with no
                pillows, blankets, bumpers, or stuffed animals.
              </li>
              <li>
                <strong>B — Back:</strong> Always place baby on their back for every sleep, day and
                night, until 12 months.
              </li>
              <li>
                <strong>C — Crib:</strong> A firm, flat sleep surface (crib, bassinet, or play yard)
                that meets current safety standards, with a fitted sheet and nothing else.
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground">Room-Sharing Recommendation</h3>
            <p>
              The AAP recommends that babies sleep in the parents&apos; room — but not the
              parents&apos; bed — for <strong>at least the first 6 months</strong>, and ideally up
              to <strong>12 months</strong>. Studies show this arrangement can reduce the risk of
              SIDS by as much as 50 percent while still making nighttime feeding and monitoring
              easier.
            </p>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-foreground mb-2">Why Not the Same Bed?</h3>
              <p className="text-sm text-muted-foreground">
                Adult beds are designed for adult comfort, not infant safety. Soft mattresses,
                pillows, heavy bedding, and the gaps between a mattress and headboard or wall all
                pose suffocation and entrapment hazards for a baby who cannot yet move themselves
                out of danger.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="risks" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">The Risks of Bedsharing</h2>
            <p>
              Understanding <em>why</em> bedsharing is risky helps parents make informed choices
              rather than just following rules. The main dangers are:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Suffocation:</strong> A baby&apos;s face can become pressed against a soft
                mattress, pillow, or an adult&apos;s body, blocking airflow.
              </li>
              <li>
                <strong>Overlay:</strong> An adult can roll onto the baby during deep sleep without
                waking, especially when extremely tired or impaired.
              </li>
              <li>
                <strong>Entrapment:</strong> A baby can become wedged in the gap between the
                mattress and the wall, headboard, or bed frame.
              </li>
              <li>
                <strong>Overheating:</strong> Adult bedding and shared body heat can raise a
                baby&apos;s temperature, which is associated with SIDS.
              </li>
              <li>
                <strong>Falls:</strong> Babies can roll or be nudged off the edge of an adult bed.
              </li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground">Why Age Matters So Much</h3>
            <p>
              The risk is highest in the youngest babies. Infants under 4 months have the least head
              and neck control and the weakest ability to turn their face away from a suffocation
              hazard. Most bedsharing-related deaths occur in this age group, which is why the
              warnings are most emphatic for newborns.
            </p>
          </section>

          {/* Section 4 */}
          <section id="never" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">
              When Bedsharing Is Never Safe
            </h2>
            <p>
              Research has identified specific circumstances that dramatically multiply the risk.
              Bedsharing should be avoided entirely in any of these situations:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium text-foreground">Risk Factor</th>
                    <th className="p-3 text-left font-medium text-foreground">Why It Is Dangerous</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Sofa or armchair sleeping</td>
                    <td className="p-3">Extremely high suffocation and entrapment risk — never sleep with a baby here</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Alcohol or drugs</td>
                    <td className="p-3">Impairs arousal and awareness, greatly raising overlay risk</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Sedating medication</td>
                    <td className="p-3">Reduces the ability to wake and respond to the baby</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Smoking</td>
                    <td className="p-3">Maternal smoking is strongly linked to SIDS, even more so with bedsharing</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Premature or low birth weight</td>
                    <td className="p-3">These babies are more vulnerable to all sleep-related risks</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Baby under 4 months</td>
                    <td className="p-3">Highest-risk age group for bedsharing-related death</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <h3 className="font-semibold text-foreground mb-2">The Sofa Warning</h3>
              <p className="text-sm text-muted-foreground">
                Falling asleep with a baby on a couch or armchair carries one of the highest risks of
                any sleep situation. If you are feeding at night and feel you might fall asleep, it is
                safer to feed in your bed (cleared of pillows and soft bedding) than on a sofa, and
                then return the baby to their own sleep surface.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="safer-bedsharing" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">
              Making Bedsharing Less Dangerous
            </h2>
            <p>
              The AAP does not endorse bedsharing. However, public health experts recognize that
              some families will bedshare anyway — sometimes unintentionally during night feeds. If
              bedsharing does happen, these harm-reduction steps lower (but do not eliminate) the
              risk:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Use a firm mattress — never a waterbed, memory foam, or soft surface</li>
              <li>Remove all pillows, heavy blankets, and soft bedding from near the baby</li>
              <li>Keep the baby on their back, never on the stomach or side</li>
              <li>Make sure there are no gaps between the mattress and the wall or headboard</li>
              <li>Keep pets and other children out of the bed</li>
              <li>Never bedshare if you have consumed alcohol, drugs, or sedating medication</li>
              <li>Tie back long hair and avoid loose clothing with strings or ties</li>
            </ul>
            <p>
              These measures reduce risk but do not make bedsharing as safe as a separate sleep
              surface. The safest choice remains room-sharing without bedsharing.
            </p>
          </section>

          {/* Section 6 */}
          <section id="alternatives" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Safer Alternatives</h2>
            <p>
              Most parents who want to bedshare are really after one thing: closeness. They want to
              hear, see, and reach their baby easily for feeding and comfort. The good news is you
              can have nearly all of that closeness without the danger.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Bedside Bassinet / Sidecar Crib</h3>
            <p>
              A bedside sleeper attaches securely to the side of your bed with one side open or
              lowered, so your baby is right next to you on their own firm surface. You can reach
              over to soothe or feed without lifting the baby out of bed, and there is no risk of
              overlay or adult bedding.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Standalone Bassinet or Crib in Your Room</h3>
            <p>
              A simple bassinet or full crib in your bedroom satisfies the AAP room-sharing
              recommendation. Keep it within arm&apos;s reach so nighttime care is easy.
            </p>
            <h3 className="text-xl font-semibold text-foreground">What to Look For</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>A firm, flat mattress that fits snugly with no gaps</li>
              <li>Meets current safety standards in your country</li>
              <li>No soft padding, bumpers, or incline</li>
              <li>Sturdy, secure attachment if it is a bedside model</li>
            </ul>
            <p>
              For more on building a safe sleep environment, see our guide:{" "}
              <a href="/articles/safe-sleep-guidelines" className="text-primary hover:underline">
                Safe Sleep Guidelines: Reducing the Risk of SIDS
              </a>
              .
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Is co-sleeping safe?</dt>
                <dd className="mt-2">
                  Room-sharing — keeping your baby on a separate sleep surface in your room — is
                  safe and recommended by the AAP for at least the first 6 months. Bedsharing, where
                  the baby sleeps in an adult bed, is not recommended because it increases the risk
                  of SIDS and accidental suffocation.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  What is the difference between co-sleeping and bedsharing?
                </dt>
                <dd className="mt-2">
                  Co-sleeping is an umbrella term for sleeping near your baby. It includes
                  room-sharing (recommended) and bedsharing (not recommended). Room-sharing means a
                  separate surface in your room; bedsharing means the same bed as an adult.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">When is bedsharing most dangerous?</dt>
                <dd className="mt-2">
                  Bedsharing is most dangerous for babies under 4 months, those born preterm or at
                  low birth weight, and any time a parent has consumed alcohol, sedating medication,
                  or smokes. It is also extremely dangerous on a sofa, couch, or armchair.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  Are there safer alternatives to bedsharing?
                </dt>
                <dd className="mt-2">
                  Yes. A bedside bassinet or sidecar crib that attaches to your bed lets you stay
                  close for feeding and comforting while keeping the baby on a separate, firm sleep
                  surface — the closeness many families want without the danger.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  How long should the baby sleep in my room?
                </dt>
                <dd className="mt-2">
                  The AAP recommends room-sharing for at least 6 months, and ideally up to 12
                  months, as it can reduce the risk of SIDS by as much as 50 percent.
                </dd>
              </div>
            </dl>
          </section>

          {/* Related Articles */}
          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/safe-sleep-guidelines" className="text-primary hover:underline">
                Safe Sleep Guidelines
              </a>
              <span className="text-muted-foreground">&bull;</span>
              <a href="/articles/baby-sleep-schedule" className="text-primary hover:underline">
                Baby Sleep Schedule
              </a>
              <span className="text-muted-foreground">&bull;</span>
              <a href="/articles/toddler-sleep-regression" className="text-primary hover:underline">
                Toddler Sleep Regression
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
