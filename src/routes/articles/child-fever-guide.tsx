import { createFileRoute } from "@tanstack/react-router";
import { siteDescription } from "@/lib/site-data";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/child-fever-guide")({
  head: () => ({
    meta: [
      { title: "Child Fever Guide: When to Worry & What to Do | ChildBloom" },
      {
        name: "description",
        content: "Complete parent's guide to child fever: temperature thresholds, when to call the doctor, safe treatments, and red flags. Evidence-based advice from pediatric experts.",
      },
      { property: "og:title", content: "Child Fever Guide: When to Worry & What to Do | ChildBloom" },
      { property: "og:description", content: "Complete parent's guide to child fever: temperature thresholds, when to call the doctor, safe treatments, and red flags." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/child-fever-guide" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Child Fever Guide: When to Worry & What to Do",
          description: "Complete parent's guide to child fever: temperature thresholds, when to call the doctor, safe treatments, and red flags.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/child-fever-guide" },
          datePublished: "2026-01-15",
          dateModified: "2026-01-15",
        }),
      },
    ],
  }),
  component: ChildFeverGuideArticle,
});

function ChildFeverGuideArticle() {
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
              Child Fever Guide: When to Worry & What to Do
            </h1>
            <p className="text-sm text-muted-foreground">12 min read • Published January 15, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#understanding-fever" className="text-primary hover:underline">Understanding Fever in Children</a></li>
              <li><a href="#temperature-thresholds" className="text-primary hover:underline">Temperature Thresholds by Age</a></li>
              <li><a href="#when-to-call-doctor" className="text-primary hover:underline">When to Call the Doctor</a></li>
              <li><a href="#red-flags" className="text-primary hover:underline">Red Flags: Emergency Signs</a></li>
              <li><a href="#home-care" className="text-primary hover:underline">Safe Home Care & Comfort Measures</a></li>
              <li><a href="#medications" className="text-primary hover:underline">Fever Medications: Dosage & Safety</a></li>
              <li><a href="#thermometers" className="text-primary hover:underline">Choosing the Best Thermometer</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="understanding-fever" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Understanding Fever in Children</h2>
            <p>
              Fever is one of the most common reasons parents seek medical advice, yet it's also one of the most misunderstood. 
              A fever isn't an illness itself—it's a symptom, a sign that your child's immune system is actively fighting an infection.
            </p>
            <p>
              <strong>Normal body temperature</strong> ranges from 97°F to 99°F (36.1°C to 37.2°C), varying throughout the day. 
              A <strong>fever</strong> is generally defined as a rectal temperature of 100.4°F (38°C) or higher.
            </p>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-2">Key Takeaway</h3>
              <p className="text-sm text-muted-foreground">
                The number on the thermometer matters less than how your child looks and acts. A child with a 103°F fever who's 
                playing and drinking fluids is generally less concerning than a child with 101°F who's lethargic and refusing fluids.
              </p>
            </div>
            <h3 className="text-xl font-semibold">What Causes Fever?</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Viral infections</strong> — colds, flu, roseola, COVID-19 (most common)</li>
              <li><strong>Bacterial infections</strong> — ear infections, strep throat, UTIs, pneumonia</li>
              <li><strong>Post-vaccination</strong> — low-grade fever after immunizations is normal</li>
              <li><strong>Overheating</strong> — too many layers, hot environment (especially in infants)</li>
              <li><strong>Teething</strong> — may cause slight temperature elevation, but not true fever (&gt;100.4°F)</li>
            </ul>
          </section>

          <section id="temperature-thresholds" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Temperature Thresholds by Age</h2>
            <p>Age matters significantly when evaluating fever. Here's when to take action:</p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Age Group</th>
                    <th className="p-3 text-left font-medium">Fever Definition</th>
                    <th className="p-3 text-left font-medium">Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">0–3 months</td>
                    <td className="p-3">≥100.4°F (38°C) rectal</td>
                    <td className="p-3 text-red-600 font-medium">Call doctor IMMEDIATELY — go to ER if after hours</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">3–6 months</td>
                    <td className="p-3">≥101°F (38.3°C)</td>
                    <td className="p-3 text-amber-700 font-medium">Call doctor same day</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">6–24 months</td>
                    <td className="p-3">≥102°F (38.9°C)</td>
                    <td className="p-3">Call if fever &gt;24 hrs or with other symptoms</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">2+ years</td>
                    <td className="p-3">≥102°F (38.9°C)</td>
                    <td className="p-3">Call if fever &gt;3 days or with concerning symptoms</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold">Rectal vs. Oral vs. Axillary (Armpit) Temperatures</h3>
            <p>Method affects the reading. For accuracy:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Rectal:</strong> Gold standard for infants &lt;3 months. Most accurate.</li>
              <li><strong>Oral:</strong> Accurate for ages 4+. Child must keep mouth closed.</li>
              <li><strong>Temporal (forehead):</strong> Good screening tool; confirm with rectal if high.</li>
              <li><strong>Axillary:</strong> Least accurate; add ~1°F to estimate core temperature.</li>
              <li><strong>Tympanic (ear):</strong> Accurate if positioned correctly; not for babies &lt;6 months.</li>
            </ul>
          </section>

          <section id="when-to-call-doctor" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">When to Call the Doctor</h2>
            
            <h3 className="text-xl font-semibold text-red-600">Call Immediately (Any Age)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Fever in baby &lt;3 months (any temperature ≥100.4°F rectal)</li>
              <li>Fever ≥104°F (40°C) that doesn't respond to medication</li>
              <li>Fever lasting &gt;3 days (72 hours)</li>
              <li>Child looks very ill, unusually drowsy, or difficult to wake</li>
              <li>Signs of dehydration: dry mouth, no tears, no urine 8+ hours, sunken fontanelle</li>
              <li>Stiff neck, severe headache, or sensitivity to light</li>
              <li>Seizure (febrile seizure)</li>
              <li>Rash that doesn't blanch (turn white) when pressed</li>
              <li>Difficulty breathing or rapid breathing</li>
              <li>Underlying immune condition or taking steroids</li>
            </ul>

            <h3 className="text-xl font-semibold text-amber-700">Call Within 24 Hours</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Fever in child 3–6 months ≥101°F</li>
              <li>Fever &gt;102°F in child 6–24 months lasting &gt;24 hours</li>
              <li>Fever with specific complaints: ear pain, sore throat, pain with urination</li>
              <li>Fever that went away and returned after 24+ hours</li>
              <li>Recent travel to areas with endemic diseases (malaria, dengue, etc.)</li>
            </ul>
          </section>

          <section id="red-flags" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Red Flags: Emergency Signs</h2>
            <p className="text-red-600 font-semibold">Call 911 or go to the ER immediately if your child has:</p>
            <ul className="list-disc space-y-3 pl-6">
              <li><strong>Difficulty breathing:</strong> Retractions (skin pulling in around ribs), grunting, blue lips</li>
              <li><strong>Unresponsiveness:</strong> Won't wake up, limp, not making eye contact</li>
              <li><strong>Seizure lasting &gt;5 minutes</strong> or repeated seizures</li>
              <li><strong>Signs of meningitis:</strong> Stiff neck, severe headache, light sensitivity, vomiting</li>
              <li><strong>Severe dehydration:</strong> Sunken eyes, no urine 12+ hours, very dry mouth</li>
              <li><strong>Purple/red rash that doesn't fade</strong> when you press a glass against it</li>
            </ul>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-semibold text-red-800 mb-2">📱 Save This: When in Doubt, Call</h3>
              <p className="text-sm text-red-700">
                Your pediatrician's after-hours line exists for this reason. No question is too small when it comes to your child's health.
              </p>
            </div>
          </section>

          <section id="home-care" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Safe Home Care & Comfort Measures</h2>

            <h3 className="text-xl font-semibold">Do's</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Hydration is #1:</strong> Offer water, electrolyte solutions (Pedialyte), breast milk, or formula frequently</li>
              <li><strong>Dress lightly:</strong> One layer of lightweight clothing; avoid bundling</li>
              <li><strong>Room temperature:</strong> Keep room comfortably cool (68–72°F / 20–22°C)</li>
              <li><strong>Rest:</strong> Encourage sleep but don't force it</li>
              <li><strong>Lukewarm bath:</strong> 15–20 minute sponge bath with lukewarm water (NOT cold)</li>
              <li><strong>Monitor:</strong> Check temperature every 4–6 hours; track trends</li>
            </ul>

            <h3 className="text-xl font-semibold">Don'ts</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>NO ice baths, cold water, or alcohol rubs</strong> — causes shivering, raises core temp</li>
              <li><strong>NO bundling</strong> — traps heat</li>
              <li><strong>NO aspirin</strong> — risk of Reye's syndrome in children</li>
              <li><strong>NO waking a sleeping child</strong> just to give medication</li>
              <li><strong>NO alternating medications</strong> without doctor guidance</li>
            </ul>

            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-2">Hydration Goals by Age</h3>
              <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
                <li><strong>Infants &lt;6 months:</strong> Breast milk or formula on demand (small, frequent feeds)</li>
                <li><strong>6–12 months:</strong> 4–8 oz water + breast milk/formula; electrolyte solution if vomiting/diarrhea</li>
                <li><strong>1–3 years:</strong> 4–6 cups fluids/day; offer every 1–2 hours</li>
                <li><strong>4+ years:</strong> 5–8 cups fluids/day; popsicles and soup count</li>
              </ul>
            </div>
          </section>

          <section id="medications" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Fever Medications: Dosage & Safety</h2>

            <p className="font-semibold">Two main options for children: <strong>Acetaminophen (Tylenol)</strong> and <strong>Ibuprofen (Advil, Motrin)</strong>.</p>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Medication</th>
                    <th className="p-3 text-left font-medium">Minimum Age</th>
                    <th className="p-3 text-left font-medium">Dosing Interval</th>
                    <th className="p-3 text-left font-medium">Max Doses/24hr</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Acetaminophen</td>
                    <td className="p-3">Any age (consult &lt;3 mo)</td>
                    <td className="p-3">Every 4–6 hours</td>
                    <td className="p-3">5 doses</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Ibuprofen</td>
                    <td className="p-3">6+ months</td>
                    <td className="p-3">Every 6–8 hours</td>
                    <td className="p-3">4 doses</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold">Critical Safety Rules</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Dose by WEIGHT, not age</strong> — use the measuring device that comes with the medicine</li>
              <li><strong>Never give aspirin</strong> to children/teens (Reye's syndrome risk)</li>
              <li><strong>Check all labels</strong> — many cold meds contain acetaminophen/ibuprofen; avoid double-dosing</li>
              <li><strong>Don't alternate</strong> acetaminophen and ibuprofen without pediatrician approval</li>
              <li><strong>Infant vs. Children's concentrations differ</strong> — infant drops are more concentrated</li>
              <li><strong>If vomiting within 20 min of dose</strong>, you may repeat; after 20 min, wait for next scheduled dose</li>
            </ul>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-semibold text-amber-800 mb-2">⚠️ Warning: Acetaminophen Overdose</h3>
              <p className="text-sm text-amber-700">
                Acetaminophen is in 600+ OTC products. Always check active ingredients. Maximum daily dose: 
                75 mg/kg (not to exceed 4000 mg/day). Liver damage can occur with overdose.
              </p>
            </div>
          </section>

          <section id="thermometers" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Choosing the Best Thermometer</h2>
            <p>
              Accurate temperature measurement is essential. We've tested the top options for accuracy, speed, and ease of use.
            </p>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-3">Quick Recommendations</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-muted-foreground">
                <li><strong>Best Overall (Infant):</strong> <a href="/go/thermometer-frida" className="text-primary hover:underline" rel="sponsored nofollow">FridaBaby Rectal Thermometer</a> — fast, accurate, parent-friendly design</li>
                <li><strong>Best Overall (Family):</strong> <a href="/go/thermometer-braun" className="text-primary hover:underline" rel="sponsored nofollow">Braun ThermoScan 7</a> — ear, age-precision color coding</li>
                <li><strong>Best No-Touch:</strong> <a href="/go/thermometer-va" className="text-primary hover:underline" rel="sponsored nofollow">iHealth No-Touch Forehead</a> — hygienic, silent, great for sleeping kids</li>
                <li><strong>Best Budget:</strong> <a href="/go/thermometer-vicks" className="text-primary hover:underline" rel="sponsored nofollow">Vicks SpeedRead</a> — reliable oral/rectal/axillary under $15</li>
              </ul>
              <p className="mt-3 text-sm text-muted-foreground">
                Read our full <a href="/articles/best-baby-thermometers" className="text-primary hover:underline">Best Baby Thermometers review</a> for detailed comparisons and buying guide.
              </p>
            </div>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Can teething cause a fever?</dt>
                <dd className="mt-2">Teething may cause a very slight temperature rise (under 100.4°F), but it does NOT cause true fever. If your baby has ≥100.4°F, look for another cause.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Should I wake my child to give fever medicine?</dt>
                <dd className="mt-2">No. Sleep is healing. If they're sleeping comfortably, let them sleep. Give medication when they wake or if they're uncomfortable.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">How high is too high for a fever?</dt>
                <dd className="mt-2">Fevers from infection rarely exceed 105–106°F. The height doesn't correlate with severity. Focus on how your child looks and behaves, not just the number.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Can I alternate Tylenol and Motrin?</dt>
                <dd className="mt-2">Only under your pediatrician's guidance. Alternating increases risk of dosing errors. Most children do well with just one medication.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">When can my child return to school/daycare?</dt>
                <dd className="mt-2">After 24 hours fever-free WITHOUT medication, and feeling well enough to participate. Check your facility's specific policy.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Does a high fever cause brain damage?</dt>
                <dd className="mt-2">No. Fevers from illness don't cause brain damage. Only extreme hyperthermia (heat stroke, &gt;107°F) from external heat can cause neurological injury.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">What's a febrile seizure? Should I worry?</dt>
                <dd className="mt-2">Febrile seizures occur in 2–5% of children 6 months–5 years during rapid temperature rise. They're frightening but usually harmless. Call 911 if &gt;5 minutes.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/best-baby-thermometers" className="text-primary hover:underline">Best Baby Thermometers</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/fever-in-children" className="text-primary hover:underline">Fever in Children: Complete Guide</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/baby-teething-symptoms" className="text-primary hover:underline">Baby Teething Symptoms</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/child-fever-home-remedies" className="text-primary hover:underline">Child Fever Home Remedies</a>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Medical Disclaimer:</strong> This article is for educational purposes only and does not constitute medical advice. 
              Always consult your pediatrician or healthcare provider for concerns about your child's health.
            </p>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}