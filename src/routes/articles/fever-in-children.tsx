import { createFileRoute, Link } from "@tanstack/react-router";
import { seo } from "@/lib/seo";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";
import { TableOfContents } from "@/components/content/table-of-contents";
import { RelatedArticles } from "@/components/content/related-articles";

export const Route = createFileRoute("/articles/fever-in-children")({
  component: FeverInChildren,
  head: () => {
    const url = "https://childbloom.site/articles/fever-in-children/";
    return seo({
      title: "Fever in Children: When to Worry and When to Relax | ChildBloom",
      description:
        "Complete guide to fevers in children: normal ranges, when to call the doctor, fever reducers, and myths debunked.",
      url,
      type: "article",
      publishedTime: "2025-01-22",
      modifiedTime: "2025-06-10",
      author: "ChildBloom Medical Team",
      image: "https://childbloom.site/pinterest-pins/fever-in-children.jpg",
    });
  },
});

function FeverInChildren() {
  const tableOfContents = [
    { id: "understanding-fever", title: "Understanding Fever" },
    { id: "normal-ranges", title: "Normal Temperature Ranges" },
    { id: "when-to-call-doctor", title: "When to Call the Doctor" },
    { id: "fever-reducers", title: "Fever Reducers Guide" },
    { id: "home-care", title: "Home Care Strategies" },
    { id: "myths", title: "Fever Myths Debunked" },
    { id: "special-cases", title: "Special Cases" },
    { id: "faq", title: "Frequently Asked Questions" },
  ];

  const relatedArticles = [
    { title: "Child Fever Guide", slug: "/articles/child-fever-guide/" },
    { title: "Best Baby Thermometers", slug: "/articles/best-baby-thermometers/" },
    { title: "Baby Teething Symptoms", slug: "/articles/baby-teething-symptoms/" },
    { title: "Newborn Care Guide", slug: "/articles/newborn-care-guide/" },
    { title: "When to Call the Doctor", slug: "/articles/newborn-care-guide/" },
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
              <span className="text-gray-700">Fever in Children</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 leading-tight">
              Fever in Children: When to Worry and When to Relax
            </h1>
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Complete guide to fevers in children: normal ranges, when to call the doctor, fever
              reducers, and myths debunked.
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
                    Fever is one of the most common reasons parents call the doctor. This guide
                    helps you understand when fever is a normal part of fighting infection and when
                    it requires medical attention.
                  </p>
                </div>

                <section id="understanding-fever" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Understanding Fever</h2>
                  <p className="text-gray-700 mb-4">
                    Fever is not an illness—it's a symptom. It's your body's natural defense
                    mechanism against infection. When your child has a fever, their body is fighting
                    off bacteria or viruses. Understanding this helps you respond appropriately
                    instead of panicking.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Why Fever Happens
                  </h3>
                  <p className="text-gray-700 mb-4">
                    The hypothalamus (your body's thermostat) raises the body's temperature set
                    point in response to infection. This makes the body less hospitable to viruses
                    and bacteria, and stimulates the immune system to work more efficiently.
                  </p>
                  <div className="bg-blue-50 border border-blue-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-blue-900 mb-2">Benefits of Fever</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Inhibits growth of bacteria and viruses</li>
                      <li>Stimulates immune system production</li>
                      <li>Reduces iron availability to pathogens</li>
                      <li>Increases white blood cell production</li>
                    </ul>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Common Causes of Fever
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Viral infections (common cold, flu, COVID-19, RSV)</li>
                    <li>Bacterial infections (strep throat, ear infections, UTI)</li>
                    <li>Vaccinations (normal immune response)</li>
                    <li>Teething (usually low-grade, under 101°F)</li>
                    <li>Overheating from excessive clothing or environment</li>
                  </ul>
                </section>

                <section id="normal-ranges" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">
                    Normal Temperature Ranges
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Normal body temperature varies by age, time of day, and measurement method.
                    Here's what's considered normal and what constitutes a fever:
                  </p>
                  <div className="bg-white border border-gray-200 p-6 rounded-lg mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Temperature Classifications
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4">
                        <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                          Normal
                        </div>
                        <div>
                          <p className="text-gray-700">
                            <strong>Rectal/Ear:</strong> 97.9°F - 100.3°F (36.6°C - 37.9°C)
                          </p>
                          <p className="text-gray-600 text-sm">
                            Oral: 97.4°F - 99.6°F (36.3°C - 37.5°C)
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-medium">
                          Low-Grade
                        </div>
                        <div>
                          <p className="text-gray-700">
                            <strong>Rectal/Ear:</strong> 100.4°F - 101°F (38°C - 38.3°C)
                          </p>
                          <p className="text-gray-600 text-sm">
                            Often from teething, mild infection, or vaccinations
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                          Moderate
                        </div>
                        <div>
                          <p className="text-gray-700">
                            <strong>Rectal/Ear:</strong> 101.1°F - 103.9°F (38.4°C - 39.9°C)
                          </p>
                          <p className="text-gray-600 text-sm">
                            Common with colds, flu, and some infections
                          </p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-medium">
                          High
                        </div>
                        <div>
                          <p className="text-gray-700">
                            <strong>Rectal/Ear:</strong> 104°F+ (40°C+)
                          </p>
                          <p className="text-gray-600 text-sm">
                            Requires medical attention, especially in infants
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Age-Specific Considerations
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>
                      <strong>Newborns (0-3 months):</strong> Any fever 100.4°F+ is an emergency
                    </li>
                    <li>
                      <strong>Infants (3-6 months):</strong> 101°F+ warrants a doctor call
                    </li>
                    <li>
                      <strong>Babies (6-12 months):</strong> 103°F+ or any fever with symptoms
                    </li>
                    <li>
                      <strong>Children (1+ years):</strong> Focus on behavior and symptoms more than
                      number
                    </li>
                  </ul>
                </section>

                <section id="when-to-call-doctor" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">When to Call the Doctor</h2>
                  <p className="text-gray-700 mb-4">
                    The decision to call the doctor depends on your child's age, temperature, and
                    overall appearance. When in doubt, always call—pediatricians would rather
                    reassure you than miss a serious condition.
                  </p>
                  <div className="bg-red-50 border border-red-200 p-6 rounded-lg mb-6">
                    <h4 className="font-semibold text-red-900 mb-2">
                      Emergency: Call 911 Immediately
                    </h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Newborn (0-2 months) with any fever 100.4°F+</li>
                      <li>Difficulty breathing or blue lips/skin</li>
                      <li>Seizure (febrile convulsion)</li>
                      <li>Extreme lethargy or unresponsiveness</li>
                      <li>Stiff neck with fever</li>
                      <li>Purple spots on skin (petechiae)</li>
                    </ul>
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Call Within 24 Hours
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Infant 2-3 months with fever 100.4°F+</li>
                    <li>Any age with fever lasting more than 3 days</li>
                    <li>Fever 104°F+ that doesn't respond to medication</li>
                    <li>Signs of dehydration (no wet diapers 6+ hours)</li>
                    <li>Severe ear pain, sore throat, or sinus pain</li>
                    <li>Rash with fever</li>
                    <li>Unusual sleepiness or irritability</li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Watchful Waiting (No Immediate Call Needed)
                  </h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Child is eating, drinking, and playing normally</li>
                    <li>Fever responds to fever reducers</li>
                    <li>No concerning symptoms (rash, breathing issues, dehydration)</li>
                    <li>Fever has lasted less than 3 days</li>
                  </ul>
                </section>

                <section id="fever-reducers" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Fever Reducers Guide</h2>
                  <p className="text-gray-700 mb-4">
                    Fever reducers (antipyretics) help your child feel more comfortable, but they
                    don't treat the underlying infection. Use them strategically based on your
                    child's discomfort, not just the temperature number.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Acetaminophen (Tylenol)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Acetaminophen is safe for all ages, including newborns. It works by acting on
                    the brain's heat-regulating center. It's gentle on the stomach and doesn't cause
                    inflammation.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>
                      <strong>Age:</strong> Safe for all ages (including newborns)
                    </li>
                    <li>
                      <strong>Dosing:</strong> Based on weight, not age
                    </li>
                    <li>
                      <strong>Frequency:</strong> Every 4-6 hours as needed
                    </li>
                    <li>
                      <strong>Forms:</strong> Liquid, suppositories, chewable
                    </li>
                    <li>
                      <strong>Caution:</strong> Don't exceed recommended dose—liver toxicity risk
                    </li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Ibuprofen (Motrin, Advil)
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Ibuprofen is a stronger anti-inflammatory option, but it's only for children 6
                    months and older. It works by reducing inflammation throughout the body.
                  </p>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>
                      <strong>Age:</strong> 6 months+ only
                    </li>
                    <li>
                      <strong>Dosing:</strong> Based on weight
                    </li>
                    <li>
                      <strong>Frequency:</strong> Every 6-8 hours as needed
                    </li>
                    <li>
                      <strong>Benefits:</strong> Longer-lasting relief, reduces inflammation
                    </li>
                    <li>
                      <strong>Caution:</strong> Can cause stomach upset, never give on empty stomach
                    </li>
                  </ul>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Alternating Medications
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Some doctors recommend alternating acetaminophen and ibuprofen for persistent
                    high fevers. If your pediatrician recommends this, keep a strict log of times
                    and doses to avoid accidental overdose.
                  </p>
                </section>

                <section id="home-care" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Home Care Strategies</h2>
                  <p className="text-gray-700 mb-4">
                    Most fevers can be managed at home with proper care. The goal is keeping your
                    child comfortable while their body fights the infection.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Comfort Measures
                  </h3>
                  <ol className="list-decimal pl-6 space-y-3 text-gray-700 mb-4">
                    <li>
                      <strong>Fluids, fluids, fluids</strong>—water, broth, popsicles, electrolyte
                      solutions
                    </li>
                    <li>
                      <strong>Light clothing</strong>—avoid overdressing; dress in lightweight
                      layers
                    </li>
                    <li>
                      <strong>Room temperature</strong>—keep room at 68-72°F (20-22°C)
                    </li>
                    <li>
                      <strong>Rest</strong>—encourage sleep and quiet activities
                    </li>
                    <li>
                      <strong>Lukewarm sponge baths</strong>—if fever is very high (over 105°F)
                    </li>
                  </ol>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">What NOT to Do</h3>
                  <ul className="list-disc pl-6 space-y-2 text-gray-700 mb-4">
                    <li>Never use rubbing alcohol (toxic when absorbed through skin)</li>
                    <li>Don't use ice baths (causes shivering, which raises temperature)</li>
                    <li>Don't overdress or bundle (traps heat)</li>
                    <li>Don't give aspirin (Reye's syndrome risk)</li>
                    <li>Don't give ibuprofen to babies under 6 months</li>
                    <li>Don't wake sleeping children to give fever reducers</li>
                  </ul>
                </section>

                <section id="myths" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Fever Myths Debunked</h2>
                  <p className="text-gray-700 mb-4">
                    Many parents have misconceptions about fever that can lead to unnecessary worry
                    or incorrect treatment. Let's set the record straight:
                  </p>
                  <div className="space-y-4">
                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">
                        Myth: Fevers cause brain damage
                      </h4>
                      <p className="text-gray-700">
                        <strong>Fact:</strong> Fevers from infection don't cause brain damage. Only
                        temperatures above 108°F (42°C) cause damage, and that's nearly impossible
                        from infection alone.
                      </p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">
                        Myth: All fevers need medication
                      </h4>
                      <p className="text-gray-700">
                        <strong>Fact:</strong> If your child is comfortable, playing, and drinking
                        fluids, they don't need fever reducers. Treat the child, not the number.
                      </p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">
                        Myth: Teething causes high fever
                      </h4>
                      <p className="text-gray-700">
                        <strong>Fact:</strong> Teething may cause a low-grade fever (under 101°F),
                        but a true fever (101°F+) indicates illness, not teething.
                      </p>
                    </div>
                    <div className="bg-yellow-50 border border-yellow-200 p-6 rounded-lg">
                      <h4 className="font-semibold text-yellow-900 mb-2">
                        Myth: Fever means your child is very sick
                      </h4>
                      <p className="text-gray-700">
                        <strong>Fact:</strong> Fever intensity doesn't correlate with illness
                        severity. A simple cold can cause a 103°F fever, while a serious infection
                        might cause only a low-grade fever.
                      </p>
                    </div>
                  </div>
                </section>

                <section id="special-cases" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-4">Special Cases</h2>
                  <p className="text-gray-700 mb-4">
                    Some situations require special attention when your child has a fever:
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Febrile Seizures
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Febrile seizures occur in 2-5% of children under 5, usually triggered by rapid
                    temperature rise. They're frightening but generally harmless. During a seizure:
                    lay your child on their side, time the seizure, don't put anything in their
                    mouth, and call 911 if it lasts more than 5 minutes.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Fever After Vaccinations
                  </h3>
                  <p className="text-gray-700 mb-4">
                    Low-grade fever (under 101°F) after vaccinations is normal and shows the immune
                    system is responding. It typically lasts 1-2 days. Contact your doctor if the
                    fever is very high, lasts more than 3 days, or if you notice concerning
                    symptoms.
                  </p>
                  <h3 className="text-2xl font-semibold text-gray-800 mt-6 mb-3">
                    Recurrent Fevers
                  </h3>
                  <p className="text-gray-700 mb-4">
                    If your child has frequent fevers (more than 6-8 per year), discuss with your
                    pediatrician. This could indicate frequent infections, but sometimes warrants
                    investigation for immune system issues or other conditions.
                  </p>
                </section>

                <section id="faq" className="mb-12 scroll-mt-24">
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">
                    Frequently Asked Questions
                  </h2>
                  <div className="space-y-6">
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Should I treat a fever if my child is comfortable?
                      </h3>
                      <p className="text-gray-700">
                        No. Fever reducers are for comfort, not for "normalizing" temperature. If
                        your child is playing, drinking, and resting comfortably, they don't need
                        medication. Focus on fluids and monitoring.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        How high is too high for a fever?
                      </h3>
                      <p className="text-gray-700">
                        In children, 104°F (40°C) is considered high and warrants a doctor call.
                        Temperatures above 105°F (40.5°C) require immediate medical attention.
                        However, how your child acts matters more than the exact number.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Can fever cause seizures?
                      </h3>
                      <p className="text-gray-700">
                        Febrile seizures can occur, usually between 6 months and 5 years. They're
                        triggered by rapid temperature changes, not the absolute temperature. Most
                        febrile seizures are harmless and don't cause brain damage.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Is it okay to send my child to school with a low-grade fever?
                      </h3>
                      <p className="text-gray-700">
                        No. Keep your child home until they've been fever-free for 24 hours without
                        fever reducers. This protects other children and allows your child to rest
                        and recover.
                      </p>
                    </div>
                    <div className="bg-gray-50 p-6 rounded-lg">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        What's the difference between a viral and bacterial fever?
                      </h3>
                      <p className="text-gray-700">
                        Viral fevers often come on gradually with cold symptoms, and the pattern
                        fluctuates. Bacterial fevers often spike higher and may be accompanied by
                        specific symptoms like severe sore throat, ear pain, or urinary pain. Only a
                        doctor can distinguish, but bacterial infections may require antibiotics.
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
  headline: "Fever in Children: When to Worry and When to Relax",
  description:
    "Complete guide to fevers in children: normal ranges, when to call the doctor, fever reducers, and myths debunked.",
  image: "https://childbloom.site/pinterest-pins/fever-in-children.jpg",
  datePublished: "2025-01-22",
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
    "@id": "https://childbloom.site/articles/fever-in-children/",
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
        name: "Fever in Children",
        item: "https://childbloom.site/articles/fever-in-children/",
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
