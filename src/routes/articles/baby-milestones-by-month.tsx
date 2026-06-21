import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/baby-milestones-by-month")({
  component: BabyMilestonesByMonth,
  head: () => {
    const url = "https://childbloom.site/articles/baby-milestones-by-month/";
    return seo({
      title: "Baby Milestones by Month: Complete First Year Guide | ChildBloom",
      description:
        "Month-by-month baby development guide: motor, cognitive, language, and social milestones for 0-12 months. Includes red flags and when to talk to your pediatrician.",
      url,
      type: "article",
      publishedTime: "2025-03-01",
      modifiedTime: "2025-06-10",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/og-image.png",
    });
  },
});

function BabyMilestonesByMonth() {
  const tableOfContents = [
    { id: "how-to-use", title: "How to Use This Guide" },
    { id: "newborn", title: "Month 1: Newborn" },
    { id: "month2", title: "Month 2" },
    { id: "month3", title: "Month 3" },
    { id: "month4", title: "Month 4" },
    { id: "month5", title: "Month 5" },
    { id: "month6", title: "Month 6" },
    { id: "month7", title: "Month 7" },
    { id: "month8", title: "Month 8" },
    { id: "month9", title: "Month 9" },
    { id: "month10", title: "Month 10" },
    { id: "month11", title: "Month 11" },
    { id: "month12", title: "Month 12" },
    { id: "red-flags", title: "Red Flags by Age" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Child Development Milestones", slug: "/articles/child-development-milestones/" },
    { title: "Best Educational Toys", slug: "/articles/best-educational-toys/" },
    { title: "Speech Development Guide", slug: "/articles/speech-development-guide/" },
    { title: "Newborn Care Guide", slug: "/articles/newborn-care-guide/" },
    { title: "Starting Solids Guide", slug: "/articles/starting-solids/" },
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
              <span className="text-gray-700">Baby Milestones by Month</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Baby Milestones by Month: Complete First Year Guide
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Month-by-month baby development guide: motor, cognitive, language, and social
              milestones for 0-12 months. Includes red flags and when to talk to your pediatrician.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>By ChildBloom Medical Team</span>
              <span>•</span>
              <span>June 10, 2025</span>
              <span>•</span>
              <span>25 min read</span>
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
                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg mb-8">
                  <p className="text-pink-900 font-medium text-lg">
                    Every baby develops at their own pace. This month-by-month guide shows typical
                    milestones, but there's a wide range of normal. Use it as a reference, not a
                    checklist. When in doubt, ask your pediatrician.
                  </p>
                </div>

                <section id="how-to-use" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Use This Guide</h2>
                  <p className="text-gray-700 mb-4">
                    Developmental milestones are behaviors or physical skills seen in infants and
                    children as they grow. They're grouped into four domains:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>
                      <strong>Gross Motor:</strong> Large movements (rolling, sitting, crawling,
                      walking)
                    </li>
                    <li>
                      <strong>Fine Motor:</strong> Small movements (grasping, pinching, manipulating
                      objects)
                    </li>
                    <li>
                      <strong>Language/Cognitive:</strong> Communication, understanding,
                      problem-solving
                    </li>
                    <li>
                      <strong>Social-Emotional:</strong> Interaction, attachment, self-awareness
                    </li>
                  </ul>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Important Reminders</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Premature babies: Use adjusted age (due date, not birth date)</li>
                      <li>Range is wide: "Normal" spans several months for each milestone</li>
                      <li>
                        Regression is temporary: Illness, travel, new skills can cause brief
                        setbacks
                      </li>
                      <li>Cluster skills: Babies often master one domain before another</li>
                      <li>Trust your instincts: You know your baby best</li>
                    </ul>
                  </div>
                </section>

                <section id="newborn" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Month 1: Newborn</h2>
                  <p className="text-gray-700 mb-4">
                    Your newborn is adjusting to life outside the womb. Reflexes dominate. They're
                    learning to regulate their body and recognize you.
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Typical Milestones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Gross Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Lifts head briefly during tummy time</li>
                          <li>Turns head side to side</li>
                          <li>Jerky, uncoordinated arm/leg movements</li>
                          <li>Strong reflexes: rooting, sucking, grasp, Moro</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Fine Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Hands mostly fisted</li>
                          <li>Grasp reflex strong (palmar grasp)</li>
                          <li>Brings hands to mouth</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Language/Cognitive</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Startles at loud sounds</li>
                          <li>Makes eye contact briefly</li>
                          <li>Focuses on faces 8-12 inches away</li>
                          <li>Cooing sounds (vowels)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Social-Emotional</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Calms when held/spoken to</li>
                          <li>Recognizes parent voices/smell</li>
                          <li>Prefers human faces over objects</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Activities to Support Development
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Tummy time: 2-3 minutes, 2-3x/day (supervised)</li>
                    <li>Talk, sing, narrate your day</li>
                    <li>High-contrast cards/images (black/white/red)</li>
                    <li>Skin-to-skin contact</li>
                    <li>Gentle infant massage</li>
                  </ul>
                </section>

                <section id="month2" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Month 2</h2>
                  <p className="text-gray-700 mb-4">
                    Your baby is becoming more alert and interactive. The first social smiles
                    appear!
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Typical Milestones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Gross Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Holds head up 45° during tummy time</li>
                          <li>Smoother arm/leg movements</li>
                          <li>Pushes up on forearms briefly</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Fine Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Hands open more often</li>
                          <li>Bats at dangling objects</li>
                          <li>Brings hands together at midline</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Language/Cognitive</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>
                            <strong>Social smile!</strong> Responds to your smile
                          </li>
                          <li>Cooing, gurgling vowel sounds</li>
                          <li>Follows objects 180°</li>
                          <li>Recognizes familiar faces</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Social-Emotional</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Enjoys play with people</li>
                          <li>Cries differently for different needs</li>
                          <li>Self-soothes briefly (sucking hands)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="month3" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Month 3</h2>
                  <p className="text-gray-700 mb-4">
                    The "fourth trimester" is ending. Your baby has more control and is actively
                    exploring their world.
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Typical Milestones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Gross Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Holds head steady, 90° in tummy time</li>
                          <li>Pushes up on forearms, lifts chest</li>
                          <li>May roll tummy to back (accidentally)</li>
                          <li>Kicks legs vigorously</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Fine Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Opens/closes hands intentionally</li>
                          <li>Grasps rattle placed in hand</li>
                          <li>Brings hands to mouth consistently</li>
                          <li>Swipes at hanging toys</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Language/Cognitive</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Laughs out loud</li>
                          <li>Babbles consonant sounds (ba, da, ma)</li>
                          <li>Turns head toward sounds</li>
                          <li>Anticipates routines (bottle = food)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Social-Emotional</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Enjoys social play (peek-a-boo)</li>
                          <li>Shows excitement (kicks, waves arms)</li>
                          <li>May cry when play stops</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="month4" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Month 4</h2>
                  <p className="text-gray-700 mb-4">
                    Major physical gains! Rolling, reaching, and more purposeful movement. Sleep may
                    regress (4-month regression).
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Typical Milestones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Gross Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Rolls tummy to back (intentional)</li>
                          <li>Pushes up on hands (straight arms)</li>
                          <li>Bears weight on legs when held upright</li>
                          <li>Rocks on hands and knees</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Fine Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Reaches for and grasps objects</li>
                          <li>Brings toys to mouth</li>
                          <li>Transfers objects hand to hand (beginning)</li>
                          <li>Rakes small objects toward self</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Language/Cognitive</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Babbles with expression (conversational)</li>
                          <li>Responds to "no" (pauses)</li>
                          <li>Recognizes own name</li>
                          <li>Explores cause-effect (shake rattle = sound)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Social-Emotional</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Enjoys mirror play</li>
                          <li>Shows preference for primary caregivers</li>
                          <li>May show stranger anxiety (beginnings)</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-yellow-900 mb-2">4-Month Sleep Regression</h4>
                    <p className="text-gray-700">
                      Around 4 months, sleep cycles mature and babies wake between cycles. This is a
                      progression, not a regression. Consistency with sleep routines helps. See our{" "}
                      <Link
                        to="/articles/baby-sleep-guide"
                        className="text-pink-600 hover:underline"
                      >
                        Baby Sleep Guide
                      </Link>{" "}
                      for strategies.
                    </p>
                  </div>
                </section>

                <section id="month5" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Month 5</h2>
                  <p className="text-gray-700 mb-4">
                    Your baby is becoming mobile! Rolling both ways, sitting with support, and more
                    sophisticated babbling.
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Typical Milestones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Gross Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Rolls both ways (tummy to back, back to tummy)</li>
                          <li>Sits with support (tripod sit - hands on floor)</li>
                          <li>Pushes up to straight arms</li>
                          <li>May pivot in circle on tummy</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Fine Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Reaches with one hand</li>
                          <li>Transfers objects hand to hand</li>
                          <li>Rakes small objects (palmar grasp)</li>
                          <li>Bangs objects on table</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Language/Cognitive</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Babbles consonant chains (bababa, dadada)</li>
                          <li>Turns to voice across room</li>
                          <li>Looks for dropped objects</li>
                          <li>Distinguishes emotions by tone</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Social-Emotional</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Recognizes familiar vs. unfamiliar people</li>
                          <li>Plays simple games (pat-a-cake)</li>
                          <li>Shows joy, displeasure clearly</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="month6" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Month 6: Halfway There!</h2>
                  <p className="text-gray-700 mb-4">
                    Major milestone: sitting independently! Also starting solids, stranger anxiety
                    peaks, and babbling sounds more like words.
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Typical Milestones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Gross Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>
                            <strong>Sits independently!</strong> (briefly at first)
                          </li>
                          <li>Rolls both ways fluently</li>
                          <li>Bears full weight on legs, bounces</li>
                          <li>May rock on hands and knees</li>
                          <li>Attempts to crawl (army crawl)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Fine Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Rakes objects with all fingers</li>
                          <li>Transfers smoothly hand to hand</li>
                          <li>Bangs two objects together</li>
                          <li>Begins pincer grasp (thumb + forefinger)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Language/Cognitive</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Responds to own name consistently</li>
                          <li>Babbles with varied consonants (mamama, dadada)</li>
                          <li>Understands "no" (stops briefly)</li>
                          <li>Finds partially hidden object</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Social-Emotional</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>
                            <strong>Stranger anxiety peaks</strong>
                          </li>
                          <li>Enjoys social games (peek-a-boo, pat-a-cake)</li>
                          <li>Shows preference for certain toys</li>
                          <li>May show separation distress</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-green-900 mb-2">Starting Solids!</h4>
                    <p className="text-gray-700">
                      Around 6 months, most babies show readiness for solids. See our{" "}
                      <Link
                        to="/articles/starting-solids-guide"
                        className="text-pink-600 hover:underline"
                      >
                        Starting Solids Guide
                      </Link>{" "}
                      for everything you need to know.
                    </p>
                  </div>
                </section>

                <section id="month7" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Month 7</h2>
                  <p className="text-gray-700 mb-4">
                    Crawling begins! Your baby is on the move. Object permanence develops—they know
                    things exist even when hidden.
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Typical Milestones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Gross Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Crawls (army crawl or hands-knees)</li>
                          <li>Sits well without support</li>
                          <li>Pulls to stand with support</li>
                          <li>Gets into sitting from tummy</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Fine Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Developing pincer grasp</li>
                          <li>Pokes with index finger</li>
                          <li>Bangs objects together intentionally</li>
                          <li>Tries to feed self with hands</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Language/Cognitive</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Understands object permanence</li>
                          <li>Looks for hidden objects</li>
                          <li>Imitates sounds/gestures</li>
                          <li>Babbles with inflection (sounds like sentences)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Social-Emotional</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Tests boundaries (throws food, watches reaction)</li>
                          <li>Shows attachment to lovey/blanket</li>
                          <li>May have strong stranger anxiety</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="month8" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Month 8</h2>
                  <p className="text-gray-700 mb-4">
                    Mastering mobility: crawling well, pulling up, cruising. First words may emerge
                    ("mama", "dada" - specific or not).
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Typical Milestones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Gross Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Crawls efficiently</li>
                          <li>Pulls to stand on furniture</li>
                          <li>Cruises (walks holding furniture)</li>
                          <li>May stand alone briefly</li>
                          <li>Gets into sitting from lying</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Fine Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Pincer grasp developing (thumb + forefinger)</li>
                          <li>Picks up small objects (Cheerios)</li>
                          <li>Points with index finger</li>
                          <li>Claps hands</li>
                          <li>Waves bye-bye</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Language/Cognitive</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Says "mama"/"dada" (may not be specific)</li>
                          <li>Understands simple commands ("come here")</li>
                          <li>Imitates gestures (clap, wave)</li>
                          <li>Explores objects in different ways (shake, bang, throw)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Social-Emotional</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Shows clear preferences for people/toys</li>
                          <li>May be clingy with primary caregiver</li>
                          <li>Enjoys interactive games</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="month9" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Month 9</h2>
                  <p className="text-gray-700 mb-4">
                    Standing alone, cruising confidently, and understanding much more language.
                    Separation anxiety often peaks.
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Typical Milestones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Gross Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Stands alone briefly</li>
                          <li>Cruises confidently</li>
                          <li>May take first independent steps</li>
                          <li>Crawls up stairs (supervised!)</li>
                          <li>Sits down from standing (controlled)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Fine Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Mature pincer grasp</li>
                          <li>Puts objects in container, takes out</li>
                          <li>Turns pages of board book (clumsily)</li>
                          <li>Uses spoon (messily)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Language/Cognitive</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Understands "no" and simple requests</li>
                          <li>Says 1-2 words with meaning</li>
                          <li>Imitates words/sounds</li>
                          <li>Points to objects when named</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Social-Emotional</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>
                            <strong>Separation anxiety peaks</strong>
                          </li>
                          <li>Shows affection (hugs, kisses)</li>
                          <li>May have favorite toy/lovey</li>
                          <li>Imitates others' actions</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="month10" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Month 10</h2>
                  <p className="text-gray-700 mb-4">
                    Walking may be imminent! Language explodes—understanding far exceeds speaking.
                    Problem-solving emerges.
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Typical Milestones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Gross Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Stands alone well</li>
                          <li>Takes steps holding hands</li>
                          <li>May walk independently</li>
                          <li>Squats to pick up toy</li>
                          <li>Climbs stairs on hands/knees</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Fine Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Stacks 2 blocks</li>
                          <li>Places objects in container precisely</li>
                          <li>Turns knobs, pushes buttons</li>
                          <li>Self-feeds finger foods well</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Language/Cognitive</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Understands 50+ words</li>
                          <li>Says 3-5 words with meaning</li>
                          <li>Follows 1-step commands</li>
                          <li>Explores cause-effect intentionally</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Social-Emotional</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Plays independently briefly</li>
                          <li>Shows empathy (cries when other cries)</li>
                          <li>Tests limits, watches reactions</li>
                          <li>Wants to "help" with tasks</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="month11" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Month 11</h2>
                  <p className="text-gray-700 mb-4">
                    Walking, climbing, and communicating. Your baby is becoming a toddler!
                    Personality shines through.
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Typical Milestones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Gross Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Walks independently (or very close)</li>
                          <li>Climbs onto furniture</li>
                          <li>Dances/bounces to music</li>
                          <li>Throws ball (underhand)</li>
                          <li>Walks up stairs with help</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Fine Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Stacks 3-4 blocks</li>
                          <li>Turns pages one at a time</li>
                          <li>Scribbles with crayon</li>
                          <li>Helps dress/undress</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Language/Cognitive</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Says 5-10 words</li>
                          <li>Understands simple questions ("where's ball?")</li>
                          <li>Imitates animal sounds</li>
                          <li>Finds hidden objects easily</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Social-Emotional</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Shows definite preferences</li>
                          <li>May have tantrums (frustration)</li>
                          <li>Engages in parallel play</li>
                          <li>Seeks praise/approval</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </section>

                <section id="month12" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Month 12: Happy First Birthday!
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Your baby is now a toddler! Walking, talking, exploring. The first year brought
                    incredible transformation.
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Typical Milestones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Gross Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Walks independently</li>
                          <li>Stops, starts, turns while walking</li>
                          <li>Carries toy while walking</li>
                          <li>Climbs out of crib (lower mattress!)</li>
                          <li>May run (stiff-legged)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Fine Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Stacks 4-6 blocks</li>
                          <li>Turns pages of board book</li>
                          <li>Scribbles spontaneously</li>
                          <li>Feeds self with spoon (messy)</li>
                          <li>Helps dress (pushes arms through sleeves)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Language/Cognitive</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Says 3-10+ words</li>
                          <li>Understands 50-100+ words</li>
                          <li>Follows 1-step commands</li>
                          <li>Points to body parts</li>
                          <li>Imitates household activities</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Social-Emotional</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Shows affection to familiar people</li>
                          <li>May be shy with strangers</li>
                          <li>Engages in simple pretend play</li>
                          <li>Shows independence ("me do it")</li>
                          <li>Separation anxiety easing</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="bg-pink-50 border border-pink-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-pink-900 mb-2">12-Month Well Visit</h4>
                    <p className="text-gray-700">
                      Schedule the 1-year checkup! Your pediatrician will assess growth,
                      development, and give vaccines (MMR, Varicella, Hep A, possibly others).
                      Discuss any concerns.
                    </p>
                  </div>
                </section>

                <section id="red-flags" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Red Flags: When to Talk to Your Pediatrician
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Every baby develops at their own pace, but certain signs warrant a conversation
                    with your doctor. Early intervention makes a huge difference.
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">By 2 Months</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Doesn't respond to loud sounds</li>
                      <li>Doesn't watch things as they move</li>
                      <li>Doesn't smile at people</li>
                      <li>Doesn't bring hands to mouth</li>
                      <li>Can't hold head up when pushing up on tummy</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">By 4 Months</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Doesn't watch things moving</li>
                      <li>Doesn't smile at people</li>
                      <li>Can't hold head steady</li>
                      <li>Doesn't coo or make sounds</li>
                      <li>Doesn't bring things to mouth</li>
                      <li>Doesn't push down with legs when feet on hard surface</li>
                      <li>Has trouble moving eyes in all directions</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">By 6 Months</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Doesn't try to get things in reach</li>
                      <li>Shows no affection for caregivers</li>
                      <li>Doesn't respond to sounds around</li>
                      <li>Has difficulty getting things to mouth</li>
                      <li>Doesn't make vowel sounds (ah, eh, oh)</li>
                      <li>Doesn't roll over in either direction</li>
                      <li>Doesn't laugh or squeal</li>
                      <li>Seems very stiff or very floppy</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">By 9 Months</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Doesn't bear weight on legs with support</li>
                      <li>Doesn't sit with help</li>
                      <li>Doesn't babble (mama, baba, dada)</li>
                      <li>Doesn't play back-and-forth games</li>
                      <li>Doesn't respond to own name</li>
                      <li>Doesn't seem to recognize familiar people</li>
                      <li>Doesn't look where you point</li>
                      <li>Doesn't transfer toys hand to hand</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">By 12 Months</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Doesn't crawl</li>
                      <li>Can't stand when supported</li>
                      <li>Doesn't search for hidden objects</li>
                      <li>Doesn't say single words (mama, dada)</li>
                      <li>Doesn't learn gestures (wave, shake head)</li>
                      <li>Doesn't point to things</li>
                      <li>Loses skills they once had</li>
                    </ul>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">
                      Autism-Specific Red Flags (by 12-18 months)
                    </h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>No big smiles or warm expressions by 6 months</li>
                      <li>No back-and-forth sharing of sounds/faces by 9 months</li>
                      <li>No babbling by 12 months</li>
                      <li>No back-and-forth gestures (point, show, reach, wave) by 12 months</li>
                      <li>No words by 16 months</li>
                      <li>No meaningful 2-word phrases by 24 months</li>
                      <li>Any loss of speech, babbling, or social skills at any age</li>
                    </ul>
                    <p className="text-gray-700 mt-3">
                      M-CHAT screening is done at 18 and 24 month well visits. Ask your pediatrician
                      if you have concerns earlier.
                    </p>
                  </div>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        My baby isn't hitting milestones "on time." Should I worry?
                      </h3>
                      <p className="text-gray-700">
                        There's a wide range of normal. Many babies skip crawling entirely, walk at
                        15 months, or talk late—and turn out fine. If your pediatrician isn't
                        concerned, try not to worry. Focus on progress, not exact ages.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        What if my baby was premature?
                      </h3>
                      <p className="text-gray-700">
                        Use corrected age (based on due date) for milestones until about 2 years
                        old. A baby born at 32 weeks, now 6 months old (4 months corrected), should
                        be compared to 4-month milestones. Most preemies catch up by age 2.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        My baby skipped crawling. Is that a problem?
                      </h3>
                      <p className="text-gray-700">
                        No! Many babies skip crawling entirely (bottom scoot, roll, or go straight
                        to walking). The AAP no longer considers crawling a required milestone. What
                        matters is that your baby finds a way to move and explore.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        How much tummy time does my baby need?
                      </h3>
                      <p className="text-gray-700">
                        Start with 2-3 minutes, 2-3x/day from day one. Build to 15-30 minutes total
                        by 3 months, 60+ minutes by 6 months. Break it into short sessions. If baby
                        hates it, try on your chest, over a rolled towel, or with engaging toys.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        When should my baby say their first word?
                      </h3>
                      <p className="text-gray-700">
                        Typically 10-14 months, but 8-18 months is normal range. "Mama/dada" with
                        meaning usually emerges around 12 months. Receptive language (understanding)
                        develops months before expressive (speaking). Talk to your pediatrician if
                        no words by 16 months.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Can I do anything to help my baby reach milestones faster?
                      </h3>
                      <p className="text-gray-700">
                        You can't rush development, but you can support it: lots of floor time,
                        talk/narrate constantly, read daily, limit containers (swings, bouncers,
                        walkers), and respond to your baby's cues. The best "educational toy" is
                        you!
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3">Medical Disclaimer</h3>
                  <p className="text-pink-800">
                    The information provided in this article is for educational purposes only and is
                    not a substitute for professional medical advice, diagnosis, or treatment.
                    Always consult with a qualified healthcare provider regarding any medical
                    concerns or conditions.
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

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Baby Milestones by Month: Complete First Year Guide",
  description:
    "Month-by-month baby development guide: motor, cognitive, language, and social milestones for 0-12 months. Includes red flags and when to talk to your pediatrician.",
  image: "https://childbloom.site/og-image.png",
  datePublished: "2025-03-01",
  dateModified: "2025-06-10",
  author: {
    "@type": "Organization",
    name: "ChildBloom Medical Team",
    url: "https://childbloom.site",
  },
  publisher: {
    "@type": "Organization",
    name: "ChildBloom",
    url: "https://childbloom.site",
    logo: {
      "@type": "ImageObject",
      url: "https://childbloom.site/logo.png",
    },
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://childbloom.site/articles/baby-milestones-by-month/",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://childbloom.site",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Articles",
        item: "https://childbloom.site/articles",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Baby Milestones by Month",
        item: "https://childbloom.site/articles/baby-milestones-by-month/",
      },
    ],
  },
};

if (typeof document !== "undefined") {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.text = JSON.stringify(jsonLd);
  document.head.appendChild(script);
}
