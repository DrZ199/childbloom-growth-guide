# ChildBloom Content Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Implement 30 high-quality articles (7 pillar + 23 supporting) for ChildBloom following the roadmap phases, with full SEO optimization, affiliate integration, and Pinterest-ready structure.

**Architecture:** Each article is implemented as a TanStack Router route file (`src/routes/articles/{slug}.tsx`) with proper meta tags, structured data (schema.org), ReadingProgress, BackToTop, and internal linking. Articles are also registered in `src/lib/site-data.ts` for the article listing and migration to Supabase.

**Tech Stack:** React 19, TypeScript, TanStack Start, TanStack Router, Tailwind CSS 4, shadcn/ui, Supabase

---

## File Structure Map

```
src/
├── routes/
│   └── articles/
│       ├── $slug.tsx                          # Dynamic article route (fallback)
│       ├── best-baby-monitors.tsx             # ✅ Existing
│       ├── child-fever-guide.tsx              # ✅ Existing
│       ├── child-nutrition-guide.tsx          # ✅ Existing
│       ├── newborn-sleep.tsx                  # ✅ Existing
│       ├── speech-milestones.tsx              # ✅ Existing
│       ├── starting-solids.tsx                # ✅ Existing
│       ├── newborn-care-guide.tsx             # 📝 NEW - Pillar 3
│       ├── child-development-milestones.tsx   # 📝 NEW - Pillar 4
│       ├── vaccination-guide.tsx              # 📝 NEW - Pillar 5
│       ├── baby-sleep-guide.tsx               # 📝 NEW - Pillar 6
│       ├── parenting-survival-guide.tsx       # 📝 NEW - Pillar 7
│       ├── best-baby-thermometers.tsx         # 📝 NEW - Supporting
│       ├── fever-in-children.tsx              # 📝 NEW - Supporting
│       ├── baby-teething-symptoms.tsx         # 📝 NEW - Supporting
│       ├── child-fever-home-remedies.tsx      # 📝 NEW - Supporting
│       ├── best-baby-bottles.tsx              # 📝 NEW - Supporting
│       ├── best-baby-formula.tsx              # 📝 NEW - Supporting
│       ├── toddler-nutrition-tips.tsx         # 📝 NEW - Supporting
│       ├── starting-solids-guide.tsx          # 📝 NEW - Supporting
│       ├── best-baby-food-makers.tsx          # 📝 NEW - Supporting
│       ├── best-educational-toys.tsx          # 📝 NEW - Supporting
│       ├── baby-milestones-by-month.tsx       # 📝 NEW - Supporting
│       ├── speech-development-guide.tsx       # 📝 NEW - Supporting
│       ├── best-baby-books.tsx                # 📝 NEW - Supporting
│       ├── best-baby-sleep-products.tsx       # 📝 NEW - Supporting
│       ├── sleep-training-methods.tsx         # 📝 NEW - Supporting
│       ├── toddler-sleep-problems.tsx         # 📝 NEW - Supporting
│       ├── best-car-seats.tsx                 # 📝 NEW - Supporting
│       ├── best-strollers.tsx                 # 📝 NEW - Supporting
│       ├── best-diaper-bags.tsx               # 📝 NEW - Supporting
│       ├── best-baby-carriers.tsx             # 📝 NEW - Supporting
│       ├── newborn-essentials-checklist.tsx   # 📝 NEW - Supporting
│       └── parenting-hacks.tsx                # 📝 NEW - Supporting
├── lib/
│   └── site-data.ts                           # 📝 UPDATE - Add all 30 articles
├── scripts/
│   ├── migrate-site-data.ts                   # ✅ Existing
│   └── generate-pins.ts                       # 📝 NEW - Pinterest automation
└── components/
    └── content/
        ├── reading-progress.tsx               # ✅ Existing
        ├── back-to-top.tsx                    # ✅ Existing
        ├── table-of-contents.tsx              # ✅ Existing
        └── related-articles.tsx               # ✅ Existing
```

---

## Phase 1: Article Template & Structure (Tasks 3)

### Task 3: Create Article Template

**Files:**
- Create: `src/routes/articles/_template.tsx` (reference template)

