import { createFileRoute } from "@tanstack/react-router";
import { siteDescription } from "@/lib/site-data";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/best-baby-monitors")({
  head: () => ({
    meta: [
      { title: "Best Baby Monitors 2026 | ChildBloom" },
      {
        name: "description",
        content: "Trusted baby monitor reviews with pros, cons, and buying advice for nursery safety.",
      },
      { property: "og:title", content: "Best Baby Monitors 2026 | ChildBloom" },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/best-baby-monitors" }],
  }),
  component: BabyMonitorsArticle,
});

function BabyMonitorsArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Product Reviews
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              The Best Baby Monitors of 2026
            </h1>
            <p className="text-sm text-muted-foreground">9 min read • Published May 10, 2026</p>
          </div>
          <div className="space-y-6 text-sm leading-7 text-muted-foreground">
            <p>
              We tested top baby monitors for picture quality, alerts, and reliability so parents can
              choose with confidence.
            </p>
            <h2 className="text-2xl font-semibold">What to look for</h2>
            <p>
              Focus on secure connectivity, clear night vision, and reliable audio or motion alerts
              for the nursery.
            </p>
            <div className="rounded-3xl border border-border bg-muted p-6">
              <h3 className="text-lg font-semibold">Featured review</h3>
              <p className="mt-3 text-sm text-muted-foreground">
                The best option blends strong video performance with easy setup and an app parents
                can trust.
              </p>
            </div>
            <h2 className="text-2xl font-semibold">Pros and cons</h2>
            <div className="space-y-4 text-sm text-muted-foreground">
              <div>
                <p className="font-semibold">Pros</p>
                <ul className="list-disc space-y-2 pl-6">
                  <li>Clear video quality</li>
                  <li>Wi-Fi connectivity for remote monitoring</li>
                  <li>Temperature alerts to keep the room comfortable</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">Cons</p>
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
