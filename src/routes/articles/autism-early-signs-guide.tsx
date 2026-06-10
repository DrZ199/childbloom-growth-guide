import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from 'src/lib/seo'
import ReadingProgress from 'src/components/articles/reading-progress'
import BackToTop from 'src/components/articles/back-to-top'
import TableOfContents from 'src/components/articles/table-of-contents'
import RelatedArticles from 'src/components/articles/related-articles'

export const Route = createFileRoute('/articles/autism-early-signs-guide/')({
  component: AutismEarlySignsGuide,
  head: () => {
    const url = 'https://childbloom.site/articles/autism-early-signs-guide/'
    return seo({
      title: 'Autism Early Signs: Complete Parent Guide to Screening & Next Steps | ChildBloom',
      description: 'Learn the early signs of autism in babies and toddlers. Age-by-age red flags, M-CHAT screening info, when to seek evaluation, and how early intervention changes outcomes.',
      url,
      type: 'article',
      publishedTime: '2025-04-15',
      modifiedTime: '2025-06-10',
      author: 'ChildBloom Medical Team',
      image: 'https://childbloom.site/images/articles/autism-early-signs-guide-og.jpg',
    })
  },
})

function AutismEarlySignsGuide() {
  const tableOfContents = [
    { id: 'what-is-autism', title: 'What Is Autism Spectrum Disorder?' },
    { id: 'early-signs-by-age', title: 'Early Signs by Age' },
    { id: 'social-communication', title: 'Social-Communication Red Flags' },
    { id: 'repetitive-behaviors', title: 'Restricted & Repetitive Behaviors' },
    { id: 'sensory-differences', title: 'Sensory Processing Differences' },
    { id: 'screening-tools', title: 'Screening Tools: M-CHAT & More' },
    { id: 'when-to-act', title: 'When to Act: Don\'t Wait' },
    { id: 'evaluation-process', title: 'The Evaluation Process' },
    { id: 'early-intervention', title: 'Early Intervention: Why Timing Matters' },
    { id: 'supporting-your-child', title: 'Supporting Your Child Now' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ]

  const relatedArticles = [
    { title: 'Speech Development Guide', slug: '/articles/speech-development-guide/' },
    { title: 'Child Development Milestones', slug: '/articles/child-development-milestones/' },
    { title: 'Baby Milestones by Month', slug: '/articles/baby-milestones-by-month/' },
    { title: 'Sensory Processing Guide', slug: '/articles/sensory-processing-guide/' },
    { title: 'Late Talker or Autism?', slug: '/articles/late-talker-vs-autism/' },
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
              <span className="text-gray-700">Autism Early Signs Guide</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Autism Early Signs: Complete Parent Guide to Screening &amp; Next Steps
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Learn the early signs of autism in babies and toddlers. Age-by-age red flags, M-CHAT screening info, when to seek evaluation, and how early intervention changes outcomes.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>By ChildBloom Medical Team</span>
              <span>•</span>
              <span>June 10, 2025</span>
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
                    <strong>Key takeaway:</strong> Autism can be reliably diagnosed by age 2, and early intervention before age 3 leads to the best outcomes. If you have concerns, trust your instincts and ask for screening NOW—not "wait and see."
                  </p>
                </div>

                <section id="what-is-autism" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What Is Autism Spectrum Disorder?</h2>
                  <p className="text-gray-700 mb-4">
                    Autism Spectrum Disorder (ASD) is a neurodevelopmental condition characterized by differences in social communication and interaction, along with restricted or repetitive patterns of behavior, interests, or activities. It's called a "spectrum" because it affects each person differently—some need significant support, others live independently.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-900 mb-3">Important Facts</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Prevalence:</strong> ~1 in 36 children in the US (CDC 2023)</li>
                      <li><strong>Gender:</strong> Diagnosed 4x more often in boys, but girls are often missed</li>
                      <li><strong>Cause:</strong> Strong genetic component; not caused by vaccines, parenting, or diet</li>
                      <li><strong>Lifelong:</strong> Not something a child "outgrows," but skills improve dramatically with support</li>
                      <li><strong>Strengths:</strong> Many autistic people have exceptional attention to detail, pattern recognition, honesty, and deep focus</li>
                    </ul>
                  </div>
                  <p className="text-gray-700 mb-4">
                    The diagnostic criteria (DSM-5) require persistent deficits in <strong>social communication</strong> across multiple contexts, plus <strong>restricted, repetitive behaviors</strong> (at least 2 of 4 types). Symptoms must be present in early development (though may not fully manifest until social demands exceed capacity).
                  </p>
                </section>

                <section id="early-signs-by-age" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Early Signs by Age</h2>
                  <p className="text-gray-700 mb-4">Autism signs often emerge between 12-24 months, but subtle differences can appear earlier. Remember: any single sign doesn't mean autism. It's the <strong>pattern and persistence</strong> that matters.</p>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-3">By 6 Months</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Limited or no eye contact during feeding/play</li>
                      <li>Rarely smiles back at caregivers (social smile typically emerges 6-8 weeks)</li>
                      <li>Doesn't respond to name or familiar voices</li>
                      <li>Doesn't track moving objects with eyes</li>
                      <li>Limited vocalizations (cooing, gurgling)</li>
                      <li>Doesn't reach to be picked up</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-3">By 9 Months</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>No back-and-forth sharing of sounds, smiles, or facial expressions</li>
                      <li>Doesn't respond to name consistently</li>
                      <li>No babbling with consonants (ba, da, ma)</li>
                      <li>Doesn't use gestures: reaching, pointing, waving</li>
                      <li>Doesn't play social games (peek-a-boo, pat-a-cake)</li>
                      <li>Shows little interest in other children/babies</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-3">By 12 Months ★ CRITICAL CHECKPOINT</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>No pointing to show interest</strong> (proto-declarative pointing — "Look!")</li>
                      <li><strong>No words</strong> (mama/dada with meaning)</li>
                      <li><strong>No response to name</strong> (turns to other sounds but not name)</li>
                      <li>No joint attention (looking where you point, showing you things)</li>
                      <li>No back-and-forth gestures (give, show, reach, wave)</li>
                      <li>Doesn't search for hidden objects</li>
                      <li>Unusual repetitive movements (hand-flapping, tensing, rocking)</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-3">By 16 Months</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>No single words</li>
                      <li>No pointing to request or share</li>
                      <li>Doesn't follow simple commands ("give me the ball")</li>
                      <li>No pretend play (feeding doll, talking on phone)</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-3">By 18 Months</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>No meaningful 2-word phrases</strong> (not echolalia)</li>
                      <li><strong>No pointing to show things</strong> to others</li>
                      <li>Doesn't know function of common objects (brush, phone, spoon)</li>
                      <li>Doesn't imitate actions or words</li>
                      <li>Loss of previously acquired words or social skills — <strong>URGENT</strong></li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-3">By 24 Months</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Fewer than 50 words</li>
                      <li>No spontaneous 2-word combinations</li>
                      <li>Doesn't follow 2-step commands</li>
                      <li>Doesn't engage in pretend play</li>
                      <li>Speech understood <50% by parents</li>
                      <li>Lines up toys; plays with parts of toys (wheels) not whole</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-yellow-900 mb-2">⚠️ REGRESSION = IMMEDIATE EVALUATION</h4>
                    <p className="text-gray-700 mb-2">Any loss of words, babbling, gestures, eye contact, or social skills at ANY age is a red flag requiring urgent evaluation. Regression occurs in ~25% of autistic children, typically 15-24 months.</p>
                  </div>
                </section>

                <section id="social-communication" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Social-Communication Red Flags (Core Domain 1)</h2>
                  <p className="text-gray-700 mb-4">These are the hallmark differences. Look for patterns across settings and over time.</p>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Joint Attention Deficits</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Doesn't follow your point ("Look at the bird!")</li>
                    <li>Doesn't point to show you things (sharing interest, not just requesting)</li>
                    <li>Doesn't bring objects to show you ("Look what I found!")</li>
                    <li>Doesn't look back and forth between toy and you during play</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Social Reciprocity Differences</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Rarely initiates social interaction</li>
                    <li>Doesn't respond to social bids (smile, peek-a-boo, name call)</li>
                    <li>Prefers solitary play; doesn't seek peers</li>
                    <li>Doesn't share enjoyment/achievements ("Look, I did it!")</li>
                    <li>Limited or atypical eye contact (avoids, fleeting, or intense staring)</li>
                    <li>Doesn't read facial expressions or tone of voice</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Communication Differences</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Delayed speech or no speech</li>
                    <li>Echolalia: repeating words/phrases (immediate or delayed)</li>
                    <li>Scripting: reciting movies, books, commercials out of context</li>
                    <li>Pronoun reversal: "you" for "I," "he" for "me"</li>
                    <li>Unusual prosody: monotone, singsong, robotic, or exaggerated</li>
                    <li>Talks "at" people rather than "with" them (monologues on special interest)</li>
                    <li>Difficulty with back-and-forth conversation</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Nonverbal Communication</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Limited gestures (pointing, waving, clapping, nodding)</li>
                    <li>Doesn't use gestures to communicate (gives, shows, reaches)</li>
                    <li>Facial expressions don't match emotion or are limited</li>
                    <li>Doesn't understand others' gestures/body language</li>
                    <li>Atypical body posture or proximity</li>
                  </ul>
                </section>

                <section id="repetitive-behaviors" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Restricted &amp; Repetitive Behaviors (Core Domain 2)</h2>
                  <p className="text-gray-700 mb-4">Need at least 2 of these 4 categories for diagnosis:</p>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">1. Stereotyped/Repetitive Motor Movements, Speech, or Object Use</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Hand-flapping, finger-flicking, hand-posturing</li>
                    <li>Rocking, spinning, pacing, toe-walking</li>
                    <li>Lining up toys, spinning wheels, flipping objects</li>
                    <li>Echolalia, scripting, palilalia (repeating own words)</li>
                    <li>Unusual object focus: parts (wheels, buttons) not whole toy</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">2. Insistence on Sameness, Inflexible Routines, Ritualized Patterns</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Extreme distress at small changes (route, cup, seat, schedule)</li>
                    <li>Rigid rituals: must do things in exact order</li>
                    <li>Difficulty with transitions</li>
                    <li>Need for things to be "just so" (symmetry, arrangement)</li>
                    <li>Eating same foods, wearing same clothes, watching same videos</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">3. Highly Restricted, Fixated Interests (Abnormal Intensity/Focus)</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Intense focus on specific topics: trains, dinosaurs, logos, maps, letters, numbers</li>
                    <li>Interest is all-consuming; difficult to redirect</li>
                    <li>Knowledge far exceeds age level</li>
                    <li>May be unusual for age (vacuum cleaners, drain pipes, flags)</li>
                    <li>In girls: often animals, celebrities, fiction, psychology — more "socially acceptable" so missed</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">4. Hyper- or Hyporeactivity to Sensory Input</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Hyper (over-responsive):</strong> Covers ears, avoids textures, picky eating, fears loud sounds, dislikes touch</li>
                    <li><strong>Hypo (under-responsive):</strong> Seeks intense movement, crashes into things, high pain tolerance, doesn't notice name called</li>
                    <li><strong>Sensory seeking:</strong> Spins, jumps, chews non-food, smells objects, visual stimulation (fans, lights)</li>
                    <li>See <a href="#sensory-differences" className="text-pink-600 hover:underline">Sensory Processing Differences</a> section below</li>
                  </ul>
                </section>

                <section id="sensory-differences" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Sensory Processing Differences</h2>
                  <p className="text-gray-700 mb-4">Over 90% of autistic children have sensory differences. These aren't "behaviors"—they're neurological responses to sensory input.</p>

                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-b border-border bg-muted/50">
                          <th className="p-3 text-left font-medium">Sensory System</th>
                          <th className="p-3 text-left font-medium">Hyper-Responsive (Avoids)</th>
                          <th className="p-3 text-left font-medium">Hypo-Responsive (Seeks)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Auditory</td>
                          <td className="p-3">Covers ears, fears vacuums/hand dryers, hums to block noise</td>
                          <td className="p-3">Makes loud noises, seeks noisy toys, doesn't respond to name</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Visual</td>
                          <td className="p-3">Avoids bright lights, squints, overwhelmed by busy patterns</td>
                          <td className="p-3">Stares at lights/fans, spins objects, loves screens</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Tactile</td>
                          <td className="p-3">Hates tags, seams, messy play, haircuts, toothbrushing</td>
                          <td className="p-3">Craves messy play, chews clothes, touches everything, high pain tolerance</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Vestibular (Movement)</td>
                          <td className="p-3">Fears swings, slides, climbing; gets carsick easily</td>
                          <td className="p-3">Constant spinning, jumping, rocking, upside-down play</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Proprioception (Body Awareness)</td>
                          <td className="p-3">Avoids heavy work, seems "floppy," poor coordination</td>
                          <td className="p-3">Crashes, bumps, hugs tightly, stomps, grinds teeth</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Oral/Gustatory</td>
                          <td className="p-3">Extreme picky eating, gags on textures, limited diet</td>
                          <td className="p-3">Chews non-food (shirt, pencils), stuffs mouth, craves crunchy/spicy</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Olfactory</td>
                          <td className="p-3">Gags at smells, refuses foods by smell</td>
                          <td className="p-3">Smells everything (objects, people, non-food items)</td>
                        </tr>
                        <tr className="border-b border-border/50">
                          <td className="p-3 font-medium">Interoception (Internal)</td>
                          <td className="p-3">Doesn't recognize hunger, thirst, need to toilet, pain</td>
                          <td className="p-3">Frequent bathroom requests, overeats, seeks