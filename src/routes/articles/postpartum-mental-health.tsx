import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/postpartum-mental-health")({
  head: () => ({
    meta: [
      { title: "Postpartum Mental Health: Recognizing PPD, PPA, and Getting Help | ChildBloom" },
      {
        name: "description",
        content: "Complete guide to postpartum mental health. How to recognize postpartum depression (PPD), postpartum anxiety (PPA), baby blues vs depression, and where to get help.",
      },
      { property: "og:title", content: "Postpartum Mental Health: Recognizing PPD, PPA, and Getting Help | ChildBloom" },
      { property: "og:description", content: "Complete guide to postpartum mental health. How to recognize postpartum depression (PPD), postpartum anxiety (PPA), and where to get help." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://childbloom.site/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://childbloom.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/articles/postpartum-mental-health" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Postpartum Mental Health: Recognizing PPD, PPA, and Getting Help",
          description: "Complete guide to postpartum mental health. How to recognize postpartum depression (PPD), postpartum anxiety (PPA), and where to get help.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/postpartum-mental-health" },
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
            { "@type": "ListItem", position: 3, name: "Postpartum Mental Health", item: "https://childbloom.site/articles/postpartum-mental-health" },
          ],
        }),
      },
    ],
  }),
  component: PostpartumMentalHealthArticle,
});

function PostpartumMentalHealthArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Parenting • Mental Health
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Postpartum Mental Health: Recognizing PPD, PPA, and Getting Help
            </h1>
            <p className="text-sm text-muted-foreground">19 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#baby-blues-vs-ppd" className="text-primary hover:underline">Baby Blues vs Postpartum Depression</a></li>
              <li><a href="#signs-of-ppd" className="text-primary hover:underline">Signs of Postpartum Depression (PPD)</a></li>
              <li><a href="#signs-of-ppa" className="text-primary hover:underline">Signs of Postpartum Anxiety (PPA)</a></li>
              <li><a href="#risk-factors" className="text-primary hover:underline">Risk Factors</a></li>
              <li><a href="#getting-help" className="text-primary hover:underline">How to Get Help</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="baby-blues-vs-ppd" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Baby Blues vs Postpartum Depression</h2>
            <p>
              Up to 80% of new mothers experience the “baby blues” — mild mood swings, tearfulness, and anxiety that usually resolve within 2 weeks. 
              Postpartum depression is more severe and lasts longer.
            </p>
          </section>

          <section id="signs-of-ppd" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Signs of Postpartum Depression (PPD)</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Persistent sadness, hopelessness, or emptiness</li>
              <li>Loss of interest in activities you used to enjoy</li>
              <li>Difficulty bonding with your baby</li>
              <li>Changes in appetite or sleep (beyond normal newborn disruption)</li>
              <li>Overwhelming fatigue or loss of energy</li>
              <li>Feelings of worthlessness or guilt</li>
              <li>Thoughts of harming yourself or your baby (seek help immediately)</li>
            </ul>
          </section>

          <section id="signs-of-ppa" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Signs of Postpartum Anxiety (PPA)</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Constant worry or racing thoughts</li>
              <li>Feeling on edge or unable to relax</li>
              <li>Physical symptoms (rapid heartbeat, shortness of breath, dizziness)</li>
              <li>Intrusive thoughts about harm coming to your baby</li>
              <li>Difficulty sleeping even when baby is sleeping</li>
            </ul>
          </section>

          <section id="risk-factors" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Risk Factors</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>History of depression or anxiety</li>
              <li>Stressful life events (financial stress, relationship issues)</li>
              <li>Lack of support system</li>
              <li>Difficult pregnancy or birth experience</li>
              <li>Breastfeeding challenges</li>
              <li>Sleep deprivation</li>
            </ul>
          </section>

          <section id="getting-help" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">How to Get Help</h2>
            <ol className="list-decimal space-y-3 pl-6">
              <li>Talk to your OB-GYN or pediatrician</li>
              <li>Contact a postpartum support hotline (Postpartum Support International)</li>
              <li>Consider therapy (especially CBT or interpersonal therapy)</li>
              <li>Ask about medication options if needed</li>
              <li>Join a support group for new mothers</li>
            </ol>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Will postpartum depression go away on its own?</dt>
                <dd className="mt-2">Some cases of mild PPD improve with time and support, but many women need professional treatment. It’s important not to wait it out if symptoms are affecting your daily life.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Can I take antidepressants while breastfeeding?</dt>
                <dd className="mt-2">Many antidepressants are considered compatible with breastfeeding. Discuss options with your doctor — the benefits of treating PPD often outweigh the risks.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/postpartum-recovery" className="text-primary hover:underline">Postpartum Recovery Timeline</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/parenting-survival-guide" className="text-primary hover:underline">Parenting Survival Guide</a>
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