**Article Structure Requirements (every article must have):**
1. ✅ Main keyword in title/H1
2. ✅ FAQ section with schema markup
3. ✅ Internal links to related articles
4. ✅ Images with alt text (placeholder for now)
5. ✅ Meta description (150-160 chars)
6. ✅ Schema.org Article markup with author, publisher, dates
7. ✅ Affiliate links with `rel="sponsored nofollow"`
8. ✅ ReadingProgress component
9. ✅ BackToTop component
10. ✅ Table of Contents navigation
11. ✅ Related articles section at bottom
12. ✅ Medical disclaimer for health content

---

## Phase 2: Pillar Articles (Tasks 4)

### Task 4.1: Create newborn-care-guide.tsx (Pillar 3)

**Files:**
- Create: `src/routes/articles/newborn-care-guide.tsx`

**Content Outline:**
- Understanding Newborn Needs (0-3 months)
- Feeding: Breastfeeding & Formula
- Sleep Patterns & Safe Sleep
- Diapering & Hygiene
- Bathing & Skin Care
- Umbilical Cord & Circumcision Care
- Jaundice, Reflux, Colic
- When to Call the Doctor
- Newborn Development Milestones
- FAQ Section
- Related articles links

**Keywords:** newborn care guide, newborn care basics, how to care for newborn

### Task 4.2: Create child-development-milestones.tsx (Pillar 4)

**Files:**
- Create: `src/routes/articles/child-development-milestones.tsx`

**Content Outline:**
- Development Domains Overview
- 0-3 Months Milestones
- 4-6 Months Milestones
- 7-9 Months Milestones
- 10-12 Months Milestones
- 12-18 Months Milestones
- 18-24 Months Milestones
- 2-3 Years Milestones
- 3-5 Years Milestones
- Red Flags: When to Seek Evaluation
- Supporting Development at Home
- FAQ Section
- Related articles links

**Keywords:** child development milestones, baby milestones by month, developmental milestones

### Task 4.3: Create vaccination-guide.tsx (Pillar 5)

**Files:**
- Create: `src/routes/articles/vaccination-guide.tsx`

**Content Outline:**
- How Vaccines Work
- Recommended Schedule (Birth-18 Years)
- Vaccine Safety & Side Effects
- Common Myths Debunked
- Preparing Your Child for Shots
- Managing Side Effects
- Vaccine-Preventable Diseases
- Travel & Special Circumstances
- FAQ Section
- Related articles links

**Keywords:** vaccination guide, childhood vaccine schedule, vaccine safety

### Task 4.4: Create baby-sleep-guide.tsx (Pillar 6)

**Files:**
- Create: `src/routes/articles/baby-sleep-guide.tsx`

**Content Outline:**
- Sleep Science Basics
- Newborn Sleep (0-3 months)
- 4-6 Month Sleep Changes
- 6-12 Month Sleep Patterns
- Toddler Sleep (1-3 years)
- Sleep Training Methods Overview
- Common Sleep Problems & Solutions
- Safe Sleep Guidelines
- Nap Transitions
- FAQ Section
- Related articles links

**Keywords:** baby sleep guide, baby sleep training, infant sleep schedule

### Task 4.5: Create parenting-survival-guide.tsx (Pillar 7)

**Files:**
- Create: `src/routes/articles/parenting-survival-guide.tsx`

**Content Outline:**
- The Fourth Trimester Survival
- Managing Sleep Deprivation
- Feeding Challenges
- Emotional Regulation for Parents
- Relationship & Partnership
- Self-Care That Actually Works
- Building Your Village
- Returning to Work
- Mental Health: PPD/PPA Awareness
- FAQ Section
- Related articles links

**Keywords:** parenting survival guide, new parent tips, postpartum survival

---

## Phase 3: Supporting Articles - Fever Cluster (Tasks 5.1-5.4)

### Task 5.1: Create best-baby-thermometers.tsx

**Files:**
- Create: `src/routes/articles/best-baby-thermometers.tsx`

**Content:** Product review with comparison table, pros/cons, affiliate links
**Keywords:** best baby thermometer, baby thermometer reviews, rectal thermometer

### Task 5.2: Create fever-in-children.tsx

**Files:**
- Create: `src/routes/articles/fever-in-children.tsx`

**Content:** Comprehensive fever guide (complements pillar)
**Keywords:** fever in children, child fever treatment, high fever child

### Task 5.3: Create baby-teething-symptoms.tsx

**Files:**
- Create: `src/routes/articles/baby-teething-symptoms.tsx`

**Content:** Teething signs, remedies, timeline
**Keywords:** baby teething symptoms, teething remedies, when do babies start teething

