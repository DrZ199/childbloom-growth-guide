# ChildBloom Growth Guide

**ChildBloom** is a modern, mobile-first parenting and child health website built for scalability, SEO performance, and affiliate monetization.

> **Current Status (June 2026):** 61 high-quality articles published across 7 core pillars with full Pinterest automation and affiliate tracking.

---

## Project Overview

ChildBloom is designed to be a scalable authority site covering:

- **Child Health** — Fever, vaccines, teething, wellness
- **Newborn Care** — Sleep, feeding, diapering, first 3 months
- **Nutrition** — Starting solids, toddler feeding, formula & bottles
- **Development** — Milestones, speech, educational toys
- **Parenting** — Survival guides, sleep training, hacks
- **Product Reviews** — Car seats, strollers, carriers, monitors, and more

The site is optimized for:
- SEO (schema markup, meta tags, sitemaps)
- Readability (mobile-first, clean typography)
- Monetization (Amazon affiliate links with proper `rel="sponsored"` tracking)

---

## Content Highlights

### 7 Pillar Articles (2000–3000 words each)
| Article | Category |
|---------|----------|
| Newborn Care Guide | Newborn Care |
| Child Development Milestones | Development |
| Vaccination Guide | Child Health |
| Baby Sleep Guide | Newborn Care |
| Parenting Survival Guide | Parenting |

### 54 Supporting Articles
- **Fever Cluster**: Thermometers, fever treatment, teething, home remedies
- **Nutrition Cluster**: Bottles, formula, toddler tips, starting solids, food makers
- **Development Cluster**: Educational toys, monthly milestones, speech development, baby books
- **Sleep Cluster**: Sleep products, training methods, toddler sleep problems
- **Gear Cluster**: Car seats, strollers, diaper bags, baby carriers
- **General**: Newborn essentials checklist, parenting hacks

**Total:** 61 articles with FAQ sections, internal linking, medical disclaimers, and affiliate opportunities.

---

## Tech Stack

- **Frontend:** React 19, TypeScript, TanStack Start, TanStack Router
- **Styling:** Tailwind CSS 4, shadcn/ui
- **Backend:** Supabase (PostgreSQL, Auth, RLS)
- **Build:** Vite 7 + Nitro (SSR)
- **Hosting:** Vercel
- **Affiliates:** Amazon Associates with custom `/go/` tracking

---

## Getting Started

### Prerequisites
- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Environment Setup

```bash
cp .env.example .env
```

### Development

```bash
npm run dev
```

Open http://localhost:3000

### Build & Preview

```bash
npm run build
npm run preview
```

### Linting & Formatting

```bash
npm run lint
npm run format
```

---

## New Scripts (Content & Pinterest Automation)

| Command | Description |
|---------|-------------|
| `npm run migrate:content` | Migrate articles from `site-data.ts` to Supabase |
| `npx tsx scripts/generate-pins.ts` | Generate Pinterest pin titles, descriptions & prompts |
| `npx tsx scripts/generate-pinterest-images.ts` | Prepare image generation for all pins |
| `npx tsx scripts/create-placeholder-pins.ts` | Create SVG placeholder images |

**Pinterest Images:** 61 optimized images available in `public/pinterest-pins/` (high-quality AI-generated + SVG placeholders).

---

## Project Structure

```
src/
├── routes/
│   ├── articles/              # 61 article routes
│   │   ├── best-baby-books.tsx
│   │   ├── speech-development-guide.tsx
│   │   ├── best-car-seats.tsx
│   │   ├── ... (58 more)
│   │   └── $slug.tsx          # Dynamic fallback
│   └── go/
│       └── $slug.tsx          # Enhanced affiliate redirect + tracking
├── lib/
│   └── site-data.ts           # Central article registry (61 articles)
├── scripts/
│   ├── generate-pins.ts
│   ├── generate-pinterest-images.ts
│   └── create-placeholder-pins.ts
└── components/
    └── content/               # ReadingProgress, BackToTop, TOC, etc.
```

---

## Affiliate & Monetization

- All product review articles include Amazon affiliate links
- Centralized redirect handler at `/go/$slug`
- Proper `rel="sponsored nofollow"` attributes
- Built-in click tracking and sponsored badge display
- Disclosure: *"ChildBloom earns a small commission from qualifying purchases at no extra cost to you."*

---

## Pinterest Automation

The project includes a complete Pinterest content pipeline:

1. Run `generate-pins.ts` → creates titles, descriptions, and image prompts
2. Run image generation (AI or placeholders)
3. Images stored in `public/pinterest-pins/`
4. Ready for bulk pinning or scheduling

---

## Database

Supabase schema includes:
- `articles` (full-text search enabled)
- `categories` & `tags`
- `profiles`, `user_roles`
- Newsletter & contact forms

---

## License

MIT

---

## Recent Milestones (June 2026)

- ✅ Implemented full 61-article content plan (Phase 1 + Phase 2)
- ✅ Added 30 new pillar & supporting articles across Toddler, Pregnancy, Special Needs, and Product Reviews
- ✅ Enhanced affiliate tracking system (`/go/$slug.tsx`)
- ✅ Built Pinterest pin generation & image pipeline (61 pins)
- ✅ All articles include schema, FAQ, internal links, and disclaimers
- ✅ Pushed complete implementation to GitHub

---

**Built with ❤️ for modern parents.**