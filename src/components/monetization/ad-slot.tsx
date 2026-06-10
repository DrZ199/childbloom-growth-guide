import { useEffect, useRef } from "react";

type AdPlacement =
  | "header-banner"
  | "in-article"
  | "sidebar"
  | "footer"
  | "between-sections";

interface AdSlotProps {
  placement: AdPlacement;
  className?: string;
}

const ADSENSE_PUB_ID =
  (typeof import.meta !== "undefined" && (import.meta as Record<string, Record<string, string | undefined>>).env?.VITE_ADSENSE_PUBLISHER_ID) ??
  (typeof window !== "undefined"
    ? (window as unknown as Record<string, string>).__ADSENSE_CA_PUB ?? ""
    : "");

const isAdsenseConfigured = Boolean(ADSENSE_PUB_ID);

const shouldRenderPlacement = (placement: AdPlacement) => {
  if (!isAdsenseConfigured) return false;
  if (placement === "header-banner" || placement === "footer") return false;
  return true;
};

const SLOT_IDS: Record<AdPlacement, string> = {
  "header-banner": "1234567890",
  "in-article": "2345678901",
  sidebar: "3456789012",
  footer: "4567890123",
  "between-sections": "5678901234",
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

  if (!shouldRenderPlacement(placement)) {
    return null;
  }

  useEffect(() => {
    if (loadedRef.current) return;
    if (typeof window === "undefined") return;

    const pushAd = () => {
      if (!isAdsenseConfigured) return;

      if (ref.current && (window as unknown as Record<string, unknown[]>).adsbygoogle) {
        try {
          ((window as unknown as Record<string, unknown[]>).adsbygoogle =
            (window as unknown as Record<string, unknown[]>).adsbygoogle || []);
          (window as unknown as Record<string, unknown[]>).adsbygoogle.push({});
          loadedRef.current = true;
        } catch {
          // ad blocked
        }
      }
    };

    const loadScript = () => {
      if (document.querySelector('script[src*="adsbygoogle"]')) {
        pushAd();
        return;
      }
      const script = document.createElement("script");
      script.src = "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-xxxxxxxx";
      script.async = true;
      script.crossOrigin = "anonymous";
      script.onload = pushAd;
      document.head.appendChild(script);
    };

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
