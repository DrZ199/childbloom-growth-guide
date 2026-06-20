import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/toddler-picky-eating")({
  component: ToddlerPickyEatingArticle,
  head: () => {
    const url = "https://childbloom.site/articles/toddler-picky-eating/";
    return seo({
      title: "Toddler Picky Eating: Strategies That Actually Work | ChildBloom",
      description:
        "Why toddlers become picky eaters and evidence-based strategies that work: reduce mealtime battles, expand variety, and build healthy eating without stress.",
      url,
      type: "article",
      publishedTime: "2026-06-12",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/toddler-picky-eating-og.jpg",
    });
  },
});

function ToddlerPickyEatingArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "why-it-happens", title: "Why Picky Eating Happens" },
    { id: "division-of-responsibility", title: "The Golden Rule" },
    { id: "strategies", title: "Strategies That Work" },
    { id: "what-not-to-do", title: "What Not to Do" },
    { id: "when-to-worry", title: "When to Seek Help" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Toddler Nutrition Tips", slug: "toddler-nutrition-tips" },
    { title: "Starting Solids Guide", slug: "starting-solids-guide" },
    { title: "Sensory Processing Disorder", slug: "sensory-processing-disorder" },
    { title: "Toddler Tantrums", slug: "toddler-tantrums" },
    { title: "Child Development Milestones", slug: "child-development-milestones" },
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
              <span className="text-gray-700">Toddler Picky Eating</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              Toddler Picky Eating: Strategies That Actually Work
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              Picky eating is one of the most common toddler struggles. Here is why it happens and
              the calm, evidence-based strategies that reduce battles and expand variety over time.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>By ChildBloom Medical Team</span>
              <span>•</span>
              <span>Updated June 21, 2026</span>
              <span>•</span>
              <span>14 min read</span>
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
                    Picky eating is a normal phase for most toddlers ages 1 to 5. The most effective
                    approach is the "division of responsibility": you decide what, when, and where
                    food is served, and your child decides whether and how much to eat. Stay calm,
                    keep offering new foods, and avoid pressure.
                  </p>
                </div>

                <section id="why-it-happens" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Picky Eating Happens</h2>
                  <p className="text-gray-700 mb-4">
                    Picky eating peaks between ages 1 and 5 and is usually a normal part of
                    development. Growth slows after the first year, so toddlers naturally need less
                    food and may seem to eat very little.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Food neophobia:</strong> A natural fear of new foods that protected children in the past</li>
                    <li><strong>A drive for control:</strong> Saying "no" to food is one way toddlers assert independence</li>
                    <li><strong>Sensory sensitivities:</strong> Some children are sensitive to textures, smells, or tastes</li>
                    <li><strong>Distraction:</strong> Toddlers are busy and may not want to sit still to eat</li>
                    <li><strong>Past negative experiences:</strong> Pressure or gagging can create wariness</li>
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: Why is my toddler so picky?</h3>
                    <p className="text-gray-700 mb-0">
                      Most toddlers become picky eaters because of slower growth, a natural fear of
                      new foods, and a growing desire for independence. It usually peaks between ages
                      2 and 5 and improves with patience, repeated exposure, and no pressure.
                    </p>
                  </div>
                </section>

                <section id="division-of-responsibility" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">The Golden Rule: Division of Responsibility</h2>
                  <p className="text-gray-700 mb-4">
                    The single most helpful principle, developed by feeding expert Ellyn Satter, is to
                    divide jobs at mealtime:
                  </p>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li><strong>Your job:</strong> Decide what food is offered, and when and where meals happen.</li>
                      <li><strong>Your child's job:</strong> Decide whether to eat and how much.</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-4">
                    When you trust your child to listen to their own hunger and fullness, mealtimes
                    become calmer and pressure disappears. Your job is to keep offering a variety of
                    healthy foods without forcing.
                  </p>
                </section>

                <section id="strategies" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategies That Work</h2>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Set the Scene</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Serve meals and snacks at consistent times</li>
                    <li>Keep mealtimes calm, screen-free, and seated</li>
                    <li>Eat together as a family when you can</li>
                    <li>Offer small portions so the plate is not overwhelming</li>
                    <li>Let your toddler help with simple prep, like stirring or washing</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Present Food Well</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Pair a new food with a familiar favorite</li>
                    <li>Cut foods into fun shapes or sticks</li>
                    <li>Offer dips like yogurt or hummus</li>
                    <li>Serve foods separately so they do not touch</li>
                    <li>Let your child choose between two healthy options</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Shift Your Mindset</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Remove pressure: never force a bite</li>
                    <li>Offer a new food 10 to 15 times before deciding they dislike it</li>
                    <li>Model eating the foods you want your child to try</li>
                    <li>Do not use food as a reward or punishment</li>
                    <li>Keep mealtimes positive, even when little is eaten</li>
                  </ul>

                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> Dana stopped begging her daughter to "take
                      three bites" and simply served broccoli alongside pasta she loved. For weeks her
                      daughter ignored it. One day, with zero pressure, she tried a piece, and now
                      broccoli is a regular request.
                    </p>
                  </div>
                </section>

                <section id="what-not-to-do" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What Not to Do</h2>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Do not force your child to eat or clean their plate</li>
                      <li>Do not cook a separate special meal every night</li>
                      <li>Do not use screens or toys as bribes to eat</li>
                      <li>Do not label your child a "picky eater" in front of them</li>
                      <li>Do not give up on a food after only two or three tries</li>
                      <li>Do not fill up on milk or juice between meals</li>
                    </ul>
                  </div>
                </section>

                <section id="when-to-worry" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Seek Help</h2>
                  <p className="text-gray-700 mb-4">
                    Most picky eating is normal. Talk to your pediatrician if your toddler:
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Eats a very limited range of foods (fewer than 10 to 15)</li>
                      <li>Is losing weight or not growing well</li>
                      <li>Gags, vomits, or chokes often with food</li>
                      <li>Has extreme reactions to food textures or smells</li>
                      <li>Shows significant anxiety or distress around eating</li>
                      <li>Drops entire food groups for a long time</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-4">
                    These can signal an issue such as a sensory or feeding disorder, which an expert
                    can help with.
                  </p>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Should I make my child sit until they eat?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        No. Forcing a child to sit creates negative associations with mealtime. Keep
                        meals pleasant and end them when your child shows they are done. Pressure
                        usually backfires.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Is it okay to hide vegetables in food?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Occasionally adding pureed vegetables to a dish is fine for nutrition, but do
                        not rely on it alone. Keep offering whole vegetables so your child learns to
                        accept them in their natural form.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        My toddler barely eats. Will they get enough nutrients?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Toddlers often eat more across a week than any single day. If growth is on
                        track and energy is good, they are likely fine. A daily vitamin can help; ask
                        your pediatrician if you are concerned.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        How many times should I offer a new food?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Research suggests it can take 10 to 15 or more exposures before a child accepts
                        a new food. Keep offering small amounts in a relaxed way without forcing or
                        commenting.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Medical Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational purposes only and is not a substitute for
                    professional medical advice, diagnosis, or treatment. Always consult your
                    pediatrician or a registered dietitian about your child's nutrition and growth.
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
  headline: "Toddler Picky Eating: Strategies That Actually Work",
  description:
    "Why toddlers become picky eaters and evidence-based strategies that work: reduce mealtime battles, expand variety, and build healthy eating without stress.",
  image: "https://childbloom.site/images/articles/toddler-picky-eating-og.jpg",
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
    "@id": "https://childbloom.site/articles/toddler-picky-eating/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should I make my child sit until they eat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Forcing a child to sit creates negative associations with mealtime. Keep meals pleasant and end them when your child shows they are done. Pressure usually backfires.",
      },
    },
    {
      "@type": "Question",
      name: "Is it okay to hide vegetables in food?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Occasionally adding pureed vegetables to a dish is fine for nutrition, but do not rely on it alone. Keep offering whole vegetables so your child learns to accept them in their natural form.",
      },
    },
    {
      "@type": "Question",
      name: "My toddler barely eats. Will they get enough nutrients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Toddlers often eat more across a week than any single day. If growth is on track and energy is good, they are likely fine. A daily vitamin can help; ask your pediatrician if you are concerned.",
      },
    },
    {
      "@type": "Question",
      name: "How many times should I offer a new food?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Research suggests it can take 10 to 15 or more exposures before a child accepts a new food. Keep offering small amounts in a relaxed way without forcing or commenting.",
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
