import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/postpartum-hair-loss")({
  component: PostpartumHairLossArticle,
  head: () => {
    const url = "https://childbloom.site/articles/postpartum-hair-loss/";
    return seo({
      title: "Postpartum Hair Loss: Why It Happens & How to Cope | ChildBloom",
      description:
        "Postpartum hair loss explained: why it happens, when it peaks, how long it lasts, and gentle, practical ways to manage hair shedding after pregnancy.",
      url,
      type: "article",
      publishedTime: "2026-06-12",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/postpartum-hair-loss-og.jpg",
    });
  },
});

function PostpartumHairLossArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "what-is", title: "What Is Postpartum Hair Loss?" },
    { id: "why", title: "Why It Happens" },
    { id: "timeline", title: "When It Peaks and Ends" },
    { id: "manage", title: "How to Manage It" },
    { id: "avoid", title: "What to Avoid" },
    { id: "when-to-call", title: "When to Call a Doctor" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Postpartum Recovery", slug: "postpartum-recovery" },
    { title: "Postpartum Mental Health", slug: "postpartum-mental-health" },
    { title: "Returning to Work After Baby", slug: "returning-to-work-after-baby" },
    { title: "Breastfeeding vs Formula", slug: "breastfeeding-vs-formula" },
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
              <span className="text-gray-700">Postpartum Hair Loss</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              Postpartum Hair Loss: Why It Happens and How to Cope
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              Clumps of hair in the shower a few months after birth can be alarming. The good news:
              postpartum shedding is normal, temporary, and not a sign that anything is wrong.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>By ChildBloom Medical Team</span>
              <span>•</span>
              <span>Updated June 21, 2026</span>
              <span>•</span>
              <span>10 min read</span>
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
                    Postpartum hair loss, called telogen effluvium, is normal shedding caused by falling
                    estrogen levels after birth. It usually starts around 2 to 4 months postpartum,
                    peaks around month 4, and settles by 6 to 12 months. You do not lose more hair than
                    you grew in pregnancy, and no treatment is needed.
                  </p>
                </div>

                <section id="what-is" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is Postpartum Hair Loss?</h2>
                  <p className="text-gray-700 mb-4">
                    During pregnancy, high hormone levels keep more hair in the growing phase, so hair
                    often feels thick and full. After birth, those hormones drop, and the extra hair
                    moves into the shedding phase all at once. This sudden shed is called telogen
                    effluvium.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What causes postpartum hair loss?</h3>
                    <p className="text-gray-700 mb-0">
                      Postpartum hair loss is caused by a drop in estrogen after birth. Pregnancy
                      hormones keep extra hair from falling out, so once they fall, that hair sheds at
                      once. It is temporary and usually resolves within a year without treatment.
                    </p>
                  </div>
                </section>

                <section id="why" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why It Happens</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Estrogen rises in pregnancy and pauses normal hair shedding</li>
                    <li>After birth, estrogen falls quickly</li>
                    <li>Hair that "paused" all enters the shedding phase together</li>
                    <li>Stress, sleep loss, and low iron can add to the effect</li>
                  </ul>
                  <p className="text-gray-700 mb-0">
                    It can feel dramatic, but you are simply catching up on shedding you skipped during
                    pregnancy.
                  </p>
                </section>

                <section id="timeline" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When It Peaks and Ends</h2>
                  <div className="space-y-4 mb-4">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-1 mt-0">Months 2 to 4</h3>
                      <p className="text-gray-700 mb-0">Shedding usually begins. You may notice more hair in the brush, shower, or on your pillow.</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-1 mt-0">Around Month 4</h3>
                      <p className="text-gray-700 mb-0">Shedding often peaks. This is when many parents feel most worried.</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-1 mt-0">Months 6 to 12</h3>
                      <p className="text-gray-700 mb-0">Shedding slows and stops. Most women see hair return to its usual fullness by their baby's first birthday.</p>
                    </div>
                  </div>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> When Leah's hair started coming out in handfuls
                      at four months, she feared something was wrong. Her doctor reassured her it was
                      classic postpartum shedding. By her son's first birthday, her hairline had filled
                      back in with soft new growth.
                    </p>
                  </div>
                </section>

                <section id="manage" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Manage It</h2>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Eat a balanced diet with protein, iron, and vitamins</li>
                      <li>Keep taking your prenatal or postnatal vitamin if advised</li>
                      <li>Be gentle: use a wide-tooth comb and avoid tight styles</li>
                      <li>Try a volumizing shampoo or a flattering shorter cut</li>
                      <li>Use a soft scrunchie instead of tight elastics</li>
                      <li>Be patient; new growth often appears as short baby hairs</li>
                    </ul>
                  </div>
                </section>

                <section id="avoid" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Avoid</h2>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Tight ponytails, braids, or buns that pull on the roots</li>
                      <li>Harsh heat styling and strong chemical treatments</li>
                      <li>Crash diets, which can worsen shedding</li>
                      <li>Unproven "miracle" hair loss products</li>
                    </ul>
                  </div>
                </section>

                <section id="when-to-call" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call a Doctor</h2>
                  <p className="text-gray-700 mb-4">
                    Postpartum shedding is normal, but check with your doctor if:
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Hair loss continues heavily past 12 months</li>
                      <li>You see bald patches or your scalp shows clearly</li>
                      <li>You also feel very tired, cold, or low in mood (possible thyroid or anemia)</li>
                      <li>Your scalp is red, itchy, scaly, or sore</li>
                      <li>You are worried something other than normal shedding is going on</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-0">
                    Thyroid problems and low iron are common after birth and can affect hair, so a
                    simple blood test may help.
                  </p>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Is postpartum hair loss permanent?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        No. It is temporary. Most women see their hair return to its normal thickness
                        within 6 to 12 months after birth as the growth cycle resets.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Will breastfeeding make hair loss worse?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        No. Breastfeeding does not cause or worsen postpartum hair loss. The shedding is
                        driven by hormone changes after birth, not by nursing.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Can vitamins stop the shedding?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Vitamins support overall hair health but will not stop normal postpartum
                        shedding, which runs its course. A balanced diet and treating any iron or thyroid
                        issue are most helpful.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Should I cut my hair?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        A shorter style can make thinning less noticeable and easier to manage with a
                        baby, but it is a personal choice. Cutting hair does not change how much you
                        shed.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        When should I worry?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        See your doctor if shedding lasts beyond a year, you develop bald patches, or you
                        have other symptoms like fatigue or feeling cold, which could point to a thyroid
                        or iron problem.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Medical Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational purposes only and is not a substitute for
                    professional medical advice. Talk to your doctor about hair loss that is severe,
                    lasts beyond a year, or comes with other symptoms.
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
  headline: "Postpartum Hair Loss: Why It Happens and How to Cope",
  description:
    "Postpartum hair loss explained: why it happens, when it peaks, how long it lasts, and gentle, practical ways to manage hair shedding after pregnancy.",
  image: "https://childbloom.site/images/articles/postpartum-hair-loss-og.jpg",
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
    "@id": "https://childbloom.site/articles/postpartum-hair-loss/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is postpartum hair loss permanent?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. It is temporary. Most women see their hair return to its normal thickness within 6 to 12 months after birth as the growth cycle resets.",
      },
    },
    {
      "@type": "Question",
      name: "Will breastfeeding make hair loss worse?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Breastfeeding does not cause or worsen postpartum hair loss. The shedding is driven by hormone changes after birth, not by nursing.",
      },
    },
    {
      "@type": "Question",
      name: "Can vitamins stop the shedding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Vitamins support overall hair health but will not stop normal postpartum shedding, which runs its course. A balanced diet and treating any iron or thyroid issue are most helpful.",
      },
    },
    {
      "@type": "Question",
      name: "Should I cut my hair?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A shorter style can make thinning less noticeable and easier to manage with a baby, but it is a personal choice. Cutting hair does not change how much you shed.",
      },
    },
    {
      "@type": "Question",
      name: "When should I worry about postpartum hair loss?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "See your doctor if shedding lasts beyond a year, you develop bald patches, or you have other symptoms like fatigue or feeling cold, which could point to a thyroid or iron problem.",
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
