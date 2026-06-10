import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from 'src/lib/seo'
import ReadingProgress from 'src/components/articles/reading-progress'
import BackToTop from 'src/components/articles/back-to-top'
import TableOfContents from 'src/components/articles/table-of-contents'
import RelatedArticles from 'src/components/articles/related-articles'

export const Route = createFileRoute('/articles/toddler-nutrition-tips/')({
  component: ToddlerNutritionTips,
  head: () => {
    const url = 'https://childbloom.site/articles/toddler-nutrition-tips/'
    return seo({
      title: 'Toddler Nutrition Tips: Complete Guide for Ages 1-3 | ChildBloom',
      description: 'Expert toddler nutrition guide: portion sizes, food groups, picky eating strategies, meal planning, and nutrient needs for ages 1-3.',
      url,
      type: 'article',
      publishedTime: '2025-02-10',
      modifiedTime: '2025-06-10',
      author: 'ChildBloom Nutrition Team',
      image: 'https://childbloom.site/images/articles/toddler-nutrition-tips-og.jpg',
    })
  },
})

function ToddlerNutritionTips() {
  const tableOfContents = [
    { id: 'nutrient-needs', title: 'Toddler Nutrient Needs' },
    { id: 'portion-sizes', title: 'Portion Sizes & Servings' },
    { id: 'food-groups', title: 'Food Groups Daily Guide' },
    { id: 'picky-eating', title: 'Picky Eating Strategies' },
    { id: 'meal-planning', title: 'Sample Meal Plans' },
    { id: 'snacks', title: 'Healthy Snack Ideas' },
    { id: 'drinks', title: 'What About Drinks?' },
    { id: 'supplements', title: 'Supplements & Vitamins' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ]

  const relatedArticles = [
    { title: 'Child Nutrition Guide', slug: '/articles/child-nutrition-guide/' },
    { title: 'Starting Solids Guide', slug: '/articles/starting-solids/' },
    { title: 'Best Baby Food Makers', slug: '/articles/best-baby-food-makers/' },
    { title: 'Best Baby Formula', slug: '/articles/best-baby-formula/' },
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
              <span className="text-gray-700">Toddler Nutrition Tips</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Toddler Nutrition Tips: Complete Guide for Ages 1-3
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Expert toddler nutrition guide: portion sizes, food groups, picky eating strategies, meal planning, and nutrient needs for ages 1-3.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>By ChildBloom Nutrition Team</span>
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
                    Toddler nutrition is about building healthy habits for life. Between ages 1-3, growth slows but brain development accelerates. This guide covers everything you need to nourish your growing toddler.
                  </p>
                </div>

                <section id="nutrient-needs" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Toddler Nutrient Needs</h2>
                  <p className="text-gray-700 mb-4">
                    Toddlers need a variety of nutrients to support rapid brain development, bone growth, and emerging independence. Here are the key nutrients and daily requirements:
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Key Nutrients for Toddlers (1-3 years)</h3>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-4">Nutrient</th>
                          <th className="text-left py-2 px-4">Daily Need</th>
                          <th className="text-left py-2 px-4">Best Sources</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4 font-medium">Calories</td>
                          <td className="py-2 px-4">1,000-1,400 kcal</td>
                          <td className="py-2 px-4">Balanced meals across food groups</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4 font-medium">Protein</td>
                          <td className="py-2 px-4">13-19g</td>
                          <td className="py-2 px-4">Eggs, meat, fish, beans, dairy, tofu</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4 font-medium">Calcium</td>
                          <td className="py-2 px-4">700mg</td>
                          <td className="py-2 px-4">Milk, yogurt, cheese, fortified plant milks, leafy greens</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4 font-medium">Iron</td>
                          <td className="py-2 px-4">7mg</td>
                          <td className="py-2 px-4">Red meat, fortified cereals, beans, spinach, eggs</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4 font-medium">Vitamin D</td>
                          <td className="py-2 px-4">600 IU (15mcg)</td>
                          <td className="py-2 px-4">Fortified milk, fatty fish, egg yolks, sunlight</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4 font-medium">Fiber</td>
                          <td className="py-2 px-4">19g</td>
                          <td className="py-2 px-4">Whole grains, fruits, vegetables, legumes</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4 font-medium">Healthy Fats</td>
                          <td className="py-2 px-4">30-40% of calories</td>
                          <td className="py-2 px-4">Avocado, nut butters, olive oil, fatty fish, full-fat dairy</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 font-medium">Zinc</td>
                          <td className="py-2 px-4">3mg</td>
                          <td className="py-2 px-4">Meat, shellfish, legumes, seeds, dairy</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Brain Development Priority</h4>
                    <p className="text-gray-700">
                      The brain reaches 80% of adult size by age 3. DHA, iron, zinc, choline, and healthy fats are critical. Include fatty fish (salmon, sardines) 1-2 times per week, eggs, and fortified foods.
                    </p>
                  </div>
                </section>

                <section id="portion-sizes" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Portion Sizes & Servings</h2>
                  <p className="text-gray-700 mb-4">
                    Toddler portions are much smaller than adult portions. A good rule of thumb: 1 tablespoon per year of age for each food group, or 1/4 to 1/2 of an adult portion.
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Daily Serving Guidelines (Ages 1-3)</h3>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-4">Food Group</th>
                          <th className="text-left py-2 px-4">Daily Servings</th>
                          <th className="text-left py-2 px-4">Portion Size (per serving)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Grains</td>
                          <td className="py-2 px-4">3-5</td>
                          <td className="py-2 px-4">1/2 slice bread, 1/4 cup cooked rice/pasta, 1/2 cup cereal</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Vegetables</td>
                          <td className="py-2 px-4">2-3</td>
                          <td className="py-2 px-4">1/4 cup cooked, 1/2 cup raw leafy greens</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Fruits</td>
                          <td className="py-2 px-4">2-3</td>
                          <td className="py-2 px-4">1/4 cup fresh/frozen, 1/4 medium whole fruit</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Protein</td>
                          <td className="py-2 px-4">2-3</td>
                          <td className="py-2 px-4">1 oz meat/fish, 1 egg, 1/4 cup beans, 1 tbsp nut butter</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Dairy</td>
                          <td className="py-2 px-4">2-3</td>
                          <td className="py-2 px-4">1/2 cup milk/yogurt, 1/2 oz cheese</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Fats/Oils</td>
                          <td className="py-2 px-4">3-4</td>
                          <td className="py-2 px-4">1 tsp oil/butter, 1/4 avocado, 1 tbsp nut butter</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Trust Your Toddler's Appetite</h3>
                  <p className="text-gray-700 mb-4">
                    Toddlers are excellent at self-regulating. Some days they eat a lot; other days, very little. This is normal. Your job: provide healthy options at regular times. Their job: decide how much to eat.
                  </p>
                </section>

                <section id="food-groups" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Food Groups Daily Guide</h2>
                  <p className="text-gray-700 mb-4">
                    Aim for variety within each food group over the course of a week, not necessarily every day. Here's how to build balanced meals:
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Grains (Choose Whole Grains Most Often)</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Whole wheat bread, tortillas, pasta</li>
                    <li>Brown rice, quinoa, oats, barley</li>
                    <li>Whole grain cereals (low sugar)</li>
                    <li>Popcorn (age 4+), whole grain crackers</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Vegetables (Aim for Color Variety)</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Dark green: broccoli, spinach, kale, green beans</li>
                    <li>Orange/red: sweet potatoes, carrots, bell peppers, tomatoes</li>
                    <li>Starchy: corn, peas, potatoes</li>
                    <li>Other: cauliflower, zucchini, mushrooms, onions</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Fruits (Whole Fruit Over Juice)</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Berries, bananas, apples, pears, melon</li>
                    <li>Citrus: oranges, mandarins, grapefruit</li>
                    <li>Stone fruits: peaches, plums, nectarines</li>
                    <li>Limit juice to 4oz/day, 100% only</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Protein (Include Plant & Animal Sources)</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Lean meats: chicken, turkey, lean beef</li>
                    <li>Fish: salmon, cod, tuna (low mercury)</li>
                    <li>Eggs (excellent source of choline)</li>
                    <li>Plant: beans, lentils, tofu, tempeh, hummus</li>
                    <li>Nut butters (thinly spread for under 4)</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Dairy (Full-Fat Until Age 2)</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Whole milk (until age 2, then 2% or whole)</li>
                    <li>Full-fat yogurt (plain, add your own fruit)</li>
                    <li>Cheese: cheddar, mozzarella, cottage cheese</li>
                    <li>Fortified soy milk if dairy-free</li>
                  </ul>
                </section>

                <section id="picky-eating" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Picky Eating Strategies</h2>
                  <p className="text-gray-700 mb-4">
                    Picky eating peaks at age 2-3 and is developmentally normal. It's about control, not food. These evidence-based strategies reduce mealtime battles:
                  </p>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-green-900 mb-2">Division of Responsibility (Ellyn Satter)</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Parent decides:</strong> What, when, where food is served</li>
                      <li><strong>Child decides:</strong> Whether to eat, how much to eat</li>
                      <li>No pressure, no bribes, no short-order cooking</li>
                    </ul>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Proven Strategies</h3>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                    <li><strong>Eat together</strong>—family meals model healthy eating</li>
                    <li><strong>Offer new foods with familiar ones</strong>—don't overwhelm</li>
                    <li><strong>Make food fun</strong>—cookie cutters, dips, colorful plates</li>
                    <li><strong>Involve them</strong>—grocery shopping, washing veggies, stirring</li>
                    <li><strong>Repeated exposure</strong>—it takes 10-15 tries to accept new food</li>
                    <li><strong>Serve small portions</strong>—less overwhelming, can ask for more</li>
                    <li><strong>Limit snacking</strong>—hungry toddlers eat better at meals</li>
                    <li><strong>Don't label foods "good/bad"</strong>—all foods fit</li>
                  </ol>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Red Flags (Talk to Pediatrician)</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Eating fewer than 20 foods total</li>
                    <li>Dropping entire food groups</li>
                    <li>Weight loss or poor growth</li>
                    <li>Gagging/vomiting with textures</li>
                    <li>Extreme anxiety around food</li>
                  </ul>
                </section>

                <section id="meal-planning" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Sample Meal Plans</h2>
                  <p className="text-gray-700 mb-4">
                    These sample days show how to distribute food groups across meals and snacks. Adjust portions for your child's age and appetite.
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Sample Day (Age 2)</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong>Breakfast:</strong> Oatmeal with mashed banana, ground flaxseed, whole milk + scrambled egg</li>
                      <li><strong>Snack:</strong> Apple slices with peanut butter (thinly spread)</li>
                      <li><strong>Lunch:</strong> Whole wheat quesadilla with cheese, black beans, avocado + steamed broccoli</li>
                      <li><strong>Snack:</strong> Greek yogurt with berries + whole grain crackers</li>
                      <li><strong>Dinner:</strong> Baked salmon, roasted sweet potato, green beans + quinoa</li>
                      <li><strong>Bedtime snack (if needed):</strong> Small cup of milk</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Sample Day (Age 3)</h3>
                    <ul className="space-y-3 text-gray-700">
                      <li><strong>Breakfast:</strong> Whole grain toast with avocado, sliced hard-boiled egg, orange slices</li>
                      <li><strong>Snack:</strong> Hummus with cucumber sticks, bell pepper strips</li>
                      <li><strong>Lunch:</strong> Turkey & cheese roll-ups, cherry tomatoes, grapes, popcorn</li>
                      <li><strong>Snack:</strong> Cottage cheese with pineapple + rice cakes</li>
                      <li><strong>Dinner:</strong> Chicken stir-fry with mixed vegetables, brown rice</li>
                      <li><strong>Bedtime snack (if needed):</strong> Small banana with peanut butter</li>
                    </ul>
                  </div>
                </section>

                <section id="snacks" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Healthy Snack Ideas</h2>
                  <p className="text-gray-700 mb-4">
                    Toddlers need 2-3 snacks daily to meet nutrient needs. Think of snacks as "mini-meals" with at least 2 food groups:
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Protein + Produce Combos</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>Apple slices + peanut butter</li>
                      <li>Greek yogurt + berries</li>
                      <li>Cottage cheese + peach slices</li>
                      <li>Hard-boiled egg + cherry tomatoes</li>
                      <li>Hummus + cucumber/bell pepper strips</li>
                      <li>Cheese cubes + grapes (quartered)</li>
                      <li>Turkey roll-up + carrot sticks</li>
                      <li>Edamame + mandarin oranges</li>
                    </ul>
                  </div>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Grain + Fruit/Veggie Combos</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>Whole grain crackers + avocado mash</li>
                      <li>Mini whole wheat pita + hummus + spinach</li>
                      <li>Oatmeal banana bites (baked)</li>
                      <li>Rice cakes + almond butter + banana</li>
                      <li>Homemade mini muffins (zucchini, carrot, banana)</li>
                      <li>Whole grain cereal (dry) + milk</li>
                      <li>Popcorn (age 4+) + apple slices</li>
                    </ul>
                  </div>
                </section>

                <section id="drinks" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What About Drinks?</h2>
                  <p className="text-gray-700 mb-4">
                    Drinks can fill up small tummies and displace nutrients. Here's the hierarchy:
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-4">Drink</th>
                          <th className="text-left py-2 px-4">Recommendation</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4 font-medium">Water</td>
                          <td className="py-2 px-4">Primary drink, offer throughout day</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4 font-medium">Whole Milk</td>
                          <td className="py-2 px-4">16-24oz/day (age 1-2), 16-20oz (age 2-3)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4 font-medium">100% Fruit Juice</td>
                          <td className="py-2 px-4">Max 4oz/day, diluted with water</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4 font-medium">Plant Milks</td>
                          <td className="py-2 px-4">Only fortified soy milk nutritionally equivalent</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4 font-medium">Toddler Formulas</td>
                          <td className="py-2 px-4">Unnecessary for most; marketing, not nutrition</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4 font-medium">Soda, Sports Drinks, Tea</td>
                          <td className="py-2 px-4">Avoid completely</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Bottle to Cup Transition</h3>
                  <p className="text-gray-700 mb-4">
                    AAP recommends transitioning from bottle to cup by 18 months. Use open cups or straw cups (not sippy cups with valves) to promote oral motor development.
                  </p>
                </section>

                <section id="supplements" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Supplements & Vitamins</h2>
                  <p className="text-gray-700 mb-4">
                    Most toddlers eating a varied diet don't need multivitamins. However, some supplements are recommended:
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Commonly Recommended</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li><strong>Vitamin D:</strong> 400-600 IU daily (especially if limited sun exposure)</li>
                      <li><strong>Iron:</strong> Only if pediatrician confirms deficiency (screen at 12 months)</li>
                      <li><strong>DHA/Omega-3:</strong> If not eating fatty fish 1-2x/week</li>
                    </ul>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">When to Consider a Multivitamin</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Very restricted diet (medical, sensory, or extreme picky eating)</li>
                    <li>Vegan/vegetarian diet (B12, iron, zinc, DHA)</li>
                    <li>Food allergies eliminating multiple food groups</li>
                    <li>Failure to thrive or growth concerns</li>
                  </ul>
                  <p className="text-gray-700 mb-4">
                    Always choose third-party tested supplements (NSF, USP verified) and discuss with your pediatrician before starting.
                  </p>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">My toddler barely eats dinner. Should I worry?</h3>
                      <p className="text-gray-700">
                        No. Toddlers often front-load calories at breakfast and lunch. Dinner is frequently the smallest meal. Look at intake over the week, not per meal. If growth is on track, they're getting enough.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">How much milk should my toddler drink?</h3>
                      <p className="text-gray-700">
                        16-24oz per day maximum. More than this can cause iron deficiency (milk blocks iron absorption) and fill them up so they don't eat solid foods. Offer water between meals.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Should I hide vegetables in food?</h3>
                      <p className="text-gray-700">
                        It's fine to add veggies to sauces, smoothies, baked goods—but also serve them visibly. Kids need to see, touch, and learn about vegetables to accept them long-term. Hiding alone doesn't teach eating habits.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">My toddler only wants carbs. What do I do?</h3>
                      <p className="text-gray-700">
                        Carbs are a toddler's preferred fuel source—this is normal! Keep offering protein and veggies without pressure. Serve them alongside preferred carbs. Model eating them yourself. This phase passes.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Is it okay to use food as a reward?</h3>
                      <p className="text-gray-700">
                        Avoid using food as reward or punishment ("eat broccoli to get dessert"). This teaches that healthy foods are "bad" and treats are "good." Instead, serve dessert with the meal occasionally, or offer it regardless of what was eaten.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">When should I switch to low-fat milk?</h3>
                      <p className="text-gray-700">
                        AAP recommends whole milk until age 2 for brain development. After 2, you can switch to 2% or continue whole milk. Skim milk is not recommended before age 5. Discuss with your pediatrician based on growth and family history.
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
  headline: 'Toddler Nutrition Tips: Complete Guide for Ages 1-3',
  description: 'Expert toddler nutrition guide: portion sizes, food groups, picky eating strategies, meal planning, and nutrient needs for ages 1-3.',
  image: 'https://childbloom.site/images/articles/toddler-nutrition-tips-og.jpg',
  datePublished: '2025-02-10',
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
    '@id': 'https://childbloom.site/articles/toddler-nutrition-tips/',
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
        name: 'Toddler Nutrition Tips',
        item: 'https://childbloom.site/articles/toddler-nutrition-tips/',
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
