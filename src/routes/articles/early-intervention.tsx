import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/early-intervention")({
  component: EarlyInterventionArticle,
  head: () => {
    const url = "https://childbloom.site/articles/early-intervention/";
    return seo({
      title: "Early Intervention: A Parent's Guide to EI Services | ChildBloom",
      description:
        "What early intervention is, who qualifies, how to get a free evaluation, what services are offered, and how to advocate for your child step by step.",
      url,
      type: "article",
      publishedTime: "2026-06-12",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/early-intervention-og.jpg",
    });
  },
});

function EarlyInterventionArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "what-is-ei", title: "What Is Early Intervention?" },
    { id: "who-qualifies", title: "Who Qualifies?" },
    { id: "how-to-start", title: "How to Get Started" },
    { id: "services", title: "Types of Services" },
    { id: "why-it-matters", title: "Why Early Action Matters" },
    { id: "advocate", title: "How to Advocate for Your Child" },
    { id: "when-to-call", title: "When to Call a Doctor" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Signs of Autism in Toddlers", slug: "signs-of-autism-in-toddlers" },
    { title: "Speech Delay in Toddlers", slug: "speech-delay-toddler" },
    { title: "ADHD in Toddlers", slug: "adhd-in-toddlers" },
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
              <span className="text-gray-700">Early Intervention</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              Early Intervention: A Parent's Guide to EI Services
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              If your child has a developmental delay, early intervention can make a real difference.
              Here is how the system works and how to get the support your child needs.
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
                    Early intervention (EI) provides therapy and support for babies and toddlers
                    (birth to age 3) with developmental delays. You do not need a doctor's referral to
                    ask for a free evaluation. The earlier support starts, the more it helps, because a
                    young child's brain grows and adapts quickly.
                  </p>
                </div>

                <section id="what-is-ei" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is Early Intervention?</h2>
                  <p className="text-gray-700 mb-4">
                    Early intervention is a set of services that help young children who are not
                    developing as expected, or who have a diagnosed condition. It can include speech
                    therapy, physical therapy, occupational therapy, and family coaching.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What is early intervention?</h3>
                    <p className="text-gray-700 mb-0">
                      Early intervention is a program of therapies and support for children from birth
                      to age 3 who have developmental delays or disabilities. Services may include
                      speech, physical, and occupational therapy. In many countries these services are
                      free or low-cost and do not require a doctor's referral to begin.
                    </p>
                  </div>
                  <p className="text-gray-700 mb-4">
                    In the United States, EI is offered through a federal program under Part C of the
                    Individuals with Disabilities Education Act (IDEA). Many other countries, including
                    the UK and Australia, run similar early childhood support services.
                  </p>
                </section>

                <section id="who-qualifies" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Who Qualifies?</h2>
                  <p className="text-gray-700 mb-4">
                    Eligibility is based on an evaluation, not a single label. A child may qualify if
                    they:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Show a delay in one or more areas (speech, movement, social, thinking, or self-care)</li>
                    <li>Have a diagnosed condition likely to cause delay, such as Down syndrome</li>
                    <li>Were born very prematurely or with low birth weight</li>
                    <li>Are not meeting expected developmental milestones</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    You know your child best. If you have a concern, you do not have to wait for a
                    doctor to bring it up first.
                  </p>
                </section>

                <section id="how-to-start" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Get Started</h2>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                    <li><strong>Contact your local EI program.</strong> Your pediatrician, hospital, or a quick search for your area's early intervention office can point you there.</li>
                    <li><strong>Request a free evaluation.</strong> A team will assess your child's development across key areas.</li>
                    <li><strong>Review the results together.</strong> If your child qualifies, you will help create a plan (in the US, an IFSP, or Individualized Family Service Plan).</li>
                    <li><strong>Begin services.</strong> Therapy often happens at home or in your child's daycare, built into everyday routines.</li>
                  </ol>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> When David's daughter was not using any words at
                      20 months, he called his local EI office directly. A free evaluation found a
                      speech delay, and a therapist began weekly home visits within a month. By age 3,
                      her words had taken off.
                    </p>
                  </div>
                </section>

                <section id="services" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Services</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Speech-language therapy:</strong> For communication and feeding</li>
                    <li><strong>Physical therapy:</strong> For movement, strength, and balance</li>
                    <li><strong>Occupational therapy:</strong> For fine motor and daily living skills</li>
                    <li><strong>Developmental therapy:</strong> For learning and play skills</li>
                    <li><strong>Family training:</strong> Coaching so you can support progress every day</li>
                    <li><strong>Hearing and vision services</strong> when needed</li>
                  </ul>
                </section>

                <section id="why-it-matters" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Early Action Matters</h2>
                  <p className="text-gray-700 mb-4">
                    A young child's brain is highly adaptable. This is why starting support early often
                    leads to better outcomes than waiting.
                  </p>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Builds skills during the brain's most flexible years</li>
                      <li>Can reduce the need for more intensive help later</li>
                      <li>Gives parents tools and confidence</li>
                      <li>Supports the whole family, not just the child</li>
                    </ul>
                  </div>
                </section>

                <section id="advocate" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Advocate for Your Child</h2>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Keep a simple record of your concerns and your child's progress</li>
                    <li>Ask questions and request things in writing</li>
                    <li>Bring notes and examples to evaluations</li>
                    <li>Ask for a re-evaluation if your child does not qualify but concerns continue</li>
                    <li>Stay involved in therapy so you can practice between sessions</li>
                  </ul>
                </section>

                <section id="when-to-call" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call a Doctor</h2>
                  <p className="text-gray-700 mb-4">
                    Talk to your pediatrician right away if your child:
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Loses skills they once had</li>
                      <li>Is not babbling or gesturing by 12 months</li>
                      <li>Has no words by 16 months or no two-word phrases by 24 months</li>
                      <li>Is not walking by 18 months</li>
                      <li>Does not make eye contact or respond to their name</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Your doctor can guide you to an evaluation and rule out medical causes such as
                    hearing loss.
                  </p>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Does early intervention cost money?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        In many places the evaluation is free, and services are free or low-cost based
                        on income. Costs and rules vary by country and region, so ask your local
                        program about fees.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Do I need a doctor's referral?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Usually not. In most early intervention programs, parents can request an
                        evaluation directly. A pediatrician can help, but you do not have to wait for a
                        referral to start.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        What happens when my child turns 3?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Early intervention usually ends at age 3. Your team will help you transition to
                        preschool special education services or other community supports if your child
                        still needs them.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        What if my child does not qualify?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        If concerns remain, you can ask for a re-evaluation later, since development
                        changes quickly. You can also work with your pediatrician on private therapy or
                        at-home strategies.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Will early intervention "label" my child?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        EI focuses on building skills, not labeling children. Getting help early is a
                        sign of strong parenting, and many children catch up to peers with timely
                        support.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Medical Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational purposes only and is not a substitute for
                    professional medical advice, diagnosis, or treatment. Program rules vary by
                    location. Always consult your pediatrician and local early intervention office
                    about your child's needs.
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
  headline: "Early Intervention: A Parent's Guide to EI Services",
  description:
    "What early intervention is, who qualifies, how to get a free evaluation, what services are offered, and how to advocate for your child step by step.",
  image: "https://childbloom.site/images/articles/early-intervention-og.jpg",
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
    "@id": "https://childbloom.site/articles/early-intervention/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Does early intervention cost money?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "In many places the evaluation is free, and services are free or low-cost based on income. Costs and rules vary by country and region, so ask your local program about fees.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a doctor's referral?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Usually not. In most early intervention programs, parents can request an evaluation directly. A pediatrician can help, but you do not have to wait for a referral to start.",
      },
    },
    {
      "@type": "Question",
      name: "What happens when my child turns 3?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Early intervention usually ends at age 3. Your team will help you transition to preschool special education services or other community supports if your child still needs them.",
      },
    },
    {
      "@type": "Question",
      name: "What if my child does not qualify?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If concerns remain, you can ask for a re-evaluation later, since development changes quickly. You can also work with your pediatrician on private therapy or at-home strategies.",
      },
    },
    {
      "@type": "Question",
      name: "Will early intervention label my child?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "EI focuses on building skills, not labeling children. Getting help early is a sign of strong parenting, and many children catch up to peers with timely support.",
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
