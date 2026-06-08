/**
 * Simple in-memory rate limiter.
 *
 * Tracks request counts per key (e.g. IP address) within a sliding time window.
 * Suitable for single-instance deployments. For multi-instance setups, replace
 * the backing store with Redis (e.g. Upstash) using the same interface.
 */

interface RateLimitEntry {
  count: number;
  resetAt: number;
}

interface RateLimitConfig {
  /** Maximum number of requests allowed in the window. */
  maxRequests: number;
  /** Window duration in milliseconds. */
  windowMs: number;
}

const store = new Map<string, RateLimitEntry>();

// Periodically clean expired entries to prevent memory leaks
const CLEANUP_INTERVAL_MS = 60_000;
let cleanupTimer: ReturnType<typeof setInterval> | undefined;

function ensureCleanup() {
  if (cleanupTimer) return;
  if (typeof setInterval === "undefined") return;
  cleanupTimer = setInterval(() => {
    const now = Date.now();
    for (const [key, entry] of store) {
      if (now >= entry.resetAt) store.delete(key);
    }
    if (store.size === 0 && cleanupTimer) {
      clearInterval(cleanupTimer);
      cleanupTimer = undefined;
    }
  }, CLEANUP_INTERVAL_MS);
  // Allow process to exit even if timer is running
  if (typeof cleanupTimer === "object" && "unref" in cleanupTimer) {
    cleanupTimer.unref();
  }
}

/**
 * Check whether a request is within the rate limit.
 *
 * @returns An object with `allowed` boolean, `remaining` requests, and
 *          `retryAfter` seconds (only set when limited).
 */
export function checkRateLimit(
  key: string,
  config: RateLimitConfig,
): { allowed: boolean; remaining: number; retryAfter?: number } {
  const now = Date.now();
  const entry = store.get(key);

  // First request or window expired — start a new window
  if (!entry || now >= entry.resetAt) {
    store.set(key, { count: 1, resetAt: now + config.windowMs });
    ensureCleanup();
    return { allowed: true, remaining: config.maxRequests - 1 };
  }

  // Within window — check count
  if (entry.count >= config.maxRequests) {
    const retryAfter = Math.ceil((entry.resetAt - now) / 1000);
    return { allowed: false, remaining: 0, retryAfter };
  }

  // Increment and allow
  entry.count += 1;
  return { allowed: true, remaining: config.maxRequests - entry.count };
}

/**
 * Reset rate limit state for a key. Useful in tests.
 */
export function resetRateLimit(key: string): void {
  store.delete(key);
}

/**
 * Clear all rate limit state. Useful in tests.
 */
export function resetAllRateLimits(): void {
  store.clear();
}

// ---------------------------------------------------------------------------
// Predefined rate limit presets
// ---------------------------------------------------------------------------

/** Newsletter signup: 5 per IP per 10 minutes. */
export const RATE_LIMIT_NEWSLETTER: RateLimitConfig = {
  maxRequests: 5,
  windowMs: 10 * 60 * 1000,
};

/** Contact form: 3 per IP per 15 minutes. */
export const RATE_LIMIT_CONTACT: RateLimitConfig = {
  maxRequests: 3,
  windowMs: 15 * 60 * 1000,
};

/** Search: 30 per IP per minute. */
export const RATE_LIMIT_SEARCH: RateLimitConfig = {
  maxRequests: 30,
  windowMs: 60 * 1000,
};
