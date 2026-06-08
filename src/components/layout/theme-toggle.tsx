import { Moon, Sun, Monitor } from "lucide-react";
import { useTheme } from "@/hooks/use-theme";
import { cn } from "@/lib/utils";

interface ThemeToggleProps {
  className?: string;
  showLabel?: boolean;
}

/**
 * Theme toggle button with three states: light, dark, system
 * - Cycles through: light → dark → system → light
 * - Shows current state with icon
 * - Optional label
 */
export function ThemeToggle({ className, showLabel = false }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();

  const icons = {
    light: <Sun className="h-4 w-4" />,
    dark: <Moon className="h-4 w-4" />,
    system: <Monitor className="h-4 w-4" />,
  };

  const labels = {
    light: "Light mode",
    dark: "Dark mode",
    system: "System theme",
  };

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Current theme: ${labels[theme]}. Click to change.`}
      title={labels[theme]}
      className={cn(
        "inline-flex items-center gap-2 rounded-lg border border-border bg-background p-2 text-sm font-medium text-foreground transition-colors hover:bg-muted",
        className,
      )}
    >
      {icons[theme]}
      {showLabel && <span className="hidden sm:inline">{labels[theme]}</span>}
    </button>
  );
}

/**
 * Compact theme toggle for headers (icon only)
 */
export function ThemeToggleCompact({ className }: { className?: string }) {
  return <ThemeToggle className={cn("p-2", className)} />;
}
