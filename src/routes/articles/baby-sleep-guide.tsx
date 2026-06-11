import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/baby-sleep-guide")({
  head: () => ({
    meta: [
      { title: "Baby Sleep Guide: Complete Guide from Newborn to Toddler | ChildBloom" },
      {
        name: "description",
        content:
          "Complete baby sleep guide covering newborn through toddler years: sleep science, schedules, training methods, regressions, and solutions for common sleep problems. Evidence-based advice.",
      },
      {
        property: "og:title",
        content: "Baby Sleep Guide: Complete Guide from Newborn to Toddler | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "Complete baby sleep guide covering newborn through toddler years: sleep science, schedules, training methods, regressions, and solutions for common sleep problems.",
      },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/baby-sleep-guide" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Baby Sleep Guide: Complete Guide from Newborn to Toddler",
          description:
            "Complete baby sleep guide covering newborn through toddler years: sleep science, schedules, training methods, regressions, and solutions for common sleep problems.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/baby-sleep-guide" },
          datePublished: "2026-01-20",
          dateModified: "2026-01-20",
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "https://childbloom.site" },
            {
              "@type": "ListItem",
              position: 2,
              name: "Articles",
              item: "https://childbloom.site/articles",
            },
            {
              "@type": "ListItem",
              position: 3,
              name: "Baby Sleep Guide",
              item: "https://childbloom.site/articles/baby-sleep-guide",
            },
          ],
        }),
      },
    ],
  }),
  component: BabySleepGuideArticle,
});

function BabySleepGuideArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Child Health
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Baby Sleep Guide: Complete Guide from Newborn to Toddler
            </h1>
            <p className="text-sm text-muted-foreground">
              25 min read • Published January 20, 2026 • Medically reviewed by Dr. Emma Lane, MD
            </p>
          </div>

          <nav
            className="rounded-2xl border border-border bg-muted p-5 text-sm"
            aria-label="Table of contents"
          >
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li>
                <a href="#sleep-science" className="text-primary hover:underline">
                  Sleep Science Basics
                </a>
              </li>
              <li>
                <a href="#newborn-sleep" className="text-primary hover:underline">
                  Newborn Sleep (0–3 Months)
                </a>
              </li>
              <li>
                <a href="#4-6-month-sleep" className="text-primary hover:underline">
                  4–6 Month Sleep Changes
                </a>
              </li>
              <li>
                <a href="#6-12-month-sleep" className="text-primary hover:underline">
                  6–12 Month Sleep Patterns
                </a>
              </li>
              <li>
                <a href="#toddler-sleep" className="text-primary hover:underline">
                  Toddler Sleep (1–3 Years)
                </a>
              </li>
              <li>
                <a href="#sleep-training" className="text-primary hover:underline">
                  Sleep Training Methods Overview
                </a>
              </li>
              <li>
                <a href="#common-problems" className="text-primary hover:underline">
                  Common Sleep Problems & Solutions
                </a>
              </li>
              <li>
                <a href="#safe-sleep" className="text-primary hover:underline">
                  Safe Sleep Guidelines
                </a>
              </li>
              <li>
                <a href="#nap-transitions" className="text-primary hover:underline">
                  Nap Transitions
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          <section id="sleep-science" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Sleep Science Basics</h2>
            <p>
              Understanding how sleep works helps you set realistic expectations and make informed
              choices. Sleep isn't a luxury—it's a biological necessity for brain development,
              growth, immune function, and emotional regulation.
            </p>

            <h3 className="text-xl font-semibold">Sleep Architecture</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Newborns:</strong> 50% active REM sleep (vs. 20% adults), short cycles
                (20–50 min)
              </li>
              <li>
                <strong>3–6 months:</strong> Cycles lengthen to 60–90 min; more deep NREM sleep
                emerges
              </li>
              <li>
                <strong>6+ months:</strong> Adult-like cycles (90 min); 4–6 cycles per night
              </li>
              <li>
                <strong>Brief wakings</strong> between cycles are NORMAL—adults have them too but
                don't remember
              </li>
            </ul>

            <h3 className="text-xl font-semibold">Two Sleep Drivers</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Sleep Pressure (Homeostatic):</strong> Builds the longer you're awake;
                adenosine accumulates
              </li>
              <li>
                <strong>Circadian Rhythm:</strong> Internal 24-hour clock regulated by light/dark,
                melatonin, cortisol
              </li>
              <li>
                <strong>Newborns:</strong> No circadian rhythm yet—develops 6–12 weeks with light
                exposure
              </li>
            </ul>

            <h3 className="text-xl font-semibold">Sleep Needs by Age (Total in 24 Hours)</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Age</th>
                    <th className="p-3 text-left font-medium">Total Sleep</th>
                    <th className="p-3 text-left font-medium">Night Sleep</th>
                    <th className="p-3 text-left font-medium">Naps</th>
                    <th className="p-3 text-left font-medium">Wake Windows</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">0–1 month</td>
                    <td className="p-3">14–17 hrs</td>
                    <td className="p-3">8–9 hrs (fragmented)</td>
                    <td className="p-3">4–6 naps</td>
                    <td className="p-3">45–60 min</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">1–3 months</td>
                    <td className="p-3">14–16 hrs</td>
                    <td className="p-3">9–10 hrs</td>
                    <td className="p-3">3–5 naps</td>
                    <td className="p-3">60–90 min</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">3–6 months</td>
                    <td className="p-3">12–15 hrs</td>
                    <td className="p-3">10–11 hrs</td>
                    <td className="p-3">3–4 naps</td>
                    <td className="p-3">1.5–2.5 hrs</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">6–12 months</td>
                    <td className="p-3">12–14 hrs</td>
                    <td className="p-3">10–12 hrs</td>
                    <td className="p-3">2–3 naps</td>
                    <td className="p-3">2–3.5 hrs</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">12–18 months</td>
                    <td className="p-3">11–14 hrs</td>
                    <td className="p-3">10–12 hrs</td>
                    <td className="p-3">1–2 naps</td>
                    <td className="p-3">3–4 hrs</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">18–24 months</td>
                    <td className="p-3">11–14 hrs</td>
                    <td className="p-3">10–12 hrs</td>
                    <td className="p-3">1 nap</td>
                    <td className="p-3">4.5–5.5 hrs</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">2–3 years</td>
                    <td className="p-3">10–13 hrs</td>
                    <td className="p-3">10–12 hrs</td>
                    <td className="p-3">1 nap (most)</td>
                    <td className="p-3">5–6 hrs</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">3–5 years</td>
                    <td className="p-3">10–13 hrs</td>
                    <td className="p-3">10–12 hrs</td>
                    <td className="p-3">0–1 nap</td>
                    <td className="p-3">N/A</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-xs text-muted-foreground">
              *Ranges are wide—individual needs vary. Watch your child's mood/behavior, not just the
              clock.
            </p>
          </section>

          <section id="newborn-sleep" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Newborn Sleep (0–3 Months)</h2>

            <h3 className="text-xl font-semibold">What to Expect</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>No day/night distinction first 6–8 weeks</li>
              <li>Frequent wakings: every 2–3 hours to eat (tiny stomach)</li>
              <li>Active sleep: grunting, twitching, brief cries—baby is ASLEEP</li>
              <li>Short naps: 20 min–2 hours, highly variable</li>
              <li>"Witching hour" fussiness 5–11 PM (peaks 6–8 weeks)</li>
            </ul>

            <h3 className="text-xl font-semibold">Building Healthy Foundations</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Daylight exposure:</strong> Bright light mornings/afternoons; dim evenings
              </li>
              <li>
                <strong>Wake windows:</strong> Watch for cues (yawning, staring, red eyebrows)—don't
                overtire
              </li>
              <li>
                <strong>Eat-play-sleep:</strong> Feed on wake-up, then play, then sleep (breaks
                feed-to-sleep association)
              </li>
              <li>
                <strong>Bedtime routine:</strong> Simple, consistent (diaper, pajamas, song,
                crib)—even if bedtime is late
              </li>
              <li>
                <strong>Swaddle:</strong> Arms-in for Moro reflex; stop at first roll signs (8–12
                weeks)
              </li>
              <li>
                <strong>White noise:</strong> 50–60 dB (shower volume); continuous all night
              </li>
            </ul>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-semibold text-amber-800 mb-2">⚠️ Newborn Sleep Myths</h3>
              <ul className="list-disc space-y-1 pl-6 text-sm text-amber-700">
                <li>
                  "Keep them awake all day so they sleep at night" → BACKFIRES (overtired = worse
                  sleep)
                </li>
                <li>
                  "Rice cereal in bottle helps sleep" → Choking risk, no evidence, AAP against
                </li>
                <li>"Formula-fed babies sleep better" → Temporary, not worth switching for</li>
                <li>
                  "Sleep training from birth" → Developmentally inappropriate; responsive care
                  builds trust
                </li>
              </ul>
            </div>

            <p className="text-sm text-muted-foreground">
              Detailed guide:{" "}
              <a href="/articles/newborn-sleep" className="text-primary hover:underline">
                Newborn Sleep: A Calm, Evidence-Based Guide for the First 12 Weeks
              </a>
            </p>
          </section>

          <section
            id="4-6-month-sleep"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">
              4–6 Month Sleep Changes: The "4-Month Regression"
            </h2>

            <h3 className="text-xl font-semibold">What's Happening</h3>
            <p>
              This isn't a regression—it's a PROGRESSION. Baby's sleep architecture permanently
              changes to adult-like cycles.
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Cycles mature: 20–50 min → 90 min cycles with distinct stages</li>
              <li>More time in light sleep = more opportunities to fully wake between cycles</li>
              <li>
                If baby needs help falling asleep (rock, feed, bounce), they'll need it EVERY cycle
              </li>
              <li>Circadian rhythm now established—melatonin rises at night</li>
              <li>Object permanence emerging—knows you exist when gone</li>
            </ul>

            <h3 className="text-xl font-semibold">Navigating This Transition</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Practice independent sleep:</strong> Put down drowsy but awake for 1 nap/day
              </li>
              <li>
                <strong>Consistent routine:</strong> Same steps, same order, same sleep space
              </li>
              <li>
                <strong>Dark room:</strong> Blackout curtains—light suppresses melatonin
              </li>
              <li>
                <strong>Adjust schedule:</strong> 3 naps, ~2–2.5 hr wake windows
              </li>
              <li>
                <strong>Don't rush in:</strong> Pause 1–2 min at night wakings—baby may resettle
              </li>
            </ul>

            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-2">The "Drowsy But Awake" Sweet Spot</h3>
              <p className="text-sm text-muted-foreground">
                Scale of 1–10 (1 = wide awake, 10 = deep sleep): aim for 6–7. Eyes heavy, body
                relaxed, but aware of surroundings. If they cry immediately, pick up, calm, try
                again or help to sleep.
              </p>
            </div>
          </section>

          <section
            id="6-12-month-sleep"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">6–12 Month Sleep Patterns</h2>

            <h3 className="text-xl font-semibold">Typical Schedule (6–9 Months)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>3 naps → transitioning to 2 naps around 7–9 months</li>
              <li>Wake windows: 2.5–3.5 hours</li>
              <li>Night: 10–12 hours (may have 0–1 feed)</li>
              <li>Sample: Wake 7 AM, Nap 9:30–11, Nap 1:30–3, Catnap 5–5:30, Bed 7:30 PM</li>
            </ul>

            <h3 className="text-xl font-semibold">Typical Schedule (9–12 Months)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>2 solid naps (1–2 hours each)</li>
              <li>Wake windows: 3–4 hours</li>
              <li>Night: 11–12 hours, usually no feeds</li>
              <li>Sample: Wake 7 AM, Nap 9:30–11, Nap 2–3:30, Bed 7:30 PM</li>
            </ul>

            <h3 className="text-xl font-semibold">Common Disruptors This Age</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Separation anxiety:</strong> Peaks 8–10 months; bedtime resistance, night
                wakings calling for you
              </li>
              <li>
                <strong>Milestones:</strong> Crawling, pulling up, walking—practice in crib at
                night!
              </li>
              <li>
                <strong>Teething:</strong> Can disrupt but usually not the sole cause of chronic
                wakings
              </li>
              <li>
                <strong>Solid food transition:</strong> Hunger if not eating enough daytime calories
              </li>
              <li>
                <strong>Nap transitions:</strong> 3→2 nap transition causes temporary overtiredness
              </li>
            </ul>
          </section>

          <section id="toddler-sleep" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Toddler Sleep (1–3 Years)</h2>

            <h3 className="text-xl font-semibold">12–18 Months: The 1-Nap Transition</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Signs: Refusing 2nd nap, short naps, bedtime battles, early waking</li>
              <li>Transition gradually: Push morning nap later by 15 min every few days</li>
              <li>Target: Single midday nap 12–1 PM, 2–3 hours</li>
              <li>Early bedtime (6:30–7 PM) during transition prevents overtiredness</li>
            </ul>

            <h3 className="text-xl font-semibold">18 Months–3 Years: Independence & Boundaries</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Stalling tactics:</strong> "One more book," "water," "potty," "hug"
              </li>
              <li>
                <strong>Fears:</strong> Dark, monsters, separation—validate, don't dismiss
              </li>
              <li>
                <strong>Nightmares vs. night terrors:</strong> Nightmares = REM, recall; terrors =
                NREM, no recall, don't wake
              </li>
              <li>
                <strong>Crib to bed:</strong> Wait until 3+ years if possible; climbing out = safety
                issue
              </li>
              <li>
                <strong>Early rising:</strong> Light exposure, hunger, habit—ok-to-wake clock helps
              </li>
            </ul>

            <h3 className="text-xl font-semibold">Toddler Sleep Schedule</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Age</th>
                    <th className="p-3 text-left font-medium">Wake</th>
                    <th className="p-3 text-left font-medium">Nap</th>
                    <th className="p-3 text-left font-medium">Bedtime</th>
                    <th className="p-3 text-left font-medium">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">12–18 mo</td>
                    <td className="p-3">6:30–7:30 AM</td>
                    <td className="p-3">12–1 PM (2–3 hrs)</td>
                    <td className="p-3">7–8 PM</td>
                    <td className="p-3">11–14 hrs</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">18–24 mo</td>
                    <td className="p-3">6:30–7:30 AM</td>
                    <td className="p-3">12–1 PM (2–3 hrs)</td>
                    <td className="p-3">7–8 PM</td>
                    <td className="p-3">11–14 hrs</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">2–3 yr</td>
                    <td className="p-3">6:30–7:30 AM</td>
                    <td className="p-3">1–2 PM (1.5–2.5 hrs)</td>
                    <td className="p-3">7–8:30 PM</td>
                    <td className="p-3">10–13 hrs</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section
            id="sleep-training"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Sleep Training Methods Overview</h2>
            <p>
              Sleep training = teaching independent sleep skills. No single "best" method—choose
              what aligns with your parenting style and your child's temperament.{" "}
              <strong>Consistency matters more than method.</strong>
            </p>

            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-3">Prerequisites (Do These First)</h3>
              <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
                <li>Age-appropriate schedule (not overtired/undertired)</li>
                <li>Optimal sleep environment (dark, white noise, cool 68–72°F)</li>
                <li>Consistent bedtime routine (20–30 min, same order)</li>
                <li>Put down AWAKE (not drowsy) for the method to work</li>
                <li>Both parents/caregivers on board</li>
                <li>Clear 2-week window with minimal disruptions</li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold">Method Comparison</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Method</th>
                    <th className="p-3 text-left font-medium">Approach</th>
                    <th className="p-3 text-left font-medium">Typical Duration</th>
                    <th className="p-3 text-left font-medium">Crying</th>
                    <th className="p-3 text-left font-medium">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Extinction (CIO)</td>
                    <td className="p-3">Put down awake, leave, don't return until morning</td>
                    <td className="p-3">3–5 nights</td>
                    <td className="p-3">High initially</td>
                    <td className="p-3">Parents who need quick results; easy-going babies</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Ferber (Check-and-Console)</td>
                    <td className="p-3">Timed checks (3/5/10 min) with brief reassurance</td>
                    <td className="p-3">5–10 nights</td>
                    <td className="p-3">Moderate</td>
                    <td className="p-3">Most families; babies who escalate with checks</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Chair Method</td>
                    <td className="p-3">Sit by crib, gradually move chair farther each night</td>
                    <td className="p-3">2–4 weeks</td>
                    <td className="p-3">Low–moderate</td>
                    <td className="p-3">Anxious babies; parents who can't leave</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Pick Up/Put Down</td>
                    <td className="p-3">Pick up when crying, put down when calm, repeat</td>
                    <td className="p-3">2–6 weeks</td>
                    <td className="p-3">Variable</td>
                    <td className="p-3">Younger babies (4–6 mo); sensitive temperaments</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Fading/Camping Out</td>
                    <td className="p-3">Gradually reduce presence/support over weeks</td>
                    <td className="p-3">3–8 weeks</td>
                    <td className="p-3">Low</td>
                    <td className="p-3">Gentle approach; co-sleeping transition</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold">Night Weaning (If Desired)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>6+ months:</strong> Most can go 11–12 hours without food if eating well
                daytime
              </li>
              <li>
                <strong>Gradual:</strong> Reduce ounces/minutes every 2–3 nights
              </li>
              <li>
                <strong>Cold turkey:</strong> Offer water/comfort instead; expect 3–5 tough nights
              </li>
              <li>
                <strong>Dream feed:</strong> Optional 10–11 PM feed to shift calories earlier
              </li>
              <li>
                <strong>Consult pediatrician</strong> if: &lt;10th percentile weight, medical
                issues, &lt;6 months
              </li>
            </ul>
          </section>

          <section
            id="common-problems"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Common Sleep Problems & Solutions</h2>

            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">Short Naps (30–45 min)</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Cause:</strong> Can't connect sleep cycles. <strong>Fix:</strong> Dark
                  room, white noise, wait 10–15 min before getting up, extend wake window slightly,
                  ensure not overtired.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">Early Morning Waking (&lt;6 AM)</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Causes:</strong> Light leak, too early bedtime, too much day sleep,
                  hunger, habit. <strong>Fix:</strong> Blackout curtains, white noise, adjust
                  bedtime 15 min later, cap naps, ok-to-wake clock (2.5+ yr).
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">Bedtime Battles</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Causes:</strong> Overtired, undertired, testing boundaries, fear of
                  missing out. <strong>Fix:</strong> Visual routine chart, 2-choice autonomy ("red
                  or blue pajamas?"), consistent boundaries, earlier bedtime if overtired.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">Night Wakings (Multiple)</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Causes:</strong> Sleep associations (feed/rock to sleep), schedule off,
                  milestone practice, medical (reflux, apnea, allergies). <strong>Fix:</strong>{" "}
                  Independent sleep at bedtime first, then night wakings often resolve. Rule out
                  medical.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">Sleep Regressions</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Common ages:</strong> 4 mo, 8–10 mo, 12 mo, 18 mo, 2 yr.{" "}
                  <strong>Cause:</strong> Developmental leaps. <strong>Fix:</strong> Stay
                  consistent, don't create new habits, offer extra comfort but maintain boundaries,
                  lasts 2–6 weeks.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">Split Nights (Awake 1–3 AM for hours)</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Cause:</strong> Too much day sleep, too early bedtime, or circadian
                  misalignment. <strong>Fix:</strong> Cap naps, push bedtime later 15 min
                  increments, morning light exposure, consistent wake time.
                </p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">Snoring/Mouth Breathing</h3>
                <p className="text-sm text-muted-foreground mt-2">
                  <strong>Occasional:</strong> Normal with colds. <strong>Chronic:</strong> Enlarged
                  tonsils/adenoids, allergies, sleep apnea. <strong>Action:</strong> Record video,
                  show pediatrician—may need ENT referral.
                </p>
              </div>
            </div>
          </section>

          <section id="safe-sleep" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Safe Sleep Guidelines (AAP)</h2>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-semibold text-red-800 mb-3">
                🛑 Non-Negotiable Rules (Every Sleep)
              </h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-red-700">
                <li>
                  <strong>Back to sleep</strong> for every sleep—naps and nights, until 1 year
                </li>
                <li>
                  <strong>Firm, flat, non-inclined surface</strong> in safety-approved
                  crib/bassinet/play yard
                </li>
                <li>
                  <strong>Room-share without bed-sharing</strong> for at least 6 months (ideally 1
                  year)
                </li>
                <li>
                  <strong>
                    No loose bedding, bumpers, pillows, stuffed animals, positioners, or weighted
                    products
                  </strong>
                </li>
                <li>
                  <strong>Swaddle safely:</strong> Arms in, hips loose, stop at first roll signs
                  (8–12 weeks)
                </li>
                <li>
                  <strong>Pacifier at sleep onset</strong> associated with reduced SIDS risk
                </li>
                <li>
                  <strong>No smoke exposure</strong> — major SIDS risk factor (prenatal and
                  postnatal)
                </li>
                <li>
                  <strong>Breastfeeding</strong> associated with reduced SIDS risk
                </li>
                <li>
                  <strong>Avoid overheating:</strong> Dress baby in one layer more than you; no hats
                  indoors
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold">Products to Avoid</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Inclined sleepers (Rock 'n Play, DockATot for sleep)</li>
              <li>
                In-bed sleepers (Snuggle Nest, bedside co-sleepers without firm separate surface)
              </li>
              <li>Weighted blankets/swaddles/sleep sacks</li>
              <li>Crib bumpers (mesh or padded)</li>
              <li>Positioners/wedges</li>
              <li>Home cardiorespiratory monitors (not medical grade, false reassurance)</li>
            </ul>

            <h3 className="text-xl font-semibold">When Baby Rolls</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Continue placing on back to start sleep</li>
              <li>If they roll to stomach independently, it's OK to leave them</li>
              <li>Stop swaddling immediately at first roll attempt</li>
              <li>Transition to sleep sack with arms out</li>
            </ul>
          </section>

          <section
            id="nap-transitions"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Nap Transitions: When & How</h2>

            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Transition</th>
                    <th className="p-3 text-left font-medium">Typical Age</th>
                    <th className="p-3 text-left font-medium">Signs</th>
                    <th className="p-3 text-left font-medium">Approach</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">4 → 3 naps</td>
                    <td className="p-3">3–5 months</td>
                    <td className="p-3">4th nap too late/short, bedtime pushed late</td>
                    <td className="p-3">Drop catnap; early bedtime</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">3 → 2 naps</td>
                    <td className="p-3">7–9 months</td>
                    <td className="p-3">Refusing 3rd nap, short naps, early waking</td>
                    <td className="p-3">Push naps later gradually; early bedtime</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">2 → 1 nap</td>
                    <td className="p-3">12–18 months</td>
                    <td className="p-3">Refusing 2nd nap, split nights, early waking</td>
                    <td className="p-3">Push morning nap later 15 min/day; early bedtime</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">1 → 0 naps</td>
                    <td className="p-3">3–5 years</td>
                    <td className="p-3">Nap too late/long, bedtime battles, night wakings</td>
                    <td className="p-3">Quiet time instead; move bedtime earlier</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold">Transition Tips</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>Expect 2–4 weeks</strong> of adjustment—consistency is key
              </li>
              <li>
                <strong>Early bedtime</strong> (30–60 min earlier) prevents overtired spiral
              </li>
              <li>
                <strong>Quiet time</strong> replaces nap: books, puzzles, audio in dim room
              </li>
              <li>
                <strong>Don't force</strong>—if they fall asleep in car/stroller, let it happen
              </li>
              <li>
                <strong>Weekend vs. weekday</strong>—keep consistent if possible
              </li>
            </ul>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">
                  When can my baby sleep through the night without eating?
                </dt>
                <dd className="mt-2">
                  Most babies can go 11–12 hours by 6 months if eating well during the day. Some
                  need 1 feed until 9 months. Formula-fed babies often drop feeds earlier. Follow
                  your pediatrician's guidance based on growth.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  Is it okay to nurse/rock/bounce my baby to sleep?
                </dt>
                <dd className="mt-2">
                  If it works for your family and you're getting sleep, it's fine! Sleep training is
                  optional. If it's unsustainable (waking every cycle needing the same help), that's
                  when independent sleep skills help. No judgment either way.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  My baby only naps 30 minutes. How do I extend naps?
                </dt>
                <dd className="mt-2">
                  Short naps = can't connect cycles. Try: pitch black room, loud white noise, wait
                  10–15 min before getting them (they may resettle), ensure age-appropriate wake
                  window, check for hunger. Some babies are just short-nappers until 6–9 months.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  Should I wake my baby from naps to protect bedtime?
                </dt>
                <dd className="mt-2">
                  Yes, if naps are pushing bedtime past 8–8:30 PM or last nap ends after 5 PM. Cap
                  last nap to preserve bedtime. Exception: sick baby—let them sleep.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  What about the "cry it out" method? Is it harmful?
                </dt>
                <dd className="mt-2">
                  Research shows no long-term harm to attachment or emotional development when done
                  appropriately (age 6+ months, with prerequisites met). It's stressful short-term.
                  Choose a method you can be consistent with—consistency &gt; method.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  My toddler climbs out of the crib. Now what?
                </dt>
                <dd className="mt-2">
                  Lower mattress to floor level if possible. Sleep sack backwards (zipper back) can
                  hinder climbing. If persistent and unsafe, transition to toddler bed with
                  childproofed room and door gate. Ideally wait until 3+ years for bed transition.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  How do I handle daylight saving time changes?
                </dt>
                <dd className="mt-2">
                  Gradual: shift schedule 15 min/day for 4 days before. Cold turkey: switch to new
                  clock immediately, expect 3–5 days of adjustment. Morning light exposure helps
                  reset circadian rhythm fastest.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  When should I call the doctor about sleep?
                </dt>
                <dd className="mt-2">
                  Snoring/gasping/choking in sleep; pauses in breathing; excessive daytime
                  sleepiness; sleep issues affecting growth/behavior; chronic insomnia despite
                  consistent routines; suspected reflux/apnea/allergies disrupting sleep.
                </dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/newborn-sleep" className="text-primary hover:underline">
                Newborn Sleep Guide
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/sleep-training-methods" className="text-primary hover:underline">
                Sleep Training Methods
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/toddler-sleep-problems" className="text-primary hover:underline">
                Toddler Sleep Problems
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/best-baby-sleep-products" className="text-primary hover:underline">
                Best Baby Sleep Products
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Medical Disclaimer:</strong> This article is for educational purposes only and
              does not constitute medical advice. Always consult your pediatrician or healthcare
              provider for concerns about your child's sleep.
            </p>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}
