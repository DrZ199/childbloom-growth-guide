import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { adminListSubscribers } from "@/lib/api/admin";
import { Download, Mail } from "lucide-react";

export const Route = createFileRoute("/admin/subscribers")({
  component: AdminSubscribers,
});

function AdminSubscribers() {
  const [subscribers, setSubscribers] = useState<Array<Record<string, unknown>>>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    adminListSubscribers({ data: undefined })
      .then((res) => setSubscribers(res as Array<Record<string, unknown>>))
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  function exportCsv() {
    const header = "Email,Confirmed,Source,Subscribed At,Unsubscribed At\n";
    const rows = subscribers
      .map((s) =>
        [s.email, s.confirmed, s.source ?? "", s.created_at, s.unsubscribed_at ?? ""].join(","),
      )
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "childbloom-subscribers.csv";
    a.click();
    URL.revokeObjectURL(url);
  }

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Subscribers</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {subscribers.length} newsletter subscribers
          </p>
        </div>
        <button
          onClick={exportCsv}
          className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium hover:bg-muted"
        >
          <Download className="h-4 w-4" /> Export CSV
        </button>
      </div>

      {loading ? (
        <div className="space-y-3">
          {[0, 1, 2, 3, 4].map((i) => (
            <div key={i} className="h-12 animate-pulse rounded-xl border border-border bg-muted" />
          ))}
        </div>
      ) : (
        <div className="overflow-hidden rounded-2xl border border-border bg-card">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/50">
                <th className="p-3 text-left font-medium">Email</th>
                <th className="p-3 text-left font-medium">Status</th>
                <th className="p-3 text-left font-medium">Source</th>
                <th className="p-3 text-left font-medium">Subscribed</th>
              </tr>
            </thead>
            <tbody>
              {subscribers.map((s) => (
                <tr key={s.id as string} className="border-b border-border/50">
                  <td className="p-3">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-muted-foreground" />
                      {s.email as string}
                    </div>
                  </td>
                  <td className="p-3">
                    {s.unsubscribed_at ? (
                      <span className="rounded-full bg-red-100 px-2 py-0.5 text-xs text-red-700">
                        Unsubscribed
                      </span>
                    ) : s.confirmed ? (
                      <span className="rounded-full bg-green-100 px-2 py-0.5 text-xs text-green-700">
                        Confirmed
                      </span>
                    ) : (
                      <span className="rounded-full bg-amber-100 px-2 py-0.5 text-xs text-amber-700">
                        Pending
                      </span>
                    )}
                  </td>
                  <td className="p-3 text-muted-foreground">{(s.source as string) ?? "—"}</td>
                  <td className="p-3 text-muted-foreground">
                    {new Date(s.created_at as string).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
