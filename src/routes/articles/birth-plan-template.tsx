import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/birth-plan-template")({
  component: BirthPlanArticle,
  head: () => {
    const url = "https://childbloom.site/articles/birth-plan-template/";
    return seo({
      title: "Birth Plan Template: How to Write One + Free Sample | ChildBloom",
      description:
        "A simple birth plan template with a free sample. Learn what to include, how to keep it flexible, and how to share your birth preferences with your care team.",
      url,
      type: "article",
      publishedTime: "2026-06-12",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/birth-plan-template-og.jpg",
    });
  },
});

function BirthPlanArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "what-is", title: "What Is a Birth Plan?" },
    { id: "why", title: "Why a Birth Plan Helps" },
    { id: "include", title: "What to Include" },
    { id: "sample", title: "Sample Birth Plan" },
    { id: "tips", title: "Tips for a Useful Plan" },
    { id: "flexible", title: "Staying Flexible" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Pregnancy Symptoms by Trimester", slug: "pregnancy-symptoms-by-trimester" },
    { title: "Postpartum Recovery", slug: "postpartum-recovery" },
    { title: "Breastfeeding vs Formula", slug: "breastfeeding-vs-formula" },
    { title: "Newborn Sleep", slug: "newborn-sleep" },
    { title: "Postpartum Mental Health", slug: "postpartum-mental-health" },
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
              <span className="text-gray-700">Birth Plan Template</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              Birth Plan Template: How to Write One (Free Sample)
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              A birth plan is a simple way to share your wishes for labor and birth. Here is what to
              include, a ready-to-use sample, and how to keep your plan flexible when birth takes its
              own path.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>By ChildBloom Medical Team</span>
              <span>•</span>
              <span>Updated June 21, 2026</span>
              <span>•</span>
              <span>11 min read</span>
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
                    A birth plan is a short, one-page note that tells your care team your preferences
                    for labor, pain relief, delivery, and newborn care. Keep it clear and flexible.
                    Birth can change quickly, and the goal is always a safe, healthy mother and baby.
                  </p>
                </div>

                <section id="what-is" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is a Birth Plan?</h2>
                  <p className="text-gray-700 mb-4">
                    A birth plan is a written summary of how you would like your labor and birth to go.
                    It is not a contract or a script. It is a helpful way to start a conversation with
                    your midwife or doctor and to let your support team know your wishes.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What is a birth plan?</h3>
                    <p className="text-gray-700 mb-0">
                      A birth plan is a short written document that lists your preferences for labor,
                      pain relief, delivery, and care of your newborn. It helps your care team
                      understand your wishes while staying open to changes for safety.
                    </p>
                  </div>
                </section>

                <section id="why" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why a Birth Plan Helps</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>It helps you learn about your choices before labor begins</li>
                    <li>It makes it easier to talk with your care team</li>
                    <li>It guides your partner or support person to speak up for you</li>
                    <li>It can lower anxiety by helping you feel prepared</li>
                  </ul>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> Maria wrote a one-page plan and shared it at her
                      36-week visit. When labor moved faster than expected, her partner used the plan to
                      remind the team she wanted skin-to-skin contact right after birth.
                    </p>
                  </div>
                </section>

                <section id="include" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Include</h2>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Labor Preferences</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Who you want in the room with you</li>
                    <li>Moving around, positions, or using a birth ball</li>
                    <li>Lighting, music, or a calm environment</li>
                    <li>Eating and drinking during labor, if allowed</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Pain Relief</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Natural methods like breathing, water, or massage</li>
                    <li>Medical options such as gas, an epidural, or other pain relief</li>
                    <li>Whether you want to be offered pain relief or to ask for it</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Delivery and Newborn Care</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Preferences for pushing and delivery positions</li>
                    <li>Delayed cord clamping and who cuts the cord</li>
                    <li>Immediate skin-to-skin contact</li>
                    <li>Feeding choice: breast, formula, or both</li>
                    <li>Vitamin K, newborn checks, and any cultural or religious wishes</li>
                  </ul>
                </section>

                <section id="sample" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Birth Plan</h2>
                  <div className="bg-gray-50 p-6 rounded-lg mb-4">
                    <p className="text-gray-700 mb-3"><strong>Name:</strong> ____________  <strong>Due date:</strong> ____________</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>I would like my partner with me at all times.</li>
                      <li>I prefer a calm, dimly lit room and my own playlist.</li>
                      <li>I would like to move freely and use a birth ball.</li>
                      <li>Please offer water and let me stay hydrated.</li>
                      <li>I would like to try breathing and water first, then an epidural if I ask.</li>
                      <li>I want delayed cord clamping if it is safe.</li>
                      <li>I want immediate skin-to-skin contact and to try breastfeeding.</li>
                      <li>I am open to changes if you advise them for safety.</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-0">
                    Keep it to one page and use simple bullet points. Your team is busy, so a short,
                    clear plan is easiest to follow.
                  </p>
                </section>

                <section id="tips" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Tips for a Useful Plan</h2>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Talk it through with your midwife or doctor before birth</li>
                      <li>Keep it short, ideally one page</li>
                      <li>List your top priorities first</li>
                      <li>Bring printed copies in your hospital bag</li>
                      <li>Use positive, polite language like "I would like"</li>
                      <li>Include a plan B in case of a cesarean birth</li>
                    </ul>
                  </div>
                </section>

                <section id="flexible" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Staying Flexible</h2>
                  <p className="text-gray-700 mb-4">
                    Birth rarely goes exactly to plan, and that is normal. Your care team may suggest
                    changes to keep you and your baby safe. A plan that says "I am open to changes if
                    you advise them" helps you feel calm if things shift.
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Important:</strong> If your team recommends a change such as a cesarean or
                      assisted delivery, it is for safety. A birth plan should guide your wishes, never
                      override urgent medical advice.
                    </p>
                  </div>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        When should I write my birth plan?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Most people write their birth plan around 32 to 36 weeks. This gives you time to
                        learn your options and discuss the plan at a prenatal visit before labor starts.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Do I have to follow my birth plan exactly?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        No. A birth plan lists your preferences, not strict rules. Labor can change
                        quickly, and your care team may suggest a different path to keep you and your
                        baby safe.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        How long should a birth plan be?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Aim for one page. A short, clear plan with bullet points is easiest for a busy
                        care team to read and follow during labor.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Should I include a cesarean plan?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Yes. Adding a few wishes for a cesarean, such as skin-to-skin in theater if
                        possible, helps you feel prepared even if your birth changes direction.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Who should get a copy?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Give a copy to your midwife or doctor, your birth partner, and keep one in your
                        hospital bag. Sharing it early means everyone knows your wishes.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Medical Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational purposes only and is not a substitute for
                    professional medical advice. Always discuss your birth plan with your midwife or
                    doctor and follow their guidance during labor and birth.
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
  headline: "Birth Plan Template: How to Write One (Free Sample)",
  description:
    "A simple birth plan template with a free sample. Learn what to include, how to keep it flexible, and how to share your birth preferences with your care team.",
  image: "https://childbloom.site/images/articles/birth-plan-template-og.jpg",
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
    "@id": "https://childbloom.site/articles/birth-plan-template/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "When should I write my birth plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most people write their birth plan around 32 to 36 weeks. This gives you time to learn your options and discuss the plan at a prenatal visit before labor starts.",
      },
    },
    {
      "@type": "Question",
      name: "Do I have to follow my birth plan exactly?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A birth plan lists your preferences, not strict rules. Labor can change quickly, and your care team may suggest a different path to keep you and your baby safe.",
      },
    },
    {
      "@type": "Question",
      name: "How long should a birth plan be?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Aim for one page. A short, clear plan with bullet points is easiest for a busy care team to read and follow during labor.",
      },
    },
    {
      "@type": "Question",
      name: "Should I include a cesarean plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Adding a few wishes for a cesarean, such as skin-to-skin in theater if possible, helps you feel prepared even if your birth changes direction.",
      },
    },
    {
      "@type": "Question",
      name: "Who should get a copy of my birth plan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Give a copy to your midwife or doctor, your birth partner, and keep one in your hospital bag. Sharing it early means everyone knows your wishes.",
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
