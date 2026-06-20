import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/toddler-biting")({
  component: ToddlerBitingArticle,
  head: () => {
    const url = "https://childbloom.site/articles/toddler-biting/";
    return seo({
      title: "Toddler Biting: Why It Happens & How to Stop It | ChildBloom",
      description:
        "Why toddlers bite and how to respond calmly. Practical, age-based strategies to handle biting in the moment, prevent it, and know when to seek help.",
      url,
      type: "article",
      publishedTime: "2026-06-12",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/toddler-biting-og.jpg",
    });
  },
});

function ToddlerBitingArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "is-it-normal", title: "Is Biting Normal?" },
    { id: "why-toddlers-bite", title: "Why Toddlers Bite" },
    { id: "in-the-moment", title: "How to Respond" },
    { id: "prevention", title: "How to Prevent Biting" },
    { id: "what-not-to-do", title: "What Not to Do" },
    { id: "when-to-worry", title: "When to Seek Help" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Toddler Tantrums", slug: "toddler-tantrums" },
    { title: "Positive Discipline", slug: "positive-discipline" },
    { title: "Parenting Hacks", slug: "parenting-hacks" },
    { title: "Emotional Development", slug: "emotional-development" },
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
              <span className="text-gray-700">Toddler Biting</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              Toddler Biting: Why It Happens and How to Stop It
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              Biting is common and stressful, but it is a phase you can guide your child through.
              Here is why it happens and how to respond calmly and effectively.
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
                    Toddlers bite because they lack the words to express big feelings, are
                    overwhelmed, teething, or exploring. Respond calmly: stop the bite, comfort the
                    hurt child, and use simple words like "biting hurts." Most biting fades by age 3
                    as language grows. Stay calm and consistent.
                  </p>
                </div>

                <section id="is-it-normal" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Is Biting Normal?</h2>
                  <p className="text-gray-700 mb-4">
                    Yes. Biting is very common between 12 and 36 months. It can feel alarming or
                    embarrassing, especially at daycare, but it does not mean your child is "bad" or
                    that you are doing something wrong. It is a developmental behavior, not a
                    character flaw.
                  </p>
                  <p className="text-gray-700 mb-4">
                    At this age, toddlers have huge feelings and very few words. Biting is often the
                    fastest way they know to say "I am overwhelmed" or "I want that." As language and
                    self-control grow, biting almost always fades.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: Why do toddlers bite?</h3>
                    <p className="text-gray-700 mb-0">
                      Toddlers bite because they cannot yet express strong emotions with words. Common
                      triggers include frustration, overstimulation, teething pain, tiredness, and a
                      desire for attention or a toy. Biting usually fades by age 3 as language and
                      impulse control develop.
                    </p>
                  </div>
                </section>

                <section id="why-toddlers-bite" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Toddlers Bite</h2>
                  <p className="text-gray-700 mb-4">
                    Understanding the reason behind a bite helps you prevent the next one. Common
                    causes include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Frustration:</strong> Not getting a toy or being unable to communicate</li>
                    <li><strong>Overstimulation:</strong> Too much noise, activity, or excitement</li>
                    <li><strong>Tiredness or hunger:</strong> A worn-out toddler has little self-control</li>
                    <li><strong>Teething:</strong> Sore gums make biting feel relieving</li>
                    <li><strong>Exploration:</strong> Younger toddlers explore with their mouths</li>
                    <li><strong>Attention-seeking:</strong> Biting gets a big, fast reaction</li>
                    <li><strong>Trouble sharing:</strong> Taking turns is genuinely hard at this age</li>
                  </ul>
                </section>

                <section id="in-the-moment" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Respond in the Moment</h2>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                    <li><strong>Stay calm.</strong> Reacting with anger or yelling can escalate things or accidentally reward the behavior with a dramatic response.</li>
                    <li><strong>Stop the bite and ensure safety.</strong> Gently separate the children and check for injury.</li>
                    <li><strong>Comfort the child who was hurt first.</strong> This shifts attention away from the biter and shows that hurting gets care, not the spotlight.</li>
                    <li><strong>Use simple, firm words.</strong> "Biting hurts. We do not bite." Keep it short.</li>
                    <li><strong>Name the feeling.</strong> "You were mad you wanted the truck."</li>
                    <li><strong>Offer a better option.</strong> "You can say 'my turn' or come get me."</li>
                  </ol>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> When Lena's son bit a friend over a toy, she
                      calmly comforted the friend first, then knelt down and said, "You were mad. We
                      do not bite. Say 'my turn.'" Over a few weeks of the same calm response, the
                      biting stopped.
                    </p>
                  </div>
                </section>

                <section id="prevention" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Prevent Biting</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Watch for early signs of frustration and step in before a bite</li>
                    <li>Teach feeling words: "You feel mad," "You feel excited"</li>
                    <li>Keep your child rested and fed to avoid meltdowns</li>
                    <li>Offer a teether if teething is the cause</li>
                    <li>Supervise closely during playdates and sharing</li>
                    <li>Model calm problem-solving when conflicts come up</li>
                    <li>Praise gentle, kind behavior when you see it</li>
                  </ul>
                </section>

                <section id="what-not-to-do" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What Not to Do</h2>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li><strong>Do not bite back.</strong> It models the exact behavior you want to stop and can frighten your child.</li>
                      <li><strong>Do not yell or shame.</strong> Big reactions can reinforce biting and hurt connection.</li>
                      <li><strong>Do not give long lectures.</strong> Toddlers cannot follow them; keep words short.</li>
                      <li><strong>Do not force an apology.</strong> Model kindness instead of demanding words they do not yet understand.</li>
                    </ul>
                  </div>
                </section>

                <section id="when-to-worry" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Seek Help</h2>
                  <p className="text-gray-700 mb-4">
                    Most biting is a normal phase. Talk to your pediatrician or a child behavior
                    specialist if:
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Biting continues frequently past age 3 to 4</li>
                      <li>Biting is intense, aggressive, or causes real injury</li>
                      <li>Your child seems unable to control their impulses</li>
                      <li>Biting comes with speech delay or other developmental concerns</li>
                      <li>The behavior is not improving with consistent, calm responses</li>
                    </ul>
                  </div>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Should I bite my child back to teach them?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        No. Biting back models the behavior you are trying to stop, can hurt or scare
                        your child, and teaches that hurting others is acceptable. Calm, consistent
                        responses work far better.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        How long does the biting phase last?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Most children stop biting between ages 2 and 3 as their language and
                        self-control grow. Consistent, calm responses help the phase pass more
                        quickly.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        My toddler bites when excited, not angry. Why?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Some toddlers bite from overwhelming excitement or sensory seeking. Offer a
                        safe outlet like a teether, and help them recognize the big feeling: "You are
                        so excited!" Gentle redirection works well.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        How should I handle biting at daycare?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Work as a team with caregivers so everyone responds the same calm way. Share
                        triggers you have noticed and agree on consistent language. Consistency
                        between home and daycare speeds up progress.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Medical Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational purposes only and is not a substitute for
                    professional medical advice, diagnosis, or treatment. Always consult your
                    pediatrician about concerns regarding your child's behavior or development.
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
  headline: "Toddler Biting: Why It Happens and How to Stop It",
  description:
    "Why toddlers bite and how to respond calmly. Practical, age-based strategies to handle biting in the moment, prevent it, and know when to seek help.",
  image: "https://childbloom.site/images/articles/toddler-biting-og.jpg",
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
    "@id": "https://childbloom.site/articles/toddler-biting/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Should I bite my child back to teach them?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Biting back models the behavior you are trying to stop, can hurt or scare your child, and teaches that hurting others is acceptable. Calm, consistent responses work far better.",
      },
    },
    {
      "@type": "Question",
      name: "How long does the biting phase last?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most children stop biting between ages 2 and 3 as their language and self-control grow. Consistent, calm responses help the phase pass more quickly.",
      },
    },
    {
      "@type": "Question",
      name: "My toddler bites when excited, not angry. Why?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Some toddlers bite from overwhelming excitement or sensory seeking. Offer a safe outlet like a teether, and help them recognize the big feeling. Gentle redirection works well.",
      },
    },
    {
      "@type": "Question",
      name: "How should I handle biting at daycare?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Work as a team with caregivers so everyone responds the same calm way. Share triggers you have noticed and agree on consistent language. Consistency between home and daycare speeds up progress.",
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
