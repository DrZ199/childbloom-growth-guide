/**
 * Error monitoring scaffold.
 *
 * Provides a pluggable error reporting interface. By default, errors are
 * logged to the console. To integrate Sentry (or another provider), replace
 * the `reportError` implementation below with the Sentry SDK call.
 *
 * Setup:
 *   1. Install: `npm install @sentry/react @sentry/node`
 *   2. Set SENTRY_DSN in environment
 *   3. Uncomment the Sentry init block and replace reportError implementation
 *
 * Usage:
 *   import { reportError, captureException } from "@/lib/error-monitor";
 *   captureException(error);
 */

export interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  extra?: Record<string, unknown>;
}

// ---------------------------------------------------------------------------
// Configuration
// ---------------------------------------------------------------------------

const SENTRY_DSN =
  typeof window !== "undefined"
    ? (window as unknown as Record<string, string>).__SENTRY_DSN ?? ""
    : process.env.SENTRY_DSN ?? "";

const IS_ENABLED = Boolean(SENTRY_DSN);

// ---------------------------------------------------------------------------
// Sentry initialization (uncomment when @sentry/react is installed)
// ---------------------------------------------------------------------------
// import * as Sentry from "@sentry/react";
// if (IS_ENABLED) {
//   Sentry.init({
//     dsn: SENTRY_DSN,
//     environment: process.env.NODE_ENV,
//     tracesSampleRate: 0.1,
//     replaysSessionSampleRate: 0,
//     replaysOnErrorSampleRate: 1.0,
//   });
// }

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

/**
 * Report a caught error with optional context.
 */
export function captureException(error: unknown, context?: ErrorContext): void {
  if (IS_ENABLED) {
    // Sentry.captureException(error, { contexts: { custom: context } });
    // Uncomment above when Sentry is installed
  }

  // Fallback: structured console error
  const message =
    error instanceof Error ? error.message : String(error);
  const stack = error instanceof Error ? error.stack : undefined;

  console.error(
    `[ErrorMonitor]${context?.component ? ` [${context.component}]` : ""} ${message}`,
    {
      action: context?.action,
      userId: context?.userId,
      extra: context?.extra,
      stack,
    },
  );
}

/**
 * Report a message / breadcrumb (non-error event).
 */
export function captureMessage(message: string, context?: ErrorContext): void {
  if (IS_ENABLED) {
    // Sentry.captureMessage(message, { contexts: { custom: context } });
  }

  if (typeof console !== "undefined") {
    console.info(`[ErrorMonitor] ${message}`, context);
  }
}

/**
 * Set the current user for error context.
 */
export function setUser(userId: string | null): void {
  if (IS_ENABLED) {
    // Sentry.setUser(userId ? { id: userId } : null);
  }
}

/**
 * Check if error monitoring is active.
 */
export function isErrorMonitoringEnabled(): boolean {
  return IS_ENABLED;
}
