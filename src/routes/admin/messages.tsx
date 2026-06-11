import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { adminListMessages, adminMarkMessageHandled } from "@/lib/api/admin";
import { Check, MessageSquare } from "lucide-react";

export const Route = createFileRoute("/admin/messages")({
  component: AdminMessages,
});

function AdminMessages() {
  const [messages, setMessages] = useState<Array<Record<string, unknown>>>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    try {
      const res = await adminListMessages({ data: undefined });
      setMessages(res as Array<Record<string, unknown>>);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    load();
  }, []);

  async function toggleHandled(id: string, current: boolean) {
    await adminMarkMessageHandled({ data: { id, handled: !current } });
    load();
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-semibold tracking-tight">Messages</h1>
        <p className="mt-1 text-sm text-muted-foreground">Contact form submissions.</p>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-20 animate-pulse rounded-xl border border-border bg-muted" />
          ))}
        </div>
      ) : messages.length === 0 ? (
        <div className="rounded-2xl border border-border bg-card p-10 text-center text-muted-foreground">
          <p>No messages yet.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {messages.map((m) => (
            <div
              key={m.id as string}
              className={`rounded-2xl border bg-card p-5 ${
                m.handled ? "border-border/50 opacity-60" : "border-border"
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <MessageSquare className="h-4 w-4 text-muted-foreground" />
                    <span className="font-medium">{(m.subject as string) ?? "No subject"}</span>
                  </div>
                  <p className="mt-1 text-xs text-muted-foreground">
                    From {m.name as string} ({m.email as string}) —{" "}
                    {new Date(m.created_at as string).toLocaleString()}
                  </p>
                  <p className="mt-3 text-sm">{m.message as string}</p>
                </div>
                <button
                  onClick={() => toggleHandled(m.id as string, m.handled as boolean)}
                  className={`shrink-0 rounded-lg px-3 py-1.5 text-xs font-medium ${
                    m.handled
                      ? "border border-border text-muted-foreground hover:bg-muted"
                      : "bg-green-100 text-green-700 hover:bg-green-200"
                  }`}
                >
                  {m.handled ? (
                    "Mark unread"
                  ) : (
                    <span className="flex items-center gap-1">
                      <Check className="h-3 w-3" /> Mark handled
                    </span>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
