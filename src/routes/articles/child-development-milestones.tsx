import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/child-development-milestones")({
  head: () => ({
    meta: [
      { title: "Child Development Milestones: Complete Month-by-Month Guide | ChildBloom" },
      {
        name: "description",
        content:
          "Track your child's development from birth to 5 years with our comprehensive milestone guide. Motor, language, social, and cognitive milestones plus red flags and when to seek help.",
      },
      {
        property: "og:title",
        content: "Child Development Milestones: Complete Month-by-Month Guide | ChildBloom",
      },
      {
        property: "og:description",
        content:
          "Track your child's development from birth to 5 years with our comprehensive milestone guide. Motor, language, social, and cognitive milestones plus red flags.",
      },
      { property: "og:type", content: "article" },
      { property: "og:image", content: "https://childbloom.site/pinterest-pins/child-development-milestones.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: "https://childbloom.site/pinterest-pins/child-development-milestones.jpg" },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/articles/child-development-milestones" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Child Development Milestones: Complete Month-by-Month Guide",
          description:
            "Track your child's development from birth to 5 years with our comprehensive milestone guide. Motor, language, social, and cognitive milestones plus red flags.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/child-development-milestones" },
          datePublished: "2026-01-18",
          dateModified: "2026-01-18",
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
              name: "Child Development Milestones",
              item: "https://childbloom.site/articles/child-development-milestones",
            },
          ],
        }),
      },
    ],
  }),
  component: ChildDevelopmentMilestonesArticle,
});

