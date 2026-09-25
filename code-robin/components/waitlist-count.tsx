import { cn } from "@/lib/utils";

/**
 * Live waitlist size, read from Supabase. When the count is unavailable we say
 * so plainly instead of showing a zero or a placeholder figure — an invented
 * number would corrupt the very signal this page exists to measure.
 */
export function WaitlistCount({
  count,
  className,
}: {
  count: number | null;
  className?: string;
}) {
  return (
    <p className={cn("inline-flex items-center gap-2.5 text-small", className)}>
      <span aria-hidden className="relative flex size-2.5 shrink-0">
        <span className="absolute inline-flex size-full animate-ping rounded-4xl bg-accent opacity-60" />
        <span className="relative inline-flex size-2.5 rounded-4xl bg-accent" />
      </span>
      {count && count > 0 ? (
        <span>
          <strong className="font-semibold">
            {count.toLocaleString("en-GB")}
          </strong>{" "}
          {count === 1 ? "person has" : "people have"} joined the waitlist
        </span>
      ) : (
        <span>The waitlist is open. Be one of the first in.</span>
      )}
    </p>
  );
}
