# ChildBloom Roadmap Execution Plan

## Current State Analysis
- ✅ React/TypeScript app with TanStack Router (not WordPress)
- ✅ Required legal pages: Privacy, Terms, Medical Disclaimer, Affiliate Disclosure, Contact, About
- ✅ Admin panel for article management
- ✅ 4 existing articles: best-baby-monitors, newborn-sleep, speech-milestones, starting-solids
- ✅ Basic site structure with categories, search, article listing

## Phase 1: Foundation - Already Complete (mostly)
- ✅ Domain: childbloom.site (configured)
- ✅ Hosting: Ready for deployment (Vercel/Netlify)
- ✅ Analytics: Can add with env vars
- ✅ SEO: Meta tags implemented on all pages
- ✅ Legal pages: All required pages exist
- ⏳ Amazon Associates: Need to apply
- ⏳ Software Affiliate (Canva/Hostinger): Need to apply
- ⏳ Pinterest Business Account: Need to create
- ⏳ AdSense: Wait until 20-30 articles + traffic

## Phase 2: Content Foundation - MAIN FOCUS
### Goal: 30 Total Articles (7 Pillar + 23 Supporting)

### Pillar Articles (2000-3000 words each) - 7 articles
1. **Child Fever Guide** - /articles/child-fever-guide
2. **Child Nutrition Guide** - /articles/child-nutrition-guide
3. **Newborn Care Guide** - /articles/newborn-care-guide
4. **Child Development Milestones** - /articles/child-development-milestones
5. **Vaccination Guide** - /articles/vaccination-guide
6. **Baby Sleep Guide** - /articles/baby-sleep-guide (expand newborn-sleep)
7. **Parenting Survival Guide** - /articles/parenting-survival-guide

### Supporting Articles - 23 articles (targeting Amazon affiliate + SEO)
**Child Fever Cluster:**
8. Best Baby Thermometers - /articles/best-baby-thermometers
9. Fever in Children - /articles/fever-in-children
10. Baby Teething Symptoms - /articles/baby-teething-symptoms
11. Child Fever Home Remedies - /articles/child-fever-home-remedies

**Child Nutrition Cluster:**
12. Best Baby Bottles - /articles/best-baby-bottles
13. Best Baby Formula - /articles/best-baby-formula
14. Toddler Nutrition Tips - /articles/toddler-nutrition-tips
15. Starting Solids Guide - /articles/starting-solids-guide (expand existing)
16. Best Baby Food Makers - /articles/best-baby-food-makers

**Development Cluster:**
17. Best Educational Toys - /articles/best-educational-toys
18. Baby Development Milestones by Month - /articles/baby-milestones-by-month
19. Speech Development Guide - /articles/speech-development-guide (expand existing)
20. Best Baby Books - /articles/best-baby-books

**Sleep Cluster:**
21. Best Baby Sleep Products - /articles/best-baby-sleep-products
22. Sleep Training Methods - /articles/sleep-training-methods
23. Toddler Sleep Problems - /articles/toddler-sleep-problems

**Gear/Products Cluster:**
24. Best Car Seats - /articles/best-car-seats
25. Best Strollers - /articles/best-strollers
26. Best Baby Monitors - /articles/best-baby-monitors (exists)
27. Best Diaper Bags - /articles/best-diaper-bags
28. Best Baby Carriers - /articles/best-baby-carriers

**General Parenting:**
29. Newborn Essentials Checklist - /articles/newborn-essentials-checklist
30. Parenting Hacks for New Parents - /articles/parenting-hacks

## Phase 3: Pinterest Machine - Setup for automation
- Create Pinterest Business account
- Create 6 boards
- Build pin generation system (can use the existing article structure)

## Phase 4: SEO Growth - Ongoing
- 2-3 articles/week after initial 30
- SEO checklist on every article
- Topic clusters implementation

## Implementation Priority

### Week 1: Content Foundation Sprint
Create the 7 pillar articles + 5 highest-priority supporting articles (12 total)

### Week 2: Complete Supporting Articles
Create remaining 18 supporting articles (30 total)

### Week 3: Pinterest Setup & Automation
- Create Pinterest Business account
- Set up boards
- Build pin templates
- Create daily pin generation workflow

### Week 4: SEO Optimization & AdSense Prep
- Add schema markup to all articles
- Improve internal linking
- Submit sitemap to Google Search Console
- Apply for Amazon Associates
- Apply for software affiliate

## Technical Implementation Notes

### Article Structure (React Components)
Each article should include:
- ✅ Main keyword in title/H1
- ✅ FAQ section (schema markup)
- ✅ Internal links to related articles
- ✅ Images with alt text
- ✅ Meta description
- ✅ Schema.org Article markup
- ✅ Affiliate links with rel="sponsored nofollow"
- ✅ Reading progress bar
- ✅ Back to top button

### Admin Panel Usage
Use the existing admin panel at `/admin/articles/new` to create articles, or create them as route files for better SEO control.

### Affiliate Integration
- Amazon: Use `/go/$slug` route for redirect tracking
- Software affiliates: Add contextual links in relevant articles
- Canva: Design tools for parents
- Hostinger: For "start your parenting blog" content

## Next Actions
1. Create 7 pillar article route files
2. Create 23 supporting article route files
3. Set up content templates for faster creation
4. Configure Amazon Associates links
5. Build Pinterest pin generation script
6. Submit to Google Search Console