### Task 5.4: Create child-fever-home-remedies.tsx

**Files:**
- Create: `src/routes/articles/child-fever-home-remedies.tsx`

**Content:** Natural comfort measures, hydration, what to avoid
**Keywords:** child fever home remedies, natural fever reducers, how to break a fever

---

## Phase 4: Supporting Articles - Nutrition Cluster (Tasks 5.5-5.10)

### Task 5.5: Create best-baby-bottles.tsx

**Files:**
- Create: `src/routes/articles/best-baby-bottles.tsx`

**Keywords:** best baby bottles, baby bottle reviews, anti-colic bottles

### Task 5.6: Create best-baby-formula.tsx

**Files:**
- Create: `src/routes/articles/best-baby-formula.tsx`

**Keywords:** best baby formula, formula reviews, infant formula comparison

### Task 5.7: Create toddler-nutrition-tips.tsx

**Files:**
- Create: `src/routes/articles/toddler-nutrition-tips.tsx`

**Keywords:** toddler nutrition, toddler feeding tips, picky eater toddler

### Task 5.8: Create starting-solids-guide.tsx (expand existing)

**Files:**
- Create: `src/routes/articles/starting-solids-guide.tsx`

**Keywords:** starting solids guide, baby first foods, baby led weaning

### Task 5.9: Create best-baby-food-makers.tsx

**Files:**
- Create: `src/routes/articles/best-baby-food-makers.tsx`

**Keywords:** best baby food maker, baby food maker reviews, homemade baby food

---

## Phase 5: Supporting Articles - Development Cluster (Tasks 5.10-5.13)

### Task 5.10: Create best-educational-toys.tsx

**Files:**
- Create: `src/routes/articles/best-educational-toys.tsx`

**Keywords:** best educational toys, learning toys for toddlers, developmental toys

### Task 5.11: Create baby-milestones-by-month.tsx

**Files:**
- Create: `src/routes/articles/baby-milestones-by-month.tsx`

**Keywords:** baby milestones by month, monthly baby milestones, infant development

### Task 5.12: Create speech-development-guide.tsx

**Files:**
- Create: `src/routes/articles/speech-development-guide.tsx`

**Keywords:** speech development, toddler speech milestones, late talker

### Task 5.13: Create best-baby-books.tsx

**Files:**
- Create: `src/routes/articles/best-baby-books.tsx`

**Keywords:** best baby books, board books for babies, baby book recommendations

---

## Phase 6: Supporting Articles - Sleep Cluster (Tasks 5.14-5.16)

### Task 5.14: Create best-baby-sleep-products.tsx

**Files:**
- Create: `src/routes/articles/best-baby-sleep-products.tsx`

**Keywords:** best baby sleep products, sleep sacks, white noise machine

### Task 5.15: Create sleep-training-methods.tsx

**Files:**
- Create: `src/routes/articles/sleep-training-methods.tsx`

**Keywords:** sleep training methods, cry it out, ferber method, gentle sleep training

### Task 5.16: Create toddler-sleep-problems.tsx

**Files:**
- Create: `src/routes/articles/toddler-sleep-problems.tsx`

**Keywords:** toddler sleep problems, toddler won't sleep, sleep regression

---

## Phase 7: Supporting Articles - Gear Cluster (Tasks 5.17-5.21)

### Task 5.17: Create best-car-seats.tsx

**Files:**
- Create: `src/routes/articles/best-car-seats.tsx`

**Keywords:** best car seats, car seat reviews, infant car seat, convertible car seat

### Task 5.18: Create best-strollers.tsx

**Files:**
- Create: `src/routes/articles/best-strollers.tsx`

**Keywords:** best strollers, stroller reviews, jogging stroller, travel system

### Task 5.19: Create best-diaper-bags.tsx

**Files:**
- Create: `src/routes/articles/best-diaper-bags.tsx`

**Keywords:** best diaper bags, diaper bag reviews, backpack diaper bag

### Task 5.20: Create best-baby-carriers.tsx

**Files:**
- Create: `src/routes/articles/best-baby-carriers.tsx`

**Keywords:** best baby carriers, baby carrier reviews, ergonomic baby carrier

---

## Phase 8: Supporting Articles - General Parenting (Tasks 5.21-5.23)

### Task 5.21: Create newborn-essentials-checklist.tsx

