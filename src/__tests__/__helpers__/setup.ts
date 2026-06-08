import "@testing-library/jest-dom";
import { vi } from "vitest";

// Mock TanStack Start server functions — they require a Nitro server runtime
vi.mock("@tanstack/react-start", () => ({
  createServerFn: () => {
    const fn = () => fn;
    fn.validator = () => fn;
    fn.handler = () => fn;
    fn.middleware = () => fn;
    return () => fn;
  },
  createMiddleware: () => ({
    server: (fn: unknown) => fn,
  }),
  getRequest: () => null,
  createFileRoute: () => () => ({}),
  Link: ({ children }: { children: React.ReactNode }) => children,
  useRouter: () => ({}),
}));

// Mock IntersectionObserver for AdSlot tests
class MockIntersectionObserver {
  observe = vi.fn();
  disconnect = vi.fn();
  unobserve = vi.fn();
}
Object.defineProperty(window, "IntersectionObserver", {
  value: MockIntersectionObserver,
  writable: true,
});

// Suppress console.error in tests unless explicitly tested
const originalError = console.error;
beforeAll(() => {
  console.error = (...args: unknown[]) => {
    if (typeof args[0] === "string" && args[0].includes("[Supabase]")) return;
    originalError(...args);
  };
});
afterAll(() => {
  console.error = originalError;
});
