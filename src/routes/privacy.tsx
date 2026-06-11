import { createFileRoute } from "@tanstack/react-router";
import { siteDescription } from "@/lib/site-data";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | ChildBloom" },
      {
        name: "description",
        content:
          "Read ChildBloom's privacy policy, including how we collect data and handle newsletter subscriptions.",
      },
      { property: "og:title", content: "Privacy Policy | ChildBloom" },
      { property: "og:description", content: siteDescription },
      { property: "og:url", content: "https://childbloom.site/privacy" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6">
      <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
        <header>
          <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Privacy Policy
          </span>
          <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
            How ChildBloom protects your information
          </h1>
          <p className="mt-3 text-sm text-muted-foreground">Last updated: June 11, 2026</p>
        </header>

        <section className="space-y-4 text-sm leading-7 text-muted-foreground">
          <p>
            ChildBloom ("we", "us", "our") publishes evidence-based parenting and child-health
            content. This Privacy Policy explains what personal information we collect, how we use
            it, and your rights under GDPR, the UK GDPR, and CCPA.
          </p>

          <h2 className="text-xl font-semibold text-foreground">1. Information we collect</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Email address</strong> — when you subscribe to
              our newsletter or send us a message via the contact form.
            </li>
            <li>
              <strong className="text-foreground">Message contents</strong> — anything you type
              into the contact form.
            </li>
            <li>
              <strong className="text-foreground">Usage data</strong> — pages viewed, device type,
              browser, approximate location (country/city), referring URL, collected via Google
              Analytics.
            </li>
            <li>
              <strong className="text-foreground">Cookies</strong> — see our{" "}
              <a href="/cookie-policy" className="text-primary underline">
                Cookie Policy
              </a>{" "}
              for details.
            </li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">2. How we use your information</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Send newsletters you subscribed to (you can unsubscribe any time).</li>
            <li>Respond to your contact-form messages.</li>
            <li>Understand which articles are useful so we can improve content.</li>
            <li>Serve relevant advertising via Google AdSense (you can opt out).</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">3. Legal basis (GDPR / UK GDPR)</h2>
          <p>
            We process your data on the basis of <em>consent</em> (newsletter, analytics cookies,
            ad cookies) and <em>legitimate interests</em> (responding to your messages, keeping the
            site secure).
          </p>

          <h2 className="text-xl font-semibold text-foreground">4. Sharing your information</h2>
          <p>We do not sell your personal data. We share it only with:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Supabase (database hosting, EU/US)</li>
            <li>Resend (newsletter delivery)</li>
            <li>Google (Analytics, AdSense)</li>
            <li>Lovable / Cloudflare (site hosting)</li>
          </ul>

          <h2 className="text-xl font-semibold text-foreground">5. Your rights</h2>
          <p>
            You can request access, correction, deletion, or a portable copy of your data, and
            withdraw consent for marketing at any time. Email us via{" "}
            <a href="/contact" className="text-primary underline">our contact page</a>. EU/UK
            residents may also complain to your local data-protection authority.
          </p>

          <h2 className="text-xl font-semibold text-foreground">6. Data retention</h2>
          <p>
            We retain newsletter emails until you unsubscribe. Contact-form messages are kept for
            up to 24 months. Analytics data is retained per Google's default settings.
          </p>

          <h2 className="text-xl font-semibold text-foreground">7. Children's privacy</h2>
          <p>
            ChildBloom is written for adults (parents and caregivers). We do not knowingly collect
            personal information from anyone under 13.
          </p>

          <h2 className="text-xl font-semibold text-foreground">8. Updates</h2>
          <p>
            We may update this policy from time to time. Material changes will be posted here with
            a revised "Last updated" date.
          </p>
        </section>
      </article>
    </main>
  );
}
