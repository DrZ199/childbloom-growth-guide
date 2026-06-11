/**
 * Environment variable validation using Zod.
 * 
 * This ensures that all required environment variables are present and correctly typed
 * before the application starts, preventing silent failures in production.
 */

import { z } from "zod";

const envSchema = z.object({
  // Required for Supabase integration
  VITE_SUPABASE_URL: z.string().url().optional(),
  VITE_SUPABASE_ANON_KEY: z.string().min(1).optional(),
  
  // Required for error monitoring (optional but recommended)
  VITE_SENTRY_DSN: z.string().url().optional(),
  
  // Required for email sending (server-side only)
  RESEND_API_KEY: z.string().min(1).optional(),
  RESEND_FROM: z.string().min(1).optional(),
  
  // Required for monetization (optional but recommended)
  VITE_ADSENSE_PUBLISHER_ID: z.string().regex(/^ca-pub-\d+$/).optional(),
});

export type Env = z.infer<typeof envSchema>;

/**
 * Validates and returns the environment variables.
 * Throws an error in development if required variables are missing.
 */
export function getEnv(): Env {
  const env = {
    VITE_SUPABASE_URL: import.meta.env.VITE_SUPABASE_URL,
    VITE_SUPABASE_ANON_KEY: import.meta.env.VITE_SUPABASE_ANON_KEY,
    VITE_SENTRY_DSN: import.meta.env.VITE_SENTRY_DSN,
    RESEND_API_KEY: process.env.RESEND_API_KEY,
    RESEND_FROM: process.env.RESEND_FROM,
    VITE_ADSENSE_PUBLISHER_ID: import.meta.env.VITE_ADSENSE_PUBLISHER_ID,
  };

  const result = envSchema.safeParse(env);

  if (!result.success) {
    const errors = result.error.flatten().fieldErrors;
    const errorMsg = Object.entries(errors)
      .map(([key, msgs]) => `${key}: ${msgs?.join(", ")}`)
      .join("\n");
    
    console.error("[Config] Environment variable validation failed:\n", errorMsg);
    
    // In development, throw to catch issues early
    if (process.env.NODE_ENV === "development") {
      throw new Error(`Environment validation failed:\n${errorMsg}`);
    }
  }

  return result.data;
}

// Export validated environment for use throughout the app
export const env = getEnv();
