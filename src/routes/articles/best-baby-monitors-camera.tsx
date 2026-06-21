import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/best-baby-monitors-camera")({
  head: () => ({
    meta: [
      { title: "Best Baby Monitors with Camera 2026: Video & Smart Monitor Reviews | ChildBloom" },
      {
        name: "description",
        content: "Expert review of the best baby monitors with camera in 2026. Compare video monitors, smart monitors, and Wi-Fi options with pros, cons, and top recommendations.",
      },
      { property: "og:title", content: "Best Baby Monitors with Camera 2026: Video & Smart Monitor Reviews | ChildBloom" },
      { property: "og:description", content: "Expert review of the best baby monitors with camera in 2026. Compare video monitors, smart monitors, and Wi-Fi options." },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://childbloom.site/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://childbloom.site/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/articles/best-baby-monitors-camera" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Best Baby Monitors with Camera 2026: Video & Smart Monitor Reviews",
          description: "Expert review of the best baby monitors with camera in 2026. Compare video monitors, smart monitors, and Wi-Fi options.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/best-baby-monitors-camera" },
          datePublished: "2026-06-12",
          dateModified: "2026-06-12",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://childbloom.site" },
            { "@type": "ListItem", position: 2, name: "Articles", item: "https://childbloom.site/articles" },
            { "@type": "ListItem", position: 3, name: "Best Baby Monitors with Camera", item: "https://childbloom.site/articles/best-baby-monitors-camera" },
          ],
        }),
      },
    ],
  }),
  component: BestBabyMonitorsCameraArticle,
});

function BestBabyMonitorsCameraArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Product Reviews
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Best Baby Monitors with Camera 2026: Video &amp; Smart Monitor Reviews
            </h1>
            <p className="text-sm text-muted-foreground">15 min read • Published June 12, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#types" className="text-primary hover:underline">Types of Video Monitors</a></li>
              <li><a href="#top-picks" className="text-primary hover:underline">Top Video &amp; Smart Monitor Picks</a></li>
              <li><a href="#comparison" className="text-primary hover:underline">Comparison Table</a></li>
              <li><a href="#features" className="text-primary hover:underline">Key Features to Consider</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="types" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Types of Video Monitors</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Traditional video monitors:</strong> Dedicated screen, no Wi-Fi needed</li>
              <li><strong>Wi-Fi / Smart monitors:</strong> View on phone, app features, remote access</li>
              <li><strong>Hybrid monitors:</strong> Both dedicated screen and app access</li>
            </ul>
          </section>

          <section id="top-picks" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Top Video &amp; Smart Monitor Picks</h2>
            
            <h3 className="text-xl font-semibold">Infant Optics DXR-8 Pro</h3>
            <p>Premium non-Wi-Fi video monitor with excellent range and image quality.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Pros:</strong> No Wi-Fi required, long battery life, expandable</li>
              <li><strong>Cons:</strong> More expensive</li>
              <li><a href="/go/infant-optics-dxr8" className="text-primary hover:underline" rel="sponsored nofollow">Buy on Amazon</a></li>
            </ul>

            <h3 className="text-xl font-semibold">Owlet Cam 2 / Owlet Smart Sock + Cam</h3>
            <p>Smart monitor with camera and optional sock for heart rate and oxygen monitoring.</p>
          </section>

          <section id="comparison" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Monitor</th>
                    <th className="p-3 text-left font-medium">Type</th>
                    <th className="p-3 text-left font-medium">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Infant Optics DXR-8</td>
                    <td className="p-3">Dedicated video</td>
                    <td className="p-3">No Wi-Fi, reliability</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Owlet Cam 2</td>
                    <td className="p-3">Smart + optional sock</td>
                    <td className="p-3">Health tracking + camera</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="features" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Key Features to Consider</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Video quality (especially in low light)</li>
              <li>Range and battery life</li>
              <li>Two-way talk and sound activation</li>
              <li>Privacy and security (especially for Wi-Fi models)</li>
              <li>Ability to add multiple cameras</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Are Wi-Fi monitors safe?</dt>
                <dd className="mt-2">Most modern Wi-Fi monitors have good security, but there have been past vulnerabilities. Choose reputable brands and keep firmware updated.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Do I need a monitor with camera?</dt>
                <dd className="mt-2">Many parents prefer video monitors for peace of mind, especially once babies start rolling and moving around.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/best-baby-monitors" className="text-primary hover:underline">Best Baby Monitors</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/baby-sleep-guide" className="text-primary hover:underline">Baby Sleep Guide</a>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Medical Disclaimer:</strong> This article is for educational purposes only and does not constitute medical advice. 
              Always consult your pediatrician or healthcare provider for concerns about your child's health.
            </p>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}
