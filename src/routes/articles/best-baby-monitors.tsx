import { createFileRoute } from "@tanstack/react-router";
import { ChevronRight, Home } from "lucide-react";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { AffiliateDisclosure } from "@/components/monetization/affiliate-disclosure";

const ARTICLE_URL = "https://childbloom.site/articles/best-baby-monitors";
const OG_IMAGE_URL = "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?auto=format&fit=crop&w=1200&q=80";

export const Route = createFileRoute("/articles/best-baby-monitors")({
  head: () => ({
    meta: [
      { title: "Best Baby Monitors 2026 | ChildBloom" },
      {
        name: "description",
        content: "Trusted baby monitor reviews with pros, cons, and buying advice for nursery safety.",
      },
      { property: "og:title", content: "Best Baby Monitors 2026 | ChildBloom" },
      {
        property: "og:description",
        content: "Trusted baby monitor reviews with pros, cons, and buying advice for nursery safety.",
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
          headline: "The Best Baby Monitors of 2026",
          description: "Trusted baby monitor reviews with pros, cons, and buying advice for nursery safety.",
          image: OG_IMAGE_URL,
          datePublished: "2026-05-10T00:00:00+00:00",
          dateModified: "2026-05-10T00:00:00+00:00",
          author: { 
            "@type": "Person", 
            "name": "ChildBloom Editorial Team",
            "url": "https://childbloom.site/authors/editorial-team"
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
  component: BabyMonitorsArticle,
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
          <a href="/categories" className="hover:text-foreground">Product Reviews</a>
        </li>
        <ChevronRight className="h-4 w-4" />
        <li className="font-medium text-foreground" aria-current="page">
          Best Baby Monitors
        </li>
      </ol>
    </nav>
  );
}

function BabyMonitorsArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <Breadcrumbs />
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Product Reviews
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              The Best Baby Monitors of 2026
            </h1>
            <p className="text-sm text-muted-foreground">
              9 min read • Published May 10, 2026 • <span className="text-foreground">Last Updated May 10, 2026</span>
            </p>
          </div>
          
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-muted">
            <img 
              src={OG_IMAGE_URL} 
              alt="Modern baby monitor displaying clear video of a sleeping infant" 
              width={1200} 
              height={675} 
              className="h-full w-full object-cover"
              loading="eager"
              decoding="async"
            />
          </div>

          <AffiliateDisclosure className="mb-6" />

          <div className="space-y-6 text-sm leading-7 text-muted-foreground">
            <p>
              We tested top baby monitors for picture quality, alerts, and reliability so parents
              can choose with confidence.
            </p>
            <h2 className="text-2xl font-semibold text-foreground">What to look for</h2>
            <p>
              Focus on secure connectivity, clear night vision, and reliable audio or motion alerts
              for the nursery.
            </p>
            <div className="rounded-3xl border border-border bg-muted p-6">
              <h3 className="text-lg font-semibold text-foreground">Featured review</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                The best option blends strong video performance with easy setup and an app parents
                can trust.
              </p>
            </div>
            <h2 className="text-2xl font-semibold text-foreground">Pros and cons</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold text-foreground">Pros</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Clear video quality</li>
                  <li>Wi-Fi connectivity for remote monitoring</li>
                  <li>Temperature alerts to keep the room comfortable</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground">Cons</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Higher price than basic models</li>
                  <li>Requires a stable home network</li>
                  <li>Less portable than simple audio-only monitors</li>
                </ul>
              </div>
            </div>
            <a
              href="https://www.amazon.com/s?k=baby+monitor"
              target="_blank"
              rel="sponsored nofollow noopener"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90"
            >
              View recommended baby monitors
            </a>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}
