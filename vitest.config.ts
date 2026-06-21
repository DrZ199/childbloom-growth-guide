import { defineConfig } from "vitest/config";
import tsConfigPaths from "vite-tsconfig-paths";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [tsConfigPaths({ projects: ["./tsconfig.json"] }), react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./src/__tests__/__helpers__/setup.ts"],
    include: ["src/__tests__/{unit,components}/**/*.{test,spec}.{ts,tsx}"],
    coverage: {
      provider: "v8",
      reporter: ["text", "json", "html"],
      include: ["src/lib/**", "src/components/**", "src/hooks/**"],
      exclude: [
        "src/routeTree.gen.ts",
        "src/components/ui/**",
        "**/*.d.ts",
        "**/*.test.*",
        "**/*.spec.*",
      ],
    },
  },
});
