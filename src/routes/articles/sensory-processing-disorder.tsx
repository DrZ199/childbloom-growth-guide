import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/sensory-processing-disorder")({
  component: SensoryProcessingDisorderArticle,
  head: () => {
    const url = "https://childbloom.site/articles/sensory-processing-disorder/";
    return seo({
      title: "Sensory Processing Disorder in Toddlers: Signs & Help | ChildBloom",
      description:
        "Signs of sensory processing issues in toddlers, sensory-seeking vs sensory-avoiding behavior, causes, and calming strategies parents can use at home.",
      url,
      type: "article",
      publishedTime: "2026-06-12",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/sensory-processing-disorder-og.jpg",
    });
  },
});

function SensoryProcessingDisorderArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "what-is-spd", title: "What Is SPD?" },
    { id: "signs", title: "Common Signs" },
    { id: "seeking-vs-avoiding", title: "Seeking vs. Avoiding" },
    { id: "causes", title: "Causes and Risk Factors" },
    { id: "strategies", title: "Strategies for Home" },
    { id: "help", title: "Professional Support" },
    { id: "when-to-call", title: "When to Call a Doctor" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Signs of Autism in Toddlers", slug: "signs-of-autism-in-toddlers" },
    { title: "ADHD in Toddlers", slug: "adhd-in-toddlers" },
    { title: "Early Intervention", slug: "early-intervention" },
    { title: "Toddler Tantrums", slug: "toddler-tantrums" },
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
              <span className="text-gray-700">Sensory Processing Disorder</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              Sensory Processing Disorder in Toddlers: Signs and Support
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              Does your toddler cover their ears, avoid messy play, or crave constant movement?
              Learn what sensory processing differences look like and how to gently help.
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
                    Sensory processing differences mean a child's brain has trouble organizing
                    information from the senses. Some toddlers seek extra input (spinning, crashing);
                    others avoid it (covering ears, refusing textures). Many children improve with
                    occupational therapy and sensory-friendly routines. Talk to your pediatrician if
                    it disrupts daily life.
                  </p>
                </div>

                <section id="what-is-spd" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is Sensory Processing Disorder?</h2>
                  <p className="text-gray-700 mb-4">
                    Sensory processing refers to how the brain takes in and responds to information
                    from the senses: sight, sound, touch, taste, smell, movement, and body awareness.
                    When this process does not work smoothly, everyday sensations can feel overwhelming
                    or not strong enough.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What is sensory processing disorder?</h3>
                    <p className="text-gray-700 mb-0">
                      Sensory processing disorder describes difficulty organizing and responding to
                      sensory information such as sounds, textures, and movement. A child may be
                      over-sensitive, under-sensitive, or seek extra input. It often overlaps with
                      autism and ADHD and is commonly supported with occupational therapy.
                    </p>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Note: sensory processing disorder is not a formal standalone diagnosis in every
                    medical manual, but the challenges are real and are often addressed by occupational
                    therapists, sometimes alongside autism or ADHD.
                  </p>
                </section>

                <section id="signs" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Signs</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Strong reactions to sounds, lights, or textures</li>
                    <li>Refusing certain foods because of texture</li>
                    <li>Dislike of messy hands, tags, or seams in clothing</li>
                    <li>Craving spinning, crashing, jumping, or deep pressure</li>
                    <li>Unusually high or low pain awareness</li>
                    <li>Frequent meltdowns in busy or noisy places</li>
                    <li>Clumsiness or trouble with balance and coordination</li>
                  </ul>
                </section>

                <section id="seeking-vs-avoiding" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Sensory Seeking vs. Sensory Avoiding</h2>
                  <div className="grid sm:grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 border border-green-200 p-5 rounded-lg">
                      <h3 className="font-semibold text-green-900 mb-2 mt-0">Sensory Seeking</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-0">
                        <li>Loves spinning and crashing</li>
                        <li>Touches everything</li>
                        <li>Enjoys loud noises</li>
                        <li>Seeks deep hugs and squeezes</li>
                        <li>Always on the move</li>
                      </ul>
                    </div>
                    <div className="bg-amber-50 border border-amber-200 p-5 rounded-lg">
                      <h3 className="font-semibold text-amber-900 mb-2 mt-0">Sensory Avoiding</h3>
                      <ul className="list-disc pl-5 space-y-1 text-gray-700 mb-0">
                        <li>Covers ears at normal sounds</li>
                        <li>Avoids messy textures</li>
                        <li>Dislikes certain clothing</li>
                        <li>Gets overwhelmed in crowds</li>
                        <li>Is a very picky eater</li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Some children are seekers in one area and avoiders in another. That mix is common
                    and normal.
                  </p>
                </section>

                <section id="causes" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Causes and Risk Factors</h2>
                  <p className="text-gray-700 mb-4">
                    The exact cause is not fully known. Possible factors include:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Differences in how the brain processes sensory signals</li>
                    <li>Genetics, as sensory traits can run in families</li>
                    <li>Premature birth or low birth weight</li>
                    <li>Co-occurring conditions such as autism or ADHD</li>
                  </ul>
                </section>

                <section id="strategies" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategies for Home</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Create calm, predictable routines</li>
                    <li>Offer a quiet space to retreat when overwhelmed</li>
                    <li>Use deep pressure: firm hugs, weighted blankets (age-appropriate)</li>
                    <li>Introduce new textures slowly and playfully</li>
                    <li>Give movement breaks for sensory seekers</li>
                    <li>Prepare your child before noisy or busy outings</li>
                    <li>Watch for early signs of overload and step in</li>
                  </ul>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> Grocery trips always ended in meltdowns for
                      Aisha's son, who covered his ears and cried. After an occupational therapist
                      suggested noise-reducing headphones and a short shopping list, trips became calm
                      enough for him to help pick the apples.
                    </p>
                  </div>
                </section>

                <section id="help" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Professional Support</h2>
                  <p className="text-gray-700 mb-4">
                    Occupational therapists (OTs) are the specialists who most often help with sensory
                    challenges. They may use a "sensory diet," a personalized plan of activities that
                    gives a child the right kind of input throughout the day.
                  </p>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      If your child is under 3, early intervention services may provide an evaluation
                      and OT support at little or no cost. Ask your pediatrician for a referral.
                    </p>
                  </div>
                </section>

                <section id="when-to-call" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call a Doctor</h2>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Sensory reactions disrupt eating, sleep, or daily life</li>
                      <li>Your child avoids so many foods that nutrition is a concern</li>
                      <li>Meltdowns are frequent, intense, and hard to manage</li>
                      <li>You also notice speech, social, or developmental delays</li>
                      <li>Your child seems unaware of pain or danger</li>
                    </ul>
                  </div>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Is sensory processing disorder the same as autism?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        No, but they often overlap. Many autistic children have sensory differences,
                        and many children with sensory challenges are not autistic. A professional
                        evaluation can help clarify the full picture.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Will my child grow out of it?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Many children learn to manage sensory challenges over time, especially with
                        support. Occupational therapy and consistent routines often make a big
                        difference in daily comfort.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Is picky eating a sensory issue?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        It can be. Some children refuse foods because of texture, smell, or appearance
                        rather than taste. If picky eating is extreme or limits nutrition, ask your
                        pediatrician about an evaluation.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        What is a sensory diet?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        A sensory diet is a personalized set of activities an occupational therapist
                        designs to give a child the sensory input they need, such as movement breaks or
                        calming pressure, spread through the day.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Can I help at home without a therapist?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Yes. Calm routines, gradual exposure to textures, movement breaks, and quiet
                        retreat spaces all help. Still, an occupational therapist can tailor strategies
                        to your child's specific needs.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Medical Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational purposes only and is not a substitute for
                    professional medical advice, diagnosis, or treatment. Always consult your
                    pediatrician or a qualified occupational therapist about concerns regarding your
                    child's sensory needs.
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
  headline: "Sensory Processing Disorder in Toddlers: Signs and Support",
  description:
    "Signs of sensory processing issues in toddlers, sensory-seeking vs sensory-avoiding behavior, causes, and calming strategies parents can use at home.",
  image: "https://childbloom.site/images/articles/sensory-processing-disorder-og.jpg",
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
    "@id": "https://childbloom.site/articles/sensory-processing-disorder/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is sensory processing disorder the same as autism?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No, but they often overlap. Many autistic children have sensory differences, and many children with sensory challenges are not autistic. A professional evaluation can help clarify the full picture.",
      },
    },
    {
      "@type": "Question",
      name: "Will my child grow out of it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Many children learn to manage sensory challenges over time, especially with support. Occupational therapy and consistent routines often make a big difference in daily comfort.",
      },
    },
    {
      "@type": "Question",
      name: "Is picky eating a sensory issue?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It can be. Some children refuse foods because of texture, smell, or appearance rather than taste. If picky eating is extreme or limits nutrition, ask your pediatrician about an evaluation.",
      },
    },
    {
      "@type": "Question",
      name: "What is a sensory diet?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A sensory diet is a personalized set of activities an occupational therapist designs to give a child the sensory input they need, such as movement breaks or calming pressure, spread through the day.",
      },
    },
    {
      "@type": "Question",
      name: "Can I help at home without a therapist?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Calm routines, gradual exposure to textures, movement breaks, and quiet retreat spaces all help. Still, an occupational therapist can tailor strategies to your child's specific needs.",
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
