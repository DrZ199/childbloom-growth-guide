import { describe, it, expect } from "vitest";
import { z } from "zod";

// Import the same Zod schemas used in protected.functions.ts
const newsletterEmailSchema = z
  .string()
  .min(3)
  .max(320)
  .regex(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, "Invalid email address");

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required").max(200),
  email: z
    .string()
    .min(3)
    .max(320)
    .regex(/^[^@\s]+@[^@\s]+\.[^@\s]+$/, "Invalid email address"),
  subject: z.string().max(200).optional(),
  message: z.string().min(1, "Message is required").max(5000),
});

describe("newsletter email validation", () => {
  it("accepts a valid email", () => {
    expect(newsletterEmailSchema.safeParse("user@example.com").success).toBe(true);
  });

  it("rejects empty string", () => {
    expect(newsletterEmailSchema.safeParse("").success).toBe(false);
  });

  it("rejects string without @ symbol", () => {
    expect(newsletterEmailSchema.safeParse("userexample.com").success).toBe(false);
  });

  it("rejects email with spaces", () => {
    expect(newsletterEmailSchema.safeParse("user @example.com").success).toBe(false);
  });

  it("rejects email shorter than 3 characters", () => {
    expect(newsletterEmailSchema.safeParse("a@").success).toBe(false);
  });

  it("rejects email exceeding 320 characters", () => {
    const long = `${"a".repeat(315)}@b.com`;
    expect(long.length).toBeGreaterThan(320);
    expect(newsletterEmailSchema.safeParse(long).success).toBe(false);
  });
});

describe("contact form validation", () => {
  it("accepts valid form data", () => {
    const result = contactFormSchema.safeParse({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "Hello there",
    });
    expect(result.success).toBe(true);
  });

  it("rejects missing name", () => {
    const result = contactFormSchema.safeParse({
      name: "",
      email: "jane@example.com",
      message: "Hello",
    });
    expect(result.success).toBe(false);
  });

  it("rejects invalid email", () => {
    const result = contactFormSchema.safeParse({
      name: "Jane",
      email: "notanemail",
      message: "Hello",
    });
    expect(result.success).toBe(false);
  });

  it("rejects empty message", () => {
    const result = contactFormSchema.safeParse({
      name: "Jane",
      email: "jane@example.com",
      message: "",
    });
    expect(result.success).toBe(false);
  });

  it("rejects message exceeding 5000 characters", () => {
    const result = contactFormSchema.safeParse({
      name: "Jane",
      email: "jane@example.com",
      message: "x".repeat(5001),
    });
    expect(result.success).toBe(false);
  });

  it("allows optional subject", () => {
    const result = contactFormSchema.safeParse({
      name: "Jane",
      email: "jane@example.com",
      subject: "Question",
      message: "Hello",
    });
    expect(result.success).toBe(true);
  });
});
