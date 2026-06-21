import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/toddler-not-talking")({
  head: () => ({
    meta: [
      {
        title:
          "Toddler Not Talking at 2: Causes, Evaluation, and Next Steps | ChildBloom",
      },
      {
        name: "description",
        content:
          "If your 2-year-old is not talking, here is what may be causing it, what speech milestones to expect, when to seek an evaluation, and practical steps to support language development.",
      },
      {
        property: "og:title",
        content:
          "Toddler Not Talking at 2: Causes, Evaluation, and Next Steps | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "If your 2-year-old is not talking, here is what may be causing it, what speech milestones to expect, when to seek an evaluation, and practical steps to support language development.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/toddler-not-talking" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Toddler Not Talking at 2: Causes, Evaluation, and Next Steps",
          description:
            "If your 2-year-old is not talking, here is what may be causing it, what speech milestones to expect, when to seek an evaluation, and practical steps to support language development.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://childbloom.site/articles/toddler-not-talking",
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
              name: "Toddler Not Talking at 2",
              item: "https://childbloom.site/articles/toddler-not-talking",
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
              name: "How many words should a 2-year-old say?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "By age 2, most children say at least 50 words and are starting to combine two words together (e.g., 'more juice', 'daddy go'). If your child says fewer than 50 words or is not combining words by 24 months, speak with your pediatrician.",
              },
            },
            {
              "@type": "Question",
              name: "What is a late talker?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "A late talker is a child between 18 and 30 months who has a limited vocabulary for their age but has normal development in other areas such as understanding language, social skills, motor development, and thinking skills. Many late talkers catch up on their own, but evaluation is still recommended.",
              },
            },
            {
              "@type": "Question",
              name: "When should I be worried about my 2-year-old not talking?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Request a speech-language evaluation if your child has fewer than 50 words at 24 months, is not combining two words, does not understand simple instructions, or if you notice regression (losing words they previously had). Early evaluation is always beneficial.",
              },
            },
            {
              "@type": "Question",
              name: "Will my late talker catch up without therapy?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Some late talkers do catch up on their own, particularly if they understand language well and are developing normally in other areas. However, research shows that early intervention leads to better outcomes than waiting. An evaluation will clarify whether your child needs support.",
              },
            },
            {
              "@type": "Question",
              name: "Can screen time cause speech delay?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Excessive passive screen time (watching videos without interaction) has been associated with speech delays in some studies, particularly when it displaces face-to-face interaction. The American Academy of Pediatrics recommends limiting passive screen time and prioritizing interactive communication.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: ToddlerNotTalkingArticle,
});

