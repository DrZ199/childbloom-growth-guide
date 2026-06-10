import { createFileRoute } from "@tanstack/react-router";
import { siteDescription } from "@/lib/site-data";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/child-nutrition-guide")({
  head: () => ({
    meta: [
      { title: "Child Nutrition Guide: Feeding Babies, Toddlers & Kids | ChildBloom" },
      {
        name: "description",
        content: "Complete child nutrition guide by age: breastfeeding, formula, starting solids, picky eating, vitamins, and healthy habits. Evidence-based feeding advice for every stage.",
      },
      { property: "og:title", content: "Child Nutrition Guide: Feeding Babies, Toddlers & Kids | ChildBloom" },
      { property: "og:description", content: "Complete child nutrition guide by age: breastfeeding, formula, starting solids, picky eating, vitamins, and healthy habits." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/child-nutrition-guide" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Child Nutrition Guide: Feeding Babies, Toddlers & Kids",
          description: "Complete child nutrition guide by age: breastfeeding, formula, starting solids, picky eating, vitamins, and healthy habits.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/child-nutrition-guide" },
          datePublished: "2026-01-16",
          dateModified: "2026-01-16",
        }),
      },
    ],
  }),
  component: ChildNutritionGuideArticle,
});

function ChildNutritionGuideArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Child Health Guides
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Child Nutrition Guide: Feeding Babies, Toddlers & Kids
            </h1>
            <p className="text-sm text-muted-foreground">15 min read • Published January 16, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#nutrition-basics" className="text-primary hover:underline">Nutrition Basics by Age</a></li>
              <li><a href="#0-6-months" className="text-primary hover:underline">0–6 Months: Breast Milk & Formula</a></li>
              <li><a href="#6-12-months" className="text-primary hover:underline">6–12 Months: Starting Solids</a></li>
              <li><a href="#1-3-years" className="text-primary hover:underline">1–3 Years: Toddler Nutrition</a></li>
              <li><a href="#4-8-years" className="text-primary hover:underline">4–8 Years: School-Age Nutrition</a></li>
              <li><a href="#picky-eating" className="text-primary hover:underline">Picky Eating Solutions</a></li>
              <li><a href="#vitamins-supplements" className="text-primary hover:underline">Vitamins & Supplements</a></li>
              <li><a href="#healthy-habits" className="text-primary hover:underline">Building Healthy Habits</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="nutrition-basics" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Nutrition Basics by Age</h2>
            <p>
              Children's nutritional needs change dramatically as they grow. Understanding what they need at each stage 
              helps you make confident feeding choices without stress.
            </p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Age</th>
                    <th className="p-3 text-left font-medium">Primary Nutrition</th>
                    <th className="p-3 text-left font-medium">Key Nutrients</th>
                    <th className="p-3 text-left font-medium">Daily Calories*</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">0–6 months</td>
                    <td className="p-3">Breast milk or formula</td>
                    <td className="p-3">DHA, iron, vitamin D</td>
                    <td className="p-3">~500–650 kcal</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">6–12 months</td>
                    <td className="p-3">Breast milk/formula + solids</td>
                    <td className="p-3">Iron, zinc, healthy fats</td>
                    <td className="p-3">~700–850 kcal</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">1–3 years</td>
                    <td className="p-3">Solid foods + milk</td>
                    <td className="p-3">Calcium, vitamin D, fiber</td>
                    <td className="p-3">~1,000–1,400 kcal</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">4–8 years</td>
                    <td className="p-3">Balanced meals + snacks</td>
                    <td className="p-3">Protein, iron, B vitamins</td>
                    <td className="p-3">~1,200–2,000 kcal</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground">*Calories vary by size, activity level, and metabolism. Use as rough guide only.</p>
            
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-2">The Division of Responsibility</h3>
              <p className="text-sm text-muted-foreground">
                <strong>Parent decides:</strong> What, when, and where to eat.<br />
                <strong>Child decides:</strong> Whether and how much to eat.<br />
                This evidence-based approach (Ellyn Satter) reduces mealtime battles and builds intuitive eating.
              </p>
            </div>
          </section>

          <section id="0-6-months" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">0–6 Months: Breast Milk & Formula</h2>
            
            <h3 className="text-xl font-semibold">Breastfeeding</h3>
            <p>The AAP recommends exclusive breastfeeding for ~6 months, then continued breastfeeding with solids for 2+ years.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Frequency:</strong> 8–12 times/24 hours (newborns); on demand</li>
              <li><strong>Duration:</strong> 10–20 minutes per side; let baby set pace</li>
              <li><strong>Supplements:</strong> Vitamin D (400 IU/day) starting day 1; Iron at 4 months if exclusively breastfed</li>
              <li><strong>Mom's nutrition:</strong> Extra 300–500 kcal/day; stay hydrated; continue prenatal vitamin</li>
            </ul>

            <h3 className="text-xl font-semibold">Formula Feeding</h3>
            <p>Choose iron-fortified formula. No brand is "best"—all FDA-regulated formulas meet nutritional standards.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Types:</strong> Cow's milk-based (standard), gentle/partially hydrolyzed, soy, hypoallergenic</li>
              <li><strong>Preparation:</strong> Follow label exactly; use safe water; don't dilute or concentrate</li>
              <li><strong>Amount:</strong> ~2.5 oz per pound of body weight per day (e.g., 10 lb baby = 25 oz/day)</li>
              <li><strong>Paced bottle feeding:</strong> Hold bottle horizontal, let baby control flow—prevents overfeeding</li>
            </ul>

            <h3 className="text-xl font-semibold">Combination Feeding</h3>
            <p>Many families combine breast milk and formula. Any breast milk is beneficial. Work with a lactation consultant to protect supply if that's your goal.</p>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-semibold text-amber-800 mb-2">⚠️ Red Flags: Feeding Concerns</h3>
              <ul className="list-disc space-y-1 pl-6 text-sm text-amber-700">
                <li>Baby not gaining weight (should regain birth weight by 2 weeks)</li>
                <li>Fewer than 6 wet diapers/day after day 5</li>
                <li>Consistently fussy after feeds, arching back, excessive spit-up</li>
                <li>Blood in stool or vomit</li>
                <li>Refusing to eat or difficulty latching</li>
              </ul>
            </div>
          </section>

          <section id="6-12-months" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">6–12 Months: Starting Solids</h2>
            
            <h3 className="text-xl font-semibold">Signs of Readiness (around 6 months)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Sits with minimal support</li>
              <li>Good head and neck control</li>
              <li>Shows interest in food (watches you eat, reaches)</li>
              <li>Lost tongue-thrust reflex (doesn't auto-push food out)</li>
              <li>Opens mouth for spoon</li>
            </ul>

            <h3 className="text-xl font-semibold">First Foods Priority: Iron-Rich</h3>
            <p>Babies' iron stores deplete around 6 months. Prioritize:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Iron-fortified infant cereal</strong> (oat, barley, multigrain—not just rice)</li>
              <li><strong>Pureed meats</strong> (chicken, beef, turkey)</li>
              <li><strong>Beans & lentils</strong> (well-cooked, mashed)</li>
              <li><strong>Dark leafy greens</strong> (spinach, kale—cooked and pureed)</li>
            </ul>

            <h3 className="text-xl font-semibold">Allergen Introduction</h3>
            <p>Early introduction (around 6 months, not before 4 months) of common allergens REDUCES allergy risk:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Peanut butter (thinned with breast milk/formula/water)</li>
              <li>Well-cooked egg (scrambled or pureed)</li>
              <li>Yogurt, cheese (cow's milk protein)</li>
              <li>Wheat (infant cereal, toast strips)</li>
              <li>Fish, shellfish, soy, sesame</li>
              <li><strong>Introduce one at a time, 2–3 days apart</strong> to identify reactions</li>
            </ul>

            <h3 className="text-xl font-semibold">Baby-Led Weaning vs. Purees</h3>
            <p>Both work. Many families combine:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Purees:</strong> Easier to ensure iron intake; less mess</li>
              <li><strong>BLW:</strong> Develops self-feeding, oral motor skills; baby controls pace</li>
              <li><strong>Combo:</strong> Offer purees on preloaded spoons + finger foods on tray</li>
            </ul>

            <h3 className="text-xl font-semibold">Foods to Avoid < 1 Year</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Honey</strong> (botulism risk)</li>
              <li><strong>Cow's milk as main drink</strong> (yogurt/cheese OK)</li>
              <li><strong>Choking hazards:</strong> whole grapes, nuts, popcorn, raw carrots, hot dogs, large chunks</li>
              <li><strong>Added sugar & salt</strong></li>
              <li><strong>High-mercury fish</strong> (shark, swordfish, king mackerel)</li>
            </ul>

            <p className="text-sm text-muted-foreground">
              Detailed guide: <a href="/articles/starting-solids-guide" className="text-primary hover:underline">Starting Solids: Complete Step-by-Step Guide</a>
            </p>
          </section>

          <section id="1-3-years" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">1–3 Years: Toddler Nutrition</h2>
            
            <h3 className="text-xl font-semibold">What Changes at 1 Year</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Transition to whole cow's milk (16–24 oz/day max)</li>
              <li>Solid foods become primary nutrition source</li>
              <li>Bottle weaning (aim for cup by 15–18 months)</li>
              <li>Appetite drops—growth slows after first year</li>
              <li>Neophobia (fear of new foods) peaks 18–24 months</li>
            </ul>

            <h3 className="text-xl font-semibold">Toddler Portion Sizes</h3>
            <p>Toddler stomach ≈ size of their fist. Typical portions:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Protein: 1–2 tbsp (size of their palm)</li>
              <li>Vegetables: 1–2 tbsp</li>
              <li>Fruit: 1–2 tbsp or ¼ whole fruit</li>
              <li>Grains: ¼–½ slice bread, ¼ cup pasta/rice</li>
              <li>Dairy: ½ cup milk/yogurt, ½ oz cheese</li>
            </ul>

            <h3 className="text-xl font-semibold">Nutrients to Watch</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Iron:</strong> Toddlers at highest risk for deficiency. Sources: meat, beans, fortified cereal, spinach + vitamin C</li>
              <li><strong>Vitamin D:</strong> 600 IU/day (supplement often needed)</li>
              <li><strong>Calcium:</strong> 700 mg/day (2–3 dairy servings or fortified alternatives)</li>
              <li><strong>Fiber:</strong> Age + 5 g rule (2-year-old = 7g); prevents constipation</li>
              <li><strong>Healthy fats:</strong> Brain development needs fat—avocado, nut butters, olive oil, full-fat dairy</li>
            </ul>
          </section>

          <section id="4-8-years" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">4–8 Years: School-Age Nutrition</h2>
            
            <h3 className="text-xl font-semibold">Growing Independence</h3>
            <p>Kids eat more meals away from home. Focus on:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Breakfast:</strong> Non-negotiable for learning and weight regulation</li>
              <li><strong>Lunchbox strategy:</strong> Protein + fruit + veg + whole grain + fun food</li>
              <li><strong>After-school snack:</strong> Bridge to dinner without ruining appetite</li>
              <li><strong>Family meals:</strong> 3+ times/week linked to better nutrition, grades, mental health</li>
            </ul>

            <h3 className="text-xl font-semibold">Key Nutrients for School-Age</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Protein:</strong> 19–34 g/day for growth spurts</li>
              <li><strong>Calcium & Vitamin D:</strong> Peak bone-building years (1,000 mg calcium, 600 IU D)</li>
              <li><strong>Iron:</strong> Especially girls approaching puberty</li>
              <li><strong>Omega-3s:</strong> Brain development—fatty fish 2x/week or supplement</li>
            </ul>
          </section>

          <section id="picky-eating" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Picky Eating Solutions</h2>
            
            <p>Picky eating is normal development (peaks 2–6 years). Most kids outgrow it with low-pressure exposure.</p>

            <h3 className="text-xl font-semibold">Evidence-Based Strategies</h3>
            <ul className="list-disc space-y-3 pl-6">
              <li><strong>Repeated exposure:</strong> 15–20 neutral exposures before acceptance. No pressure, just presence.</li>
              <li><strong>Food chaining:</strong> Bridge from accepted foods to new ones (e.g., chicken nugget → baked chicken strip → grilled chicken)</li>
              <li><strong>Division of responsibility:</strong> You provide, they decide. No "one more bite," no dessert bribes.</li>
              <li><strong>Involve them:</strong> Grocery shopping, washing veggies, stirring, setting table</li>
              <li><strong>Serve family style:</strong> Let them serve themselves (builds autonomy)</li>
              <li><strong>Pair new with familiar:</strong> Always include 1–2 safe foods on the plate</li>
              <li><strong>Model eating:</strong> Eat the foods you want them to eat, with enjoyment</li>
              <li><strong>Sensory play:</strong> Touch, smell, kiss, lick, bite—no expectation to swallow</li>
            </ul>

            <h3 className="text-xl font-semibold">When to Seek Help</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>ARFID signs:</strong> Eating <20 foods, entire food groups avoided, weight loss, nutritional deficiency</li>
              <li><strong>Sensory issues:</strong> Gagging/vomiting with textures, extreme brand specificity</li>
              <li><strong>Growth faltering:</strong> Falling off growth curve, low energy, frequent illness</li>
              <li>See a feeding therapist (OT or SLP) or pediatric dietitian</li>
            </ul>
          </section>

          <section id="vitamins-supplements" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Vitamins & Supplements</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Supplement</th>
                    <th className="p-3 text-left font-medium">Who Needs It</th>
                    <th className="p-3 text-left font-medium">Dose</th>
                    <th className="p-3 text-left font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Vitamin D</td>
                    <td className="p-3">All breastfed infants; many formula-fed; all kids with limited sun</td>
                    <td className="p-3">400 IU (infants), 600 IU (1+)</td>
                    <td className="p-3">Drops for babies; gummies/chewables for kids</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Iron</td>
                    <td className="p-3">Exclusively breastfed 4+ mo; preterm; picky eaters; teen girls</td>
                    <td className="p-3">Per pediatrician (test first)</td>
                    <td className="p-3">Don't supplement without testing—too much is harmful</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">DHA/Omega-3</td>
                    <td className="p-3">Kids who don't eat fatty fish 2x/week</td>
                    <td className="p-3">100–250 mg DHA+EPA</td>
                    <td className="p-3">Algae-based for vegetarians</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Multivitamin</td>
                    <td className="p-3">Very restricted diets, medical conditions, failure to thrive</td>
                    <td className="p-3">Age-appropriate</td>
                    <td className="p-3">Most healthy kids don't need one; food first</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Probiotics</td>
                    <td className="p-3">After antibiotics; specific GI issues</td>
                    <td className="p-3">Strain-specific</td>
                    <td className="p-3">Not for routine daily use in healthy kids</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Fluoride</td>
                    <td className="p-3">If water <0.6 ppm fluoride</td>
                    <td className="p-3">Per dentist/pediatrician</td>
                    <td className="p-3">Check local water; don't double up with toothpaste</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-2">Quality Matters</h3>
              <p className="text-sm text-muted-foreground">
                Look for <strong>USP Verified</strong>, <strong>NSF Certified</strong>, or <strong>ConsumerLab</strong> seals. 
                Gummies often lack iron and have sugar. Chewables or liquids absorb better.
              </p>
            </div>
          </section>

          <section id="healthy-habits" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Building Healthy Habits for Life</h2>
            
            <h3 className="text-xl font-semibold">Hydration</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Water as primary drink (offer with every meal/snack)</li>
              <li>Milk with meals (not all day)</li>
              <li>Juice: <4 oz/day (1–3 yr), <6 oz/day (4–6 yr), <8 oz/day (7+); whole fruit better</li>
              <li>No soda, sports drinks, caffeinated beverages</li>
            </ul>

            <h3 className="text-xl font-semibold">Sugar & Ultra-Processed Foods</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Added sugar: <25 g/day (6 tsp) for kids 2+</li>
              <li>Read labels: sugar hides in yogurt, granola bars, pasta sauce, bread</li>
              <li>Ultra-processed foods: minimize; cook at home when possible</li>
              <li>"Sometimes foods" language, not "bad foods"—prevents guilt/shame</li>
            </ul>

            <h3 className="text-xl font-semibold">Mealtime Environment</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>No screens at meals</li>
              <li>Eat together as often as possible</li>
              <li>Keep conversation positive (not about food/eating)</li>
              <li>Set reasonable time limits (20–30 minutes)</li>
              <li>Trust their hunger/fullness cues</li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">My toddler only wants to eat [one food]. Is this okay?</dt>
                <dd className="mt-2">Food jags are normal. Keep offering variety without pressure. They'll usually expand again in weeks. If it lasts months or they drop foods, consult your pediatrician.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Should I hide vegetables in food?</dt>
                <dd className="mt-2">"Hiding" works short-term but doesn't teach acceptance. Better: add veggies openly (spinach in smoothies, zucchini in muffins) AND serve visible veggies. Both approaches together.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Is plant-based milk okay for toddlers?</dt>
                <dd className="mt-2">Soy milk (fortified, unsweetened) is the only plant milk nutritionally comparable to cow's milk for toddlers. Almond, oat, rice milks lack protein/fat. Consult pediatrician if dairy-free.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">How much protein does my child need?</dt>
                <dd className="mt-2">Roughly 0.5g per pound of body weight. A 30 lb toddler needs ~15g—easily met with 1 egg + ½ cup yogurt + 1 oz chicken. Most kids get plenty.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">My child won't drink water. What do I do?</dt>
                <dd className="mt-2">Make it fun: special cup, straw, ice shapes, fruit infusions. Offer water-rich foods (watermelon, cucumber, soup). Limit milk to 16–24 oz so they're thirsty for water.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Are organic foods worth it for kids?</dt>
                <dd className="mt-2">Organic reduces pesticide exposure. If budget allows, prioritize the "Dirty Dozen" (strawberries, spinach, apples, etc.). But conventional fruits/veggies are far better than none. Wash all produce well.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">When should I worry about my child's weight?</dt>
                <dd className="mt-2">Focus on growth trends (following their curve), not percentiles. Sudden jumps or drops, or crossing 2+ percentile lines, warrant discussion with pediatrician. Never put a child on a diet without medical supervision.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/starting-solids-guide" className="text-primary hover:underline">Starting Solids Guide</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/toddler-nutrition-tips" className="text-primary hover:underline">Toddler Nutrition Tips</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/best-baby-formula" className="text-primary hover:underline">Best Baby Formula</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/best-baby-bottles" className="text-primary hover:underline">Best Baby Bottles</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/best-baby-food-makers" className="text-primary hover:underline">Best Baby Food Makers</a>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Medical Disclaimer:</strong> This article is for educational purposes only and does not constitute medical advice. 
              Always consult your pediatrician or pediatric dietitian for your child's specific nutritional needs.
            </p>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}