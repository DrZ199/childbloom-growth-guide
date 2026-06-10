import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { siteDescription } from "@/lib/site-data";
import { submitContactForm } from "@/lib/api/protected.functions";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact | ChildBloom" },
      {
        name: "description",
        content: "Contact ChildBloom for editorial inquiries, partnerships, and media requests.",
      },
      { property: "og:title", content: "Contact | ChildBloom" },
      { property: "og:description", content: siteDescription },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const result = await submitContactForm({
        data: {
          name: (formData.get("name") as string) ?? "",
          email: (formData.get("email") as string) ?? "",
          subject: (formData.get("subject") as string) || undefined,
          message: (formData.get("message") as string) ?? "",
        },
      });

      if ("error" in result && result.error) {
        setStatus("error");
        setMessage(result.error);
      } else if ("success" in result && result.success) {
        setStatus("success");
        setMessage(result.message ?? "Message sent successfully.");
        form.reset();
      } else {
        setStatus("error");
        setMessage("Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please check your connection and try again.");
    }
  }

  return (
    <main className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
      <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)]">
        <span className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Get in touch
        </span>
        <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
          Questions, feedback, or brand partnerships?
        </h1>
        <p className="mt-4 text-base text-muted-foreground">
          We're happy to connect. Share your message below and we'll respond within 1-2 business
          days.
        </p>

        {status === "success" && (
          <div
            className="mt-6 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-800"
            role="alert"
          >
            {message}
          </div>
        )}
        {status === "error" && (
          <div
            className="mt-6 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
            role="alert"
          >
            {message}
          </div>
        )}

        <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
          <label className="block text-sm font-medium text-foreground">
            Name
            <input
              name="name"
              type="text"
              required
              maxLength={200}
              placeholder="Your name"
              className="mt-2 w-full rounded-3xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
          <label className="block text-sm font-medium text-foreground">
            Email
            <input
              name="email"
              type="email"
              required
              maxLength={320}
              placeholder="you@example.com"
              className="mt-2 w-full rounded-3xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
          <label className="block text-sm font-medium text-foreground">
            Subject (optional)
            <input
              name="subject"
              type="text"
              maxLength={200}
              placeholder="What is this about?"
              className="mt-2 w-full rounded-3xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
          <label className="block text-sm font-medium text-foreground">
            Message
            <textarea
              name="message"
              required
              maxLength={5000}
              placeholder="Tell us how we can help"
              rows={6}
              className="mt-2 w-full rounded-3xl border border-border bg-muted px-4 py-3 text-sm text-foreground outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
          </label>
          <button
            type="submit"
            disabled={status === "submitting"}
            className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
          >
            {status === "submitting" ? "Sending..." : "Send message"}
          </button>
        </form>
      </div>
    </main>
  );
}
