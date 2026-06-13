import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

const ARTICLE_URL = "https://childbloom.site/articles/starting-solids";
const OG_IMAGE_URL = "https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&w=1200&q=80";

export const Route = createFileRoute("/articles/starting-solids")({
  head: () => ({
    meta: [
      { title: "Starting Solids at 6 Months | ChildBloom" },
      {
        name: "description",
        content: "A complete first-foods plan for starting solids at 6 months with iron-rich and allergen-safe options.",
      },
      { property: "og:title", content: "Starting Solids at 6 Months | ChildBloom" },
      {
        property: "og:description",
        content: "A complete first-foods plan for starting solids at 6 months with iron-rich and allergen-safe options.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: OG_IMAGE_URL },
      { property: "og:url", content: ARTICLE_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE_URL },
    ],
    links: [{ rel: "canonical", href: ARTICLE_URL }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Starting Solids at 6 Months: The Complete First-Foods Plan",
          description: "A complete first-foods plan for starting solids at 6 months with iron-rich and allergen-safe options.",
          image: OG_IMAGE_URL,
          datePublished: "2026-05-25T00:00:00+00:00",
          dateModified: "2026-05-25T00:00:00+00:00",
          author: { 
            "@type": "Person", 
            "name": "Dr. Emma Lane",
            "url": "https://childbloom.site/authors/dr-emma-lane"
          },
          publisher: { 
            "@type": "Organization", 
            "name": "ChildBloom",
            "logo": { "@type": "ImageObject", "url": "https://childbloom.site/logo.png" }
          },
          mainEntityOfPage: { "@type": "WebPage", "@id": ARTICLE_URL },
        }),
      },
    ],
  }),
  component: StartingSolidsArticle,
});

function Breadcrumbs() {
  return (
    <nav aria-label="Breadcrumb" className="mb-6">
      <ol className="flex items-center gap-2 text-sm text-muted-foreground">
        <li>
          <a href="/" className="flex items-center gap-1 hover:text-foreground">
            <Home className="h-4 w-4" />
            <span className="sr-only">Home</span>
          </a>
        </li>
        <ChevronRight className="h-4 w-4" />
        <li>
          <a href="/categories" className="hover:text-foreground">Nutrition</a>
        </li>
        <ChevronRight className="h-4 w-4" />
        <li className="font-medium text-foreground" aria-current="page">
          Starting Solids
        </li>
      </ol>
    </nav>
  );
}

function StartingSolidsArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Breadcrumbs />
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Nutrition
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Starting Solids at 6 Months: The Complete First-Foods Plan
            </h1>
            <p className="text-sm text-muted-foreground">
              11 min read • Published May 25, 2026 • <span className="text-foreground">Last Updated May 25, 2026</span>
            </p>
          </div>
          
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-muted">
            <img 
              src={OG_IMAGE_URL} 
              alt="Baby eating pureed food from a spoon" 
              width={1200} 
              height={675} 
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="space-y-6 text-sm leading-7 text-muted-foreground">
            <p>
              Introducing solids is an exciting step. Choose iron-rich, easy-to-digest foods and
              keep the experience relaxed.
            </p>
            <h2 className="text-2xl font-semibold text-foreground">Top first-food picks</h2>
            <ol className="list-decimal space-y-3 pl-6 text-sm text-muted-foreground">
              <li>Pureed sweet potato</li>
              <li>Mashed avocado</li>
              <li>Iron-fortified baby cereal</li>
            </ol>
            <h2 className="text-2xl font-semibold text-foreground">Introducing allergens safely</h2>
            <p>
              Offer soft peanut spread or scrambled egg yolk within the first weeks after solids
              start, unless your baby has a known risk for severe allergies.
            </p>
            <h2 className="text-2xl font-semibold text-foreground">A balanced schedule</h2>
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
