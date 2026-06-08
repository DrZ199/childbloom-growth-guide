import { createFileRoute } from "@tanstack/react-router";
import { siteDescription } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | ChildBloom" },
      { name: "description", content: "Learn about ChildBloom, our mission, and how we support parents with trusted child health guidance and product reviews." },
      { property: "og:title", content: "About | ChildBloom" },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
        <div>
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">About ChildBloom</span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">Helping children grow, learn, and thrive.</h1>
        </div>
        <div className="space-y-6 text-sm leading-7 text-muted-foreground">
          <p>ChildBloom was created for parents who want fast, trustworthy answers about child health, newborn care, nutrition, development milestones, and family-friendly products.</p>
          <p>Our content is written in a calm, modern voice and reviewed by pediatric experts so families can feel confident in every decision they make.</p>
          <p>We focus on practical tools, clear advice, and a warm approach that honors how busy parenting really is.</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-muted p-6">
            <h2 className="text-lg font-semibold">What we cover</h2>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li>Child health and wellness</li>
              <li>Newborn and infant care</li>
              <li>Nutrition and feeding</li>
              <li>Development and learning</li>
              <li>Product reviews and gear guides</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-muted p-6">
            <h2 className="text-lg font-semibold">Our promise</h2>
            <p className="mt-4 text-sm text-muted-foreground">We share evidence-based resources, clear recommendations, and honest affiliate relationships so families can make informed choices without overwhelm.</p>
          </div>
        </div>
      </article>
    </main>
  );
}
