import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NewsletterForm } from "@/components/newsletter-form";

// Mock the subscribeNewsletter server function
const mockSubscribe = vi.fn();
vi.mock("@/lib/api/protected.functions", () => ({
  subscribeNewsletter: (args: { data: { email: string; source: string } }) =>
    mockSubscribe(args.data),
}));

describe("NewsletterForm", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("renders heading and description", () => {
    render(<NewsletterForm />);
    expect(screen.getByText("The weekly ChildBloom letter")).toBeInTheDocument();
    expect(screen.getByText(/One calm email/i)).toBeInTheDocument();
  });

  it("renders email input and submit button", () => {
    render(<NewsletterForm />);
    expect(screen.getByPlaceholderText("you@email.com")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Subscribe free/i })).toBeInTheDocument();
  });

  it("shows success state after successful subscription", async () => {
    mockSubscribe.mockResolvedValue({ success: true, message: "Subscribed!" });
    render(<NewsletterForm />);

    const input = screen.getByPlaceholderText("you@email.com");
    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: /Subscribe free/i }));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent("Subscribed!");
    });
  });

  it("shows error state on failure", async () => {
    mockSubscribe.mockResolvedValue({ error: "Already subscribed" });
    render(<NewsletterForm />);

    const input = screen.getByPlaceholderText("you@email.com");
    fireEvent.change(input, { target: { value: "test@example.com" } });
    fireEvent.click(screen.getByRole("button", { name: /Subscribe free/i }));

    await waitFor(() => {
      expect(screen.getByRole("alert")).toHaveTextContent("Already subscribed");
    });
  });

  it("renders custom heading and description when provided", () => {
    render(
      <NewsletterForm heading="Custom Title" description="Custom description" source="article" />,
    );
    expect(screen.getByText("Custom Title")).toBeInTheDocument();
    expect(screen.getByText("Custom description")).toBeInTheDocument();
  });

  it("has proper aria-label on email input", () => {
    render(<NewsletterForm />);
    expect(screen.getByLabelText("Email address")).toBeInTheDocument();
  });

  it("disables form while submitting", async () => {
    // Never resolve to keep it in submitting state
    mockSubscribe.mockImplementation(() => new Promise(() => {}));
    render(<NewsletterForm />);

    fireEvent.change(screen.getByPlaceholderText("you@email.com"), {
      target: { value: "test@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: /Subscribe free/i }));

    await waitFor(() => {
      expect(screen.getByRole("button", { name: /Subscribing/i })).toBeDisabled();
    });
  });
});
