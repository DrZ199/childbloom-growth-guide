import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/toddler-activities-at-home")({
  component: ToddlerActivitiesAtHomeArticle,
  head: () => {
    const url = "https://childbloom.site/articles/toddler-activities-at-home/";
    return seo({
      title: "Toddler Activities at Home: 40 Screen-Free Ideas | ChildBloom",
      description:
        "40 fun, screen-free toddler activities for ages 1 to 3. Easy indoor and outdoor play ideas using household items to boost development and cut screen time.",
      url,
      type: "article",
      publishedTime: "2026-06-12",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/toddler-activities-at-home-og.jpg",
    });
  },
});

function ToddlerActivitiesAtHomeArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "why-play", title: "Why Play Matters" },
    { id: "sensory", title: "Sensory Play" },
    { id: "active", title: "Active & Gross Motor" },
    { id: "fine-motor", title: "Fine Motor & Crafts" },
    { id: "pretend", title: "Pretend & Language" },
    { id: "outdoor", title: "Outdoor Ideas" },
    { id: "safety", title: "Play Safety Tips" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Toddler Activities", slug: "toddler-activities" },
    { title: "Speech Milestones", slug: "speech-milestones" },
    { title: "Preschool Readiness", slug: "preschool-readiness" },
    { title: "Child Development Milestones", slug: "child-development-milestones" },
    { title: "Parenting Hacks", slug: "parenting-hacks" },
  ];

  return (
    <>
      <ReadingProgress />
      <div className="min-h-screen bg-gradient-to-b from-pink-50/30 to-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <header className="mb-10">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link to="/" className="hover:text-pink-600 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link to="/articles" className="hover:text-pink-600 transition-colors">
                Articles
              </Link>
              <span>/</span>
              <span className="text-gray-700">Toddler Activities at Home</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              Toddler Activities at Home: 40 Screen-Free Ideas
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              You do not need fancy toys to keep a toddler busy and learning. These simple,
              screen-free activities use things you already have and support real development.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>By ChildBloom Medical Team</span>
              <span>•</span>
              <span>Updated June 21, 2026</span>
              <span>•</span>
              <span>12 min read</span>
            </div>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <aside className="hidden lg:block lg:col-span-3">
              <div className="sticky top-20">
                <TableOfContents items={tableOfContents} />
              </div>
            </aside>

            <div className="lg:col-span-9">
              <div className="prose prose-lg prose-pink max-w-none">
                <div id="quick-answer" className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg mb-8 scroll-mt-24">
                  <h2 className="text-lg font-bold text-pink-900 mt-0 mb-2">Quick Answer</h2>
                  <p className="text-pink-900 font-medium text-lg mb-0">
                    The best toddler activities are simple, hands-on, and use everyday items: stacking
                    cups, sensory bins, dancing, scribbling, and pretend play. These build language,
                    movement, and thinking skills better than screens. Health experts recommend little
                    to no screen time for children under 2.
                  </p>
                </div>

                <section id="why-play" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Play Matters</h2>
                  <p className="text-gray-700 mb-4">
                    Play is how toddlers learn. Through play they build language, problem-solving,
                    coordination, and social skills. The American Academy of Pediatrics encourages
                    hands-on, screen-free play as a key part of healthy development.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What activities are good for toddlers?</h3>
                    <p className="text-gray-700 mb-0">
                      Good toddler activities are hands-on and open-ended: sensory bins, stacking and
                      sorting, dancing, scribbling, water play, and pretend play. They build language,
                      motor, and thinking skills. Experts recommend little to no screen time before
                      age 2, and no more than one hour of quality content for ages 2 to 5.
                    </p>
                  </div>
                </section>

                <section id="sensory" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Sensory Play</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Fill a bin with rice or dry pasta to scoop and pour</li>
                    <li>Water play in the sink or a shallow tub</li>
                    <li>Homemade play dough for squishing and rolling</li>
                    <li>A "feely bag" of safe household textures</li>
                    <li>Finger painting with yogurt for safe taste-testing</li>
                    <li>Ice cubes to chase around a tray</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    Always supervise sensory play closely to prevent choking with small items.
                  </p>
                </section>

                <section id="active" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Active and Gross Motor Play</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Dance party to favorite songs</li>
                    <li>Pillow obstacle course on the floor</li>
                    <li>Indoor "floor is lava" jumping game</li>
                    <li>Throwing soft balls into a laundry basket</li>
                    <li>Balloon keep-it-up (supervised)</li>
                    <li>Animal walks: hop like a frog, stomp like an elephant</li>
                    <li>Tape a line on the floor for balance walking</li>
                  </ul>
                </section>

                <section id="fine-motor" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Fine Motor and Crafts</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Stacking cups and nesting bowls</li>
                    <li>Dropping pom-poms into a bottle</li>
                    <li>Sticker play on paper</li>
                    <li>Scribbling with chunky crayons</li>
                    <li>Sorting socks or buttons by color (supervised)</li>
                    <li>Threading large pasta onto a shoelace</li>
                    <li>Tearing paper for a collage</li>
                  </ul>
                </section>

                <section id="pretend" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Pretend Play and Language</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Play kitchen with real pots and spoons</li>
                    <li>Feed and care for a doll or stuffed animal</li>
                    <li>Build a fort with blankets and cushions</li>
                    <li>Read books together and talk about the pictures</li>
                    <li>Sing nursery rhymes with hand motions</li>
                    <li>Pretend phone calls to build conversation skills</li>
                  </ul>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> On a rainy day with no plans, Sam turned a
                      laundry basket into a "boat" and narrated their pretend trip. His daughter
                      learned new words like "paddle" and "wave," and an hour passed without a single
                      screen.
                    </p>
                  </div>
                </section>

                <section id="outdoor" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Outdoor Ideas</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Nature walk to collect leaves and rocks</li>
                    <li>Bubbles to chase and pop</li>
                    <li>Sidewalk chalk drawing</li>
                    <li>Digging and pouring in a sandbox</li>
                    <li>Splashing in a shallow water table</li>
                    <li>Simple gardening, like watering plants</li>
                  </ul>
                </section>

                <section id="safety" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Play Safety Tips</h2>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Always supervise water play; drowning can happen in seconds and in shallow water</li>
                      <li>Avoid small items that fit through a toilet paper tube (choking risk)</li>
                      <li>Use non-toxic, age-appropriate art supplies</li>
                      <li>Check toys and materials for loose or broken parts</li>
                      <li>Stay within arm's reach during sensory and climbing play</li>
                    </ul>
                  </div>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        How much screen time is okay for toddlers?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Experts recommend avoiding screens (other than video chatting) before 18 to 24
                        months, and limiting ages 2 to 5 to about one hour of quality content per day,
                        ideally watched together.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        How long can a toddler focus on one activity?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Attention spans are short at this age, often just a few minutes per activity.
                        Rotating between several short activities is normal and healthy.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Do I need to play with my toddler the whole time?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        No. Some independent play is great for building focus and confidence. Join in
                        often, but it is healthy to let your child explore safely on their own too.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        What if my toddler gets bored quickly?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Keep a small rotation of activities and swap toys in and out so they feel fresh.
                        Open-ended materials like blocks and bins hold interest longer than
                        single-purpose toys.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Are messy activities really worth it?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Yes. Messy, hands-on play builds sensory, motor, and language skills. Use a mat
                        or play outside to make cleanup easier so you can relax and enjoy it.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Safety Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational purposes only. Always supervise your child during
                    play and choose age-appropriate materials. Consult your pediatrician with any
                    questions about your child's development or safety.
                  </p>
                </div>
              </div>

              <RelatedArticles articles={relatedArticles} />
            </div>
          </div>
        </article>
      </div>
      <BackToTop />
    </>
  );
}

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Toddler Activities at Home: 40 Screen-Free Ideas",
  description:
    "40 fun, screen-free toddler activities for ages 1 to 3. Easy indoor and outdoor play ideas using household items to boost development and cut screen time.",
  image: "https://childbloom.site/images/articles/toddler-activities-at-home-og.jpg",
  datePublished: "2026-06-12",
  dateModified: "2026-06-21",
  author: { "@type": "Organization", name: "ChildBloom Medical Team", url: "https://childbloom.site" },
  publisher: {
    "@type": "Organization",
    name: "ChildBloom",
    url: "https://childbloom.site",
    logo: { "@type": "ImageObject", url: "https://childbloom.site/logo.png" },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://childbloom.site/articles/toddler-activities-at-home/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How much screen time is okay for toddlers?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Experts recommend avoiding screens (other than video chatting) before 18 to 24 months, and limiting ages 2 to 5 to about one hour of quality content per day, ideally watched together.",
      },
    },
    {
      "@type": "Question",
      name: "How long can a toddler focus on one activity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Attention spans are short at this age, often just a few minutes per activity. Rotating between several short activities is normal and healthy.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need to play with my toddler the whole time?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Some independent play is great for building focus and confidence. Join in often, but it is healthy to let your child explore safely on their own too.",
      },
    },
    {
      "@type": "Question",
      name: "What if my toddler gets bored quickly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keep a small rotation of activities and swap toys in and out so they feel fresh. Open-ended materials like blocks and bins hold interest longer than single-purpose toys.",
      },
    },
    {
      "@type": "Question",
      name: "Are messy activities really worth it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Messy, hands-on play builds sensory, motor, and language skills. Use a mat or play outside to make cleanup easier so you can relax and enjoy it.",
      },
    },
  ],
};

if (typeof document !== "undefined") {
  for (const schema of [articleSchema, faqSchema]) {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(schema);
    document.head.appendChild(script);
  }
}
