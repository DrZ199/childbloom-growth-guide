/**
 * Resend email client — welcome email for newsletter signups.
 *
 * Env vars:
 *   RESEND_API_KEY  — server-only secret from resend.com
 *   RESEND_FROM     — "ChildBloom <noreply@childbloom.site>" (or your verified domain)
 */

const RESEND_API_KEY = process.env.RESEND_API_KEY as string | undefined;
const RESEND_FROM = process.env.RESEND_FROM ?? "ChildBloom <noreply@childbloom.site>";

let resendInstance: ReturnType<typeof import("resend").Resend> | null = null;

function getResend(): ReturnType<typeof import("resend").Resend> | null {
  if (!RESEND_API_KEY) return null;
  if (resendInstance) return resendInstance;
  const { Resend } = require("resend");
  resendInstance = new Resend(RESEND_API_KEY);
  return resendInstance;
}

export interface WelcomeEmailParams {
  to: string;
  firstName?: string;
}

export async function sendWelcomeEmail({ to, firstName }: WelcomeEmailParams): Promise<boolean> {
  const resend = getResend();
  if (!resend) return false;

  try {
    const greeting = firstName ? `Hello ${firstName}` : "Hello";
    const result = await resend.emails.send({
      from: RESEND_FROM,
      to: [to],
      subject: "Welcome to ChildBloom — Your first guide awaits",
      html: `
        <div style="font-family: Inter, Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #1a202c;">
          <header style="border-bottom: 2px solid #fbbf24; padding-bottom: 16px; margin-bottom: 24px;">
            <h1 style="font-size: 24px; font-weight: 700; color: #78350f;">ChildBloom</h1>
          </header>
          <main>
            <p style="font-size: 16px;">${greeting},</p>
            <p style="font-size: 16px;">
              Welcome to <strong>ChildBloom</strong> — thank you for subscribing. We send one calm,
              practical email each week to help you feel more confident as a parent.
            </p>
            <p style="font-size: 16px;">In your first email you'll get:</p>
            <ul style="font-size: 16px; line-height: 1.8;">
              <li>Age-by-age milestone checklist for your child</li>
              <li>Sleep tips that actually work</li>
              <li>This week's best product picks (no fluff)</li>
            </ul>
            <p style="font-size: 16px;">
              While you wait, our most-loved guide is
              <a href="https://childbloom.site/articles/newborn-sleep" style="color:#d97706;">Newborn Sleep: No-Cry Guide for Week 1–4</a>.
            </p>
          </main>
          <footer style="margin-top: 32px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 13px; color: #6b7280;">
            <p>ChildBloom &middot; <a href="https://childbloom.site" style="color:#6b7280;">childbloom.site</a></p>
            <p>You&apos;re receiving this because you subscribed at childbloom.site.</p>
            <p><a href="https://childbloom.site/unsubscribe?email=${encodeURIComponent(to)}" style="color:#6b7280;">Unsubscribe</a></p>
          </footer>
        </div>
      `,
      text: `
        ${greeting},

        Welcome to ChildBloom — thank you for subscribing. We send one calm, practical email each week to help you feel more confident as a parent.

        In your first email you'll get:
          - Age-by-age milestone checklist for your child
          - Sleep tips that actually work
          - This week's best product picks (no fluff)

        While you wait, our most-loved guide is: https://childbloom.site/articles/newborn-sleep

        ChildBloom · childbloom.site
        You're receiving this because you subscribed at childbloom.site.
        Unsubscribe: https://childbloom.site/unsubscribe?email=${to}
      `,
    });
    return result.error === undefined;
  } catch {
    console.error("[resend] welcome email failed");
    return false;
  }
}
