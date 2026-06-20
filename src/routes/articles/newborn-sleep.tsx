import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/newborn-sleep")({
  component: NewbornSleepArticle,
  head: () => {
    const url = "https://childbloom.site/articles/newborn-sleep/";
    return seo({
      title: "Newborn Sleep Guide: First 12 Weeks (Safe Sleep) | ChildBloom",
      description:
        "How much newborns sleep, why they wake at night, safe sleep rules to reduce SIDS, and gentle ways to help your baby (and you) rest in the first 12 weeks.",
      url,
      type: "article",
      publishedTime: "2026-06-01",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/newborn-sleep-og.jpg",
    });
  },
});

function NewbornSleepArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "how-much", title: "How Much Newborns Sleep" },
    { id: "why-wake", title: "Why Newborns Wake" },
    { id: "safe-sleep", title: "Safe Sleep Rules" },
    { id: "day-night", title: "Day and Night Confusion" },
    { id: "tips", title: "Gentle Sleep Tips" },
    { id: "naps", title: "Newborn Naps" },
    { id: "when-to-call", title: "When to Call a Doctor" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Baby Sleep Schedule", slug: "baby-sleep-schedule" },
    { title: "Breastfeeding Guide", slug: "breastfeeding-guide" },
    { title: "Postpartum Recovery", slug: "postpartum-recovery" },
    { title: "Newborn Care Basics", slug: "newborn-care" },
    { title: "Toddler Sleep Regression", slug: "toddler-sleep-regression" },
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
              <span className="text-gray-700">Newborn Sleep</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              Newborn Sleep: A Calm Guide to the First 12 Weeks
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              Newborn sleep is unpredictable, and that is completely normal. Here is what to expect,
              how to keep your baby safe, and gentle ways to help everyone rest more.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>By ChildBloom Medical Team</span>
              <span>•</span>
              <span>Updated June 21, 2026</span>
              <span>•</span>
              <span>13 min read</span>
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
                    Newborns sleep about 14 to 17 hours a day in short stretches, waking often to feed.
                    Always place your baby on their back, on a firm, flat, empty surface, to lower the
                    risk of SIDS. Day-night confusion is normal early on and improves over the first
                    few months.
                  </p>
                </div>

                <section id="how-much" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How Much Newborns Sleep</h2>
                  <p className="text-gray-700 mb-4">
                    In the first weeks, babies sleep a lot, but rarely for long. Most newborns sleep 14
                    to 17 hours over 24 hours, broken into stretches of 2 to 4 hours, day and night.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: How much do newborns sleep?</h3>
                    <p className="text-gray-700 mb-0">
                      Newborns sleep about 14 to 17 hours per day, usually in short 2 to 4 hour
                      stretches around the clock. They wake frequently to feed because their stomachs
                      are tiny. Longer, more predictable sleep usually develops gradually over the first
                      3 to 4 months.
                    </p>
                  </div>
                </section>

                <section id="why-wake" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Newborns Wake So Often</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Tiny stomachs:</strong> They need to feed every few hours</li>
                    <li><strong>Short sleep cycles:</strong> Newborns cycle through light sleep often</li>
                    <li><strong>No body clock yet:</strong> Day-night rhythm is still developing</li>
                    <li><strong>Comfort needs:</strong> They wake for warmth, closeness, and clean diapers</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    Frequent waking is protective and normal. It is not a sign you are doing anything
                    wrong.
                  </p>
                </section>

                <section id="safe-sleep" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Safe Sleep Rules (Reduce SIDS Risk)</h2>
                  <p className="text-gray-700 mb-4">
                    Following safe sleep guidance from the AAP and NHS greatly lowers the risk of sudden
                    infant death syndrome (SIDS). Remember the "ABCs" of safe sleep: Alone, on the Back,
                    in a Crib.
                  </p>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-green-900 mb-2 mt-0">Always Do</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Place baby on their back for every sleep</li>
                      <li>Use a firm, flat sleep surface (crib or bassinet)</li>
                      <li>Keep the sleep space empty: no pillows, blankets, bumpers, or toys</li>
                      <li>Share a room (not a bed) for at least the first 6 months</li>
                      <li>Dress baby in a sleep sack instead of loose blankets</li>
                      <li>Offer a pacifier at sleep time once feeding is established</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-red-900 mb-2 mt-0">Avoid</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Bed-sharing, especially on a sofa or armchair</li>
                      <li>Soft bedding, loose blankets, or stuffed animals</li>
                      <li>Stomach or side sleeping</li>
                      <li>Overheating; keep the room at a comfortable temperature</li>
                      <li>Smoking around the baby</li>
                    </ul>
                  </div>
                </section>

                <section id="day-night" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Day and Night Confusion</h2>
                  <p className="text-gray-700 mb-4">
                    Many newborns are wide awake at night and sleepy all day. You can gently help their
                    body clock develop:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Keep days bright and a little noisy and active</li>
                    <li>Keep nights dark, quiet, and calm</li>
                    <li>Keep night feeds low-key with dim light and little talking</li>
                    <li>Expose baby to natural daylight during the day</li>
                  </ul>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> Exhausted by 2 a.m. wake-ups, Hana started
                      keeping daytime feeds bright and chatty and night feeds dim and silent. Within a
                      couple of weeks, her son began taking his longest sleep stretch at night.
                    </p>
                  </div>
                </section>

                <section id="tips" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Gentle Sleep Tips</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Watch for sleepy cues: yawning, looking away, rubbing eyes</li>
                    <li>Try to put baby down drowsy but awake when possible</li>
                    <li>Use a calm, repeatable wind-down routine</li>
                    <li>Swaddle safely until baby shows signs of rolling, then stop</li>
                    <li>Use white noise at a safe, low volume</li>
                    <li>Sleep when the baby sleeps to protect your own rest</li>
                    <li>Accept help so you can recover</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    Formal sleep training is not recommended for newborns. The early weeks are about
                    feeding, bonding, and safety, not schedules.
                  </p>
                </section>

                <section id="naps" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Newborn Naps</h2>
                  <p className="text-gray-700 mb-4">
                    Newborns nap frequently and on no fixed schedule. Most cannot stay awake longer than
                    45 to 90 minutes at a time. Following short wake windows can help prevent an
                    overtired, hard-to-settle baby.
                  </p>
                </section>

                <section id="when-to-call" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call a Doctor</h2>
                  <p className="text-gray-700 mb-4">
                    Contact your pediatrician or seek urgent care if your newborn:
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Is very hard to wake or unusually floppy</li>
                      <li>Will not feed or feeds very poorly</li>
                      <li>Has fewer wet diapers than expected</li>
                      <li>Has a fever (100.4°F / 38°C or higher) in a baby under 3 months</li>
                      <li>Has trouble breathing, blue lips, or pauses in breathing</li>
                      <li>Sleeps far more than usual and skips feeds</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-4">
                    A fever in a baby under 3 months is always a medical emergency. Seek care right
                    away.
                  </p>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Should I wake my newborn to feed?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        In the early weeks, yes, often. Many newborns need feeding every 2 to 3 hours,
                        including overnight, until they regain birth weight. Ask your pediatrician about
                        the right plan for your baby.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        When will my baby sleep through the night?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Most babies start sleeping longer stretches around 3 to 6 months, but this
                        varies widely. Night waking well into the first year is still normal and not a
                        problem to fix.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Is it safe for my newborn to sleep in a swing or car seat?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        No, not for routine sleep. Babies should sleep on a firm, flat surface. Sitting
                        devices can affect breathing. Move a sleeping baby to a crib or bassinet as soon
                        as you can.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Can I use a blanket if the room is cold?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Loose blankets are not safe for newborn sleep. Use a wearable sleep sack or an
                        extra layer of clothing instead, and keep the room at a comfortable, not hot,
                        temperature.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Is day-night confusion normal?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Yes. Newborns are born without a body clock, so mixing up day and night is very
                        common. Keeping days bright and nights dark and calm helps it sort out over the
                        first weeks.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Medical Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational purposes only and is not a substitute for
                    professional medical advice. Safe sleep guidance can save lives; always follow your
                    pediatrician's advice and current AAP or NHS recommendations for your baby.
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
  headline: "Newborn Sleep: A Calm Guide to the First 12 Weeks",
  description:
    "How much newborns sleep, why they wake at night, safe sleep rules to reduce SIDS, and gentle ways to help your baby (and you) rest in the first 12 weeks.",
  image: "https://childbloom.site/images/articles/newborn-sleep-og.jpg",
  datePublished: "2026-06-01",
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
    "@id": "https://childbloom.site/articles/newborn-sleep/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should I wake my newborn to feed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In the early weeks, yes, often. Many newborns need feeding every 2 to 3 hours, including overnight, until they regain birth weight. Ask your pediatrician about the right plan for your baby.",
      },
    },
    {
      "@type": "Question",
      name: "When will my baby sleep through the night?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most babies start sleeping longer stretches around 3 to 6 months, but this varies widely. Night waking well into the first year is still normal and not a problem to fix.",
      },
    },
    {
      "@type": "Question",
      name: "Is it safe for my newborn to sleep in a swing or car seat?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, not for routine sleep. Babies should sleep on a firm, flat surface. Sitting devices can affect breathing. Move a sleeping baby to a crib or bassinet as soon as you can.",
      },
    },
    {
      "@type": "Question",
      name: "Can I use a blanket if the room is cold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Loose blankets are not safe for newborn sleep. Use a wearable sleep sack or an extra layer of clothing instead, and keep the room at a comfortable, not hot, temperature.",
      },
    },
    {
      "@type": "Question",
      name: "Is day-night confusion normal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Newborns are born without a body clock, so mixing up day and night is very common. Keeping days bright and nights dark and calm helps it sort out over the first weeks.",
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
