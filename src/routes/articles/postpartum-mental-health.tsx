import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/postpartum-mental-health")({
  component: PostpartumMentalHealthArticle,
  head: () => {
    const url = "https://childbloom.site/articles/postpartum-mental-health/";
    return seo({
      title: "Postpartum Mental Health: PPD, PPA & Getting Help | ChildBloom",
      description:
        "Learn to recognize postpartum depression and anxiety, tell baby blues from PPD, understand causes and treatment, and find out where to get help fast.",
      url,
      type: "article",
      publishedTime: "2026-06-12",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/postpartum-mental-health-og.jpg",
    });
  },
});

function PostpartumMentalHealthArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "what-is", title: "What Is Postpartum Mental Health?" },
    { id: "baby-blues", title: "Baby Blues vs Depression" },
    { id: "symptoms", title: "Symptoms of PPD and PPA" },
    { id: "causes", title: "Causes and Risk Factors" },
    { id: "treatment", title: "Treatment Options" },
    { id: "support", title: "How to Support Yourself" },
    { id: "warning-signs", title: "Emergency Warning Signs" },
    { id: "when-to-call", title: "When to Get Help" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Postpartum Recovery", slug: "postpartum-recovery" },
    { title: "Postpartum Hair Loss", slug: "postpartum-hair-loss" },
    { title: "Returning to Work After Baby", slug: "returning-to-work-after-baby" },
    { title: "Newborn Sleep", slug: "newborn-sleep" },
    { title: "Breastfeeding vs Formula", slug: "breastfeeding-vs-formula" },
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
              <span className="text-gray-700">Postpartum Mental Health</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              Postpartum Mental Health: Recognizing PPD, PPA, and Getting Help
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              Becoming a parent is joyful and hard at the same time. Postpartum depression and anxiety
              are common and treatable. Knowing the signs helps you get support sooner.
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
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8">
                  <h2 className="text-lg font-bold text-red-900 mt-0 mb-2">If You Are in Crisis</h2>
                  <p className="text-red-900 mb-0">
                    If you have thoughts of harming yourself or your baby, get help now. In the US, call
                    or text <strong>988</strong> (Suicide and Crisis Lifeline). In the UK, call{" "}
                    <strong>111</strong>, or <strong>999</strong> in an emergency. Or go to your nearest
                    emergency room. You are not alone, and help is available.
                  </p>
                </div>

                <div id="quick-answer" className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg mb-8 scroll-mt-24">
                  <h2 className="text-lg font-bold text-pink-900 mt-0 mb-2">Quick Answer</h2>
                  <p className="text-pink-900 font-medium text-lg mb-0">
                    Postpartum depression (PPD) and postpartum anxiety (PPA) are common mental health
                    conditions that can affect new parents in the first year after birth. Unlike the
                    short-lived baby blues, they last longer and interfere with daily life. They are not
                    your fault, and they respond well to therapy, support, and sometimes medication.
                  </p>
                </div>

                <section id="what-is" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is Postpartum Mental Health?</h2>
                  <p className="text-gray-700 mb-4">
                    Postpartum mental health covers the emotional wellbeing of parents after a baby
                    arrives. Hormone shifts, sleep loss, and the huge change of caring for a newborn can
                    affect mood. About 1 in 7 women experience postpartum depression, and many also have
                    anxiety. Fathers and partners can be affected too.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What is postpartum depression?</h3>
                    <p className="text-gray-700 mb-0">
                      Postpartum depression is a mood disorder that can develop within the first year
                      after birth. It causes lasting sadness, anxiety, exhaustion, and difficulty bonding
                      with the baby. It is a medical condition, not a weakness, and it improves with
                      treatment such as therapy and support.
                    </p>
                  </div>
                </section>

                <section id="baby-blues" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Baby Blues vs Depression</h2>
                  <div className="space-y-4 mb-4">
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-1 mt-0">Baby Blues</h3>
                      <p className="text-gray-700 mb-0">Affects up to 80% of new mothers. Starts in the first few days, peaks around day 5, and fades by two weeks. Includes tearfulness, mood swings, and feeling overwhelmed.</p>
                    </div>
                    <div className="bg-gray-50 p-5 rounded-lg">
                      <h3 className="font-semibold text-gray-900 mb-1 mt-0">Postpartum Depression</h3>
                      <p className="text-gray-700 mb-0">Lasts longer than two weeks and is more intense. It interferes with daily life and bonding, and it needs support and treatment rather than just time.</p>
                    </div>
                  </div>
                </section>

                <section id="symptoms" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Symptoms of PPD and PPA</h2>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Postpartum Depression</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Persistent sadness, emptiness, or hopelessness</li>
                    <li>Crying often, sometimes for no clear reason</li>
                    <li>Loss of interest in things you used to enjoy</li>
                    <li>Trouble bonding with your baby</li>
                    <li>Severe fatigue or changes in appetite and sleep</li>
                    <li>Feelings of guilt, worthlessness, or being a "bad parent"</li>
                  </ul>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Postpartum Anxiety</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Constant worry that is hard to control</li>
                    <li>Racing thoughts and trouble relaxing</li>
                    <li>Feeling on edge or easily startled</li>
                    <li>Physical signs like a racing heart or dizziness</li>
                    <li>Fear that something terrible will happen to the baby</li>
                  </ul>
                </section>

                <section id="causes" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Causes and Risk Factors</h2>
                  <p className="text-gray-700 mb-4">
                    There is no single cause. Risk is higher with:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>A personal or family history of depression or anxiety</li>
                    <li>A difficult pregnancy or birth experience</li>
                    <li>Little support at home</li>
                    <li>Major life stress or money worries</li>
                    <li>Sleep deprivation and hormone changes</li>
                    <li>A baby with health needs or feeding difficulties</li>
                  </ul>
                </section>

                <section id="treatment" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Treatment Options</h2>
                  <p className="text-gray-700 mb-4">
                    Treatment works, and most parents feel much better with the right help:
                  </p>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li><strong>Talk therapy:</strong> Counseling such as CBT is often first-line</li>
                      <li><strong>Support groups:</strong> Connecting with other parents reduces isolation</li>
                      <li><strong>Medication:</strong> Some antidepressants are considered safe while breastfeeding; your doctor can advise</li>
                      <li><strong>Practical support:</strong> Help with sleep, meals, and childcare</li>
                      <li><strong>Lifestyle steps:</strong> Gentle activity, sunlight, and regular meals</li>
                    </ul>
                  </div>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> Three months after birth, Maria still felt numb
                      and anxious every day. She mentioned it at her baby's checkup. Her doctor referred
                      her to a therapist and connected her with a support group. Within weeks she began
                      to feel like herself again.
                    </p>
                  </div>
                </section>

                <section id="support" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Support Yourself</h2>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Tell someone you trust how you really feel</li>
                      <li>Rest whenever you can and share night feeds if possible</li>
                      <li>Accept offers of help with meals and chores</li>
                      <li>Lower your expectations; "good enough" is enough</li>
                      <li>Get outside for fresh air and a short walk</li>
                      <li>Reach out to your provider early, not as a last resort</li>
                    </ul>
                  </div>
                </section>

                <section id="warning-signs" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Emergency Warning Signs</h2>
                  <p className="text-gray-700 mb-4">
                    Get help immediately if you or someone you love has:
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Thoughts of harming yourself or your baby</li>
                      <li>Thoughts that your family would be better off without you</li>
                      <li>Seeing or hearing things that are not there</li>
                      <li>Confusion, paranoia, or feeling out of touch with reality</li>
                      <li>Inability to sleep at all, even when exhausted, with agitation</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-0">
                    These can be signs of postpartum psychosis, a rare medical emergency. Seek urgent
                    care right away.
                  </p>
                </section>

                <section id="when-to-call" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Get Help</h2>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Low mood or anxiety that lasts more than two weeks</li>
                      <li>Feelings that get in the way of caring for yourself or your baby</li>
                      <li>Trouble bonding with your baby</li>
                      <li>Panic attacks or constant, uncontrollable worry</li>
                      <li>Any thoughts of self-harm (seek help right away)</li>
                    </ul>
                  </div>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        How common is postpartum depression?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        About 1 in 7 women experience postpartum depression. Many more have postpartum
                        anxiety. It is one of the most common complications of childbirth, and it is very
                        treatable.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Can fathers and partners get postpartum depression?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Yes. Around 1 in 10 fathers and partners experience depression after a baby
                        arrives. The same support and treatment options can help them too.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Can I take antidepressants while breastfeeding?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Several antidepressants are considered compatible with breastfeeding. Your doctor
                        can help you weigh the benefits and choose an option that fits your situation.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        How long does postpartum depression last?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Without treatment it can last many months. With therapy, support, and sometimes
                        medication, most people start to feel better within weeks to a few months. Early
                        help speeds recovery.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Will having PPD affect my baby?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Untreated depression can affect bonding and your baby's development, which is why
                        getting help matters. Treatment protects both you and your baby, and many parents
                        go on to bond beautifully.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Medical Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational purposes only and is not a substitute for
                    professional medical advice. If you are struggling with your mental health, please
                    reach out to your doctor or a crisis line. You deserve support.
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
  headline: "Postpartum Mental Health: Recognizing PPD, PPA, and Getting Help",
  description:
    "Learn to recognize postpartum depression and anxiety, tell baby blues from PPD, understand causes and treatment, and find out where to get help fast.",
  image: "https://childbloom.site/images/articles/postpartum-mental-health-og.jpg",
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
    "@id": "https://childbloom.site/articles/postpartum-mental-health/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How common is postpartum depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "About 1 in 7 women experience postpartum depression. Many more have postpartum anxiety. It is one of the most common complications of childbirth, and it is very treatable.",
      },
    },
    {
      "@type": "Question",
      name: "Can fathers and partners get postpartum depression?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Around 1 in 10 fathers and partners experience depression after a baby arrives. The same support and treatment options can help them too.",
      },
    },
    {
      "@type": "Question",
      name: "Can I take antidepressants while breastfeeding?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Several antidepressants are considered compatible with breastfeeding. Your doctor can help you weigh the benefits and choose an option that fits your situation.",
      },
    },
    {
      "@type": "Question",
      name: "How long does postpartum depression last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Without treatment it can last many months. With therapy, support, and sometimes medication, most people start to feel better within weeks to a few months. Early help speeds recovery.",
      },
    },
    {
      "@type": "Question",
      name: "Will having postpartum depression affect my baby?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Untreated depression can affect bonding and your baby's development, which is why getting help matters. Treatment protects both you and your baby, and many parents go on to bond beautifully.",
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