**Files:**
- Create: `src/routes/articles/newborn-essentials-checklist.tsx`

**Keywords:** newborn essentials checklist, baby registry must haves, newborn checklist

### Task 5.22: Create parenting-hacks.tsx

**Files:**
- Create: `src/routes/articles/parenting-hacks.tsx`

**Keywords:** parenting hacks, new parent hacks, baby hacks

---

## Phase 9: Site Data & Migration (Task 6)

### Task 6: Update site-data.ts with All 30 Articles

**Files:**
- Modify: `src/lib/site-data.ts`

**Action:** Add all 30 articles to the `articles` array with proper metadata (title, slug, category, description, excerpt, readTime, publishedAt, tags, seoTitle, metaDescription, hero, content, affiliateUrl, pros, cons, keyFeatures)

---

## Phase 10: SEO & Schema Enhancement (Task 7)

### Task 7.1: Add FAQ Schema to All Articles

**Files:**
- Modify: Each article route file

**Action:** Ensure every article has proper FAQ schema in the JSON-LD script tag

### Task 7.2: Add Breadcrumb Schema

**Files:**
- Modify: Each article route file

**Action:** Add BreadcrumbList schema for better SERP appearance

### Task 7.3: Add Product Schema for Review Articles

**Files:**
- Modify: Product review articles

**Action:** Add Product/Review schema for affiliate articles

### Task 7.4: Optimize Internal Linking

**Files:**
- Modify: Each article route file

**Action:** Ensure each article links to 3-5 related articles with descriptive anchor text

---

## Phase 11: Affiliate Integration (Task 8)

### Task 8.1: Create Affiliate Link Structure

**Files:**
- Modify: `src/routes/go/$slug.tsx`

**Action:** Set up redirect tracking for Amazon Associates and software affiliates

### Task 8.2: Add Affiliate Links to Product Articles

**Files:**
- Modify: All product review articles

**Action:** Add Amazon affiliate links with proper `rel="sponsored nofollow"` and `/go/` redirects

### Task 8.3: Add Software Affiliate Links

**Files:**
- Modify: Relevant articles (parenting blog, design tools)

**Action:** Add Canva/Hostinger affiliate links contextually

---

## Phase 12: Pinterest Automation (Task 9)

### Task 9.1: Create Pin Generation Script

**Files:**
- Create: `scripts/generate-pins.ts`

**Action:** Build script that generates pin titles, descriptions, and image prompts for each article

### Task 9.2: Create Pin Templates

**Files:**
- Create: `scripts/pin-templates.ts`

**Action:** Define templates for different article types (guide, review, listicle, FAQ)

### Task 9.3: Schedule Pin Creation

**Files:**
- Create: `scripts/schedule-pins.ts`

**Action:** Set up daily pin scheduling (10-20 pins/day)

---

## Phase 13: Search Console & Sitemap (Task 10)

### Task 10.1: Verify Sitemap Generation

**Files:**
- Verify: `src/routes/sitemap[.]xml.ts`

**Action:** Ensure all 30 articles are included in sitemap

### Task 10.2: Submit to Google Search Console

**Action:** Manual step - submit sitemap and request indexing

### Task 10.3: Set Up Analytics

**Files:**
- Modify: `.env` and `src/integrations/supabase/`

**Action:** Configure Google Analytics and Search Console verification

---

## Testing & Validation Commands

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Unit tests
npm run test

# E2E tests
npm run test:e2e

# Build
npm run build

# Preview
npm run preview

# Content migration (dry run)
DRY_RUN=true npm run migrate:content

# Content migration (actual)
npm run migrate:content

# Check broken links
npm run check:links
```

---

## Commit Strategy

Each article creation = 1 commit with message format:
```
feat(articles): add {slug} article

- {description of article}
- SEO: meta tags, schema, internal links
- Affiliate: {affiliate links added}
```

---

## Self-Review Checklist

- [ ] All 30 articles planned with unique slugs
- [ ] Pillar articles: 2000-3000 words each
- [ ] Supporting articles: 1500-2500 words each
- [ ] All articles have FAQ section
- [ ] All articles have schema markup
- [ ] All product articles have affiliate links
- [ ] Internal linking between cluster articles
- [ ] site-data.ts updated with all articles
- [ ] Sitemap includes all routes
- [ ] TypeScript compiles without errors
- [ ] Linting passes
- [ ] Tests pass