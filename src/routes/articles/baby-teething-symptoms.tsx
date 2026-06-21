import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/baby-teething-symptoms")({
  component: BabyTeethingSymptoms,
  head: () => {
    const url = "https://childbloom.site/articles/baby-teething-symptoms/";
    return seo({
      title: "Baby Teething Symptoms: Signs, Timeline, and Soothing Tips | ChildBloom",
      description:
        "Learn to recognize teething symptoms in babies, understand the teething timeline, and discover safe, effective soothing strategies.",
      url,
      type: "article",
      publishedTime: "2025-01-25",
      modifiedTime: "2025-06-10",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/pinterest-pins/baby-teething-symptoms.jpg",
    });
  },
});

function BabyTeethingSymptoms() {
  const tableOfContents = [
    { id: "teething-timeline", title: "Teething Timeline" },
    { id: "common-symptoms", title: "Common Symptoms" },
    { id: "teething-vs-illness", title: "Teething vs. Illness" },
    { id: "soothing-strategies", title: "Soothing Strategies" },
    { id: "safe-teething-products", title: "Safe Teething Products" },
    { id: "oral-care", title: "Oral Care During Teething" },
    { id: "when-to-call-doctor", title: "When to Call the Doctor" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Fever in Children", slug: "/articles/fever-in-children/" },
    { title: "Child Fever Guide", slug: "/articles/child-fever-guide/" },
    { title: "Best Baby Thermometers", slug: "/articles/best-baby-thermometers/" },
    { title: "Newborn Care Guide", slug: "/articles/newborn-care-guide/" },
    { title: "Child Development Milestones", slug: "/articles/child-development-milestones/" },
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
              <span className="text-gray-700">Baby Teething Symptoms</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Baby Teething Symptoms: Signs, Timeline, and Soothing Tips
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Learn to recognize teething symptoms in babies, understand the teething timeline, and
              discover safe, effective soothing strategies.
            </p>
            <div className="flex items-center gap-4 text-sm text-gray-500">
              <span>By ChildBloom Medical Team</span>
              <span>•</span>
              <span>June 10, 2025</span>
              <span>•</span>
              <span>15 min read</span>
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
                    Teething is a normal developmental milestone, but it can be a challenging time
                    for babies and parents. Learn to distinguish teething symptoms from illness and
                    find safe relief strategies.
                  </p>
                </div>

                <section id="teething-timeline" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Teething Timeline</h2>
                  <p className="text-gray-700 mb-4">
                    While every baby is different, most follow a general teething pattern. The first
                    tooth typically appears around 6 months, but some babies start as early as 3
                    months or as late as 12+ months.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Typical Teething Schedule</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>
                        <strong>6-10 months:</strong> Lower central incisors (bottom front teeth)
                      </li>
                      <li>
                        <strong>8-12 months:</strong> Upper central incisors (top front teeth)
                      </li>
                      <li>
                        <strong>9-13 months:</strong> Upper lateral incisors (top side teeth)
                      </li>
                      <li>
                        <strong>10-16 months:</strong> Lower lateral incisors (bottom side teeth)
                      </li>
                      <li>
                        <strong>13-19 months:</strong> First molars (back teeth)
                      </li>
                      <li>
                        <strong>14-18 months:</strong> Canines (pointy teeth)
                      </li>
                      <li>
                        <strong>23-31 months:</strong> Second molars
                      </li>
                    </ul>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">Total Timeline</h3>
                  <p className="text-gray-700 mb-4">
                    Most children have all 20 primary teeth by age 3. The teething process isn't
                    continuous—there are usually quiet periods between teeth. Some babies experience
                    significant discomfort with each tooth; others seem barely affected.
                  </p>
                </section>

                <section id="common-symptoms" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Common Symptoms</h2>
                  <p className="text-gray-700 mb-4">
                    Teething symptoms vary widely between babies. Some have mild discomfort; others
                    seem very fussy. Symptoms typically begin 3-5 days before a tooth emerges and
                    subside once it breaks through.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Typical Teething Signs
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>
                      <strong>Increased drooling</strong>—often starting as early as 3 months
                    </li>
                    <li>
                      <strong>Chewing on everything</strong>—fingers, toys, furniture, you
                    </li>
                    <li>
                      <strong>Irritability and fussiness</strong>—especially at night
                    </li>
                    <li>
                      <strong>Swollen or bulging gums</strong>—you may see or feel the tooth bud
                    </li>
                    <li>
                      <strong>Sleep disruption</strong>—more frequent night wakings
                    </li>
                    <li>
                      <strong>Decreased appetite</strong>—sucking can be painful
                    </li>
                    <li>
                      <strong>Rubbing face or ears</strong>—pain can radiate to ears
                    </li>
                    <li>
                      <strong>Low-grade fever</strong>—under 101°F (38.3°C)
                    </li>
                  </ul>
                  <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-yellow-900 mb-2">Important Note on Fever</h4>
                    <p className="text-gray-700">
                      Teething may cause a low-grade fever (under 101°F), but a true fever (101°F+)
                      is not a teething symptom and indicates illness. If your baby has a fever
                      above 101°F, contact your pediatrician.
                    </p>
                  </div>
                </section>

                <section id="teething-vs-illness" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Teething vs. Illness</h2>
                  <p className="text-gray-700 mb-4">
                    Many parents attribute all symptoms to teething, but it's important to recognize
                    when your baby might be sick. Here's how to tell the difference:
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Comparison Table</h3>
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b border-gray-200">
                          <th className="text-left py-2 px-4">Symptom</th>
                          <th className="text-left py-2 px-4">Teething</th>
                          <th className="text-left py-2 px-4">Illness</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Fever</td>
                          <td className="py-2 px-4">Low-grade only (under 101°F)</td>
                          <td className="py-2 px-4">Can be high (101°F+)</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Diarrhea</td>
                          <td className="py-2 px-4">Uncommon</td>
                          <td className="py-2 px-4">Possible with viral illness</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Vomiting</td>
                          <td className="py-2 px-4">Not a teething symptom</td>
                          <td className="py-2 px-4">Indicates illness</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Rash</td>
                          <td className="py-2 px-4">Drool rash only</td>
                          <td className="py-2 px-4">Body rash possible</td>
                        </tr>
                        <tr className="border-b border-gray-100">
                          <td className="py-2 px-4">Duration</td>
                          <td className="py-2 px-4">3-5 days per tooth</td>
                          <td className="py-2 px-4">Varies by illness</td>
                        </tr>
                        <tr>
                          <td className="py-2 px-4">Behavior</td>
                          <td className="py-2 px-4">Fussy but interactive</td>
                          <td className="py-2 px-4">Lethargic, not interested</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    When Teething Isn't to Blame
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Teething doesn't cause: high fever, diarrhea, vomiting, severe rash, extreme
                    lethargy, poor feeding for days, or coughing. If your baby has these symptoms,
                    they're likely sick and need medical evaluation.
                  </p>
                </section>

                <section id="soothing-strategies" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Soothing Strategies</h2>
                  <p className="text-gray-700 mb-4">
                    While you can't stop teething, you can help your baby feel more comfortable. Try
                    these evidence-based soothing strategies:
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Gentle Pressure Methods
                  </h3>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                    <li>
                      <strong>Clean finger massage</strong>—rub gums gently with a clean finger
                    </li>
                    <li>
                      <strong>Cold washcloth</strong>—chill (not freeze) a clean washcloth for
                      chewing
                    </li>
                    <li>
                      <strong>Teething toys</strong>—silicone or rubber toys that can be chilled
                    </li>
                    <li>
                      <strong>Cold spoon</strong>—a chilled metal spoon (supervised only)
                    </li>
                  </ol>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Comfort Measures
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Extra cuddles and attention</li>
                    <li>Breastfeeding or bottle feeding (comforting)</li>
                    <li>Cool liquids (for babies 6+ months)</li>
                    <li>Cold foods like yogurt or applesauce (for babies eating solids)</li>
                    <li>Distraction with play and activities</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">What to Avoid</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Teething tablets with benzocaine (not for children under 2)</li>
                    <li>Amber teething necklaces (choking and strangulation risk)</li>
                    <li>Frozen teething toys (can damage gums)</li>
                    <li>Homeopathic teething gels (not proven safe or effective)</li>
                    <li>Putting honey on gums (not for babies under 1)</li>
                  </ul>
                </section>

                <section id="safe-teething-products" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Safe Teething Products</h2>
                  <p className="text-gray-700 mb-4">
                    Not all teething products are safe or effective. Here's what pediatricians
                    recommend:
                  </p>
                  <div className="bg-green-50 border border-green-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-green-900 mb-2">Safe Options</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Silicone teething toys (BPA-free)</li>
                      <li>Cold (not frozen) washcloths</li>
                      <li>Teething rings that can be chilled</li>
                      <li>Mesh feeders with frozen fruit (for babies eating solids)</li>
                      <li>Clean, cold wet towels</li>
                    </ul>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Products to Avoid
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>
                      <strong>Amber teething necklaces:</strong> Strangulation and choking hazard;
                      no proven benefit
                    </li>
                    <li>
                      <strong>Benzocaine gels:</strong> Not for children under 2; can cause
                      methemoglobinemia
                    </li>
                    <li>
                      <strong>Homeopathic teething tablets:</strong> Inconsistent dosing, potential
                      toxicity
                    </li>
                    <li>
                      <strong>Frozen teething toys:</strong> Too hard, can damage gums
                    </li>
                    <li>
                      <strong>Honey or honey-based products:</strong> Not for babies under 1
                      (botulism risk)
                    </li>
                  </ul>
                </section>

                <section id="oral-care" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Oral Care During Teething
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Even before the first tooth appears, it's important to care for your baby's
                    gums. Good oral hygiene habits start early.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Before First Tooth
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Wipe gums with a clean, damp cloth after feedings</li>
                    <li>Use a silicone finger brush for gentle cleaning</li>
                    <li>Never put baby to bed with a bottle (prevents decay)</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    After First Tooth
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>
                      Brush twice daily with a tiny smear of fluoride toothpaste (grain-of-rice
                      size)
                    </li>
                    <li>Use a soft-bristled infant toothbrush</li>
                    <li>Begin flossing once teeth touch</li>
                    <li>Schedule first dental visit by first birthday or first tooth</li>
                  </ul>
                </section>

                <section id="when-to-call-doctor" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call the Doctor</h2>
                  <p className="text-gray-700 mb-4">
                    Teething is normal, but certain symptoms warrant a call to your pediatrician:
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Fever above 101°F (38.3°C)</li>
                    <li>Diarrhea or vomiting</li>
                    <li>Rash all over body (not just drool rash)</li>
                    <li>Extreme irritability that doesn't improve with comfort measures</li>
                    <li>No teeth by 18 months (consult pediatrician and dentist)</li>
                    <li>Signs of infection: swollen gums with pus, bad odor</li>
                  </ul>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Do all babies have teething symptoms?
                      </h3>
                      <p className="text-gray-700">
                        No. Some babies breeze through teething with minimal symptoms. Others seem
                        very uncomfortable. There's no way to predict how your baby will react.
                        Genetics may play a role—if you or your partner had difficult teething, your
                        baby might too.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Can teething cause a fever?
                      </h3>
                      <p className="text-gray-700">
                        Teething may cause a low-grade fever (under 101°F), but a true fever
                        (101°F+) is not a teething symptom and indicates illness. Always check with
                        your pediatrician if your baby has a fever above 101°F.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        How long does teething last?
                      </h3>
                      <p className="text-gray-700">
                        Symptoms typically last 3-5 days per tooth, but some babies have symptoms
                        for weeks before a tooth emerges. The entire teething process (all 20 teeth)
                        lasts from about 6 months to 3 years.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Are amber teething necklaces safe?
                      </h3>
                      <p className="text-gray-700">
                        No. The FDA and AAP warn against amber teething necklaces. They pose choking
                        and strangulation risks, and there's no scientific evidence they relieve
                        teething pain. The supposed mechanism (succinic acid released by warmed
                        amber) has never been proven.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        When should I schedule the first dentist visit?
                      </h3>
                      <p className="text-gray-700">
                        Schedule the first dental visit by your child's first birthday or within 6
                        months of the first tooth appearing—whichever comes first. Early dental
                        visits prevent cavities and establish good oral health habits.
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
  headline: "Baby Teething Symptoms: Signs, Timeline, and Soothing Tips",
  description:
    "Learn to recognize teething symptoms in babies, understand the teething timeline, and discover safe, effective soothing strategies.",
  image: "https://childbloom.site/pinterest-pins/baby-teething-symptoms.jpg",
  datePublished: "2025-01-25",
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
    "@id": "https://childbloom.site/articles/baby-teething-symptoms/",
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
        name: "Baby Teething Symptoms",
        item: "https://childbloom.site/articles/baby-teething-symptoms/",
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
