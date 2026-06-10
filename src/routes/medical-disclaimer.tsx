import { createFileRoute } from "@tanstack/react-router";
import { siteDescription } from "@/lib/site-data";

export const Route = createFileRoute("/medical-disclaimer")({
  head: () => ({
    meta: [
      { title: "Medical Disclaimer | ChildBloom" },
      {
        name: "description",
        content:
          "ChildBloom's medical disclaimer explains how our content is educational and not medical advice.",
      },
      { property: "og:title", content: "Medical Disclaimer | ChildBloom" },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/medical-disclaimer" }],
  }),
  component: MedicalDisclaimerPage,
});

function MedicalDisclaimerPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Medical disclaimer
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Educational content, not medical advice.
        </h1>
        <section className="space-y-4 text-sm leading-7 text-muted-foreground">
          <p>
            Content on ChildBloom is for educational purposes only and is not a substitute for
            professional medical advice, diagnosis, or treatment.
          </p>
          <p>
            Always consult your doctor, pediatrician, or qualified healthcare provider with any
            questions about your child's health or development.
          </p>
          <p>
            If your child is experiencing a medical emergency, seek immediate care from a licensed
            medical professional.
          </p>
        </section>
      </article>
    </main>
  );
}
