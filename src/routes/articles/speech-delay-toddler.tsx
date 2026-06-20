import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/speech-delay-toddler")({
  component: SpeechDelayToddlerArticle,
  head: () => {
    const url = "https://childbloom.site/articles/speech-delay-toddler/";
    return seo({
      title: "Speech Delay in Toddlers: When to Worry & How to Help | ChildBloom",
      description:
        "Toddler speech delay explained: red flags by age, common causes, the evaluation process, and practical ways to support your child's language at home.",
      url,
      type: "article",
      publishedTime: "2026-06-12",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/speech-delay-toddler-og.jpg",
    });
  },
});

function SpeechDelayToddlerArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "what-is-speech-delay", title: "What Is a Speech Delay?" },
    { id: "normal-development", title: "Normal Speech Development" },
    { id: "red-flags", title: "Red Flags by Age" },
    { id: "causes", title: "Common Causes" },
    { id: "evaluation", title: "Getting Evaluated" },
    { id: "home-strategies", title: "How to Help at Home" },
    { id: "when-to-worry", title: "When to Call a Doctor" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Speech Milestones", slug: "speech-milestones" },
    { title: "Speech Development Guide", slug: "speech-development-guide" },
    { title: "Signs of Autism in Toddlers", slug: "signs-of-autism-in-toddlers" },
    { title: "Early Intervention Services", slug: "early-intervention" },
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
              <span className="text-gray-700">Speech Delay in Toddlers</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              Speech Delay in Toddlers: When to Worry and How to Help
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              A warm, evidence-based guide to toddler speech delay: what is normal, the red flags to
              watch for, why delays happen, and simple ways to grow your child's language every day.
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
                <div id="quick-answer" className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg mb-8 scroll-mt-24">
                  <h2 className="text-lg font-bold text-pink-900 mt-0 mb-2">Quick Answer</h2>
                  <p className="text-pink-900 font-medium text-lg mb-0">
                    A speech delay means a toddler's talking is behind what is typical for their age.
                    Talk to your doctor if your child has no words by 16 months, fewer than 50 words
                    by 24 months, or loses words at any age. Many late talkers catch up, but early
                    evaluation and support give the best results.
                  </p>
                </div>

                <section id="what-is-speech-delay" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is a Speech Delay?</h2>
                  <p className="text-gray-700 mb-4">
                    A speech delay is when a child develops speech and language skills later than
                    expected. "Speech" is the sounds we make to form words. "Language" is how we use
                    and understand words. A child can be behind in one or both areas.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Every child develops at their own pace, and there is a wide range of normal. Still,
                    milestones help you know when a little extra support may be useful. Catching a
                    delay early is never harmful, and it can make a big difference.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What is a speech delay in toddlers?</h3>
                    <p className="text-gray-700 mb-0">
                      A speech delay is when a toddler's spoken language develops later than typical
                      for their age. Common signs include no words by 16 months, fewer than 50 words
                      by age 2, or no two-word phrases by 30 months. Early evaluation helps rule out
                      causes like hearing loss.
                    </p>
                  </div>
                </section>

                <section id="normal-development" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Normal Speech Development</h2>
                  <p className="text-gray-700 mb-4">
                    These are typical milestones. Use them as a guide, not a strict test. Children
                    often understand far more than they can say.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>12 months:</strong> 1 to 3 words plus gestures like pointing and waving</li>
                    <li><strong>18 months:</strong> about 10 to 25 words, starting to copy words</li>
                    <li><strong>24 months:</strong> 50 or more words and two-word phrases ("more milk")</li>
                    <li><strong>30 months:</strong> 200 to 300 words and short, simple sentences</li>
                    <li><strong>36 months:</strong> talks in sentences and is mostly understood by family</li>
                  </ul>
                </section>

                <section id="red-flags" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Red Flags by Age</h2>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-red-900 mb-2 mt-0">Talk to a Doctor If Your Child</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Is not babbling by 12 months</li>
                      <li>Uses no words by 16 to 18 months</li>
                      <li>Has fewer than 50 words at 24 months</li>
                      <li>Is not combining two words by 30 months</li>
                      <li>Loses words or skills they once had, at any age</li>
                      <li>Cannot be understood by family by age 3</li>
                      <li>Does not seem to hear well or respond to sounds</li>
                    </ul>
                  </div>
                </section>

                <section id="causes" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Causes</h2>
                  <p className="text-gray-700 mb-4">
                    Speech delays have many possible causes. Often there is no clear reason, and the
                    child is simply a "late talker." Possible causes include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Hearing problems:</strong> Even mild or temporary hearing loss from ear infections affects speech</li>
                    <li><strong>Speech or language disorders:</strong> Such as childhood apraxia of speech</li>
                    <li><strong>Developmental conditions:</strong> Including autism or global developmental delay</li>
                    <li><strong>Oral-motor issues:</strong> Difficulty coordinating the lips, tongue, and jaw</li>
                    <li><strong>Limited language exposure:</strong> Less talking, reading, and interaction</li>
                    <li><strong>Being a late bloomer:</strong> Some children simply talk later and catch up</li>
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What causes speech delay in toddlers?</h3>
                    <p className="text-gray-700 mb-0">
                      Toddler speech delay can be caused by hearing problems, speech or language
                      disorders, autism, oral-motor difficulties, or limited language exposure. Many
                      late talkers have no clear cause and catch up over time. A hearing test is an
                      important first step.
                    </p>
                  </div>
                </section>

                <section id="evaluation" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Getting Evaluated</h2>
                  <p className="text-gray-700 mb-4">
                    If you have concerns, start with your pediatrician. They can check your child's
                    development and refer you for the right support.
                  </p>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                    <li><strong>See your pediatrician.</strong> Share specific examples of what you notice.</li>
                    <li><strong>Get a hearing test.</strong> Ruling out hearing loss is an essential first step.</li>
                    <li><strong>Ask about early intervention.</strong> Many regions offer free evaluations for children under 3.</li>
                    <li><strong>See a speech-language pathologist (SLP).</strong> They assess and treat speech and language delays.</li>
                  </ol>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> Priya's son was nearly 2 and used only a few
                      words. Friends said "boys talk late," but she trusted her gut and asked for an
                      evaluation. A hearing test revealed fluid in his ears. After treatment and a few
                      months of speech therapy, his words took off.
                    </p>
                  </div>
                </section>

                <section id="home-strategies" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Help at Home</h2>
                  <p className="text-gray-700 mb-4">
                    Everyday moments are powerful for building language. Try these simple,
                    research-backed habits.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Narrate your day.</strong> Talk about what you are doing as you do it.</li>
                    <li><strong>Read together daily.</strong> Point to pictures and name them.</li>
                    <li><strong>Expand on words.</strong> If your child says "ball," reply "Yes, the big red ball!"</li>
                    <li><strong>Follow their lead.</strong> Talk about what your child is interested in.</li>
                    <li><strong>Give time to respond.</strong> Pause and wait after you speak or ask.</li>
                    <li><strong>Sing songs and rhymes.</strong> Repetition and rhythm support language.</li>
                    <li><strong>Limit screen time.</strong> Real conversation teaches far more than screens.</li>
                    <li><strong>Model, do not correct.</strong> Repeat words the right way without saying "wrong."</li>
                  </ul>
                </section>

                <section id="when-to-worry" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call a Doctor</h2>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h3 className="font-semibold text-red-900 mb-2 mt-0">Contact Your Pediatrician If</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Your child loses words or skills they once had</li>
                      <li>You suspect a hearing problem</li>
                      <li>Your child meets any of the red flags by age listed above</li>
                      <li>You also notice limited eye contact or social interaction</li>
                      <li>Your instincts tell you something is not right</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Trust yourself. Early support is gentle, helpful, and never a wasted effort, even
                    if your child turns out to be a late bloomer.
                  </p>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Will my child catch up on their own?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Some late talkers do catch up naturally, but many benefit from early support.
                        Because you cannot predict who will catch up, it is safer to evaluate early
                        rather than wait and see.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Does being bilingual cause speech delay?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        No. Bilingual children may have a slightly smaller vocabulary in each language
                        at first, but they reach overall milestones on time and often gain cognitive
                        benefits. Bilingualism does not cause delay.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Is a speech delay the same as autism?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        No. A speech delay is one possible feature of autism, but most children with
                        speech delays are not autistic. Autism also involves social and behavioral
                        differences. An evaluation can clarify the cause.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Can too much screen time cause speech delay?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Excess screen time can reduce the real-life conversation children need to
                        learn language. The AAP recommends very limited screen time before age 2.
                        Face-to-face talking is the best way to build speech.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        How does speech therapy help?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        A speech-language pathologist uses play-based activities to build sounds,
                        words, and understanding. They also coach parents on simple techniques to use
                        at home, which speeds up progress.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Medical Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational purposes only and is not a substitute for
                    professional medical advice, diagnosis, or treatment. Always consult your
                    pediatrician or a qualified specialist about your child's speech and development.
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
  headline: "Speech Delay in Toddlers: When to Worry and How to Help",
  description:
    "Toddler speech delay explained: red flags by age, common causes, the evaluation process, and practical ways to support your child's language at home.",
  image: "https://childbloom.site/images/articles/speech-delay-toddler-og.jpg",
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
    "@id": "https://childbloom.site/articles/speech-delay-toddler/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Will my child catch up on their own?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some late talkers catch up naturally, but many benefit from early support. Because you cannot predict who will catch up, it is safer to evaluate early rather than wait and see.",
      },
    },
    {
      "@type": "Question",
      name: "Does being bilingual cause speech delay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Bilingual children may have a slightly smaller vocabulary in each language at first, but they reach overall milestones on time and often gain cognitive benefits. Bilingualism does not cause delay.",
      },
    },
    {
      "@type": "Question",
      name: "Is a speech delay the same as autism?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. A speech delay is one possible feature of autism, but most children with speech delays are not autistic. Autism also involves social and behavioral differences. An evaluation can clarify the cause.",
      },
    },
    {
      "@type": "Question",
      name: "Can too much screen time cause speech delay?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Excess screen time can reduce the real-life conversation children need to learn language. The AAP recommends very limited screen time before age 2. Face-to-face talking is the best way to build speech.",
      },
    },
    {
      "@type": "Question",
      name: "How does speech therapy help?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A speech-language pathologist uses play-based activities to build sounds, words, and understanding. They also coach parents on simple techniques to use at home, which speeds up progress.",
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
