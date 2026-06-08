import { createFileRoute } from "@tanstack/react-router";
import { siteDescription } from "@/lib/site-data";

export const Route = createFileRoute("/articles/newborn-sleep")({
  head: () => ({
    meta: [
      { title: "Newborn Sleep Guide | ChildBloom" },
      { name: "description", content: "A calm, evidence-based newborn sleep guide for the first 12 weeks." },
      { property: "og:title", content: "Newborn Sleep Guide | ChildBloom" },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/newborn-sleep" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Newborn Sleep Guide | ChildBloom",
          description: "A calm, evidence-based newborn sleep guide for the first 12 weeks.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/newborn-sleep" },
        }),
      },
    ],
  }),
  component: NewbornSleepArticle,
});

function NewbornSleepArticle() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
        <div className="space-y-3">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Newborn Care</p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">Newborn Sleep: A Calm, Evidence-Based Guide for the First 12 Weeks</h1>
          <p className="text-sm text-muted-foreground">8 min read • Published June 1, 2026</p>
        </div>
        <div className="space-y-6 text-sm leading-7 text-muted-foreground">
          <p>Newborn sleep is unpredictable, but a simple routine and safe sleep setup can help your family rest better.</p>
          <h2 className="text-2xl font-semibold">Safe sleep basics</h2>
          <p>Room-sharing is recommended, but never bed-sharing. Place baby on their back on a firm, uncluttered surface and keep the room at a comfortable temperature.</p>
          <h2 className="text-2xl font-semibold">A gentle rhythm</h2>
          <p>Follow sleepy cues instead of a strict clock — yawns, rubbing eyes, and fussiness are early signs your baby is ready for rest.</p>
          <ul className="list-disc space-y-3 pl-6 text-sm text-muted-foreground">
            <li>Use a calm bedtime routine with quiet, low light.</li>
            <li>Offer feeds before long naps to keep baby comfortable.</li>
            <li>Expect 14–17 hours of sleep spread across days and nights in early weeks.</li>
          </ul>
          <h2 className="text-2xl font-semibold">When to ask for help</h2>
          <p>If your baby is not gaining weight, is unusually irritable, or seems to struggle with breathing, contact your pediatric provider promptly.</p>
        </div>
      </article>
    </main>
  );
}
