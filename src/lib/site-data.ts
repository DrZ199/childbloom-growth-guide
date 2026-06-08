import { Apple, Baby, Heart, ShoppingBag, Sparkles, Star } from "lucide-react";

export const siteName = "ChildBloom";
export const siteDescription =
  "Helping children grow, learn, and thrive with trustworthy parenting guidance, child health support, nutrition advice, and honest product recommendations.";
export const siteUrl = "https://childbloom.site";

export const categories = [
  {
    slug: "child-health",
    name: "Child Health",
    description: "Immunity, illness care, and everyday wellness.",
  },
  {
    slug: "parenting",
    name: "Parenting",
    description: "Practical, judgment-free support for modern families.",
  },
  {
    slug: "newborn-care",
    name: "Newborn Care",
    description: "Gentle routines for the first precious months.",
  },
  {
    slug: "nutrition",
    name: "Nutrition",
    description: "Feeding, growth, and healthy family meals.",
  },
  {
    slug: "development",
    name: "Development",
    description: "Milestones, learning, and brain-healthy habits.",
  },
  {
    slug: "product-reviews",
    name: "Product Reviews",
    description: "Trusted picks for baby gear, toys and family essentials.",
  },
] as const;

export const categoryCards = [
  { name: "Child Health", desc: "Symptoms, immunity & wellness", icon: Heart, tone: "primary" },
  { name: "Newborn Care", desc: "First weeks made simpler", icon: Baby, tone: "accent" },
  { name: "Nutrition", desc: "Feeding, recipes & guides", icon: Apple, tone: "accent" },
  { name: "Development", desc: "Milestones month by month", icon: Sparkles, tone: "primary" },
  { name: "Parenting", desc: "Practical, judgment-free help", icon: Star, tone: "primary" },
  {
    name: "Product Reviews",
    desc: "Tested picks you can trust",
    icon: ShoppingBag,
    tone: "accent",
  },
];

export type Article = {
  title: string;
  slug: string;
  category: string;
  description: string;
  excerpt: string;
  readTime: string;
  publishedAt: string;
  tags: string[];
  seoTitle: string;
  metaDescription: string;
  hero: string;
  content: string;
  affiliateUrl?: string;
  pros?: string[];
  cons?: string[];
  keyFeatures?: string[];
};

