import { createFileRoute } from "@tanstack/react-router";
import { siteDescription } from "@/lib/site-data";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | ChildBloom" },
      { name: "description", content: "Read ChildBloom's privacy policy, including how we collect data and handle newsletter subscriptions." },
      { property: "og:title", content: "Privacy Policy | ChildBloom" },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Privacy Policy</span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">How ChildBloom protects your information.</h1>
        <section className="space-y-4 text-sm leading-7 text-muted-foreground">
          <p>ChildBloom collects email addresses only for newsletter subscription and communication. We never sell your personal data.</p>
          <p>Cookies are used to improve site performance and to remember your preferences. You may manage cookies through your browser.</p>
          <p>Third-party services may collect analytics data. We use that information to improve the experience for parents and families.</p>
        </section>
      </article>
    </main>
  );
}
