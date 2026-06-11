import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/speech-development-guide" as const)({
  head: () => ({
    meta: [
      {
        title: "Speech Development Guide: Milestones, Activities & When to Seek Help | ChildBloom",
      },
      {
        name: "description",
        content:
          "Complete guide to toddler speech development: 12-36 month milestones, daily activities to boost language, signs of delay, and when to consult a speech therapist. Evidence-based tips for parents.",
      },
      {
        property: "og:title",
        content:
          "Speech Development Guide: Milestones, Activities & When to Seek Help | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "Complete guide to toddler speech development: 12-36 month milestones, daily activities to boost language, signs of delay, and when to consult a speech therapist.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/speech-development-guide" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Speech Development Guide: Milestones, Activities & When to Seek Help",
          description:
            "Complete guide to toddler speech development: 12-36 month milestones, daily activities to boost language, signs of delay, and when to consult a speech therapist.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/speech-development-guide" },
          datePublished: "2026-06-11",
          dateModified: "2026-06-11",
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
              name: "Speech Development Guide",
              item: "https://childbloom.site/articles/speech-development-guide",
            },
          ],
        }),
      },
    ],
  }),
  component: SpeechDevelopmentGuideArticle,
});

function SpeechDevelopmentGuideArticle() {
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
              Speech Development Guide: Milestones, Activities &amp; When to Seek Help
            </h1>
            <p className="text-sm text-muted-foreground">
              16 min read • Published June 11, 2026 • Medically reviewed by Dr. Emma Lane, MD
            </p>
          </div>

          <nav
            className="rounded-2xl border border-border bg-muted p-5 text-sm"
            aria-label="Table of contents"
          >
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li>
                <a href="#understanding-speech" className="text-primary hover:underline">
                  Understanding Speech Development
                </a>
              </li>
              <li>
                <a href="#12-18-months" className="text-primary hover:underline">
                  12–18 Months: First Words &amp; Gestures
                </a>
              </li>
              <li>
                <a href="#18-24-months" className="text-primary hover:underline">
                  18–24 Months: Word Explosion
                </a>
              </li>
              <li>
                <a href="#24-36-months" className="text-primary hover:underline">
                  24–36 Months: Sentences &amp; Conversations
                </a>
              </li>
              <li>
                <a href="#daily-activities" className="text-primary hover:underline">
                  Daily Activities to Boost Language
                </a>
              </li>
              <li>
                <a href="#signs-of-delay" className="text-primary hover:underline">
                  Signs of Speech Delay
                </a>
              </li>
              <li>
                <a href="#when-to-seek-help" className="text-primary hover:underline">
                  When to Seek Professional Help
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          <section
            id="understanding-speech"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Understanding Speech Development</h2>
            <p>
              Speech and language development is one of the most exciting—and sometimes
              worrisome—parts of early childhood. While every child develops at their own pace,
              there are clear milestones that help parents know what to expect and when extra
              support may be helpful.
            </p>
            <p>
              <strong>Receptive language</strong> (understanding) usually develops before{" "}
              <strong>expressive language</strong> (speaking). A toddler may understand dozens of
              words before saying their first one. Both are equally important.
            </p>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-2">
                Key Principle: Language-Rich Environment
              </h3>
              <p className="text-sm text-muted-foreground">
                Children learn language through interaction, not passive exposure. Talk, sing, read,
                and narrate daily activities. The more back-and-forth conversations, the faster
                language grows.
              </p>
            </div>
          </section>

          <section id="12-18-months" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">12–18 Months: First Words &amp; Gestures</h2>
            <p>
              By 12 months, most babies say 1–3 words and understand many more. Gestures like
              pointing and waving are early communication tools.
            </p>

            <h3 className="text-xl font-semibold">Milestones</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Uses 1–6 meaningful words (mama, dada, ball, more)</li>
              <li>Points to show interest or request</li>
              <li>Follows simple one-step directions (“come here”, “give me”)</li>
              <li>Imitates sounds and words</li>
              <li>Understands names of familiar people and objects</li>
            </ul>

            <h3 className="text-xl font-semibold">Red Flags at 15 Months</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>No consistent words or gestures</li>
              <li>Doesn’t point or show objects to others</li>
              <li>Limited eye contact or social engagement</li>
            </ul>
          </section>

          <section id="18-24-months" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">18–24 Months: Word Explosion</h2>
            <p>
              This is often called the “vocabulary spurt.” Many toddlers go from 20–50 words to 200+
              words in a few months.
            </p>

            <h3 className="text-xl font-semibold">Milestones</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Uses 20–50+ words by 18 months; 50–200+ by 24 months</li>
              <li>Combines two words (“more milk”, “big dog”)</li>
              <li>Points to body parts when named</li>
              <li>Follows two-step directions (“pick up the ball and give it to me”)</li>
              <li>Uses words to express wants and feelings</li>
            </ul>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-semibold text-amber-800 mb-2">⚠️ Watch for Late Talkers</h3>
              <p className="text-sm text-amber-700">
                About 15–20% of toddlers are “late talkers” (fewer than 50 words at 24 months with
                no other delays). Many catch up naturally, but evaluation is recommended if there
                are other concerns.
              </p>
            </div>
          </section>

          <section id="24-36-months" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">24–36 Months: Sentences &amp; Conversations</h2>
            <p>Language becomes a tool for storytelling, problem-solving, and social connection.</p>

            <h3 className="text-xl font-semibold">Milestones</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Uses 3–5 word sentences by 30 months</li>
              <li>
                Speech is 50–75% understandable to strangers by 24 months; 75–100% by 36 months
              </li>
              <li>Asks simple questions (“what’s that?”, “where go?”)</li>
              <li>Understands concepts like big/little, in/out, up/down</li>
              <li>Engages in back-and-forth conversation for several turns</li>
            </ul>
          </section>

          <section
            id="daily-activities"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Daily Activities to Boost Language</h2>
            <p>
              Small moments throughout the day build big language skills. Consistency matters more
              than perfection.
            </p>

            <h3 className="text-xl font-semibold">1. Narrate Everything</h3>
            <p>
              Describe what you’re doing: “I’m cutting the apple into slices. One, two, three
              slices. Now I’m putting them in the bowl.”
            </p>

            <h3 className="text-xl font-semibold">2. Read Daily (Even 10 Minutes)</h3>
            <p>
              Point to pictures, ask “what’s that?”, let your child turn pages. Board books with
              simple text work best at this age.
            </p>

            <h3 className="text-xl font-semibold">3. Sing Songs &amp; Rhymes</h3>
            <p>
              “Itsy Bitsy Spider”, “Twinkle Twinkle”, finger plays — rhythm and repetition help
              memory and pronunciation.
            </p>

            <h3 className="text-xl font-semibold">4. Expand &amp; Extend</h3>
            <p>
              When your child says “car”, reply “Yes, the red car is going fast! Where is it going?”
            </p>

            <h3 className="text-xl font-semibold">5. Play Pretend</h3>
            <p>
              Tea parties, doctor kits, toy kitchens — imaginative play builds vocabulary and social
              language.
            </p>

            <p className="mt-4">
              Related:{" "}
              <a href="/articles/best-baby-books" className="text-primary hover:underline">
                Best Baby Books for Language Development
              </a>
            </p>
          </section>

          <section
            id="signs-of-delay"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Signs of Speech or Language Delay</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>No babbling by 12 months</li>
              <li>No words by 15–18 months</li>
              <li>Less than 50 words at 24 months</li>
              <li>No two-word combinations by 24–30 months</li>
              <li>Speech is very hard to understand after 3 years</li>
              <li>Regression (losing previously used words)</li>
              <li>Limited gestures or eye contact</li>
              <li>Frustration when trying to communicate</li>
            </ul>
          </section>

          <section
            id="when-to-seek-help"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">When to Seek Professional Help</h2>
            <p>
              Early intervention makes a huge difference. Don’t wait and see if you have concerns.
            </p>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-semibold text-red-800 mb-2">Recommended Actions</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-red-700">
                <li>Talk to your pediatrician at the 18- or 24-month well visit</li>
                <li>
                  Request a referral for speech-language evaluation (often covered by early
                  intervention programs 0–3 years)
                </li>
                <li>Consider hearing test — even mild hearing loss can delay speech</li>
                <li>Private speech therapy if insurance or early intervention isn’t available</li>
              </ul>
            </div>

            <p className="mt-4">
              Many late talkers catch up with a little extra support. The earlier, the better.
            </p>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">
                  My 18-month-old only says 10 words. Should I be worried?
                </dt>
                <dd className="mt-2">
                  It’s on the lower side but within normal range for some children. Focus on daily
                  language-rich activities and track progress. Mention it at the next well visit.
                  Many children have a big spurt between 18–24 months.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  Does screen time affect speech development?
                </dt>
                <dd className="mt-2">
                  Yes—excessive passive screen time is linked to language delays. The AAP recommends
                  no screens under 18–24 months except video chatting. Interactive apps are better
                  than videos, but real-life interaction is far superior.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  Should I correct my child’s pronunciation?
                </dt>
                <dd className="mt-2">
                  Model the correct word gently instead of correcting: Child says “wabbit” → You say
                  “Yes, that’s a rabbit! Look at the fluffy rabbit.” This encourages without causing
                  frustration.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  Is bilingualism confusing for toddlers?
                </dt>
                <dd className="mt-2">
                  No—bilingual children may mix languages or have slightly smaller vocabularies in
                  each language initially, but they catch up and often have cognitive advantages.
                  Continue using both languages consistently.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  What if my child understands everything but doesn’t talk?
                </dt>
                <dd className="mt-2">
                  This is common in late talkers. Receptive language is strong, expressive is
                  delayed. Still worth evaluating—speech therapy can help unlock expressive skills.
                </dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/speech-milestones" className="text-primary hover:underline">
                Speech Milestones 12-24 Months
              </a>
              <span className="text-muted-foreground">•</span>
              <a
                href="/articles/child-development-milestones"
                className="text-primary hover:underline"
              >
                Child Development Milestones
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/best-baby-books" className="text-primary hover:underline">
                Best Baby Books
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/baby-milestones-by-month" className="text-primary hover:underline">
                Baby Milestones by Month
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Medical Disclaimer:</strong> This article is for educational purposes only and
              does not constitute medical advice. Always consult your pediatrician or healthcare
              provider for concerns about your child's health.
            </p>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}
