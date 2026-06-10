import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/_template")({
  head: () => ({
    meta: [
      { title: "Article Title | ChildBloom" },
      {
        name: "description",
        content: "Meta description 150-160 characters with main keyword.",
      },
      { property: "og:title", content: "Article Title | ChildBloom" },
      { property: "og:description", content: "Meta description for social sharing." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/article-slug" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Article Title",
          description: "Meta description with main keyword.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/article-slug" },
          datePublished: "2026-01-15",
          dateModified: "2026-01-15",
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
            { "@type": "ListItem", position: 3, name: "Article Title", item: "https://childbloom.site/articles/article-slug" },
          ],
        }),
      },
    ],
  }),
  component: TemplateArticle,
});

function TemplateArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Category Name
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Article Title with Main Keyword
            </h1>
            <p className="text-sm text-muted-foreground">XX min read • Published Month Day, Year • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#section-1" className="text-primary hover:underline">Section 1</a></li>
              <li><a href="#section-2" className="text-primary hover:underline">Section 2</a></li>
              <li><a href="#section-3" className="text-primary hover:underline">Section 3</a></li>
              <li><a href="#section-4" className="text-primary hover:underline">Section 4</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="section-1" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Section 1 Heading</h2>
            <p>Content with main keyword naturally integrated.</p>
            <h3 className="text-xl font-semibold">Subsection</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Bullet point with relevant info</li>
              <li>Another bullet point</li>
            </ul>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-2">Key Takeaway</h3>
              <p className="text-sm text-muted-foreground">Important summary point for readers.</p>
            </div>
          </section>

          <section id="section-2" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Section 2 Heading</h2>
            <p>More detailed content.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Column 1</th>
                    <th className="p-3 text-left font-medium">Column 2</th>
                    <th className="p-3 text-left font-medium">Column 3</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Row 1</td>
                    <td className="p-3">Data</td>
                    <td className="p-3">Data</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="section-3" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Section 3 Heading</h2>
            <p>Product recommendations or additional guidance.</p>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-3">Quick Recommendations</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                <li><strong>Best Overall:</strong> <a href="/go/product-slug" className="text-primary hover:underline" rel="sponsored nofollow">Product Name</a> — brief description</li>
                <li><strong>Best Budget:</strong> <a href="/go/product-slug" className="text-primary hover:underline" rel="sponsored nofollow">Product Name</a> — brief description</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                Read our full <a href="/articles/related-article" className="text-primary hover:underline">Related Article</a> for detailed comparisons.
              </p>
            </div>
          </section>

          <section id="section-4" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Section 4 Heading</h2>
            <p>Final content section before FAQ.</p>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>
            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Question 1?</dt>
                <dd className="mt-2">Answer with helpful details.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Question 2?</dt>
                <dd className="mt-2">Answer with helpful details.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Question 3?</dt>
                <dd className="mt-2">Answer with helpful details.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Question 4?</dt>
                <dd className="mt-2">Answer with helpful details.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Question 5?</dt>
                <dd className="mt-2">Answer with helpful details.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/related-1" className="text-primary hover:underline">Related Article 1</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/related-2" className="text-primary hover:underline">Related Article 2</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/related-3" className="text-primary hover:underline">Related Article 3</a>
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