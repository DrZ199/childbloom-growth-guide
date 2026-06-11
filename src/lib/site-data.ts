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
  // Existing articles
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

  // Pillar Articles
  {
    title: "Newborn Care Guide: Complete 0-3 Month Handbook",
    slug: "newborn-care-guide",
    category: "Newborn Care",
    description:
      "Complete newborn care guide for first-time parents: feeding, sleep, diapering, bathing, health concerns, and when to call the doctor.",
    excerpt:
      "Evidence-based advice covering every aspect of newborn care in the first three months.",
    readTime: "18 min read",
    publishedAt: "2026-06-10",
    tags: ["newborn", "care", "basics"],
    seoTitle: "Newborn Care Guide: Complete 0-3 Month Handbook | ChildBloom",
    metaDescription:
      "Complete newborn care guide for first-time parents: feeding, sleep, diapering, bathing, health concerns, and when to call the doctor.",
    hero: "/assets/hero-family.jpg",
    content: "Full content available in route file.",
  },
  {
    title: "Child Development Milestones: Month-by-Month Guide from Birth to 5 Years",
    slug: "child-development-milestones",
    category: "Development",
    description:
      "Track every major milestone from birth to age 5 across motor, language, cognitive, and social domains.",
    excerpt:
      "Comprehensive month-by-month developmental milestones with red flags and support tips.",
    readTime: "20 min read",
    publishedAt: "2026-06-10",
    tags: ["development", "milestones", "parenting"],
    seoTitle: "Child Development Milestones: Month-by-Month Guide | ChildBloom",
    metaDescription:
      "Track every major milestone from birth to age 5 across motor, language, cognitive, and social domains.",
    hero: "/assets/hero-family.jpg",
    content: "Full content available in route file.",
  },
  {
    title: "Vaccination Guide: Childhood Vaccine Schedule, Safety & Myths Debunked",
    slug: "vaccination-guide",
    category: "Child Health",
    description:
      "Complete guide to childhood vaccines: recommended schedule, safety data, side effects, and how to prepare your child.",
    excerpt: "Evidence-based information on vaccines from birth through adolescence.",
    readTime: "16 min read",
    publishedAt: "2026-06-10",
    tags: ["vaccines", "health", "immunity"],
    seoTitle: "Vaccination Guide: Childhood Vaccine Schedule & Safety | ChildBloom",
    metaDescription:
      "Complete guide to childhood vaccines: recommended schedule, safety data, side effects, and how to prepare your child.",
    hero: "/assets/hero-family.jpg",
    content: "Full content available in route file.",
  },
  {
    title: "Baby Sleep Guide: Newborn to Toddler Sleep Patterns & Training",
    slug: "baby-sleep-guide",
    category: "Newborn Care",
    description:
      "Comprehensive baby sleep guide covering newborn patterns, 4-12 month changes, toddler sleep, and gentle training methods.",
    excerpt: "Everything parents need to know about infant and toddler sleep from birth to age 3.",
    readTime: "22 min read",
    publishedAt: "2026-06-10",
    tags: ["sleep", "newborn", "toddler"],
    seoTitle: "Baby Sleep Guide: Newborn to Toddler Sleep Patterns | ChildBloom",
    metaDescription:
      "Comprehensive baby sleep guide covering newborn patterns, 4-12 month changes, toddler sleep, and gentle training methods.",
    hero: "/assets/hero-family.jpg",
    content: "Full content available in route file.",
  },
  {
    title: "Parenting Survival Guide: The First Year Without Losing Your Mind",
    slug: "parenting-survival-guide",
    category: "Parenting",
    description:
      "Practical survival guide for new parents covering sleep deprivation, feeding challenges, mental health, and building support.",
    excerpt:
      "Real talk and actionable strategies for surviving the intense first year of parenthood.",
    readTime: "17 min read",
    publishedAt: "2026-06-10",
    tags: ["parenting", "newborn", "mental-health"],
    seoTitle: "Parenting Survival Guide: The First Year | ChildBloom",
    metaDescription:
      "Practical survival guide for new parents covering sleep deprivation, feeding challenges, mental health, and building support.",
    hero: "/assets/hero-family.jpg",
    content: "Full content available in route file.",
  },

  // Fever Cluster
  {
    title: "Best Baby Thermometers 2026: Rectal, Ear & Forehead Reviews",
    slug: "best-baby-thermometers",
    category: "Product Reviews",
    description:
      "Expert review of the best baby thermometers including rectal, ear, forehead, and smart options with accuracy ratings.",
    excerpt:
      "Compare top baby thermometers with pros, cons, and recommendations for accurate temperature taking.",
    readTime: "12 min read",
    publishedAt: "2026-06-10",
    tags: ["thermometer", "reviews", "health"],
    seoTitle: "Best Baby Thermometers 2026 | ChildBloom Reviews",
    metaDescription:
      "Expert review of the best baby thermometers including rectal, ear, forehead, and smart options with accuracy ratings.",
    hero: "/assets/hero-family.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=baby+thermometer",
    pros: ["Fast readings", "Easy to use", "Accurate"],
    cons: ["Price varies", "Some require batteries"],
    keyFeatures: ["Rectal accuracy", "Forehead scan", "Fever alert"],
    content: "Full content available in route file.",
  },
  {
    title: "Fever in Children: When to Worry, How to Treat & Home Care",
    slug: "fever-in-children",
    category: "Child Health",
    description:
      "Complete guide to childhood fever: causes, when to seek care, medication dosing, and comfort measures.",
    excerpt: "Evidence-based advice on managing fever in babies and children of all ages.",
    readTime: "14 min read",
    publishedAt: "2026-06-10",
    tags: ["fever", "health", "illness"],
    seoTitle: "Fever in Children: Complete Parent Guide | ChildBloom",
    metaDescription:
      "Complete guide to childhood fever: causes, when to seek care, medication dosing, and comfort measures.",
    hero: "/assets/hero-family.jpg",
    content: "Full content available in route file.",
  },
  {
    title: "Baby Teething Symptoms: Timeline, Remedies & Soothing Tips",
    slug: "baby-teething-symptoms",
    category: "Child Health",
    description:
      "Everything parents need to know about teething: timeline, common symptoms, safe remedies, and when to call the doctor.",
    excerpt: "Recognize teething signs and learn safe ways to soothe your baby's discomfort.",
    readTime: "11 min read",
    publishedAt: "2026-06-10",
    tags: ["teething", "baby", "remedies"],
    seoTitle: "Baby Teething Symptoms & Remedies | ChildBloom",
    metaDescription:
      "Everything parents need to know about teething: timeline, common symptoms, safe remedies, and when to call the doctor.",
    hero: "/assets/hero-family.jpg",
    content: "Full content available in route file.",
  },
  {
    title: "Child Fever Home Remedies: Natural Ways to Comfort & Reduce Fever",
    slug: "child-fever-home-remedies",
    category: "Child Health",
    description:
      "Safe, natural fever-reducing strategies for children including hydration, cool compresses, and comfort techniques.",
    excerpt: "Evidence-based home remedies to help your child feel better during a fever.",
    readTime: "10 min read",
    publishedAt: "2026-06-10",
    tags: ["fever", "remedies", "natural"],
    seoTitle: "Child Fever Home Remedies | ChildBloom",
    metaDescription:
      "Safe, natural fever-reducing strategies for children including hydration, cool compresses, and comfort techniques.",
    hero: "/assets/hero-family.jpg",
    content: "Full content available in route file.",
  },

  // Nutrition Cluster
  {
    title: "Best Baby Bottles 2026: Anti-Colic, Glass & Silicone Reviews",
    slug: "best-baby-bottles",
    category: "Product Reviews",
    description:
      "Comprehensive review of the best baby bottles including anti-colic, glass, silicone, and newborn options.",
    excerpt: "Find the perfect bottle for your baby with our tested recommendations.",
    readTime: "13 min read",
    publishedAt: "2026-06-10",
    tags: ["bottles", "reviews", "feeding"],
    seoTitle: "Best Baby Bottles 2026 | ChildBloom Reviews",
    metaDescription:
      "Comprehensive review of the best baby bottles including anti-colic, glass, silicone, and newborn options.",
    hero: "/assets/hero-family.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=baby+bottle",
    pros: ["Easy to clean", "Good flow", "Durable"],
    cons: ["Some leak", "Price range"],
    keyFeatures: ["Anti-colic", "BPA free", "Easy grip"],
    content: "Full content available in route file.",
  },
  {
    title: "Best Baby Formula 2026: Organic, Gentle & Hypoallergenic Comparison",
    slug: "best-baby-formula",
    category: "Product Reviews",
    description:
      "Side-by-side comparison of popular baby formulas including organic, gentle, soy, and hypoallergenic options.",
    excerpt: "Help choosing the right formula for your baby's needs.",
    readTime: "15 min read",
    publishedAt: "2026-06-10",
    tags: ["formula", "reviews", "nutrition"],
    seoTitle: "Best Baby Formula 2026 | ChildBloom Reviews",
    metaDescription:
      "Side-by-side comparison of popular baby formulas including organic, gentle, soy, and hypoallergenic options.",
    hero: "/assets/hero-family.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=baby+formula",
    pros: ["Nutritionally complete", "Easy to digest options"],
    cons: ["Cost varies", "Preparation required"],
    keyFeatures: ["Iron fortified", "DHA/ARA", "Organic options"],
    content: "Full content available in route file.",
  },
  {
    title: "Toddler Nutrition Tips: Picky Eaters, Meal Ideas & Healthy Habits",
    slug: "toddler-nutrition-tips",
    category: "Nutrition",
    description:
      "Practical strategies for feeding picky toddlers, creating balanced meals, and building lifelong healthy eating habits.",
    excerpt: "Real solutions for common toddler feeding challenges.",
    readTime: "12 min read",
    publishedAt: "2026-06-10",
    tags: ["toddler", "nutrition", "picky-eater"],
    seoTitle: "Toddler Nutrition Tips: Picky Eaters & Healthy Meals | ChildBloom",
    metaDescription:
      "Practical strategies for feeding picky toddlers, creating balanced meals, and building lifelong healthy eating habits.",
    hero: "/assets/hero-family.jpg",
    content: "Full content available in route file.",
  },
  {
    title: "Starting Solids Guide: Baby Led Weaning, Purees & First Foods",
    slug: "starting-solids-guide",
    category: "Nutrition",
    description:
      "Complete guide to introducing solids: baby-led weaning, purees, allergen introduction, and weekly meal plans.",
    excerpt: "Everything you need to confidently start your baby on solid foods.",
    readTime: "16 min read",
    publishedAt: "2026-06-10",
    tags: ["solids", "weaning", "nutrition"],
    seoTitle: "Starting Solids Guide: Baby Led Weaning & First Foods | ChildBloom",
    metaDescription:
      "Complete guide to introducing solids: baby-led weaning, purees, allergen introduction, and weekly meal plans.",
    hero: "/assets/hero-family.jpg",
    content: "Full content available in route file.",
  },
  {
    title: "Best Baby Food Makers 2026: Steamer, Blender & Storage Reviews",
    slug: "best-baby-food-makers",
    category: "Product Reviews",
    description:
      "Review of the best baby food makers including steamer-blender combos, storage solutions, and DIY options.",
    excerpt: "Make healthy homemade baby food with the right equipment.",
    readTime: "11 min read",
    publishedAt: "2026-06-10",
    tags: ["baby food", "reviews", "kitchen"],
    seoTitle: "Best Baby Food Makers 2026 | ChildBloom Reviews",
    metaDescription:
      "Review of the best baby food makers including steamer-blender combos, storage solutions, and DIY options.",
    hero: "/assets/hero-family.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=baby+food+maker",
    pros: ["Easy to use", "Time saving", "Healthy meals"],
    cons: ["Counter space", "Cleanup"],
    keyFeatures: ["Steaming", "Blending", "Storage trays"],
    content: "Full content available in route file.",
  },

  // Development Cluster
  {
    title: "Best Educational Toys 2026: Developmental Toys for Babies & Toddlers",
    slug: "best-educational-toys",
    category: "Product Reviews",
    description:
      "Curated list of the best educational toys that support cognitive, motor, and language development from birth to age 3.",
    excerpt: "Age-appropriate toys that actually help development.",
    readTime: "14 min read",
    publishedAt: "2026-06-10",
    tags: ["toys", "development", "learning"],
    seoTitle: "Best Educational Toys 2026 | ChildBloom Reviews",
    metaDescription:
      "Curated list of the best educational toys that support cognitive, motor, and language development from birth to age 3.",
    hero: "/assets/hero-family.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=educational+toys",
    pros: ["Age appropriate", "Durable", "Educational value"],
    cons: ["Some expensive"],
    keyFeatures: ["Sensory", "Motor skills", "Problem solving"],
    content: "Full content available in route file.",
  },
  {
    title: "Baby Milestones by Month: Complete 0-12 Month Developmental Guide",
    slug: "baby-milestones-by-month",
    category: "Development",
    description:
      "Detailed month-by-month breakdown of baby milestones including motor skills, language, social, and cognitive development.",
    excerpt: "Track your baby's progress with this comprehensive monthly milestone guide.",
    readTime: "18 min read",
    publishedAt: "2026-06-10",
    tags: ["milestones", "development", "baby"],
    seoTitle: "Baby Milestones by Month: Complete Guide | ChildBloom",
    metaDescription:
      "Detailed month-by-month breakdown of baby milestones including motor skills, language, social, and cognitive development.",
    hero: "/assets/hero-family.jpg",
    content: "Full content available in route file.",
  },
  {
    title: "Speech Development Guide: Milestones, Activities & When to Seek Help",
    slug: "speech-development-guide",
    category: "Development",
    description:
      "Complete guide to toddler speech development from 12-36 months with daily activities, delay signs, and intervention tips.",
    excerpt: "Support your child's language development with practical strategies.",
    readTime: "16 min read",
    publishedAt: "2026-06-11",
    tags: ["speech", "development", "language"],
    seoTitle: "Speech Development Guide: Milestones & Activities | ChildBloom",
    metaDescription:
      "Complete guide to toddler speech development from 12-36 months with daily activities, delay signs, and intervention tips.",
    hero: "/assets/hero-family.jpg",
    content: "Full content available in route file.",
  },
  {
    title: "Best Baby Books 2026: Board Books & Interactive Picks for Ages 0-3",
    slug: "best-baby-books",
    category: "Product Reviews",
    description:
      "Best board books, lift-the-flap, touch-and-feel, and early literacy books for babies and toddlers.",
    excerpt: "Build a love of reading from day one with these top book recommendations.",
    readTime: "14 min read",
    publishedAt: "2026-06-11",
    tags: ["books", "reading", "development"],
    seoTitle: "Best Baby Books 2026 | ChildBloom Reviews",
    metaDescription:
      "Best board books, lift-the-flap, touch-and-feel, and early literacy books for babies and toddlers.",
    hero: "/assets/hero-family.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=baby+books",
    pros: ["Durable", "Engaging", "Educational"],
    cons: ["Some repetitive"],
    keyFeatures: ["Interactive", "Sensory", "Classic stories"],
    content: "Full content available in route file.",
  },

  // Sleep Cluster
  {
    title: "Best Baby Sleep Products 2026: Sleep Sacks, White Noise & Night Lights",
    slug: "best-baby-sleep-products",
    category: "Product Reviews",
    description:
      "Top-rated sleep sacks, white noise machines, blackout solutions, and safe sleep accessories for better baby sleep.",
    excerpt: "Create the perfect sleep environment with these tested products.",
    readTime: "12 min read",
    publishedAt: "2026-06-11",
    tags: ["sleep", "products", "reviews"],
    seoTitle: "Best Baby Sleep Products 2026 | ChildBloom Reviews",
    metaDescription:
      "Top-rated sleep sacks, white noise machines, blackout solutions, and safe sleep accessories for better baby sleep.",
    hero: "/assets/hero-family.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=baby+sleep+products",
    pros: ["Safe design", "Effective", "Easy to use"],
    cons: ["Varies by preference"],
    keyFeatures: ["Sleep sack", "White noise", "Blackout"],
    content: "Full content available in route file.",
  },
  {
    title: "Sleep Training Methods: Cry It Out, Ferber, Gentle & Chair Methods Compared",
    slug: "sleep-training-methods",
    category: "Parenting",
    description:
      "Detailed comparison of popular sleep training methods including pros, cons, age recommendations, and evidence-based guidance.",
    excerpt: "Find the sleep training approach that fits your family values.",
    readTime: "15 min read",
    publishedAt: "2026-06-11",
    tags: ["sleep", "training", "parenting"],
    seoTitle: "Sleep Training Methods Compared | ChildBloom",
    metaDescription:
      "Detailed comparison of popular sleep training methods including pros, cons, age recommendations, and evidence-based guidance.",
    hero: "/assets/hero-family.jpg",
    content: "Full content available in route file.",
  },
  {
    title: "Toddler Sleep Problems: Night Wakings, Bedtime Battles & Regression Solutions",
    slug: "toddler-sleep-problems",
    category: "Parenting",
    description:
      "Solutions for common toddler sleep issues including night wakings, bedtime resistance, sleep regression, and separation anxiety.",
    excerpt: "Gentle strategies to solve toddler sleep challenges.",
    readTime: "14 min read",
    publishedAt: "2026-06-11",
    tags: ["toddler", "sleep", "problems"],
    seoTitle: "Toddler Sleep Problems & Solutions | ChildBloom",
    metaDescription:
      "Solutions for common toddler sleep issues including night wakings, bedtime resistance, sleep regression, and separation anxiety.",
    hero: "/assets/hero-family.jpg",
    content: "Full content available in route file.",
  },

  // Gear Cluster
  {
    title: "Best Car Seats 2026: Infant, Convertible & Booster Picks",
    slug: "best-car-seats",
    category: "Product Reviews",
    description:
      "Expert-reviewed best car seats for every stage: infant, convertible, and booster with safety ratings and installation tips.",
    excerpt: "Choose the safest car seat for your child at every stage.",
    readTime: "15 min read",
    publishedAt: "2026-06-11",
    tags: ["car seat", "safety", "reviews"],
    seoTitle: "Best Car Seats 2026 | ChildBloom Reviews",
    metaDescription:
      "Expert-reviewed best car seats for every stage: infant, convertible, and booster with safety ratings and installation tips.",
    hero: "/assets/hero-family.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=car+seat",
    pros: ["Safety tested", "Easy install", "Comfortable"],
    cons: ["Price", "Weight"],
    keyFeatures: ["5-point harness", "Side impact", "LATCH"],
    content: "Full content available in route file.",
  },
  {
    title: "Best Strollers 2026: Travel Systems, Jogging & Everyday Picks",
    slug: "best-strollers",
    category: "Product Reviews",
    description:
      "Best strollers for every lifestyle: travel systems, lightweight, jogging, and double strollers with expert reviews.",
    excerpt: "Find the perfect stroller for your family's needs.",
    readTime: "14 min read",
    publishedAt: "2026-06-11",
    tags: ["stroller", "reviews", "gear"],
    seoTitle: "Best Strollers 2026 | ChildBloom Reviews",
    metaDescription:
      "Best strollers for every lifestyle: travel systems, lightweight, jogging, and double strollers with expert reviews.",
    hero: "/assets/hero-family.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=stroller",
    pros: ["Maneuverable", "Durable", "Easy fold"],
    cons: ["Some bulky"],
    keyFeatures: ["Travel system", "All-terrain", "Lightweight"],
    content: "Full content available in route file.",
  },
  {
    title: "Best Diaper Bags 2026: Backpack, Tote & Messenger Styles",
    slug: "best-diaper-bags",
    category: "Product Reviews",
    description:
      "Stylish and functional diaper bag reviews: backpacks, totes, and messenger styles with organization features.",
    excerpt: "Find a diaper bag that looks good and works hard.",
    readTime: "12 min read",
    publishedAt: "2026-06-11",
    tags: ["diaper bag", "reviews", "gear"],
    seoTitle: "Best Diaper Bags 2026 | ChildBloom Reviews",
    metaDescription:
      "Stylish and functional diaper bag reviews: backpacks, totes, and messenger styles with organization features.",
    hero: "/assets/hero-family.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=diaper+bag",
    pros: ["Stylish", "Organized", "Durable"],
    cons: ["Some expensive"],
    keyFeatures: ["Multiple pockets", "Changing pad", "Stroller clips"],
    content: "Full content available in route file.",
  },
  {
    title: "Best Baby Carriers 2026: Ergonomic Wraps, Slings & Structured Carriers",
    slug: "best-baby-carriers",
    category: "Product Reviews",
    description:
      "Best baby carriers for comfortable babywearing: wraps, ring slings, and structured carriers with safety guidelines.",
    excerpt: "Choose the right carrier for bonding and convenience.",
    readTime: "13 min read",
    publishedAt: "2026-06-11",
    tags: ["carrier", "reviews", "babywearing"],
    seoTitle: "Best Baby Carriers 2026 | ChildBloom Reviews",
    metaDescription:
      "Best baby carriers for comfortable babywearing: wraps, ring slings, and structured carriers with safety guidelines.",
    hero: "/assets/hero-family.jpg",
    affiliateUrl: "https://www.amazon.com/s?k=baby+carrier",
    pros: ["Ergonomic", "Comfortable", "Hands-free"],
    cons: ["Learning curve"],
    keyFeatures: ["Multiple positions", "Supportive", "Breathable"],
    content: "Full content available in route file.",
  },

  // General Parenting
  {
    title: "Newborn Essentials Checklist: Must-Have Baby Registry Items",
    slug: "newborn-essentials-checklist",
    category: "Newborn Care",
    description:
      "Complete newborn essentials checklist for the first 3 months: clothing, feeding, sleep, diapering, safety, and on-the-go gear.",
    excerpt: "Everything you actually need on your baby registry.",
    readTime: "11 min read",
    publishedAt: "2026-06-11",
    tags: ["registry", "essentials", "newborn"],
    seoTitle: "Newborn Essentials Checklist | ChildBloom",
    metaDescription:
      "Complete newborn essentials checklist for the first 3 months: clothing, feeding, sleep, diapering, safety, and on-the-go gear.",
    hero: "/assets/hero-family.jpg",
    content: "Full content available in route file.",
  },
  {
    title: "Parenting Hacks: 25 Time-Saving Tips for New Parents",
    slug: "parenting-hacks",
    category: "Parenting",
    description:
      "25 practical parenting hacks for sleep, feeding, diapering, travel, and sanity-saving tips that actually work.",
    excerpt: "Real-life solutions to make parenting easier.",
    readTime: "13 min read",
    publishedAt: "2026-06-11",
    tags: ["hacks", "tips", "parenting"],
    seoTitle: "Parenting Hacks: 25 Time-Saving Tips | ChildBloom",
    metaDescription:
      "25 practical parenting hacks for sleep, feeding, diapering, travel, and sanity-saving tips that actually work.",
    hero: "/assets/hero-family.jpg",
    content: "Full content available in route file.",
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
