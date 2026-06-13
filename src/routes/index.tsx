import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  Heart,
  Baby,
  Apple,
  Sparkles,
  Star,
  ShoppingBag,
  ArrowRight,
  Clock,
} from "lucide-react";
import heroImg from "@/assets/hero-family.jpg";
import { NewsletterForm } from "@/components/newsletter-form";
import { MobileNav } from "@/components/layout/mobile-nav";
import { ThemeToggleCompact } from "@/components/layout/theme-toggle";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ChildBloom — Helping Children Grow, Learn, and Thrive" },
      {
        name: "description",
        content:
          "Expert, evidence-based guidance on child health, parenting, newborn care, nutrition, development, and trusted product reviews for modern families.",
      },
      { property: "og:title", content: "ChildBloom — Helping Children Grow, Learn, and Thrive" },
      {
        property: "og:description",
        content:
          "Expert guidance on child health, parenting, newborn care, nutrition, development, and trusted product reviews.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: `https://childbloom.site${heroImg}` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `https://childbloom.site${heroImg}` },
    ],
    links: [{ rel: "canonical", href: "https://childbloom.site/" }],
  }),
  component: Index,
});

const categories = [
  { name: "Child Health", desc: "Symptoms, immunity & wellness", Icon: Heart, tone: "primary" },
  { name: "Newborn Care", desc: "First weeks made simpler", Icon: Baby, tone: "accent" },
  { name: "Nutrition", desc: "Feeding, recipes & guides", Icon: Apple, tone: "accent" },
  { name: "Development", desc: "Milestones month by month", Icon: Sparkles, tone: "primary" },
  { name: "Parenting", desc: "Practical, judgment-free help", Icon: Star, tone: "primary" },
  {
    name: "Product Reviews",
    desc: "Tested picks you can trust",
    Icon: ShoppingBag,
    tone: "accent",
  },
] as const;

const articles = [
  {
    tag: "Newborn Care",
    title: "Newborn Sleep: A Calm, Evidence-Based Guide for the First 12 Weeks",
    excerpt:
      "What pediatricians actually recommend for safe sleep, wake windows, and gentle routines.",
    read: "8 min read",
    image: "https://images.unsplash.com/photo-1519689680058-324335c77eba?auto=format&fit=crop&w=800&q=80",
    href: "/articles/newborn-sleep",
  },
  {
    tag: "Nutrition",
    title: "Starting Solids at 6 Months: The Complete First-Foods Plan",
    excerpt:
      "Iron-rich first foods, allergens, textures, and a simple weekly schedule parents can follow.",
    read: "11 min read",
    image: "https://images.unsplash.com/photo-1566004100631-35d015d6a491?auto=format&fit=crop&w=800&q=80",
    href: "/articles/starting-solids",
  },
  {
    tag: "Development",
    title: "Speech Milestones from 12 to 24 Months (and When to Ask for Help)",
    excerpt:
      "What's typical, what's not, and 7 daily moments that quietly grow your toddler's vocabulary.",
    read: "7 min read",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?auto=format&fit=crop&w=800&q=80",
    href: "/articles/speech-milestones",
  },
];

const guides = [
  { kicker: "Pillar Guide", title: "The Complete Newborn Care Handbook" },
  { kicker: "Pillar Guide", title: "Toddler Nutrition: Birth to Age 5" },
  { kicker: "Pillar Guide", title: "Childhood Development Milestones" },
];

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Categories />
        <LatestArticles />
        <FeaturedGuides />
        <NewsletterForm source="homepage" />
        <PopularArticles />
      </main>
      <Footer />
    </div>
  );
}

