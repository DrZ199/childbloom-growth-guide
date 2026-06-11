import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/early-intervention")({
  head: () => ({
    meta: [
      { title: "Early Intervention Services: What Parents Need to Know | ChildBloom" },
      {
        name: "description",
        content: "Complete guide to early intervention (EI) services. Who qualifies, how to get evaluated, what services are available, and how to advocate for your child.",
      },
      { property: "og:title", content: "Early Intervention Services: What Parents Need to Know | ChildBloom" },
      { property: "og:description", content: "Complete guide to early intervention (EI) services. Who qualifies, how to get evaluated, what services are available, and how to advocate for your child." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/early-intervention" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Early Intervention Services: What Parents Need to Know",
          description: "Complete guide to early intervention (EI) services. Who qualifies, how to get evaluated, what services are available, and how to advocate for your child.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/early-intervention" },
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
            { "@type": "ListItem", position: 3, name: "Early Intervention Services", item: "https://childbloom.site/articles/early-intervention" },
          ],
        }),
      },
    ],
  }),
  component: EarlyInterventionArticle,
});

function EarlyInterventionArticle() {
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
              Early Intervention Services: What Parents Need to Know
            </h1>
            <p className="text-sm text-muted-foreground">16 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#what-is-ei" className="text-primary hover:underline">What Is Early Intervention?</a></li>
              <li><a href="#who-qualifies" className="text-primary hover:underline">Who Qualifies for EI Services?</a></li>
              <li><a href="#how-to-start" className="text-primary hover:underline">How to Start the Process</a></li>
              <li><a href="#services-available" className="text-primary hover:underline">Services Typically Available</a></li>
              <li><a href="#advocacy" className="text-primary hover:underline">How to Advocate for Your Child</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="what-is-ei" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">What Is Early Intervention?</h2>
            <p>
              Early Intervention (EI) is a system of services designed to help infants and toddlers (birth to age 3) 
              who have developmental delays or disabilities. Services are provided at no or low cost in most states.
            </p>
          </section>

          <section id="who-qualifies" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Who Qualifies for EI Services?</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Children with diagnosed conditions (Down syndrome, cerebral palsy, autism, etc.)</li>
              <li>Children with developmental delays in speech, motor skills, cognition, or social-emotional development</li>
              <li>Children at risk due to medical conditions or environmental factors</li>
            </ul>
          </section>

          <section id="how-to-start" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">How to Start the Process</h2>
            <ol className="list-decimal space-y-3 pl-6">
              <li>Contact your state’s early intervention program (search “early intervention [your state]”)</li>
              <li>Request a free developmental evaluation</li>
              <li>Participate in the evaluation (usually done in your home)</li>
              <li>If eligible, work with the team to create an Individualized Family Service Plan (IFSP)</li>
            </ol>
          </section>

          <section id="services-available" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Services Typically Available</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Speech-language therapy</li>
              <li>Physical therapy</li>
              <li>Occupational therapy</li>
              <li>Developmental therapy / special instruction</li>
              <li>Behavioral support</li>
              <li>Family training and counseling</li>
            </ul>
          </section>

          <section id="advocacy" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">How to Advocate for Your Child</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Keep records of all evaluations and communications</li>
              <li>Ask questions and request explanations in plain language</li>
              <li>Bring a support person to meetings if needed</li>
              <li>Know your rights under IDEA (Individuals with Disabilities Education Act)</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Is early intervention free?</dt>
                <dd className="mt-2">Evaluations are free in all states. Services may be free or low-cost depending on your state and income. Many families pay little to nothing.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Will my child be labeled if we use EI services?</dt>
                <dd className="mt-2">Early intervention is designed to support development, not label children. Many children who receive EI services go on to need little or no special education later.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/signs-of-autism-in-toddlers" className="text-primary hover:underline">Signs of Autism in Toddlers</a>
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
