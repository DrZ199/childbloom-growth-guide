import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from 'src/lib/seo'
import ReadingProgress from 'src/components/articles/reading-progress'
import BackToTop from 'src/components/articles/back-to-top'
import TableOfContents from 'src/components/articles/table-of-contents'
import RelatedArticles from 'src/components/articles/related-articles'

export const Route = createFileRoute('/articles/speech-development-guide/')({
  component: SpeechDevelopmentGuide,
  head: () => {
    const url = 'https://childbloom.site/articles/speech-development-guide/'
    return seo({
      title: 'Speech Development Guide: Milestones, Red Flags & Tips | ChildBloom',
      description: 'Complete guide to speech and language development from birth to age 5. Milestones, red flags, bilingual tips, and strategies to boost your child\'s communication skills.',
      url,
      type: 'article',
      publishedTime: '2025-03-05',
      modifiedTime: '2025-06-10',
      author: 'ChildBloom Medical Team',
      image: 'https://childbloom.site/images/articles/speech-development-guide-og.jpg',
    })
  },
})

function SpeechDevelopmentGuide() {
  const tableOfContents = [
    { id: 'how-speech-develops', title: 'How Speech Develops' },
    { id: 'milestones-by-age', title: 'Milestones by Age' },
    { id: 'receptive-vs-expressive', title: 'Receptive vs. Expressive Language' },
    { id: 'red-flags', title: 'Red Flags by Age' },
    { id: 'boosting-speech', title: 'Strategies to Boost Speech' },
    { id: 'bilingual-families', title: 'Bilingual Families' },
    { id: 'when-to-seek-help', title: 'When to Seek Help' },
    { id: 'therapy-options', title: 'Therapy Options' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ]

  const relatedArticles = [
    { title: 'Child Development Milestones', slug: '/articles/child-development-milestones/' },
    { title: 'Baby Milestones by Month', slug: '/articles/baby-milestones-by-month/' },
    { title: 'Best Educational Toys', slug: '/articles/best-educational-toys/' },
    { title: 'Best Baby Books', slug: '/articles/best-baby-books/' },
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
              <span className="text-gray-700">Speech Development Guide</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Speech Development Guide: Milestones, Red Flags & Tips
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Complete guide to speech and language development from birth to age 5. Milestones, red flags, bilingual tips, and strategies to boost your child's communication skills.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>By ChildBloom Medical Team</span>
              <span>•</span>
              <span>June 10, 2025</span>
              <span>•</span>
              <span>20 min read</span>
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
                    Speech and language development is one of the most exciting—and sometimes anxiety-provoking—aspects of parenting. This guide covers typical milestones, when to be concerned, and practical ways to support your child's communication journey.
                  </p>
                </div>

                <section id="how-speech-develops" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How Speech Develops</h2>
                  <p className="text-gray-700 mb-4">
                    Speech and language are complex skills that develop in a predictable sequence, but with wide individual variation. Understanding the process helps you support your child effectively.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">The Two Components</h3>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 text-green-700">Receptive Language (Understanding)</h4>
                        <p className="text-gray-700 mb-2">What your child comprehends. Develops first and is typically ahead of expressive language.</p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Following directions</li>
                          <li>Identifying objects/people</li>
                          <li>Understanding questions</li>
                          <li>Comprehending stories</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2 text-blue-700">Expressive Language (Speaking)</h4>
                        <p className="text-gray-700 mb-2">What your child can say. Includes words, gestures, signs, and eventually sentences.</p>
                        <ul className="list-disc pl-6 space-y-1 text-gray-700 text-sm">
                          <li>Babbling, cooing</li>
                          <li>First words</li>
                          <li>Combining words</li>
                          <li>Sentences, grammar</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Pre-Linguistic Skills (Birth-12 Months)</h3>
                  <p className="text-gray-700 mb-4">Before words come these foundational skills:</p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Joint attention:</strong> Sharing focus on an object (9-12 months)</li>
                    <li><strong>Turn-taking:</strong> Back-and-forth sounds/gestures (6-9 months)</li>
                    <li><strong>Imitation:</strong> Copying sounds, faces, actions (6-12 months)</li>
                    <li><strong>Gesture use:</strong> Pointing, waving, reaching (9-12 months)</li>
                    <li><strong>Play skills:</strong> Functional play, pretend play (12+ months)</li>
                  </ul>
                </section>

                <section id="milestones-by-age" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Milestones by Age</h2>
                  <p className="text-gray-700 mb-4">Remember: there's a wide range of normal. These are averages—many children fall outside these ranges and develop typically.</p>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Birth - 3 Months</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Startles at loud sounds</li>
                      <li>Quiets or smiles when spoken to</li>
                      <li>Makes cooing sounds (vowels: "ah," "eh," "oh")</li>
                      <li>Different cries for different needs</li>
                      <li>Makes eye contact</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">4 - 6 Months</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Babbles with consonants ("ba," "da," "ma")</li>
                      <li>Laughs out loud</li>
                      <li>Turns head toward sounds</li>
                      <li>Responds to tone of voice (angry vs. happy)</li>
                      <li>Makes sounds to get attention</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">7 - 12 Months</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Babbles long strings ("babababa," "dadadada")</li>
                      <li>Uses gestures: waves, points, reaches</li>
                      <li>Imitates sounds and gestures</li>
                      <li>Understands "no" (pauses briefly)</li>
                      <li>Says 1-2 words with meaning (12 months)</li>
                      <li>Follows simple commands with gestures ("give me")</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">12 - 18 Months</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Says 5-20 words</li>
                      <li>Points to body parts, pictures in books</li>
                      <li>Follows 1-step commands without gestures</li>
                      <li>Shakes head "no," nods "yes"</li>
                      <li>Imitates animal sounds, vehicle sounds</li>
                      <li>Uses jargon (conversational-sounding babble)</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">18 - 24 Months</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Says 50+ words (vocabulary explosion!)</li>
                      <li>Combines 2 words ("more milk," "mommy go")</li>
                      <li>Follows 2-step commands ("get shoes and bring here")</li>
                      <li>Points to pictures when named</li>
                      <li>Names familiar objects</li>
                      <li>Uses pronouns (mine, me) - often incorrectly</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">2 - 3 Years</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Says 200-1000+ words</li>
                      <li>Uses 3-4 word sentences</li>
                      <li>Understood 50-75% by strangers</li>
                      <li>Asks "what's that?" "where?" questions</li>
                      <li>Uses plurals, past tense (-ing, -ed)</li>
                      <li>Follows 2-3 step commands</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">3 - 4 Years</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Says 1000+ words</li>
                      <li>Uses 4-5+ word sentences</li>
                      <li>Understood 75-100% by strangers</li>
                      <li>Tells simple stories</li>
                      <li>Answers "who," "what," "where," "why" questions</li>
                      <li>Uses most speech sounds correctly (except r, l, th)</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">4 - 5 Years</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Uses complex sentences with connectors (because, if, when)</li>
                      <li>Tells detailed stories with sequence</li>
                      <li>Understood nearly 100% by strangers</li>
                      <li>Uses future tense, irregular past tense</li>
                      <li>Follows 3-step unrelated commands</li>
                      <li>Most speech sounds correct (r, l, th may still be developing)</li>
                    </ul>
                  </div>
                </section>

                <section id="receptive-vs-expressive" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Receptive vs. Expressive Language</h2>
                  <p className="text-gray-700 mb-4">Understanding the gap between what your child understands and what they can say is crucial for realistic expectations.</p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">The Receptive-Expressive Gap</h4>
                    <p className="text-gray-700 mb-3">Receptive language typically develops 3-6 months ahead of expressive language. A 12-month-old who says 2 words may understand 50+. This is normal!</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>If receptive is on track but expressive is delayed:</strong> Often "late talker" pattern—good prognosis</li>
                      <li><strong>If both receptive and expressive are delayed:</strong> Higher concern, evaluate for global delay or autism</li>
                      <li><strong>If expressive is ahead of receptive:</strong> Rare, may indicate echolalia or scripting</li>
                    </ul>
                  </div>
                </section>

                <section id="red-flags" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Red Flags by Age</h2>
                  <p className="text-gray-700 mb-4">These signs warrant discussion with your pediatrician and possible speech-language evaluation. Early intervention is highly effective!</p>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">By 6 Months</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>No cooing or vowel sounds</li>
                      <li>Doesn't startle at loud sounds</li>
                      <li>No social smile</li>
                      <li>Doesn't watch speaker's face</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">By 9 Months</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>No babbling with consonants (ba, da, ma)</li>
                      <li>Doesn't turn to name</li>
                      <li>No back-and-forth sharing of sounds/faces</li>
                      <li>Doesn't use gestures (wave, reach, point)</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">By 12 Months</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>No words (mama, dada with meaning)</li>
                      <li>Doesn't respond to name</li>
                      <li>Doesn't point or wave</li>
                      <li>No joint attention (sharing interest)</li>
                      <li>Doesn't understand simple requests</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">By 18 Months</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Fewer than 5-10 words</li>
                      <li>Doesn't point to show things</li>
                      <li>Doesn't follow simple commands</li>
                      <li>No pretend play (feeding doll, talking on phone)</li>
                      <li>Doesn't imitate words</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">By 24 Months</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Fewer than 50 words</li>
                      <li>No 2-word combinations</li>
                      <li>Doesn't follow 2-step commands</li>
                      <li>Speech understood <50% by parents</li>
                      <li>Loss of previously acquired words</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">By 3 Years</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Not using 3-word sentences</li>
                      <li>Speech understood <75% by strangers</li>
                      <li>Doesn't ask questions</li>
                      <li>Can't retell simple event</li>
                      <li>Frustration/tantrums from not being understood</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Autism-Specific Communication Red Flags</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>No babbling by 12 months</li>
                      <li>No pointing, showing, reaching by 12 months</li>
                      <li>No words by 16 months</li>
                      <li>No meaningful 2-word phrases by 24 months</li>
                      <li>Loss of speech/babbling/social skills at ANY age</li>
                      <li>Echolalia (repeating words/phrases without communicative intent)</li>
                      <li>Scripting (reciting movies/books out of context)</li>
                      <li>Unusual prosody (monotone, singsong, robotic)</li>
                    </ul>
                  </div>
                </section>

                <section id="boosting-speech" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Strategies to Boost Speech & Language</h2>
                  <p className="text-gray-700 mb-4">These evidence-based strategies work for all children, whether typically developing or delayed.</p>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">The 3 T's: Talk, Talk, Talk</h3>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                    <li><strong>Narrate your day:</strong> "I'm washing the red apple. Water is cold. Scrub, scrub, scrub."</li>
                    <li><strong>Use "parentese":</strong> Higher pitch, slower rate, exaggerated intonation—babies prefer it and learn more</li>
                    <li><strong>Label everything:</strong> "Ball! Blue ball. Big blue ball. Roll the ball."</li>
                    <li><strong>Expand:</strong> Child says "car" → You say "Red car! Fast car! Vroom vroom!"</li>
                    <li><strong>Recast:</strong> Child says "him running" → You say "Yes, HE IS RUNNING!" (correct grammar, no correction)</li>
                  </ol>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Responsive Interaction</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Wait 5-10 seconds</strong> after asking a question or making a comment</li>
                    <li><strong>Follow their lead:</strong> Talk about what THEY're looking at/playing with</li>
                    <li><strong>OWL: Observe, Wait, Listen</strong> (Hanen Centre strategy)</li>
                    <li><strong>Respond to ALL communication attempts:</strong> gestures, sounds, words, eye contact</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Reading: The #1 Language Booster</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Read daily from birth (even 5 minutes counts)</li>
                    <li>Face-to-face so they see your mouth</li>
                    <li>Point to pictures, label, ask "where's the...?"</li>
                    <li>Let them turn pages, lift flaps</li>
                    <li>Repetition is GOOD—same book 50 times builds vocabulary</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Play-Based Strategies</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>People games:</strong> Peek-a-boo, pat-a-cake, tickles—build turn-taking</li>
                    <li><strong>Pretend play:</strong> Feed doll, cook, drive cars—narrate the play</li>
                    <li><strong>Songs with gestures:</strong> Wheels on Bus, Itsy Bitsy Spider—movement + language</li>
                    <li><strong>Choice-making:</strong> "Apple or banana?" (hold both up)</li>
                    <li><strong>Sabotage:</strong> Put toy in clear container they can't open—wait for request</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">What NOT to Do</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Don't say "say ___" (creates pressure, reduces spontaneous speech)</li>
                    <li>Don't correct grammar explicitly ("No, say 'he IS running'")</li>
                    <li>Don't quiz constantly ("What's this? What color?")</li>
                    <li>Don't anticipate every need—create opportunities to communicate</li>
                    <li>Don't rely on screens for language learning (AAP: <18 months none, 2-5 years 1hr max co-viewing)</li>
                  </ul>
                </section>

                <section id="bilingual-families" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Bilingual Families</h2>
                  <p className="text-gray-700 mb-4">Bilingualism does NOT cause language delays. It provides cognitive, social, and future career benefits.</p>

                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-green-900 mb-2">Bilingual Myths vs. Facts</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Myth:</strong> Bilingualism causes delays. <strong>Fact:</strong> Milestones are the same in each language.</li>
                      <li><strong>Myth:</strong> Mixing languages confuses kids. <strong>Fact:</strong> Code-switching is normal and sophisticated.</li>
                      <li><strong>Myth:</strong> One parent, one language is required. <strong>Fact:</strong> Many patterns work (ML@H, time/place, mixed).</li>
                      <li><strong>Myth:</strong> Drop a language if delayed. <strong>Fact:</strong> Dropping a language doesn't fix delays; evaluate in BOTH languages.</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Strategies for Bilingual Families</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Provide rich input in BOTH languages (books, songs, conversation)</li>
                    <li>Be consistent with your chosen pattern</li>
                    <li>Don't translate everything—natural exposure is better</li>
                    <li>Connect with other bilingual families for peer interaction</li>
                    <li>If concerned, seek evaluation from bilingual SLP who assesses BOTH languages</li>
                  </ul>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Typical Bilingual Patterns</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>May have smaller vocabulary in EACH language, but COMBINED vocabulary = monolingual peers</li>
                    <li>May mix languages in same sentence (normal!)</li>
                    <li>May have "dominant" language that shifts over time</li>
                    <li>May go through silent period when starting school in new language (normal, up to 6 months)</li>
                  </ul>
                </section>

                <section id="when-to-seek-help" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Seek Help</h2>
                  <p className="text-gray-700 mb-4">Trust your instincts. You know your child best. Early evaluation has no downside—either you get reassurance or early intervention.</p>

                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-yellow-900 mb-2">Steps to Take</h4>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                      <li>Discuss concerns with pediatrician at well visit (or schedule sooner)</li>
                      <li>Request hearing screening (rule out hearing loss first)</li>
                      <li>Ask for referral to Speech-Language Pathologist (SLP)</li>
                      <li>For under 3: Contact Early Intervention (free/low-cost, no referral needed in most states)</li>
                      <li>For 3+: Contact school district for Child Find evaluation (free)</li>
                    </ul>
                  </div>

                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">What to Expect from Evaluation</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Case history (birth, medical, family, milestones)</li>
                    <li>Oral mechanism exam (mouth structure, movement)</li>
                    <li>Standardized tests (receptive, expressive, articulation)</li>
                    <li>Play-based observation</li>
                    <li>Parent report (you're the expert on your child!)</li>
                    <li>Results + recommendations (therapy, monitoring, referrals)</li>
                  </ul>
                </section>

                <section id="therapy-options" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Therapy Options</h2>
                  <p className="text-gray-700 mb-4">If therapy is recommended, several service delivery models exist:</p>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Early Intervention (Birth-3)</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Home-based or community-based</li>
                      <li>Family-centered coaching model</li>
                      <li>Free or sliding scale (Part C of IDEA)</li>
                      <li>No diagnosis required—based on delay</li>
                      <li>Transition planning at 2.5 years for school services</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">School-Based Services (3-21)</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Free through public schools (IDEA)</li>
                      <li>IEP (Individualized Education Program) if eligible</li>
                      <li>Typically 1-2x/week, 20-30 min sessions</li>
                      <li>Group or individual</li>
                      <li>Focus on educational impact</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Private Therapy</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Clinic, home, or telehealth</li>
                      <li>More frequent/intensive options</li>
                      <li>Insurance may cover (check benefits)</li>
                      <li>Can supplement school services</li>
                      <li>Choose SLP with pediatric specialization</li>
                    </ul>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Specialized Approaches</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>PROMPT:</strong> For motor speech disorders (apraxia)</li>
                      <li><strong>Hanen (It Takes Two to Talk):</strong> Parent coaching for late talkers</li>
                      <li><strong>DTTC:</strong> Dynamic Temporal Tactile Cueing (apraxia)</li>
                      <li><strong>AAC:</strong> Augmentative Alternative Communication (devices, signs, pictures)</li>
                      <li><strong>Social Thinking:</strong> For pragmatic language/social communication</li>
                    </ul>
                  </div>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">What's the difference between speech and language?</h3>
                      <p className="text-gray-700">
                        <strong>Speech</strong> = how we say sounds (articulation, voice, fluency). <strong>Language</strong> = the system of words and rules for communicating (vocabulary, grammar, understanding, social use). A child can have delays in one, both, or neither.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">My 2-year-old isn't talking much. Should I wait and see?</h3>
                      <p className="text-gray-700">
                        "Wait and see" is outdated advice. If your 2-year-old has fewer than 50 words and no 2-word combinations, request an evaluation now. Early intervention (before 3) has the best outcomes. Many "late talkers" catch up, but we can't predict who will.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Does using sign language delay speech?</h3>
                      <p className="text-gray-700">
                        No! Research shows signing SUPPORTS spoken language development. It reduces frustration, builds symbolic thinking, and provides a bridge to words. Many SLPs recommend basic signs (more, all done, eat, milk, help) for all babies.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">My child stutters. Is this normal?</h3>
                      <p className="text-gray-700">
                        Developmental stuttering (ages 2.5-5) affects ~5% of children. Most outgrow it. Red flags for persistent stuttering: family history, duration >6 months, tension/struggle behaviors, starting after 3.5 years. Consult SLP if concerned.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Can pacifiers or sippy cups cause speech delays?</h3>
                      <p className="text-gray-700">
                        Prolonged pacifier use (past 12-18 months) and hard-spout sippy cups CAN affect oral motor development and dental alignment, potentially impacting speech sounds. Use open cups/straw cups by 12 months. Limit pacifier to sleep only by 12 months, wean by 2-3 years.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">How do I know if my child needs a hearing test?</h3>
                      <p className="text-gray-700">
                        Any speech/language delay warrants a hearing test. Also: doesn't startle to loud sounds, doesn't turn to name, speaks loudly, turns TV up high, says "what?" frequently, history of ear infections. Even mild hearing loss affects speech development.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">What is apraxia of speech?</h3>
                      <p className="text-gray-700">
                        Childhood Apraxia of Speech (CAS) is a motor planning disorder—brain knows what to say, but can't coordinate mouth movements. Signs: inconsistent errors, groping, vowel distortions, limited babbling, understands much more than says. Requires specialized therapy (PROMPT, DTTC).
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
  headline: 'Speech Development Guide: Milestones, Red Flags & Tips',
  description: 'Complete guide to speech and language development from birth to age 5. Milestones, red flags, bilingual tips, and strategies to boost your child\'s communication skills.',
  image: 'https://childbloom.site/images/articles/speech-development-guide-og.jpg',
  datePublished: '2025-03-05',
  dateModified: '2025-06-10',
  author: {
    '@type': 'Organization',
    name: 'ChildBloom Medical Team',
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
    '@id': 'https://childbloom.site/articles/speech-development-guide/',
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
        name: 'Speech Development Guide',
        item: 'https://childbloom.site/articles/speech-development-guide/',
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
