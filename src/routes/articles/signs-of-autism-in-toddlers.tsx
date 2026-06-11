import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/signs-of-autism-in-toddlers" as const)({
  head: () => ({
    meta: [
      { title: "Signs of Autism in Toddlers: Early Red Flags Parents Should Know | ChildBloom" },
      {
        name: "description",
        content: "Early signs of autism in toddlers (12–36 months). Social, communication, and behavioral red flags, when to seek evaluation, and what to do next. Evidence-based guidance.",
      },
      { property: "og:title", content: "Signs of Autism in Toddlers: Early Red Flags Parents Should Know | ChildBloom" },
      { property: "og:description", content: "Early signs of autism in toddlers (12–36 months). Social, communication, and behavioral red flags, when to seek evaluation, and what to do next." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/signs-of-autism-in-toddlers" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Signs of Autism in Toddlers: Early Red Flags Parents Should Know",
          description: "Early signs of autism in toddlers (12–36 months). Social, communication, and behavioral red flags, when to seek evaluation, and what to do next.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/signs-of-autism-in-toddlers" },
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
            { "@type": "ListItem", position: 3, name: "Signs of Autism in Toddlers", item: "https://childbloom.site/articles/signs-of-autism-in-toddlers" },
          ],
        }),
      },
    ],
  }),
  component: SignsOfAutismArticle,
});

function SignsOfAutismArticle() {
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
              Signs of Autism in Toddlers: Early Red Flags Parents Should Know
            </h1>
            <p className="text-sm text-muted-foreground">18 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#what-is-autism" className="text-primary hover:underline">What Is Autism Spectrum Disorder?</a></li>
              <li><a href="#social-signs" className="text-primary hover:underline">Social &amp; Communication Red Flags</a></li>
              <li><a href="#behavioral-signs" className="text-primary hover:underline">Behavioral &amp; Sensory Signs</a></li>
              <li><a href="#when-to-act" className="text-primary hover:underline">When to Seek an Evaluation</a></li>
              <li><a href="#next-steps" className="text-primary hover:underline">What to Do If You’re Concerned</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="what-is-autism" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">What Is Autism Spectrum Disorder?</h2>
            <p>
              Autism is a neurodevelopmental condition that affects how a person communicates, interacts socially, 
              and experiences the world. Signs can appear as early as 12–18 months, though many children are not 
              diagnosed until later.
            </p>
            <p>
              Early identification and intervention lead to significantly better outcomes. If you have concerns, 
              trust your instincts and speak with your pediatrician.
            </p>
          </section>

          <section id="social-signs" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Social &amp; Communication Red Flags</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Limited or no eye contact by 12 months</li>
              <li>Not responding to their name by 12 months</li>
              <li>No pointing, waving, or showing objects to share interest by 12–15 months</li>
              <li>No single words by 16 months</li>
              <li>No two-word phrases by 24 months</li>
              <li>Loss of previously acquired language or social skills</li>
              <li>Prefers to play alone and doesn’t seek comfort from parents when upset</li>
            </ul>
          </section>

          <section id="behavioral-signs" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Behavioral &amp; Sensory Signs</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Repetitive movements (hand-flapping, rocking, spinning)</li>
              <li>Intense focus on specific objects or topics</li>
              <li>Strong preference for routines and distress when routines change</li>
              <li>Unusual reactions to sounds, textures, lights, or smells</li>
              <li>Plays with toys in unusual ways (lining up, spinning wheels repeatedly)</li>
              <li>Walks on tiptoes frequently</li>
            </ul>
          </section>

          <section id="when-to-act" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">When to Seek an Evaluation</h2>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-semibold text-red-800 mb-2">Act Early If You Notice:</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-red-700">
                <li>No babbling, pointing, or meaningful gestures by 12 months</li>
                <li>No single words by 16 months</li>
                <li>No two-word phrases by 24 months</li>
                <li>Any loss of language or social skills at any age</li>
                <li>Limited eye contact or social engagement</li>
              </ul>
            </div>
          </section>

          <section id="next-steps" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">What to Do If You’re Concerned</h2>
            <ol className="list-decimal space-y-3 pl-6">
              <li>Talk to your pediatrician at the next well visit (or sooner)</li>
              <li>Request a referral for developmental screening and early intervention evaluation</li>
              <li>Contact your state’s early intervention program (free evaluation for children under 3)</li>
              <li>Consider a hearing test to rule out hearing issues</li>
              <li>Document your observations (videos can be very helpful)</li>
            </ol>
            <p>
              Related: <a href="/articles/speech-development-guide" className="text-primary hover:underline">Speech Development Guide</a> and 
              <a href="/articles/early-intervention" className="text-primary hover:underline"> Early Intervention Services</a>
            </p>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Can my child have autism and still make eye contact?</dt>
                <dd className="mt-2">Yes. Some autistic children make eye contact, especially with people they know well. Lack of consistent eye contact is just one possible sign.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Is it possible my child will “grow out of it”?</dt>
                <dd className="mt-2">Autism is a lifelong neurodevelopmental condition. However, with early intervention, many children make significant progress in communication, social skills, and independence.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/speech-development-guide" className="text-primary hover:underline">Speech Development Guide</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/child-development-milestones" className="text-primary hover:underline">Child Development Milestones</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/speech-delay-toddler" className="text-primary hover:underline">Speech Delay in Toddlers</a>
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
