#!/usr/bin/env tsx
/**
 * Pinterest Pin Generator for ChildBloom Articles
 * Generates pin titles, descriptions, and image prompts for all articles
 *
 * Usage: npx tsx scripts/generate-pins.ts
 */

import { articles } from "../src/lib/site-data";

interface Pin {
  slug: string;
  title: string;
  description: string;
  imagePrompt: string;
  category: string;
}

const pins: Pin[] = articles.map((article) => {
  const baseTitle =
    article.title.length > 80 ? article.title.substring(0, 77) + "..." : article.title;

  const pinTitle = `${baseTitle} | ChildBloom`;

  const description = `${article.description} Read the full guide at childbloom.site/articles/${article.slug}`;

  const imagePrompt = `Pinterest pin for "${article.title}". Clean modern parenting aesthetic, soft pastel colors, baby-themed illustration or photo, text overlay "${article.title}", professional typography, warm and trustworthy feeling, 2:3 aspect ratio, high quality`;

  return {
    slug: article.slug,
    title: pinTitle,
    description: description.substring(0, 500),
    imagePrompt,
    category: article.category,
  };
});

console.log("=== Pinterest Pin Data for ChildBloom ===\n");
console.log(`Total articles: ${pins.length}\n`);

pins.forEach((pin, index) => {
  console.log(`--- Pin ${index + 1}: ${pin.slug} ---`);
  console.log(`Title: ${pin.title}`);
  console.log(`Description: ${pin.description}`);
  console.log(`Image Prompt: ${pin.imagePrompt}`);
  console.log(`Category: ${pin.category}`);
  console.log("");
});

console.log("\n=== Summary by Category ===");
const byCategory = pins.reduce(
  (acc, pin) => {
    acc[pin.category] = (acc[pin.category] || 0) + 1;
    return acc;
  },
  {} as Record<string, number>,
);

Object.entries(byCategory).forEach(([cat, count]) => {
  console.log(`${cat}: ${count} pins`);
});

console.log("\n=== JSON Export (for automation) ===");
console.log(JSON.stringify(pins, null, 2));
