import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { checkRateLimit, RATE_LIMIT_NEWSLETTER, RATE_LIMIT_CONTACT } from "../rate-limiter";
import { supabaseAdmin } from "@/integrations/supabase/client.server";
import { sendWelcomeEmail } from "@/lib/email/resend";
import { captureException } from "@/lib/error-monitor";

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
    // We use a safe fallback to prevent rate limiter bypass.
    const headers = typeof globalThis !== 'undefined' && 'headers' in globalThis 
      ? (globalThis as Record<string, unknown>).headers 
      : {};
    
    const forwarded = (headers as Record<string, string>)['x-forwarded-for'];
    if (forwarded) {
      return forwarded.split(',')[0].trim();
    }
    
    const realIp = (headers as Record<string, string>)['x-real-ip'];
    if (realIp) {
      return realIp.trim();
    }
    
    return "unknown-client";
  } catch {
    return "unknown-client";
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
        captureException(error, { action: "newsletter_insert", extra: { email: data.email } });
        return { error: "Something went wrong. Please try again." };
      }

      // Send confirmation email via Resend
      try {
        await sendWelcomeEmail({ to: data.email.toLowerCase().trim() });
      } catch (emailErr) {
        captureException(emailErr, { action: "newsletter_welcome_email", extra: { email: data.email } });
        // Don't fail the signup if email fails, but log it
      }

      return { success: true, message: "Check your inbox to confirm your subscription." };
    } catch (err) {
      captureException(err, { action: "newsletter_unexpected_error", extra: { email: data.email } });
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
        captureException(error, { action: "contact_insert", extra: { email: data.email } });
        return { error: "Something went wrong. Please try again." };
      }

      return { success: true, message: "Message sent. We'll respond within 1–2 business days." };
    } catch (err) {
      captureException(err, { action: "contact_unexpected_error", extra: { email: data.email } });
      return { error: "Something went wrong. Please try again." };
    }
  });
