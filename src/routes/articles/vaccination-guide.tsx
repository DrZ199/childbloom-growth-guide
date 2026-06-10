import { createFileRoute } from "@tanstack/react-router";
import { ReadingProgress } from "@/components/content/reading-progress";
import { BackToTop } from "@/components/content/back-to-top";

export const Route = createFileRoute("/articles/vaccination-guide")({
  head: () => ({
    meta: [
      { title: "Childhood Vaccination Guide: Schedule, Safety & What to Expect | ChildBloom" },
      {
        name: "description",
        content: "Complete vaccination guide for parents: CDC schedule birth-18 years, vaccine safety, side effects, myths debunked, and how to prepare your child for shots. Evidence-based info from pediatric experts.",
      },
      { property: "og:title", content: "Childhood Vaccination Guide: Schedule, Safety & What to Expect | ChildBloom" },
      { property: "og:description", content: "Complete vaccination guide for parents: CDC schedule birth-18 years, vaccine safety, side effects, myths debunked, and how to prepare your child for shots." },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/articles/vaccination-guide" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: "Childhood Vaccination Guide: Schedule, Safety & What to Expect",
          description: "Complete vaccination guide for parents: CDC schedule birth-18 years, vaccine safety, side effects, myths debunked, and how to prepare your child for shots.",
          author: { "@type": "Person", name: "Dr. Emma Lane" },
          publisher: { "@type": "Organization", name: "ChildBloom" },
          mainEntityOfPage: { "@type": "WebPage", "@id": "/articles/vaccination-guide" },
          datePublished: "2026-01-19",
          dateModified: "2026-01-19",
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
            { "@type": "ListItem", position: 3, name: "Vaccination Guide", item: "https://childbloom.site/articles/vaccination-guide" },
          ],
        }),
      },
    ],
  }),
  component: VaccinationGuideArticle,
});

