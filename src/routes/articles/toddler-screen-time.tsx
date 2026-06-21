import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/toddler-screen-time")({
  head: () => ({
    meta: [
      { title: "Toddler Screen Time: How Much Is Too Much? Age-by-Age Guide | ChildBloom" },
      {
        name: "description",
        content:
          "Age-by-age guide to toddler screen time limits. AAP recommendations, effects on development, how to set healthy boundaries, and what to do when your toddler is addicted to screens.",
      },
      {
        property: "og:title",
        content: "Toddler Screen Time: How Much Is Too Much? Age-by-Age Guide | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "Age-by-age guide to toddler screen time limits. AAP recommendations, effects on development, and how to set healthy boundaries.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://childbloom.site/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://childbloom.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/articles/toddler-screen-time" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Toddler Screen Time: How Much Is Too Much (Age-by-Age Guide)",
          description:
            "Age-by-age guide to toddler screen time limits. AAP recommendations, effects on development, how to set healthy boundaries, and what to do when your toddler is addicted to screens.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://childbloom.site/articles/toddler-screen-time",
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
              name: "Toddler Screen Time",
              item: "https://childbloom.site/articles/toddler-screen-time",
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
              name: "How much screen time is okay for a toddler?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "The AAP recommends no screen time for children under 18 months (except video chatting), limited high-quality co-viewed content from 18 to 24 months, and no more than 1 hour per day of high-quality programming for children ages 2 to 5.",
              },
            },
            {
              "@type": "Question",
              name: "Is screen time bad for toddler development?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Excessive screen time is linked to delays in language, attention, and social skills, as well as poorer sleep. Screens displace the back-and-forth interaction, play, and movement that drive healthy development. Moderate, high-quality, co-viewed content is much less concerning than long solo sessions.",
              },
            },
            {
              "@type": "Question",
              name: "Does screen time cause speech delay?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Heavy screen use is associated with slower language development, mainly because it replaces conversation and interactive play. Screens are one-directional and do not respond to a child, so they cannot build language the way talking, reading, and playing with people do.",
              },
            },
            {
              "@type": "Question",
              name: "How do I reduce my toddler's screen time?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Set consistent limits, create screen-free zones and times (like meals and bedrooms), offer engaging alternatives, give warnings before turning screens off, and model healthy device habits yourself. Expect some pushback at first and stay consistent.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: ToddlerScreenTimeArticle,
});

