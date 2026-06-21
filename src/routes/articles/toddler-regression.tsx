import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/toddler-regression")({
  head: () => ({
    meta: [
      { title: "Toddler Regression: How to Handle Sleep, Potty & Behavior Setbacks | ChildBloom" },
      {
        name: "description",
        content:
          "Complete guide to toddler regression in sleep, potty training, and behavior. What causes regression, how long it lasts, and gentle strategies to get back on track.",
      },
      {
        property: "og:title",
        content:
          "Toddler Regression: How to Handle Sleep, Potty & Behavior Setbacks | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "Complete guide to toddler regression in sleep, potty training, and behavior. What causes regression, how long it lasts, and gentle strategies to get back on track.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://childbloom.site/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://childbloom.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/articles/toddler-regression" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline:
            "How to Handle Toddler Regression (Sleep, Potty, Behavior)",
          description:
            "Complete guide to toddler regression in sleep, potty training, and behavior. What causes regression, how long it lasts, and gentle strategies to get back on track.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://childbloom.site/articles/toddler-regression",
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
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://childbloom.site",
            },
            {
              "@type": "ListItem",
              position: 2,
              name: "Articles",
              item: "https://childbloom.site/articles",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Toddler Regression",
              item: "https://childbloom.site/articles/toddler-regression",
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
              name: "What is toddler regression?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Toddler regression is when a child who has already mastered a skill — such as sleeping through the night, using the potty, or speaking in sentences — temporarily reverts to earlier, less mature behavior. It is a normal part of development.",
              },
            },
            {
              "@type": "Question",
              name: "What causes regression in toddlers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Regression is most often triggered by stress, change, or a developmental leap. Common causes include a new sibling, moving to a new home, starting daycare, illness, travel, or major milestones like learning to walk or talk.",
              },
            },
            {
              "@type": "Question",
              name: "How long does toddler regression last?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Most regressions last 2 to 6 weeks when handled calmly and consistently. If regression persists beyond 6–8 weeks or is accompanied by other concerning signs, speak with your pediatrician.",
              },
            },
            {
              "@type": "Question",
              name: "Should I punish my toddler for regression?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "No. Punishment during regression increases anxiety and often makes the regression worse. Instead, respond with warmth, patience, and consistency. Validate your child's feelings and offer extra comfort.",
              },
            },
            {
              "@type": "Question",
              name: "Can I prevent toddler regression?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "You cannot always prevent regression, but you can reduce its severity by preparing your child for changes in advance, maintaining consistent routines, and providing extra emotional support during transitions.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: ToddlerRegressionArticle,
});

