import { createFileRoute } from "@tanstack/react-router";
import { siteDescription } from "@/lib/site-data";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/speech-milestones")({
  head: () => ({
    meta: [
      { title: "Speech Milestones 12-24 Months | ChildBloom" },
      {
        name: "description",
        content: "Track your toddler's speech milestones and learn when to seek support.",
      },
      { property: "og:title", content: "Speech Milestones 12-24 Months | ChildBloom" },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/speech-milestones" }],
  }),
  component: SpeechMilestonesArticle,
});

function SpeechMilestonesArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Development
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Speech Milestones from 12 to 24 Months (and When to Ask for Help)
            </h1>
            <p className="text-sm text-muted-foreground">7 min read • Published May 18, 2026</p>
          </div>
          <div className="space-y-6 text-sm leading-7 text-muted-foreground">
            <p>
              Every toddler grows language differently. These milestones show what is typical at each
              stage.
            </p>
            <h2 className="text-2xl font-semibold">Typical speech progress</h2>
            <ul className="list-disc space-y-3 pl-6">
              <li>12 months: says 1–3 words and responds to simple requests</li>
              <li>18 months: uses 5–20 words and starts combining words</li>
              <li>24 months: speaks in short phrases and follows two-step directions</li>
            </ul>
            <h2 className="text-2xl font-semibold">Language-building habits</h2>
            <p>
              Talk through daily routines, repeat words clearly, and read books together every day to
              give your toddler the strongest start.
            </p>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}
