import { describe, it, expect, beforeEach } from "vitest";
import {
  checkRateLimit,
  resetAllRateLimits,
  resetRateLimit,
  RATE_LIMIT_NEWSLETTER,
  RATE_LIMIT_CONTACT,
  RATE_LIMIT_SEARCH,
} from "@/lib/rate-limiter";

describe("rate-limiter", () => {
  beforeEach(() => {
    resetAllRateLimits();
  });

  describe("checkRateLimit", () => {
    it("allows the first request", () => {
      const result = checkRateLimit("test-key", { maxRequests: 5, windowMs: 60_000 });
      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(4);
    });

    it("decrements remaining on each request", () => {
      const config = { maxRequests: 3, windowMs: 60_000 };
      checkRateLimit("k", config);
      const r2 = checkRateLimit("k", config);
      expect(r2.allowed).toBe(true);
      expect(r2.remaining).toBe(1);
    });

    it("blocks requests beyond maxRequests", () => {
      const config = { maxRequests: 2, windowMs: 60_000 };
      checkRateLimit("k", config);
      checkRateLimit("k", config);
      const blocked = checkRateLimit("k", config);
      expect(blocked.allowed).toBe(false);
      expect(blocked.remaining).toBe(0);
      expect(blocked.retryAfter).toBeTypeOf("number");
      expect(blocked.retryAfter).toBeGreaterThan(0);
    });

    it("treats different keys independently", () => {
      const config = { maxRequests: 1, windowMs: 60_000 };
      const r1 = checkRateLimit("a", config);
      const r2 = checkRateLimit("b", config);
      expect(r1.allowed).toBe(true);
      expect(r2.allowed).toBe(true);
    });

    it("resets after window expires", async () => {
      const config = { maxRequests: 1, windowMs: 50 };
      checkRateLimit("k", config);
      await new Promise((r) => setTimeout(r, 60));
      const result = checkRateLimit("k", config);
      expect(result.allowed).toBe(true);
    });
  });

  describe("resetRateLimit / resetAllRateLimits", () => {
    it("resetRateLimit clears a single key", () => {
      const config = { maxRequests: 1, windowMs: 60_000 };
      checkRateLimit("k", config);
      resetRateLimit("k");
      const result = checkRateLimit("k", config);
      expect(result.allowed).toBe(true);
      expect(result.remaining).toBe(0);
    });

    it("resetAllRateLimits clears all keys", () => {
      const config = { maxRequests: 1, windowMs: 60_000 };
      checkRateLimit("a", config);
      checkRateLimit("b", config);
      resetAllRateLimits();
      expect(checkRateLimit("a", config).allowed).toBe(true);
      expect(checkRateLimit("b", config).allowed).toBe(true);
    });
  });

  describe("predefined presets", () => {
    it("RATE_LIMIT_NEWSLETTER allows 5 per 10 min", () => {
      expect(RATE_LIMIT_NEWSLETTER.maxRequests).toBe(5);
      expect(RATE_LIMIT_NEWSLETTER.windowMs).toBe(10 * 60_000);
    });

    it("RATE_LIMIT_CONTACT allows 3 per 15 min", () => {
      expect(RATE_LIMIT_CONTACT.maxRequests).toBe(3);
      expect(RATE_LIMIT_CONTACT.windowMs).toBe(15 * 60_000);
    });

    it("RATE_LIMIT_SEARCH allows 30 per minute", () => {
      expect(RATE_LIMIT_SEARCH.maxRequests).toBe(30);
      expect(RATE_LIMIT_SEARCH.windowMs).toBe(60_000);
    });
  });
});
