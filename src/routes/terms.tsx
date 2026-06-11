import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Service | ChildBloom" },
      {
        name: "description",
        content:
          "ChildBloom Terms of Service: how you may use our content, medical disclaimer, intellectual property, and limitation of liability.",
      },
      { property: "og:title", content: "Terms of Service | ChildBloom" },
      {
        property: "og:description",
        content: "Terms governing your use of ChildBloom.",
      },
      { property: "og:url", content: "https://childbloom.site/terms" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
        <header>
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Terms of Service
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: June 11, 2026</p>
        </header>
        <section className="space-y-4 text-sm leading-7 text-muted-foreground">
          <h2 className="text-xl font-semibold text-foreground">1. Acceptance</h2>
          <p>
            By accessing childbloom.site (the "Site"), you agree to these Terms and our{" "}
            <a href="/privacy" className="text-primary underline">Privacy Policy</a>.
          </p>
          <h2 className="text-xl font-semibold text-foreground">2. Educational use only</h2>
          <p>
            All ChildBloom content — including articles reviewed by Dr. Zee Islam (MBBS, MCPS
            Pediatrics) — is for general educational purposes only and is{" "}
            <strong className="text-foreground">not medical advice</strong>. See our{" "}
            <a href="/medical-disclaimer" className="text-primary underline">Medical Disclaimer</a>.
          </p>
          <h2 className="text-xl font-semibold text-foreground">3. Affiliate links</h2>
          <p>
            ChildBloom participates in affiliate programs including Amazon Associates. See our{" "}
            <a href="/affiliate-disclosure" className="text-primary underline">Affiliate Disclosure</a>.
          </p>
          <h2 className="text-xl font-semibold text-foreground">4. Intellectual property</h2>
          <p>
            All content is © ChildBloom. Short excerpts with attribution and a link back are
            permitted. Republishing, scraping, or AI-training on substantial portions requires
            written permission.
          </p>
          <h2 className="text-xl font-semibold text-foreground">5. Third-party links</h2>
          <p>
            We link to third-party sites (CDC, AAP, WHO, retailers) for reference. ChildBloom is
            not responsible for their content, accuracy, or privacy practices.
          </p>
          <h2 className="text-xl font-semibold text-foreground">6. Limitation of liability</h2>
          <p>
            To the maximum extent permitted by law, ChildBloom is not liable for direct, indirect,
            incidental, or consequential damages arising from use of the Site. The Site is
            provided "as is" without warranty of any kind.
          </p>
          <h2 className="text-xl font-semibold text-foreground">7. Changes</h2>
          <p>Continued use after changes constitutes acceptance.</p>
          <h2 className="text-xl font-semibold text-foreground">8. Contact</h2>
          <p>
            Questions? Reach us via{" "}
            <a href="/contact" className="text-primary underline">our contact page</a>.
          </p>
        </section>
      </article>
    </main>
  );
}
