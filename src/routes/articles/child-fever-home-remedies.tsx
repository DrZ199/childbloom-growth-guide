import { createFileRoute, Link } from '@tanstack/react-router'
import { seo } from '@/lib/seo'
import { ReadingProgress } from '@/components/content/reading-progress'
import { BackToTop } from '@/components/content/back-to-top'
import { TableOfContents } from '@/components/content/table-of-contents'
import { RelatedArticles } from '@/components/content/related-articles'

export const Route = createFileRoute('/articles/child-fever-home-remedies')({
  component: ChildFeverHomeRemedies,
  head: () => {
    const url = 'https://childbloom.site/articles/child-fever-home-remedies/'
    return seo({
      title: 'Child Fever Home Remedies: Safe Natural Fever Relief for Kids | ChildBloom',
      description: 'Evidence-based home remedies for children\'s fevers: cooling strategies, fluids, rest, and when home care is appropriate vs. when to call the doctor.',
      url,
      type: 'article',
      publishedTime: '2025-01-28',
      modifiedTime: '2025-06-10',
      author: 'ChildBloom Medical Team',
      image: 'https://childbloom.site/images/articles/child-fever-home-remedies-og.jpg',
    })
  },
})

function ChildFeverHomeRemedies() {
  const tableOfContents = [
    { id: 'when-home-care', title: 'When Home Care Is Appropriate' },
    { id: 'cooling-strategies', title: 'Cooling Strategies' },
    { id: 'hydration', title: 'Hydration Essentials' },
    { id: 'rest-comfort', title: 'Rest & Comfort' },
    { id: 'natural-methods', title: 'Natural Methods That Work' },
    { id: 'what-to-avoid', title: 'What to Avoid' },
    { id: 'monitoring-fever', title: 'Monitoring & Tracking' },
    { id: 'faq', title: 'Frequently Asked Questions' },
  ]

  const relatedArticles = [
    { title: 'Fever in Children', slug: '/articles/fever-in-children/' },
    { title: 'Child Fever Guide', slug: '/articles/child-fever-guide/' },
    { title: 'Best Baby Thermometers', slug: '/articles/best-baby-thermometers/' },
    { title: 'Baby Teething Symptoms', slug: '/articles/baby-teething-symptoms/' },
    { title: 'Newborn Care Guide', slug: '/articles/newborn-care-guide/' },
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
              <span className="text-gray-700">Child Fever Home Remedies</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Child Fever Home Remedies: Safe Natural Fever Relief for Kids
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Evidence-based home remedies for children's fevers: cooling strategies, fluids, rest, and when home care is appropriate vs. when to call the doctor.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>By ChildBloom Medical Team</span>
              <span>•</span>
              <span>June 10, 2025</span>
              <span>•</span>
              <span>16 min read</span>
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
                    Most fevers in children are caused by viral infections and can be managed safely at home. These evidence-based strategies help keep your child comfortable while their immune system does its job.
                  </p>
                </div>

                <section id="when-home-care" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When Home Care Is Appropriate</h2>
                  <p className="text-gray-700 mb-4">
                    Home care is appropriate for most fevers in otherwise healthy children. However, age and symptoms determine when home care is safe versus when you need medical attention.
                  </p>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-green-900 mb-2">Safe for Home Care</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Child 3+ months with low-grade fever (under 101°F)</li>
                      <li>Child is drinking fluids and making wet diapers</li>
                      <li>Child is alert and interactive when fever-free</li>
                      <li>Fever has lasted less than 3 days</li>
                      <li>No concerning symptoms (rash, breathing issues, severe pain)</li>
                    </ul>
                  </div>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">Seek Medical Care</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Newborn (0-3 months) with any fever 100.4°F+</li>
                      <li>Fever 104°F+ that doesn't respond to medication</li>
                      <li>Signs of dehydration</li>
                      <li>Difficulty breathing or severe pain</li>
                      <li>Fever lasting more than 3 days</li>
                      <li>Lethargy or unresponsiveness</li>
                    </ul>
                  </div>
                </section>

                <section id="cooling-strategies" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Cooling Strategies</h2>
                  <p className="text-gray-700 mb-4">
                    Cooling strategies help reduce discomfort, but they don't treat the underlying infection. Use them to help your child feel better, not to lower the fever artificially.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Safe Cooling Methods</h3>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                    <li><strong>Lukewarm sponge bath</strong>—use water slightly cooler than body temperature (85-90°F). Sponge for 5-10 minutes. Stop if your child starts shivering.</li>
                    <li><strong>Light clothing</strong>—dress in lightweight, breathable fabrics. Avoid overdressing or heavy blankets.</li>
                    <li><strong>Cool room</strong>—maintain room temperature at 68-72°F (20-22°C). Use fans to circulate air, but don't blow directly on child.</li>
                    <li><strong>Cool compress</strong>—place a cool, damp washcloth on forehead, wrists, or back of neck.</li>
                  </ol>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">What NOT to Do</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Never use ice baths (causes shivering, which raises internal temperature)</li>
                    <li>Don't use rubbing alcohol (toxic when absorbed through skin)</li>
                    <li>Avoid cold water (causes shivering and discomfort)</li>
                    <li>Don't force cooling if your child is cold or shivering</li>
                  </ul>
                </section>

                <section id="hydration" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Hydration Essentials</h2>
                  <p className="text-gray-700 mb-4">
                    Fever increases fluid loss through sweating and rapid breathing. Preventing dehydration is the most important aspect of fever home care.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Best Fluids for Fever</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Water:</strong> The best choice for children 6+ months</li>
                    <li><strong>Breast milk or formula:</strong> Continue as normal for infants</li>
                    <li><strong>Oral rehydration solutions:</strong> Pedialyte, for children with poor intake</li>
                    <li><strong>Diluted juice:</strong> 1 part juice to 2 parts water</li>
                    <li><strong>Broth:</strong> Warm chicken or vegetable broth</li>
                    <li><strong>Popsicles:</strong> Great for children who won't drink liquids</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Signs of Dehydration</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Fewer wet diapers (less than 4-6 per day)</li>
                    <li>Dry mouth and lips</li>
                    <li>No tears when crying</li>
                    <li>Sunken eyes or fontanelle (soft spot)</li>
                    <li>Dark urine</li>
                    <li>Lethargy or irritability</li>
                  </ul>
                </section>

                <section id="rest-comfort" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Rest & Comfort</h2>
                  <p className="text-gray-700 mb-4">
                    Rest allows the immune system to work efficiently. While your child doesn't need to be bedridden, they should avoid strenuous activity.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Comfort Measures</h3>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                    <li><strong>Quiet activities</strong>—books, puzzles, movies, quiet play</li>
                    <li><strong>Extra cuddles</strong>—physical comfort helps children feel secure</li>
                    <li><strong>Comfort foods</strong>—soups, toast, bananas, rice (BRAT diet if diarrhea)</li>
                    <li><strong>Humidifier</strong>—adds moisture to air, helps with congestion</li>
                    <li><strong>Elevated head</strong>—prop up slightly if congested or coughing</li>
                  </ol>
                </section>

                <section id="natural-methods" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Natural Methods That Work</h2>
                  <p className="text-gray-700 mb-4">
                    Some natural methods can help your child feel more comfortable during a fever. These are complementary to, not replacements for, medical care when needed.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Honey for Cough (1+ years)</h3>
                  <p className="text-gray-700 mb-4">
                    Studies show honey is as effective as cough medicine for children over 1. Give 1/2 teaspoon before bed. Never give honey to babies under 1 (botulism risk).
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Chicken Soup</h3>
                  <p className="text-gray-700 mb-4">
                    Grandma was right—chicken soup has anti-inflammatory properties and helps with hydration. The warm broth soothes throats, and the nutrients support recovery.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Saltwater Gargle (4+ years)</h3>
                  <p className="text-gray-700 mb-4">
                    For children old enough to gargle (usually 4+), warm saltwater (1/2 teaspoon salt per 8 oz water) can soothe sore throats. Do 2-3 times daily.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Elevation for Congestion</h3>
                  <p className="text-gray-700 mb-4">
                    Slightly elevating your child's head helps with congestion and post-nasal drip. Use a pillow under the mattress (never put pillows in crib for babies under 1).
                  </p>
                </section>

                <section id="what-to-avoid" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">What to Avoid</h2>
                  <p className="text-gray-700 mb-4">
                    Some common home remedies are unsafe for children. Avoid these:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li><strong>Rubbing alcohol:</strong> Toxic when absorbed through skin; can cause poisoning</li>
                    <li><strong>Aspirin:</strong> Risk of Reye's syndrome in children with viral illnesses</li>
                    <li><strong>Ice baths:</strong> Cause shivering, which raises core temperature</li>
                    <li><strong>Over-the-counter cough/cold medicines:</strong> Not recommended for children under 6</li>
                    <li><strong>Herbal remedies without doctor approval:</strong> Many aren't tested for safety in children</li>
                    <li><strong>Forcing food:</strong> Appetite decreases during fever; focus on fluids</li>
                  </ul>
                </section>

                <section id="monitoring-fever" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Monitoring & Tracking</h2>
                  <p className="text-gray-700 mb-4">
                    Keeping track of your child's fever helps you and your doctor make informed decisions. Here's how to monitor effectively:
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">What to Track</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Temperature readings (time and value)</li>
                    <li>Fever reducer doses (medication, time, amount)</li>
                    <li>Fluid intake (types and amounts)</li>
                    <li>Wet diapers or bathroom trips</li>
                    <li>Energy level and behavior</li>
                    <li>Other symptoms (cough, rash, vomiting)</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">When to Call the Doctor</h3>
                  <p className="text-gray-700 mb-4">
                    Call your pediatrician if: fever lasts more than 3 days, fever is 104°F+ despite medication, your child shows signs of dehydration, you notice new or worsening symptoms, or you simply feel something isn't right. Trust your instincts—you know your child best.
                  </p>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I use home remedies alone, without fever reducers?</h3>
                      <p className="text-gray-700">
                        Yes, if your child is comfortable. Fever reducers are for comfort, not mandatory treatment. If your child is drinking fluids, resting, and seems relatively comfortable, home care alone may be sufficient. Use fever reducers if your child is uncomfortable or in pain.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Is it okay to let my child play while they have a fever?</h3>
                      <p className="text-gray-700">
                        Yes, if they feel like it. Activity level during fever-free periods is a good sign. Bed rest isn't required—just avoid strenuous activities and ensure they're getting plenty of fluids. Follow your child's lead.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">How long should a fever last at home before calling the doctor?</h3>
                      <p className="text-gray-700">
                        Call if fever lasts more than 3 days, if it's 104°F+ despite medication, or if your child shows any concerning symptoms (dehydration, difficulty breathing, severe pain). When in doubt, call your pediatrician—they'd rather reassure you than miss something serious.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Can I use essential oils for fever?</h3>
                      <p className="text-gray-700">
                        Essential oils are not proven effective for reducing fever and can be harmful if misused. Some oils can cause skin irritation or allergic reactions, especially in children. Always consult your pediatrician before using essential oils on or around children.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Should I starve a fever?</h3>
                      <p className="text-gray-700">
                        No. The old saying "starve a fever, feed a cold" is a myth. Your child needs nutrients and fluids to fight infection. Offer small, frequent meals and focus on fluids. If they don't feel like eating solid food, broths and smoothies are good alternatives.
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
  headline: 'Child Fever Home Remedies: Safe Natural Fever Relief for Kids',
  description: "Evidence-based home remedies for children's fevers: cooling strategies, fluids, rest, and when home care is appropriate vs. when to call the doctor.",
  image: 'https://childbloom.site/images/articles/child-fever-home-remedies-og.jpg',
  datePublished: '2025-01-28',
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
    '@id': 'https://childbloom.site/articles/child-fever-home-remedies/',
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
        name: 'Child Fever Home Remedies',
        item: 'https://childbloom.site/articles/child-fever-home-remedies/',
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