function ToddlerScreenTimeArticle() {
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
              Toddler Screen Time: How Much Is Too Much (Age-by-Age Guide)
            </h1>
            <p className="text-sm text-muted-foreground">
              15 min read &bull; Published June 21, 2026 &bull; Medically reviewed by Dr. Emma Lane,
              MD
            </p>
          </div>

          {/* Quick Answer */}
          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
            <h2 className="font-semibold text-foreground mb-2">Quick Answer</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              The AAP recommends <strong>no screen time under 18 months</strong> (other than video
              chatting), <strong>limited, co-viewed high-quality content from 18–24 months</strong>,
              and <strong>no more than 1 hour per day</strong> of high-quality programming for ages
              2–5. What matters most is not just the number of minutes but <em>what</em> they watch,
              <em> who</em> they watch it with, and what the screen is <em>replacing</em>.
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
                <a href="#guidelines" className="text-primary hover:underline">
                  AAP Screen Time Limits by Age
                </a>
              </li>
              <li>
                <a href="#why-it-matters" className="text-primary hover:underline">
                  Why Screen Time Matters for Toddlers
                </a>
              </li>
              <li>
                <a href="#quality" className="text-primary hover:underline">
                  Not All Screen Time Is Equal
                </a>
              </li>
              <li>
                <a href="#signs" className="text-primary hover:underline">
                  Signs of Too Much Screen Time
                </a>
              </li>
              <li>
                <a href="#reduce" className="text-primary hover:underline">
                  How to Reduce Screen Time
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
              <li>Under 18 months: avoid screens except live video chatting with family.</li>
              <li>18–24 months: only high-quality content, watched together, in small amounts.</li>
              <li>Ages 2–5: cap at about 1 hour per day of high-quality programming.</li>
              <li>Co-viewing and talking about content matters more than the exact minute count.</li>
              <li>Screens are most harmful when they replace sleep, play, movement, and conversation.</li>
              <li>Consistent limits and screen-free zones work better than total bans.</li>
            </ul>
          </div>

          {/* Section 1 */}
          <section id="guidelines" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">AAP Screen Time Limits by Age</h2>
            <p>
              The American Academy of Pediatrics provides age-based recommendations. These are
              guidelines, not rigid rules — but they reflect what the research says about how young
              brains learn.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium text-foreground">Age</th>
                    <th className="p-3 text-left font-medium text-foreground">Recommendation</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Under 18 months</td>
                    <td className="p-3">Avoid screens entirely except for live video chatting</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">18–24 months</td>
                    <td className="p-3">If you introduce screens, choose high-quality content and watch together</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">2–5 years</td>
                    <td className="p-3">No more than 1 hour per day of high-quality programming, co-viewed when possible</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">All ages</td>
                    <td className="p-3">No screens during meals or in the hour before bedtime; no screens in the bedroom</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              Note that video chatting with a grandparent or relative is treated differently from
              passive watching. Because it is interactive and responsive, it does not count against
              these limits.
            </p>
          </section>

          {/* Section 2 */}
          <section id="why-it-matters" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">
              Why Screen Time Matters for Toddlers
            </h2>
            <p>
              Toddlerhood is a period of explosive brain growth. The skills that develop now —
              language, attention, emotional regulation, and social connection — are built through
              real-world, back-and-forth interaction. The concern with screens is less about the
              device itself and more about what it displaces.
            </p>
            <h3 className="text-xl font-semibold text-foreground">The Displacement Effect</h3>
            <p>
              Every hour spent passively watching is an hour not spent talking, playing, moving,
              exploring, or sleeping. Young children learn language and social skills from
              responsive interaction — something a screen, no matter how educational, cannot
              provide on its own.
            </p>
            <h3 className="text-xl font-semibold text-foreground">What the Research Links to Heavy Use</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Slower language and vocabulary development</li>
              <li>Shorter attention spans and difficulty with self-directed play</li>
              <li>Poorer sleep quality and trouble falling asleep</li>
              <li>Reduced physical activity</li>
              <li>More difficulty with emotional regulation and transitions</li>
            </ul>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-foreground mb-2">A Balanced Perspective</h3>
              <p className="text-sm text-muted-foreground">
                A short, high-quality program watched together is not going to harm your child. The
                concerns arise with long, daily, solo sessions of fast-paced or low-quality content.
                Most families fall somewhere in the middle, and small adjustments make a real
                difference.
              </p>
            </div>
          </section>

          {/* Section 3 */}
          <section id="quality" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Not All Screen Time Is Equal</h2>
            <p>
              Two toddlers can each watch 30 minutes a day and have completely different
              experiences. These three factors determine how beneficial — or harmful — screen time
              actually is:
            </p>
            <h3 className="text-xl font-semibold text-foreground">1. Content Quality</h3>
            <p>
              Slow-paced, educational programs designed for young children (think gentle pacing,
              real-world themes, simple narration) are far better than fast-cut, hyper-stimulating
              videos or autoplay rabbit holes. Avoid content with frantic edits and constant
              rewards.
            </p>
            <h3 className="text-xl font-semibold text-foreground">2. Co-Viewing</h3>
            <p>
              When you watch with your child and talk about what you see — naming objects, asking
              questions, connecting it to real life — a screen becomes a shared learning experience.
              This &quot;joint media engagement&quot; is one of the strongest ways to reduce the
              downsides of screen time.
            </p>
            <h3 className="text-xl font-semibold text-foreground">3. What It Replaces</h3>
            <p>
              Screen time used to keep a toddler calm during a necessary appointment is different
              from screen time that replaces outdoor play every afternoon. Be mindful of the trade.
            </p>
          </section>

          {/* Section 4 */}
          <section id="signs" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Signs of Too Much Screen Time</h2>
            <p>
              Watch for these red flags that screens may be taking up too much of your toddler&apos;s
              day:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Intense tantrums or meltdowns when screens are turned off</li>
              <li>Loss of interest in toys, books, or play that does not involve a screen</li>
              <li>Difficulty falling asleep or restless sleep</li>
              <li>Constantly asking for a device throughout the day</li>
              <li>Trouble paying attention to slower, real-world activities</li>
              <li>Less talking, eye contact, or interactive play</li>
            </ul>
            <p>
              If you notice several of these, it is a sign to scale back and rebuild other routines —
              not a cause for panic. Toddlers adjust quickly once new limits are consistent.
            </p>
          </section>

          {/* Section 5 */}
          <section id="reduce" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">How to Reduce Screen Time</h2>
            <p>
              Cutting back works best when you replace screens with something appealing rather than
              simply taking them away. Try these strategies:
            </p>
            <h3 className="text-xl font-semibold text-foreground">Set Clear, Consistent Limits</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Decide in advance how much and when — and keep it predictable</li>
              <li>Use a visual timer so the child can see when time is ending</li>
              <li>Give a warning a few minutes before turning the screen off</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground">Create Screen-Free Zones and Times</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>No screens during meals — make this a family rule for everyone</li>
              <li>No screens in the bedroom</li>
              <li>No screens in the hour before bed (the light and stimulation disrupt sleep)</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground">Offer Better Alternatives</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Keep a rotating bin of toys, books, and craft supplies within reach</li>
              <li>Build in outdoor time and active play every day</li>
              <li>Involve your toddler in simple daily tasks like cooking or tidying</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground">Model Healthy Habits</h3>
            <p>
              Toddlers imitate what they see. If your own phone is constantly in hand, limits will
              feel arbitrary to them. Putting your device away during family time is one of the most
              effective things you can do.
            </p>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-foreground mb-2">Expect Some Pushback</h3>
              <p className="text-sm text-muted-foreground">
                The first few days of new limits often bring protests. Stay calm and consistent.
                Within a week or two, most toddlers adapt and rediscover independent play.
              </p>
            </div>
            <p>
              For more on managing big feelings during transitions, see:{" "}
              <a href="/articles/toddler-tantrums" className="text-primary hover:underline">
                Toddler Tantrums: Why They Happen and How to Respond
              </a>
              .
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">How much screen time is okay for a toddler?</dt>
                <dd className="mt-2">
                  The AAP recommends no screen time under 18 months (except video chatting), limited
                  high-quality co-viewed content from 18 to 24 months, and no more than 1 hour per
                  day of high-quality programming for ages 2 to 5.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Is screen time bad for toddler development?</dt>
                <dd className="mt-2">
                  Excessive screen time is linked to delays in language, attention, and social
                  skills, plus poorer sleep, mainly because it displaces interaction, play, and
                  movement. Moderate, high-quality, co-viewed content is far less concerning than
                  long solo sessions.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Does screen time cause speech delay?</dt>
                <dd className="mt-2">
                  Heavy screen use is associated with slower language development, largely because it
                  replaces conversation and interactive play. Screens are one-directional and cannot
                  build language the way talking, reading, and playing with people do.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">How do I reduce my toddler&apos;s screen time?</dt>
                <dd className="mt-2">
                  Set consistent limits, create screen-free zones and times (meals and bedrooms),
                  offer engaging alternatives, give warnings before turning screens off, and model
                  healthy device habits yourself. Expect some pushback at first and stay consistent.
                </dd>
              </div>
            </dl>
          </section>

          {/* Related Articles */}
          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/toddler-tantrums" className="text-primary hover:underline">
                Toddler Tantrums
              </a>
              <span className="text-muted-foreground">&bull;</span>
              <a href="/articles/toddler-not-talking" className="text-primary hover:underline">
                Toddler Not Talking at 2
              </a>
              <span className="text-muted-foreground">&bull;</span>
              <a href="/articles/toddler-hitting" className="text-primary hover:underline">
                Toddler Hitting
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
