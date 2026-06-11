import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookie-policy")({
  head: () => ({
    meta: [
      { title: "Cookie Policy | ChildBloom" },
      {
        name: "description",
        content:
          "How ChildBloom uses cookies, what data they collect, and how you can manage your cookie preferences.",
      },
      { property: "og:title", content: "Cookie Policy | ChildBloom" },
      {
        property: "og:description",
        content:
          "How ChildBloom uses cookies and how to manage your preferences.",
      },
      { property: "og:url", content: "https://childbloom.site/cookie-policy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/cookie-policy" }],
  }),
  component: CookiePolicyPage,
});

function CookiePolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
        <header>
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Cookie Policy
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            How ChildBloom uses cookies
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: June 11, 2026</p>
        </header>

        <section className="space-y-4 text-sm leading-7 text-muted-foreground">
          <h2 className="text-xl font-semibold text-foreground">What are cookies?</h2>
          <p>
            Cookies are small text files stored on your device when you visit a website. They help
            sites remember your preferences, keep you signed in, and understand how visitors use
            the site.
          </p>

          <h2 className="text-xl font-semibold text-foreground">Cookies we use</h2>
          <ul className="list-disc space-y-3 pl-6">
            <li>
              <strong className="text-foreground">Strictly necessary cookies.</strong> Required for
              core functionality such as saving your theme (light/dark) and remembering newsletter
              consent. These cannot be disabled without breaking the site.
            </li>
            <li>
              <strong className="text-foreground">Analytics cookies.</strong> Google Analytics
              cookies help us understand which articles parents find useful so we can improve the
              site. Data is aggregated and anonymized.
            </li>
            <li>
              <strong className="text-foreground">Advertising cookies.</strong> Google AdSense may
              set cookies to show relevant ads and measure ad performance. You can opt out at{" "}
              <a
                href="https://adssettings.google.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline hover:no-underline"
              >
                Google Ads Settings
              </a>
              .
            </li>
            <li>
              <strong className="text-foreground">Affiliate cookies.</strong> When you click an
              affiliate link (e.g. Amazon Associates), the destination site sets a cookie to
              attribute purchases. ChildBloom does not control these cookies.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">Managing cookies</h2>
          <p>
            You can clear or block cookies through your browser settings (Chrome, Safari, Firefox,
            Edge all support this). Blocking strictly necessary cookies may affect site
            functionality.
          </p>

          <h2 className="text-xl font-semibold text-foreground">Third-party services</h2>
          <p>We use the following third parties that may set cookies:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Google Analytics (analytics)</li>
            <li>Google AdSense (advertising)</li>
            <li>Amazon Associates and other affiliate networks (purchase attribution)</li>
            <li>Supabase (authentication for admin users only)</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">Updates</h2>
          <p>
            We may update this Cookie Policy as our services evolve. Material changes will be
            posted here with a revised "Last updated" date.
          </p>

          <h2 className="text-xl font-semibold text-foreground">Contact</h2>
          <p>
            Questions about cookies? Reach us at{" "}
            <a href="/contact" className="text-primary underline hover:no-underline">
              our contact page
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}