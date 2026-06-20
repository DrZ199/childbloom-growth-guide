import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/preschool-readiness")({
  component: PreschoolReadinessArticle,
  head: () => {
    const url = "https://childbloom.site/articles/preschool-readiness/";
    return seo({
      title: "Preschool Readiness: Skills Your Child Needs | ChildBloom",
      description:
        "Is your child ready for preschool? A checklist of social, emotional, self-care, and learning skills, plus easy ways to prepare your child at home.",
      url,
      type: "article",
      publishedTime: "2026-06-12",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/preschool-readiness-og.jpg",
    });
  },
});

function PreschoolReadinessArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "what-is-readiness", title: "What Readiness Means" },
    { id: "checklist", title: "Readiness Checklist" },
    { id: "social-emotional", title: "Social & Emotional Skills" },
    { id: "self-care", title: "Self-Care Skills" },
    { id: "learning", title: "Early Learning Skills" },
    { id: "prepare", title: "How to Prepare at Home" },
    { id: "not-ready", title: "If Your Child Is Not Ready" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Potty Training", slug: "potty-training" },
    { title: "Speech Milestones", slug: "speech-milestones" },
    { title: "Toddler Activities at Home", slug: "toddler-activities-at-home" },
    { title: "Child Development Milestones", slug: "child-development-milestones" },
    { title: "Emotional Development", slug: "emotional-development" },
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
              <span className="text-gray-700">Preschool Readiness</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              Preschool Readiness: Skills Your Child Needs Before Starting
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              Preschool readiness is about much more than ABCs and numbers. Here are the social,
              emotional, and self-care skills that matter most, and how to build them at home.
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
                    A child is usually ready for preschool when they can separate from you for a few
                    hours, follow simple directions, communicate basic needs, and play near other
                    children. Academic skills like letters and counting matter less than social,
                    emotional, and self-care readiness. Every child develops at their own pace.
                  </p>
                </div>

                <section id="what-is-readiness" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What Preschool Readiness Means</h2>
                  <p className="text-gray-700 mb-4">
                    Readiness is the mix of skills that helps a child cope and learn in a group
                    setting. It is not about being "ahead." A confident, curious child who can manage a
                    short separation is far more ready than one who knows the alphabet but cannot leave
                    a parent's side.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What skills does a child need for preschool?</h3>
                    <p className="text-gray-700 mb-0">
                      For preschool, a child should be able to separate from a parent, follow simple
                      one- or two-step directions, communicate basic needs, take turns, and manage some
                      self-care like washing hands. Social and emotional skills matter more than
                      academic ones at this age.
                    </p>
                  </div>
                </section>

                <section id="checklist" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Readiness Checklist</h2>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Can spend a few hours away from you</li>
                      <li>Follows simple directions</li>
                      <li>Communicates needs with words or gestures</li>
                      <li>Plays alongside or with other children</li>
                      <li>Can manage some self-care (toileting progress, hand washing)</li>
                      <li>Can sit and listen for a short story</li>
                      <li>Recovers from small frustrations with support</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Your child does not need to check every box perfectly. These are skills preschool
                    will keep building.
                  </p>
                </section>

                <section id="social-emotional" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Social and Emotional Skills</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Separating from a caregiver without lasting distress</li>
                    <li>Beginning to share and take turns</li>
                    <li>Showing interest in other children</li>
                    <li>Expressing feelings with words instead of only hitting or crying</li>
                    <li>Following simple group rules with reminders</li>
                  </ul>
                </section>

                <section id="self-care" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Self-Care Skills</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Making progress with potty training (many programs prefer this)</li>
                    <li>Washing hands with help</li>
                    <li>Trying to put on shoes or a coat</li>
                    <li>Feeding themselves with a spoon or fork</li>
                    <li>Drinking from an open cup</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    Potty training rules vary by program. Always check what your chosen preschool
                    expects.
                  </p>
                </section>

                <section id="learning" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Early Learning Skills</h2>
                  <p className="text-gray-700 mb-4">
                    These are helpful but not required. Preschool is where many of them grow:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Curiosity and a love of exploring</li>
                    <li>Recognizing some colors and shapes</li>
                    <li>Enjoying books and stories</li>
                    <li>Holding crayons and scribbling</li>
                    <li>Sorting or matching simple objects</li>
                  </ul>
                </section>

                <section id="prepare" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Prepare at Home</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Practice short separations with a trusted caregiver</li>
                    <li>Read together every day</li>
                    <li>Set up playdates to build social skills</li>
                    <li>Give simple chores to build independence</li>
                    <li>Talk through feelings and name emotions</li>
                    <li>Visit the preschool together before the first day</li>
                    <li>Build a consistent morning routine</li>
                  </ul>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> Worried her shy daughter would struggle, Priya
                      practiced short drop-offs at grandma's house and visited the new classroom twice
                      before the start date. On the first morning, her daughter walked in already
                      recognizing the reading corner.
                    </p>
                  </div>
                </section>

                <section id="not-ready" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">If Your Child Is Not Ready</h2>
                  <p className="text-gray-700 mb-4">
                    Readiness is not a race. If your child needs more time, that is okay. You can:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Wait a few months and try again</li>
                    <li>Start with shorter days or fewer days per week</li>
                    <li>Build skills through playgroups first</li>
                    <li>Talk with the preschool about a gradual start</li>
                  </ul>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <p className="text-gray-700 mb-2 font-semibold">Talk to your pediatrician if your child:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Is far behind peers in speech, play, or social skills</li>
                      <li>Has very limited words by age 2 to 3</li>
                      <li>Shows little interest in other people</li>
                      <li>Loses skills they once had</li>
                    </ul>
                  </div>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        What age do children start preschool?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Most children start preschool between ages 3 and 4, though some programs accept
                        children as young as 2.5. Readiness skills matter more than exact age.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Does my child need to be potty trained?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        It depends on the program. Some require it, while others welcome children still
                        in training. Always ask the preschool about their specific policy.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Should my child know letters and numbers first?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        No. Academic skills are not required to start preschool. Social, emotional, and
                        self-care skills are far more important, and preschool will introduce early
                        academics.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        My child cries at drop-off. Is that normal?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Yes, separation tears are very common and usually fade within a few weeks. A
                        calm goodbye routine and a confident exit help your child settle faster.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        How can I ease first-day nerves?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Visit the classroom ahead of time, read books about preschool, practice the
                        routine, and keep goodbyes short and positive. Your calm confidence reassures
                        your child.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Medical Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational and informational purposes only and is not a
                    substitute for professional medical or developmental advice. Always consult your
                    pediatrician about concerns regarding your child's development.
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
  headline: "Preschool Readiness: Skills Your Child Needs Before Starting",
  description:
    "Is your child ready for preschool? A checklist of social, emotional, self-care, and learning skills, plus easy ways to prepare your child at home.",
  image: "https://childbloom.site/images/articles/preschool-readiness-og.jpg",
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
    "@id": "https://childbloom.site/articles/preschool-readiness/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What age do children start preschool?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most children start preschool between ages 3 and 4, though some programs accept children as young as 2.5. Readiness skills matter more than exact age.",
      },
    },
    {
      "@type": "Question",
      name: "Does my child need to be potty trained?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It depends on the program. Some require it, while others welcome children still in training. Always ask the preschool about their specific policy.",
      },
    },
    {
      "@type": "Question",
      name: "Should my child know letters and numbers first?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Academic skills are not required to start preschool. Social, emotional, and self-care skills are far more important, and preschool will introduce early academics.",
      },
    },
    {
      "@type": "Question",
      name: "My child cries at drop-off. Is that normal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, separation tears are very common and usually fade within a few weeks. A calm goodbye routine and a confident exit help your child settle faster.",
      },
    },
    {
      "@type": "Question",
      name: "How can I ease first-day nerves?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Visit the classroom ahead of time, read books about preschool, practice the routine, and keep goodbyes short and positive. Your calm confidence reassures your child.",
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
