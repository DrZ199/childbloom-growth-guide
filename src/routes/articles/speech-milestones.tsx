import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

const ARTICLE_URL = "https://childbloom.site/articles/speech-milestones";
const OG_IMAGE_URL = "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=1200&q=80";

export const Route = createFileRoute("/articles/speech-milestones")({
  head: () => ({
    meta: [
      { title: "Speech Milestones 12-24 Months | ChildBloom" },
      {
        name: "description",
        content: "Track your toddler's speech milestones and learn when to seek support.",
      },
      { property: "og:title", content: "Speech Milestones 12-24 Months | ChildBloom" },
      {
        property: "og:description",
        content: "Track your toddler's speech milestones and learn when to seek support.",
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
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://childbloom.site" },
            { "@type": "ListItem", position: 2, name: "Articles", item: "https://childbloom.site/articles" },
            { "@type": "ListItem", position: 3, name: "Speech Milestones", item: "https://childbloom.site/articles/speech-milestones" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Speech Milestones from 12 to 24 Months (and When to Ask for Help)",
          description: "Track your toddler's speech milestones and learn when to seek support.",
          image: OG_IMAGE_URL,
          datePublished: "2026-05-18T00:00:00+00:00",
          dateModified: "2026-05-18T00:00:00+00:00",
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
  component: SpeechMilestonesArticle,
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
          <a href="/categories" className="hover:text-foreground">Development</a>
        </li>
        <ChevronRight className="h-4 w-4" />
        <li className="font-medium text-foreground" aria-current="page">
          Speech Milestones
        </li>
      </ol>
    </nav>
  );
}

function SpeechMilestonesArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Breadcrumbs />
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Development
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Speech Milestones from 12 to 24 Months (and When to Ask for Help)
            </h1>
            <p className="text-sm text-muted-foreground">
              7 min read • Published May 18, 2026 • <span className="text-foreground">Last Updated May 18, 2026</span>
            </p>
          </div>
          
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-muted">
            <img 
              src={OG_IMAGE_URL} 
              alt="Toddler reading a picture book with a parent" 
              width={1200} 
              height={675} 
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="space-y-6 text-sm leading-7 text-muted-foreground">
            <p>
              Every toddler grows language differently. These milestones show what is typical at
              each stage.
            </p>
            <h2 className="text-2xl font-semibold text-foreground">Typical speech progress</h2>
            <ul className="list-disc space-y-3 pl-6 text-sm text-muted-foreground">
              <li>12 months: says 1–3 words and responds to simple requests</li>
              <li>18 months: uses 5–20 words and starts combining words</li>
              <li>24 months: speaks in short phrases and follows two-step directions</li>
            </ul>
            <h2 className="text-2xl font-semibold text-foreground">Language-building habits</h2>
            <p>
              Talk through daily routines, repeat words clearly, and read books together every day
              to give your toddler the strongest start.
            </p>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}
