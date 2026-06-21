import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

const ARTICLE_URL = "https://childbloom.site/articles/newborn-sleep";
const OG_IMAGE_URL = "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=1200&q=80";

export const Route = createFileRoute("/articles/newborn-sleep")({
  head: () => ({
    meta: [
      { title: "Newborn Sleep Guide | ChildBloom" },
      {
        name: "description",
        content: "A calm, evidence-based newborn sleep guide for the first 12 weeks.",
      },
      { property: "og:title", content: "Newborn Sleep Guide | ChildBloom" },
      {
        property: "og:description",
        content: "A calm, evidence-based newborn sleep guide for the first 12 weeks.",
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
            { "@type": "ListItem", position: 3, name: "Newborn Sleep Guide", item: "https://childbloom.site/articles/newborn-sleep" },
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Newborn Sleep: A Calm, Evidence-Based Guide for the First 12 Weeks",
          description: "A calm, evidence-based newborn sleep guide for the first 12 weeks.",
          image: OG_IMAGE_URL,
          datePublished: "2026-06-01T00:00:00+00:00",
          dateModified: "2026-06-01T00:00:00+00:00",
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
  component: NewbornSleepArticle,
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
          <a href="/categories" className="hover:text-foreground">Newborn Care</a>
        </li>
        <ChevronRight className="h-4 w-4" />
        <li className="font-medium text-foreground" aria-current="page">
          Newborn Sleep Guide
        </li>
      </ol>
    </nav>
  );
}

function NewbornSleepArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Breadcrumbs />
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Newborn Care
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Newborn Sleep: A Calm, Evidence-Based Guide for the First 12 Weeks
            </h1>
            <p className="text-sm text-muted-foreground">
              8 min read • Published June 1, 2026 • <span className="text-foreground">Last Updated June 1, 2026</span>
            </p>
          </div>
          
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-muted">
            <img 
              src={OG_IMAGE_URL} 
              alt="Peaceful newborn sleeping safely in a crib" 
              width={1200} 
              height={675} 
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>

          <div className="space-y-6 text-sm leading-7 text-muted-foreground">
            <p>
              Newborn sleep is unpredictable, but a simple routine and safe sleep setup can help
              your family rest better.
            </p>
            <h2 className="text-2xl font-semibold text-foreground">Safe sleep basics</h2>
            <p>
              Room-sharing is recommended, but never bed-sharing. Place baby on their back on a
              firm, uncluttered surface and keep the room at a comfortable temperature.
            </p>
            <h2 className="text-2xl font-semibold text-foreground">A gentle rhythm</h2>
            <p>
              Follow sleepy cues instead of a strict clock — yawns, rubbing eyes, and fussiness are
              early signs your baby is ready for rest.
            </p>
            <ul className="list-disc space-y-3 pl-6 text-sm text-muted-foreground">
              <li>Use a calm bedtime routine with quiet, low light.</li>
              <li>Offer feeds before long naps to keep baby comfortable.</li>
              <li>Expect 14–17 hours of sleep spread across days and nights in early weeks.</li>
            </ul>
            <h2 className="text-2xl font-semibold text-foreground">When to ask for help</h2>
            <p>
              If your baby is not gaining weight, is unusually irritable, or seems to struggle with
              breathing, contact your pediatric provider promptly.
            </p>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}
