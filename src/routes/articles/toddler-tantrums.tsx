import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/toddler-tantrums")({
  component: ToddlerTantrumsArticle,
  head: () => {
    const url = "https://childbloom.site/articles/toddler-tantrums/";
    return seo({
      title: "Toddler Tantrums: Why They Happen & How to Stay Calm | ChildBloom",
      description:
        "Why toddler tantrums happen, proven calm-down strategies, prevention tips, and clear signs it's time to call your pediatrician. Evidence-based parenting help.",
      url,
      type: "article",
      publishedTime: "2026-06-12",
      modifiedTime: "2026-06-21",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/images/articles/toddler-tantrums-og.jpg",
    });
  },
});

function ToddlerTantrumsArticle() {
  const tableOfContents = [
    { id: "quick-answer", title: "Quick Answer" },
    { id: "what-are-tantrums", title: "What Are Toddler Tantrums?" },
    { id: "why-they-happen", title: "Why Tantrums Happen" },
    { id: "common-triggers", title: "Common Triggers" },
    { id: "in-the-moment", title: "In-the-Moment Strategies" },
    { id: "prevention", title: "Prevention Strategies" },
    { id: "public-tantrums", title: "Handling Public Tantrums" },
    { id: "breath-holding", title: "Breath-Holding & Big Reactions" },
    { id: "when-to-worry", title: "When to Call a Doctor" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Parenting Survival Guide", slug: "parenting-survival-guide" },
    { title: "Potty Training Guide", slug: "potty-training-guide" },
    { title: "Toddler Biting: Why It Happens", slug: "toddler-biting" },
    { title: "Speech Delay in Toddlers", slug: "speech-delay-toddler" },
    { title: "Parenting Hacks", slug: "parenting-hacks" },
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
              <span className="text-gray-700">Toddler Tantrums</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight text-balance">
              Toddler Tantrums: Why They Happen and How to Handle Them Calmly
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed text-pretty">
              A warm, evidence-based guide to understanding tantrums, calming the storm in the
              moment, preventing meltdowns, and knowing when to ask for help.
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
                    Tantrums are a normal, healthy part of toddler development. They happen because
                    young children feel big emotions but do not yet have the brain maturity or words
                    to manage them. Staying calm, naming feelings, and keeping consistent routines
                    are the most effective responses. Most tantrums fade as language and self-control
                    grow between ages 4 and 5.
                  </p>
                </div>

                <section id="what-are-tantrums" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What Are Toddler Tantrums?</h2>
                  <p className="text-gray-700 mb-4">
                    A tantrum is an outburst of frustration, anger, or distress. It can include
                    crying, screaming, kicking, throwing, falling to the floor, or going stiff.
                    Tantrums are most common between 1 and 4 years of age, peaking around age 2,
                    which is why this stage is often called the "terrible twos."
                  </p>
                  <p className="text-gray-700 mb-4">
                    According to the American Academy of Pediatrics (AAP), tantrums are a typical way
                    young children release overwhelming feelings. They are not a sign of bad
                    parenting or a "bad" child. They are a developmental milestone, much like
                    learning to walk or talk.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What is a toddler tantrum?</h3>
                    <p className="text-gray-700 mb-0">
                      A toddler tantrum is a normal emotional outburst, such as crying, screaming, or
                      kicking, that happens when a young child feels overwhelmed and cannot yet
                      express or manage strong feelings. Tantrums are most common between ages 1 and
                      4 and usually fade as language and self-control develop.
                    </p>
                  </div>
                </section>

                <section id="why-they-happen" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Tantrums Happen</h2>
                  <p className="text-gray-700 mb-4">
                    Tantrums come from a gap between what a toddler wants to do and what they are able
                    to do or say. Their brains are still under construction, and the part that
                    controls impulses develops slowly through childhood.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Key Developmental Reasons</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>
                      <strong>An immature brain:</strong> The prefrontal cortex, which manages
                      impulse control and reasoning, is far from fully developed in toddlers.
                    </li>
                    <li>
                      <strong>Limited language:</strong> Toddlers often understand more than they can
                      say. Not being able to express a need is deeply frustrating.
                    </li>
                    <li>
                      <strong>A drive for independence:</strong> Toddlers want to do things
                      themselves, yet still need help, creating constant inner conflict.
                    </li>
                    <li>
                      <strong>Big feelings, small tools:</strong> They feel anger, disappointment,
                      and fear intensely but have few healthy ways to cope.
                    </li>
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-blue-900 mb-2 mt-0">Featured Snippet: What causes toddler tantrums?</h3>
                    <p className="text-gray-700 mb-0">
                      Toddler tantrums are caused by a developing brain that cannot yet control
                      strong impulses, combined with limited language to express needs. Common
                      triggers include hunger, tiredness, overstimulation, transitions, and being
                      told "no."
                    </p>
                  </div>
                </section>

                <section id="common-triggers" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Triggers</h2>
                  <p className="text-gray-700 mb-4">
                    Many tantrums are predictable once you learn your child's patterns. Watching for
                    these common triggers helps you prevent meltdowns before they start.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Hunger or low blood sugar between meals</li>
                    <li>Tiredness or a missed nap</li>
                    <li>Overstimulation from noise, crowds, or screens</li>
                    <li>Transitions, such as leaving the park or turning off the TV</li>
                    <li>Being told "no" or having a toy taken away</li>
                    <li>Wanting to be independent but needing help</li>
                    <li>Feeling rushed, ignored, or misunderstood</li>
                    <li>Illness, teething, or general discomfort</li>
                  </ul>
                  <div className="bg-pink-50 border-l-4 border-pink-400 p-5 rounded-r-lg mb-4">
                    <p className="text-gray-700 mb-0">
                      <strong>Parent scenario:</strong> Maya's 2-year-old melted down every evening
                      around 5:30 p.m. After tracking the pattern for a week, she realized it lined
                      up with hunger and end-of-day tiredness. Moving snack time 30 minutes earlier
                      cut the evening tantrums dramatically.
                    </p>
                  </div>
                </section>

                <section id="in-the-moment" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">In-the-Moment Strategies</h2>
                  <p className="text-gray-700 mb-4">
                    When a tantrum is in full swing, your goal is safety and connection, not
                    teaching. A toddler in meltdown mode cannot reason or learn lessons. Try these
                    steps in order.
                  </p>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                    <li>
                      <strong>Stay calm first.</strong> Your steady presence helps regulate your
                      child's nervous system. Take a slow breath and remind yourself this is normal.
                    </li>
                    <li>
                      <strong>Keep everyone safe.</strong> If your child is hitting, kicking, or
                      throwing, move them to a safe spot. Stay close, even if they need a little
                      space.
                    </li>
                    <li>
                      <strong>Name the feeling.</strong> Say something simple like, "You're really
                      mad we have to leave." Naming emotions builds emotional vocabulary over time.
                    </li>
                    <li>
                      <strong>Lower your voice and get low.</strong> Crouch to their level and speak
                      quietly. Big energy from you adds fuel; calm energy helps it settle.
                    </li>
                    <li>
                      <strong>Offer comfort, not a lecture.</strong> A hug or a calm hand on the back
                      can help once they are ready. Some children need space first.
                    </li>
                    <li>
                      <strong>Wait it out.</strong> Most tantrums last 1 to 5 minutes. Reconnect with
                      a cuddle once your child is calm.
                    </li>
                  </ol>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-green-900 mb-2 mt-0">Do</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Stay calm and patient</li>
                      <li>Acknowledge feelings out loud</li>
                      <li>Keep boundaries kind but firm</li>
                      <li>Reconnect warmly afterward</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-4">
                    <h3 className="font-semibold text-red-900 mb-2 mt-0">Avoid</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Yelling, shaming, or punishing the feeling itself</li>
                      <li>Giving in just to stop the noise (it teaches tantrums work)</li>
                      <li>Long explanations during the peak of the meltdown</li>
                      <li>Physical punishment, which raises stress and fear</li>
                    </ul>
                  </div>
                </section>

                <section id="prevention" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Prevention Strategies</h2>
                  <p className="text-gray-700 mb-4">
                    You cannot prevent every tantrum, and that is okay. But these everyday habits
                    reduce how often and how intensely they happen.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Keep consistent routines for meals, naps, and bedtime</li>
                    <li>Offer healthy snacks to avoid hunger meltdowns</li>
                    <li>Give a heads-up before transitions ("Two more minutes, then we clean up")</li>
                    <li>Offer small choices to restore a sense of control ("Red cup or blue cup?")</li>
                    <li>Catch and praise good behavior so attention is not only for tantrums</li>
                    <li>Childproof your space so you can say "yes" more often</li>
                    <li>Teach feeling words through books and daily talk</li>
                    <li>Limit overstimulation and screen time before outings</li>
                  </ul>
                </section>

                <section id="public-tantrums" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Handling Public Tantrums</h2>
                  <p className="text-gray-700 mb-4">
                    Public meltdowns feel stressful, but other parents understand. Focus on your
                    child, not the strangers around you.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Move to a quieter spot if possible, such as a car or hallway</li>
                    <li>Stay calm and ignore judgmental looks</li>
                    <li>Hold your boundary; do not buy the toy to end the scene</li>
                    <li>Keep trips short when your child is tired or hungry</li>
                    <li>Bring snacks and a small comfort item for long outings</li>
                  </ul>
                </section>

                <section id="breath-holding" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Breath-Holding and Big Reactions</h2>
                  <p className="text-gray-700 mb-4">
                    Some toddlers cry so hard they briefly hold their breath, turn red or pale, and
                    may even faint for a few seconds. These breath-holding spells are frightening to
                    watch but are usually harmless and not done on purpose.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Stay calm, keep your child safe from falling, and let them recover. Still,
                    mention any breath-holding spells to your pediatrician so they can confirm there
                    is no underlying issue, such as iron-deficiency anemia.
                  </p>
                </section>

                <section id="when-to-worry" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call a Doctor</h2>
                  <p className="text-gray-700 mb-4">
                    Tantrums are usually normal. But certain patterns are worth discussing with your
                    pediatrician or a child development specialist.
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h3 className="font-semibold text-red-900 mb-2 mt-0">Talk to a Doctor If</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-0">
                      <li>Tantrums regularly last longer than 15 to 20 minutes</li>
                      <li>They happen many times a day, every day</li>
                      <li>Your child often hurts themselves or others during tantrums</li>
                      <li>Tantrums are getting worse, not better, after age 4</li>
                      <li>Your child holds their breath until they faint</li>
                      <li>You also have concerns about speech, hearing, or social skills</li>
                      <li>The intensity is affecting your family's daily life or your wellbeing</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Trust your instincts. You know your child best, and your pediatrician would
                    rather reassure you than miss something treatable.
                  </p>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Is it okay to ignore a tantrum?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        For minor attention-seeking tantrums, calmly staying nearby without engaging
                        can work well. Always keep your child safe, and reconnect with warmth once
                        they calm down. Fully walking away can feel scary to a young child, so stay
                        present even if you are not actively responding.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Should I give in to stop the tantrum?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Giving in teaches your child that tantrums get results, which can make them
                        more frequent. It is better to hold your boundary kindly while offering
                        comfort. In public, it is fine to leave the situation rather than cave in.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        My child has tantrums every day. Is that normal?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Daily tantrums are common between ages 1 and 3. Look at sleep, hunger,
                        overstimulation, and unmet emotional needs. If tantrums are very long,
                        violent, or worsening after age 4, check in with your pediatrician.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        What is the best way to stop a tantrum fast?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        There is no instant fix, but staying calm, naming the feeling, and offering a
                        simple choice often shortens a tantrum. Prevention, such as avoiding hunger
                        and tiredness, works better than any in-the-moment trick.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        Do tantrums mean my child will have behavior problems later?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        No. Typical toddler tantrums are a normal developmental stage and do not
                        predict future behavior problems. Most children naturally have fewer tantrums
                        as their language and self-control improve.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 mt-0">
                        At what age should tantrums stop?
                      </h3>
                      <p className="text-gray-700 mb-0">
                        Tantrums usually decrease significantly between ages 4 and 5 as children learn
                        to express themselves with words. Occasional outbursts beyond this age are
                        still normal, especially when a child is tired or overwhelmed.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3 mt-0">Medical Disclaimer</h3>
                  <p className="text-pink-800 mb-0">
                    This article is for educational purposes only and is not a substitute for
                    professional medical advice, diagnosis, or treatment. Always consult your
                    pediatrician or a qualified healthcare provider about your child's health,
                    development, or behavior.
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
  headline: "Toddler Tantrums: Why They Happen and How to Handle Them Calmly",
  description:
    "Why toddler tantrums happen, proven calm-down strategies, prevention tips, and clear signs it's time to call your pediatrician.",
  image: "https://childbloom.site/images/articles/toddler-tantrums-og.jpg",
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
    "@id": "https://childbloom.site/articles/toddler-tantrums/",
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Is it okay to ignore a tantrum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For minor attention-seeking tantrums, calmly staying nearby without engaging can work. Keep your child safe and reconnect warmly once they calm down. Fully walking away can feel scary to a young child, so stay present.",
      },
    },
    {
      "@type": "Question",
      name: "Should I give in to stop the tantrum?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Giving in teaches a child that tantrums get results, which can make them more frequent. Hold your boundary kindly while offering comfort. In public, it is fine to leave the situation rather than cave in.",
      },
    },
    {
      "@type": "Question",
      name: "My child has tantrums every day. Is that normal?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Daily tantrums are common between ages 1 and 3. Look at sleep, hunger, and overstimulation. If tantrums are very long, violent, or worsening after age 4, check in with your pediatrician.",
      },
    },
    {
      "@type": "Question",
      name: "What is the best way to stop a tantrum fast?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "There is no instant fix, but staying calm, naming the feeling, and offering a simple choice often shortens a tantrum. Prevention, such as avoiding hunger and tiredness, works better than any in-the-moment trick.",
      },
    },
    {
      "@type": "Question",
      name: "At what age should tantrums stop?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Tantrums usually decrease significantly between ages 4 and 5 as children learn to express themselves with words. Occasional outbursts beyond this age are still normal, especially when a child is tired or overwhelmed.",
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
