import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/postpartum-recovery" as const)({
  head: () => ({
    meta: [
      { title: "Postpartum Recovery Timeline: What to Expect Week by Week | ChildBloom" },
      {
        name: "description",
        content: "Complete postpartum recovery timeline: what to expect in the first 6 weeks and beyond. Physical healing, emotional changes, warning signs, and self-care tips for new moms.",
      },
      { property: "og:title", content: "Postpartum Recovery Timeline: What to Expect Week by Week | ChildBloom" },
      { property: "og:description", content: "Complete postpartum recovery timeline: what to expect in the first 6 weeks and beyond. Physical healing, emotional changes, warning signs, and self-care tips." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/postpartum-recovery" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Postpartum Recovery Timeline: What to Expect Week by Week",
          description: "Complete postpartum recovery timeline: what to expect in the first 6 weeks and beyond. Physical healing, emotional changes, warning signs, and self-care tips.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/postpartum-recovery" },
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
            { "@type": "ListItem", position: 3, name: "Postpartum Recovery Timeline", item: "https://childbloom.site/articles/postpartum-recovery" },
          ],
        }),
      },
    ],
  }),
  component: PostpartumRecoveryArticle,
});

function PostpartumRecoveryArticle() {
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
              Postpartum Recovery Timeline: What to Expect Week by Week
            </h1>
            <p className="text-sm text-muted-foreground">18 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#first-week" className="text-primary hover:underline">First Week After Birth</a></li>
              <li><a href="#weeks-2-4" className="text-primary hover:underline">Weeks 2–4</a></li>
              <li><a href="#weeks-5-8" className="text-primary hover:underline">Weeks 5–8</a></li>
              <li><a href="#warning-signs" className="text-primary hover:underline">Warning Signs to Watch For</a></li>
              <li><a href="#emotional-health" className="text-primary hover:underline">Emotional &amp; Mental Health</a></li>
              <li><a href="#self-care" className="text-primary hover:underline">Self-Care Tips</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="first-week" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">First Week After Birth</h2>
            <p>
              The first week is often the most physically challenging. Your body is healing from labor and delivery 
              while also adjusting to major hormonal shifts.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Bleeding (lochia):</strong> Heavy bleeding similar to a heavy period, gradually lightening</li>
              <li><strong>Afterpains:</strong> Cramping as the uterus contracts (stronger with second+ babies)</li>
              <li><strong>Perineal discomfort:</strong> Soreness, stitches, or swelling if you had a vaginal birth</li>
              <li><strong>Breast changes:</strong> Engorgement around days 3–5 as milk comes in</li>
              <li><strong>Fatigue:</strong> Extreme tiredness from labor, sleep deprivation, and recovery</li>
            </ul>
          </section>

          <section id="weeks-2-4" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Weeks 2–4</h2>
            <p>
              Most women start to feel more like themselves physically, though full recovery takes longer.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Bleeding continues but should be lighter (like a period by week 3–4)</li>
              <li>Stitches or tears are healing</li>
              <li>Energy levels gradually improve</li>
              <li>Postpartum checkup usually scheduled around 6 weeks</li>
              <li>Many women experience the “baby blues” (mild mood swings) in the first 2 weeks</li>
            </ul>
          </section>

          <section id="weeks-5-8" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Weeks 5–8</h2>
            <p>
              By 6–8 weeks, most physical healing from a vaginal birth is complete. C-section recovery takes longer.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Most women are cleared for exercise and sexual activity at the 6-week checkup</li>
              <li>Bleeding should have stopped or be very light</li>
              <li>Abdominal muscles and pelvic floor are still recovering</li>
              <li>Hair loss (telogen effluvium) often peaks around 3–4 months postpartum</li>
            </ul>
          </section>

          <section id="warning-signs" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Warning Signs to Watch For</h2>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-semibold text-red-800 mb-2">Call Your Doctor Immediately If You Experience:</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-red-700">
                <li>Fever over 100.4°F (38°C)</li>
                <li>Heavy bleeding that soaks a pad in an hour</li>
                <li>Severe abdominal pain</li>
                <li>Foul-smelling discharge</li>
                <li>Redness, swelling, or pus at a C-section incision</li>
                <li>Chest pain or difficulty breathing</li>
                <li>Severe headache or vision changes</li>
              </ul>
            </div>
          </section>

          <section id="emotional-health" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Emotional &amp; Mental Health</h2>
            <p>
              Up to 1 in 7 women experience postpartum depression or anxiety. It’s important to know the difference 
              between normal “baby blues” and more serious conditions.
            </p>
            <p>
              Related: <a href="/articles/postpartum-mental-health" className="text-primary hover:underline">Postpartum Mental Health Guide</a>
            </p>
          </section>

          <section id="self-care" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Self-Care Tips</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Accept help with meals, housework, and baby care</li>
              <li>Rest when the baby rests (easier said than done)</li>
              <li>Stay hydrated and eat nutrient-rich foods</li>
              <li>Take short walks when cleared by your doctor</li>
              <li>Connect with other new moms</li>
              <li>Be patient with your body — it took 9 months to grow a baby</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">How long does postpartum bleeding last?</dt>
                <dd className="mt-2">Lochia typically lasts 4–6 weeks. It starts heavy and red, then becomes pink, then yellow-white. Contact your doctor if bleeding increases after it has lightened.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">When can I start exercising again?</dt>
                <dd className="mt-2">Most women are cleared for light exercise at 6 weeks. Always get clearance from your healthcare provider, especially after a C-section or complicated delivery.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Is it normal to feel sad after having a baby?</dt>
                <dd className="mt-2">The “baby blues” (mild sadness, irritability, anxiety) are very common in the first 2 weeks. If symptoms are severe or last longer than 2 weeks, talk to your doctor about postpartum depression.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/parenting-survival-guide" className="text-primary hover:underline">Parenting Survival Guide</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/best-breast-pumps" className="text-primary hover:underline">Best Breast Pumps 2026</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/postpartum-mental-health" className="text-primary hover:underline">Postpartum Mental Health</a>
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
