import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from 'src/lib/seo'
import ReadingProgress from 'src/components/articles/reading-progress'
import BackToTop from 'src/components/articles/back-to-top'
import TableOfContents from 'src/components/articles/table-of-contents'
import RelatedArticles from 'src/components/articles/related-articles'

export const Route = createFileRoute('/articles/parenting-survival-guide')({
  component: ParentingSurvivalGuide,
  head: () => {
    const url = 'https://childbloom.site/articles/parenting-survival-guide/'
    return seo({
      title: 'Parenting Survival Guide: 30 Essential Tips for New Parents | ChildBloom',
      description: 'Navigate the fourth trimester with confidence. Practical strategies for sleep deprivation, feeding challenges, emotional regulation, and building your support village.',
      url,
      type: 'article',
      publishedTime: '2025-01-15',
      modifiedTime: '2025-06-10',
      author: 'ChildBloom Parenting Team',
      image: 'https://childbloom.site/images/articles/parenting-survival-guide-og.jpg',
    })
  },
})

function ParentingSurvivalGuide() {
  const tableOfContents = [
    { id: 'fourth-trimester', title: 'The Fourth Trimester Reality' },
    { id: 'sleep-deprivation', title: 'Managing Sleep Deprivation' },
    { id: 'feeding-challenges', title: 'Feeding Challenges & Solutions' },
    { id: 'emotional-regulation', title: 'Emotional Regulation for Parents' },
    { id: 'relationship-partnership', title: 'Relationship & Partnership' },
    { id: 'self-care', title: 'Self-Care (Not Selfish)' },
    { id: 'building-village', title: 'Building Your Village' },
    { id: 'returning-to-work', title: 'Returning to Work' },
    { id: 'mental-health', title: 'Mental Health: PPD & PPA' },
    { id: 'when-to-ask-for-help', title: 'When to Ask for Help' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ]

  const relatedArticles = [
    { title: 'Newborn Care Guide', slug: '/articles/newborn-care-guide/' },
    { title: 'Baby Sleep Guide', slug: '/articles/baby-sleep-guide/' },
    { title: 'Child Development Milestones', slug: '/articles/child-development-milestones/' },
    { title: 'Vaccination Guide', slug: '/articles/vaccination-guide/' },
    { title: 'Starting Solids Guide', slug: '/articles/starting-solids/' },
  ]

  return (
    <>
      <ReadingProgress />
      <div className="min-h-screen bg-gradient-to-b from-pink-50/30 to-white">
        <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <header className="mb-10">
            <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
              <Link to="/" className="hover:text-pink-600 transition-colors">Home</Link>
              <span>/</span>
              <Link to="/articles" className="hover:text-pink-600 transition-colors">Articles</Link>
              <span>/</span>
              <span className="text-gray-700">Parenting Survival Guide</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Parenting Survival Guide: 30 Essential Tips for New Parents
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Navigate the fourth trimester with confidence. Practical strategies for sleep deprivation, feeding challenges, emotional regulation, and building your support village.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>By ChildBloom Parenting Team</span>
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
                    This guide covers the essential survival strategies for new parents during the first year. From managing sleep deprivation to building your support network, these evidence-based tips will help you thrive, not just survive.
                  </p>
                </div>

                <section id="fourth-trimester" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">The Fourth Trimester Reality</h2>
                  <p className="text-gray-700 mb-4">
                    The "fourth trimester" refers to the first three months after birth—a period of profound adjustment for both baby and parents. Your baby is transitioning from the womb to the world, and you're transitioning into parenthood. This phase is challenging, messy, and beautiful all at once.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">What to Expect</h3>
                  <p className="text-gray-700 mb-4">
                    The first three months are often called the "fourth trimester" because your baby is still adjusting to life outside the womb. They need constant closeness, feeding every 2-3 hours, and lots of sleep. For parents, this means round-the-clock care, minimal sleep, and a steep learning curve.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Key Characteristics of the Fourth Trimester</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Your baby wants to be held constantly (this is normal!)</li>
                      <li>Sleep is fragmented for everyone</li>
                      <li>You'll question your parenting abilities daily</li>
                      <li>Your body is healing from birth</li>
                      <li>Hormones are fluctuating dramatically</li>
                      <li>Identity shifts as you become "parent"</li>
                    </ul>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Normalizing the Chaos</h3>
                  <p className="text-gray-700 mb-4">
                    Social media often shows the highlight reel of parenthood. The reality is far messier. It's normal to feel overwhelmed, exhausted, and even resentful at times. These feelings don't make you a bad parent—they make you human.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Remember: this phase is temporary. The intense newborn period will pass, and you'll find a new rhythm. For now, focus on survival and bonding. Everything else can wait.
                  </p>
                </section>

                <section id="sleep-deprivation" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Managing Sleep Deprivation</h2>
                  <p className="text-gray-700 mb-4">
                    Sleep deprivation is the hardest part of new parenthood. Chronic sleep loss affects your mood, cognitive function, immune system, and relationships. Here's how to survive and even thrive despite limited sleep.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Sleep Deprivation Facts</h3>
                  <p className="text-gray-700 mb-4">
                    New parents average 4-5 hours of sleep per night in the first month. This is equivalent to being legally intoxicated. Studies show that sleep-deprived parents have impaired judgment, reduced patience, and increased risk of postpartum depression.
                  </p>
                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-yellow-900 mb-2">The Sleep Debt Reality</h4>
                    <p className="text-gray-700">
                      You cannot "catch up" on sleep with a newborn. Instead, aim for sleep efficiency—maximizing the quality of whatever sleep you can get. This means creating optimal conditions for both nighttime sleep and naps.
                    </p>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Practical Sleep Strategies</h3>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                    <li><strong>Sleep when baby sleeps</strong>—this is cliché for a reason. Put away your phone, close your eyes, and rest.</li>
                    <li><strong>Share night duties</strong>—if possible, alternate nights or shifts with your partner. One person handles 10pm-2am, the other handles 2am-6am.</li>
                    <li><strong>Optimize the sleep environment</strong>—blackout curtains, white noise, cool temperature (68-72°F).</li>
                    <li><strong>Limit caffeine after 2pm</strong>—it has a 6-hour half-life and will affect your sleep quality.</li>
                    <li><strong>Accept help</strong>—if someone offers to watch the baby so you can nap, say yes.</li>
                    <li><strong>Practice shift sleeping</strong>—one parent sleeps in another room when possible.</li>
                    <li><strong>Keep a sleep log</strong>—track patterns to identify when you can best nap.</li>
                  </ol>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">When to Worry</h3>
                  <p className="text-gray-700 mb-4">
                    While some fatigue is normal, certain signs indicate you need additional support: if you're experiencing hallucinations, microsleeps while holding your baby, or severe mood disturbances, consult your healthcare provider immediately.
                  </p>
                </section>

                <section id="feeding-challenges" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Feeding Challenges & Solutions</h2>
                  <p className="text-gray-700 mb-4">
                    Feeding your baby should be natural, but it often comes with unexpected challenges. Whether you're breastfeeding, formula feeding, or doing a combination, here's how to navigate common feeding hurdles.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Breastfeeding Challenges</h3>
                  <p className="text-gray-700 mb-4">
                    Many new mothers experience difficulties with breastfeeding in the early weeks. This is completely normal and doesn't mean you've failed. Common issues include latch difficulties, engorgement, mastitis, and low milk supply.
                  </p>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-green-900 mb-2">Breastfeeding Support Resources</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>International Board Certified Lactation Consultants (IBCLC)</li>
                      <li>La Leche League support groups</li>
                      <li>Hospital lactation services (often free postpartum)</li>
                      <li>Apps like LactApp for tracking and guidance</li>
                    </ul>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Formula Feeding Tips</h3>
                  <p className="text-gray-700 mb-4">
                    Formula feeding is a perfectly valid choice that provides complete nutrition. Tips include: having multiple bottles ready, using a bottle warmer, preparing batches in advance (safe for 24 hours in fridge), and involving partners in feedings.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Feeding on a Schedule vs. On Demand</h3>
                  <p className="text-gray-700 mb-4">
                    Newborns need to eat frequently—every 2-3 hours. This means 8-12 feedings per day. Whether you follow a strict schedule or feed on demand, the goal is ensuring your baby gets enough nutrition. Watch for wet diapers (6+ per day) and weight gain as indicators.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Combination Feeding</h3>
                  <p className="text-gray-700 mb-4">
                    Many families use combination feeding—breastfeeding when possible, supplementing with formula. This can provide flexibility while maintaining some breastfeeding benefits. The key is finding a balance that works for your family's needs and schedule.
                  </p>
                </section>

                <section id="emotional-regulation" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Emotional Regulation for Parents</h2>
                  <p className="text-gray-700 mb-4">
                    Becoming a parent triggers every emotion imaginable. Joy, love, fear, anger, guilt, and exhaustion often coexist. Learning to regulate these emotions is crucial for your wellbeing and your relationship with your baby.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">The Emotional Rollercoaster</h3>
                  <p className="text-gray-700 mb-4">
                    Hormonal shifts, sleep deprivation, and the massive life transition create a perfect storm for emotional volatility. You might laugh one moment and cry the next. This is normal. The "baby blues" affect up to 80% of new parents and typically resolve within 2 weeks.
                  </p>
                  <div className="bg-purple-50 border border-purple-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-purple-900 mb-2">Emotional Regulation Techniques</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>5-4-3-2-1 grounding technique</strong>—name 5 things you see, 4 you touch, 3 you hear, 2 you smell, 1 you taste</li>
                      <li><strong>Box breathing</strong>—inhale 4 counts, hold 4, exhale 4, hold 4</li>
                      <li><strong>Name the emotion</strong>—"I'm feeling frustrated right now" reduces its intensity</li>
                      <li><strong>Take a break</strong>—it's okay to put baby in a safe space and step away for 5 minutes</li>
                      <li><strong>Practice self-compassion</strong>—talk to yourself like you'd talk to a friend</li>
                    </ul>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Managing Triggers</h3>
                  <p className="text-gray-700 mb-4">
                    Identify what triggers your emotional responses. Common triggers include: crying that won't stop, sleep deprivation, feeling unsupported, and unrealistic expectations. Once you know your triggers, you can develop strategies to manage them.
                  </p>
                </section>

                <section id="relationship-partnership" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Relationship & Partnership</h2>
                  <p className="text-gray-700 mb-4">
                    A new baby transforms your relationship with your partner. The intimacy, communication patterns, and dynamic you had before will shift. This is normal, and with intentional effort, you can emerge stronger.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Communication is Key</h3>
                  <p className="text-gray-700 mb-4">
                    In the fog of newborn care, communication often breaks down. You're both exhausted, and resentments can build quickly. Schedule regular check-ins—even 10 minutes at the end of the day—to share how you're really doing.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Dividing the Load</h3>
                  <p className="text-gray-700 mb-4">
                    Traditional gender roles often dictate who does what with a new baby, but every family is different. Have honest conversations about dividing responsibilities based on strengths, preferences, and schedules—not assumptions.
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">Common Relationship Challenges</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Decreased intimacy and physical connection</li>
                      <li>Resentment over unequal division of labor</li>
                      <li>Different parenting philosophies</li>
                      <li>Lack of quality time together</li>
                      <li>Financial stress</li>
                      <li>Feeling like "roommates" instead of partners</li>
                    </ul>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Keeping the Connection</h3>
                  <p className="text-gray-700 mb-4">
                    Small gestures matter. A text during the day, sharing a funny moment, or stealing 10 minutes to sit together after baby goes to sleep can maintain your connection. Remember: this phase is temporary, and investing in your relationship now pays dividends later.
                  </p>
                </section>

                <section id="self-care" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Self-Care (Not Selfish)</h2>
                  <p className="text-gray-700 mb-4">
                    Self-care isn't bubble baths and spa days (though those are nice). True self-care is meeting your basic needs so you can show up as the parent you want to be. It's not selfish—it's essential.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">The Basics First</h3>
                  <p className="text-gray-700 mb-4">
                    Before fancy self-care routines, ensure you're meeting basic needs: showering regularly, eating nutritious food, staying hydrated, getting any available sleep, and moving your body. These fundamentals form the foundation of your wellbeing.
                  </p>
                  <div className="bg-teal-50 border border-teal-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-teal-900 mb-2">The Self-Care Hierarchy</h4>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                      <li><strong>Physiological needs</strong>—sleep, food, water, bathroom breaks</li>
                      <li><strong>Safety needs</strong>—feeling secure in your parenting abilities</li>
                      <li><strong>Connection</strong>—time with partner, friends, family</li>
                      <li><strong>Accomplishment</strong>—feeling capable and effective</li>
                      <li><strong>Restoration</strong>—activities that replenish your spirit</li>
                    </ol>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Micro-Self-Care</h3>
                  <p className="text-gray-700 mb-4">
                    When you don't have time for a full self-care routine, practice micro-self-care: 3 deep breaths before feeding, listening to a favorite song during diaper changes, sipping tea while baby naps, or stepping outside for 2 minutes of fresh air.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Guilt-Free Self-Care</h3>
                  <p className="text-gray-700 mb-4">
                    Many parents feel guilty taking time for themselves. Reframe this: when you care for yourself, you're modeling healthy boundaries and self-respect for your child. A rested, fulfilled parent is a better parent.
                  </p>
                </section>

                <section id="building-village" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Building Your Village</h2>
                  <p className="text-gray-700 mb-4">
                    It takes a village to raise a child, and it takes a village to support parents. Building a strong support network is one of the most important things you can do for your family's wellbeing.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Who's in Your Village?</h3>
                  <p className="text-gray-700 mb-4">
                    Your village includes: partner, family members, close friends, neighbors, healthcare providers, postpartum doulas, lactation consultants, and fellow parents. Each person offers different types of support—emotional, practical, informational, or respite.
                  </p>
                  <div className="bg-orange-50 border border-orange-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-orange-900 mb-2">Types of Support to Seek</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Emotional support</strong>—someone to listen without judgment</li>
                      <li><strong>Practical help</strong>—meals, errands, household tasks</li>
                      <li><strong>Respite care</strong>—someone to watch baby while you rest</li>
                      <li><strong>Informational support</strong>—guidance from experienced parents or professionals</li>
                      <li><strong>Professional support</strong>—therapists, lactation consultants, pediatricians</li>
                    </ul>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">How to Build Your Village</h3>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                    <li><strong>Ask for specific help</strong>—"Can you bring dinner Tuesday?" is easier to answer than "Can you help?"</li>
                    <li><strong>Join parent groups</strong>—in-person or online communities provide connection and shared experience</li>
                    <li><strong>Accept help graciously</strong>—even if it's not exactly how you'd do it</li>
                    <li><strong>Reciprocate when you can</strong>—support others as they've supported you</li>
                    <li><strong>Set boundaries</strong>—it's okay to say no to help that doesn't serve you</li>
                  </ol>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Online Communities</h3>
                  <p className="text-gray-700 mb-4">
                    If in-person support is limited, online communities can fill the gap. Reddit's r/Parenting and r/NewParents, Facebook groups, and apps like Peanut connect you with other parents facing similar challenges. Remember that online advice isn't a substitute for professional guidance.
                  </p>
                </section>

                <section id="returning-to-work" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Returning to Work</h2>
                  <p className="text-gray-700 mb-4">
                    Returning to work after having a baby is one of life's biggest transitions. Whether you're going back after 6 weeks, 6 months, or a year, preparation and self-compassion are essential.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Planning Your Return</h3>
                  <p className="text-gray-700 mb-4">
                    Start planning early. Research childcare options, understand your company's parental leave policy, and have conversations with your employer about your return. Knowing your logistics in advance reduces anxiety significantly.
                  </p>
                  <div className="bg-indigo-50 border border-indigo-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-indigo-900 mb-2">Childcare Options to Consider</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Daycare centers (licensed, regulated, social opportunities)</li>
                      <li>In-home daycare (smaller ratios, often more flexible)</li>
                      <li>Nanny or au pair (one-on-one attention, in your home)</li>
                      <li>Family care (grandparents, relatives—often free but boundaries needed)</li>
                      <li>Co-op daycare (parent involvement, lower cost)</li>
                    </ul>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Managing Guilt</h3>
                  <p className="text-gray-700 mb-4">
                    Working parent guilt is real and pervasive. You might feel like you're missing milestones, or that you're not dedicated enough at work. Reframe: working provides for your family, models independence for your child, and maintains your identity beyond parenthood.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Transition Tips</h3>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                    <li>Do a trial run before your first day back</li>
                    <li>Prepare everything the night before (bottles, clothes, bags)</li>
                    <li>Have a goodbye routine that works for you and baby</li>
                    <li>Check in with childcare during the day if possible</li>
                    <li>Give yourself grace—the first weeks will be an adjustment</li>
                    <li>Build in transition time between work and home</li>
                  </ol>
                </section>

                <section id="mental-health" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Mental Health: PPD & PPA</h2>
                  <p className="text-gray-700 mb-4">
                    Postpartum depression (PPD) and postpartum anxiety (PPA) affect 1 in 7 new parents. These aren't weaknesses or failures—they're medical conditions that require treatment. Knowing the signs and seeking help early is crucial.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Postpartum Depression (PPD)</h3>
                  <p className="text-gray-700 mb-4">
                    PPD goes beyond the "baby blues." While baby blues typically resolve within 2 weeks, PPD persists and intensifies. Symptoms include: persistent sadness, hopelessness, excessive crying, difficulty bonding with baby, withdrawal from loved ones, and thoughts of harming yourself or your baby.
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">PPD Warning Signs</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Mood swings or depression lasting more than 2 weeks</li>
                      <li>Inability to sleep even when baby sleeps</li>
                      <li>Intense irritability or anger</li>
                      <li>Difficulty bonding with your baby</li>
                      <li>Withdrawing from family and friends</li>
                      <li>Thoughts of harming yourself or your baby</li>
                      <li>Feeling overwhelmed, hopeless, or worthless</li>
                    </ul>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Postpartum Anxiety (PPA)</h3>
                  <p className="text-gray-700 mb-4">
                    PPA involves excessive worry that interferes with daily life. Symptoms include: constant worrying, racing thoughts, physical symptoms like panic attacks, intrusive thoughts about baby's safety, and compulsive behaviors (checking baby's breathing repeatedly).
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Seeking Help</h3>
                  <p className="text-gray-700 mb-4">
                    If you're experiencing symptoms of PPD or PPA, reach out to your healthcare provider immediately. Treatment options include therapy (especially CBT), medication (many are safe while breastfeeding), support groups, and lifestyle changes. You don't have to suffer alone.
                  </p>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-green-900 mb-2">Crisis Resources</h4>
                    <p className="text-gray-700">
                      Postpartum Support International: 1-800-944-4773 (24/7 helpline). If you're having thoughts of harming yourself or your baby, call 911 or go to the nearest emergency room immediately.
                    </p>
                  </div>
                </section>

                <section id="when-to-ask-for-help" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Ask for Help</h2>
                  <p className="text-gray-700 mb-4">
                    Many parents wait too long to ask for help, trying to "figure it out" on their own. But parenthood isn't meant to be done alone. Knowing when and how to ask for help can make the difference between struggling and thriving.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Signs You Need More Support</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>You're not sleeping more than 3 hours at a time, consistently</li>
                    <li>You feel overwhelmed or hopeless most days</li>
                    <li>You're having thoughts of harming yourself or your baby</li>
                    <li>Your relationship with your partner is severely strained</li>
                    <li>You're isolating yourself from friends and family</li>
                    <li>You're struggling to care for your basic needs (eating, showering)</li>
                    <li>You feel disconnected from your baby</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Professional Help</h3>
                  <p className="text-gray-700 mb-4">
                    Don't wait for a crisis to seek professional support. A therapist, postpartum doula, or lactation consultant can provide invaluable guidance. Many health insurance plans cover mental health services, and sliding scale options are available.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Asking for Help is Strength</h3>
                  <p className="text-gray-700 mb-4">
                    There's a misconception that asking for help means you're failing. In reality, it shows self-awareness and commitment to being the best parent you can be. Every parent needs help sometimes—it's not a sign of weakness, it's a sign of wisdom.
                  </p>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">How long does the "fourth trimester" last?</h3>
                      <p className="text-gray-700">
                        The fourth trimester typically refers to the first 3 months after birth. However, many parents feel the effects of this major transition for 6-12 months as they adjust to their new identity and routine.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Is it normal to feel resentful toward my partner after having a baby?</h3>
                      <p className="text-gray-700">
                        Yes, it's normal. Sleep deprivation, unequal division of labor, and the massive life transition can create resentment. The key is addressing these feelings through open communication before they become entrenched.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">How do I know if I have postpartum depression vs. baby blues?</h3>
                      <p className="text-gray-700">
                        Baby blues typically resolve within 2 weeks and involve mild mood swings and crying. PPD persists beyond 2 weeks, intensifies over time, and includes symptoms like hopelessness, difficulty bonding, and thoughts of harming yourself or your baby.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">When should I seek professional help for anxiety?</h3>
                      <p className="text-gray-700">
                        Seek help if your anxiety is interfering with daily life, if you're having panic attacks, if you're having intrusive thoughts about your baby's safety, or if you're avoiding activities due to worry. PPA is highly treatable with therapy and sometimes medication.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">How do I build a support network if I don't have family nearby?</h3>
                      <p className="text-gray-700">
                        Join local parent groups (check libraries, community centers, hospitals), use apps like Peanut to connect with nearby parents, hire a postpartum doula, and join online communities. Many cities also have "new parent" meetups and support groups.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">What if my partner and I have different parenting styles?</h3>
                      <p className="text-gray-700">
                        Different parenting styles are common and can be complementary. Focus on aligning on core values and safety issues, and allow flexibility in approaches. Regular check-ins help ensure you're both on the same page.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">How do I make time for self-care with a newborn?</h3>
                      <p className="text-gray-700">
                        Practice micro-self-care: 3 deep breaths before feeding, stepping outside for fresh air, listening to music during naps. Accept help from others so you can take longer breaks. Remember: self-care isn't selfish—it's necessary.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Is it normal to not feel an immediate bond with my baby?</h3>
                      <p className="text-gray-700">
                        Yes, it's normal. Bonding can take time, especially after a difficult birth, traumatic pregnancy, or if you're experiencing postpartum depression. Be patient with yourself, and seek support if you're concerned.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">How do I handle unsolicited parenting advice?</h3>
                      <p className="text-gray-700">
                        Thank the person for their input, then make your own decision. You can set boundaries by saying, "We're trying a different approach right now, but I appreciate your concern." Remember: you are the expert on your own child.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">When will my life feel "normal" again?</h3>
                      <p className="text-gray-700">
                        "Normal" will look different than before, and that's okay. Most parents find a new rhythm by 6-12 months. Be patient with yourself and your family as you adjust. Focus on progress, not perfection.
                      </p>
                    </div>
                  </div>
                </section>

                <div className="bg-pink-50 border-l-4 border-pink-500 p-6 rounded-r-lg">
                  <h3 className="text-xl font-bold text-pink-900 mb-3">Medical Disclaimer</h3>
                  <p className="text-pink-800">
                    The information provided in this article is for educational purposes only and is not a substitute for professional medical advice, diagnosis, or treatment. Always consult with a qualified healthcare provider regarding any medical concerns or conditions.
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
  )
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: 'Parenting Survival Guide: 30 Essential Tips for New Parents',
  description: 'Navigate the fourth trimester with confidence. Practical strategies for sleep deprivation, feeding challenges, emotional regulation, and building your support village.',
  image: 'https://childbloom.site/images/articles/parenting-survival-guide-og.jpg',
  datePublished: '2025-01-15',
  dateModified: '2025-06-10',
  author: {
    '@type': 'Organization',
    name: 'ChildBloom Parenting Team',
    url: 'https://childbloom.site',
  },
  publisher: {
    '@type': 'Organization',
    name: 'ChildBloom',
    url: 'https://childbloom.site',
    logo: {
      '@type': 'ImageObject',
      url: 'https://childbloom.site/logo.png',
    },
  },
  mainEntityOfPage: {
    '@type': 'WebPage',
    '@id': 'https://childbloom.site/articles/parenting-survival-guide/',
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://childbloom.site',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Articles',
        item: 'https://childbloom.site/articles',
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'Parenting Survival Guide',
        item: 'https://childbloom.site/articles/parenting-survival-guide/',
      },
    ],
  },
}

if (typeof document !== 'undefined') {
  const script = document.createElement('script')
  script.type = 'application/ld+json'
  script.text = JSON.stringify(jsonLd)
  document.head.appendChild(script)
}
