import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/signs-of-autism-in-toddlers")({
  component: SignsOfAutismArticle,
  head: () => {
    const url = "https://childbloom.site/articles/signs-of-autism-in-toddlers/";
    return seo({
      title: "Signs of Autism in Toddlers: Early Red Flags | ChildBloom",
      description:
        "Early signs of autism in toddlers (12-36 months): social, communication, and behavioral red flags, when to seek evaluation, and what to do next.",
      url,
      type: "article",
      publishedTime: "2026-06-12",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/signs-of-autism-in-toddlers-og.jpg",
    });
  },
});

function SignsOfAutismArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "what-is-autism", title: "What Is Autism?" },
    { id: "social-signs", title: "Social & Communication Signs" },
    { id: "behavior-signs", title: "Behavioral Signs" },
    { id: "by-age", title: "Red Flags by Age" },
    { id: "causes", title: "Causes & Risk Factors" },
    { id: "myths", title: "Common Myths" },
    { id: "what-to-do", title: "What to Do Next" },
    { id: "when-to-worry", title: "When to Call a Doctor" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Speech Delay in Toddlers", slug: "speech-delay-toddler" },
    { title: "Early Intervention Services", slug: "early-intervention" },
    { title: "Speech Milestones", slug: "speech-milestones" },
    { title: "Sensory Processing Disorder", slug: "sensory-processing-disorder" },
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
              <span className="text-gray-700">Signs of Autism in Toddlers</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              Signs of Autism in Toddlers: Early Red Flags Parents Should Know
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              A warm, evidence-based guide to early signs of autism in children 12 to 36 months,
              what they mean, and the supportive steps you can take right away.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500">
              <span>By ChildBloom Medical Team</span>
              <span>•</span>
              <span>Updated June 21, 2026</span>
              <span>•</span>
              <span>15 min read</span>
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
                    Early signs of autism in toddlers include limited eye contact, not responding to
                    their name, little pointing or gesturing, delayed speech, repetitive movements,
                    and intense reactions to sounds or textures. No single sign confirms autism. If
                    you notice several, ask for a developmental evaluation. Early support leads to the
                    best outcomes.
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-8">
                  <p className="text-gray-700 mb-0">
                    <strong>Important:</strong> This article helps you recognize possible signs. It
                    does not diagnose autism. Only a qualified professional can do that. If you have
                    concerns, trust them and reach out to your pediatrician.
                  </p>
                </div>

                <section id="what-is-autism" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is Autism?</h2>
                  <p className="text-gray-700 mb-4">
                    Autism spectrum disorder (ASD) is a developmental difference that affects how a
                    person communicates, interacts socially, and experiences the world. It is called
                    a "spectrum" because it looks different in every child. Some children need a lot
                    of support; others need very little.
                  </p>
                  <p className="text-gray-700 mb-4">
                    According to the CDC, about 1 in 36 children is identified with autism. Signs
                    often appear by 12 to 18 months, and a reliable diagnosis can usually be made by
                    age 2. Autism is not caused by parenting, and it is not something a child grows
                    out of, but with support, children can thrive.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What is autism in toddlers?</h3>
                    <p className="text-gray-700 mb-0">
                      Autism spectrum disorder is a developmental difference that affects how a child
                      communicates, plays, and interacts with others. In toddlers, early signs may
                      include delayed speech, limited eye contact, not responding to their name, and
                      repetitive behaviors. Autism is lifelong, but early support improves outcomes.
                    </p>
                  </div>
                </section>

                <section id="social-signs" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Social and Communication Signs</h2>
                  <p className="text-gray-700 mb-4">
                    Social communication differences are often the earliest and most noticeable
                    signs. Watch for these in everyday moments.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Limited or inconsistent eye contact</li>
                    <li>Does not respond to their name by 12 months</li>
                    <li>Rarely points to show you something interesting by 18 months</li>
                    <li>Does not follow your point or gaze to look at an object</li>
                    <li>Few or no gestures, such as waving "bye-bye"</li>
                    <li>Little back-and-forth babbling or "conversation"</li>
                    <li>Delayed first words or loss of words once used</li>
                    <li>Prefers to play alone and shows little interest in other children</li>
                    <li>Rarely shares smiles or joyful expressions back and forth</li>
                  </ul>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> Sam noticed his 16-month-old daughter never
                      pointed at the dog or looked up when called. She was happy and active, but
                      these small differences led him to request an evaluation, opening the door to
                      early support.
                    </p>
                  </div>
                </section>

                <section id="behavior-signs" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Behavioral Signs</h2>
                  <p className="text-gray-700 mb-4">
                    Repetitive behaviors and strong preferences are another common group of signs.
                    Many of these behaviors can appear in any child, so look at the overall pattern.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Repetitive movements, such as hand-flapping, rocking, or spinning</li>
                    <li>Lining up toys or objects instead of pretend play</li>
                    <li>Intense focus on parts of objects, like spinning wheels</li>
                    <li>Strong need for sameness and big upset over small changes</li>
                    <li>Repeating words or phrases (echolalia)</li>
                    <li>Unusual reactions to sounds, lights, textures, tastes, or smells</li>
                    <li>Limited pretend or imaginative play</li>
                    <li>Walking on toes for long periods</li>
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What are the early signs of autism?</h3>
                    <p className="text-gray-700 mb-0">
                      Early signs of autism include limited eye contact, not responding to their
                      name, little pointing or gesturing, delayed or lost speech, repetitive
                      movements like hand-flapping, lining up toys, and strong reactions to sounds or
                      textures. Several signs together are more meaningful than one alone.
                    </p>
                  </div>
                </section>

                <section id="by-age" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Red Flags by Age</h2>
                  <p className="text-gray-700 mb-4">
                    The CDC recommends acting early if your child shows these signs. Talk to your
                    pediatrician if any apply.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">By 9 Months</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Few or no back-and-forth smiles or facial expressions</li>
                    <li>Little response to their name or familiar voices</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">By 12 Months</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>No babbling or "baby talk"</li>
                    <li>No gestures like waving or pointing</li>
                    <li>Does not respond to their name</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">By 18 Months</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>No single words</li>
                    <li>Does not point to show interest</li>
                    <li>Little pretend play</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">By 24 Months</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>No two-word phrases</li>
                    <li>Loss of speech or social skills at any age</li>
                    <li>Little interest in other children</li>
                  </ul>
                </section>

                <section id="causes" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Causes and Risk Factors</h2>
                  <p className="text-gray-700 mb-4">
                    Researchers believe autism develops from a mix of genetic and environmental
                    factors that affect early brain development. There is no single cause.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>A family history of autism</li>
                    <li>Having an older sibling with autism</li>
                    <li>Certain genetic conditions, such as fragile X syndrome</li>
                    <li>Older parental age at conception</li>
                    <li>Premature birth or very low birth weight</li>
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What causes autism?</h3>
                    <p className="text-gray-700 mb-0">
                      Autism is caused by a combination of genetic and environmental factors that
                      influence early brain development. It is not caused by parenting or by
                      vaccines. Risk factors include family history, certain genetic conditions, and
                      premature birth.
                    </p>
                  </div>
                </section>

                <section id="myths" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Myths</h2>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>
                        <strong>Myth:</strong> Vaccines cause autism. <strong>Fact:</strong> Large,
                        repeated studies show no link between vaccines and autism.
                      </li>
                      <li>
                        <strong>Myth:</strong> Bad parenting causes autism. <strong>Fact:</strong>{" "}
                        Autism is a neurodevelopmental difference, not a result of parenting.
                      </li>
                      <li>
                        <strong>Myth:</strong> Autistic children cannot show affection.{" "}
                        <strong>Fact:</strong> Many autistic children are deeply loving and connected
                        in their own ways.
                      </li>
                      <li>
                        <strong>Myth:</strong> Autism can be outgrown. <strong>Fact:</strong> Autism
                        is lifelong, but support helps children build skills and thrive.
                      </li>
                    </ul>
                  </div>
                </section>

                <section id="what-to-do" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Do Next</h2>
                  <p className="text-gray-700 mb-4">
                    If you notice signs, acting early is one of the most helpful things you can do.
                    You do not need a diagnosis to start getting support.
                  </p>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                    <li>
                      <strong>Track what you see.</strong> Jot down specific examples and ages to
                      share with your doctor. Short videos can be very helpful.
                    </li>
                    <li>
                      <strong>Talk to your pediatrician.</strong> Ask for developmental screening,
                      such as the M-CHAT, at your next visit.
                    </li>
                    <li>
                      <strong>Request an evaluation.</strong> Ask for a referral to a developmental
                      specialist or autism team.
                    </li>
                    <li>
                      <strong>Contact early intervention.</strong> In many countries, free or
                      low-cost services are available before a formal diagnosis.
                    </li>
                    <li>
                      <strong>Ask for a hearing test.</strong> Ruling out hearing loss helps clarify
                      speech and social concerns.
                    </li>
                  </ol>
                </section>

                <section id="when-to-worry" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call a Doctor</h2>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h3 className="font-semibold text-red-900 mb-2 mt-0">Reach Out If Your Child</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Loses speech or social skills they once had, at any age</li>
                      <li>Does not respond to their name by 12 months</li>
                      <li>Does not point or gesture by 18 months</li>
                      <li>Has no words by 16 months or no two-word phrases by 24 months</li>
                      <li>Shows several social or behavioral signs together</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Any loss of skills should be discussed with a doctor promptly. Early evaluation
                    means early support, and that makes a real difference.
                  </p>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Can autism be detected at 18 months?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Yes. Reliable signs often appear by 18 months, and screening tools like the
                        M-CHAT are used at 18 and 24 month checkups. A specialist can often make a
                        confident diagnosis by age 2.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        My toddler makes eye contact. Does that rule out autism?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        No. Some autistic children do make eye contact. Autism looks different in
                        every child, so consider the full pattern of behavior rather than a single
                        sign.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Is hand-flapping always a sign of autism?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Not always. Many young children flap their hands when excited. It becomes
                        more notable when it is frequent and paired with other signs, such as speech
                        delay or limited social interaction.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Do vaccines cause autism?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        No. Extensive scientific research has found no link between vaccines and
                        autism. Vaccines protect your child from serious, preventable diseases.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Should I wait and see, or get an evaluation now?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        If you have concerns, do not wait. Early evaluation and support lead to better
                        outcomes. You can begin early intervention services even before a formal
                        diagnosis.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Can children with autism live full, happy lives?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Absolutely. With understanding, support, and acceptance, autistic children can
                        learn, grow, build relationships, and lead meaningful, fulfilling lives.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Medical Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational purposes only and is not a substitute for
                    professional medical advice, diagnosis, or treatment. It cannot diagnose autism.
                    Always consult your pediatrician or a qualified specialist about your child's
                    development.
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
  headline: "Signs of Autism in Toddlers: Early Red Flags Parents Should Know",
  description:
    "Early signs of autism in toddlers (12-36 months): social, communication, and behavioral red flags, when to seek evaluation, and what to do next.",
  image: "https://childbloom.site/images/articles/signs-of-autism-in-toddlers-og.jpg",
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
    "@id": "https://childbloom.site/articles/signs-of-autism-in-toddlers/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Can autism be detected at 18 months?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Reliable signs often appear by 18 months, and screening tools like the M-CHAT are used at 18 and 24 month checkups. A specialist can often make a confident diagnosis by age 2.",
      },
    },
    {
      "@type": "Question",
      name: "My toddler makes eye contact. Does that rule out autism?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Some autistic children do make eye contact. Autism looks different in every child, so consider the full pattern of behavior rather than a single sign.",
      },
    },
    {
      "@type": "Question",
      name: "Is hand-flapping always a sign of autism?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not always. Many young children flap their hands when excited. It becomes more notable when it is frequent and paired with other signs, such as speech delay or limited social interaction.",
      },
    },
    {
      "@type": "Question",
      name: "Do vaccines cause autism?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "No. Extensive scientific research has found no link between vaccines and autism. Vaccines protect your child from serious, preventable diseases.",
      },
    },
    {
      "@type": "Question",
      name: "Should I wait and see, or get an evaluation now?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "If you have concerns, do not wait. Early evaluation and support lead to better outcomes. You can begin early intervention services even before a formal diagnosis.",
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
