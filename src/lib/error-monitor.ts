/**
 * Error monitoring — Sentry-first, console fallback.
 *
 * Usage:
 *   import { captureException } from "@/lib/error-monitor";
 *   captureException(error, { component: "MyComponent" });
 */

export interface ErrorContext {
  component?: string;
  action?: string;
  userId?: string;
  extra?: Record<string, unknown>;
}

// ---------------------------------------------------------------------------
// Lazy-loaded Sentry client (avoids SSR issues with @sentry/react)
// ---------------------------------------------------------------------------

let sentryReady = false;

export function initSentryClient(): void {
  if (sentryReady) return;
  sentryReady = true; // mark ready to prevent double-init

  const dsn =
    typeof window !== "undefined"
      ? (window as unknown as Record<string, string>).__SENTRY_DSN ??
        import.meta.env.VITE_SENTRY_DSN ??
        ""
      : "";

  if (!dsn) return;

  try {
    import("@sentry/react").then((Sentry) => {
      Sentry.init({
        dsn,
        environment: import.meta.env.MODE ?? process.env.NODE_ENV,
        tracesSampleRate: 0.1,
        replaysSessionSampleRate: 0,
        replaysOnErrorSampleRate: 1.0,
        integrations: [
          Sentry.replayIntegration({ maskAllText: true, blockAllMedia: true }),
        ],
      });
    });
  } catch {
    // @sentry/react not available — silently skip
  }
}

// ---------------------------------------------------------------------------
// Public API
// ---------------------------------------------------------------------------

export function captureException(error: unknown, context?: ErrorContext): void {
  initSentryClient();

  if (typeof window !== "undefined" && sentryReady) {
    import("@sentry/react").then((Sentry) => {
      Sentry.withScope((scope) => {
        if (context?.component) scope.setFingerprint([context.component]);
        if (context?.action) scope.setTag("action", context.action);
        if (context?.userId) scope.setUser({ id: context.userId });
        if (context?.extra) scope.setExtras(context.extra);
        Sentry.captureException(error as Error);
      });
    });
  }

  const message = error instanceof Error ? error.message : String(error);
  const stack = error instanceof Error ? error.stack : undefined;
  console.error(
    `[ErrorMonitor]${context?.component ? ` [${context.component}]` : ""} ${message}`,
    { action: context?.action, userId: context?.userId, extra: context?.extra, stack },
  );
}

export function captureMessage(message: string, context?: ErrorContext): void {
  if (typeof window !== "undefined" && sentryReady) {
    import("@sentry/react").then((Sentry) => {
      Sentry.captureMessage(message, { ...context });
    });
  }
  console.info(`[ErrorMonitor] ${message}`, context);
}

export function setUser(userId: string | null): void {
  if (typeof window !== "undefined" && sentryReady) {
    import("@sentry/react").then((Sentry) => {
      Sentry.setUser(userId ? { id: userId } : null);
    });
  }
}

export function isErrorMonitoringEnabled(): boolean {
  return sentryReady;
}
