import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from '@/lib/seo'
import { ReadingProgress } from '@/components/content/reading-progress'
import { BackToTop } from '@/components/content/back-to-top'
import { TableOfContents } from '@/components/content/table-of-contents'
import { RelatedArticles } from '@/components/content/related-articles'

export const Route = createFileRoute('/articles/starting-solids-guide')({
  component: StartingSolidsGuide,
  head: () => {
    const url = 'https://childbloom.site/articles/starting-solids-guide/'
    return seo({
      title: 'Starting Solids Guide: When, What & How to Feed Your Baby | ChildBloom',
      description: 'Complete guide to starting solids: readiness signs, first foods, baby-led weaning vs purees, allergens, schedules, and common mistakes to avoid.',
      url,
      type: 'article',
      publishedTime: '2025-02-15',
      modifiedTime: '2025-06-10',
      author: 'ChildBloom Nutrition Team',
      image: 'https://childbloom.site/images/articles/starting-solids-guide-og.jpg',
    })
  },
})

function StartingSolidsGuide() {
  const tableOfContents = [
    { id: 'readiness-signs', title: 'Is Your Baby Ready?' },
    { id: 'first-foods', title: 'Best First Foods' },
    { id: 'methods', title: 'Purees vs Baby-Led Weaning' },
    { id: 'allergen-introduction', title: 'Introducing Allergens' },
    { id: 'feeding-schedule', title: 'Feeding Schedule by Age' },
    { id: 'foods-to-avoid', title: 'Foods to Avoid' },
    { id: 'choking-vs-gagging', title: 'Choking vs Gagging' },
    { id: 'common-mistakes', title: 'Common Mistakes' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ]

  const relatedArticles = [
    { title: 'Toddler Nutrition Tips', slug: '/articles/toddler-nutrition-tips/' },
    { title: 'Child Nutrition Guide', slug: '/articles/child-nutrition-guide/' },
    { title: 'Best Baby Food Makers', slug: '/articles/best-baby-food-makers/' },
    { title: 'Newborn Care Guide', slug: '/articles/newborn-care-guide/' },
    { title: 'Child Development Milestones', slug: '/articles/child-development-milestones/' },
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
              <span className="text-gray-700">Starting Solids Guide</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Starting Solids Guide: When, What & How to Feed Your Baby
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Complete guide to starting solids: readiness signs, first foods, baby-led weaning vs purees, allergens, schedules, and common mistakes to avoid.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>By ChildBloom Nutrition Team</span>
              <span>•</span>
              <span>June 10, 2025</span>
              <span>•</span>
              <span>22 min read</span>
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
                    Starting solids is an exciting milestone! Around 6 months, your baby needs nutrients (especially iron) that breast milk or formula alone can't provide. This guide walks you through everything.
                  </p>
                </div>

                <section id="readiness-signs" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Is Your Baby Ready?</h2>
                  <p className="text-gray-700 mb-4">
                    The AAP and WHO recommend starting solids around 6 months, but age alone isn't enough. Your baby must show developmental readiness signs. Starting too early increases choking risk and doesn't help sleep.
                  </p>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-green-900 mb-2">All These Signs Should Be Present</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Good head control</strong>—holds head steady, upright</li>
                      <li><strong>Sits with minimal support</strong>—doesn't slump in high chair</li>
                      <li><strong>Lost tongue-thrust reflex</strong>—doesn't automatically push food out</li>
                      <li><strong>Shows interest in food</strong>—watches you eat, reaches for food</li>
                      <li><strong>Can move food to back of mouth</strong>—coordination to swallow</li>
                      <li><strong>Doubled birth weight</strong>—typically around 13+ lbs</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-yellow-900 mb-2">Not Ready Signs (Wait!)</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Still has strong tongue-thrust reflex</li>
                      <li>Can't sit with support</li>
                      <li>No interest in food</li>
                      <li>Younger than 4 months (never start before 4 months)</li>
                      <li>Premature baby—use adjusted age, consult pediatrician</li>
                    </ul>
                  </div>
                </section>

                <section id="first-foods" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Best First Foods</h2>
                  <p className="text-gray-700 mb-4">
                    Iron-rich foods should be the priority. Breastfed babies especially need iron from solids around 6 months. There's no single "perfect" first food—variety is key.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Iron-Rich First Foods (Priority)</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Iron-fortified infant cereal (oat, barley, multigrain—not just rice)</li>
                    <li>Pureed meats (chicken, beef, turkey, lamb)</li>
                    <li>Mashed beans, lentils, chickpeas</li>
                    <li>Scrambled eggs (yolk and white)</li>
                    <li>Tofu, tempeh</li>
                    <li>Liver (once a week max, high vitamin A)</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Nutrient-Dense Fruits & Vegetables</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Avocado (healthy fats, easy to mash)</li>
                    <li>Sweet potato, butternut squash (vitamin A)</li>
                    <li>Banana (potassium, easy texture)</li>
                    <li>Pear, apple (steamed and pureed)</li>
                    <li>Broccoli, cauliflower (steamed, vitamin C aids iron absorption)</li>
                    <li>Spinach, kale (iron, steam and puree)</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Foods to Introduce Early (Allergy Prevention)</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Peanut butter (thinned with water/breast milk)</li>
                    <li>Well-cooked egg</li>
                    <li>Yogurt, cheese (dairy)</li>
                    <li>Wheat (toast strips, pasta)</li>
                    <li>Fish, shellfish (well-cooked, deboned)</li>
                    <li>Soy (tofu, edamame)</li>
                    <li>Sesame (tahini thinned)</li>
                  </ul>
                </section>

                <section id="methods" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Purees vs Baby-Led Weaning</h2>
                  <p className="text-gray-700 mb-4">
                    Both approaches are valid. Many families use a combination (combo feeding). Choose what works for your family.
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Comparison</h3>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-4">Aspect</th>
                          <th className="text-left py-2 px-4">Traditional Purees</th>
                          <th className="text-left py-2 px-4">Baby-Led Weaning (BLW)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Texture</td>
                          <td className="py-2 px-4">Smooth → lumpy → finger foods</td>
                          <td className="py-2 px-4">Finger foods from start</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Control</td>
                          <td className="py-2 px-4">Parent controls amount/pace</td>
                          <td className="py-2 px-4">Baby self-feeds, controls intake</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Mess</td>
                          <td className="py-2 px-4">Less mess initially</td>
                          <td className="py-2 px-4">Very messy</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Iron intake</td>
                          <td className="py-2 px-4">Easier to ensure with cereals/meats</td>
                          <td className="py-2 px-4">Requires planning for iron foods</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Choking risk</td>
                          <td className="py-2 px-4">Lower initially</td>
                          <td className="py-2 px-4">Similar with proper foods</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Family meals</td>
                          <td className="py-2 px-4">Separate prep often needed</td>
                          <td className="py-2 px-4">Baby eats modified family food</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Combo Approach (Recommended)</h3>
                  <p className="text-gray-700 mb-4">
                    Offer iron-rich purees (meat, beans, fortified cereal) on a preloaded spoon for baby to self-feed, plus soft finger foods. Best of both worlds!
                  </p>
                </section>

                <section id="allergen-introduction" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Introducing Allergens</h2>
                  <p className="text-gray-700 mb-4">
                    Early, regular introduction of allergens (starting around 6 months) reduces food allergy risk. The LEAP study showed 80% reduction in peanut allergy with early introduction.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Top 9 Allergens to Introduce</h4>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                      <li>Peanut</li>
                      <li>Egg</li>
                      <li>Dairy (yogurt, cheese—cow's milk as drink after 1 year)</li>
                      <li>Wheat</li>
                      <li>Soy</li>
                      <li>Tree nuts (almond, cashew, walnut—butters thinned)</li>
                      <li>Fish</li>
                      <li>Shellfish (shrimp, crab—well cooked)</li>
                      <li>Sesame</li>
                    </ol>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">How to Introduce Safely</h3>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                    <li><strong>One at a time:</strong> Introduce one new allergen every 2-3 days</li>
                    <li><strong>Start small:</strong> 1/4 teaspoon mixed into tolerated food</li>
                    <li><strong>Morning/early afternoon:</strong> So you can monitor for reactions</li>
                    <li><strong>Watch for 2 hours:</strong> Hives, swelling, vomiting, breathing changes</li>
                    <li><strong>If tolerated:</strong> Offer regularly (2-3x/week) to maintain tolerance</li>
                    <li><strong>If reaction:</strong> Stop, contact pediatrician, call 911 for severe symptoms</li>
                  </ol>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">High-Risk Babies</h3>
                  <p className="text-gray-700 mb-4">
                    If your baby has severe eczema or existing food allergy, consult your pediatrician before introducing allergens. They may recommend allergy testing or supervised introduction.
                  </p>
                </section>

                <section id="feeding-schedule" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Feeding Schedule by Age</h2>
                  <p className="text-gray-700 mb-4">
                    Breast milk or formula remains the primary nutrition source until 12 months. Solids complement, not replace, milk feeds.
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">6-7 Months: 1-2 Meals/Day</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>1-2 tablespoons per meal</li>
                      <li>1-2 meals (breakfast and/or lunch)</li>
                      <li>Milk first, then solids 30-60 min after</li>
                      <li>Smooth purees or very soft finger foods</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">8-9 Months: 2-3 Meals/Day</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>2-4 tablespoons per meal</li>
                      <li>3 meals (breakfast, lunch, dinner)</li>
                      <li>Introduce texture: mashed, minced, soft pieces</li>
                      <li>Can offer water in open cup with meals</li>
                      <li>May drop a milk feed as solids increase</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">10-12 Months: 3 Meals + Snacks</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>1/4-1/2 cup per meal</li>
                      <li>3 meals + 1-2 snacks</li>
                      <li>Chopped family foods, self-feeding</li>
                      <li>Transition to cow's milk at 12 months (16-24oz max)</li>
                      <li>Wean from bottle by 18 months</li>
                    </ul>
                  </div>
                </section>

                <section id="foods-to-avoid" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Foods to Avoid (Under 1 Year)</h2>
                  <p className="text-gray-700 mb-4">
                    Some foods pose safety or health risks for babies:
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">Never Give Under 1 Year</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Honey:</strong> Botulism risk (spores survive in honey)</li>
                      <li><strong>Cow's milk as drink:</strong> Blocks iron, kidneys can't handle protein load</li>
                      <li><strong>Unpasteurized foods:</strong> Raw milk, cheese, juice (bacteria risk)</li>
                      <li><strong>High mercury fish:</strong> Shark, swordfish, king mackerel, tilefish</li>
                    </ul>
                  </div>
                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-yellow-900 mb-2">Avoid or Limit</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Added salt:</strong> Baby kidneys can't process excess sodium</li>
                      <li><strong>Added sugar:</strong> No nutritional need, shapes preferences</li>
                      <li><strong>Choking hazards:</strong> Whole nuts, grapes, hot dogs, popcorn, raw carrots, apples</li>
                      <li><strong>Rice cereal daily:</strong> Arsenic concern—vary grains</li>
                      <li><strong>Juice:</strong> Not recommended under 1; max 4oz after 1</li>
                    </ul>
                  </div>
                </section>

                <section id="choking-vs-gagging" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Choking vs Gagging</h2>
                  <p className="text-gray-700 mb-4">
                    Gagging is normal and protective. Choking is an emergency. Knowing the difference keeps you calm and your baby safe.
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-4">Sign</th>
                          <th className="text-left py-2 px-4">Gagging (Normal)</th>
                          <th className="text-left py-2 px-4">Choking (Emergency)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Sound</td>
                          <td className="py-2 px-4">Loud, retching, coughing</td>
                          <td className="py-2 px-4">Silent, high-pitched, or no sound</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Color</td>
                          <td className="py-2 px-4">Red face, watery eyes</td>
                          <td className="py-2 px-4">Blue/pale lips, face</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Breathing</td>
                          <td className="py-2 px-4">Can breathe, cry</td>
                          <td className="py-2 px-4">Cannot breathe, cry, or cough</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Action</td>
                          <td className="py-2 px-4">Let them work it out</td>
                          <td className="py-2 px-4">Back blows + chest thrusts immediately</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">Infant Choking First Aid</h4>
                    <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                      <li>Call 911 (or have someone call)</li>
                      <li>5 back blows: face down on forearm, head lower than chest</li>
                      <li>5 chest thrusts: turn face up, 2 fingers on breastbone</li>
                      <li>Repeat until object dislodged or baby becomes unconscious</li>
                      <li>If unconscious: start CPR</li>
                    </ol>
                    <p className="text-gray-700 mt-3"><strong>Take an infant CPR class before starting solids.</strong></p>
                  </div>
                </section>

                <section id="common-mistakes" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Mistakes to Avoid</h2>
                  <ol className="list-decimal pl-6 space-y-4 text-gray-700 mb-4">
                    <li><strong>Starting too early:</strong> Before 4 months or without readiness signs</li>
                    <li><strong>Only offering sweet foods:</strong> Baby prefers sweet, but needs variety</li>
                    <li><strong>Giving up on rejected foods:</strong> Takes 10-15 exposures to accept</li>
                    <li><strong>Adding cereal to bottle:</strong> Choking risk, doesn't help sleep</li>
                    <li><strong>Forcing "one more bite":</strong> Undermines self-regulation</li>
                    <li><strong>Delaying allergens:</strong> Increases allergy risk</li>
                    <li><strong>Using food as reward:</strong> Creates unhealthy relationship</li>
                    <li><strong>Not including baby in family meals:</strong> Social learning is powerful</li>
                    <li><strong>Worrying about mess:</strong> Sensory exploration is part of learning</li>
                    <li><strong>Comparing to other babies:</strong> Every baby progresses differently</li>
                  </ol>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I start solids at 4 months?</h3>
                      <p className="text-gray-700">
                        AAP recommends around 6 months. Some babies show readiness at 4-5 months, but never before 4 months. If your baby seems ready early, consult your pediatrician. Most do well waiting until 6 months.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Do I have to start with rice cereal?</h3>
                      <p className="text-gray-700">
                        No. Rice cereal was traditional but isn't necessary. It's low in nutrition and has arsenic concerns. Iron-fortified oat, barley, or multigrain cereals are better, or skip cereal entirely and start with iron-rich pureed meats, beans, or vegetables.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">How do I know if my baby is allergic?</h3>
                      <p className="text-gray-700">
                        Mild: hives, rash around mouth, mild vomiting, diarrhea. Severe (anaphylaxis): swelling of lips/tongue/throat, difficulty breathing, wheezing, pale/blue skin, loss of consciousness. Severe = call 911 immediately.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">My baby gags a lot. Is this normal?</h3>
                      <p className="text-gray-700">
                        Yes! Gagging is a protective reflex that prevents choking. The gag reflex is very forward in babies and moves back as they mature. Stay calm, don't intervene unless they're choking (silent, blue, can't breathe).
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">How much water should my baby drink?</h3>
                      <p className="text-gray-700">
                        6-12 months: 2-4oz/day with meals in an open cup. Breast milk/formula provides all hydration needed. Water is for practice and preventing constipation. Don't replace milk feeds with water.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I do baby-led weaning if my baby has no teeth?</h3>
                      <p className="text-gray-700">
                        Yes! Babies don't need teeth for BLW. They use their gums (which are very strong) to mash soft foods. Offer foods that pass the "squish test"—you can squish between thumb and forefinger.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">What if my baby refuses solids?</h3>
                      <p className="text-gray-700">
                        It's normal for babies to take weeks or months to get interested. Keep offering without pressure. Eat together, let them explore food, try different textures. If no interest by 8-9 months, consult pediatrician.
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
  headline: 'Starting Solids Guide: When, What & How to Feed Your Baby',
  description: 'Complete guide to starting solids: readiness signs, first foods, baby-led weaning vs purees, allergens, schedules, and common mistakes to avoid.',
  image: 'https://childbloom.site/images/articles/starting-solids-guide-og.jpg',
  datePublished: '2025-02-15',
  dateModified: '2025-06-10',
  author: {
    '@type': 'Organization',
    name: 'ChildBloom Nutrition Team',
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
    '@id': 'https://childbloom.site/articles/starting-solids-guide/',
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
        name: 'Starting Solids Guide',
        item: 'https://childbloom.site/articles/starting-solids-guide/',
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
