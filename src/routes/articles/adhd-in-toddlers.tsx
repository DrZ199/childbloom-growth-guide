import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/adhd-in-toddlers")({
  component: AdhdInToddlersArticle,
  head: () => {
    const url = "https://childbloom.site/articles/adhd-in-toddlers/";
    return seo({
      title: "ADHD in Toddlers: Signs, Causes & When to Worry | ChildBloom",
      description:
        "Can toddlers have ADHD? Learn the early signs, what is normal toddler behavior, causes, risk factors, and when to talk to your pediatrician.",
      url,
      type: "article",
      publishedTime: "2026-06-12",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/adhd-in-toddlers-og.jpg",
    });
  },
});

function AdhdInToddlersArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "what-is-adhd", title: "What Is ADHD?" },
    { id: "normal-vs-concern", title: "Normal Behavior vs. Concern" },
    { id: "signs", title: "Early Signs in Toddlers" },
    { id: "causes", title: "Causes and Risk Factors" },
    { id: "diagnosis", title: "How ADHD Is Diagnosed" },
    { id: "support", title: "How to Support Your Child" },
    { id: "when-to-call", title: "When to Call a Doctor" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Signs of Autism in Toddlers", slug: "signs-of-autism-in-toddlers" },
    { title: "Toddler Tantrums", slug: "toddler-tantrums" },
    { title: "Early Intervention", slug: "early-intervention" },
    { title: "Child Development Milestones", slug: "child-development-milestones" },
    { title: "Sensory Processing Disorder", slug: "sensory-processing-disorder" },
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
              <span className="text-gray-700">ADHD in Toddlers</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              ADHD in Toddlers: Signs, Causes, and When to Worry
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              Toddlers are naturally active and impulsive, so how do you tell normal behavior from a
              possible attention concern? Here is a calm, evidence-based guide for parents.
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
                    ADHD is rarely diagnosed before age 4 because high energy, short attention, and
                    impulsivity are normal in toddlers. Doctors look for behavior that is far more
                    intense than peers and disrupts daily life. If you have concerns, track patterns
                    and talk to your pediatrician rather than self-diagnosing.
                  </p>
                </div>

                <section id="what-is-adhd" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is ADHD?</h2>
                  <p className="text-gray-700 mb-4">
                    ADHD (attention-deficit/hyperactivity disorder) is a neurodevelopmental condition
                    that affects attention, activity level, and impulse control. It is one of the most
                    common childhood conditions, but it is usually identified during the preschool or
                    school years, not infancy.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: Can toddlers have ADHD?</h3>
                    <p className="text-gray-700 mb-0">
                      Toddlers can show early traits linked to ADHD, but a reliable diagnosis is rarely
                      made before age 4. High energy, impulsiveness, and a short attention span are
                      normal at this age. Doctors look for behavior that is far more extreme than peers
                      and interferes with daily life across multiple settings.
                    </p>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The American Academy of Pediatrics (AAP) guidelines focus on diagnosing ADHD from
                    around age 4 onward. Before then, behavior is best described as a pattern to watch,
                    not a diagnosis.
                  </p>
                </section>

                <section id="normal-vs-concern" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Normal Toddler Behavior vs. a Concern</h2>
                  <p className="text-gray-700 mb-4">
                    Almost every toddler is busy, distractible, and impulsive. That is healthy
                    development, not a disorder. The difference is in degree and impact.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 border border-green-200 p-5 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-2 mt-0">Typical Toddler</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-0">
                        <li>Runs, climbs, and rarely sits still</li>
                        <li>Has a short attention span for new tasks</li>
                        <li>Acts on impulse, then learns over time</li>
                        <li>Can focus on something they enjoy</li>
                        <li>Calms with comfort and routine</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg">
                      <h3 className="font-semibold text-amber-900 mb-2 mt-0">Worth Watching</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-0">
                        <li>Activity far beyond same-age peers</li>
                        <li>Cannot focus even on favorite play</li>
                        <li>Constant, risky impulsivity</li>
                        <li>Behavior disrupts home and childcare</li>
                        <li>Little progress with routine and support</li>
                      </ul>
                    </div>
                  </div>
                </section>

                <section id="signs" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Early Signs in Toddlers</h2>
                  <p className="text-gray-700 mb-4">
                    These traits, when extreme and persistent, may be worth discussing with your
                    pediatrician. One sign alone is not a diagnosis.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Constant motion that is hard to interrupt</li>
                    <li>Difficulty settling even when tired</li>
                    <li>Extreme impulsivity with little sense of danger</li>
                    <li>Frequent, intense, hard-to-soothe meltdowns</li>
                    <li>Quickly jumping from toy to toy without engaging</li>
                    <li>Trouble following very simple routines compared to peers</li>
                    <li>Aggression that does not improve with consistent guidance</li>
                  </ul>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> Maria noticed her 3-year-old could not sit for
                      even one short story and bolted toward the street without pausing. Rather than
                      worry alone, she kept a two-week log of these moments and brought it to her
                      pediatrician, who recommended a developmental check.
                    </p>
                  </div>
                </section>

                <section id="causes" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Causes and Risk Factors</h2>
                  <p className="text-gray-700 mb-4">
                    ADHD is not caused by parenting style, too much sugar, or screen time alone.
                    Research points to a mix of factors:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Genetics:</strong> ADHD often runs in families</li>
                    <li><strong>Brain development:</strong> Differences in areas that manage attention and impulse control</li>
                    <li><strong>Premature birth or low birth weight</strong></li>
                    <li><strong>Prenatal exposures:</strong> Tobacco, alcohol, or certain toxins during pregnancy</li>
                    <li><strong>Early lead exposure</strong></li>
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What causes ADHD?</h3>
                    <p className="text-gray-700 mb-0">
                      ADHD is mainly linked to genetics and differences in brain development. Risk
                      factors include premature birth, low birth weight, and prenatal exposure to
                      tobacco or alcohol. It is not caused by parenting, sugar, or screen time, though
                      these can affect behavior in other ways.
                    </p>
                  </div>
                </section>

                <section id="diagnosis" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How ADHD Is Diagnosed</h2>
                  <p className="text-gray-700 mb-4">
                    There is no single blood test or scan for ADHD. Diagnosis is based on detailed
                    observation over time and usually involves:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>A full medical and developmental history</li>
                    <li>Reports from parents and caregivers about behavior in different settings</li>
                    <li>Standardized behavior rating scales</li>
                    <li>Ruling out other causes such as hearing problems, sleep issues, or anxiety</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    For very young children, doctors often recommend behavior-based support and
                    monitoring first, rather than rushing to a label or medication.
                  </p>
                </section>

                <section id="support" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Support Your Child Now</h2>
                  <p className="text-gray-700 mb-4">
                    Whether or not ADHD is involved, these strategies help active, impulsive toddlers
                    thrive:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Keep predictable routines for meals, play, and sleep</li>
                    <li>Give plenty of safe, active play to burn energy</li>
                    <li>Use short, clear, one-step instructions</li>
                    <li>Praise specific positive behavior right away</li>
                    <li>Reduce overstimulation and limit screen time</li>
                    <li>Protect consistent, high-quality sleep</li>
                    <li>Stay calm and patient during meltdowns</li>
                  </ul>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      Early support helps children build skills no matter the cause of their behavior.
                      Parent training programs recommended by the AAP can be especially effective for
                      young children.
                    </p>
                  </div>
                </section>

                <section id="when-to-call" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call a Doctor</h2>
                  <p className="text-gray-700 mb-4">
                    Trust your instincts. Talk to your pediatrician if:
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Your child's activity or impulsivity is far beyond peers</li>
                      <li>Behavior disrupts daily life at home and in childcare</li>
                      <li>You see possible delays in speech, play, or social skills</li>
                      <li>Your child often puts themselves in danger without learning</li>
                      <li>Behavior is not improving with routine and consistent support</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-4">
                    A pediatrician can check development, rule out other causes, and refer you to a
                    specialist if needed. Asking questions early is always reasonable.
                  </p>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        At what age can ADHD be diagnosed?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        ADHD is rarely diagnosed before age 4. AAP guidelines support evaluation from
                        about age 4 onward. Before then, doctors usually monitor behavior and offer
                        support rather than giving a formal diagnosis.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Does a very active toddler mean ADHD?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Not at all. High energy is normal and healthy for toddlers. ADHD involves
                        activity and impulsivity that are far more extreme than peers and that disrupt
                        daily life across different settings.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Can diet or sugar cause ADHD?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        No. Sugar does not cause ADHD, though a balanced diet and good sleep support
                        steady behavior. ADHD is mainly linked to genetics and brain development, not
                        food choices.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Will my toddler need medication?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        For young children, behavior-based strategies and parent training are usually
                        recommended before any medication. Treatment is always personalized and
                        decided with your child's doctor.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        How can I help while I wait for an evaluation?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Keep consistent routines, offer active play, use short clear instructions, and
                        praise positive behavior. Keeping a simple log of behaviors also helps your
                        doctor understand the full picture.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Medical Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational purposes only and is not a substitute for
                    professional medical advice, diagnosis, or treatment. ADHD cannot be diagnosed from
                    an article. Always consult your pediatrician about concerns regarding your child's
                    behavior or development.
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
  headline: "ADHD in Toddlers: Signs, Causes, and When to Worry",
  description:
    "Can toddlers have ADHD? Learn the early signs, what is normal toddler behavior, causes, risk factors, and when to talk to your pediatrician.",
  image: "https://childbloom.site/images/articles/adhd-in-toddlers-og.jpg",
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
    "@id": "https://childbloom.site/articles/adhd-in-toddlers/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "At what age can ADHD be diagnosed?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "ADHD is rarely diagnosed before age 4. AAP guidelines support evaluation from about age 4 onward. Before then, doctors usually monitor behavior and offer support rather than giving a formal diagnosis.",
      },
    },
    {
      "@type": "Question",
      name: "Does a very active toddler mean ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. High energy is normal and healthy for toddlers. ADHD involves activity and impulsivity that are far more extreme than peers and that disrupt daily life across different settings.",
      },
    },
    {
      "@type": "Question",
      name: "Can diet or sugar cause ADHD?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Sugar does not cause ADHD, though a balanced diet and good sleep support steady behavior. ADHD is mainly linked to genetics and brain development, not food choices.",
      },
    },
    {
      "@type": "Question",
      name: "Will my toddler need medication?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For young children, behavior-based strategies and parent training are usually recommended before any medication. Treatment is always personalized and decided with your child's doctor.",
      },
    },
    {
      "@type": "Question",
      name: "How can I help while I wait for an evaluation?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Keep consistent routines, offer active play, use short clear instructions, and praise positive behavior. Keeping a simple log of behaviors also helps your doctor understand the full picture.",
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
