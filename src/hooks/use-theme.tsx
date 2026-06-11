import { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: "light" | "dark";
  setTheme: (theme: Theme) => void;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

/**
 * Theme provider with system preference detection and localStorage persistence
 */
export function ThemeProvider({
  children,
  defaultTheme = "system",
}: {
  children: React.ReactNode;
  defaultTheme?: Theme;
}) {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === "undefined") return defaultTheme;
    const stored = localStorage.getItem("childbloom-theme") as Theme | null;
    return stored ?? defaultTheme;
  });

  const [resolvedTheme, setResolvedTheme] = useState<"light" | "dark">("light");

  // Resolve system preference
  useEffect(() => {
    if (typeof window === "undefined") return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    function resolve() {
      const resolved = theme === "system" ? (mediaQuery.matches ? "dark" : "light") : theme;
      setResolvedTheme(resolved);
    }

    resolve();
    mediaQuery.addEventListener("change", resolve);
    return () => mediaQuery.removeEventListener("change", resolve);
  }, [theme]);

  // Apply theme to document
  useEffect(() => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(resolvedTheme);
    root.style.colorScheme = resolvedTheme;

    // Store preference
    localStorage.setItem("childbloom-theme", theme);
  }, [resolvedTheme, theme]);

  function setTheme(newTheme: Theme) {
    setThemeState(newTheme);
  }

  function toggleTheme() {
    setThemeState((prev) => {
      if (prev === "light") return "dark";
      if (prev === "dark") return "light";
      // System: toggle to opposite of resolved
      return resolvedTheme === "light" ? "dark" : "light";
    });
  }

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
