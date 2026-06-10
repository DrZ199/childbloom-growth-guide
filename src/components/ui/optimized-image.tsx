import { cn } from "@/lib/utils";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
  className?: string;
  wrapperClassName?: string;
  aspectRatio?: "square" | "video" | "portrait" | "wide";
  objectFit?: "cover" | "contain" | "fill";
}

/**
 * Optimized image component with:
 * - Responsive srcset for different screen densities
 * - Lazy loading (unless priority)
 * - Explicit dimensions to prevent CLS
 * - Aspect ratio preservation
 * - Proper object-fit handling
 */
export function OptimizedImage({
  src,
  alt,
  width,
  height,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
  priority = false,
  className,
  wrapperClassName,
  aspectRatio = "wide",
  objectFit = "cover",
  ...props
}: OptimizedImageProps) {
  // Generate srcset for different widths (if src is a base URL)
  const widths = [320, 640, 960, 1280, 1920];
  const srcSet = widths
    .map((w) => {
      // For Supabase Storage, use transform parameters
      if (src.includes("supabase") || src.includes("storage")) {
        return `${src}?width=${w}&quality=80 ${w}w`;
      }
      // For local images, assume Vite asset handling
      return `${src} ${w}w`;
    })
    .join(", ");

  // Aspect ratio classes
  const aspectClasses = {
    square: "aspect-square",
    video: "aspect-video",
    portrait: "aspect-[3/4]",
    wide: "aspect-[16/10]",
  };

  // Object fit classes
  const objectFitClasses = {
    cover: "object-cover",
    contain: "object-contain",
    fill: "object-fill",
  };

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-muted",
        aspectClasses[aspectRatio],
        wrapperClassName,
      )}
    >
      <img
        src={src}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        fetchPriority={priority ? "high" : "auto"}
        className={cn(
          "h-full w-full transition-opacity duration-300",
          objectFitClasses[objectFit],
          className,
        )}
        {...props}
      />
    </div>
  );
}

/**
 * Hero image component optimized for LCP (Largest Contentful Paint)
 * - Priority loading
 * - Preload hint
 * - No blur placeholder to avoid layout shift
 */
export function HeroImage({
  src,
  alt,
  className,
  ...props
}: Omit<OptimizedImageProps, "priority" | "aspectRatio">) {
  return (
    <>
      {/* Preload hint for LCP */}
      <link rel="preload" as="image" href={src} fetchPriority="high" />
      <OptimizedImage
        src={src}
        alt={alt}
        priority={true}
        aspectRatio="wide"
        sizes="100vw"
        className={className}
        {...props}
      />
    </>
  );
}
