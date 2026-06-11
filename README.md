# ChildBloom Growth Guide

ChildBloom is a modern, mobile-first parenting and child health website built for scalability and SEO performance.

## Project Overview

ChildBloom is designed to be a scalable authority website covering:

- Child health
- Parenting
- Newborn care
- Nutrition
- Development milestones
- Product reviews

The site is optimized for SEO, readability, and clean mobile-first layout.

## Tech Stack

- **Frontend:** React 19, TypeScript, TanStack Start, TanStack Router
- **Styling:** Tailwind CSS 4, shadcn/ui (Radix UI primitives)
- **Backend:** Supabase (PostgreSQL, Auth, RLS, Full-text search)
- **Build:** Vite 7, Nitro (SSR)
- **Hosting:** Vercel

## Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Environment Setup

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

See `.env.example` for all required environment variables.

### Development

```bash
npm run dev
```

Open the site at `http://localhost:3000`.

### Build

```bash
npm run build
npm run preview
```

### Linting & Formatting

```bash
npm run lint
npm run format
```

## Project Structure

```
src/
├── assets/                 # Static assets (images, fonts)
├── components/ui/          # shadcn/ui components
├── hooks/                  # Custom React hooks
├── integrations/supabase/  # Supabase clients and auth
├── lib/                    # Shared utilities, config, site data
├── routes/                 # File-based routes (TanStack Router)
├── router.tsx              # Router configuration
├── server.ts               # SSR server entry
├── start.ts                # TanStack Start configuration
└── styles.css              # Global styles and design tokens
```

## Database

Supabase migrations are in `supabase/migrations/`. The schema includes:

- **articles** — CMS-driven content with full-text search
- **categories / tags** — Content organization
- **profiles** — Author profiles linked to Supabase Auth
- **user_roles** — Role-based access (admin, editor, author)
- **newsletter_subscribers** — Email subscribers with confirmation tokens
- **contact_messages** — Contact form submissions

## Scripts

| Command             | Description              |
| ------------------- | ------------------------ |
| `npm run dev`       | Start development server |
| `npm run build`     | Production build         |
| `npm run build:dev` | Development build        |
| `npm run preview`   | Preview production build |
| `npm run lint`      | Run ESLint               |
| `npm run format`    | Format with Prettier     |

## License

MIT
