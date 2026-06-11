import { createFileRoute } from "@tanstack/react-router";
import { siteDescription } from "@/lib/site-data";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/starting-solids")({
  head: () => ({
    meta: [
      { title: "Starting Solids at 6 Months | ChildBloom" },
      {
        name: "description",
        content:
          "A complete first-foods plan for starting solids at 6 months with iron-rich and allergen-safe options.",
      },
      { property: "og:title", content: "Starting Solids at 6 Months | ChildBloom" },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/starting-solids" }],
  }),
  component: StartingSolidsArticle,
});

function StartingSolidsArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Nutrition
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Starting Solids at 6 Months: The Complete First-Foods Plan
            </h1>
            <p className="text-sm text-muted-foreground">11 min read • Published May 25, 2026</p>
          </div>
          <div className="space-y-6 text-sm leading-7 text-muted-foreground">
            <p>
              Introducing solids is an exciting step. Choose iron-rich, easy-to-digest foods and
              keep the experience relaxed.
            </p>
            <h2 className="text-2xl font-semibold">Top first-food picks</h2>
            <ol className="list-decimal space-y-3 pl-6 text-sm text-muted-foreground">
              <li>Pureed sweet potato</li>
              <li>Mashed avocado</li>
              <li>Iron-fortified baby cereal</li>
            </ol>
            <h2 className="text-2xl font-semibold">Introducing allergens safely</h2>
            <p>
              Offer soft peanut spread or scrambled egg yolk within the first weeks after solids
              start, unless your baby has a known risk for severe allergies.
            </p>
            <h2 className="text-2xl font-semibold">A balanced schedule</h2>
            <p>
              Try 1-2 tablespoons of solids after milk feeds at first, then gradually build to more
              texture and variety as your baby shows interest.
            </p>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}
