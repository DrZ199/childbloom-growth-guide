
-- Tighten public INSERT policies (replace USING(true)-style with real checks)
DROP POLICY IF EXISTS "newsletter public insert" ON public.newsletter_subscribers;
CREATE POLICY "newsletter public insert" ON public.newsletter_subscribers FOR INSERT
  WITH CHECK (
    email IS NOT NULL
    AND length(email) BETWEEN 3 AND 320
    AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND confirmed = false
    AND unsubscribed_at IS NULL
  );

DROP POLICY IF EXISTS "contact public insert" ON public.contact_messages;
CREATE POLICY "contact public insert" ON public.contact_messages FOR INSERT
  WITH CHECK (
    length(name) BETWEEN 1 AND 200
    AND length(email) BETWEEN 3 AND 320
    AND email ~ '^[^@\s]+@[^@\s]+\.[^@\s]+$'
    AND length(message) BETWEEN 1 AND 5000
    AND handled = false
  );

-- Restrict has_role: anon cannot execute; authenticated may (RLS uses it)
REVOKE EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) FROM PUBLIC, anon;
GRANT EXECUTE ON FUNCTION public.has_role(uuid, public.app_role) TO authenticated, service_role;