function ToddlerNotTalkingArticle() {
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
              Toddler Not Talking at 2: Causes, Evaluation, and Next Steps
            </h1>
            <p className="text-sm text-muted-foreground">
              17 min read &bull; Published June 21, 2026 &bull; Medically reviewed by Dr. Emma Lane,
              MD
            </p>
          </div>

          {/* Quick Answer */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <h2 className="font-semibold text-foreground mb-2">Quick Answer</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A 2-year-old who is not talking or has fewer than 50 words may be a late talker.
              While some children catch up on their own, a speech-language evaluation is always
              recommended at this age. Early intervention — before age 3 — produces the best
              long-term outcomes for language development.
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
                <a href="#milestones" className="text-primary hover:underline">
                  Speech Milestones by Age
                </a>
              </li>
              <li>
                <a href="#causes" className="text-primary hover:underline">
                  Common Causes of Speech Delay at 2
                </a>
              </li>
              <li>
                <a href="#late-talker" className="text-primary hover:underline">
                  What Is a Late Talker?
                </a>
              </li>
              <li>
                <a href="#red-flags" className="text-primary hover:underline">
                  Red Flags That Need Evaluation Now
                </a>
              </li>
              <li>
                <a href="#evaluation" className="text-primary hover:underline">
                  Getting a Speech Evaluation
                </a>
              </li>
              <li>
                <a href="#what-parents-can-do" className="text-primary hover:underline">
                  What Parents Can Do at Home
                </a>
              </li>
              <li>
                <a href="#when-to-call-doctor" className="text-primary hover:underline">
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
              <li>By 24 months, most children say at least 50 words and combine two words together.</li>
              <li>A &quot;late talker&quot; has limited words but normal understanding and social development.</li>
              <li>Common causes include hearing loss, oral-motor difficulties, bilingual exposure, and developmental differences.</li>
              <li>A speech-language pathology evaluation is recommended whenever you have concerns — there is no benefit to waiting.</li>
              <li>In the US, early intervention services are free for eligible children under age 3.</li>
              <li>Parent-led strategies at home can significantly boost language development alongside professional support.</li>
            </ul>
          </div>

          {/* Section 1: Milestones */}
          <section id="milestones" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Speech Milestones by Age</h2>
            <p>
              Every child develops at their own pace, but there are general milestones that help
              pediatricians and speech-language pathologists identify when a child may need support.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium text-foreground">Age</th>
                    <th className="p-3 text-left font-medium text-foreground">Expected Skills</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">12 months</td>
                    <td className="p-3">
                      1–3 words with meaning (mama, dada, ball); babbling with varied sounds; points
                      to objects
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">18 months</td>
                    <td className="p-3">
                      10–20 words; understands simple instructions; points to body parts when asked
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">24 months</td>
                    <td className="p-3">
                      50+ words; combines two words (more milk, daddy go); strangers understand
                      about 50% of speech
                    </td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">36 months</td>
                    <td className="p-3">
                      200+ words; 3-word sentences; asks questions; strangers understand most speech
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <p>
              These milestones are based on guidelines from the American Academy of Pediatrics
              (AAP) and the American Speech-Language-Hearing Association (ASHA). They represent the
              skills most children have acquired by that age — not the earliest possible age.
            </p>
          </section>

          {/* Section 2: Causes */}
          <section id="causes" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">
              Common Causes of Speech Delay at 2
            </h2>
            <p>
              There is rarely a single cause for speech delay. It is important not to jump to
              conclusions — many causes are highly treatable when identified early.
            </p>

            <h3 className="text-xl font-semibold text-foreground">Hearing Loss</h3>
            <p>
              Hearing loss is one of the most commonly missed causes of speech delay. Children can
              pass a newborn hearing screen and still develop hearing issues later. If your child
              does not appear to respond to sounds or their name, a hearing evaluation (audiogram)
              should be the first step.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              Oral-Motor or Articulation Differences
            </h3>
            <p>
              Some children have difficulty coordinating the muscles needed for speech — not because
              of a language problem but because of how the muscles of the mouth, tongue, and lips
              work together. A speech-language pathologist can identify this during evaluation.
            </p>

            <h3 className="text-xl font-semibold text-foreground">Bilingual or Multilingual Home</h3>
            <p>
              Children raised with two or more languages may have a smaller vocabulary in each
              individual language compared to monolingual peers, but their total vocabulary across
              both languages is typically on target. Being bilingual does not cause speech delay —
              but bilingual children may be incorrectly diagnosed with delay if only one language is
              assessed.
            </p>

            <h3 className="text-xl font-semibold text-foreground">Autism Spectrum Disorder</h3>
            <p>
              Speech delay can be an early sign of autism spectrum disorder (ASD), particularly
              when accompanied by limited eye contact, reduced pointing or gesture use, and little
              interest in social interaction. Not all speech-delayed children have autism, but an
              evaluation helps rule it in or out.
            </p>

            <p>
              See:{" "}
              <a
                href="/articles/signs-of-autism-in-toddlers"
                className="text-primary hover:underline"
              >
                Signs of Autism in Toddlers: Early Red Flags Parents Should Know
              </a>
            </p>

            <h3 className="text-xl font-semibold text-foreground">Intellectual Disability</h3>
            <p>
              Global developmental delays affecting multiple areas (motor, cognitive, language) may
              suggest an underlying intellectual disability. In these cases, evaluation by a
              developmental pediatrician is recommended alongside speech assessment.
            </p>

            <h3 className="text-xl font-semibold text-foreground">Environmental Factors</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Limited language exposure:</strong> Children learn language by hearing it.
                Less verbal interaction at home reduces language input.
              </li>
              <li>
                <strong>Excessive passive screen time:</strong> Screens do not teach language the
                same way live interaction does. The AAP recommends limiting solo screen time for
                children under 2.
              </li>
              <li>
                <strong>Chronic ear infections (otitis media):</strong> Repeated fluid buildup
                behind the eardrums — even without full hearing loss — can muffled hearing during
                critical language-learning months.
              </li>
            </ul>
          </section>

          {/* Section 3: Late Talker */}
          <section id="late-talker" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">What Is a Late Talker?</h2>
            <p>
              The term &quot;late talker&quot; has a specific clinical meaning. A late talker is a child
              between 18 and 30 months who has a limited expressive vocabulary (the words they say)
              but has normal development in all other areas:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Receptive language (understanding):</strong> They understand what you say
                to them
              </li>
              <li>
                <strong>Social development:</strong> They make eye contact, smile, and engage with
                people
              </li>
              <li>
                <strong>Motor development:</strong> They move, play, and explore normally
              </li>
              <li>
                <strong>Cognitive development:</strong> They problem-solve and learn from the
                environment
              </li>
            </ul>

            <p>
              Research suggests that around 70% of late talkers catch up to their peers by school
              age without formal intervention. However, the remaining 30% continue to have language
              difficulties that affect reading, learning, and social development. Because there is
              currently no reliable way to predict which late talkers will catch up, early
              evaluation is always the recommended course of action.
            </p>

            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-foreground mb-2">The &quot;Wait and See&quot; Approach</h3>
              <p className="text-sm text-muted-foreground">
                Many parents are told to &quot;wait and see&quot; if their late talker catches up. Current
                pediatric guidelines no longer recommend this approach when clear delays are
                present. Research from ASHA consistently shows that early intervention — even for
                children who might catch up on their own — leads to faster progress and better
                long-term outcomes.
              </p>
            </div>
          </section>

          {/* Section 4: Red Flags */}
          <section id="red-flags" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">
              Red Flags That Need Evaluation Now
            </h2>
            <p>
              While any speech concern warrants attention, certain signs require urgent evaluation —
              meaning do not wait for the next well-child visit.
            </p>

            <h3 className="text-xl font-semibold text-foreground">Request Immediate Evaluation If:</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Your child does not say any words by 16 months</li>
              <li>Your child does not say any two-word phrases by 24 months (e.g., &quot;more milk&quot;)</li>
              <li>
                Your child has lost words or language skills they previously had (this is called
                regression and always warrants evaluation)
              </li>
              <li>Your child does not respond to their name consistently by 12 months</li>
              <li>Your child does not point, wave, or use gestures by 12 months</li>
              <li>
                Your child does not make eye contact or engage socially in ways typical for their age
              </li>
            </ul>

            <p>
              Related:{" "}
              <a href="/articles/speech-delay-toddler" className="text-primary hover:underline">
                Speech Delay in Toddlers: When to Worry and How to Help
              </a>
            </p>
          </section>

          {/* Section 5: Evaluation */}
          <section id="evaluation" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Getting a Speech Evaluation</h2>
            <p>
              There are two main pathways for accessing a speech-language evaluation for a toddler
              under 3 in the United States.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              1. Early Intervention (Free, Under Age 3)
            </h3>
            <p>
              The Individuals with Disabilities Education Act (IDEA) guarantees free evaluation and,
              if eligible, free services for children under 3 through the Early Intervention (EI)
              program. You do not need a doctor&apos;s referral in most states — you can self-refer by
              contacting your state or county EI program directly.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Evaluations are conducted in your home or a natural setting</li>
              <li>Services are delivered in the home if the child qualifies</li>
              <li>There is no cost to families in most cases</li>
              <li>Services end at age 3 and transition to school-based programs (Part B)</li>
            </ul>

            <p>
              See our full guide:{" "}
              <a href="/articles/early-intervention" className="text-primary hover:underline">
                Early Intervention Services: What Parents Need to Know
              </a>
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              2. Private Speech-Language Pathology (SLP) Evaluation
            </h3>
            <p>
              A private SLP evaluation provides more detailed testing and can be accessed faster
              than public EI in some areas. Ask your pediatrician for a referral. Most insurance
              plans cover evaluations when there is a documented developmental concern.
            </p>

            <h3 className="text-xl font-semibold text-foreground">What Happens During the Evaluation</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Parent interview about developmental history and family history</li>
              <li>
                Standardized assessments for both expressive language (speaking) and receptive
                language (understanding)
              </li>
              <li>Observation of play-based interaction</li>
              <li>Hearing screening or referral if hearing has not been recently evaluated</li>
              <li>Oral-motor examination (tongue, lips, jaw coordination)</li>
            </ul>

            <p>
              You will receive a report with findings and recommendations. If services are
              recommended, therapy typically begins within a few weeks.
            </p>
          </section>

          {/* Section 6: What Parents Can Do */}
          <section
            id="what-parents-can-do"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold text-foreground">What Parents Can Do at Home</h2>
            <p>
              While waiting for or alongside professional support, there is a great deal parents can
              do to boost language development at home. Research consistently shows that caregiver
              interaction style is one of the strongest predictors of language growth.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              Expand, Don&apos;t Just Correct
            </h3>
            <p>
              When your child says &quot;ball,&quot; respond with &quot;Yes! Big red ball.&quot; This technique — called
              expansion — models slightly more complex language just above your child&apos;s current
              level without pressure.
            </p>

            <h3 className="text-xl font-semibold text-foreground">Follow Their Lead</h3>
            <p>
              Watch what your child is interested in and talk about it. If they pick up a truck, say
              &quot;Truck! The truck goes vroom.&quot; Children learn language most efficiently when it is
              linked to what they are already attending to.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              Use Parallel Talk and Self-Talk
            </h3>
            <p>
              Narrate your own actions and your child&apos;s actions throughout the day. &quot;Now I&apos;m washing
              your hands. Soap. Rub, rub, rub. Now we rinse. All done!&quot; This fills your child&apos;s day
              with rich language without requiring them to respond.
            </p>

            <h3 className="text-xl font-semibold text-foreground">
              Reduce Questions, Increase Comments
            </h3>
            <p>
              Questions can feel like pressure for children who are already struggling. Instead of
              &quot;What is that?&quot; try commenting: &quot;Oh, a dog! The dog is brown.&quot; Comments invite
              conversation without demanding it.
            </p>

            <h3 className="text-xl font-semibold text-foreground">Read Together Daily</h3>
            <p>
              Shared book reading is one of the most powerful language-building activities
              available to parents. Point to pictures, use different voices, and pause to let your
              child fill in words or respond. Even 10 minutes a day makes a measurable difference.
            </p>

            <h3 className="text-xl font-semibold text-foreground">Limit Passive Screen Time</h3>
            <p>
              Screens are not a substitute for live interaction. Apps marketed as educational have
              not been shown to improve early language outcomes in children under 2. Prioritize
              face-to-face talking, singing, and playing.
            </p>

            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-foreground mb-2">Recommended Books for Late Talkers</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                <li>
                  <em>It Takes Two to Talk</em> by Jan Pepper and Elaine Weitzman — a parent-focused
                  guide from the Hanen Centre
                </li>
                <li>
                  <em>The Late Talker</em> by Marilyn Agin, Lisa Geng, and Malcolm Nicholl
                </li>
                <li>
                  <em>Einstein Never Used Flash Cards</em> by Kathy Hirsh-Pasek and Roberta
                  Golinkoff
                </li>
              </ul>
            </div>
          </section>

          {/* Section 7: When to Call Doctor */}
          <section
            id="when-to-call-doctor"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold text-foreground">When to Call a Doctor</h2>
            <p>
              Contact your pediatrician or request an Early Intervention evaluation if your
              2-year-old:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Has fewer than 50 words at 24 months</li>
              <li>Is not combining two words by 24 months</li>
              <li>
                Has lost words or skills they previously had (language regression always warrants
                evaluation)
              </li>
              <li>Does not appear to understand simple instructions</li>
              <li>Does not make eye contact or engage socially in age-typical ways</li>
              <li>Has not had a hearing test recently</li>
            </ul>

            <h3 className="text-xl font-semibold text-foreground">Emergency Warning Signs</h3>
            <p>Seek immediate medical attention if your child:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Suddenly loses the ability to swallow, has difficulty breathing, or shows signs of
                neurological change
              </li>
              <li>
                Has a sudden regression in multiple developmental areas after a fever or illness
                (could indicate encephalitis or other medical conditions)
              </li>
            </ul>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Frequently Asked Questions</h2>

            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">
                  How many words should a 2-year-old say?
                </dt>
                <dd className="mt-2">
                  By age 2, most children say at least 50 words and are starting to combine two
                  words together (e.g., &quot;more juice&quot;, &quot;daddy go&quot;). If your child says fewer than 50
                  words or is not combining words by 24 months, speak with your pediatrician.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">What is a late talker?</dt>
                <dd className="mt-2">
                  A late talker is a child between 18 and 30 months who has a limited vocabulary
                  for their age but has normal development in other areas such as understanding
                  language, social skills, motor development, and thinking skills. Many late talkers
                  catch up on their own, but evaluation is still recommended.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  When should I be worried about my 2-year-old not talking?
                </dt>
                <dd className="mt-2">
                  Request a speech-language evaluation if your child has fewer than 50 words at 24
                  months, is not combining two words, does not understand simple instructions, or if
                  you notice regression (losing words they previously had). Early evaluation is
                  always beneficial.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  Will my late talker catch up without therapy?
                </dt>
                <dd className="mt-2">
                  Some late talkers do catch up on their own, particularly if they understand
                  language well and are developing normally in other areas. However, research shows
                  that early intervention leads to better outcomes than waiting. An evaluation will
                  clarify whether your child needs support.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  Can screen time cause speech delay?
                </dt>
                <dd className="mt-2">
                  Excessive passive screen time (watching videos without interaction) has been
                  associated with speech delays in some studies, particularly when it displaces
                  face-to-face interaction. The American Academy of Pediatrics recommends limiting
                  passive screen time and prioritizing interactive communication.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  Are boys more likely to be late talkers than girls?
                </dt>
                <dd className="mt-2">
                  Yes, boys are statistically more likely to be late talkers than girls. However,
                  this does not mean parents should wait longer before seeking evaluation for a son.
                  The same milestones and evaluation thresholds apply regardless of sex.
                </dd>
              </div>
            </dl>
          </section>

          {/* Related Articles */}
          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/speech-delay-toddler" className="text-primary hover:underline">
                Speech Delay in Toddlers
              </a>
              <span className="text-muted-foreground">&bull;</span>
              <a href="/articles/speech-development-guide" className="text-primary hover:underline">
                Speech Development Guide
              </a>
              <span className="text-muted-foreground">&bull;</span>
              <a href="/articles/early-intervention" className="text-primary hover:underline">
                Early Intervention Services
              </a>
              <span className="text-muted-foreground">&bull;</span>
              <a
                href="/articles/signs-of-autism-in-toddlers"
                className="text-primary hover:underline"
              >
                Signs of Autism in Toddlers
              </a>
            </div>
          </div>

          {/* Medical Disclaimer */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Medical Disclaimer:</strong> This article is for educational purposes only
              and does not constitute medical advice. Always consult your pediatrician or
              healthcare provider for concerns about your child&apos;s health.
            </p>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}
