import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/newborn-care-guide")({
  head: () => ({
    meta: [
      { title: "Newborn Care Guide: Complete 0-3 Month Handbook | ChildBloom" },
      {
        name: "description",
        content: "Complete newborn care guide for first-time parents: feeding, sleep, diapering, bathing, health concerns, and when to call the doctor. Evidence-based advice from pediatric experts.",
      },
      { property: "og:title", content: "Newborn Care Guide: Complete 0-3 Month Handbook | ChildBloom" },
      { property: "og:description", content: "Complete newborn care guide for first-time parents: feeding, sleep, diapering, bathing, health concerns, and when to call the doctor." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/newborn-care-guide" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Newborn Care Guide: Complete 0-3 Month Handbook",
          description: "Complete newborn care guide for first-time parents: feeding, sleep, diapering, bathing, health concerns, and when to call the doctor.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/newborn-care-guide" },
          datePublished: "2026-01-17",
          dateModified: "2026-01-17",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://childbloom.site" },
            { "@type": "ListItem", position: 2, name: "Articles", item: "https://childbloom.site/articles" },
            { "@type": "ListItem", position: 3, name: "Newborn Care Guide", item: "https://childbloom.site/articles/newborn-care-guide" },
          ],
        }),
      },
    ],
  }),
  component: NewbornCareGuideArticle,
});

function NewbornCareGuideArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Newborn Care
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Newborn Care Guide: Complete 0-3 Month Handbook
            </h1>
            <p className="text-sm text-muted-foreground">18 min read • Published January 17, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#understanding-newborn" className="text-primary hover:underline">Understanding Your Newborn's Needs</a></li>
              <li><a href="#feeding" className="text-primary hover:underline">Feeding: Breastfeeding & Formula</a></li>
              <li><a href="#sleep-patterns" className="text-primary hover:underline">Sleep Patterns & Safe Sleep</a></li>
              <li><a href="#diapering" className="text-primary hover:underline">Diapering & Hygiene</a></li>
              <li><a href="#bathing" className="text-primary hover:underline">Bathing & Skin Care</a></li>
              <li><a href="#cord-care" className="text-primary hover:underline">Umbilical Cord & Circumcision Care</a></li>
              <li><a href="#common-concerns" className="text-primary hover:underline">Common Concerns: Jaundice, Reflux, Colic</a></li>
              <li><a href="#when-to-call" className="text-primary hover:underline">When to Call the Doctor</a></li>
              <li><a href="#milestones" className="text-primary hover:underline">Newborn Development Milestones</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="understanding-newborn" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Understanding Your Newborn's Needs</h2>
            <p>
              The first three months—often called the "fourth trimester"—are a time of incredible adjustment for both baby and parents. 
              Your newborn is transitioning from the womb's constant environment to a world of new sensations, and their needs are simple but constant.
            </p>
            <p>
              <strong>Newborns communicate through cues:</strong> rooting (turning head toward breast), smacking lips, sucking motions = hunger; 
              yawning, rubbing eyes, looking away = tired; fussing, squirming = discomfort or overstimulation.
            </p>
            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-2">Key Principle: Responsive Care</h3>
              <p className="text-sm text-muted-foreground">
                You cannot spoil a newborn. Responding promptly to cries builds trust, regulates their nervous system, 
                and actually reduces crying over time. The "cry it out" method is not appropriate for babies under 4–6 months.
              </p>
            </div>
            <h3 className="text-xl font-semibold">What's Normal in the First Weeks</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Breathing:</strong> Irregular patterns, periodic pauses up to 10 seconds (periodic breathing)</li>
              <li><strong>Skin:</strong> Peeling, milia (tiny white bumps), stork bites (red patches on neck/eyelids), newborn acne</li>
              <li><strong>Reflexes:</strong> Moro (startle), rooting, sucking, grasp, stepping — all fade by 3–6 months</li>
              <li><strong>Weight:</strong> Up to 10% loss in first week, back to birth weight by 2 weeks</li>
              <li><strong>Vision:</strong> Best at 8–12 inches (your face during feeding); prefers high contrast</li>
            </ul>
          </section>

          <section id="feeding" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Feeding: Breastfeeding & Formula</h2>
            
            <h3 className="text-xl font-semibold">Breastfeeding Basics</h3>
            <p>The AAP recommends exclusive breastfeeding for ~6 months, then continued breastfeeding with solids for 2+ years.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Frequency:</strong> 8–12 times per 24 hours (every 2–3 hours), on demand</li>
              <li><strong>Duration:</strong> 10–20 minutes per side; let baby set the pace</li>
              <li><strong>Latch:</strong> Wide mouth, flanged lips, chin touching breast, more areola visible above than below</li>
              <li><strong>Supplements:</strong> Vitamin D (400 IU/day) starting day 1; Iron at 4 months if exclusively breastfed</li>
              <li><strong>Mom's nutrition:</strong> Extra 300–500 kcal/day; stay hydrated; continue prenatal vitamin</li>
            </ul>

            <h3 className="text-xl font-semibold">Formula Feeding</h3>
            <p>Choose iron-fortified formula. All FDA-regulated formulas meet nutritional standards—no brand is "best."</p>
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

          <section id="sleep-patterns" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Sleep Patterns & Safe Sleep</h2>
            
            <h3 className="text-xl font-semibold">Newborn Sleep Reality</h3>
            <p>Newborns spend 50% of sleep time in active REM cycles (vs. 20% for adults). They wake frequently—this is protective, not a problem.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Total sleep:</strong> 14–17 hours/24 hours (highly variable)</li>
              <li><strong>Wake windows:</strong> 45–90 minutes max (including feeding time)</li>
              <li><strong>Day/night confusion:</strong> Common first 6–8 weeks; expose to daylight, keep nights dark/quiet</li>
              <li><strong>Active sleep:</strong> Grunting, twitching, smiling, brief cries—baby is still asleep</li>
            </ul>

            <h3 className="text-xl font-semibold">Safe Sleep Guidelines (AAP)</h3>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-semibold text-red-800 mb-2">🛑 Non-Negotiable Safe Sleep Rules</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-red-700">
                <li><strong>Back to sleep</strong> for every sleep—naps and nights</li>
                <li><strong>Firm, flat surface</strong> in safety-approved crib/bassinet (no inclined sleepers)</li>
                <li><strong>Room-share without bed-sharing</strong> for at least 6 months (ideally 1 year)</li>
                <li><strong>No loose bedding, bumpers, pillows, stuffed animals, or positioners</strong></li>
                <li><strong>Swaddle safely:</strong> Arms in, hips loose, stop at first roll signs (typically 8–12 weeks)</li>
                <li><strong>Pacifier at sleep onset</strong> associated with reduced SIDS risk</li>
                <li><strong>No smoke exposure</strong> — major SIDS risk factor</li>
              </ul>
            </div>

            <p className="text-sm text-muted-foreground">
              Detailed guide: <a href="/articles/newborn-sleep" className="text-primary hover:underline">Newborn Sleep: A Calm, Evidence-Based Guide for the First 12 Weeks</a>
            </p>
          </section>

          <section id="diapering" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Diapering & Hygiene</h2>
            
            <h3 className="text-xl font-semibold">Diaper Basics</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Frequency:</strong> 8–12 diapers/day (wet + dirty)</li>
              <li><strong>Wet diapers:</strong> 6+ heavy wet diapers/day = good hydration</li>
              <li><strong>Stool progression:</strong> Meconium (black/tarry) → transitional (green) → breastfed (yellow/seedy) or formula (tan/pasty)</li>
              <li><strong>Wiping:</strong> Front to back for girls; clean all folds for boys</li>
              <li><strong>Diaper cream:</strong> Zinc oxide at every change for prevention; thick layer for rash</li>
            </ul>

            <h3 className="text-xl font-semibold">Diaper Rash Prevention & Treatment</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Change promptly after every wet/soiled diaper</li>
              <li>Air time: let skin dry completely before new diaper</li>
              <li>Barrier cream with each change (zinc oxide, petroleum jelly)</li>
              <li>If rash persists &gt;3 days, has blisters/pus, or spreads: call doctor (may be yeast)</li>
            </ul>
          </section>

          <section id="bathing" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Bathing & Skin Care</h2>
            
            <h3 className="text-xl font-semibold">Bathing Basics</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Frequency:</strong> 2–3 times/week (sponge baths until cord falls off)</li>
              <li><strong>Water temp:</strong> 98–100°F (37–38°C) — test with wrist/elbow</li>
              <li><strong>Soap:</strong> Mild, fragrance-free, or water only for first month</li>
              <li><strong>Cradle cap:</strong> Gentle brushing with soft brush + mineral oil before bath</li>
            </ul>

            <h3 className="text-xl font-semibold">Skin Care Essentials</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Moisturize:</strong> Fragrance-free cream/ointment after bath (locks in moisture)</li>
              <li><strong>Laundry:</strong> Free & clear detergent; no fabric softener/dryer sheets</li>
              <li><strong>Sun protection:</strong> Shade, clothing, hat — no sunscreen &lt;6 months</li>
              <li><strong>Nail care:</strong> File or clip while baby sleeps; mittens only for first few weeks</li>
            </ul>
          </section>

          <section id="cord-care" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Umbilical Cord & Circumcision Care</h2>
            
            <h3 className="text-xl font-semibold">Umbilical Cord Stump</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Falls off:</strong> Typically 1–3 weeks</li>
              <li><strong>Care:</strong> Keep clean and dry; fold diaper below stump</li>
              <li><strong>No alcohol needed</strong> — current guidelines: dry care only</li>
              <li><strong>Call doctor if:</strong> Redness spreading, foul odor, pus, bleeding &gt; few drops</li>
            </ul>

            <h3 className="text-xl font-semibold">Circumcision Care (if applicable)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Healing:</strong> 7–10 days; petroleum jelly on gauze with each diaper change</li>
              <li><strong>Normal:</strong> Yellowish film (granulation tissue), slight swelling</li>
              <li><strong>Call doctor if:</strong> Persistent bleeding, increasing redness, fever, no wet diaper 8+ hours</li>
            </ul>
          </section>

          <section id="common-concerns" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Common Concerns: Jaundice, Reflux, Colic</h2>
            
            <h3 className="text-xl font-semibold">Jaundice</h3>
            <p>Yellowing of skin/eyes from bilirubin buildup. Affects 60% of full-term, 80% of preterm babies.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Physiologic jaundice:</strong> Peaks day 3–5, resolves by 2 weeks</li>
              <li><strong>Breastfeeding jaundice:</strong> From inadequate intake — feed more frequently</li>
              <li><strong>Call doctor if:</strong> Jaundice in first 24 hours, spreading to arms/legs, baby lethargic/poor feeding</li>
            </ul>

            <h3 className="text-xl font-semibold">Reflux (Spit-Up)</h3>
            <p>Effortless spit-up is normal (immature lower esophageal sphincter). Peaks 4 months, resolves by 12–18 months.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Happy spitter:</strong> Gains weight, not distressed — no treatment needed</li>
              <li><strong>Management:</strong> Smaller, frequent feeds; upright 20–30 min after eating; burp mid-feed</li>
              <li><strong>Call doctor if:</strong> Forceful projectile vomiting, poor weight gain, blood/green in spit-up, respiratory symptoms</li>
            </ul>

            <h3 className="text-xl font-semibold">Colic</h3>
            <p>Crying &gt;3 hours/day, &gt;3 days/week, &gt;3 weeks in otherwise healthy baby. Peaks 6 weeks, resolves by 3–4 months.</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Not your fault</strong> — not caused by parenting, diet (usually), or gas</li>
              <li><strong>Soothing:</strong> 5 S's (swaddle, side/stomach hold, shush, swing, suck); white noise; walk outside</li>
              <li><strong>Probiotics (L. reuteri):</strong> Some evidence for breastfed babies</li>
              <li><strong>Call doctor if:</strong> Crying pattern changes, fever, vomiting, diarrhea, poor weight gain</li>
            </ul>
          </section>

          <section id="when-to-call" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">When to Call the Doctor</h2>
            
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-semibold text-red-800 mb-2">📞 Call Immediately (Any Time)</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-red-700">
                <li>Rectal temperature ≥100.4°F (38°C) in baby &lt;3 months</li>
                <li>Difficulty breathing, grunting, blue lips, retractions</li>
                <li>Unresponsive, limp, difficult to wake</li>
                <li>Seizure</li>
                <li>Signs of dehydration: no wet diaper 8+ hours, dry mouth, sunken fontanelle, no tears</li>
                <li>Green vomit (bile) or projectile vomiting</li>
                <li>Refusing multiple feeds in a row</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold">Call Within 24 Hours</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Fewer than 6 wet diapers/day after day 5</li>
              <li>No bowel movement 48+ hours (if breastfed, can go longer if soft)</li>
              <li>Umbilical cord: spreading redness, foul odor, pus</li>
              <li>Circumcision: persistent bleeding, increasing redness</li>
              <li>Jaundice spreading to arms/legs or baby &lt;24 hours old</li>
              <li>Rash with fever or blisters</li>
              <li>Eye discharge (blocked tear duct common, but check if persistent)</li>
            </ul>
          </section>

          <section id="milestones" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Newborn Development Milestones (0–3 Months)</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Age</th>
                    <th className="p-3 text-left font-medium">Motor</th>
                    <th className="p-3 text-left font-medium">Social/Language</th>
                    <th className="p-3 text-left font-medium">Cognitive</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">0–1 month</td>
                    <td className="p-3">Reflexive movements; lifts head briefly prone</td>
                    <td className="p-3">Eye contact 8–12"; calms to voice</td>
                    <td className="p-3">Tracks high-contrast objects</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">2 months</td>
                    <td className="p-3">Head control improving; pushes up on forearms</td>
                    <td className="p-3"><strong>Social smile</strong>; coos; turns to sound</td>
                    <td className="p-3">Follows objects; recognizes faces</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">3 months</td>
                    <td className="p-3">Holds head steady; opens/closes hands; bats at toys</td>
                    <td className="p-3">Laughs; squeals; "conversation" back-and-forth</td>
                    <td className="p-3">Anticipates routines; reaches for objects</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-semibold text-amber-800 mb-2">⚠️ Red Flags: Discuss with Pediatrician</h3>
              <ul className="list-disc space-y-1 pl-6 text-sm text-amber-700">
                <li>No social smile by 8 weeks</li>
                <li>Doesn't track objects or respond to loud sounds by 2 months</li>
                <li>Persistent fist-clenching, no head control by 3 months</li>
                <li>Significant asymmetry in movement or tone</li>
                <li>Loss of previously acquired skills</li>
              </ul>
            </div>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">How often should I bathe my newborn?</dt>
                <dd className="mt-2">2–3 times per week is plenty. Daily baths can dry out delicate skin. Sponge baths until the umbilical cord falls off (1–3 weeks), then tub baths are fine.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">When can I take my newborn out in public?</dt>
                <dd className="mt-2">Fresh air walks are fine immediately. Avoid crowded indoor spaces (malls, airplanes) for the first 6–8 weeks, especially during cold/flu season. Anyone holding baby should wash hands first.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">My baby has hiccups constantly. Is this normal?</dt>
                <dd className="mt-2">Yes! Hiccups are very common in newborns and don't bother them. They're caused by diaphragm spasms from an immature nervous system. No treatment needed—they'll outgrow it.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">When does the soft spot (fontanelle) close?</dt>
                <dd className="mt-2">The posterior (back) fontanelle closes by 2–3 months. The anterior (top) fontanelle closes between 9–18 months. It should feel soft and flat—sunken = dehydration, bulging = emergency.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">How do I know if my baby is eating enough?</dt>
                <dd className="mt-2">6+ heavy wet diapers/day after day 5, regular bowel movements, content after feeds, gaining weight appropriately (pediatrician tracks at visits). Weight checks are the gold standard.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Should I wake my newborn to eat?</dt>
                <dd className="mt-2">Yes, for the first 2 weeks (until back to birth weight), wake every 3 hours day/4 hours night if not waking on their own. After that, let them wake naturally unless doctor advises otherwise.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">What's the white coating on my baby's tongue?</dt>
                <dd className="mt-2">If it wipes off easily, it's likely milk residue. If it doesn't wipe off and looks like cottage cheese, it could be thrush (yeast)—call your pediatrician for antifungal treatment.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/newborn-sleep" className="text-primary hover:underline">Newborn Sleep Guide</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/starting-solids-guide" className="text-primary hover:underline">Starting Solids Guide</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/newborn-essentials-checklist" className="text-primary hover:underline">Newborn Essentials Checklist</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/baby-milestones-by-month" className="text-primary hover:underline">Baby Milestones by Month</a>
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