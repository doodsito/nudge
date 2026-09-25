import { cn } from "@/lib/utils";

/**
 * Coin lockup, matching app/icon.svg. The ring is drawn in currentColor so the
 * mark stays legible on both the warm paper header and the navy footer without
 * shipping two files.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        viewBox="0 0 32 32"
        aria-hidden
        className="size-7 shrink-0 sm:size-8"
      >
        <circle cx="16" cy="16" r="15" fill="var(--accent)" />
        <circle
          cx="16"
          cy="16"
          r="9.5"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          opacity="0.45"
        />
      </svg>
      <span className="font-heading text-2xl font-semibold italic tracking-tight">
        Ante
      </span>
    </span>
  );
}
