import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/toddler-activities-at-home")({
  head: () => ({
    meta: [
      { title: "Toddler Activities at Home: 40 Screen-Free Ideas by Age | ChildBloom" },
      {
        name: "description",
        content: "40 fun, screen-free toddler activities for ages 1–3. Easy indoor and outdoor ideas using household items to support development and reduce screen time.",
      },
      { property: "og:title", content: "Toddler Activities at Home: 40 Screen-Free Ideas by Age | ChildBloom" },
      { property: "og:description", content: "40 fun, screen-free toddler activities for ages 1–3. Easy indoor and outdoor ideas using household items." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://childbloom.site/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://childbloom.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/articles/toddler-activities-at-home" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Toddler Activities at Home: 40 Screen-Free Ideas by Age",
          description: "40 fun, screen-free toddler activities for ages 1–3. Easy indoor and outdoor ideas using household items.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/toddler-activities-at-home" },
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
            { "@type": "ListItem", position: 3, name: "Toddler Activities at Home", item: "https://childbloom.site/articles/toddler-activities-at-home" },
          ],
        }),
      },
    ],
  }),
  component: ToddlerActivitiesAtHomeArticle,
});

function ToddlerActivitiesAtHomeArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Parenting • Development
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Toddler Activities at Home: 40 Screen-Free Ideas by Age
            </h1>
            <p className="text-sm text-muted-foreground">16 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#why-screen-free" className="text-primary hover:underline">Why Screen-Free Time Matters</a></li>
              <li><a href="#ages-12-18-months" className="text-primary hover:underline">Activities for 12–18 Months</a></li>
              <li><a href="#ages-18-24-months" className="text-primary hover:underline">Activities for 18–24 Months</a></li>
              <li><a href="#ages-2-3-years" className="text-primary hover:underline">Activities for 2–3 Years</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="why-screen-free" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Why Screen-Free Time Matters</h2>
            <p>
              Excessive screen time in early childhood is linked to language delays, attention issues, and reduced physical activity. 
              Hands-on play builds critical skills in motor development, problem-solving, creativity, and social-emotional growth.
            </p>
          </section>

          <section id="ages-12-18-months" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Activities for 12–18 Months</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Stacking cups or blocks</li>
              <li>Simple shape sorters</li>
              <li>Playing with water in the sink (supervised)</li>
              <li>Reading board books together</li>
              <li>Simple ball rolling games</li>
              <li>Exploring textured items (soft fabrics, brushes)</li>
              <li>Singing songs with hand motions</li>
              <li>Pushing toy cars or trucks</li>
            </ul>
          </section>

          <section id="ages-18-24-months" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Activities for 18–24 Months</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Simple puzzles (2–4 pieces)</li>
              <li>Playing with playdough</li>
              <li>Pouring and scooping activities</li>
              <li>Imaginative play with dolls or toy kitchens</li>
              <li>Coloring with chunky crayons</li>
              <li>Building with large blocks</li>
              <li>Simple hide-and-seek games</li>
              <li>Dancing to music</li>
            </ul>
          </section>

          <section id="ages-2-3-years" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Activities for 2–3 Years</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Arts and crafts (finger painting, sticker play)</li>
              <li>Simple board games</li>
              <li>Outdoor scavenger hunts</li>
              <li>Building forts with blankets</li>
              <li>Pretend play (grocery store, doctor)</li>
              <li>Sorting activities (colors, shapes, sizes)</li>
              <li>Simple science experiments (baking soda + vinegar)</li>
              <li>Reading longer picture books</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">How much screen time is okay for toddlers?</dt>
                <dd className="mt-2">The AAP recommends avoiding screens for children under 18–24 months (except video chatting). For ages 2–5, limit high-quality programming to 1 hour per day with adult involvement.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">What if my toddler gets bored easily?</dt>
                <dd className="mt-2">Rotate toys, follow your child’s lead, and keep activities short (10–15 minutes). Boredom can also spark creativity.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/toddler-nutrition-tips" className="text-primary hover:underline">Toddler Nutrition Tips</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/parenting-hacks" className="text-primary hover:underline">Parenting Hacks</a>
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
