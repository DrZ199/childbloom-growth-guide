import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/speech-milestones")({
  component: SpeechMilestonesArticle,
  head: () => {
    const url = "https://childbloom.site/articles/speech-milestones/";
    return seo({
      title: "Speech Milestones 12-36 Months: A Parent's Guide | ChildBloom",
      description:
        "A clear month-by-month guide to toddler speech milestones from 12 to 36 months, plus simple ways to build language and signs it's time to ask for help.",
      url,
      type: "article",
      publishedTime: "2026-05-18",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/speech-milestones-og.jpg",
    });
  },
});

function SpeechMilestonesArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "how-language-grows", title: "How Language Grows" },
    { id: "milestones-12", title: "12-18 Months" },
    { id: "milestones-18", title: "18-24 Months" },
    { id: "milestones-24", title: "24-30 Months" },
    { id: "milestones-30", title: "30-36 Months" },
    { id: "build-language", title: "Ways to Build Language" },
    { id: "when-to-worry", title: "When to Ask for Help" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Speech Delay in Toddlers", slug: "speech-delay-toddler" },
    { title: "Speech Development Guide", slug: "speech-development-guide" },
    { title: "Signs of Autism in Toddlers", slug: "signs-of-autism-in-toddlers" },
    { title: "Child Development Milestones", slug: "child-development-milestones" },
    { title: "Early Intervention Services", slug: "early-intervention" },
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
              <span className="text-gray-700">Speech Milestones</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              Speech Milestones from 12 to 36 Months
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              A friendly, month-by-month guide to how toddler language grows, with simple ways to
              help and clear signs of when to ask for support.
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
                    By 12 months most toddlers say 1 to 3 words, by 18 months 10 to 20 words, by 24
                    months 50 or more words with two-word phrases, and by 36 months short sentences
                    that family can understand. Every child varies, so use these as a guide and ask
                    your doctor if your child is well behind.
                  </p>
                </div>

                <section id="how-language-grows" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How Language Grows</h2>
                  <p className="text-gray-700 mb-4">
                    Language develops in two parts. Receptive language is what your child
                    understands. Expressive language is what your child can say. Understanding almost
                    always comes first, so your toddler likely knows many more words than they speak.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Milestones are averages, not deadlines. Children grow in bursts, and there is a
                    wide range of normal. The pattern of steady progress matters more than hitting
                    each milestone on an exact date.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What are speech milestones?</h3>
                    <p className="text-gray-700 mb-0">
                      Speech milestones are the typical ages at which toddlers reach language skills,
                      such as saying first words around 12 months, using two-word phrases by 24
                      months, and speaking in short sentences by age 3. They help parents track
                      progress and spot possible delays.
                    </p>
                  </div>
                </section>

                <section id="milestones-12" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">12 to 18 Months</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Says 1 to 3 clear words, like "mama," "dada," or "bye"</li>
                    <li>Uses gestures such as pointing, waving, and reaching</li>
                    <li>Follows simple requests like "give me the ball"</li>
                    <li>Looks at familiar objects when you name them</li>
                    <li>Babbles with the rhythm of real speech</li>
                  </ul>
                </section>

                <section id="milestones-18" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">18 to 24 Months</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Vocabulary grows quickly, from about 10 to 50 words</li>
                    <li>Starts to combine two words ("more milk," "bye dada")</li>
                    <li>Points to body parts or pictures when asked</li>
                    <li>Copies words and sounds they hear</li>
                    <li>Follows two-step directions by around 24 months</li>
                  </ul>
                </section>

                <section id="milestones-24" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">24 to 30 Months</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Uses 50 or more words, growing toward 200 to 300</li>
                    <li>Speaks in two- to three-word phrases regularly</li>
                    <li>Asks simple questions like "what that?"</li>
                    <li>Is understood by family about half the time</li>
                    <li>Begins to use "me," "you," and "mine"</li>
                  </ul>
                </section>

                <section id="milestones-30" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">30 to 36 Months</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Speaks in short sentences of three or more words</li>
                    <li>Is understood by family most of the time</li>
                    <li>Follows two- and three-step directions</li>
                    <li>Tells you simple wants, needs, and ideas</li>
                    <li>Names many familiar objects and actions</li>
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: How many words should a 2-year-old say?</h3>
                    <p className="text-gray-700 mb-0">
                      By age 2, most toddlers say at least 50 words and begin combining two words into
                      simple phrases like "more milk." Fewer than 50 words or no two-word phrases by
                      24 months is worth discussing with your pediatrician.
                    </p>
                  </div>
                </section>

                <section id="build-language" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Ways to Build Language</h2>
                  <p className="text-gray-700 mb-4">
                    You are your toddler's best language teacher. These small habits make a big
                    difference.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Talk through routines.</strong> Describe what you see and do all day.</li>
                    <li><strong>Read every day.</strong> Name pictures and let your child turn pages.</li>
                    <li><strong>Repeat and expand.</strong> Turn "dog" into "Yes, a big brown dog!"</li>
                    <li><strong>Sing songs and rhymes.</strong> Rhythm and repetition help words stick.</li>
                    <li><strong>Pause and wait.</strong> Give your child time to respond.</li>
                    <li><strong>Limit screens.</strong> Real conversation teaches language best.</li>
                  </ul>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> Marcus started narrating snack time and bath
                      time with his quiet 20-month-old. Within weeks she was copying single words, and
                      by her second birthday she was stringing two words together.
                    </p>
                  </div>
                </section>

                <section id="when-to-worry" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Ask for Help</h2>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h3 className="font-semibold text-red-900 mb-2 mt-0">Talk to a Doctor If Your Child</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Is not babbling or using gestures by 12 months</li>
                      <li>Has no words by 16 to 18 months</li>
                      <li>Has fewer than 50 words or no two-word phrases by 24 months</li>
                      <li>Loses words or skills at any age</li>
                      <li>Does not seem to hear or respond to sounds</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Reaching out early is never a wasted step. A quick check, including a hearing
                    test, can bring real peace of mind.
                  </p>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Do boys really talk later than girls?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        On average, girls may say a few more words slightly earlier, but the
                        difference is small. "Boys talk late" should never be a reason to ignore a
                        clear delay. If you are worried, get an evaluation.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        My toddler understands everything but barely talks. Is that okay?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Strong understanding is a great sign. Some children are "late talkers" who
                        understand well and catch up. Still, mention it to your pediatrician so they
                        can track progress with you.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        How can I tell the difference between a delay and a personality?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        A shy child still meets milestones, just maybe more quietly. A delay means
                        skills are clearly behind for their age. When in doubt, an evaluation gives a
                        clear answer.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Does using a pacifier affect speech?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Occasional use is fine. Heavy, all-day pacifier use after age 1 can limit
                        babbling and word practice. Try to keep it for sleep and offer plenty of
                        talking time.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Medical Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational purposes only and is not a substitute for
                    professional medical advice, diagnosis, or treatment. Always consult your
                    pediatrician about your child's speech and development.
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
  headline: "Speech Milestones from 12 to 36 Months",
  description:
    "A clear month-by-month guide to toddler speech milestones from 12 to 36 months, plus simple ways to build language and signs it's time to ask for help.",
  image: "https://childbloom.site/images/articles/speech-milestones-og.jpg",
  datePublished: "2026-05-18",
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
    "@id": "https://childbloom.site/articles/speech-milestones/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Do boys really talk later than girls?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "On average, girls may say a few more words slightly earlier, but the difference is small. 'Boys talk late' should never be a reason to ignore a clear delay. If you are worried, get an evaluation.",
      },
    },
    {
      "@type": "Question",
      name: "My toddler understands everything but barely talks. Is that okay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Strong understanding is a great sign. Some children are late talkers who understand well and catch up. Still, mention it to your pediatrician so they can track progress with you.",
      },
    },
    {
      "@type": "Question",
      name: "How can I tell the difference between a delay and a quiet personality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A shy child still meets milestones, just more quietly. A delay means skills are clearly behind for their age. When in doubt, an evaluation gives a clear answer.",
      },
    },
    {
      "@type": "Question",
      name: "Does using a pacifier affect speech?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Occasional use is fine. Heavy, all-day pacifier use after age 1 can limit babbling and word practice. Try to keep it for sleep and offer plenty of talking time.",
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
