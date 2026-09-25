/**
 * Shared waitlist contract. Client-safe on purpose: the form component and the
 * server action both import from here, so the option list has a single source
 * of truth. All Supabase access lives in waitlistDb.ts.
 */

export type WaitlistExperience = "never" | "dabbled" | "investing";

export type WaitlistState = {
  status: "idle" | "success" | "error";
  message: string;
};

export const WAITLIST_INITIAL_STATE: WaitlistState = {
  status: "idle",
  message: "",
};

export const EXPERIENCE_OPTIONS: ReadonlyArray<{
  value: WaitlistExperience;
  label: string;
}> = [
  { value: "never", label: "Never invested" },
  { value: "dabbled", label: "Dabbled a bit" },
  { value: "investing", label: "Already investing" },
];

export function isWaitlistExperience(
  value: string
): value is WaitlistExperience {
  return EXPERIENCE_OPTIONS.some((option) => option.value === value);
}
