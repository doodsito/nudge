"use client";

import { useActionState, useId } from "react";
import { ArrowRight, CircleAlert, CircleCheck, Loader2 } from "lucide-react";

import { joinWaitlist } from "@/app/actions";
import {
  EXPERIENCE_OPTIONS,
  WAITLIST_INITIAL_STATE,
} from "@/lib/waitlist";
import { cn } from "@/lib/utils";

/**
 * Waitlist capture. Rendered on primary (navy) surfaces only — the hero and the
 * closing CTA — so it carries a single on-dark styling rather than a variant.
 */
export function WaitlistForm({ className }: { className?: string }) {
  const [state, formAction, pending] = useActionState(
    joinWaitlist,
    WAITLIST_INITIAL_STATE
  );
  const emailId = useId();
  const errorId = useId();

  if (state.status === "success") {
    return (
      <div
        className={cn(
          "flex items-start gap-3 rounded-2xl border border-positive/40 bg-positive/10 p-6",
          className
        )}
      >
        <CircleCheck className="mt-0.5 size-5 shrink-0 text-positive" aria-hidden />
        <div className="flex flex-col gap-1">
          <p className="text-body font-semibold text-primary-foreground">
            {state.message}
          </p>
          <p className="text-small text-primary-foreground/70">
            One email when early access opens. Nothing else.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form action={formAction} className={cn("flex flex-col gap-5", className)}>
      <fieldset className="flex flex-col gap-3">
        <legend className="mb-3 text-small font-medium text-primary-foreground/70">
          Where are you at with investing?
        </legend>
        <div className="flex flex-wrap gap-2.5">
          {/* No option is preselected: a default would bias the very signal
              this question exists to measure. */}
          {EXPERIENCE_OPTIONS.map((option) => (
            <label key={option.value} className="cursor-pointer">
              <input
                type="radio"
                name="experience"
                value={option.value}
                className="peer sr-only"
              />
              <span className="flex min-h-11 items-center rounded-4xl border border-primary-foreground/25 px-4 text-button font-medium text-primary-foreground/75 transition-colors duration-300 hover:border-primary-foreground/45 peer-checked:border-accent peer-checked:bg-accent/15 peer-checked:text-accent peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
                {option.label}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-col gap-3 sm:flex-row">
        <div className="flex-1">
          <label htmlFor={emailId} className="sr-only">
            Email address
          </label>
          <input
            id={emailId}
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="you@work-email.com"
            aria-invalid={state.status === "error" || undefined}
            aria-describedby={state.status === "error" ? errorId : undefined}
            className="h-14 w-full rounded-2xl border border-transparent bg-primary-foreground px-5 text-base text-foreground transition-colors duration-300 placeholder:text-muted-foreground focus-visible:border-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent aria-invalid:border-destructive"
          />
        </div>
        <button
          type="submit"
          disabled={pending}
          className="inline-flex h-14 shrink-0 items-center justify-center gap-2 rounded-2xl bg-accent px-7 text-button font-semibold text-accent-foreground transition-colors duration-300 hover:bg-accent/85 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:opacity-60"
        >
          {pending ? (
            <>
              <Loader2 className="size-4 animate-spin" aria-hidden />
              Joining
            </>
          ) : (
            <>
              Join the waitlist
              <ArrowRight className="size-4" aria-hidden />
            </>
          )}
        </button>
      </div>

      {/* Always rendered so assistive tech has the live region in place before
          the message appears. */}
      <div aria-live="polite">
        {state.status === "error" ? (
          <p
            id={errorId}
            className="flex items-center gap-2 text-small text-destructive"
          >
            <CircleAlert className="size-4 shrink-0" aria-hidden />
            {state.message}
          </p>
        ) : null}
      </div>

      <p className="text-small text-primary-foreground/55">
        Free to join. No card, ever. One email at launch, then nothing.
      </p>
    </form>
  );
}
