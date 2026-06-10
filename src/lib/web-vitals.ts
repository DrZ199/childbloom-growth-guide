/**
 * Web Vitals reporter.
 *
 * Collects Core Web Vitals (LCP, FID, CLS, INP, TTFB) and sends them
 * to the error monitoring service or analytics endpoint.
 *
 * Usage: Import in __root.tsx or a top-level layout component.
 *
 *   import { initWebVitals } from "@/lib/web-vitals";
 *   initWebVitals();
 */

interface VitalMetric {
  name: "CLS" | "FID" | "LCP" | "INP" | "TTFB";
  value: number;
  rating: "good" | "needs-improvement" | "poor";
  delta: number;
  id: string;
}

type ReportCallback = (metric: VitalMetric) => void;

const thresholds: Record<VitalMetric["name"], { good: number; poor: number }> = {
  CLS: { good: 0.1, poor: 0.25 },
  FID: { good: 100, poor: 300 },
  LCP: { good: 2500, poor: 4000 },
  INP: { good: 200, poor: 500 },
  TTFB: { good: 800, poor: 1800 },
};

function rateMetric(name: VitalMetric["name"], value: number): VitalMetric["rating"] {
  const t = thresholds[name];
  if (value <= t.good) return "good";
  if (value <= t.poor) return "needs-improvement";
  return "poor";
}

const defaultReporter: ReportCallback = (metric) => {
  // Send to analytics endpoint or error monitoring
  if (typeof window !== "undefined" && "gtag" in window) {
    (window as unknown as Record<string, (cmd: string, event: string, params: Record<string, unknown>) => void>).gtag(
      "event",
      metric.name,
      {
        value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
        event_category: "Web Vitals",
        metric_rating: rateMetric(metric.name, metric.value),
        non_interaction: true,
      },
    );
  }

  // Log for debugging in development
  if (process.env.NODE_ENV === "development") {
    console.info(`[WebVitals] ${metric.name}: ${metric.value.toFixed(2)} (${rateMetric(metric.name, metric.value)})`);
  }
};

/**
 * Initialize Web Vitals collection.
 *
 * @param onReport - Custom callback for each vital metric.
 *                   Defaults to GA4 event + console logging.
 */
export function initWebVitals(onReport: ReportCallback = defaultReporter): void {
  if (typeof window === "undefined") return;

  // Dynamically import web-vitals to avoid bundle bloat
  import("web-vitals").then(
    ({ onCLS, onFID, onLCP, onINP, onTTFB }) => {
      onCLS((m) => onReport({ ...m, rating: rateMetric("CLS", m.value) }));
      onFID((m) => onReport({ ...m, rating: rateMetric("FID", m.value) }));
      onLCP((m) => onReport({ ...m, rating: rateMetric("LCP", m.value) }));
      onINP((m) => onReport({ ...m, rating: rateMetric("INP", m.value) }));
      onTTFB((m) => onReport({ ...m, rating: rateMetric("TTFB", m.value) }));
    },
    () => {
      // web-vitals package not installed — silently skip
      console.warn("[WebVitals] web-vitals package not found. Install with: npm install web-vitals");
    },
  );
}
