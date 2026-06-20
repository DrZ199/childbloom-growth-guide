import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/pregnancy-symptoms-by-trimester")({
  component: PregnancySymptomsArticle,
  head: () => {
    const url = "https://childbloom.site/articles/pregnancy-symptoms-by-trimester/";
    return seo({
      title: "Pregnancy Symptoms by Trimester: Stage-by-Stage Guide | ChildBloom",
      description:
        "A trimester-by-trimester guide to pregnancy symptoms, what is normal, how to find relief, and the warning signs that mean you should call your doctor.",
      url,
      type: "article",
      publishedTime: "2026-06-12",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/pregnancy-symptoms-by-trimester-og.jpg",
    });
  },
});

function PregnancySymptomsArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "overview", title: "What to Expect Overall" },
    { id: "first", title: "First Trimester (Weeks 1-12)" },
    { id: "second", title: "Second Trimester (Weeks 13-27)" },
    { id: "third", title: "Third Trimester (Weeks 28-40)" },
    { id: "relief", title: "Easing Common Symptoms" },
    { id: "warning", title: "Warning Signs to Never Ignore" },
    { id: "when-to-call", title: "When to Call a Doctor" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Birth Plan Template", slug: "birth-plan-template" },
    { title: "Postpartum Recovery", slug: "postpartum-recovery" },
    { title: "Postpartum Mental Health", slug: "postpartum-mental-health" },
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
              <span className="text-gray-700">Pregnancy Symptoms by Trimester</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              Pregnancy Symptoms by Trimester: A Stage-by-Stage Guide
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              Every pregnancy is different, but the body tends to follow a pattern. Here is what is
              common in each trimester, how to feel better, and the symptoms that mean you should
              call your care provider.
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
                    The first trimester often brings nausea, tiredness, and tender breasts. The second
                    trimester usually feels easier, with more energy and the first baby movements. The
                    third trimester brings a bigger bump, back pain, and trouble sleeping. Bleeding,
                    severe pain, a bad headache, or reduced baby movement always need urgent medical
                    advice.
                  </p>
                </div>

                <section id="overview" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Expect Overall</h2>
                  <p className="text-gray-700 mb-4">
                    Pregnancy is divided into three trimesters, each about 13 weeks long. Your body
                    changes quickly as your baby grows, and the hormones that support pregnancy can
                    affect almost every part of how you feel.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Symptoms vary widely. Some people feel sick for weeks; others barely notice. Having
                    many symptoms or very few does not tell you whether your pregnancy is healthy. Your
                    prenatal visits, scans, and tests are what confirm that.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What are the trimesters of pregnancy?</h3>
                    <p className="text-gray-700 mb-0">
                      Pregnancy has three trimesters. The first is weeks 1 to 12, the second is weeks 13
                      to 27, and the third is weeks 28 to 40. Each stage brings different symptoms as
                      the baby develops and the body adjusts to support the pregnancy.
                    </p>
                  </div>
                </section>

                <section id="first" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">First Trimester (Weeks 1-12)</h2>
                  <p className="text-gray-700 mb-4">
                    Hormone levels rise fast in early pregnancy, which is why many symptoms appear now.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Common Symptoms</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Nausea or vomiting, often called morning sickness (it can happen any time)</li>
                    <li>Strong tiredness and the need for more sleep</li>
                    <li>Tender, swollen breasts</li>
                    <li>Needing to pee more often</li>
                    <li>Food cravings or strong dislikes and a heightened sense of smell</li>
                    <li>Mood swings as hormones shift</li>
                    <li>Mild cramping and light spotting around the time of implantation</li>
                  </ul>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> Priya felt exhausted and queasy by week six and
                      worried something was wrong. Her midwife explained that strong early symptoms are
                      common and usually ease by the second trimester, which they did.
                    </p>
                  </div>
                </section>

                <section id="second" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Second Trimester (Weeks 13-27)</h2>
                  <p className="text-gray-700 mb-4">
                    Many people call this the "honeymoon" stage. Nausea often fades and energy returns.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Common Symptoms</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>First flutters of baby movement, usually between weeks 16 and 24</li>
                    <li>A visible, growing bump</li>
                    <li>Skin changes, such as a dark line on the belly or darker patches on the face</li>
                    <li>Round ligament pain, a stretching feeling low in the belly</li>
                    <li>Mild swelling in the feet and ankles</li>
                    <li>Heartburn or indigestion</li>
                    <li>Nasal congestion or mild nosebleeds</li>
                  </ul>
                </section>

                <section id="third" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Third Trimester (Weeks 28-40)</h2>
                  <p className="text-gray-700 mb-4">
                    Your baby grows quickly and prepares for birth. The extra size brings new aches.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Common Symptoms</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Back pain and pelvic pressure</li>
                    <li>Trouble sleeping and frequent night waking</li>
                    <li>Shortness of breath as the baby pushes on the lungs</li>
                    <li>Swelling in the hands, feet, and ankles</li>
                    <li>Braxton Hicks contractions, or practice tightenings</li>
                    <li>Frequent urination as the baby drops lower</li>
                    <li>Leaking colostrum from the breasts</li>
                  </ul>
                  <div className="bg-gray-50 p-5 rounded-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      In the final weeks, learn the difference between practice contractions and real
                      labor. Real labor contractions get longer, stronger, and closer together and do
                      not stop when you rest or change position.
                    </p>
                  </div>
                </section>

                <section id="relief" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Easing Common Symptoms</h2>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li><strong>Nausea:</strong> eat small, frequent meals; try dry crackers and ginger; sip fluids</li>
                      <li><strong>Tiredness:</strong> rest when you can and ask for help with daily tasks</li>
                      <li><strong>Heartburn:</strong> eat smaller meals and avoid lying down right after eating</li>
                      <li><strong>Back pain:</strong> use good posture, wear supportive shoes, and try a pregnancy pillow</li>
                      <li><strong>Swelling:</strong> put your feet up and stay hydrated</li>
                      <li><strong>Constipation:</strong> eat fiber, drink water, and stay active</li>
                      <li>Always check with your provider before taking any medicine or supplement</li>
                    </ul>
                  </div>
                </section>

                <section id="warning" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Warning Signs to Never Ignore</h2>
                  <p className="text-gray-700 mb-4">
                    Some symptoms can signal a serious problem. Get urgent care if you have any of these:
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Vaginal bleeding or fluid leaking from the vagina</li>
                      <li>Severe or constant belly pain</li>
                      <li>A bad headache that does not go away, or vision changes like blurring or spots</li>
                      <li>Sudden swelling of the face, hands, or feet</li>
                      <li>Reduced or no baby movement in the third trimester</li>
                      <li>High fever, chills, or pain when peeing</li>
                      <li>Severe vomiting that stops you keeping fluids down</li>
                      <li>Trouble breathing, chest pain, or fainting</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-0">
                    A sudden, severe headache with swelling and vision changes can be a sign of
                    preeclampsia, which needs immediate care.
                  </p>
                </section>

                <section id="when-to-call" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call a Doctor</h2>
                  <p className="text-gray-700 mb-4">
                    Beyond the emergencies above, contact your midwife or doctor if you:
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Feel your baby is moving less than usual</li>
                      <li>Have contractions before 37 weeks</li>
                      <li>Feel very anxious, low, or unable to cope</li>
                      <li>Are unsure whether a symptom is normal</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-0">
                    You never need a "good enough" reason to call. Your care team would always rather
                    check and reassure you than have you worry alone.
                  </p>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Which trimester is hardest?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        It varies. Many find the first trimester hardest because of nausea and tiredness,
                        while others struggle most in the third trimester due to size and poor sleep. The
                        second trimester is often the most comfortable.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Is it normal to have very few symptoms?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Yes. Some people feel very few symptoms and still have a perfectly healthy
                        pregnancy. Your prenatal checkups and scans are the best way to confirm your baby
                        is doing well.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        When will I feel my baby move?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Most people feel the first movements between weeks 16 and 24. First-time parents
                        often notice them later. By the third trimester, you should feel regular movement
                        each day.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Are Braxton Hicks contractions normal?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Yes. These practice contractions are common in the third trimester. They are
                        usually irregular and painless. Real labor contractions get stronger, longer, and
                        closer together over time.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        When should I worry about a symptom?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Call right away for bleeding, fluid leaking, severe pain, a bad headache, vision
                        changes, sudden swelling, or reduced baby movement. When in doubt, always contact
                        your care provider.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Medical Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational purposes only and is not a substitute for
                    professional medical advice. Always follow the guidance of your midwife or doctor
                    and seek urgent care for any warning signs.
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
  headline: "Pregnancy Symptoms by Trimester: A Stage-by-Stage Guide",
  description:
    "A trimester-by-trimester guide to pregnancy symptoms, what is normal, how to find relief, and the warning signs that mean you should call your doctor.",
  image: "https://childbloom.site/images/articles/pregnancy-symptoms-by-trimester-og.jpg",
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
    "@id": "https://childbloom.site/articles/pregnancy-symptoms-by-trimester/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Which trimester is hardest?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It varies. Many find the first trimester hardest because of nausea and tiredness, while others struggle most in the third trimester due to size and poor sleep. The second trimester is often the most comfortable.",
      },
    },
    {
      "@type": "Question",
      name: "Is it normal to have very few pregnancy symptoms?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Some people feel very few symptoms and still have a perfectly healthy pregnancy. Prenatal checkups and scans are the best way to confirm your baby is doing well.",
      },
    },
    {
      "@type": "Question",
      name: "When will I feel my baby move?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most people feel the first movements between weeks 16 and 24. First-time parents often notice them later. By the third trimester, you should feel regular movement each day.",
      },
    },
    {
      "@type": "Question",
      name: "Are Braxton Hicks contractions normal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. These practice contractions are common in the third trimester. They are usually irregular and painless. Real labor contractions get stronger, longer, and closer together over time.",
      },
    },
    {
      "@type": "Question",
      name: "When should I worry about a pregnancy symptom?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Call right away for bleeding, fluid leaking, severe pain, a bad headache, vision changes, sudden swelling, or reduced baby movement. When in doubt, always contact your care provider.",
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
