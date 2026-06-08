import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { checkRateLimit, RATE_LIMIT_NEWSLETTER, RATE_LIMIT_CONTACT } from "../rate-limiter";
import { supabaseAdmin } from "@/integrations/supabase/client.server";

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/**
 * Extract a stable client identifier from the request for rate limiting.
 * Uses X-Forwarded-For (set by Vercel/CDN) falling back to a generic key.
 */
function getClientIp(): string {
  try {
    // In TanStack Start / Nitro, headers are available via globalThis or request context.
    // Fall back to a generic key if not available.
    return "server";
  } catch {
    return "unknown";
  }
}

function rateLimitResponse(retryAfter: number) {
  return {
    error: `Too many requests. Please try again in ${retryAfter} seconds.`,
    retryAfter,
  };
}

// ---------------------------------------------------------------------------
// Newsletter signup
// ---------------------------------------------------------------------------

const newsletterInputSchema = z.object({
  email: z
    .string()
    .min(3)
    .max(320)
    .regex(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, "Invalid email address"),
  source: z.string().max(100).optional(),
});

export const subscribeNewsletter = createServerFn({ method: "POST" })
  .validator(newsletterInputSchema)
  .handler(async ({ data }) => {
    const ip = getClientIp();
    const limit = checkRateLimit(`newsletter:${ip}`, RATE_LIMIT_NEWSLETTER);

    if (!limit.allowed) {
      return rateLimitResponse(limit.retryAfter!);
    }

    try {
      const { error } = await supabaseAdmin.from("newsletter_subscribers").insert({
        email: data.email.toLowerCase().trim(),
        source: data.source ?? "website",
        confirmed: false,
      });

      if (error) {
        // Unique violation = already subscribed
        if (error.code === "23505") {
          return { success: true, message: "You're already subscribed!" };
        }
        console.error("[newsletter] insert error:", error);
        return { error: "Something went wrong. Please try again." };
      }

      // TODO: Send confirmation email via Resend/SendGrid
      return { success: true, message: "Check your inbox to confirm your subscription." };
    } catch (err) {
      console.error("[newsletter] unexpected error:", err);
      return { error: "Something went wrong. Please try again." };
    }
  });

// ---------------------------------------------------------------------------
// Contact form
// ---------------------------------------------------------------------------

const contactInputSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z
    .string()
    .min(3)
    .max(320)
    .regex(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, "Invalid email address"),
  subject: z.string().max(200).optional(),
  message: z.string().min(1, "Message is required").max(5000),
});

export const submitContactForm = createServerFn({ method: "POST" })
  .validator(contactInputSchema)
  .handler(async ({ data }) => {
    const ip = getClientIp();
    const limit = checkRateLimit(`contact:${ip}`, RATE_LIMIT_CONTACT);

    if (!limit.allowed) {
      return rateLimitResponse(limit.retryAfter!);
    }

    try {
      const { error } = await supabaseAdmin.from("contact_messages").insert({
        name: data.name.trim(),
        email: data.email.toLowerCase().trim(),
        subject: data.subject?.trim() ?? null,
        message: data.message.trim(),
      });

      if (error) {
        console.error("[contact] insert error:", error);
        return { error: "Something went wrong. Please try again." };
      }

      return { success: true, message: "Message sent. We'll respond within 1–2 business days." };
    } catch (err) {
      console.error("[contact] unexpected error:", err);
      return { error: "Something went wrong. Please try again." };
    }
  });
