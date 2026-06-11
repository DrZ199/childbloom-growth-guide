#!/usr/bin/env tsx
/**
 * Creates simple SVG placeholder images for remaining Pinterest pins
 * These can later be replaced with AI-generated images
 */

import fs from "fs";
import path from "path";

const outputDir = path.join(process.cwd(), "public", "pinterest-pins");

const remainingPins = [
  { slug: "best-baby-formula", title: "Best Baby Formula 2026", color: "#E8F5E9" },
  { slug: "toddler-nutrition-tips", title: "Toddler Nutrition Tips", color: "#FFF3E0" },
  { slug: "starting-solids-guide", title: "Starting Solids Guide", color: "#FCE4EC" },
  { slug: "best-baby-food-makers", title: "Best Baby Food Makers", color: "#E3F2FD" },
  { slug: "best-educational-toys", title: "Best Educational Toys", color: "#F3E5F5" },
  { slug: "baby-milestones-by-month", title: "Baby Milestones by Month", color: "#E8EAF6" },
  { slug: "speech-development-guide", title: "Speech Development Guide", color: "#E0F7FA" },
  { slug: "best-baby-books", title: "Best Baby Books", color: "#FFF8E1" },
  { slug: "best-baby-sleep-products", title: "Best Baby Sleep Products", color: "#F3E5F5" },
  { slug: "sleep-training-methods", title: "Sleep Training Methods", color: "#E8F5E9" },
  { slug: "toddler-sleep-problems", title: "Toddler Sleep Problems", color: "#E3F2FD" },
  { slug: "best-car-seats", title: "Best Car Seats", color: "#FFEBEE" },
  { slug: "best-strollers", title: "Best Strollers", color: "#E1F5FE" },
  { slug: "best-diaper-bags", title: "Best Diaper Bags", color: "#FBE9E7" },
  { slug: "best-baby-carriers", title: "Best Baby Carriers", color: "#FCE4EC" },
  { slug: "newborn-essentials-checklist", title: "Newborn Essentials", color: "#E8F5E9" },
  { slug: "parenting-hacks", title: "Parenting Hacks", color: "#FFF3E0" },
  { slug: "newborn-sleep", title: "Newborn Sleep Guide", color: "#E8EAF6" },
  { slug: "starting-solids", title: "Starting Solids", color: "#FCE4EC" },
  { slug: "speech-milestones", title: "Speech Milestones", color: "#E0F7FA" },
  { slug: "best-baby-monitors", title: "Best Baby Monitors", color: "#E3F2FD" },
];

console.log(`Creating ${remainingPins.length} placeholder SVG images...`);

remainingPins.forEach((pin) => {
  const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="600" height="900" viewBox="0 0 600 900" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:${pin.color};stop-opacity:1" />
      <stop offset="100%" style="stop-color:#FFFFFF;stop-opacity:1" />
    </linearGradient>
  </defs>
  
  <!-- Background -->
  <rect width="600" height="900" fill="url(#grad)"/>
  
  <!-- Decorative circle -->
  <circle cx="300" cy="350" r="120" fill="#FFFFFF" opacity="0.3"/>
  
  <!-- Category badge -->
  <rect x="40" y="60" width="180" height="36" rx="18" fill="#FFFFFF" opacity="0.9"/>
  <text x="50" y="85" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="600" fill="#374151">ChildBloom</text>
  
  <!-- Main title -->
  <text x="300" y="520" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="700" fill="#1F2937" text-anchor="middle" dominant-baseline="middle">
    ${pin.title.split(" ").slice(0, 3).join(" ")}
  </text>
  <text x="300" y="560" font-family="system-ui, -apple-system, sans-serif" font-size="32" font-weight="700" fill="#1F2937" text-anchor="middle" dominant-baseline="middle">
    ${pin.title.split(" ").slice(3).join(" ")}
  </text>
  
  <!-- Subtitle -->
  <text x="300" y="620" font-family="system-ui, -apple-system, sans-serif" font-size="16" fill="#6B7280" text-anchor="middle">Expert Parenting Guide</text>
  
  <!-- Bottom branding -->
  <rect x="0" y="820" width="600" height="80" fill="#FFFFFF" opacity="0.9"/>
  <text x="300" y="870" font-family="system-ui, -apple-system, sans-serif" font-size="18" font-weight="600" fill="#374151" text-anchor="middle">childbloom.site</text>
</svg>`;

  const filePath = path.join(outputDir, `${pin.slug}.svg`);
  fs.writeFileSync(filePath, svg);
  console.log(`✓ Created ${pin.slug}.svg`);
});

console.log(`\n✅ All placeholder images created in ${outputDir}`);
console.log("Note: Replace .svg files with high-quality JPGs when possible.");