function Header() {
  const links = [
    { href: "/articles", label: "Articles" },
    { href: "/categories", label: "Categories" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="/" className="flex items-center gap-2" aria-label="ChildBloom home">
          <span
            className="grid h-9 w-9 place-items-center rounded-xl text-primary-foreground"
            style={{ background: "var(--gradient-primary)" }}
          >
            <Sparkles className="h-5 w-5" />
          </span>
          <span
            className="text-xl font-semibold tracking-tight"
            style={{ fontFamily: "Fraunces, serif" }}
          >
            ChildBloom
          </span>
        </a>
        <nav
          className="hidden items-center gap-7 text-sm font-medium text-muted-foreground lg:flex"
          aria-label="Main navigation"
        >
          {links.map((link) => (
            <a key={link.href} href={link.href} className="transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="#newsletter"
            className="hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition hover:opacity-90 sm:inline-flex"
          >
            Subscribe
          </a>
          <ThemeToggleCompact className="hidden sm:inline-flex" />
          <MobileNav />
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden" style={{ background: "var(--gradient-hero)" }}>
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur">
            <Heart className="h-3.5 w-3.5 text-primary" />
            Evidence-based · Pediatrician-reviewed
          </span>
          <h1 className="mt-5 text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            Helping children <span className="text-primary">grow</span>, learn, and{" "}
            <span className="text-accent">thrive</span>.
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Calm, trustworthy guidance on child health, newborn care, nutrition, and development —
            written for real, busy parents.
          </p>

          <form className="mt-7 flex w-full max-w-lg items-center gap-2 rounded-full border border-border bg-card p-1.5 shadow-[var(--shadow-soft)]">
            <Search className="ml-3 h-5 w-5 shrink-0 text-muted-foreground" />
            <input
              type="search"
              placeholder="Search sleep, feeding, milestones…"
              aria-label="Search articles"
              className="flex-1 bg-transparent px-2 py-2 text-sm placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground transition hover:opacity-90"
            >
              Search
            </button>
          </form>

          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-accent" /> 500+ expert articles
            </span>
            <span className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" /> 120k parents subscribed
            </span>
          </div>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-card/40 blur-2xl" aria-hidden />
          <img
            src={heroImg}
            alt="A mother smiling with her happy baby in soft natural light"
            width={1536}
            height={1280}
            className="relative aspect-[5/4] w-full rounded-[2rem] object-cover shadow-[var(--shadow-soft)]"
          />
          <div className="absolute -bottom-5 left-5 right-5 rounded-2xl border border-border bg-card/95 p-4 shadow-[var(--shadow-card)] backdrop-blur sm:left-8 sm:right-auto sm:w-72">
            <div className="flex items-center gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-full bg-secondary text-secondary-foreground">
                <Star className="h-5 w-5" />
              </div>
              <div>
                <p className="text-sm font-semibold">This week's top read</p>
                <p className="text-xs text-muted-foreground">Newborn sleep, made simple</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Categories() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeader eyebrow="Explore" title="What can we help with today?" />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map(({ name, desc, Icon, tone }) => (
          <a
            key={name}
            href="/categories"
            className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
          >
            <div
              className={`mb-5 grid h-12 w-12 place-items-center rounded-xl ${
                tone === "primary" ? "bg-primary/10 text-primary" : "bg-accent/15 text-accent"
              }`}
            >
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="mt-1 text-sm text-muted-foreground">{desc}</p>
            <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 transition group-hover:opacity-100">
              Browse <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function LatestArticles() {
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-end justify-between gap-6">
          <SectionHeader eyebrow="Latest" title="Fresh from the journal" />
          <a href="/articles" className="hidden text-sm font-medium text-primary hover:underline sm:inline">
            View all →
          </a>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {articles.map((a) => (
            <a
              key={a.title}
              href={a.href}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-card)] transition hover:-translate-y-0.5 hover:shadow-[var(--shadow-soft)]"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-muted">
                <img
                  src={a.image}
                  alt={a.title}
                  width={800}
                  height={500}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <span className="text-xs font-medium uppercase tracking-wider text-primary">
                  {a.tag}
                </span>
                <h3 className="mt-2 text-lg font-semibold leading-snug">{a.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm text-muted-foreground">{a.excerpt}</p>
                <div className="mt-5 flex items-center justify-between text-xs text-muted-foreground">
                  <span className="flex items-center gap-1.5">
                    <Clock className="h-3.5 w-3.5" /> {a.read}
                  </span>
                  <span className="font-medium text-primary">Read article →</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeaturedGuides() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
      <SectionHeader eyebrow="Pillar guides" title="In-depth guides parents return to" />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {guides.map((g, i) => (
          <a
            key={g.title}
            href="/articles"
            className="relative flex h-56 flex-col justify-end overflow-hidden rounded-2xl border border-border p-6 text-primary-foreground shadow-[var(--shadow-card)] transition hover:shadow-[var(--shadow-soft)]"
            style={{
              background:
                i % 2 === 0
                  ? "var(--gradient-primary)"
                  : "linear-gradient(135deg, oklch(0.72 0.12 165), oklch(0.62 0.13 235))",
            }}
          >
            <span className="text-xs font-medium uppercase tracking-widest opacity-90">
              {g.kicker}
            </span>
            <h3 className="mt-2 text-2xl font-semibold leading-tight">{g.title}</h3>
            <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium">
              Open guide <ArrowRight className="h-4 w-4" />
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}

function PopularArticles() {
  const popular = [
    "How much sleep does a 1-year-old really need?",
    "10 iron-rich foods for picky toddlers",
    "When to worry about a fever in babies",
    "The best baby monitors of 2026, tested",
    "Gentle ways to night-wean a toddler",
    "Screen time guidelines that actually work",
  ];
  const popularLinks = [
    "/articles/baby-sleep-guide",
    "/articles/toddler-nutrition-tips",
    "/articles/child-fever-guide",
    "/articles/best-baby-monitors",
    "/articles/sleep-training-methods",
    "/articles/parenting-hacks",
  ];
  return (
    <section className="bg-muted/40 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeader eyebrow="Reader favorites" title="Most-read this month" />
        <ol className="mt-10 grid gap-x-10 gap-y-4 sm:grid-cols-2">
          {popular.map((title, i) => (
            <li key={title}>
              <a
                href={popularLinks[i]}
                className="group flex items-start gap-4 rounded-xl p-3 transition hover:bg-card"
              >
                <span
                  className="text-2xl font-semibold text-primary/50"
                  style={{ fontFamily: "Fraunces, serif" }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="pt-1 text-base font-medium text-foreground group-hover:text-primary">
                  {title}
                </span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Footer() {
  const cols = {
    Explore: [
      { label: "Articles", href: "/articles" },
      { label: "Categories", href: "/categories" },
      { label: "Newborn Care", href: "/categories" },
      { label: "Nutrition", href: "/categories" },
      { label: "Development", href: "/categories" },
    ],
    Company: [
      { label: "About", href: "/about" },
      { label: "Contact", href: "/contact" },
      { label: "Authors", href: "/authors" },
      { label: "Editorial Policy", href: "/terms" },
    ],
    Legal: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Cookie Policy", href: "/cookie-policy" },
      { label: "Terms of Service", href: "/terms" },
      { label: "Affiliate Disclosure", href: "/affiliate-disclosure" },
      { label: "Medical Disclaimer", href: "/medical-disclaimer" },
    ],
  };
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span
                className="grid h-9 w-9 place-items-center rounded-xl text-primary-foreground"
                style={{ background: "var(--gradient-primary)" }}
              >
                <Sparkles className="h-5 w-5" />
              </span>
              <span className="text-xl font-semibold" style={{ fontFamily: "Fraunces, serif" }}>
                ChildBloom
              </span>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Helping children grow, learn, and thrive.
            </p>
          </div>
          {Object.entries(cols).map(([k, v]) => (
            <div key={k}>
              <h4 className="text-sm font-semibold">{k}</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {v.map((item) => (
                  <li key={item.label}>
                    <a href={item.href} className="hover:text-foreground">
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-xl border border-border bg-muted/50 p-4 text-xs leading-relaxed text-muted-foreground">
          <strong className="text-foreground">Medical disclaimer:</strong> Content on ChildBloom is
          for educational purposes only and is not a substitute for professional medical advice,
          diagnosis, or treatment.
        </div>
        <p className="mt-6 text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} ChildBloom. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

function SectionHeader({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div>
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
        {eyebrow}
      </span>
      <h2 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}
