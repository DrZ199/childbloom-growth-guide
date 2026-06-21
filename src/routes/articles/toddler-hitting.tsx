import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/toddler-hitting")({
  head: () => ({
    meta: [
      { title: "Toddler Hitting: Why It Happens and How to Respond | ChildBloom" },
      {
        name: "description",
        content:
          "Why toddlers hit, bite, and throw things — and what to actually do about it. Covers brain development, emotional regulation, what not to do, and gentle but firm strategies that work.",
      },
      {
        property: "og:title",
        content: "Toddler Hitting: Why It Happens and How to Respond | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "Why toddlers hit, bite, and throw things — and gentle but firm strategies that actually work.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/toddler-hitting" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Toddler Hitting: Why It Happens and How to Respond",
          description:
            "Why toddlers hit, bite, and throw things — and what to actually do about it. Covers brain development, emotional regulation, what not to do, and gentle but firm strategies that work.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://childbloom.site/articles/toddler-hitting",
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
              name: "Toddler Hitting",
              item: "https://childbloom.site/articles/toddler-hitting",
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
              name: "Why does my toddler hit?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Toddlers hit because the part of the brain responsible for impulse control is still developing, and they lack the language to express big feelings like frustration, anger, or overwhelm. Hitting is communication, not malice — it is how an immature brain discharges emotion it cannot yet manage.",
              },
            },
            {
              "@type": "Question",
              name: "Is hitting normal for toddlers?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Yes. Hitting, biting, and throwing are extremely common between roughly 18 months and 3 years. It is a normal developmental phase tied to brain immaturity and limited language, not a sign that something is wrong with your child or your parenting.",
              },
            },
            {
              "@type": "Question",
              name: "How do I get my toddler to stop hitting?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Respond calmly and consistently: stop the hitting physically, state a short clear limit ('I won't let you hit'), name the feeling, and offer an acceptable alternative. Over time, teach emotional words, reduce triggers like hunger and overtiredness, and praise gentle behavior. Avoid hitting back or yelling.",
              },
            },
            {
              "@type": "Question",
              name: "When should I worry about my toddler's hitting?",
              acceptedAnswer: {
                "@type": "Answer",
                text: "Talk to your pediatrician if aggression is frequent and intense beyond age 3 or 4, causes regular injury, does not improve with consistent strategies, or comes with other concerns like speech delay, loss of skills, or extreme difficulty with everyday transitions.",
              },
            },
          ],
        }),
      },
    ],
  }),
  component: ToddlerHittingArticle,
});

