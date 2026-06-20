import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/toddler-sleep-regression")({
  component: ToddlerSleepRegressionArticle,
  head: () => {
    const url = "https://childbloom.site/articles/toddler-sleep-regression/";
    return seo({
      title: "Toddler Sleep Regression: 18 Months, 2 & 3 Years | ChildBloom",
      description:
        "Why toddler sleep regressions happen at 18 months, 2 years, and 3 years, how long they last, and gentle strategies to get your toddler sleeping again.",
      url,
      type: "article",
      publishedTime: "2026-06-12",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/toddler-sleep-regression-og.jpg",
    });
  },
});

function ToddlerSleepRegressionArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "what-is-it", title: "What Is a Sleep Regression?" },
    { id: "signs", title: "Signs of a Regression" },
    { id: "ages", title: "Common Regression Ages" },
    { id: "causes", title: "What Causes Them" },
    { id: "strategies", title: "Gentle Strategies" },
    { id: "avoid", title: "What to Avoid" },
    { id: "when-to-call", title: "When to Call a Doctor" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Baby Sleep Schedule", slug: "baby-sleep-schedule" },
    { title: "Newborn Sleep", slug: "newborn-sleep" },
    { title: "Toddler Tantrums", slug: "toddler-tantrums" },
    { title: "Positive Discipline", slug: "positive-discipline" },
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
              <span className="text-gray-700">Toddler Sleep Regression</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              Toddler Sleep Regression: 18 Months, 2 and 3 Years
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              Your great sleeper is suddenly fighting bedtime and waking at night. Sleep regressions
              are frustrating but temporary. Here is why they happen and how to ride them out.
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
                    A sleep regression is a temporary phase when a toddler who slept well starts
                    fighting sleep or waking at night. They are tied to big developmental leaps and
                    usually last 1 to 4 weeks. The best response is to stay calm, keep routines
                    consistent, and avoid creating new sleep habits you cannot keep.
                  </p>
                </div>

                <section id="what-is-it" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is a Sleep Regression?</h2>
                  <p className="text-gray-700 mb-4">
                    A sleep regression is a sudden change in a child's sleep that does not have a
                    medical cause. A toddler who used to settle easily may resist bedtime, wake more
                    often, or wake very early, even though nothing seems wrong.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What is a toddler sleep regression?</h3>
                    <p className="text-gray-700 mb-0">
                      A toddler sleep regression is a temporary period when a child who slept well
                      suddenly resists bedtime or wakes more at night. It is usually linked to
                      developmental leaps, new skills, or routine changes, and typically lasts 1 to 4
                      weeks before sleep settles again.
                    </p>
                  </div>
                </section>

                <section id="signs" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Signs of a Regression</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Fighting bedtime that used to be easy</li>
                    <li>Waking more often during the night</li>
                    <li>Waking very early in the morning</li>
                    <li>Skipping or shortening naps</li>
                    <li>More clinginess or crying at separation</li>
                    <li>Extra crankiness from being overtired</li>
                  </ul>
                </section>

                <section id="ages" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Regression Ages</h2>
                  <div className="space-y-4 mb-4">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-1 mt-0">18 Months</h3>
                      <p className="text-gray-700 mb-0">Often driven by teething (molars), growing independence, separation anxiety, and language bursts.</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-1 mt-0">2 Years</h3>
                      <p className="text-gray-700 mb-0">Linked to big imaginations (and new fears), testing limits, potty training, and dropping to one nap.</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-1 mt-0">3 Years</h3>
                      <p className="text-gray-700 mb-0">Often tied to nightmares, nap resistance, a new sibling, or moving to a big-kid bed.</p>
                    </div>
                  </div>
                </section>

                <section id="causes" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What Causes Sleep Regressions</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Developmental leaps in language, movement, and thinking</li>
                    <li>Separation anxiety</li>
                    <li>Teething pain</li>
                    <li>Changes in routine, like travel or a new caregiver</li>
                    <li>Dropping a nap or not enough daytime sleep</li>
                    <li>New fears or nightmares</li>
                    <li>Big life changes, like a new sibling or moving home</li>
                  </ul>
                </section>

                <section id="strategies" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Gentle Strategies</h2>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Keep your bedtime routine calm and consistent</li>
                      <li>Stick to regular sleep and wake times</li>
                      <li>Make sure your toddler is not overtired or undertired</li>
                      <li>Offer extra reassurance during the day</li>
                      <li>Keep night wakings boring: calm, quiet, and brief</li>
                      <li>Use a comfort object or nightlight for fears</li>
                      <li>Check the room is cool, dark, and quiet</li>
                    </ul>
                  </div>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> When their 2-year-old suddenly screamed at
                      bedtime, Tom and Mei resisted the urge to start rocking him to sleep again.
                      Instead they kept the same short routine and offered calm reassurance. After about
                      two weeks, bedtime returned to normal.
                    </p>
                  </div>
                </section>

                <section id="avoid" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Avoid</h2>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Starting new habits you cannot keep long term (like hours of rocking)</li>
                      <li>Dropping naps too early</li>
                      <li>Bedtimes that drift later and later</li>
                      <li>Long, stimulating night-time interactions</li>
                      <li>Too much screen time, especially near bedtime</li>
                    </ul>
                  </div>
                </section>

                <section id="when-to-call" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call a Doctor</h2>
                  <p className="text-gray-700 mb-4">
                    Most regressions pass on their own. Talk to your pediatrician if:
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Sleep problems last more than 4 to 6 weeks</li>
                      <li>Your child snores loudly or seems to stop breathing in sleep</li>
                      <li>There are signs of illness, pain, or ear trouble</li>
                      <li>Night waking comes with major behavior or mood changes</li>
                      <li>You are worried about your child's overall development</li>
                    </ul>
                  </div>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        How long does a sleep regression last?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Most last 1 to 4 weeks. If sleep problems continue beyond 4 to 6 weeks, it may
                        be a new habit or another cause, so check with your pediatrician.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Should I drop my toddler's nap during a regression?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Usually not. Most toddlers still need a nap until around age 3 to 4. Dropping it
                        too soon often makes night sleep worse because of overtiredness.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Is it teething or a regression?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        It can be both. Teething can trigger a rough sleep patch. Look for drooling,
                        chewing, and sore gums. If you suspect pain, ask your pediatrician about safe
                        relief.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Will my toddler's good sleep come back?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Yes. Regressions are temporary. Keeping routines steady and avoiding new
                        long-term habits helps your toddler return to their usual sleep patterns.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Can I sleep train during a regression?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        It is often better to wait until the regression eases, then gently reset
                        routines. If sleep struggles persist, your pediatrician can suggest an approach
                        that fits your family.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Medical Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational purposes only and is not a substitute for
                    professional medical advice. Always consult your pediatrician about ongoing sleep
                    problems or concerns about your child's health.
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
  headline: "Toddler Sleep Regression: 18 Months, 2 and 3 Years",
  description:
    "Why toddler sleep regressions happen at 18 months, 2 years, and 3 years, how long they last, and gentle strategies to get your toddler sleeping again.",
  image: "https://childbloom.site/images/articles/toddler-sleep-regression-og.jpg",
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
    "@id": "https://childbloom.site/articles/toddler-sleep-regression/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How long does a sleep regression last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most last 1 to 4 weeks. If sleep problems continue beyond 4 to 6 weeks, it may be a new habit or another cause, so check with your pediatrician.",
      },
    },
    {
      "@type": "Question",
      name: "Should I drop my toddler's nap during a regression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually not. Most toddlers still need a nap until around age 3 to 4. Dropping it too soon often makes night sleep worse because of overtiredness.",
      },
    },
    {
      "@type": "Question",
      name: "Is it teething or a regression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can be both. Teething can trigger a rough sleep patch. Look for drooling, chewing, and sore gums. If you suspect pain, ask your pediatrician about safe relief.",
      },
    },
    {
      "@type": "Question",
      name: "Will my toddler's good sleep come back?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Regressions are temporary. Keeping routines steady and avoiding new long-term habits helps your toddler return to their usual sleep patterns.",
      },
    },
    {
      "@type": "Question",
      name: "Can I sleep train during a regression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It is often better to wait until the regression eases, then gently reset routines. If sleep struggles persist, your pediatrician can suggest an approach that fits your family.",
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
