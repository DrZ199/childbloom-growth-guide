import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/returning-to-work-after-baby")({
  component: ReturningToWorkArticle,
  head: () => {
    const url = "https://childbloom.site/articles/returning-to-work-after-baby/";
    return seo({
      title: "Returning to Work After Baby: A Practical Guide | ChildBloom",
      description:
        "A practical guide to returning to work after maternity leave: pumping at work, choosing childcare, emotional prep, and an easier transition for you and baby.",
      url,
      type: "article",
      publishedTime: "2026-06-12",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/returning-to-work-after-baby-og.jpg",
    });
  },
});

function ReturningToWorkArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "prepare", title: "Preparing in Advance" },
    { id: "childcare", title: "Choosing Childcare" },
    { id: "pumping", title: "Pumping at Work" },
    { id: "emotional", title: "The Emotional Side" },
    { id: "routine", title: "Building a New Routine" },
    { id: "support", title: "When to Ask for Support" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Postpartum Recovery", slug: "postpartum-recovery" },
    { title: "Postpartum Mental Health", slug: "postpartum-mental-health" },
    { title: "Breastfeeding vs Formula", slug: "breastfeeding-vs-formula" },
    { title: "Best Breast Pumps", slug: "best-breast-pumps" },
    { title: "Newborn Sleep", slug: "newborn-sleep" },
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
              <span className="text-gray-700">Returning to Work After Baby</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              Returning to Work After Baby: A Practical Guide for New Parents
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              Heading back to work after leave brings a mix of nerves, guilt, and logistics. With a
              little planning, you can make the transition smoother for both you and your baby.
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
                    Returning to work after a baby goes more smoothly when you plan ahead: line up
                    childcare early, do a practice run, build a pumping plan if you nurse, and ease in
                    with a midweek start if you can. Mixed emotions are normal. Be kind to yourself and
                    ask for support when you need it.
                  </p>
                </div>

                <section id="prepare" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Preparing in Advance</h2>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: How do I prepare to return to work after maternity leave?</h3>
                    <p className="text-gray-700 mb-0">
                      Prepare by arranging childcare early, doing a trial day before your first day,
                      starting a milk stash if pumping, practicing the morning routine, and easing in
                      with a shorter first week. Talk to your employer about flexible hours and pumping
                      breaks.
                    </p>
                  </div>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Confirm your start date and any flexible or phased options</li>
                    <li>Sort out childcare and visit before the first day</li>
                    <li>Do a practice morning to time how long things really take</li>
                    <li>Prepare clothes, bags, and bottles the night before</li>
                    <li>Talk with your partner about sharing drop-offs and sick days</li>
                  </ul>
                </section>

                <section id="childcare" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Choosing Childcare</h2>
                  <p className="text-gray-700 mb-4">
                    The right childcare depends on your budget, hours, and comfort. Common options
                    include:
                  </p>
                  <div className="space-y-4 mb-4">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-1 mt-0">Daycare Center</h3>
                      <p className="text-gray-700 mb-0">Structured, social, and regulated, but germs spread more easily and hours are fixed.</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-1 mt-0">Home Daycare</h3>
                      <p className="text-gray-700 mb-0">Smaller groups in a home setting, often more flexible and affordable.</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-1 mt-0">Nanny or Family</h3>
                      <p className="text-gray-700 mb-0">One-on-one care at home, more personal but usually more costly, unless a relative helps.</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-0">
                    Whatever you choose, check references, safety, and how your child settles in.
                  </p>
                </section>

                <section id="pumping" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Pumping at Work</h2>
                  <p className="text-gray-700 mb-4">
                    If you are breastfeeding, a little planning keeps your supply steady:
                  </p>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Build a small freezer stash before you return</li>
                      <li>Pump about every 3 to 4 hours, matching your baby's feeds</li>
                      <li>Ask about a private, clean space and break times</li>
                      <li>Label and store milk safely in a fridge or cooler bag</li>
                      <li>Keep spare parts, bags, and a hands-free bra at work</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-0">
                    Many regions require employers to provide reasonable break time and a private space
                    (not a bathroom) for pumping. Check your local rights.
                  </p>
                </section>

                <section id="emotional" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">The Emotional Side</h2>
                  <p className="text-gray-700 mb-4">
                    It is normal to feel guilt, sadness, or even relief, sometimes all at once. These
                    feelings usually ease as you and your baby settle into the new routine.
                  </p>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> Dana cried on her first drop-off and worried all
                      morning. By the end of the week, her daughter was happily reaching for her
                      caregiver, and Dana felt proud of how well they were both adjusting.
                    </p>
                  </div>
                </section>

                <section id="routine" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Building a New Routine</h2>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Prep bottles, bags, and outfits the night before</li>
                      <li>Build in extra buffer time for unexpected delays</li>
                      <li>Create a short, loving goodbye ritual</li>
                      <li>Protect a little one-on-one time after work</li>
                      <li>Share the mental load and tasks with your partner</li>
                      <li>Lower your standards on housework while you adjust</li>
                    </ul>
                  </div>
                </section>

                <section id="support" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Ask for Support</h2>
                  <p className="text-gray-700 mb-4">
                    Reach out to your doctor or a mental health professional if:
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Sadness or anxiety feels constant or overwhelming</li>
                      <li>You cannot enjoy time with your baby</li>
                      <li>Worry about your baby interferes with work or sleep</li>
                      <li>You feel hopeless or have thoughts of self-harm (seek help right away)</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-0">
                    These can be signs of postpartum depression or anxiety, which are common and
                    treatable.
                  </p>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        When is the best day to return to work?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Many parents find a Wednesday or Thursday start easier than a Monday. A short
                        first week eases you and your baby into the new routine more gently.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        How much milk should I leave for my baby?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Babies typically take about 1 to 1.5 ounces of milk per hour you are away. Your
                        caregiver can adjust based on your baby's cues, and you can fine-tune your stash
                        over the first week.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Will my baby forget me?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        No. Babies form strong, lasting bonds with their parents. Time apart does not
                        weaken your connection, and your reunions become a highlight of the day.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        How can I keep my milk supply up?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Pump regularly while you are away, nurse when you are together, stay hydrated, and
                        avoid long gaps between sessions. Supply usually adjusts within a couple of weeks.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Is it normal to feel relieved to be back?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Yes. Enjoying adult conversation and time for yourself does not make you a bad
                        parent. Many parents feel a healthy mix of missing their baby and enjoying work.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Medical Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational and informational purposes only and is not a
                    substitute for professional medical or legal advice. Talk to your doctor about your
                    wellbeing and check your local laws for parental and pumping rights.
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
  headline: "Returning to Work After Baby: A Practical Guide for New Parents",
  description:
    "A practical guide to returning to work after maternity leave: pumping at work, choosing childcare, emotional prep, and an easier transition for you and baby.",
  image: "https://childbloom.site/images/articles/returning-to-work-after-baby-og.jpg",
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
    "@id": "https://childbloom.site/articles/returning-to-work-after-baby/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When is the best day to return to work after maternity leave?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many parents find a Wednesday or Thursday start easier than a Monday. A short first week eases you and your baby into the new routine more gently.",
      },
    },
    {
      "@type": "Question",
      name: "How much milk should I leave for my baby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Babies typically take about 1 to 1.5 ounces of milk per hour you are away. Your caregiver can adjust based on your baby's cues, and you can fine-tune your stash over the first week.",
      },
    },
    {
      "@type": "Question",
      name: "Will my baby forget me?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Babies form strong, lasting bonds with their parents. Time apart does not weaken your connection, and your reunions become a highlight of the day.",
      },
    },
    {
      "@type": "Question",
      name: "How can I keep my milk supply up after returning to work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pump regularly while you are away, nurse when you are together, stay hydrated, and avoid long gaps between sessions. Supply usually adjusts within a couple of weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Is it normal to feel relieved to be back at work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Enjoying adult conversation and time for yourself does not make you a bad parent. Many parents feel a healthy mix of missing their baby and enjoying work.",
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