function ToddlerRegressionArticle() {
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
              How to Handle Toddler Regression (Sleep, Potty, Behavior)
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
              Toddler regression — when your child temporarily reverts to earlier behaviors like
              wetting the bed or waking at night — is completely normal and usually lasts 2 to 6
              weeks. It is most often triggered by stress, change, or a developmental leap. The best
              response is calm consistency, extra reassurance, and patience.
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
                <a href="#what-is-regression" className="text-primary hover:underline">
                  What Is Toddler Regression?
                </a>
              </li>
              <li>
                <a href="#causes" className="text-primary hover:underline">
                  What Causes Regression
                </a>
              </li>
              <li>
                <a href="#sleep-regression" className="text-primary hover:underline">
                  Sleep Regression
                </a>
              </li>
              <li>
                <a href="#potty-regression" className="text-primary hover:underline">
                  Potty Training Regression
                </a>
              </li>
              <li>
                <a href="#behavior-regression" className="text-primary hover:underline">
                  Behavior Regression
                </a>
              </li>
              <li>
                <a href="#strategies" className="text-primary hover:underline">
                  Gentle Strategies That Help
                </a>
              </li>
              <li>
                <a href="#when-to-worry" className="text-primary hover:underline">
                  When to Call a Doctor
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
              <li>Regression is a normal developmental response to stress, change, or growth.</li>
              <li>It can affect sleep, potty training, eating, speech, and behavior simultaneously.</li>
              <li>Most regressions resolve in 2 to 6 weeks with calm, consistent handling.</li>
              <li>Punishment and pressure make regression worse — warmth and routine make it shorter.</li>
              <li>Major triggers include new siblings, moving, illness, starting school, and developmental leaps.</li>
              <li>Regression is your toddler&apos;s way of asking for more connection, not defying you.</li>
            </ul>
          </div>

          {/* Section 1: What Is Regression */}
          <section
            id="what-is-regression"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold text-foreground">What Is Toddler Regression?</h2>
            <p>
              Toddler regression is when a child temporarily returns to behaviors they had already
              outgrown. A toddler who has been sleeping through the night starts waking again. A
              child who mastered the potty starts having accidents. A 3-year-old who spoke in full
              sentences suddenly whines in baby talk.
            </p>
            <p>
              It can feel alarming — especially when it happens after weeks or months of progress.
              But regression is one of the most common and well-documented phenomena in toddler
              development. Pediatricians and child psychologists consistently reassure parents: it is
              a sign of a healthy, sensitive nervous system, not a failure.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              Why Does Regression Happen?
            </h3>
            <p>
              Toddlers are in a constant state of rapid change. Every few months brings new physical
              skills, language leaps, social awareness, and emotional complexity. When a child
              encounters too much change at once — or feels uncertain about the world — their nervous
              system responds by seeking comfort in familiar, earlier patterns.
            </p>
            <p>
              Think of it as a temporary retreat. Your child is not losing skills permanently. They
              are borrowing security from a simpler time so they can gather the resources to move
              forward again.
            </p>
          </section>

          {/* Section 2: Causes */}
          <section id="causes" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">What Causes Regression</h2>
            <p>
              Virtually any significant change in a toddler&apos;s world can trigger regression. The most
              common causes include:
            </p>

            <h3 className="text-xl font-semibold text-foreground">Family Changes</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>New sibling:</strong> One of the most common triggers. The toddler sees a
                baby receiving constant care and regresses to compete for the same attention.
              </li>
              <li>
                <strong>Parental stress:</strong> Toddlers are highly attuned to emotional
                atmosphere. Parental tension, arguments, or anxiety can destabilize their sense of
                safety.
              </li>
              <li>
                <strong>Separation or divorce:</strong> Major household restructuring often precedes
                several months of regression across multiple domains.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground">Environmental Changes</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Moving to a new home</li>
              <li>Starting daycare or preschool</li>
              <li>Changing caregivers or routines</li>
              <li>Extended travel or disrupted sleep</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground">Health and Development</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Illness, teething, or pain</li>
              <li>
                A major developmental leap (walking, talking, social awareness) — the brain is so
                focused on a new skill that previously learned skills temporarily take a back seat
              </li>
              <li>Sensory overload or overstimulation</li>
            </ul>

            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-foreground mb-2">Important Note for Parents</h3>
              <p className="text-sm text-muted-foreground">
                Regression and the triggering event do not always happen at the same time. A toddler
                may regress 2 to 4 weeks after a new sibling arrives, or a few days before a big
                transition that they somehow sense is coming. This delay is common and normal.
              </p>
            </div>
          </section>

          {/* Section 3: Sleep Regression */}
          <section id="sleep-regression" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Sleep Regression</h2>
            <p>
              Sleep regression is one of the most exhausting forms of toddler regression for
              families. A child who was sleeping 10–12 hours suddenly starts resisting bedtime,
              waking at night, coming into your bed, or refusing naps they had previously dropped.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              Common Sleep Regression Ages in Toddlers
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium text-foreground">Age</th>
                    <th className="p-3 text-left font-medium text-foreground">Common Triggers</th>
                    <th className="p-3 text-left font-medium text-foreground">Typical Duration</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">18 months</td>
                    <td className="p-3">Separation anxiety, language leap, molars</td>
                    <td className="p-3">2–6 weeks</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">2 years</td>
                    <td className="p-3">Imagination, nighttime fears, new sibling</td>
                    <td className="p-3">2–6 weeks</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">3 years</td>
                    <td className="p-3">Preschool start, nightmares, independence push</td>
                    <td className="p-3">2–4 weeks</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold text-foreground">What to Do During Sleep Regression</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Keep the bedtime routine consistent and calming — same order, same time every night</li>
              <li>Offer extra comfort at bedtime without completely abandoning boundaries</li>
              <li>Avoid introducing new sleep habits you&apos;ll need to undo later (like bed-sharing if it is not your norm)</li>
              <li>Check for physical discomforts — teething pain, illness, or hunger at bedtime</li>
              <li>Stay calm at night wakings: brief reassurance, then back to bed</li>
            </ul>

            <p>
              For a deeper look at sleep regressions by age, see our guide:{" "}
              <a
                href="/articles/toddler-sleep-regression"
                className="text-primary hover:underline"
              >
                Toddler Sleep Regression: 18 Months, 2 Years &amp; 3 Years Explained
              </a>
              .
            </p>
          </section>

          {/* Section 4: Potty Regression */}
          <section
            id="potty-regression"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold text-foreground">Potty Training Regression</h2>
            <p>
              Potty training regression — when a fully trained toddler starts having accidents again
              — is extremely common between ages 2 and 4. It is one of the most frustrating forms of
              regression because it often feels like going backwards after weeks of hard work.
            </p>

            <h3 className="text-xl font-semibold text-foreground">Signs of Potty Regression</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Daytime accidents in a child who was reliably dry</li>
              <li>Refusing to use the potty or asking for diapers back</li>
              <li>Hiding to have accidents or not telling you about them</li>
              <li>Withholding bowel movements</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground">How to Handle Potty Regression</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Stay calm:</strong> Showing frustration or disappointment increases shame,
                which makes accidents more likely.
              </li>
              <li>
                <strong>Return to frequent reminders:</strong> Go back to prompting every 90–120
                minutes as you did during initial training.
              </li>
              <li>
                <strong>Avoid pull-ups during the day</strong> if it was not your previous habit, as
                it can send a confusing signal.
              </li>
              <li>
                <strong>Give extra praise</strong> for successful trips — but not to the point of
                pressure.
              </li>
              <li>
                <strong>Check for hidden causes:</strong> UTI, constipation, and pinworms can all
                cause sudden potty regression.
              </li>
            </ul>

            <p>
              See also:{" "}
              <a href="/articles/potty-training-guide" className="text-primary hover:underline">
                Potty Training Guide: Complete Step-by-Step for Toddlers
              </a>
            </p>
          </section>

          {/* Section 5: Behavior Regression */}
          <section
            id="behavior-regression"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold text-foreground">Behavior Regression</h2>
            <p>
              Behavioral regression can show up across almost any area of daily life. Common
              examples include:
            </p>

            <h3 className="text-xl font-semibold text-foreground">Types of Behavioral Regression</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Baby talk:</strong> A child who spoke clearly starts speaking in a baby
                voice or dropping sounds.
              </li>
              <li>
                <strong>Thumb-sucking or pacifier requests:</strong> Returning to self-soothing
                habits that had been dropped.
              </li>
              <li>
                <strong>Clinginess and separation anxiety:</strong> Refusing to let you leave the
                room or go to daycare.
              </li>
              <li>
                <strong>Feeding changes:</strong> Refusing foods they previously enjoyed or wanting
                a bottle again.
              </li>
              <li>
                <strong>Increased tantrums:</strong> More frequent, intense emotional outbursts than
                usual.
              </li>
              <li>
                <strong>Aggression:</strong> Hitting, biting, or throwing that seemed to have
                settled down.
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground">Why Behavior Regression Happens</h3>
            <p>
              Behavior regression is almost always a communication. Your toddler is telling you they
              feel overwhelmed, unsafe, or in need of more connection. The regressed behavior is
              their way of reaching for what made them feel secure at an earlier age.
            </p>

            <p>
              Related:{" "}
              <a href="/articles/toddler-tantrums" className="text-primary hover:underline">
                Toddler Tantrums: Why They Happen and How to Handle Them Calmly
              </a>
            </p>
          </section>

          {/* Section 6: Strategies */}
          <section id="strategies" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Gentle Strategies That Help</h2>
            <p>
              The good news: the same core principles apply to almost all types of toddler
              regression. Here is what consistently works.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              1. Acknowledge Your Child&apos;s Feelings
            </h3>
            <p>
              Before correcting the behavior, connect with the feeling behind it. &quot;I can see you
              are really missing me today&quot; or &quot;It is hard having a new baby in the house, isn&apos;t it?&quot;
              goes a long way toward de-escalating the regression.
            </p>

            <h3 className="text-xl font-semibold text-foreground">2. Maintain Consistent Routines</h3>
            <p>
              Predictable routines are the most powerful antidote to regression. When everything
              else feels unstable, knowing that bathtime always comes before books, and books before
              sleep, creates a sense of control.
            </p>

            <h3 className="text-xl font-semibold text-foreground">3. Increase One-on-One Time</h3>
            <p>
              Even 10 to 15 minutes of undivided, child-led play each day can dramatically reduce
              regression symptoms. Put your phone away, follow their lead, and let them feel seen.
            </p>

            <h3 className="text-xl font-semibold text-foreground">4. Avoid Power Struggles</h3>
            <p>
              Do not engage in battles over regressed behavior. If your 3-year-old wants to drink
              from a sippy cup for a week, let it go. Pick your battles — the regression will pass
              faster without the added conflict.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              5. Give Partial Permission for Regressed Behavior
            </h3>
            <p>
              Counterintuitively, temporarily allowing some regression can speed up its resolution.
              If your child asks to be carried or wants to be fed, do it for a few days. When the
              need for comfort is met, the drive to return to the regressed state decreases.
            </p>

            <h3 className="text-xl font-semibold text-foreground">6. Read Books About the Topic</h3>
            <p>
              Children&apos;s books about new siblings, starting school, or big feelings can give your
              toddler language for what they are experiencing. Bibliotherapy is a well-supported
              approach for developmental transitions.
            </p>

            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-foreground mb-2">Parent Reminder</h3>
              <p className="text-sm text-muted-foreground">
                You are not failing as a parent because your toddler is regressing. Regression is a
                sign that your child trusts you enough to show vulnerability. It is also a sign that
                they are growing — rapidly. This phase will pass.
              </p>
            </div>
          </section>

          {/* Section 7: When to Worry */}
          <section id="when-to-worry" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">When to Call a Doctor</h2>
            <p>
              Most toddler regression resolves on its own within 2 to 6 weeks. However, speak with
              your pediatrician if:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Regression lasts longer than 6 to 8 weeks without improvement</li>
              <li>Regression is accompanied by a significant loss of previously acquired skills (e.g., stopped using words they previously knew)</li>
              <li>Your child shows persistent fear, extreme anxiety, or withdrawal from activities they previously enjoyed</li>
              <li>Potty accidents are accompanied by pain, blood, or unusual odor (rule out UTI or constipation)</li>
              <li>Your child shows signs of abuse, excessive stress, or trauma exposure</li>
              <li>You are concerned the regression may be related to autism, ADHD, or another developmental difference</li>
            </ul>

            <p>
              See also:{" "}
              <a href="/articles/signs-of-autism-in-toddlers" className="text-primary hover:underline">
                Signs of Autism in Toddlers: Early Red Flags Parents Should Know
              </a>
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Frequently Asked Questions</h2>

            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">What is toddler regression?</dt>
                <dd className="mt-2">
                  Toddler regression is when a child who has already mastered a skill — such as
                  sleeping through the night, using the potty, or speaking in sentences —
                  temporarily reverts to earlier, less mature behavior. It is a normal part of
                  development, not a permanent setback.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">What causes regression in toddlers?</dt>
                <dd className="mt-2">
                  Regression is most often triggered by stress, change, or a developmental leap.
                  Common causes include a new sibling, moving to a new home, starting daycare,
                  illness, travel, or major milestones like learning to walk or talk.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  How long does toddler regression last?
                </dt>
                <dd className="mt-2">
                  Most regressions last 2 to 6 weeks when handled calmly and consistently. If
                  regression persists beyond 6 to 8 weeks or is accompanied by other concerning
                  signs, speak with your pediatrician.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  Should I punish my toddler for regression?
                </dt>
                <dd className="mt-2">
                  No. Punishment during regression increases anxiety and often makes the regression
                  worse. Instead, respond with warmth, patience, and consistency. Validate your
                  child&apos;s feelings and offer extra comfort.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Can I prevent toddler regression?</dt>
                <dd className="mt-2">
                  You cannot always prevent regression, but you can reduce its severity by preparing
                  your child for changes in advance, maintaining consistent routines, and providing
                  extra emotional support during transitions.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  Is regression different from a developmental delay?
                </dt>
                <dd className="mt-2">
                  Yes. Regression is a temporary return to earlier behaviors that the child had
                  previously mastered. A developmental delay means the child never acquired the
                  skill at the expected age. If you are unsure, your pediatrician can help
                  distinguish between the two.
                </dd>
              </div>
            </dl>
          </section>

          {/* Related Articles */}
          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/toddler-sleep-regression" className="text-primary hover:underline">
                Toddler Sleep Regression
              </a>
              <span className="text-muted-foreground">&bull;</span>
              <a href="/articles/potty-training-guide" className="text-primary hover:underline">
                Potty Training Guide
              </a>
              <span className="text-muted-foreground">&bull;</span>
              <a href="/articles/toddler-tantrums" className="text-primary hover:underline">
                Toddler Tantrums
              </a>
              <span className="text-muted-foreground">&bull;</span>
              <a href="/articles/signs-of-autism-in-toddlers" className="text-primary hover:underline">
                Signs of Autism in Toddlers
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
