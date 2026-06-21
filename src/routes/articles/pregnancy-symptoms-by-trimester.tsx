import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/pregnancy-symptoms-by-trimester")({
  head: () => ({
    meta: [
      { title: "Pregnancy Symptoms by Trimester: What’s Normal and When to Worry | ChildBloom" },
      {
        name: "description",
        content: "Complete guide to pregnancy symptoms by trimester. First, second, and third trimester changes, common discomforts, and warning signs that need medical attention.",
      },
      { property: "og:title", content: "Pregnancy Symptoms by Trimester: What’s Normal and When to Worry | ChildBloom" },
      { property: "og:description", content: "Complete guide to pregnancy symptoms by trimester. First, second, and third trimester changes, common discomforts, and warning signs." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://childbloom.site/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://childbloom.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/articles/pregnancy-symptoms-by-trimester" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Pregnancy Symptoms by Trimester: What’s Normal and When to Worry",
          description: "Complete guide to pregnancy symptoms by trimester. First, second, and third trimester changes, common discomforts, and warning signs.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/pregnancy-symptoms-by-trimester" },
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
            { "@type": "ListItem", position: 3, name: "Pregnancy Symptoms by Trimester", item: "https://childbloom.site/articles/pregnancy-symptoms-by-trimester" },
          ],
        }),
      },
    ],
  }),
  component: PregnancySymptomsByTrimesterArticle,
});

function PregnancySymptomsByTrimesterArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Parenting
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Pregnancy Symptoms by Trimester: What’s Normal and When to Worry
            </h1>
            <p className="text-sm text-muted-foreground">17 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#first-trimester" className="text-primary hover:underline">First Trimester Symptoms</a></li>
              <li><a href="#second-trimester" className="text-primary hover:underline">Second Trimester Symptoms</a></li>
              <li><a href="#third-trimester" className="text-primary hover:underline">Third Trimester Symptoms</a></li>
              <li><a href="#warning-signs" className="text-primary hover:underline">Warning Signs to Watch For</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="first-trimester" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">First Trimester Symptoms (Weeks 1–12)</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Nausea and vomiting (morning sickness)</li>
              <li>Fatigue and exhaustion</li>
              <li>Breast tenderness and swelling</li>
              <li>Frequent urination</li>
              <li>Food aversions and cravings</li>
              <li>Mood swings</li>
              <li>Light spotting (implantation bleeding)</li>
            </ul>
          </section>

          <section id="second-trimester" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Second Trimester Symptoms (Weeks 13–26)</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Increased energy (often called the “honeymoon phase”)</li>
              <li>Visible baby bump</li>
              <li>Fetal movement (quickening)</li>
              <li>Heartburn and indigestion</li>
              <li>Back pain</li>
              <li>Leg cramps</li>
              <li>Nasal congestion</li>
            </ul>
          </section>

          <section id="third-trimester" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Third Trimester Symptoms (Weeks 27–40)</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Shortness of breath</li>
              <li>Difficulty sleeping</li>
              <li>Swelling in feet and ankles</li>
              <li>Braxton Hicks contractions</li>
              <li>Frequent urination</li>
              <li>Pelvic pressure</li>
              <li>Nesting instinct</li>
            </ul>
          </section>

          <section id="warning-signs" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Warning Signs to Watch For</h2>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-semibold text-red-800 mb-2">Call Your Doctor Immediately If You Experience:</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-red-700">
                <li>Severe abdominal pain</li>
                <li>Heavy bleeding or passing clots</li>
                <li>Sudden swelling in face or hands</li>
                <li>Severe headache or vision changes</li>
                <li>Decreased fetal movement</li>
                <li>Signs of preterm labor</li>
              </ul>
            </div>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Is it normal to have no symptoms in the first trimester?</dt>
                <dd className="mt-2">Some women experience very mild symptoms. Every pregnancy is different. However, if you have concerns, always check with your doctor.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">When should I expect to feel the baby move?</dt>
                <dd className="mt-2">Most first-time moms feel movement between 18–22 weeks. If you haven’t felt movement by 24 weeks, contact your provider.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/birth-plan-template" className="text-primary hover:underline">Birth Plan Template</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/postpartum-recovery" className="text-primary hover:underline">Postpartum Recovery Timeline</a>
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
