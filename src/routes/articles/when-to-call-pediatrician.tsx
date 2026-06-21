import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/when-to-call-pediatrician")({
  head: () => ({
    meta: [
      { title: "When to Call the Pediatrician: A Parent's Quick-Reference Guide | ChildBloom" },
      {
        name: "description",
        content:
          "Quick-reference guide for parents: when to call your pediatrician, when urgent care is enough, and when to call 911. Covers fever, rashes, breathing trouble, vomiting, and more.",
      },
      {
        property: "og:title",
        content: "When to Call the Pediatrician: A Parent's Quick-Reference Guide | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "Quick-reference guide for parents: when to call your pediatrician, when urgent care is enough, and when to call 911.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://childbloom.site/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://childbloom.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/articles/when-to-call-pediatrician" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "When to Call the Pediatrician: A Parent's Quick-Reference Guide",
          description:
            "Quick-reference guide for parents: when to call your pediatrician, when urgent care is enough, and when to call 911. Covers fever, rashes, breathing trouble, vomiting, and more.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://childbloom.site/articles/when-to-call-pediatrician",
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
              name: "When to Call the Pediatrician",
              item: "https://childbloom.site/articles/when-to-call-pediatrician",
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
              name: "When should I call the pediatrician for a fever?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Call immediately for any fever of 100.4 F (38 C) or higher in a baby under 3 months. For older babies and toddlers, call if the fever is above 102 F, lasts more than 2 to 3 days, or comes with lethargy, difficulty breathing, dehydration, or a rash that does not fade when pressed.",
              },
            },
            {
              "@type": "Question",
              name: "When should I take my child to the ER instead of calling?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Call 911 or go to the ER for difficulty breathing, blue lips or face, unresponsiveness, a seizure, severe allergic reaction, major injury, a stiff neck with fever, or a rash that does not fade under pressure. These are medical emergencies that should not wait for a callback.",
              },
            },
            {
              "@type": "Question",
              name: "Is it okay to call the pediatrician at night?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Most pediatric offices have an after-hours nurse line or on-call provider. If you are worried, it is always appropriate to call. For true emergencies, do not wait for a callback — call 911 or go to the ER.",
              },
            },
            {
              "@type": "Question",
              name: "When is vomiting in a child an emergency?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Seek urgent care if vomiting is forceful and persistent, contains blood or green bile, follows a head injury, or comes with signs of dehydration such as no wet diapers for 6 to 8 hours, no tears when crying, or extreme drowsiness.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: WhenToCallPediatricianArticle,
});

function WhenToCallPediatricianArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          {/* Header */}
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Health</p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              When to Call the Pediatrician: A Parent&apos;s Quick-Reference Guide
            </h1>
            <p className="text-sm text-muted-foreground">
              14 min read &bull; Published June 21, 2026 &bull; Medically reviewed by Dr. Emma Lane,
              MD
            </p>
          </div>

          {/* Emergency Banner */}
          <div className="rounded-2xl border border-primary/30 bg-primary/10 p-5">
            <h2 className="font-semibold text-foreground mb-2">Call 911 Immediately If Your Child:</h2>
            <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
              <li>Is struggling to breathe, or has blue lips, face, or tongue</li>
              <li>Is unresponsive, limp, or extremely difficult to wake</li>
              <li>Is having a seizure</li>
              <li>Has a rash of purple/red spots that do not fade when you press them</li>
              <li>Has a stiff neck with a fever, or a severe allergic reaction</li>
            </ul>
          </div>

          {/* Quick Answer */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <h2 className="font-semibold text-foreground mb-2">Quick Answer</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Trust your instincts: if something feels seriously wrong, call. Always call right away
              for a fever of 100.4 F (38 C) in a baby under 3 months, breathing difficulty, signs of
              dehydration, or a child who seems unusually drowsy or unwell. For life-threatening
              symptoms, call 911 rather than waiting for a callback.
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
                <a href="#three-levels" className="text-primary hover:underline">
                  Three Levels of Care
                </a>
              </li>
              <li>
                <a href="#fever" className="text-primary hover:underline">
                  Fever
                </a>
              </li>
              <li>
                <a href="#breathing" className="text-primary hover:underline">
                  Breathing Problems
                </a>
              </li>
              <li>
                <a href="#vomiting" className="text-primary hover:underline">
                  Vomiting, Diarrhea &amp; Dehydration
                </a>
              </li>
              <li>
                <a href="#rashes" className="text-primary hover:underline">
                  Rashes
                </a>
              </li>
              <li>
                <a href="#other" className="text-primary hover:underline">
                  Other Common Concerns
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
              <li>Any fever in a baby under 3 months is an automatic call to the doctor.</li>
              <li>Breathing trouble and unresponsiveness are 911 emergencies, not callbacks.</li>
              <li>A rash that does not fade when pressed needs emergency care.</li>
              <li>Dehydration signs (no wet diapers, no tears) warrant urgent attention.</li>
              <li>Your pediatric office almost always has a 24/7 nurse line — use it when unsure.</li>
              <li>When in doubt, call. No good pediatric office will fault you for being cautious.</li>
            </ul>
          </div>

          {/* Section 1 */}
          <section id="three-levels" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Three Levels of Care</h2>
            <p>
              Knowing where to go can save precious time and reduce stress. Most situations fall
              into one of three categories:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium text-foreground">Level</th>
                    <th className="p-3 text-left font-medium text-foreground">When to Use It</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Call the pediatrician</td>
                    <td className="p-3">Non-emergencies, persistent symptoms, questions, prolonged fever, mild illness that is not improving</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Urgent care</td>
                    <td className="p-3">Needs same-day attention but not life-threatening — minor injuries, possible ear infection after hours, moderate dehydration</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">ER / Call 911</td>
                    <td className="p-3">Life-threatening symptoms — breathing trouble, unresponsiveness, seizures, severe allergic reactions, major injuries</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              When you are unsure which level applies, calling your pediatrician&apos;s nurse line
              first is a great default. They can help you decide quickly.
            </p>
          </section>

          {/* Section 2: Fever */}
          <section id="fever" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Fever</h2>
            <p>
              Fever is one of the most common reasons parents call. The right response depends
              heavily on your child&apos;s age.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium text-foreground">Age</th>
                    <th className="p-3 text-left font-medium text-foreground">When to Call</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Under 3 months</td>
                    <td className="p-3">Call right away for any temperature of 100.4 F (38 C) or higher — this is urgent</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">3–6 months</td>
                    <td className="p-3">Call for fever above 101 F, or any fever with unusual fussiness or lethargy</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">6 months and up</td>
                    <td className="p-3">Call for fever above 102 F that lasts more than 2–3 days, or any fever with concerning symptoms</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Call Regardless of Age If There Is:</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Difficulty breathing or rapid breathing</li>
              <li>A rash that does not fade when pressed</li>
              <li>Stiff neck, severe headache, or sensitivity to light</li>
              <li>Extreme drowsiness, limpness, or trouble waking</li>
              <li>Signs of dehydration</li>
              <li>A seizure</li>
            </ul>
            <p>
              Remember: the height of a fever is less important than how your child looks and acts.
              A child who is alert and drinking with a 103 F fever is often less worrying than a
              listless child with a lower temperature.
            </p>
          </section>

          {/* Section 3: Breathing */}
          <section id="breathing" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Breathing Problems</h2>
            <p>
              Breathing difficulty is always taken seriously. Call 911 or go to the ER right away if
              you see:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Blue or gray lips, face, or tongue</li>
              <li>The skin pulling in around the ribs or at the base of the neck with each breath</li>
              <li>Flaring nostrils and grunting with each breath</li>
              <li>Breathing so fast or hard the child cannot talk, cry, or feed</li>
              <li>Pauses in breathing</li>
            </ul>
            <p>
              Call your pediatrician (not 911) for a persistent cough, mild wheezing without
              distress, or cold symptoms that are getting worse rather than better after several
              days.
            </p>
          </section>

          {/* Section 4: Vomiting */}
          <section id="vomiting" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">
              Vomiting, Diarrhea &amp; Dehydration
            </h2>
            <p>
              Occasional vomiting and diarrhea are common with stomach bugs. The main risk is
              dehydration, especially in babies and young toddlers.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Signs of Dehydration — Call the Doctor</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>No wet diaper for 6–8 hours (or much less urination in older children)</li>
              <li>No tears when crying</li>
              <li>Dry mouth and lips</li>
              <li>Sunken eyes or, in babies, a sunken soft spot</li>
              <li>Unusual drowsiness or irritability</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground">Call Urgently If There Is:</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Blood in vomit or stool</li>
              <li>Green (bile-colored) vomit</li>
              <li>Vomiting after a head injury</li>
              <li>Severe abdominal pain</li>
              <li>Vomiting that will not stop and prevents keeping any fluids down</li>
            </ul>
          </section>

          {/* Section 5: Rashes */}
          <section id="rashes" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Rashes</h2>
            <p>
              Most childhood rashes are harmless, but a few patterns require immediate attention.
            </p>
            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
              <h3 className="font-semibold text-foreground mb-2">The Glass Test</h3>
              <p className="text-sm text-muted-foreground">
                Press a clear glass against the rash. If the spots do <strong>not</strong> fade or
                disappear under the pressure, this can be a sign of a serious infection like
                meningitis. Seek emergency care immediately.
              </p>
            </div>
            <h3 className="text-xl font-semibold text-foreground">Call the Doctor for a Rash That:</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Comes with a fever</li>
              <li>Spreads rapidly or covers a large area</li>
              <li>Blisters, weeps, or looks infected</li>
              <li>Is painful rather than just itchy</li>
              <li>Appears with facial or lip swelling (possible allergic reaction — call 911 if breathing is affected)</li>
            </ul>
          </section>

          {/* Section 6: Other */}
          <section id="other" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Other Common Concerns</h2>
            <h3 className="text-xl font-semibold text-foreground">Head Injuries</h3>
            <p>
              Call or seek care after a fall or blow to the head if there is loss of consciousness,
              repeated vomiting, a severe or worsening headache, confusion, unequal pupils, clear
              fluid from the nose or ears, or unusual drowsiness.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Not Eating or Drinking</h3>
            <p>
              Call if a baby refuses several feeds in a row, or if an older child will not take any
              fluids and is showing signs of dehydration.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Behavior Changes</h3>
            <p>
              A child who is unusually difficult to wake, inconsolable for hours, or simply
              &quot;not themselves&quot; in a way that worries you is always worth a call. Parental
              instinct is a valuable diagnostic tool.
            </p>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-foreground mb-2">Keep These Numbers Handy</h3>
              <p className="text-sm text-muted-foreground">
                Save your pediatrician&apos;s office and after-hours nurse line, your nearest urgent
                care, and the poison control number in your phone now, so you are not searching for
                them in a stressful moment.
              </p>
            </div>
            <p>
              For specific illness guidance, see our related guide:{" "}
              <a href="/articles/baby-fever-guide" className="text-primary hover:underline">
                Baby Fever Guide: What&apos;s Normal and When to Worry
              </a>
              .
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">When should I call the pediatrician for a fever?</dt>
                <dd className="mt-2">
                  Call immediately for any fever of 100.4 F (38 C) or higher in a baby under 3
                  months. For older babies and toddlers, call if the fever is above 102 F, lasts
                  more than 2 to 3 days, or comes with lethargy, breathing difficulty, dehydration,
                  or a rash that does not fade when pressed.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">When should I take my child to the ER instead of calling?</dt>
                <dd className="mt-2">
                  Call 911 or go to the ER for difficulty breathing, blue lips or face,
                  unresponsiveness, a seizure, severe allergic reaction, major injury, a stiff neck
                  with fever, or a rash that does not fade under pressure. These should not wait for
                  a callback.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Is it okay to call the pediatrician at night?</dt>
                <dd className="mt-2">
                  Yes. Most pediatric offices have an after-hours nurse line or on-call provider. If
                  you are worried, it is always appropriate to call. For true emergencies, do not
                  wait for a callback — call 911 or go to the ER.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">When is vomiting in a child an emergency?</dt>
                <dd className="mt-2">
                  Seek urgent care if vomiting is forceful and persistent, contains blood or green
                  bile, follows a head injury, or comes with signs of dehydration such as no wet
                  diapers for 6 to 8 hours, no tears when crying, or extreme drowsiness.
                </dd>
              </div>
            </dl>
          </section>

          {/* Related Articles */}
          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/baby-fever-guide" className="text-primary hover:underline">
                Baby Fever Guide
              </a>
              <span className="text-muted-foreground">&bull;</span>
              <a href="/articles/baby-growth-spurts" className="text-primary hover:underline">
                Baby Growth Spurts
              </a>
              <span className="text-muted-foreground">&bull;</span>
              <a href="/articles/co-sleeping-safety" className="text-primary hover:underline">
                Co-Sleeping Safety
              </a>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Medical Disclaimer:</strong> This article is for educational purposes only and
              does not constitute medical advice. Always consult your pediatrician or healthcare
              provider for concerns about your child&apos;s health. In an emergency, call 911.
            </p>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}