function VaccinationGuideArticle() {
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
              Childhood Vaccination Guide: Schedule, Safety & What to Expect
            </h1>
            <p className="text-sm text-muted-foreground">20 min read • Published January 19, 2026 • Medically reviewed by Dr. Emma Lane, MD</p>
          </div>

          <nav className="rounded-2xl border border-border bg-muted p-5 text-sm" aria-label="Table of contents">
            <h2 className="font-semibold mb-3">In This Guide</h2>
            <ol className="space-y-2">
              <li><a href="#how-vaccines-work" className="text-primary hover:underline">How Vaccines Work</a></li>
              <li><a href="#schedule" className="text-primary hover:underline">Recommended Schedule (Birth–18 Years)</a></li>
              <li><a href="#vaccine-details" className="text-primary hover:underline">Vaccine-by-Vaccine Breakdown</a></li>
              <li><a href="#safety" className="text-primary hover:underline">Vaccine Safety & Side Effects</a></li>
              <li><a href="#myths" className="text-primary hover:underline">Common Myths Debunked</a></li>
              <li><a href="#preparing" className="text-primary hover:underline">Preparing Your Child for Shots</a></li>
              <li><a href="#managing-side-effects" className="text-primary hover:underline">Managing Side Effects</a></li>
              <li><a href="#diseases" className="text-primary hover:underline">Vaccine-Preventable Diseases</a></li>
              <li><a href="#special-circumstances" className="text-primary hover:underline">Travel & Special Circumstances</a></li>
              <li><a href="#faq" className="text-primary hover:underline">Frequently Asked Questions</a></li>
            </ol>
          </nav>

          <section id="how-vaccines-work" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">How Vaccines Work</h2>
            <p>
              Vaccines are one of the most effective public health tools in history. They train your child's immune system 
              to recognize and fight specific germs without causing the actual disease.
            </p>
            
            <h3 className="text-xl font-semibold">The Science Simplified</h3>
            <ol className="list-decimal space-y-3 pl-6">
              <li><strong>Exposure:</strong> Vaccine introduces a harmless piece of a germ (protein, weakened/inactivated virus, or mRNA instructions)</li>
              <li><strong>Recognition:</strong> Immune system identifies it as foreign</li>
              <li><strong>Response:</strong> Body produces antibodies and memory cells</li>
              <li><strong>Memory:</strong> Memory cells "remember" the germ for years or decades</li>
              <li><strong>Protection:</strong> If exposed to the real germ later, immune system responds quickly—often before symptoms start</li>
            </ol>

            <h3 className="text-xl font-semibold">Types of Vaccines</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Type</th>
                    <th className="p-3 text-left font-medium">How It Works</th>
                    <th className="p-3 text-left font-medium">Examples</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Inactivated/Killed</td>
                    <td className="p-3">Dead germ; cannot replicate</td>
                    <td className="p-3">Polio (IPV), Hepatitis A, Flu (shot)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Live Attenuated</td>
                    <td className="p-3">Weakened live germ; replicates but doesn't cause disease</td>
                    <td className="p-3">MMR, Varicella, Rotavirus, Nasal Flu</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Subunit/Conjugate</td>
                    <td className="p-3">Specific piece (protein/sugar) of germ</td>
                    <td className="p-3">Hib, Hepatitis B, HPV, Pneumococcal, Meningococcal</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">mRNA</td>
                    <td className="p-3">Instructions for cells to make a protein piece</td>
                    <td className="p-3">COVID-19 (Pfizer/Moderna)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Toxoid</td>
                    <td className="p-3">Inactivated toxin produced by bacteria</td>
                    <td className="p-3">Diphtheria, Tetanus (in DTaP/Tdap)</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-border bg-muted p-5">
              <h3 className="font-semibold text-lg mb-2">Herd Immunity</h3>
              <p className="text-sm text-muted-foreground">
                When enough people are vaccinated, germs can't spread easily—protecting those who can't be vaccinated 
                (newborns, immunocompromised, allergic). Thresholds vary: measles needs ~95%, polio ~80%.
              </p>
            </div>
          </section>

          <section id="schedule" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Recommended Schedule (Birth–18 Years)</h2>
            <p>
              The CDC schedule is designed to protect children when they're most vulnerable. 
              Timing balances immune system readiness with disease risk. <strong>Following the schedule is the safest approach.</strong>
            </p>

            <h3 className="text-xl font-semibold">Birth–15 Months: Primary Series</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Age</th>
                    <th className="p-3 text-left font-medium">Vaccines</th>
                    <th className="p-3 text-left font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Birth</td>
                    <td className="p-3">HepB #1</td>
                    <td className="p-3">Within 24 hours of birth</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">1–2 months</td>
                    <td className="p-3">HepB #2</td>
                    <td className="p-3">1–2 months after #1</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">2 months</td>
                    <td className="p-3">DTaP #1, Hib #1, IPV #1, PCV #1, RV #1</td>
                    <td className="p-3">First "big" visit—5 vaccines (2-3 shots + oral)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">4 months</td>
                    <td className="p-3">DTaP #2, Hib #2, IPV #2, PCV #2, RV #2</td>
                    <td className="p-3">Same vaccines as 2 months</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">6 months</td>
                    <td className="p-3">DTaP #3, Hib #3*, IPV #3, PCV #3, RV #3*, Flu (annual)</td>
                    <td className="p-3">*Hib/RV #3 depends on brand; Flu starts at 6 mo (2 doses first year)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">6–18 months</td>
                    <td className="p-3">HepB #3, IPV #3</td>
                    <td className="p-3">Can be given at 6 or 18 month visit</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">12–15 months</td>
                    <td className="p-3">MMR #1, Varicella #1, Hib #4, PCV #4, HepA #1</td>
                    <td className="p-3">First live vaccines (MMR, Varicella); HepA 2-dose series</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">15–18 months</td>
                    <td className="p-3">DTaP #4</td>
                    <td className="p-3">Fourth dose of DTaP</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold">18 Months–6 Years: Boosters & Catch-Up</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Age</th>
                    <th className="p-3 text-left font-medium">Vaccines</th>
                    <th className="p-3 text-left font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">18 months–4 years</td>
                    <td className="p-3">HepA #2</td>
                    <td className="p-3">6 months after #1</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">4–6 years</td>
                    <td className="p-3">DTaP #5, IPV #4, MMR #2, Varicella #2</td>
                    <td className="p-3">Kindergarten boosters—often given at 4- or 5-year visit</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Annual</td>
                    <td className="p-3">Influenza (Flu)</td>
                    <td className="p-3">Every fall; 2 doses first year if &lt;9 years</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-xl font-semibold">7–18 Years: Adolescent Vaccines</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Age</th>
                    <th className="p-3 text-left font-medium">Vaccines</th>
                    <th className="p-3 text-left font-medium">Notes</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">11–12 years</td>
                    <td className="p-3">Tdap, HPV (2-dose), MenACWY #1</td>
                    <td className="p-3">HPV works best before exposure; 2 doses if &lt;15, 3 if 15+</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">16 years</td>
                    <td className="p-3">MenACWY #2, MenB (shared decision)</td>
                    <td className="p-3">MenB for college/dorm risk; 2-dose series</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Annual</td>
                    <td className="p-3">Influenza (Flu)</td>
                    <td className="p-3">Every fall</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Catch-up</td>
                    <td className="p-3">HepB, IPV, MMR, Varicella, HepA</td>
                    <td className="p-3">If any doses missed earlier</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
              <h3 className="font-semibold text-amber-800 mb-2">📋 Combination Vaccines Reduce Shots</h3>
              <p className="text-sm text-amber-700">
                Many vaccines come in combinations: Pediarix (DTaP+IPV+HepB), Pentacel (DTaP+IPV+Hib), 
                Kinrix (DTaP+IPV), ProQuad (MMR+Varicella). Fewer pokes, same protection.
              </p>
            </div>
          </section>

          <section id="vaccine-details" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Vaccine-by-Vaccine Breakdown</h2>
            
            <div className="space-y-4">
              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">DTaP/Tdap — Diphtheria, Tetanus, Pertussis (Whooping Cough)</h3>
                <p className="text-sm text-muted-foreground mt-2"><strong>Diseases:</strong> Diphtheria (throat coating, heart damage), Tetanus (lockjaw from soil bacteria), Pertussis (violent coughing, deadly in infants)</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Schedule:</strong> 2, 4, 6, 15–18 mo, 4–6 yr (DTaP); 11–12 yr (Tdap); pregnant women each pregnancy</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Key:</strong> Pertussis protection wanes—boosters critical. Cocooning: vaccinate everyone around newborn.</p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">Hib — Haemophilus influenzae type b</h3>
                <p className="text-sm text-muted-foreground mt-2"><strong>Diseases:</strong> Meningitis, epiglottitis, pneumonia, sepsis. Was leading cause of bacterial meningitis &lt;5 years.</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Schedule:</strong> 2, 4, 6*, 12–15 mo (*brand dependent)</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Key:</strong> Nearly eliminated in vaccinated populations.</p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">IPV — Inactivated Polio Vaccine</h3>
                <p className="text-sm text-muted-foreground mt-2"><strong>Diseases:</strong> Poliovirus—paralysis, death. Eradicated in Americas but persists elsewhere.</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Schedule:</strong> 2, 4, 6–18 mo, 4–6 yr</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Key:</strong> Oral polio vaccine (OPV) no longer used in US (rare vaccine-derived polio risk).</p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">PCV — Pneumococcal Conjugate (PCV15/PCV20)</h3>
                <p className="text-sm text-muted-foreground mt-2"><strong>Diseases:</strong> Pneumonia, meningitis, bloodstream infections, ear infections.</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Schedule:</strong> 2, 4, 6, 12–15 mo</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Key:</strong> Covers most common serotypes. Adults 65+ get PPSV23.</p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">RV — Rotavirus (Oral)</h3>
                <p className="text-sm text-muted-foreground mt-2"><strong>Diseases:</strong> Severe diarrhea, vomiting, dehydration. Leading cause of hospitalization in infants.</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Schedule:</strong> 2, 4, 6* mo (*brand dependent; Rotarix=2 doses, RotaTeq=3 doses)</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Key:</strong> Must start by 14 weeks 6 days; complete by 8 months. Oral—no shot!</p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">MMR — Measles, Mumps, Rubella (Live)</h3>
                <p className="text-sm text-muted-foreground mt-2"><strong>Diseases:</strong> Measles (highly contagious, pneumonia, encephalitis), Mumps (salivary glands, orchitis), Rubella (mild in kids, devastating in pregnancy)</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Schedule:</strong> 12–15 mo, 4–6 yr</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Key:</strong> Live vaccine—contraindicated in pregnancy, severe immunodeficiency. 97% effective after 2 doses.</p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">Varicella — Chickenpox (Live)</h3>
                <p className="text-sm text-muted-foreground mt-2"><strong>Diseases:</strong> Itchy rash, fever; complications: bacterial skin infections, pneumonia, encephalitis. Shingles later in life.</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Schedule:</strong> 12–15 mo, 4–6 yr</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Key:</strong> Breakthrough cases milder. Reduces shingles risk vs. natural infection.</p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">HepA — Hepatitis A</h3>
                <p className="text-sm text-muted-foreground mt-2"><strong>Diseases:</strong> Liver infection from contaminated food/water/close contact. Outbreaks in daycare, travel.</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Schedule:</strong> 12–23 mo (2 doses, 6 mo apart)</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Key:</strong> Routine since 2006. Highly effective.</p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">HPV — Human Papillomavirus</h3>
                <p className="text-sm text-muted-foreground mt-2"><strong>Diseases:</strong> Cervical, throat, anal, penile cancers; genital warts. 85% of people get HPV.</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Schedule:</strong> 11–12 yr (2 doses 6–12 mo apart if &lt;15; 3 doses if 15+)</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Key:</strong> Cancer prevention vaccine. Best before any exposure. Approved through age 45.</p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">MenACWY & MenB — Meningococcal</h3>
                <p className="text-sm text-muted-foreground mt-2"><strong>Diseases:</strong> Meningitis, sepsis. Rapid, deadly. Teens/young adults at higher risk (dorms, close contact).</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Schedule:</strong> MenACWY 11–12 yr, 16 yr; MenB 16–23 yr (shared decision, 2 doses)</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Key:</strong> MenB covers serogroup B (common in college outbreaks). Not routine for all.</p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">Influenza — Flu (Annual)</h3>
                <p className="text-sm text-muted-foreground mt-2"><strong>Diseases:</strong> Fever, cough, body aches; complications: pneumonia, hospitalization, death. Kids &lt;5 high risk.</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Schedule:</strong> Every fall from 6 mo. 2 doses first year if &lt;9 yr.</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Key:</strong> Shot (inactivated) for all; nasal spray (live) for healthy 2–49 yr non-pregnant.</p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">COVID-19</h3>
                <p className="text-sm text-muted-foreground mt-2"><strong>Diseases:</strong> SARS-CoV-2 infection; wide spectrum from asymptomatic to severe/MIS-C.</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Schedule:</strong> Per current CDC/ACIP guidance (updated as variants evolve)</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Key:</strong> mRNA vaccines safe/effective for 6 mo+. Reduces severe disease, MIS-C, Long COVID.</p>
              </div>

              <div className="rounded-2xl border border-border bg-muted p-5">
                <h3 className="font-semibold text-lg">RSV — Respiratory Syncytial Virus</h3>
                <p className="text-sm text-muted-foreground mt-2"><strong>Options:</strong> Nirsevimab (Beyfortus) monoclonal antibody for infants &lt;8 mo; maternal RSV vaccine (Abrysvo) 32–36 weeks pregnancy</p>
                <p className="text-sm text-muted-foreground mt-2"><strong>Key:</strong> Not a traditional vaccine. Nirsevimab = passive immunity (ready-made antibodies). One dose protects through RSV season.</p>
              </div>
            </div>
          </section>

          <section id="safety" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Vaccine Safety & Side Effects</h2>
            
            <h3 className="text-xl font-semibold">Rigorous Safety Testing</h3>
            <p>Every vaccine undergoes years of testing before licensure:</p>
            <ol className="list-decimal space-y-2 pl-6">
              <li>Preclinical: Lab and animal studies</li>
              <li>Phase 1: 20–100 healthy adults (safety, dose)</li>
              <li>Phase 2: Hundreds (safety, immune response)</li>
              <li>Phase 3: Thousands to tens of thousands (efficacy, rare side effects)</li>
              <li>FDA review: Independent analysis of all data</li>
              <li>ACIP recommendation: CDC advisory committee votes on schedule</li>
              <li>Post-licensure: VAERS, VSD, CISA, PRISM — continuous monitoring</li>
            </ol>

            <h3 className="text-xl font-semibold">Common Side Effects (Normal, Expected)</h3>
            <p>These mean the immune system is responding:</p>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Local:</strong> Soreness, redness, swelling at injection site (1–3 days)</li>
              <li><strong>Systemic:</strong> Low-grade fever, fussiness, tiredness, decreased appetite (1–2 days)</li>
              <li><strong>Live vaccines (MMR/Varicella):</strong> Rash, fever 7–14 days later (5–15%)</li>
              <li><strong>DTaP:</strong> More local reactions with each dose; swelling of entire limb (2–5%)</li>
            </ul>

            <h3 className="text-xl font-semibold">Rare But Real Adverse Events</h3>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Event</th>
                    <th className="p-3 text-left font-medium">Vaccine</th>
                    <th className="p-3 text-left font-medium">Frequency</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Febrile seizure</td>
                    <td className="p-3">MMR, MMRV, Flu (with PCV/DTaP)</td>
                    <td className="p-3">~1 in 3,000–4,000 doses; benign, no long-term effects</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Anaphylaxis</td>
                    <td className="p-3">Any vaccine</td>
                    <td className="p-3">~1 in 1,000,000 doses; treatable, occurs within minutes</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3">ITP (low platelets)</td>
                    <td className="p-3">MMR</td>
                    <td className="p-3">~1 in 30,000 doses; usually resolves</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3">Intussusception</td>
                    <td className="p-3">Rotavirus</td>
                    <td className="p-3">~1 in 100,000 doses; within 7 days of dose 1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="rounded-2xl border border-green-200 bg-green-50 p-5">
              <h3 className="font-semibold text-green-800 mb-2">✅ What Vaccines Do NOT Cause</h3>
              <ul className="list-disc space-y-1 pl-6 text-sm text-green-700">
                <li>Autism (studied extensively—no link)</li>
                <li>SIDS (vaccinated babies have lower SIDS rates)</li>
                <li>Autoimmune diseases (no credible evidence)</li>
                <li>Infertility (HPV vaccine extensively studied)</li>
                <li>"Overwhelming" the immune system (babies handle 2000+ antigens daily; vaccines add ~150 total)</li>
              </ul>
            </div>
          </section>

          <section id="myths" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Common Myths Debunked</h2>
            
            <dl className="space-y-6">
              <div className="rounded-2xl border border-border bg-muted p-5">
                <dt className="font-semibold text-foreground">"Too many vaccines too soon overload the immune system."</dt>
                <dd className="mt-2">False. Babies encounter 2,000–6,000 antigens daily from environment. The entire childhood schedule contains ~150 antigens. Immune system handles this easily. Delaying leaves child unprotected during peak vulnerability.</dd>
              </div>
              <div className="rounded-2xl border border-border bg-muted p-5">
                <dt className="font-semibold text-foreground">"Natural immunity is better than vaccine immunity."</dt>
                <dd className="mt-2">False. Natural infection carries risks: measles (1 in 1,000 encephalitis, 1–2 in 1,000 death), chickenpox (pneumonia, flesh-eating bacteria), HPV (cancer). Vaccines give immunity without the disease risks.</dd>
              </div>
              <div className="rounded-2xl border border-border bg-muted p-5">
                <dt className="font-semibold text-foreground">"Vaccines contain toxic ingredients (aluminum, formaldehyde, mercury)."</dt>
                <dd className="mt-2">False. Ingredients are in trace amounts far below harmful levels. Aluminum: &lt;1mg per dose (breast milk has ~0.4mg/L, formula ~0.2mg/L; baby gets more from food). Formaldehyde: body makes 10x more naturally. Thimerosal (ethylmercury): removed from routine childhood vaccines 2001; never in MMR/Varicella/IPV.</dd>
              </div>
              <div className="rounded-2xl border border-border bg-muted p-5">
                <dt className="font-semibold text-foreground">"MMR causes autism."</dt>
                <dd className="mt-2">False. Original 1998 study retracted, author lost license. Dozens of studies involving millions of children (including siblings of autistic kids) show NO link. Autism diagnosed around same age as MMR—coincidence, not causation.</dd>
              </div>
              <div className="rounded-2xl border border-border bg-muted p-5">
                <dt className="font-semibold text-foreground">"Diseases were disappearing before vaccines due to better hygiene."</dt>
                <dd className="mt-2">False. Hygiene helps with fecal-oral diseases (cholera, typhoid). But measles, pertussis, polio spread via respiratory droplets—hygiene doesn't stop them. Cases dropped dramatically only after vaccine introduction.</dd>
              </div>
              <div className="rounded-2xl border border-border bg-muted p-5">
                <dt className="font-semibold text-foreground">"My child doesn't need vaccines because everyone else is vaccinated."</dt>
                <dd className="mt-2">Risky. Herd immunity protects those who CAN'T vaccinate (medical exemptions). If too many opt out, outbreaks return (measles 2019: 1,282 US cases, mostly unvaccinated). Travel brings diseases from abroad.</dd>
              </div>
            </dl>
          </section>

          <section id="preparing" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Preparing Your Child for Shots</h2>
            
            <h3 className="text-xl font-semibold">Before the Visit</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Be honest but calm:</strong> "You'll get a quick poke to keep you healthy. It might pinch for a second."</li>
              <li><strong>Don't over-prepare:</strong> Talking about it for days increases anxiety. Mention morning of or in car.</li>
              <li><strong>Read books:</strong> "The Shots Book," "Brave Like Me," Daniel Tiger "Getting a Shot"</li>
              <li><strong>Role play:</strong> Toy doctor kit—give shots to stuffed animals</li>
              <li><strong>Plan a reward:</strong> Sticker, special treat, park trip after—not conditional on "being brave"</li>
            </ul>

            <h3 className="text-xl font-semibold">During the Visit</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Positioning:</strong> Hold child chest-to-chest (infants), sit on lap facing you (toddlers), sit sideways (older kids)</li>
              <li><strong>Distraction:</strong> Bubbles, pinwheel, video on phone, singing, counting, "blow out the candles"</li>
              <li><strong>Numbing cream:</strong> 4% lidocaine (LMX, EMLA) applied 30–60 min before—ask office or bring your own</li>
              <li><strong>Breastfeeding:</strong> During shots for infants—powerful pain relief</li>
              <li><strong>Sweet solution:</strong> 24% sucrose on pacifier 2 min before (infants &lt;12 mo)</li>
              <li><strong>Your calm:</strong> Kids co-regulate. Deep breaths, steady voice, "I'm right here."</li>
            </ul>

            <h3 className="text-xl font-semibold">What NOT to Do</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li>Don't say "it won't hurt" (breaks trust)</li>
              <li>Don't restrain forcefully unless safety requires it</li>
              <li>Don't threaten: "If you're bad, you'll get a shot"</li>
              <li>Don't apologize excessively—normalizes fear</li>
              <li>Don't give acetaminophen/ibuprofen PRE-emptively (may blunt immune response slightly)</li>
            </ul>
          </section>

          <section id="managing-side-effects" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Managing Side Effects</h2>
            
            <h3 className="text-xl font-semibold">Fever & Discomfort</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Acetaminophen (Tylenol):</strong> Any age (consult &lt;3 mo). Dose by weight every 4–6 hrs.</li>
              <li><strong>Ibuprofen (Advil, Motrin):</strong> 6+ months. Every 6–8 hrs.</li>
              <li><strong>Timing:</strong> Give AFTER symptoms start, not before. Exception: MMR fever at 7–14 days.</li>
              <li><strong>Comfort:</strong> Cool compress on injection site, light clothing, extra fluids, cuddles</li>
            </ul>

            <h3 className="text-xl font-semibold">Injection Site Reactions</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Cool compress:</strong> 10–15 min, several times/day</li>
              <li><strong>Gentle movement:</strong> Encourage using the arm/leg</li>
              <li><strong>Large swelling (whole thigh/arm):</strong> Common after DTaP #4/5. Usually resolves in 3–7 days. Call if redness spreads, hot, or child limps/refuses to move.</li>
            </ul>

            <h3 className="text-xl font-semibold">When to Call the Doctor</h3>
            <div className="rounded-2xl border border-red-200 bg-red-50 p-5">
              <ul className="list-disc space-y-2 pl-6 text-sm text-red-700">
                <li>Fever ≥104°F (40°C) or any fever in baby &lt;3 months</li>
                <li>Fever lasting >48 hours post-vaccination</li>
                <li>Crying inconsolably >3 hours (high-pitched)</li>
                <li>Seizure (febrile or otherwise)</li>
                <li>Signs of allergic reaction: hives, swelling face/lips, difficulty breathing, pale/limp</li>
                <li>Unusual behavior: very sleepy, difficult to wake, not responding</li>
                <li>Redness/swelling spreading beyond injection site or hot to touch</li>
                <li>Persistent vomiting/diarrhea</li>
              </ul>
            </div>
          </section>

          <section id="diseases" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Vaccine-Preventable Diseases: Why They Matter</h2>
            <p>These aren't "harmless childhood illnesses." Before vaccines:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="p-3 text-left font-medium">Disease</th>
                    <th className="p-3 text-left font-medium">Pre-Vaccine US Burden (Annual)</th>
                    <th className="p-3 text-left font-medium">Complications</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Measles</td>
                    <td className="p-3">3–4 million cases, 400–500 deaths</td>
                    <td className="p-3">Pneumonia, encephalitis, SSPE (fatal brain disease years later)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Polio</td>
                    <td className="p-3">15,000+ paralysis cases (1952 peak)</td>
                    <td className="p-3">Paralysis, post-polio syndrome decades later</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Pertussis</td>
                    <td className="p-3">200,000+ cases, 9,000 deaths</td>
                    <td className="p-3">Apnea, pneumonia, seizures, death (highest in infants)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Diphtheria</td>
                    <td className="p-3">100,000+ cases, 15,000 deaths</td>
                    <td className="p-3">Heart failure, paralysis, airway obstruction</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Hib</td>
                    <td className="p-3">20,000+ invasive cases (meningitis)</td>
                    <td className="p-3">Brain damage, hearing loss, death</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Rubella</td>
                    <td className="p-3">12.5 million (1964–65 epidemic)</td>
                    <td className="p-3">CRS: deafness, blindness, heart defects, intellectual disability</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">Varicella</td>
                    <td className="p-3">4 million cases, 100–150 deaths</td>
                    <td className="p-3">Bacterial superinfection, pneumonia, encephalitis, shingles</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-3 font-medium">HPV</td>
                    <td className="p-3">14 million new infections/year</td>
                    <td className="p-3">Cervical, oropharyngeal, anal cancers; genital warts</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section id="special-circumstances" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Travel & Special Circumstances</h2>
            
            <h3 className="text-xl font-semibold">International Travel</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>MMR:</strong> Infants 6–11 months: 1 dose before travel (still need 2 doses after 12 mo)</li>
              <li><strong>HepA:</strong> Recommended for most international travel</li>
              <li><strong>Typhoid:</strong> For travel to South Asia, parts of Africa/Latin America</li>
              <li><strong>Yellow fever:</strong> Required for entry to certain countries (Africa, South America)</li>
              <li><strong>Japanese encephalitis:</strong> Rural Asia, prolonged stay</li>
              <li><strong>Meningococcal:</strong> Hajj pilgrimage, meningitis belt in Africa</li>
              <li><strong>Rabies:</strong> High-risk activities, remote areas</li>
              <li><strong>Cholera:</strong> Humanitarian workers, outbreak areas</li>
            </ul>
            <p className="text-sm text-muted-foreground">Visit CDC Travelers' Health or travel clinic 4–6 weeks before departure.</p>

            <h3 className="text-xl font-semibold">Medical Exemptions & Precautions</h3>
            <ul className="list-disc space-y-2 pl-6">
              <li><strong>Severe immunodeficiency:</strong> No live vaccines (MMR, Varicella, Rotavirus, LAIV flu)</li>
              <li><strong>Anaphylaxis to prior dose or component:</strong> Contraindication to that vaccine</li>
              <li><strong>Pregnancy:</strong> No live vaccines; Tdap, Flu (inactivated), COVID, RSV recommended</li>
              <li><strong>Premature infants:</strong> Vaccinate on chronological age (not corrected), except HepB &lt;2000g at birth</li>
              <li><strong>Antibiotics/steroids:</strong> Not a contraindication (except high-dose steroids >2 weeks)</li>
            </ul>

            <h3 className="text-xl font-semibold">Catch-Up Schedules</h3>
            <p>If your child missed doses, they don't need to restart—just continue. CDC has catch-up schedules by age. Your pediatrician will create a plan. Minimum intervals matter (e.g., 4 weeks between DTaP doses).</p>
          </section>

          <section id="faq" className="space-y-6 text-sm leading-7 text-muted-foreground">
            <h2 className="text-2xl font-semibold">Frequently Asked Questions</h2>

            <dl className="space-y-6">
              <div>
                <dt className="font-semibold text-foreground">Can my child get vaccines if they have a mild cold?</dt>
                <dd className="mt-2">Yes. Mild illness (low-grade fever, cold, ear infection, diarrhea) is NOT a reason to delay. Only moderate/severe illness warrants delay. Vaccinating on schedule keeps protection on track.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">What if we miss a well-child visit and vaccines are delayed?</dt>
                <dd className="mt-2">No need to restart the series. Just pick up where you left off. Minimum intervals between doses still apply. Call your pediatrician to schedule a catch-up visit.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Are combination vaccines safe?</dt>
                <dd className="mt-2">Yes. They're extensively tested for safety and efficacy equal to separate vaccines. They reduce number of shots, office visits, and distress. Pediarix, Pentacel, Kinrix, ProQuad, Vaxelis are all standard.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Why does my child need a booster if they already had the vaccine?</dt>
                <dd className="mt-2">Immunity can wane over time. Boosters "remind" the immune system, raising antibody levels to protective levels. Some vaccines need multiple doses to build full immunity (e.g., DTaP 5 doses, HepB 3 doses).</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Can vaccines cause the disease they're meant to prevent?</dt>
                <dd className="mt-2">Inactivated/subunit/mRNA/toxoid vaccines: NO—cannot cause disease. Live attenuated vaccines (MMR, Varicella, Rotavirus, LAIV flu): can cause mild vaccine-strain illness (rash, low fever) but NOT the full disease. Exception: immunocompromised kids shouldn't get live vaccines.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Is it okay to space out vaccines on an alternative schedule?</dt>
                <dd className="mt-2">Not recommended. Alternative schedules leave children unprotected during peak vulnerability. No evidence they're safer. More visits = more stress, more needle pain overall. The CDC schedule is evidence-based for optimal timing.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">What is VAERS and can I report a reaction?</dt>
                <dd className="mt-2">VAERS (Vaccine Adverse Event Reporting System) is a national early-warning system. ANYONE can report—parents, doctors, patients. Reports don't prove causation but help detect rare signals. Report at vaers.hhs.gov or ask your doctor.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">Do vaccines contain aborted fetal cells?</dt>
                <dd className="mt-2">Some vaccines (MMR, Varicella, HepA, one rabies) are grown in cell lines derived from two elective abortions in the 1960s. NO fetal tissue is in vaccines. The cell lines are copies of copies—no new abortions. Catholic Church and major religious orgs support vaccination as morally acceptable.</dd>
              </div>
              <div>
                <dt className="font-semibold text-foreground">What if I choose not to vaccinate?</dt>
                <dd className="mt-2">Your choice, but understand the risks: your child is vulnerable to serious diseases; they can spread disease to those who can't vaccinate (infants, immunocompromised); school/daycare may exclude during outbreaks; travel may be restricted. Discuss with your pediatrician—they want to partner with you, not judge.</dd>
              </div>
            </dl>
          </section>

          <div className="rounded-2xl border border-border bg-muted p-6 pt-10">
            <h3 className="text-lg font-semibold text-center mb-2">Related Articles</h3>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="/articles/child-fever-guide" className="text-primary hover:underline">Child Fever Guide</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/newborn-care-guide" className="text-primary hover:underline">Newborn Care Guide</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/child-development-milestones" className="text-primary hover:underline">Child Development Milestones</a>
              <span className="text-muted-foreground">•</span>
              <a href="/articles/parenting-survival-guide" className="text-primary hover:underline">Parenting Survival Guide</a>
            </div>
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 text-center">
            <p className="text-sm text-muted-foreground">
              <strong>Medical Disclaimer:</strong> This article is for educational purposes only and does not constitute medical advice. 
              Always consult your pediatrician or healthcare provider for your child's specific vaccination needs.
            </p>
          </div>
        </article>
      </main>
      <BackToTop />
    </>
  );
}