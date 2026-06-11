/**
 * Author registry. Source of truth for /authors pages, Article schema,
 * and MedicalWebPage `reviewedBy` fields.
 */

export interface Author {
  slug: string;
  name: string;
  credentials: string;
  title: string;
  bio: string;
  photoUrl?: string;
  links: {
    linkedin?: string;
    twitter?: string;
    website?: string;
  };
  isMedicalReviewer: boolean;
}

export const authors: Author[] = [
  {
    slug: "dr-zee-islam",
    name: "Dr. Zee Islam",
    credentials: "MBBS, MCPS (Pediatrics)",
    title: "Pediatric Medical Reviewer",
    bio: "Dr. Zee Islam is a practicing pediatrician (MBBS, MCPS Pediatrics) who reviews ChildBloom's health and development content for clinical accuracy. He focuses on newborn care, child nutrition, common pediatric illnesses, and developmental milestones.",
    photoUrl: "https://childbloom.site/authors/dr-zee-islam.jpg",
    links: {},
    isMedicalReviewer: true,
  },
  {
    slug: "childbloom-editorial",
    name: "ChildBloom Editorial Team",
    credentials: "Researched by our editorial team",
    title: "Editorial",
    bio: "ChildBloom's editorial team researches and writes evidence-based articles for parents, drawing on peer-reviewed studies, official guidance from the AAP, CDC, WHO, and NHS, and clinical review by Dr. Zee Islam.",
    links: {},
    isMedicalReviewer: false,
  },
];

export function getAuthor(slug: string): Author | undefined {
  return authors.find((a) => a.slug === slug);
}

export const DEFAULT_MEDICAL_REVIEWER = "Dr. Zee Islam, MBBS, MCPS (Pediatrics)";