function ChildDevelopmentMilestonesArticle() {
  return (
    <>
      <ReadingProgress />
      <main id="main-content" tabIndex={-1} className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
        <article className="space-y-8 rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
              Development
            </p>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Child Development Milestones: Complete Month-by-Month Guide
            </h1>
            <p className="text-sm text-muted-foreground">
              22 min read • Published January 18, 2026 • Medically reviewed by Dr. Emma Lane, MD
            </p>
          </div>

          <nav
            className="rounded-2xl border border-border bg-muted p-5 text-sm"
            aria-label="Table of contents"
          >
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li>
                <a href="#development-domains" className="text-primary hover:underline">
                  Understanding Development Domains
                </a>
              </li>
              <li>
                <a href="#0-3-months" className="text-primary hover:underline">
                  0–3 Months
                </a>
              </li>
              <li>
                <a href="#4-6-months" className="text-primary hover:underline">
                  4–6 Months
                </a>
              </li>
              <li>
                <a href="#7-9-months" className="text-primary hover:underline">
                  7–9 Months
                </a>
              </li>
              <li>
                <a href="#10-12-months" className="text-primary hover:underline">
                  10–12 Months
                </a>
              </li>
              <li>
                <a href="#12-18-months" className="text-primary hover:underline">
                  12–18 Months
                </a>
              </li>
              <li>
                <a href="#18-24-months" className="text-primary hover:underline">
                  18–24 Months
                </a>
              </li>
              <li>
                <a href="#2-3-years" className="text-primary hover:underline">
                  2–3 Years
                </a>
              </li>
              <li>
                <a href="#3-5-years" className="text-primary hover:underline">
                  3–5 Years
                </a>
              </li>
              <li>
                <a href="#red-flags" className="text-primary hover:underline">
                  Red Flags: When to Seek Evaluation
                </a>
              </li>
              <li>
                <a href="#supporting-development" className="text-primary hover:underline">
                  Supporting Development at Home
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary hover:underline">
                  Frequently Asked Questions
                </a>
              </li>
            </ol>
          </nav>

          <section
            id="development-domains"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Understanding Development Domains</h2>
            <p>
              Development isn't a single ladder—it's four interconnected domains that progress at
              their own pace. A child might walk early but talk later, or have advanced fine motor
              skills but struggle with social interaction. All are normal variations.
            </p>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg mb-2">🏃 Gross Motor</h3>
                <p className="text-sm text-muted-foreground">
                  Large movements: rolling, sitting, crawling, walking, running, jumping, climbing
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg mb-2">✍️ Fine Motor</h3>
                <p className="text-sm text-muted-foreground">
                  Small movements: grasping, pinching, stacking, drawing, self-feeding, buttoning
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg mb-2">🗣️ Language & Communication</h3>
                <p className="text-sm text-muted-foreground">
                  Receptive (understanding) and expressive (speaking): cooing, babbling, words,
                  sentences, conversation
                </p>
              </div>
              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg mb-2">🧠 Social-Emotional & Cognitive</h3>
                <p className="text-sm text-muted-foreground">
                  Attachment, empathy, play, problem-solving, memory, attention, self-awareness
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-2">Important Reminders</h3>
              <ul className="list-disc space-y-1 pl-6 text-sm text-muted-foreground">
                <li>
                  <strong>Range is normal:</strong> Milestones have wide windows (e.g., walking 9–18
                  months)
                </li>
                <li>
                  <strong>Prematurity adjustment:</strong> Correct for gestational age until 2 years
                  (subtract weeks early)
                </li>
                <li>
                  <strong>Progress over perfection:</strong> Look for trajectory, not exact dates
                </li>
                <li>
                  <strong>Clusters matter:</strong> Multiple delays in one domain warrant evaluation
                </li>
              </ul>
            </div>
          </section>

          <section id="0-3-months" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">0–3 Months: The Fourth Trimester</h2>

            <h3 className="text-xl font-semibold">Gross Motor</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Lifts head briefly during tummy time (by 1 month)</li>
              <li>Head control improving—holds head up 45° prone (by 2 months)</li>
              <li>Pushes up on forearms during tummy time (by 3 months)</li>
              <li>Kicks legs vigorously; brings hands to midline</li>
            </ul>

            <h3 className="text-xl font-semibold">Fine Motor</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Reflexive grasp (palmar grasp reflex)</li>
              <li>Opens hands more often (by 2 months)</li>
              <li>Bats at dangling objects (by 3 months)</li>
              <li>Brings hands to mouth intentionally</li>
            </ul>

            <h3 className="text-xl font-semibold">Language & Communication</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Makes eye contact; tracks faces (by 1 month)</li>
              <li>
                <strong>Social smile</strong> in response to caregiver (by 2 months) ★
              </li>
              <li>Coos, gurgles, vowel sounds "ah," "oh" (by 2 months)</li>
              <li>Turns head toward sound/voice (by 3 months)</li>
              <li>Distinct cries for different needs</li>
            </ul>

            <h3 className="text-xl font-semibold">Social-Emotional & Cognitive</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Calms when picked up/spoken to</li>
              <li>Recognizes primary caregiver's face, voice, smell</li>
              <li>Shows interest in high-contrast patterns</li>
              <li>Anticipates routines (rooting at sight of bottle/breast)</li>
            </ul>
          </section>

          <section id="4-6-months" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">4–6 Months: Exploring the World</h2>

            <h3 className="text-xl font-semibold">Gross Motor</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Rolls tummy-to-back (4–5 months), back-to-tummy (5–6 months)</li>
              <li>Sits with support, then tripod sit (hands on floor)</li>
              <li>Bears weight on legs when held upright</li>
              <li>Rocks on hands and knees (pre-crawling)</li>
            </ul>

            <h3 className="text-xl font-semibold">Fine Motor</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Reaches and grasps objects with whole hand (palmar grasp)</li>
              <li>Transfers objects hand-to-hand (by 6 months)</li>
              <li>Rakes small objects toward self</li>
              <li>Explores objects with mouth (primary sensory organ)</li>
            </ul>

            <h3 className="text-xl font-semibold">Language & Communication</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Babbles consonant-vowel combos: "ba-ba," "da-da," "ma-ma" (by 6 months)</li>
              <li>Responds to name (by 6 months) ★</li>
              <li>Makes sounds to get attention</li>
              <li>Expresses joy/displeasure vocally</li>
              <li>Understands "no" (pauses briefly)</li>
            </ul>

            <h3 className="text-xl font-semibold">Social-Emotional & Cognitive</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Laughs out loud; enjoys peek-a-boo</li>
              <li>Shows stranger anxiety (begins ~6 months)</li>
              <li>Explores cause-and-effect: drops toy, watches fall</li>
              <li>Recognizes familiar people vs. strangers</li>
              <li>Object permanence emerging: looks for partially hidden toy</li>
            </ul>
          </section>

          <section id="7-9-months" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">7–9 Months: On the Move</h2>

            <h3 className="text-xl font-semibold">Gross Motor</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Sits independently without support</li>
              <li>Crawls (traditional, army, bear, or scoots)—varies widely</li>
              <li>Pulls to stand on furniture</li>
              <li>Cruises along furniture</li>
              <li>May stand alone momentarily</li>
            </ul>

            <h3 className="text-xl font-semibold">Fine Motor</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Develops pincer grasp (thumb + forefinger) ★</li>
              <li>Bangs two objects together</li>
              <li>Pokes with index finger</li>
              <li>Self-feeds finger foods</li>
              <li>Turns pages of board book (multiple at once)</li>
            </ul>

            <h3 className="text-xl font-semibold">Language & Communication</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Babbles with varied intonation (conversational rhythm)</li>
              <li>Imitates sounds and gestures (waves "bye-bye," claps)</li>
              <li>Understands simple commands: "come here," "give me"</li>
              <li>Says "mama"/"dada" specifically (may not be consistent)</li>
              <li>Points to communicate (proto-declarative pointing) ★</li>
            </ul>

            <h3 className="text-xl font-semibold">Social-Emotional & Cognitive</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Strong attachment to primary caregivers</li>
              <li>Separation anxiety peaks</li>
              <li>Object permanence solid: finds fully hidden toy</li>
              <li>Imitates actions seen earlier (deferred imitation)</li>
              <li>Shows preferences for toys, people, foods</li>
            </ul>
          </section>

          <section id="10-12-months" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">10–12 Months: First Steps & Words</h2>

            <h3 className="text-xl font-semibold">Gross Motor</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Stands alone well</li>
              <li>
                <strong>First independent steps</strong> (9–15 months is normal range) ★
              </li>
              <li>Crawls up stairs</li>
              <li>Throws ball (flinging motion)</li>
            </ul>

            <h3 className="text-xl font-semibold">Fine Motor</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Refined pincer grasp—picks up tiny objects</li>
              <li>Puts objects in container, takes out</li>
              <li>Scribbles with crayon (palmar grasp)</li>
              <li>Feeds self with fingers efficiently</li>
              <li>Helps with dressing (pushes arm through sleeve)</li>
            </ul>

            <h3 className="text-xl font-semibold">Language & Communication</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>1–3 meaningful words</strong> (besides mama/dada) ★
              </li>
              <li>Understands 50+ words (receptive language leads expressive)</li>
              <li>Follows simple one-step commands</li>
              <li>Shakes head "no"; waves "bye-bye"</li>
              <li>Points to body parts when named</li>
            </ul>

            <h3 className="text-xl font-semibold">Social-Emotional & Cognitive</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Imitates household activities (pretend phone, sweeping)</li>
              <li>Shows affection (hugs, kisses)</li>
              <li>Experiences frustration with limits</li>
              <li>Object permanence fully established</li>
              <li>Begins symbolic play (feeds doll, drives car)</li>
            </ul>
          </section>

          <section id="12-18-months" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">12–18 Months: Toddler Explosion</h2>

            <h3 className="text-xl font-semibold">Gross Motor</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Walks well; starts running (stiff, wide-based)</li>
              <li>Climbs on furniture, stairs (with help)</li>
              <li>Kicks ball forward</li>
              <li>Squats to pick up toy without falling</li>
              <li>Carries large toy while walking</li>
            </ul>

            <h3 className="text-xl font-semibold">Fine Motor</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Stacks 2–4 blocks</li>
              <li>Turns single pages of board book</li>
              <li>Scribbles spontaneously (vertical/horizontal/circular)</li>
              <li>Uses spoon with spilling; drinks from open cup with help</li>
              <li>Builds tower of 2 cubes</li>
            </ul>

            <h3 className="text-xl font-semibold">Language & Communication</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>5–20+ words</strong> by 18 months ★
              </li>
              <li>Combines 2 words: "more milk," "mama up" (by 18 months)</li>
              <li>Points to pictures in books when named</li>
              <li>Follows 2-step commands: "get shoes and bring them"</li>
              <li>Names 3+ body parts</li>
              <li>Animal sounds: "moo," "woof"</li>
            </ul>

            <h3 className="text-xl font-semibold">Social-Emotional & Cognitive</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Parallel play (plays near, not with, other children)</li>
              <li>Asserts independence: "mine," "no," "me do"</li>
              <li>Tantrums begin (frustration + limited language)</li>
              <li>Imitates complex actions (pretend cooking, cleaning)</li>
              <li>Understands object functions (brush = hair, spoon = eat)</li>
            </ul>
          </section>

          <section id="18-24-months" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">18–24 Months: Language Leap</h2>

            <h3 className="text-xl font-semibold">Gross Motor</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Runs well; walks up/down stairs with hand held</li>
              <li>Jumps in place (both feet)</li>
              <li>Kicks ball with forward motion</li>
              <li>Throws ball overhand</li>
              <li>Stands on tiptoes</li>
            </ul>

            <h3 className="text-xl font-semibold">Fine Motor</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Stacks 6+ blocks</li>
              <li>Turns door knobs; unscrews lids</li>
              <li>Imitates vertical/horizontal lines, circles</li>
              <li>Feeds self with spoon/fork (less spilling)</li>
              <li>Helps undress (pulls off socks, shoes)</li>
            </ul>

            <h3 className="text-xl font-semibold">Language & Communication</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>50+ words</strong> by 24 months ★
              </li>
              <li>
                <strong>2-word phrases consistently</strong> ★
              </li>
              <li>Follows 2–3 step commands</li>
              <li>Names familiar objects in books</li>
              <li>Uses pronouns: "me," "mine," "you" (often incorrectly)</li>
              <li>50% intelligible to strangers</li>
            </ul>

            <h3 className="text-xl font-semibold">Social-Emotional & Cognitive</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Begins associative play (brief interaction with peers)</li>
              <li>Shows empathy: comforts crying peer</li>
              <li>Engages in simple pretend play sequences</li>
              <li>Sorts by shape/color (beginning)</li>
              <li>Understands "one," "two" (rote counting)</li>
              <li>Self-recognition in mirror</li>
            </ul>
          </section>

          <section id="2-3-years" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">2–3 Years: Preschool Foundations</h2>

            <h3 className="text-xl font-semibold">Gross Motor</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Runs, jumps, climbs confidently</li>
              <li>Pedals tricycle (by 3 years)</li>
              <li>Walks up/down stairs alternating feet</li>
              <li>Catches large ball with arms</li>
              <li>Balances on one foot briefly (3 seconds by 3 years)</li>
            </ul>

            <h3 className="text-xl font-semibold">Fine Motor</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Copies circle, cross; draws person with 2–4 parts</li>
              <li>Uses scissors (snips); turns pages one at a time</li>
              <li>Builds tower of 8+ blocks</li>
              <li>Dresses/undresses with help (buttons, zippers)</li>
              <li>Feeds self well with utensils</li>
            </ul>

            <h3 className="text-xl font-semibold">Language & Communication</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong>200–1000+ words</strong> by 3 years
              </li>
              <li>
                <strong>3–4 word sentences</strong>; asks "why?" constantly
              </li>
              <li>75% intelligible to strangers by 3 years</li>
              <li>Uses plurals, past tense, pronouns correctly (mostly)</li>
              <li>Tells simple stories; knows name, age, gender</li>
              <li>Follows 3-step commands</li>
            </ul>

            <h3 className="text-xl font-semibold">Social-Emotional & Cognitive</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Cooperative play; shares (with prompting)</li>
              <li>Imaginative play: complex scenarios, roles</li>
              <li>Shows concern for others' feelings</li>
              <li>Understands "same/different," "big/little"</li>
              <li>Counts 2–3 objects; sorts by color/shape</li>
              <li>Toilet training readiness signs (varies widely)</li>
            </ul>
          </section>

          <section id="3-5-years" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">3–5 Years: School Readiness</h2>

            <h3 className="text-xl font-semibold">Gross Motor (3–4 Years)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Hops on one foot; gallops; skips (by 5)</li>
              <li>Throws/catches bounced ball</li>
              <li>Rides tricycle/bike with training wheels</li>
              <li>Balances on one foot 5+ seconds</li>
            </ul>

            <h3 className="text-xl font-semibold">Gross Motor (4–5 Years)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Skips alternating feet</li>
              <li>Catches small ball with hands</li>
              <li>Rides two-wheel bike (many by 5–6)</li>
              <li>Jumps rope</li>
            </ul>

            <h3 className="text-xl font-semibold">Fine Motor (3–4 Years)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Draws person with 4–6 body parts</li>
              <li>Copies square, some letters</li>
              <li>Cuts on line with scissors</li>
              <li>Buttons/unbuttons; zips</li>
            </ul>

            <h3 className="text-xl font-semibold">Fine Motor (4–5 Years)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Draws person with 6+ parts; copies triangle</li>
              <li>Prints some letters/numbers; writes name</li>
              <li>Ties shoes (many by 5–6)</li>
              <li>Uses knife for spreading</li>
            </ul>

            <h3 className="text-xl font-semibold">Language & Communication (3–4 Years)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>1000+ words; complex sentences</li>
              <li>Tells stories with beginning/middle/end</li>
              <li>Understands prepositions: in, on, under, behind</li>
              <li>Answers "why" questions logically</li>
              <li>90%+ intelligible</li>
            </ul>

            <h3 className="text-xl font-semibold">Language & Communication (4–5 Years)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>2000+ words; adult-like grammar</li>
              <li>Defines words; uses future/past tense correctly</li>
              <li>Follows multi-step unrelated commands</li>
              <li>Rhymes; plays with language (jokes, riddles)</li>
              <li>Knows address, phone number</li>
            </ul>

            <h3 className="text-xl font-semibold">Social-Emotional & Cognitive (3–5 Years)</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Cooperative play with rules; negotiates</li>
              <li>Develops friendships; prefers certain peers</li>
              <li>Understands turn-taking, fair/unfair</li>
              <li>Counts 10+ objects; recognizes numerals</li>
              <li>Names colors, shapes; understands time concepts (yesterday, tomorrow)</li>
              <li>Begins phonological awareness (rhyming, initial sounds)</li>
              <li>Self-regulation improving; uses words for feelings</li>
            </ul>
          </section>

          <section id="red-flags" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Red Flags: When to Seek Evaluation</h2>
            <p>
              Trust your instincts. Early intervention makes a profound difference. Discuss with
              your pediatrician if you notice:
            </p>

            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <h3 className="font-semibold text-red-800 mb-3">By Age — Seek Evaluation If:</h3>
              <ul className="list-disc space-y-2 pl-6 text-sm text-red-700">
                <li>
                  <strong>2 months:</strong> No social smile, doesn't track objects, no response to
                  loud sounds
                </li>
                <li>
                  <strong>4 months:</strong> No cooing, doesn't bring hands to mouth, no head
                  control
                </li>
                <li>
                  <strong>6 months:</strong> No laughter, doesn't reach for objects, no rolling
                </li>
                <li>
                  <strong>9 months:</strong> No babbling, no back-and-forth gestures, no sitting
                  independently
                </li>
                <li>
                  <strong>12 months:</strong> No pointing, no words, no crawling/standing with
                  support
                </li>
                <li>
                  <strong>18 months:</strong> &lt;5 words, no pointing to show interest, doesn't
                  know familiar object functions
                </li>
                <li>
                  <strong>24 months:</strong> &lt;50 words, no 2-word phrases, doesn't follow simple
                  commands
                </li>
                <li>
                  <strong>3 years:</strong> &lt;200 words, 50% unintelligible, no pretend play, no
                  interest in peers
                </li>
                <li>
                  <strong>4 years:</strong> Can't tell simple story, doesn't follow 3-step commands,
                  unclear speech
                </li>
                <li>
                  <strong>Any age:</strong> Loss of previously acquired skills (regression) — urgent
                  evaluation needed
                </li>
              </ul>
            </div>

            <h3 className="text-xl font-semibold">Motor Red Flags</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Stiff or floppy muscle tone</li>
              <li>Uses one side of body predominantly (hand preference before 18 months)</li>
              <li>Not walking by 18 months</li>
              <li>Persistent toe-walking after 2 years</li>
              <li>Frequent falls, clumsiness interfering with play</li>
            </ul>

            <h3 className="text-xl font-semibold">
              Social-Communication Red Flags (Autism Screening)
            </h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Limited eye contact; doesn't share enjoyment (showing toys)</li>
              <li>No response to name by 12 months</li>
              <li>No pointing to show interest (proto-declarative) by 18 months</li>
              <li>Repetitive movements: hand-flapping, rocking, spinning objects</li>
              <li>Intense, narrow interests; lines up toys</li>
              <li>Delayed or absent pretend play</li>
              <li>Sensory sensitivities: covers ears, avoids textures, seeks movement</li>
            </ul>
          </section>

          <section
            id="supporting-development"
            className="space-y-6 text-sm leading-7 text-muted-foreground"
          >
            <h2 className="text-2xl font-semibold">Supporting Development at Home</h2>

            <h3 className="text-xl font-semibold">The Basics That Matter Most</h3>
            <ul className="list-disc space-y-3 pl-6">
              <li>
                <strong>Talk, talk, talk:</strong> Narrate your day, describe what you see, ask
                questions. Language input = language output.
              </li>
              <li>
                <strong>Read daily:</strong> 15 minutes from birth. Point to pictures, ask "where's
                the...?", let them turn pages.
              </li>
              <li>
                <strong>Play on the floor:</strong> Tummy time, then crawling, then building. Floor
                play builds core strength and motor planning.
              </li>
              <li>
                <strong>Follow their lead:</strong> Join their play, expand on it. If they're
                banging blocks, show stacking.
              </li>
              <li>
                <strong>Limit screens:</strong> AAP: no screens &lt;18 months (except video chat);
                18–24 months: high-quality only with caregiver; 2–5 years: 1 hour/day max.
              </li>
              <li>
                <strong>Safe exploration:</strong> Baby-proof so you can say "yes" more than "no."
              </li>
              <li>
                <strong>Routines build security:</strong> Predictable meals, naps, bedtime =
                cognitive bandwidth for learning.
              </li>
              <li>
                <strong>Social opportunities:</strong> Playgroups, library storytime, park—even
                parallel play builds skills.
              </li>
            </ul>

            <h3 className="text-xl font-semibold">Age-Appropriate Activities</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Age</th>
                    <th className="p-3 text-left font-medium">Motor</th>
                    <th className="p-3 text-left font-medium">Language</th>
                    <th className="p-3 text-left font-medium">Cognitive/Social</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">0–6 mo</td>
                    <td className="p-3">Tummy time, reach/grasp toys, supported sitting</td>
                    <td className="p-3">Talk, sing, read, respond to coos</td>
                    <td className="p-3">Face-to-face play, mirror, textures</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">6–12 mo</td>
                    <td className="p-3">Crawling tunnels, pull toys, stacking cups</td>
                    <td className="p-3">Name objects, pat-a-cake, wave bye-bye</td>
                    <td className="p-3">Peek-a-boo, object permanence games</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">12–24 mo</td>
                    <td className="p-3">Push toys, ball play, climbing, scribbling</td>
                    <td className="p-3">Expand words ("big red ball"), books daily</td>
                    <td className="p-3">Pretend play (phone, kitchen), shape sorters</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">2–3 yr</td>
                    <td className="p-3">Tricycle, playground, scissors, beads</td>
                    <td className="p-3">Ask questions, tell stories, rhyming games</td>
                    <td className="p-3">Sorting, counting, cooperative play</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">3–5 yr</td>
                    <td className="p-3">Bike, hopscotch, drawing, writing name</td>
                    <td className="p-3">Complex books, phonics games, jokes</td>
                    <td className="p-3">Board games, science experiments, friendships</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">
                  My child isn't walking at 15 months. Should I worry?
                </dt>
                <dd className="mt-2">
                  Walking anywhere from 9–18 months is normal. If your child is pulling to stand,
                  cruising, and has good muscle tone, they're likely fine. Mention it at the
                  15-month checkup for reassurance.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  My 2-year-old only says 20 words. Is this a delay?
                </dt>
                <dd className="mt-2">
                  50 words by 24 months is the typical benchmark. However, if they understand well,
                  follow commands, and use gestures, they may be a "late talker." Still, request a
                  speech evaluation—early intervention is most effective.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  Should I correct my toddler's grammar mistakes?
                </dt>
                <dd className="mt-2">
                  Model correct language instead: Child: "I goed!" You: "Yes, you WENT to the park!"
                  Direct correction can discourage talking. Recasting naturally is more effective.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  Is it normal for my 3-year-old to stutter?
                </dt>
                <dd className="mt-2">
                  Developmental stuttering (repetitions, prolongations) affects 5% of children 2–5
                  years. Most outgrow it in 6–12 months. Don't finish sentences; maintain eye
                  contact; slow your own speech. If persists &gt;6 months or has tension/struggle,
                  see an SLP.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  My child skips crawling and goes straight to walking. Is that bad?
                </dt>
                <dd className="mt-2">
                  Not necessarily! Some babies skip crawling. What matters is they develop
                  reciprocal movement patterns (crawling, climbing, cross-lateral activities) later.
                  Encourage tunnels, animal walks, and playground climbing.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  How much screen time is okay for my 18-month-old?
                </dt>
                <dd className="mt-2">
                  AAP recommends no screens (except video chat) under 18 months. 18–24 months: only
                  high-quality programming with you co-viewing. Real-world interaction builds brains
                  far better than any app.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  When should my child know colors/shapes/letters?
                </dt>
                <dd className="mt-2">
                  Colors: names 1–2 by 3 years, most by 4. Shapes: matches by 2, names by 3–4.
                  Letters: recognizes some (especially in name) by 4, most by 5. Play-based exposure
                  works best—no flashcards needed.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">
                  What if my child loses skills they had?
                </dt>
                <dd className="mt-2">
                  <strong>Regression at any age warrants immediate evaluation.</strong> Loss of
                  words, social skills, or motor abilities can signal neurological or developmental
                  conditions. Contact your pediatrician today.
                </dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/baby-milestones-by-month" className="text-primary hover:underline">
                Baby Milestones by Month
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/speech-development-guide" className="text-primary hover:underline">
                Speech Development Guide
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/best-educational-toys" className="text-primary hover:underline">
                Best Educational Toys
              </a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/newborn-care-guide" className="text-primary hover:underline">
                Newborn Care Guide
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Medical Disclaimer:</strong> This article is for educational purposes only and
              does not constitute medical advice. Always consult your pediatrician or healthcare
              provider for concerns about your child's development.
            </p>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}
