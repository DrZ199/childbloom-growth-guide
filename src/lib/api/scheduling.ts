import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import { supabaseAdmin as _supabaseAdmin } from "@/integrations/supabase/client.server";
import { requireSupabaseAuth } from "@/integrations/supabase/auth-middleware";

// Cast to `any` because workflow_status / scheduled_publish_at / content_audit_log
// are not present in the generated Supabase types.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const supabaseAdmin: any = _supabaseAdmin;

// ---------------------------------------------------------------------------
// Content Scheduling
// ---------------------------------------------------------------------------

/**
 * Schedule an article for future publication.
 * Sets scheduled_publish_at and workflow_status to 'scheduled'.
 */
export const scheduleArticle = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(
    z.object({
      id: z.string().uuid(),
      scheduledPublishAt: z.string().datetime(),
    }),
  )
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from("articles")
      .update({
        scheduled_publish_at: data.scheduledPublishAt,
        workflow_status: "scheduled",
        updated_at: new Date().toISOString(),
      })
      .eq("id", data.id);

    if (error) {
      console.error("[scheduling] error:", error);
      return { error: error.message };
    }
    return { success: true };
  });

/**
 * Cancel a scheduled publication. Resets to draft status.
 */
export const cancelScheduledArticle = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(z.object({ id: z.string().uuid() }))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from("articles")
      .update({
        scheduled_publish_at: null,
        workflow_status: "draft",
        updated_at: new Date().toISOString(),
      })
      .eq("id", data.id);

    if (error) return { error: error.message };
    return { success: true };
  });

/**
 * Get articles that are scheduled but due for publication.
 * Used by cron job / edge function to publish on schedule.
 */
export const getDueScheduledArticles = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .handler(async () => {
    const now = new Date().toISOString();

    const { data, error } = await supabaseAdmin
      .from("articles")
      .select("id, title, slug, scheduled_publish_at")
      .eq("workflow_status", "scheduled")
      .lte("scheduled_publish_at", now)
      .order("scheduled_publish_at", { ascending: true });

    if (error || !data) return [];
    return data;
  });

/**
 * Publish a single scheduled article. Called by the cron handler.
 */
export const publishScheduledArticle = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(z.object({ id: z.string().uuid() }))
  .handler(async ({ data }) => {
    const { error } = await supabaseAdmin
      .from("articles")
      .update({
        status: "published",
        published_at: new Date().toISOString(),
        scheduled_publish_at: null,
        workflow_status: "published",
        updated_at: new Date().toISOString(),
      })
      .eq("id", data.id);

    if (error) return { error: error.message };
    return { success: true };
  });

// ---------------------------------------------------------------------------
// Editorial Workflow
// ---------------------------------------------------------------------------

export type WorkflowStatus =
  | "draft"
  | "review"
  | "approved"
  | "scheduled"
  | "published"
  | "archived";

const WORKFLOW_TRANSITIONS: Record<WorkflowStatus, WorkflowStatus[]> = {
  draft: ["review", "archived"],
  review: ["approved", "draft", "archived"],
  approved: ["scheduled", "published", "draft", "archived"],
  scheduled: ["draft", "archived"],
  published: ["archived"],
  archived: ["draft"],
};

/**
 * Advance an article through the editorial workflow.
 * Validates the transition is allowed before updating.
 */
export const advanceWorkflow = createServerFn({ method: "POST" })
  .middleware([requireSupabaseAuth])
  .validator(
    z.object({
      id: z.string().uuid(),
      fromStatus: z.enum(["draft", "review", "approved", "scheduled", "published", "archived"]),
      toStatus: z.enum(["draft", "review", "approved", "scheduled", "published", "archived"]),
      note: z.string().max(500).optional(),
    }),
  )
  .handler(async ({ data, context }) => {
    const { id, fromStatus, toStatus, note } = data;

    // Validate transition is allowed
    const allowed = WORKFLOW_TRANSITIONS[fromStatus];
    if (!allowed || !allowed.includes(toStatus)) {
      return {
        error: `Invalid workflow transition: ${fromStatus} → ${toStatus}`,
      };
    }

    // Update article status
    const updateData: Record<string, unknown> = {
      workflow_status: toStatus,
      updated_at: new Date().toISOString(),
    };

    // Auto-set status when moving to published
    if (toStatus === "published") {
      updateData.status = "published";
      updateData.published_at = new Date().toISOString();
    }

    const { error } = await supabaseAdmin.from("articles").update(updateData).eq("id", id);

    if (error) return { error: error.message };

    // Log to audit trail
    await supabaseAdmin.from("content_audit_log" as never).insert({
      user_id: context.userId,
      action: `workflow_${fromStatus}_to_${toStatus}`,
      entity_type: "article",
      entity_id: id,
      changes: { from: fromStatus, to: toStatus, note: note ?? null },
    } as never);

    return { success: true, newStatus: toStatus };
  });

/**
 * Get workflow history for an article from the audit log.
 */
export const getWorkflowHistory = createServerFn({ method: "GET" })
  .middleware([requireSupabaseAuth])
  .validator(z.object({ articleId: z.string().uuid() }))
  .handler(async ({ data }) => {
    const { data: rows, error } = await supabaseAdmin
      .from("content_audit_log" as never)
      .select("*")
      .eq("entity_type", "article")
      .eq("entity_id", data.articleId)
      .order("created_at", { ascending: false })
      .limit(50);

    if (error || !rows) return [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return rows as Array<Record<string, any>>;
  });

/**
 * Get allowed transitions for a given workflow status.
 */
export function getAllowedTransitions(currentStatus: WorkflowStatus): WorkflowStatus[] {
  return WORKFLOW_TRANSITIONS[currentStatus] ?? [];
}
