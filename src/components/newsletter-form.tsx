import { useState } from "react";
import { Mail } from "lucide-react";
import { subscribeNewsletter } from "@/lib/api/protected.functions";

interface NewsletterFormProps {
  /** Where the form is rendered — used as the `source` field. */
  source?: string;
  /** Optional heading override. */
  heading?: string;
  /** Optional description override. */
  description?: string;
}

export function NewsletterForm({
  source = "website",
  heading = "The weekly ChildBloom letter",
  description = "One calm email with the week's best guides, age-by-age tips, and product picks. No spam, ever.",
}: NewsletterFormProps) {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    const form = e.currentTarget;
    const email = (new FormData(form).get("email") as string) ?? "";

    try {
      const result = await subscribeNewsletter({
        data: { email, source },
      });

      if ("error" in result && result.error) {
        setStatus("error");
        setMessage(result.error);
      } else if ("success" in result && result.success) {
        setStatus("success");
        setMessage(result.message ?? "Subscribed!");
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
    <section id="newsletter" className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
      <div
        className="overflow-hidden rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] sm:p-12"
        style={{ backgroundImage: "var(--gradient-hero)" }}
      >
        <div className="mx-auto max-w-2xl text-center">
          <div className="mx-auto mb-4 grid h-12 w-12 place-items-center rounded-2xl bg-card text-primary shadow-[var(--shadow-card)]">
            <Mail className="h-6 w-6" />
          </div>
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{heading}</h2>
          <p className="mt-3 text-muted-foreground">{description}</p>

          {status === "success" && (
            <div
              className="mt-4 rounded-xl border border-green-200 bg-green-50 p-3 text-sm text-green-800"
              role="alert"
            >
              {message}
            </div>
          )}
          {status === "error" && (
            <div
              className="mt-4 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-800"
              role="alert"
            >
              {message}
            </div>
          )}

          <form className="mt-6 flex flex-col gap-2 sm:flex-row" onSubmit={handleSubmit}>
            <input
              type="email"
              name="email"
              required
              maxLength={320}
              placeholder="you@email.com"
              aria-label="Email address"
              disabled={status === "submitting"}
              className="flex-1 rounded-full border border-border bg-card px-5 py-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={status === "submitting"}
              className="rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition hover:opacity-90 disabled:opacity-50"
            >
              {status === "submitting" ? "Subscribing..." : "Subscribe free"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
