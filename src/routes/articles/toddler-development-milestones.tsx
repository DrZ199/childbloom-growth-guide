import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from 'src/lib/seo'
import ReadingProgress from 'src/components/articles/reading-progress'
import BackToTop from 'src/components/articles/back-to-top'
import TableOfContents from 'src/components/articles/table-of-contents'
import RelatedArticles from 'src/components/articles/related-articles'

export const Route = createFileRoute('/articles/toddler-development-milestones/')({
  component: ToddlerDevelopmentMilestones,
  head: () => {
    const url = 'https://childbloom.site/articles/toddler-development-milestones/'
    return seo({
      title: 'Toddler Development Milestones: 18-36 Months Complete Guide | ChildBloom',
      description: 'Track your toddler\'s development from 18-36 months. Motor, language, cognitive, and social-emotional milestones with red flags, activities, and when to seek help.',
      url,
      type: 'article',
      publishedTime: '2025-06-15',
      modifiedTime: '2025-06-15',
      author: 'ChildBloom Medical Team',
      image: 'https://childbloom.site/images/articles/toddler-development-milestones-og.jpg',
    })
  },
})

function ToddlerDevelopmentMilestones() {
  const tableOfContents = [
    { id: 'introduction', title: 'Introduction: The Toddler Years' },
    { id: '18-24-months', title: '18-24 Months: Language Explosion' },
    { id: '24-30-months', title: '24-30 Months: Independence Blooms' },
    { id: '30-36-months', title: '30-36 Months: Preschool Ready' },
    { id: 'motor-skills', title: 'Motor Skills Deep Dive' },
    { id: 'language-communication', title: 'Language & Communication' },
    { id: 'cognitive-play', title: 'Cognitive Development & Play' },
    { id: 'social-emotional', title: 'Social-Emotional Growth' },
    { id: 'red-flags', title: 'Red Flags: When to Seek Help' },
    { id: 'activities', title: 'Developmental Activities by Age' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ]

  const relatedArticles = [
    { title: 'Child Development Milestones', slug: '/articles/child-development-milestones/' },
    { title: 'Speech Development Guide', slug: '/articles/speech-development-guide/' },
    { title: 'Baby Milestones by Month', slug: '/articles/baby-milestones-by-month/' },
    { title: 'Best Educational Toys for Toddlers', slug: '/articles/best-educational-toys/' },
    { title: 'Toddler Nutrition Tips', slug: '/articles/toddler-nutrition-tips/' },
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
              <span className="text-gray-700">Toddler Development Milestones</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Toddler Development Milestones: 18-36 Months Complete Guide
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Track your toddler's development from 18-36 months. Motor, language, cognitive, and social-emotional milestones with red flags, activities, and when to seek help.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>By ChildBloom Medical Team</span>
              <span>•</span>
              <span>June 15, 2025</span>
              <span>•</span>
              <span>18 min read</span>
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
                    The toddler years (18-36 months) bring explosive growth in language, mobility, and independence. Your baby becomes a little person with opinions, preferences, and a drive to explore. This guide walks you through each phase so you know what to expect, how to support development, and when to ask for help.
                  </p>
                </div>

                <section id="introduction" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Introduction: The Toddler Years</h2>
                  <p className="text-gray-700 mb-4">
                    Between 18 and 36 months, your child transforms from a wobbly walker into a confident runner, from a few words into sentences, and from parallel play into early friendships. Development accelerates across all domains simultaneously—motor, language, cognitive, and social-emotional.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Key Themes of the Toddler Years</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Autonomy:</strong> "Me do it!" becomes the daily mantra</li>
                      <li><strong>Language explosion:</strong> Vocabulary grows from ~50 to 1000+ words</li>
                      <li><strong>Symbolic thought:</strong> Pretend play emerges and becomes complex</li>
                      <li><strong>Social awareness:</strong> Notices peers, begins sharing (with help)</li>
                      <li><strong>Emotional intensity:</strong> Big feelings, limited regulation = tantrums</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-4">
                    <strong>Remember:</strong> There's a wide range of normal. A child who walks at 14 months and talks at 28 months can be just as typically developing as one who walks at 10 months and talks at 18. Look at the <em>trajectory</em>—steady progress across domains matters more than exact ages.
                  </p>
                </section>

                <section id="18-24-months" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">18-24 Months: Language Explosion</h2>
                  <p className="text-gray-700 mb-4">
                    This period is famous for the "vocabulary spurt"—many toddlers go from ~20 words to 200+ seemingly overnight. Two-word combinations emerge ("more milk," "mommy go"), and comprehension far exceeds expression.
                  </p>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Motor Milestones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Gross Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Runs (stiff, wide-based gait)</li>
                          <li>Walks up/down stairs with hand held</li>
                          <li>Kicks ball forward</li>
                          <li>Climbs on furniture</li>
                          <li>Squats to pick up toy without falling</li>
                          <li>Throws ball (overhand emerges)</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Fine Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Stacks 4-6 blocks</li>
                          <li>Turns pages one at a time</li>
                          <li>Scribbles spontaneously (vertical/horizontal/circular)</li>
                          <li>Uses spoon with spilling</li>
                          <li>Builds tower of 4+ cubes</li>
                          <li>Helps undress (pulls off socks)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Language & Communication</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>50+ words by 24 months</strong> (average 200-300)</li>
                      <li><strong>2-word phrases consistently</strong> ("want cookie," "big truck")</li>
                      <li>Follows 2-step commands: "Get shoes and bring them"</li>
                      <li>Names familiar objects in books when asked</li>
                      <li>Uses pronouns: "me," "mine," "you" (often reversed)</li>
                      <li>50% intelligible to strangers</li>
                      <li>Animal sounds: "moo," "woof," "meow"</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Cognitive & Play</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Simple pretend play: feeds doll, talks on phone</li>
                      <li>Finds hidden objects (object permanence solid)</li>
                      <li>Sorts by shape/color (beginning)</li>
                      <li>Understands "one," "two" (rote counting)</li>
                      <li>Matches identical objects</li>
                      <li>Points to body parts (6+ by 24 months)</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Social-Emotional</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Parallel play (plays near, not with, peers)</li>
                      <li>Asserts independence: "mine," "no," "me do"</li>
                      <li>Tantrums begin (frustration + limited language)</li>
                      <li>Imitates complex actions (pretend cooking, cleaning)</li>
                      <li>Shows early empathy: pats crying peer</li>
                      <li>Self-recognition in mirror</li>
                    </ul>
                  </div>
                </section>

                <section id="24-30-months" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">24-30 Months: Independence Blooms</h2>
                  <p className="text-gray-700 mb-4">
                    Two-year-olds are in the "do it myself" phase. Motor skills refine, sentences lengthen to 3-4 words, and pretend play becomes more sequenced. Toilet training readiness often appears.
                  </p>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Motor Milestones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Gross Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Runs well; stops/starts without falling</li>
                          <li>Walks up/down stairs alternating feet (with rail)</li>
                          <li>Jumps in place (both feet leave ground)</li>
                          <li>Kicks ball with forward motion</li>
                          <li>Throws ball overhand</li>
                          <li>Stands on tiptoes briefly</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Fine Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Stacks 6-8 blocks</li>
                          <li>Turns door knobs; unscrews lids</li>
                          <li>Imitates vertical/horizontal lines, circles</li>
                          <li>Feeds self with spoon/fork (less spilling)</li>
                          <li>Helps undress (pulls off shoes, socks)</li>
                          <li>Strings large beads</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Language & Communication</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>200-500+ words</strong></li>
                      <li><strong>3-4 word sentences</strong> ("I want more juice")</li>
                      <li>Uses "I," "me," "you" correctly (mostly)</li>
                      <li>Asks "what's that?" and "where?" questions</li>
                      <li>Names at least 1 color</li>
                      <li>Understood 50-75% by strangers</li>
                      <li>Follows 2-3 step unrelated commands</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-green-900 mb-2">Toilet Training Readiness Signs</h4>
                    <p className="text-gray-700 mb-2">Most children show readiness between 24-30 months. Look for:</p>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                      <li>Stays dry 2+ hours</li>
                      <li>Shows interest in bathroom habits</li>
                      <li>Can pull pants up/down</li>
                      <li>Communicates need (words, signs, behavior)</li>
                      <li>Dislikes wet/dirty diapers</li>
                    </ul>
                    <p className="text-gray-700 mt-2 text-sm">No rush! Starting before readiness backfires. See our <Link to="/articles/potty-training-guide/" className="text-pink-600 hover:underline">Potty Training Guide</Link> when the time comes.</p>
                  </div>
                </section>

                <section id="30-36-months" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">30-36 Months: Preschool Ready</h2>
                  <p className="text-gray-700 mb-4">
                    Approaching three, your toddler is a chatterbox with opinions, a playmate (not just parallel player), and a body that can run, jump, climb, and manipulate small objects with precision.
                  </p>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Motor Milestones</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Gross Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Pedals tricycle</li>
                          <li>Walks up/down stairs alternating feet (no rail)</li>
                          <li>Catches large ball with arms</li>
                          <li>Balances on one foot 3+ seconds</li>
                          <li>Hops on one foot (emerging)</li>
                          <li>Jumps forward 12+ inches</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Fine Motor</h4>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Copies circle, cross</li>
                          <li>Draws person with 2-4 body parts</li>
                          <li>Uses scissors (snips paper)</li>
                          <li>Turns pages one at a time</li>
                          <li>Builds tower of 8+ blocks</li>
                          <li>Dresses/undresses with help (buttons, zippers)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Language & Communication</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>500-1000+ words</strong></li>
                      <li><strong>3-5 word sentences</strong> with connectors ("because," "and")</li>
                      <li>Asks "why?" constantly</li>
                      <li>Tells simple stories about recent events</li>
                      <li>Knows name, age, gender</li>
                      <li>Uses plurals, past tense, pronouns correctly</li>
                      <li>75%+ intelligible to strangers</li>
                      <li>Follows 3-step commands</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Cognitive & Play</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Imaginative play: complex scenarios, roles</li>
                      <li>Sorts by color, shape, size</li>
                      <li>Counts 2-3 objects (one-to-one correspondence)</li>
                      <li>Understands "same/different," "big/little"</li>
                      <li>Completes 3-4 piece puzzles</li>
                      <li>Matches colors, shapes</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Social-Emotional</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Associative play (brief interaction with peers)</li>
                      <li>Shares with prompting; turns taking emerges</li>
                      <li>Shows concern for others' feelings</li>
                      <li>Separation anxiety easing</li>
                      <li>Asserts preferences strongly</li>
                      <li>Begins to label emotions: "I mad," "You sad"</li>
                    </ul>
                  </div>
                </section>

                <section id="motor-skills" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Motor Skills Deep Dive</h2>
                  <p className="text-gray-700 mb-4">Understanding the progression helps you provide the right challenges at the right time.</p>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Gross Motor Progression</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border bg-muted/50">
                          <th className="p-3 text-left font-medium">Skill</th>
                          <th className="p-3 text-left font-medium">Typical Emergence</th>
                          <th className="p-3 text-left font-medium">Mastery</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Running</td>
                          <td className="p-3">18-20 mo</td>
                          <td className="p-3">24-30 mo</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Jumping (2 feet)</td>
                          <td className="p-3">24-26 mo</td>
                          <td className="p-3">30-36 mo</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Stairs alternating feet</td>
                          <td className="p-3">24-30 mo (with rail)</td>
                          <td className="p-3">36 mo (no rail)</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Tricycle pedaling</td>
                          <td className="p-3">30-36 mo</td>
                          <td className="p-3">3-4 yr</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Catch large ball</td>
                          <td className="p-3">30-36 mo</td>
                          <td className="p-3">4 yr</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Balance on 1 foot</td>
                          <td className="p-3">30 mo (2-3 sec)</td>
                          <td className="p-3">4 yr (5+ sec)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Fine Motor Progression</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border bg-muted/50">
                          <th className="p-3 text-left font-medium">Skill</th>
                          <th className="p-3 text-left font-medium">Typical Emergence</th>
                          <th className="p-3 text-left font-medium">Mastery</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Stack blocks</td>
                          <td className="p-3">18 mo (4)</td>
                          <td className="p-3">30 mo (8+)</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Scribble → imitate lines</td>
                          <td className="p-3">18 mo / 24 mo</td>
                          <td className="p-3">30 mo (circle, cross)</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Self-feed spoon/fork</td>
                          <td className="p-3">18 mo</td>
                          <td className="p-3">30 mo (neat)</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Scissors (snip)</td>
                          <td className="p-3">30 mo</td>
                          <td className="p-3">4 yr (cut line)</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Draw person</td>
                          <td className="p-3">30 mo (2-4 parts)</td>
                          <td className="p-3">4 yr (6+ parts)</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Dress/undress</td>
                          <td className="p-3">24 mo (help)</td>
                          <td className="p-3">4 yr (independent)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-yellow-900 mb-2">Supporting Motor Development</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Outdoor time daily:</strong> Playground, yard, park—uneven surfaces build balance</li>
                      <li><strong>Limit containers:</strong> Less time in strollers, carriers, seats = more movement</li>
                      <li><strong>Fine motor "invitations":</strong> Playdough, beads, stickers, tongs, pouring, tearing paper</li>
                      <li><strong>Vertical surfaces:</strong> Easel, chalkboard, window markers—builds shoulder stability for writing</li>
                      <li><strong>Barefoot when safe:</strong> Strengthens foot arches, improves proprioception</li>
                    </ul>
                  </div>
                </section>

                <section id="language-communication" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Language & Communication</h2>
                  <p className="text-gray-700 mb-4">The 18-36 month window is the most dramatic for language. Here's what to expect and how to help.</p>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Vocabulary Growth Trajectory</h3>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <ul className="list-disc pl-6 space-y-3 text-gray-700">
                      <li><strong>18 months:</strong> 10-50 words (expressive); understands 200+</li>
                      <li><strong>24 months:</strong> 200-300 words; 2-word combos</li>
                      <li><strong>30 months:</strong> 400-500 words; 3-4 word sentences</li>
                      <li><strong>36 months:</strong> 800-1000+ words; complex sentences</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Receptive vs. Expressive Gap</h3>
                  <p className="text-gray-700 mb-4">Toddlers understand far more than they can say—typically 3-5x more. This gap is normal and narrows over time.</p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">What This Means for You</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Talk to them at a level slightly above their expressive level</li>
                      <li>They understand "no," "wait," "gentle" long before they obey consistently</li>
                      <li>Narrate: "You're putting the blue block ON the red block"</li>
                      <li>Don't dumb down language—rich input builds rich output</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Speech Sound Development</h3>
                  <p className="text-gray-700 mb-4">Toddler speech is understandably imperfect. Intelligibility norms:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-6">
                    <li><strong>24 months:</strong> 50% intelligible to strangers</li>
                    <li><strong>36 months:</strong> 75% intelligible</li>
                    <li><strong>48 months:</strong> 90%+ intelligible</li>
                  </ul>
                  <p className="text-gray-700 mb-4">Sounds typically mastered by 3: p, b, m, n, h, w, d. Still developing: k, g, f, t, d, ng. Later: r, l, s, z, th, sh, ch.</p>

                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-green-900 mb-2">Language Boosting Strategies</h4>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                      <li><strong>Expand + Recast:</strong> Child: "Truck big!" → You: "Yes, that truck IS big! It's a BIG red truck."</li>
                      <li><strong>Parallel Talk:</strong> Narrate THEIR play: "You're feeding the baby. The baby is hungry."</li>
                      <li><strong>Choice Questions:</strong> "Apple or banana?" (not yes/no)</li>
                      <li><strong>Wait Time:</strong> Pause 5-10 seconds after questions</li>
                      <li><strong>Read Daily:</strong> 15+ minutes, face-to-face, interactive</li>
                      <li><strong>Sing & Rhyme:</strong> Builds phonological awareness</li>
                    </ol>
                  </div>
                </section>

                <section id="cognitive-play" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Cognitive Development & Play</h2>
                  <p className="text-gray-700 mb-4">Play IS toddler learning. The progression from functional to symbolic to cooperative play mirrors cognitive growth.</p>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Play Stages (Parten & Piaget)</h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border bg-muted/50">
                          <th className="p-3 text-left font-medium">Stage</th>
                          <th className="p-3 text-left font-medium">Age</th>
                          <th className="p-3 text-left font-medium">Description</th>
                          <th className="p-3 text-left font-medium">Examples</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Functional Play</td>
                          <td className="p-3">12-18 mo</td>
                          <td className="p-3">Using objects as intended</td>
                          <td className="p-3">Rolling ball, pushing car, stacking rings</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Early Symbolic</td>
                          <td className="p-3">18-24 mo</td>
                          <td className="p-3">One object = another</td>
                          <td className="p-3">Banana = phone, block = car</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Sequenced Symbolic</td>
                          <td className="p-3">24-30 mo</td>
                          <td className="p-3">Multi-step pretend scenarios</td>
                          <td className="p-3">Cook → serve → eat → wash dishes</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Planned/Role Play</td>
                          <td className="p-3">30-36 mo</td>
                          <td className="p-3">Assigns roles, plans ahead</td>
                          <td className="p-3">"You be doctor, I'm patient"</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Cooperative Play</td>
                          <td className="p-3">36+ mo</td>
                          <td className="p-3">Shared goals, rules, negotiation</td>
                          <td className="p-3">Building fort together, board games</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Cognitive Milestones by Domain</h3>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Problem Solving</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                      <li>18-24 mo: Trial-and-error; uses tools (stick to reach toy)</li>
                      <li>24-30 mo: Mental trial (thinks before acting); 3-4 piece puzzles</li>
                      <li>30-36 mo: Plans multi-step; sorts by 2 attributes (color + shape)</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Memory & Attention</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                      <li>18-24 mo: Remembers routines; finds hidden objects (deferred imitation)</li>
                      <li>24-30 mo: Recalls past events; follows 2-3 step directions</li>
                      <li>30-36 mo: Tells simple stories from memory; attention span 5-10 min</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Early Math Concepts</h4>
                    <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                      <li>18-24 mo: "More," "all gone"; matches identical objects</li>
                      <li>24-30 mo: Counts 1-2-3 (rote); sorts by one attribute</li>
                      <li>30-36 mo: One-to-one correspondence (3 objects); "big/small," "same/different"</li>
                    </ul>
                  </div>
                </section>

                <section id="social-emotional" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Social-Emotional Growth</h2>
                  <p className="text-gray-700 mb-4">Toddlers are learning they're separate beings with their own thoughts, feelings, and desires—which creates both connection and conflict.</p>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Key Developments</h3>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Self-Aw