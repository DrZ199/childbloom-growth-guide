import { useEffect, useRef } from "react";
import { env } from "@/lib/config";

type AdPlacement = "header-banner" | "in-article" | "sidebar" | "footer" | "between-sections";

interface AdSlotProps {
  placement: AdPlacement;
  className?: string;
}

// Use environment variable for AdSense Publisher ID, fallback to empty string if not set
const ADSENSE_PUB_ID = env.VITE_ADSENSE_PUBLISHER_ID ?? "";

// These should be configured via environment variables or a config file in production
// For now, we use placeholder values that will be overridden by the real ad unit IDs
const SLOT_IDS: Record<AdPlacement, string> = {
  "header-banner": import.meta.env.VITE_ADSENSE_SLOT_HEADER ?? "1234567890",
  "in-article": import.meta.env.VITE_ADSENSE_SLOT_IN_ARTICLE ?? "2345678901",
  sidebar: import.meta.env.VITE_ADSENSE_SLOT_SIDEBAR ?? "3456789012",
  footer: import.meta.env.VITE_ADSENSE_SLOT_FOOTER ?? "4567890123",
  "between-sections": import.meta.env.VITE_ADSENSE_SLOT_BETWEEN ?? "5678901234",
};

const SLOT_FORMATS: Record<AdPlacement, string> = {
  "header-banner": "auto",
  "in-article": "fluid",
  sidebar: "auto",
  footer: "auto",
  "between-sections": "fluid",
};

const SLOT_STYLES: Record<AdPlacement, React.CSSProperties> = {
  "header-banner": { minHeight: 90 },
  "in-article": { minHeight: 250 },
  sidebar: { minHeight: 250 },
  footer: { minHeight: 90 },
  "between-sections": { minHeight: 120 },
};

export function AdSlot({ placement, className = "" }: AdSlotProps) {
  const ref = useRef<HTMLModElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (loadedRef.current) return;
    if (typeof window === "undefined") return;

    const pushAd = () => {
      if (ref.current && (window as unknown as Record<string, unknown[]>).adsbygoogle) {
        try {
          (window as unknown as Record<string, unknown[]>).adsbygoogle =
            (window as unknown as Record<string, unknown[]>).adsbygoogle || [];
          (window as unknown as Record<string, unknown[]>).adsbygoogle.push({});
          loadedRef.current = true;
        } catch {
          // ad blocked
        }
      }
    };

    // Lazy-load ad scripts after page interaction
    const loadScript = () => {
      if (document.querySelector('script[src*="adsbygoogle"]')) {
        pushAd();
        return;
      }
      if (!ADSENSE_PUB_ID) return; // Don't load if no publisher ID is configured
      
      const script = document.createElement("script");
      script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUB_ID}`;
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = pushAd;
      document.head.appendChild(script);
    };

    // Use IntersectionObserver for lazy loading
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          loadScript();
          observer.disconnect();
        }
      },
      { rootMargin: "200px" },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [placement]);

  return (
    <div
      className={`ad-slot overflow-hidden rounded-xl border border-border/40 bg-muted/30 ${className}`}
      style={{ ...SLOT_STYLES[placement] }}
      aria-label="Advertisement"
    >
      <ins
        ref={ref}
        className="adsbygoogle"
        style={{ display: "block", width: "100%" }}
        data-ad-client={ADSENSE_PUB_ID}
        data-ad-slot={SLOT_IDS[placement]}
        data-ad-format={SLOT_FORMATS[placement]}
        data-full-width-responsive="true"
      />
    </div>
  );
}
