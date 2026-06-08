# ChildBloom Growth Guide

This repository is a modern, mobile-first parenting and child health website called **ChildBloom**.

## Project Overview

ChildBloom is designed to be a scalable authority website for:

- Child health
- Parenting
- Newborn care
- Nutrition
- Development milestones
- Product reviews

The site is optimized for SEO, readability, and clean mobile-first layout.

## Tech Stack

- React 19
- TypeScript
- Tailwind CSS
- TanStack Start / React Router
- Supabase backend integration
- Vite build tooling

## What’s Included

- Homepage with hero, categories, latest articles, featured guides, and newsletter signup
- Articles listing page and sample article pages
- Category browsing page
- Search page with client-side filtering
- About, Contact, Privacy, Terms, Affiliate Disclosure, and Medical Disclaimer pages
- Sitemap generation at `/sitemap.xml`
- SEO-friendly metadata and basic structured data for article pages
- Removed visible Lovable branding from site metadata and error messaging

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the dev server:
   ```bash
   npm run dev
   ```
3. Open the site in the browser and navigate to `/`.

## Notes

- This repository uses file-based routing under `src/routes`.
- The generated route tree is available in `src/routeTree.gen.ts`.
- Static content pages use the shared data model in `src/lib/site-data.ts`.

## Git

Changes were committed and pushed to `origin/main`.
