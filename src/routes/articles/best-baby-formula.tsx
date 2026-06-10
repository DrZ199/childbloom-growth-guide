import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from '@/lib/seo'
import { ReadingProgress } from '@/components/content/reading-progress'
import { BackToTop } from '@/components/content/back-to-top'
import { TableOfContents } from '@/components/content/table-of-contents'
import { RelatedArticles } from '@/components/content/related-articles'

export const Route = createFileRoute('/articles/best-baby-formula')({
  component: BestBabyFormula,
  head: () => {
    const url = 'https://childbloom.site/articles/best-baby-formula/'
    return seo({
      title: 'Best Baby Formula 2025: Top 10 Reviewed for Every Need | ChildBloom',
      description: 'Expert reviews of the best baby formulas: standard, sensitive, organic, hypoallergenic, and specialty formulas. Compare ingredients, prices, and parent reviews.',
      url,
      type: 'article',
      publishedTime: '2025-02-05',
      modifiedTime: '2025-06-10',
      author: 'ChildBloom Gear Team',
      image: 'https://childbloom.site/images/articles/best-baby-formula-og.jpg',
    })
  },
})

function BestBabyFormula() {
  const tableOfContents = [
    { id: 'formula-types', title: 'Types of Baby Formula' },
    { id: 'how-to-choose', title: 'How to Choose Formula' },
    { id: 'best-standard', title: 'Best Standard Formulas' },
    { id: 'best-sensitive', title: 'Best Sensitive Formulas' },
    { id: 'best-organic', title: 'Best Organic Formulas' },
    { id: 'best-hypoallergenic', title: 'Best Hypoallergenic Formulas' },
    { id: 'preparing-formula', title: 'Preparing Formula Safely' },
    { id: 'switching-formulas', title: 'Switching Formulas' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ]

  const relatedArticles = [
    { title: 'Best Baby Bottles', slug: '/articles/best-baby-bottles/' },
    { title: 'Newborn Care Guide', slug: '/articles/newborn-care-guide/' },
    { title: 'Child Nutrition Guide', slug: '/articles/child-nutrition-guide/' },
    { title: 'Starting Solids Guide', slug: '/articles/starting-solids/' },
    { title: 'Newborn Essentials Checklist', slug: '/articles/newborn-essentials-checklist/' },
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
              <span className="text-gray-700">Best Baby Formula</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Best Baby Formula 2025: Top 10 Reviewed for Every Need
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Expert reviews of the best baby formulas: standard, sensitive, organic, hypoallergenic, and specialty formulas. Compare ingredients, prices, and parent reviews.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>By ChildBloom Gear Team</span>
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
                    All baby formulas sold in the US meet FDA nutritional standards. The differences lie in protein source, carbohydrate type, added ingredients, and price. This guide helps you find the best fit for your baby.
                  </p>
                </div>

                <section id="formula-types" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Types of Baby Formula</h2>
                  <p className="text-gray-700 mb-4">
                    Understanding formula types helps you choose the right one for your baby's needs. All formulas are regulated by the FDA for safety and nutrition.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Formula Categories</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li><strong>Cow's Milk-Based (Standard):</strong> Most common, modified for human digestion</li>
                      <li><strong>Soy-Based:</strong> Plant-based, for lactose intolerance or vegan families</li>
                      <li><strong>Hypoallergenic (Hydrolyzed):</strong> Proteins broken down for allergies</li>
                      <li><strong>Specialty:</strong> For prematurity, reflux, metabolic disorders</li>
                      <li><strong>Organic:</strong> Made with organic ingredients</li>
                    </ul>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Key Ingredient Differences</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Protein:</strong> Intact cow's milk, partially hydrolyzed, extensively hydrolyzed, or amino acid-based</li>
                    <li><strong>Carbohydrate:</strong> Lactose (standard), corn syrup solids, maltodextrin, or sucrose (sensitive/organic)</li>
                    <li><strong>Fat:</strong> Blend of vegetable oils (palm, soy, coconut, high oleic sunflower)</li>
                    <li><strong>Additives:</strong> DHA/ARA, prebiotics (GOS/FOS), probiotics, MFGM, HMOs</li>
                  </ul>
                </section>

                <section id="how-to-choose" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">How to Choose Formula</h2>
                  <p className="text-gray-700 mb-4">
                    Most babies do well on standard cow's milk formula. Consider specialty formulas only if your baby has specific needs. Always consult your pediatrician before switching.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Decision Guide</h3>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-4">If Your Baby...</th>
                          <th className="text-left py-2 px-4">Consider</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">No issues, healthy term infant</td>
                          <td className="py-2 px-4">Standard cow's milk formula</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Gas, fussiness, mild spit-up</td>
                          <td className="py-2 px-4">Partially hydrolyzed / sensitive formula</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Confirmed cow's milk protein allergy</td>
                          <td className="py-2 px-4">Extensively hydrolyzed or amino acid formula</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Lactose intolerance (rare in infants)</td>
                          <td className="py-2 px-4">Soy or lactose-free formula</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Preterm or low birth weight</td>
                          <td className="py-2 px-4">Preterm formula (higher calories/protein)</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Severe reflux</td>
                          <td className="py-2 px-4">Anti-reflux (added rice starch) formula</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                <section id="best-standard" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Standard Formulas</h2>
                  <p className="text-gray-700 mb-4">
                    Standard formulas are cow's milk-based with intact proteins. They're the starting point for most babies and the most affordable option.
                  </p>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">#1 Pick: Similac 360 Total Care</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Best Overall Standard</strong> — Contains 5 HMOs (human milk oligosaccharides) for immune support, DHA/ARA for brain development, and no artificial growth hormones. Closest to breast milk composition among standard formulas.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>5 HMOs for immune support</li>
                      <li>DHA, lutein, vitamin E</li>
                      <li>No artificial growth hormones</li>
                      <li>Non-GMO ingredients</li>
                      <li>Ready-to-feed, concentrate, powder</li>
                    </ul>
                    <p className="text-gray-600 text-sm">
                      <strong>Price:</strong> ~$42 (30.8oz powder) | <a href="https://www.amazon.com/s?k=Similac+360+Total+Care" target="_blank" rel="sponsored nofollow">Check Price on Amazon →</a>
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">#2 Pick: Enfamil NeuroPro</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Best for Brain Development</strong> — Features MFGM (milk fat globule membrane) and DHA, components found in breast milk that support cognitive development. Trusted by hospitals nationwide.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>MFGM + DHA for brain support</li>
                      <li>Prebiotics for digestive health</li>
                      <li>No artificial growth hormones</li>
                      <li>Available in multiple formats</li>
                      <li>Hospital-trusted brand</li>
                    </ul>
                    <p className="text-gray-600 text-sm">
                      <strong>Price:</strong> ~$38 (28.3oz powder) | <a href="https://www.amazon.com/s?k=Enfamil+NeuroPro" target="_blank" rel="sponsored nofollow">Check Price on Amazon →</a>
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">#3 Pick: Kirkland Signature ProCare (Costco)</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Best Value</strong> — Nearly identical to Similac Pro-Advance at a fraction of the cost. Contains 2'-FL HMO, DHA, lutein, and vitamin E. Excellent quality for budget-conscious families.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>2'-FL HMO for immune support</li>
                      <li>DHA, lutein, vitamin E</li>
                      <li>Non-GMO ingredients</li>
                      <li>Significantly lower cost</li>
                      <li>Exclusive to Costco</li>
                    </ul>
                    <p className="text-gray-600 text-sm">
                      <strong>Price:</strong> ~$25 (42oz powder, 2-pack) | <a href="https://www.amazon.com/s?k=Kirkland+Signature+ProCare+Formula" target="_blank" rel="sponsored nofollow">Check Price on Amazon →</a>
                    </p>
                  </div>
                </section>

                <section id="best-sensitive" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Sensitive Formulas</h2>
                  <p className="text-gray-700 mb-4">
                    Sensitive formulas have partially hydrolyzed proteins (broken down into smaller pieces) and often reduced lactose. They're for babies with gas, fussiness, or mild digestive issues.
                  </p>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">#1 Pick: Similac 360 Total Care Sensitive</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Best Overall Sensitive</strong> — Same 5 HMOs as the standard version but with partially hydrolyzed protein and 98% less lactose. Gentle on tummies while maintaining immune-supporting ingredients.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>5 HMOs + partially hydrolyzed protein</li>
                      <li>98% lactose-free</li>
                      <li>DHA, lutein, vitamin E</li>
                      <li>Reduces fussiness and gas</li>
                      <li>Non-GMO</li>
                    </ul>
                    <p className="text-gray-600 text-sm">
                      <strong>Price:</strong> ~$44 (30.8oz powder) | <a href="https://www.amazon.com/s?k=Similac+360+Total+Care+Sensitive" target="_blank" rel="sponsored nofollow">Check Price on Amazon →</a>
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">#2 Pick: Enfamil NeuroPro Gentlease</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Best for Fussiness & Gas</strong> — Clinically proven to reduce fussiness, gas, and crying in 24 hours. Easy-to-digest proteins and MFGM for brain support. The #1 pediatrician-recommended brand for sensitive tummies.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>Partially hydrolyzed protein</li>
                      <li>Clinically proven in 24 hours</li>
                      <li>MFGM + DHA</li>
                      <li>Reduced lactose</li>
                      <li>#1 pediatrician recommended for sensitive</li>
                    </ul>
                    <p className="text-gray-600 text-sm">
                      <strong>Price:</strong> ~$38 (27.7oz powder) | <a href="https://www.amazon.com/s?k=Enfamil+NeuroPro+Gentlease" target="_blank" rel="sponsored nofollow">Check Price on Amazon →</a>
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">#3 Pick: Gerber Good Start GentlePro</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Best Budget Sensitive</strong> — Uses Comfort Proteins (100% whey, partially hydrolyzed) and 2'-FL HMO. More affordable than Similac/Enfamil sensitive versions with similar benefits.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>Comfort Proteins (100% whey)</li>
                      <li>2'-FL HMO</li>
                      <li>DHA, prebiotics</li>
                      <li>Non-GMO</li>
                      <li>Lower price point</li>
                    </ul>
                    <p className="text-gray-600 text-sm">
                      <strong>Price:</strong> ~$30 (24oz powder) | <a href="https://www.amazon.com/s?k=Gerber+Good+Start+GentlePro" target="_blank" rel="sponsored nofollow">Check Price on Amazon →</a>
                    </p>
                  </div>
                </section>

                <section id="best-organic" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Organic Formulas</h2>
                  <p className="text-gray-700 mb-4">
                    Organic formulas use ingredients grown without synthetic pesticides, fertilizers, or GMOs. They're not nutritionally superior, but some parents prefer them for environmental or personal reasons.
                  </p>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">#1 Pick: Bobbie Organic Infant Formula</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Best Overall Organic</strong> — European-style formula made in the USA. Uses lactose as the only carbohydrate (no corn syrup), grass-fed milk, and includes DHA/ARA. No palm oil, soy, or fillers.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>Lactose-only carbohydrate</li>
                      <li>Grass-fed, pasture-raised milk</li>
                      <li>No palm oil, soy, corn syrup</li>
                      <li>DHA/ARA from algae</li>
                      <li>EU-style standards, US-made</li>
                    </ul>
                    <p className="text-gray-600 text-sm">
                      <strong>Price:</strong> ~$24 (14oz, subscription) | <a href="https://www.amazon.com/s?k=Bobbie+Organic+Infant+Formula" target="_blank" rel="sponsored nofollow">Check Price on Amazon →</a>
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">#2 Pick: Earth's Best Organic Sensitivity</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Best Organic Sensitive</strong> — Partially hydrolyzed protein, reduced lactose, and organic ingredients. More affordable than Bobbie with similar sensitive benefits.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>Partially hydrolyzed protein</li>
                      <li>95% less lactose</li>
                      <li>Organic, non-GMO</li>
                      <li>DHA/ARA</li>
                      <li>Widely available</li>
                    </ul>
                    <p className="text-gray-600 text-sm">
                      <strong>Price:</strong> ~$34 (23.2oz powder) | <a href="https://www.amazon.com/s?k=Earth's+Best+Organic+Sensitivity" target="_blank" rel="sponsored nofollow">Check Price on Amazon →</a>
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">#3 Pick: Happy Baby Organic</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Best Accessible Organic</strong> — Available at Target, Walmart, and most grocery stores. Two stages (0-12 months, 12+ months) with organic lactose, DHA/ARA, and prebiotics.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>Organic lactose carbohydrate</li>
                      <li>DHA/ARA, prebiotics</li>
                      <li>Two-stage system</li>
                      <li>Widely available in stores</li>
                      <li>Non-GMO, no corn syrup</li>
                    </ul>
                    <p className="text-gray-600 text-sm">
                      <strong>Price:</strong> ~$32 (21oz powder) | <a href="https://www.amazon.com/s?k=Happy+Baby+Organic+Formula" target="_blank" rel="sponsored nofollow">Check Price on Amazon →</a>
                    </p>
                  </div>
                </section>

                <section id="best-hypoallergenic" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Best Hypoallergenic Formulas</h2>
                  <p className="text-gray-700 mb-4">
                    Hypoallergenic formulas are for babies with confirmed cow's milk protein allergy (CMPA). Proteins are extensively hydrolyzed (broken down) or amino acid-based. Require pediatrician guidance.
                  </p>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">#1 Pick: Nutramigen with Enflora LGG</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Best Extensively Hydrolyzed</strong> — Extensively hydrolyzed casein protein with probiotic LGG for gut health. Clinically proven to manage colic due to CMPA in 48 hours. Lactose-free.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>Extensively hydrolyzed casein</li>
                      <li>Probiotic LGG</li>
                      <li>Manages colic in 48 hours</li>
                      <li>Lactose-free, sucrose-free</li>
                      <li>DHA/ARA</li>
                    </ul>
                    <p className="text-gray-600 text-sm">
                      <strong>Price:</strong> ~$52 (19.8oz powder) | <a href="https://www.amazon.com/s?k=Nutramigen+with+Enflora+LGG" target="_blank" rel="sponsored nofollow">Check Price on Amazon →</a>
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">#2 Pick: Similac Alimentum</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>Best for Severe Allergies</strong> — Extensively hydrolyzed casein, lactose-free, with 2'-FL HMO. Ready-to-feed version is corn-free (uses tapioca). Often covered by insurance with prescription.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>Extensively hydrolyzed casein</li>
                      <li>2'-FL HMO</li>
                      <li>Ready-to-feed is corn-free</li>
                      <li>Often insurance-covered</li>
                      <li>DHA/ARA</li>
                    </ul>
                    <p className="text-gray-600 text-sm">
                      <strong>Price:</strong> ~$48 (19.8oz powder) | <a href="https://www.amazon.com/s?k=Similac+Alimentum" target="_blank" rel="sponsored nofollow">Check Price on Amazon →</a>
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">#3 Pick: EleCare / Neocate (Amino Acid-Based)</h3>
                    <p className="text-gray-700 mb-3">
                      <strong>For Severe/ Multiple Allergies</strong> — Amino acid-based (elemental) formulas for babies who can't tolerate hydrolyzed formulas. Require medical supervision. Most expensive but most hypoallergenic.
                    </p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                      <li>100% free amino acids</li>
                      <li>For severe CMPA, multiple allergies</li>
                      <li>Requires medical supervision</li>
                      <li>Often insurance-covered</li>
                      <li>Complete nutrition</li>
                    </ul>
                    <p className="text-gray-600 text-sm">
                      <strong>Price:</strong> ~$60+ (14.1oz powder) | <a href="https://www.amazon.com/s?k=EleCare+Infant+Formula" target="_blank" rel="sponsored nofollow">Check Price on Amazon →</a>
                    </p>
                  </div>
                </section>

                <section id="preparing-formula" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Preparing Formula Safely</h2>
                  <p className="text-gray-700 mb-4">
                    Proper preparation prevents bacterial contamination and ensures your baby gets the right nutrition. Follow these steps every time:
                  </p>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                    <li><strong>Wash hands</strong> thoroughly with soap and water</li>
                    <li><strong>Clean and sterilize</strong> bottles, nipples, rings, and caps</li>
                    <li><strong>Use safe water:</strong> Boiled and cooled tap water, or bottled water labeled for infants</li>
                    <li><strong>Measure water first</strong>—add water to bottle before powder</li>
                    <li><strong>Use the scoop provided</strong>—level, not packed</li>
                    <li><strong>Mix well</strong>—shake or swirl until dissolved</li>
                    <li><strong>Test temperature</strong>—warm, not hot (wrist test)</li>
                    <li><strong>Use within 2 hours</strong> at room temp, 24 hours refrigerated</li>
                  </ol>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">Critical Safety Rules</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Never dilute formula with extra water (causes malnutrition, seizures)</li>
                      <li>Never concentrate formula (dehydration, kidney damage)</li>
                      <li>Never use homemade formula recipes (dangerous)</li>
                      <li>Never microwave bottles (hot spots burn baby)</li>
                      <li>Discard any leftover formula after feeding</li>
                    </ul>
                  </div>
                </section>

                <section id="switching-formulas" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Switching Formulas</h2>
                  <p className="text-gray-700 mb-4">
                    Sometimes you need to switch formulas due to availability, cost, or baby's needs. Here's how to do it safely:
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">When to Switch</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Persistent gas, fussiness, or spit-up after 2 weeks</li>
                    <li>Signs of allergy (blood in stool, severe eczema, wheezing)</li>
                    <li>Formula shortage or availability issues</li>
                    <li>Cost concerns</li>
                    <li>Pediatrician recommendation</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">How to Switch</h3>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                    <li>Consult your pediatrician first</li>
                    <li>Transition gradually over 3-5 days</li>
                    <li>Day 1-2: 75% old formula, 25% new</li>
                    <li>Day 3-4: 50% old, 50% new</li>
                    <li>Day 5-6: 25% old, 75% new</li>
                    <li>Day 7: 100% new formula</li>
                  </ol>
                  <p className="text-gray-700 mb-4">
                    For allergy switches (to hypoallergenic), your doctor may recommend an immediate switch. Always follow medical advice.
                  </p>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Is expensive formula better?</h3>
                      <p className="text-gray-700">
                        Not necessarily. All FDA-approved formulas meet the same nutritional standards. Premium formulas add ingredients like HMOs, MFGM, or organic certification, but standard formulas provide complete nutrition. Many babies thrive on store brands.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I switch between formula brands?</h3>
                      <p className="text-gray-700">
                        Yes, but transition gradually over 3-5 days to avoid digestive upset. If switching between similar types (standard to standard), a faster transition is usually fine. For sensitive to standard or vice versa, go slower.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">How long can prepared formula sit out?</h3>
                      <p className="text-gray-700">
                        Prepared formula is safe at room temperature for 2 hours. If your baby starts a bottle but doesn't finish it, discard the remainder after 1 hour (bacteria from baby's mouth). Refrigerated prepared formula lasts 24 hours.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Do I need to boil water for formula?</h3>
                      <p className="text-gray-700">
                        For babies under 3 months, premature, or immunocompromised: yes, boil water and cool to room temp. For healthy term babies over 3 months, safe tap water or bottled water is fine. Check with your pediatrician and local water quality.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Is European formula better?</h3>
                      <p className="text-gray-700">
                        European formulas have different regulations (stricter on some ingredients, different stages). Some parents prefer them, but importing carries risks: storage/transport issues, no FDA oversight, language barriers, and potential customs delays. US formulas are safe and nutritionally complete.
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
  headline: 'Best Baby Formula 2025: Top 10 Reviewed for Every Need',
  description: 'Expert reviews of the best baby formulas: standard, sensitive, organic, hypoallergenic, and specialty formulas. Compare ingredients, prices, and parent reviews.',
  image: 'https://childbloom.site/images/articles/best-baby-formula-og.jpg',
  datePublished: '2025-02-05',
  dateModified: '2025-06-10',
  author: {
    '@type': 'Organization',
    name: 'ChildBloom Gear Team',
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
    '@id': 'https://childbloom.site/articles/best-baby-formula/',
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
        name: 'Best Baby Formula',
        item: 'https://childbloom.site/articles/best-baby-formula/',
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
