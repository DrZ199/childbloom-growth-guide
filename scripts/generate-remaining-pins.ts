#!/usr/bin/env tsx
/**
 * Generate Pinterest Images for Remaining Articles
 * Run this when the image generation limit resets
 */

import { generate_image } from "../tools/generate_image"; // Adjust path as needed

const remainingPins = [
  {
    slug: "potty-training-guide",
    prompt: "Pinterest pin for 'Potty Training Guide'. Clean modern parenting aesthetic, soft pastel colors, toddler bathroom illustration, text overlay 'Potty Training Guide', professional typography, warm trustworthy feeling, 2:3 aspect ratio, high quality"
  },
  {
    slug: "toddler-tantrums",
    prompt: "Pinterest pin for 'Toddler Tantrums'. Clean modern parenting aesthetic, soft pastel colors, calm parent-child illustration, text overlay 'Toddler Tantrums', professional typography, warm trustworthy feeling, 2:3 aspect ratio, high quality"
  },
  // Add all remaining 51 pins here...
];

async function generateRemaining() {
  console.log(`Generating ${remainingPins.length} remaining Pinterest images...`);
  
  for (const pin of remainingPins) {
    try {
      await generate_image({
        file_path: `public/pinterest-pins/${pin.slug}.jpg`,
        prompt: pin.prompt
      });
      console.log(`✓ Generated ${pin.slug}.jpg`);
    } catch (error) {
      console.error(`✗ Failed ${pin.slug}:`, error);
    }
  }
}

generateRemaining();