export const articles: Article[] = [
  {
    title: "Newborn Sleep: A Calm, Evidence-Based Guide for the First 12 Weeks",
    slug: "newborn-sleep",
    category: "Newborn Care",
    description:
      "A practical schedule for safer, more predictable newborn sleep and more rested parents.",
    excerpt:
      "What pediatricians actually recommend for safe sleep, wake windows, and gentle routines.",
    readTime: "8 min read",
    publishedAt: "2026-06-01",
    tags: ["newborn", "sleep", "routine"],
    seoTitle: "Newborn Sleep Guide | ChildBloom",
    metaDescription:
      "Learn newborn sleep habits, wake windows, and gentle routines backed by pediatric guidance.",
    hero: "/assets/hero-family.jpg",
    content: `
      <p>Newborn sleep is unpredictable, but the best way to help your baby and yourself is to build a calm rhythm instead of chasing perfect hours.</p>
      <h2>What pediatricians recommend</h2>
      <p>Start with safe sleep basics, consistent wake windows, and a soothing bedtime routine that works for your family.</p>
      <ul>
        <li>Room-share without bed-sharing</li>
        <li>Keep naps bright and short in the first weeks</li>
        <li>Follow sleepy cues rather than a strict clock</li>
      </ul>
      <h2>FAQ</h2>
      <p>Always discuss concerns with your pediatrician, especially if your baby has medical needs or feeding challenges.</p>
    `,
  },
  {
    title: "Starting Solids at 6 Months: The Complete First-Foods Plan",
    slug: "starting-solids",
    category: "Nutrition",
    description:
      "A simple plan for iron-rich first foods, allergen introduction, and baby-led guidance.",
    excerpt:
      "Iron-rich first foods, allergens, textures, and a simple weekly schedule parents can follow.",
    readTime: "11 min read",
    publishedAt: "2026-05-25",
    tags: ["solids", "nutrition", "feeding"],
    seoTitle: "Starting Solids at 6 Months | ChildBloom",
    metaDescription:
      "Discover a safe, practical plan for starting solid foods at 6 months, with allergen tips and nutrient-rich choices.",
    hero: "/assets/hero-family.jpg",
    content: `
      <p>Starting solids is a big milestone. This plan helps parents move from milk feeds to first foods with confidence.</p>
      <h2>Top first-food picks</h2>
      <ol>
        <li>Pureed sweet potato</li>
        <li>Mashed avocado</li>
        <li>Iron-fortified oatmeal</li>
      </ol>
      <h2>Introducing allergens safely</h2>
      <p>Offer peanut butter or soft egg yolk in the first 1-2 weeks after solids begin, unless your baby has a known high risk of allergy.</p>
      <h2>Why iron matters</h2>
      <p>Babies need extra iron after 6 months. Choose nutrient-dense foods at every meal.</p>
    `,
  },
  {
    title: "Speech Milestones from 12 to 24 Months (and When to Ask for Help)",
    slug: "speech-milestones",
    category: "Development",
    description:
      "Track speech and language growth with daily activities that build a toddler's communication skills.",
    excerpt:
      "What's typical, what's not, and 7 daily moments that quietly grow your toddler's vocabulary.",
    readTime: "7 min read",
    publishedAt: "2026-05-18",
    tags: ["development", "speech", "toddler"],
    seoTitle: "Speech Milestones 12-24 Months | ChildBloom",
    metaDescription:
      "Find realistic speech milestones for 12- to 24-month-olds and expert tips for supporting early language development.",
    hero: "/assets/hero-family.jpg",
    content: `
      <p>Every child develops language in their own time. These milestones help parents know what to expect and when to ask for support.</p>
      <h2>Typical progress</h2>
      <ul>
        <li>12 months: says 1-3 words and responds to simple requests</li>
        <li>18 months: uses 5-20 words and begins combining words</li>
        <li>24 months: speaks in short phrases and follows two-step directions</li>
      </ul>
      <h2>Daily language builders</h2>
      <p>Describe what you’re doing, ask questions, and repeat words back clearly while playing together.</p>
    `,
  },
  {
    title: "The Best Baby Monitors of 2026: Trusted Picks for New Parents",
    slug: "best-baby-monitors",
    category: "Product Reviews",
    description:
      "A premium review of trusted baby monitors with pros, cons, and Amazon-ready picks for nursery safety.",
    excerpt:
      "Compare top baby monitors, essential features, and reliable Amazon affiliate picks for newborns.",
    readTime: "9 min read",
    publishedAt: "2026-05-10",
    tags: ["baby monitor", "reviews", "gear"],
    seoTitle: "Best Baby Monitors 2026 | ChildBloom Reviews",
    metaDescription:
      "Explore the best baby monitors of 2026 with ratings, pros and cons, and trusted product recommendations for new parents.",
    hero: "/assets/hero-family.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=baby+monitor",
    pros: ["Clear video quality", "Sleep tracking features", "Easy parent app"],
    cons: ["Higher price", "Requires Wi-Fi", "Not ideal for travel"],
    keyFeatures: ["Night vision", "Two-way talk", "Temperature alerts"],
    content: `
      <p>Finding a reliable baby monitor can help parents feel more confident in the nursery and during overnight sleep.</p>
      <h2>What matters most</h2>
      <ul>
        <li>Video clarity and low-light performance</li>
        <li>Trusted alerts for motion and sound</li>
        <li>Secure connection and easy setup</li>
      </ul>
      <h2>Recommended monitors</h2>
      <p>These monitors earned the ChildBloom seal for balance between reliability and comfort for new families.</p>
    `,
  },
];

export const author = {
  name: "Dr. Emma Lane",
  role: "Child Health Editor",
  bio: "A pediatric nurse and parenting writer who translates medical guidance into calm, practical advice for families.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/articles", label: "Articles" },
  { href: "/categories", label: "Categories" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];
