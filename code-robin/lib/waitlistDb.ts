/**
 * Supabase access for the waitlist, over the PostgREST endpoint.
 *
 * Deliberately dependency-free: one insert and one count do not justify pulling
 * in @supabase/supabase-js. The service role key has no NEXT_PUBLIC_ prefix so
 * it stays on the server, which means the table needs no public RLS policy.
 */

import type { WaitlistExperience } from "@/lib/waitlist";

const SUPABASE_URL = process.env.SUPABASE_URL;
const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

const TABLE = "waitlist";
const DUPLICATE_KEY = "23505";

export type InsertResult = "created" | "duplicate" | "error";

function restHeaders() {
  return {
    apikey: SUPABASE_SERVICE_ROLE_KEY as string,
    Authorization: `Bearer ${SUPABASE_SERVICE_ROLE_KEY}`,
    "Content-Type": "application/json",
  };
}

/**
 * How many people are on the waitlist, or null when Supabase is unconfigured or
 * unreachable. Callers render an honest fallback on null rather than a zero or
 * an invented figure.
 */
export async function getWaitlistCount(): Promise<number | null> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return null;

  try {
    const response = await fetch(
      `${SUPABASE_URL}/rest/v1/${TABLE}?select=id&limit=1`,
      {
        headers: { ...restHeaders(), Prefer: "count=exact" },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) return null;

    // PostgREST reports the total after the slash, e.g. "0-0/247" or "*/247".
    const total = response.headers.get("content-range")?.split("/")[1];
    if (!total || total === "*") return null;

    const count = Number.parseInt(total, 10);
    return Number.isFinite(count) ? count : null;
  } catch {
    return null;
  }
}

export async function createWaitlistEntry(
  email: string,
  experience: WaitlistExperience
): Promise<InsertResult> {
  if (!SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) return "error";

  try {
    const response = await fetch(`${SUPABASE_URL}/rest/v1/${TABLE}`, {
      method: "POST",
      headers: { ...restHeaders(), Prefer: "return=minimal" },
      body: JSON.stringify({ email, experience }),
      cache: "no-store",
    });

    if (response.ok) return "created";

    const body = await response.json().catch(() => null);
    return body?.code === DUPLICATE_KEY ? "duplicate" : "error";
  } catch {
    return "error";
  }
}