function ToddlerHittingArticle() {
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
              Toddler Hitting: Why It Happens and How to Respond
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
              Toddlers hit because their impulse-control brain is still under construction and they
              do not yet have the words for big feelings. Hitting is communication, not defiance. The
              most effective response is to stay calm, stop the behavior firmly without anger, name
              the feeling, set a short clear limit, and teach a better way — consistently, over many
              repetitions.
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
                <a href="#why" className="text-primary hover:underline">
                  Why Toddlers Hit
                </a>
              </li>
              <li>
                <a href="#normal" className="text-primary hover:underline">
                  Is It Normal?
                </a>
              </li>
              <li>
                <a href="#in-the-moment" className="text-primary hover:underline">
                  What to Do in the Moment
                </a>
              </li>
              <li>
                <a href="#what-not" className="text-primary hover:underline">
                  What Not to Do
                </a>
              </li>
              <li>
                <a href="#prevent" className="text-primary hover:underline">
                  Preventing Hitting Before It Starts
                </a>
              </li>
              <li>
                <a href="#when-to-worry" className="text-primary hover:underline">
                  When to Talk to a Doctor
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
              <li>Hitting peaks between 18 months and 3 years and is developmentally normal.</li>
              <li>It reflects an immature brain and missing language, not bad character.</li>
              <li>Calm, consistent limits work; hitting back and yelling make it worse.</li>
              <li>Name the feeling and offer an acceptable alternative every time.</li>
              <li>Hunger, tiredness, and overstimulation are the biggest triggers.</li>
              <li>Most hitting fades as language and self-control mature.</li>
            </ul>
          </div>

          {/* Section 1 */}
          <section id="why" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Why Toddlers Hit</h2>
            <p>
              When your sweet child suddenly hauls off and smacks you, a sibling, or a friend, it can
              feel shocking and even personal. It is not. Toddler hitting is rooted in brain
              development, not in any desire to hurt.
            </p>
            <h3 className="text-xl font-semibold text-foreground">The Brain Is Still Under Construction</h3>
            <p>
              The prefrontal cortex — the part of the brain responsible for impulse control,
              reasoning, and managing emotions — does not fully mature until well into adulthood. In
              a toddler, it is barely online. When a big feeling surges through them, they have no
              built-in brake to stop the body from acting on it.
            </p>
            <h3 className="text-xl font-semibold text-foreground">They Do Not Have the Words</h3>
            <p>
              A toddler feels frustration, jealousy, excitement, or overwhelm just as intensely as an
              adult — but cannot say &quot;I&apos;m angry that you took my toy.&quot; With no language
              outlet, the emotion comes out through the body. Hitting is, quite literally, a form of
              communication.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Common Triggers</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Frustration when something is too hard or does not go their way</li>
              <li>Wanting a toy or being told no</li>
              <li>Feeling tired, hungry, or overstimulated</li>
              <li>Excitement that boils over into physical action</li>
              <li>Testing cause and effect — &quot;what happens when I do this?&quot;</li>
              <li>Seeking a reaction or attention</li>
            </ul>
          </section>

          {/* Section 2 */}
          <section id="normal" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Is It Normal?</h2>
            <p>
              Yes — overwhelmingly so. Hitting, biting, pushing, and throwing are among the most
              common toddler behaviors, typically peaking between 18 months and 3 years of age. It
              does not mean your child is aggressive by nature, that you have done something wrong,
              or that they will grow up to be violent.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium text-foreground">Age</th>
                    <th className="p-3 text-left font-medium text-foreground">What&apos;s Typical</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">12–18 months</td>
                    <td className="p-3">Hitting and biting out of impulse and exploration, often without understanding it hurts</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">18 months–2.5 years</td>
                    <td className="p-3">Peak hitting driven by frustration and lack of language; limited self-control</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">3 years</td>
                    <td className="p-3">Hitting begins to decline as language and emotional skills grow</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">4+ years</td>
                    <td className="p-3">Occasional under extreme stress, but frequent aggression is worth discussing with a doctor</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Section 3 */}
          <section id="in-the-moment" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">What to Do in the Moment</h2>
            <p>
              Consistency is everything. Responding the same calm way each time teaches your toddler
              far faster than any single dramatic reaction. Here is a simple framework:
            </p>
            <h3 className="text-xl font-semibold text-foreground">1. Stop It Calmly and Physically</h3>
            <p>
              Gently but firmly block or hold the hand and get down to their level. Your calm body
              language tells their nervous system that you are in control, even when they are not.
            </p>
            <h3 className="text-xl font-semibold text-foreground">2. State a Short, Clear Limit</h3>
            <p>
              Keep it brief: &quot;I won&apos;t let you hit. Hitting hurts.&quot; Toddlers cannot
              process long explanations, especially when upset. Fewer words land better.
            </p>
            <h3 className="text-xl font-semibold text-foreground">3. Name the Feeling</h3>
            <p>
              &quot;You&apos;re so mad that it&apos;s time to stop playing.&quot; Putting words to the
              emotion does two things: it helps your child feel understood, and it slowly builds the
              vocabulary they need to eventually express feelings instead of acting on them.
            </p>
            <h3 className="text-xl font-semibold text-foreground">4. Offer an Acceptable Alternative</h3>
            <p>
              Redirect the impulse: &quot;You can stomp your feet&quot; or &quot;You can squeeze this
              pillow&quot; or &quot;Use your words — say &apos;mine.&apos;&quot; This gives the energy
              somewhere to go.
            </p>
            <h3 className="text-xl font-semibold text-foreground">5. Tend to the Hurt Person</h3>
            <p>
              Calmly give attention to whoever was hit. This models empathy without shaming the
              hitter, and it removes any payoff your toddler might get from a big reaction.
            </p>
          </section>

          {/* Section 4 */}
          <section id="what-not" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">What Not to Do</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Do not hit back &quot;to show them how it feels.&quot;</strong> Toddlers
                learn by imitation. Hitting them teaches that hitting is how big people solve
                problems.
              </li>
              <li>
                <strong>Do not yell or shame.</strong> Big reactions escalate a dysregulated child
                and can even reward attention-seeking hitting.
              </li>
              <li>
                <strong>Do not demand an immediate &quot;sorry.&quot;</strong> A forced apology is
                meaningless to a toddler and teaches that words can erase actions. Model empathy
                instead.
              </li>
              <li>
                <strong>Do not lecture.</strong> Long explanations are lost on an overwhelmed
                toddler. Keep it short and act consistently.
              </li>
              <li>
                <strong>Do not assume malice.</strong> Reframing &quot;he&apos;s being bad&quot; as
                &quot;he&apos;s having a hard time&quot; changes how you respond — for the better.
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section id="prevent" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">
              Preventing Hitting Before It Starts
            </h2>
            <p>
              Much of toddler aggression is predictable, which means it is often preventable. Focus
              on the conditions that set your child up to cope:
            </p>
            <h3 className="text-xl font-semibold text-foreground">Manage the Big Triggers</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Keep meals and snacks regular — hunger is a top trigger</li>
              <li>Protect naps and bedtime — an overtired toddler has no impulse control</li>
              <li>Watch for overstimulation and build in quiet downtime</li>
            </ul>
            <h3 className="text-xl font-semibold text-foreground">Build Emotional Vocabulary</h3>
            <p>
              Throughout the day, narrate feelings: &quot;You&apos;re excited!&quot; &quot;That made
              you frustrated.&quot; The more words your child has for emotions, the less they need to
              use their hands.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Catch and Praise Gentle Behavior</h3>
            <p>
              Notice out loud when your toddler is gentle: &quot;You used soft hands with the
              baby — that was so kind.&quot; Positive attention for the behavior you want is more
              powerful than attention for the behavior you do not.
            </p>
            <h3 className="text-xl font-semibold text-foreground">Teach During Calm Moments</h3>
            <p>
              Practice &quot;gentle hands,&quot; read books about feelings, and role-play with toys
              when everyone is calm. Skills learned in peace are easier to recall in conflict.
            </p>
            <p>
              For more on the bigger picture of toddler emotions, see:{" "}
              <a href="/articles/toddler-tantrums" className="text-primary hover:underline">
                Toddler Tantrums: Why They Happen and How to Respond
              </a>
              .
            </p>
          </section>

          {/* Section 6 */}
          <section id="when-to-worry" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">When to Talk to a Doctor</h2>
            <p>
              Hitting is usually a phase that fades with maturity. But it is worth raising with your
              pediatrician if you notice:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Frequent, intense aggression that continues well past age 3 or 4</li>
              <li>Hitting that regularly causes real injury to others or themselves</li>
              <li>Behavior that does not improve at all with consistent strategies</li>
              <li>Aggression alongside speech delay, loss of skills, or extreme difficulty with everyday transitions</li>
              <li>Hitting that seems driven by intense, prolonged distress rather than ordinary frustration</li>
            </ul>
            <p>
              Your pediatrician can help rule out underlying causes and, if helpful, connect you with
              additional support. Asking for guidance is a sign of good parenting, not failure.
            </p>
          </section>

          {/* FAQ */}
          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold text-foreground">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Why does my toddler hit?</dt>
                <dd className="mt-2">
                  Toddlers hit because the part of the brain responsible for impulse control is still
                  developing, and they lack the language to express big feelings like frustration,
                  anger, or overwhelm. Hitting is communication, not malice.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Is hitting normal for toddlers?</dt>
                <dd className="mt-2">
                  Yes. Hitting, biting, and throwing are extremely common between roughly 18 months
                  and 3 years. It is a normal developmental phase tied to brain immaturity and limited
                  language, not a sign that something is wrong.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">How do I get my toddler to stop hitting?</dt>
                <dd className="mt-2">
                  Respond calmly and consistently: stop the hitting physically, state a short clear
                  limit, name the feeling, and offer an acceptable alternative. Teach emotional words,
                  reduce triggers like hunger and overtiredness, and praise gentle behavior. Avoid
                  hitting back or yelling.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">When should I worry about my toddler&apos;s hitting?</dt>
                <dd className="mt-2">
                  Talk to your pediatrician if aggression is frequent and intense beyond age 3 or 4,
                  causes regular injury, does not improve with consistent strategies, or comes with
                  other concerns like speech delay, loss of skills, or extreme difficulty with
                  everyday transitions.
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
              <a href="/articles/toddler-regression" className="text-primary hover:underline">
                Toddler Regression
              </a>
              <span className="text-muted-foreground">&bull;</span>
              <a href="/articles/toddler-screen-time" className="text-primary hover:underline">
                Toddler Screen Time
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
