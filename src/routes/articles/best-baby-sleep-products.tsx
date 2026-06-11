import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/best-baby-sleep-products")({
  head: () => ({
    meta: [
      {
        title:
          "Best Baby Sleep Products 2026: Sleep Sacks, White Noise & Night Lights | ChildBloom",
      },
      {
        name: "description",
        content:
          "Best baby sleep products 2026: top sleep sacks, white noise machines, blackout curtains, and safe sleep accessories with expert reviews and Amazon affiliate links.",
      },
      {
        property: "og:title",
        content:
          "Best Baby Sleep Products 2026: Sleep Sacks, White Noise & Night Lights | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "Best baby sleep products 2026: top sleep sacks, white noise machines, blackout curtains, and safe sleep accessories with expert reviews.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/best-baby-sleep-products" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Best Baby Sleep Products 2026: Sleep Sacks, White Noise & Night Lights",
          description:
            "Best baby sleep products 2026: top sleep sacks, white noise machines, blackout curtains, and safe sleep accessories with expert reviews.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/best-baby-sleep-products" },
          datePublished: "2026-06-11",
          dateModified: "2026-06-11",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://childbloom.site" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Articles",
              item: "https://childbloom.site/articles",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Best Baby Sleep Products",
              item: "https://childbloom.site/articles/best-baby-sleep-products",
            },
          ],
        }),
      },
    ],
  }),
  component: BestBabySleepProductsArticle,
});

function BestBabySleepProductsArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Product Reviews • Sleep
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Best Baby Sleep Products 2026: Sleep Sacks, White Noise &amp; Night Lights
            </h1>
            <p className="text-sm text-muted-foreground">
              12 min read • Published June 11, 2026 • Medically reviewed by Dr. Emma Lane, MD
            </p>
          </div>

          <nav
            className="rounded-2xl border border-border bg-muted p-5 text-sm"
            aria-label="Table of contents"
          >
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li>
                <a href="#sleep-sacks" className="text-primary hover:underline">
                  Best Sleep Sacks &amp; Swaddles
                </a>
              </li>
              <li>
                <a href="#white-noise" className="text-primary hover:underline">
                  Best White Noise Machines
                </a>
              </li>
              <li>
                <a href="#blackout" className="text-primary hover:underline">
                  Best Blackout Solutions
                </a>
              </li>
              <li>
                <a href="#night-lights" className="text-primary hover:underline">
                  Best Night Lights
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          <section id="sleep-sacks" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Best Sleep Sacks &amp; Swaddles</h2>
            <h3 className="text-xl font-semibold">Halo SleepSack</h3>
            <p>Trusted swaddle and sleep sack with excellent safety ratings.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Pros:</strong> Multiple TOG ratings, easy zip, safe design
              </li>
              <li>
                <a
                  href="/go/halo-sleepsack"
                  className="text-primary hover:underline"
                  rel="sponsored nofollow"
                >
                  Buy on Amazon
                </a>
              </li>
            </ul>
          </section>

          <section id="white-noise" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Best White Noise Machines</h2>
            <h3 className="text-xl font-semibold">Dohm Classic Sound Machine</h3>
            <p>Simple fan-based white noise with volume control.</p>
          </section>

          <section id="blackout" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Best Blackout Solutions</h2>
            <p>Blackout curtains or shades are essential for daytime naps and travel.</p>
          </section>

          <section id="night-lights" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Best Night Lights</h2>
            <p>Red or warm white lights that don't disrupt melatonin.</p>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Are sleep sacks safe?</dt>
                <dd className="mt-2">
                  Yes, when used properly. Choose the right TOG for room temperature and stop
                  swaddling once baby shows signs of rolling.
                </dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/baby-sleep-guide" className="text-primary hover:underline">
                Baby Sleep Guide
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/sleep-training-methods" className="text-primary hover:underline">
                Sleep Training Methods
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Medical Disclaimer:</strong> This article is for educational purposes only and
              does not constitute medical advice. Always consult your pediatrician or healthcare
              provider for concerns about your child's health.
            </p>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}
