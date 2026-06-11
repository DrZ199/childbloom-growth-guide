import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/best-baby-books")({
  head: () => ({
    meta: [
      { title: "Best Baby Books 2026: Board Books & Interactive Picks for Ages 0-3 | ChildBloom" },
      {
        name: "description",
        content:
          "The best baby books for newborns to toddlers: board books, lift-the-flap, touch-and-feel, and early literacy favorites with pros, cons, and Amazon affiliate links. Perfect for language development.",
      },
      {
        property: "og:title",
        content: "Best Baby Books 2026: Board Books & Interactive Picks for Ages 0-3 | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "The best baby books for newborns to toddlers: board books, lift-the-flap, touch-and-feel, and early literacy favorites with pros, cons, and Amazon affiliate links.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/best-baby-books" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Best Baby Books 2026: Board Books & Interactive Picks for Ages 0-3",
          description:
            "The best baby books for newborns to toddlers: board books, lift-the-flap, touch-and-feel, and early literacy favorites with pros, cons, and Amazon affiliate links.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/best-baby-books" },
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
              name: "Best Baby Books",
              item: "https://childbloom.site/articles/best-baby-books",
            },
          ],
        }),
      },
    ],
  }),
  component: BestBabyBooksArticle,
});

function BestBabyBooksArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Product Reviews • Development
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Best Baby Books 2026: Board Books &amp; Interactive Picks for Ages 0-3
            </h1>
            <p className="text-sm text-muted-foreground">
              14 min read • Published June 11, 2026 • Medically reviewed by Dr. Emma Lane, MD
            </p>
          </div>

          <nav
            className="rounded-2xl border border-border bg-muted p-5 text-sm"
            aria-label="Table of contents"
          >
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li>
                <a href="#why-books-matter" className="text-primary hover:underline">
                  Why Books Matter for Babies
                </a>
              </li>
              <li>
                <a href="#best-board-books" className="text-primary hover:underline">
                  Best Board Books for Newborns &amp; Infants
                </a>
              </li>
              <li>
                <a href="#interactive-books" className="text-primary hover:underline">
                  Best Interactive &amp; Lift-the-Flap Books
                </a>
              </li>
              <li>
                <a href="#touch-feel" className="text-primary hover:underline">
                  Best Touch-and-Feel &amp; Sensory Books
                </a>
              </li>
              <li>
                <a href="#comparison" className="text-primary hover:underline">
                  Quick Comparison Table
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          <section
            id="why-books-matter"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Why Books Matter for Babies</h2>
            <p>
              Reading to babies from birth builds vocabulary, attention span, and a lifelong love of
              books. Even newborns benefit from hearing your voice and seeing high-contrast images.
            </p>
            <p>
              The American Academy of Pediatrics recommends reading daily starting at birth. Board
              books are ideal because they survive teething and rough handling.
            </p>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-2">Key Benefits</h3>
              <ul className="list-disc space-y-2 pl-6">
                <li>Language development and early literacy skills</li>
                <li>Bonding and emotional connection</li>
                <li>Introduction to concepts (colors, numbers, animals)</li>
                <li>Calming bedtime routine</li>
              </ul>
            </div>
          </section>

          <section
            id="best-board-books"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">
              Best Board Books for Newborns &amp; Infants (0-12 months)
            </h2>

            <h3 className="text-xl font-semibold">1. Goodnight Moon by Margaret Wise Brown</h3>
            <p>
              Classic bedtime story with rhythmic text and simple illustrations. Perfect for
              establishing a reading routine.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Best for:</strong> Ages 0-3
              </li>
              <li>
                <strong>Why we love it:</strong> Soothing rhythm, high-contrast images in some
                editions
              </li>
              <li>
                <a
                  href="/go/goodnight-moon"
                  className="text-primary hover:underline"
                  rel="sponsored nofollow"
                >
                  Buy on Amazon
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold">2. The Very Hungry Caterpillar by Eric Carle</h3>
            <p>
              Iconic story about a caterpillar eating through foods. Teaches days of the week,
              counting, and transformation.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Best for:</strong> Ages 6 months+
              </li>
              <li>
                <strong>Why we love it:</strong> Bright collages, interactive hole-punching
              </li>
              <li>
                <a
                  href="/go/very-hungry-caterpillar"
                  className="text-primary hover:underline"
                  rel="sponsored nofollow"
                >
                  Buy on Amazon
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold">
              3. Brown Bear, Brown Bear, What Do You See? by Bill Martin Jr.
            </h3>
            <p>
              Repetitive, predictable text that babies love. Great for animal recognition and color
              learning.
            </p>
          </section>

          <section
            id="interactive-books"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Best Interactive &amp; Lift-the-Flap Books</h2>

            <h3 className="text-xl font-semibold">Dear Zoo by Rod Campbell</h3>
            <p>
              Lift-the-flap animal guessing game. Perfect for developing fine motor skills and
              prediction.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Pros:</strong> Sturdy flaps, engaging story, teaches animals
              </li>
              <li>
                <strong>Cons:</strong> Flaps can tear with heavy use
              </li>
              <li>
                <a
                  href="/go/dear-zoo"
                  className="text-primary hover:underline"
                  rel="sponsored nofollow"
                >
                  Buy on Amazon
                </a>
              </li>
            </ul>

            <h3 className="text-xl font-semibold">Where's Spot? by Eric Hill</h3>
            <p>Classic lift-the-flap hide-and-seek with the dog Spot. Simple and repetitive.</p>
          </section>

          <section id="touch-feel" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Best Touch-and-Feel &amp; Sensory Books</h2>

            <h3 className="text-xl font-semibold">That's Not My... series by Fiona Watt</h3>
            <p>
              Touchy-feely books with different textures on each page. Excellent for sensory
              exploration.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Pros:</strong> High contrast, simple text, durable
              </li>
              <li>
                <strong>Cons:</strong> Repetitive format
              </li>
              <li>
                <a
                  href="/go/thats-not-my"
                  className="text-primary hover:underline"
                  rel="sponsored nofollow"
                >
                  Buy on Amazon
                </a>
              </li>
            </ul>
          </section>

          <section id="comparison" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Quick Comparison Table</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Book</th>
                    <th className="p-3 text-left font-medium">Best Age</th>
                    <th className="p-3 text-left font-medium">Type</th>
                    <th className="p-3 text-left font-medium">Key Benefit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Goodnight Moon</td>
                    <td className="p-3">0-3 years</td>
                    <td className="p-3">Board Book</td>
                    <td className="p-3">Bedtime routine</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Dear Zoo</td>
                    <td className="p-3">6-24 months</td>
                    <td className="p-3">Lift-the-Flap</td>
                    <td className="p-3">Fine motor + guessing</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">That's Not My...</td>
                    <td className="p-3">0-18 months</td>
                    <td className="p-3">Touch &amp; Feel</td>
                    <td className="p-3">Sensory development</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">
                  How many books should I read to my baby each day?
                </dt>
                <dd className="mt-2">
                  Aim for at least one book per day, ideally 2-3 short sessions. Quality over
                  quantity—let your baby explore the pages and point at pictures.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  Are board books worth the higher price?
                </dt>
                <dd className="mt-2">
                  Yes. They last through teething, chewing, and throwing. Paper books get destroyed
                  quickly by babies and toddlers.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  Should I let my baby chew on books?
                </dt>
                <dd className="mt-2">
                  Yes—it's normal exploration. Board books are designed for it. Just supervise and
                  replace when damaged.
                </dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/speech-development-guide" className="text-primary hover:underline">
                Speech Development Guide
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/baby-milestones-by-month" className="text-primary hover:underline">
                Baby Milestones by Month
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/starting-solids-guide" className="text-primary hover:underline">
                Starting Solids Guide
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
