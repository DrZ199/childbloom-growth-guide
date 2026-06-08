import { createFileRoute } from "@tanstack/react-router";
import { siteDescription } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | ChildBloom" },
      { name: "description", content: "Contact ChildBloom for editorial inquiries, partnerships, and media requests." },
      { property: "og:title", content: "Contact | ChildBloom" },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">Get in touch</span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Questions, feedback, or brand partnerships?</h1>
        <p className="mt-4 text-base text-muted-foreground">We’re happy to connect. Share your message below and we’ll respond within 1-2 business days.</p>
        <form className="mt-8 space-y-5">
          <label className="block text-sm font-medium text-foreground">
            Name
            <input type="text" placeholder="Your name" className="mt-2 w-full rounded-3xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </label>
          <label className="block text-sm font-medium text-foreground">
            Email
            <input type="email" placeholder="you@example.com" className="mt-2 w-full rounded-3xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </label>
          <label className="block text-sm font-medium text-foreground">
            Message
            <textarea placeholder="Tell us how we can help" rows={6} className="mt-2 w-full rounded-3xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20" />
          </label>
          <button type="submit" className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90">Send message</button>
        </form>
      </div>
    </main>
  );
}
