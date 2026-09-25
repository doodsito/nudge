import { Flame, TrendingUp } from "lucide-react";

/**
 * Illustrative preview of the product. Built in markup rather than shipped as a
 * screenshot: there is no app to screenshot yet, and a coded mock stays sharp at
 * every density. Labelled as illustrative so it is never read as a real capture.
 *
 * Type sizes here are fixed rather than using the fluid --text-* page tokens:
 * this is a simulated device UI at its own scale, not page copy.
 */
export function AppPreview() {
  return (
    <figure className="flex flex-col gap-3">
      <div className="flex flex-col gap-5 rounded-3xl border border-primary-foreground/10 bg-card p-5 text-card-foreground shadow-2xl shadow-black/25 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="text-[0.7rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
              Lesson 4 of 12
            </span>
            <span className="font-heading text-base font-semibold">
              Diversification
            </span>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-4xl bg-streak/12 px-3 py-1.5 text-xs font-semibold text-streak">
            <Flame className="size-3.5" aria-hidden />6 day streak
          </span>
        </div>

        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between text-xs text-muted-foreground">
            <span>Progress</span>
            <span className="font-medium text-foreground">320 / 500 XP</span>
          </div>
          <div className="h-2 overflow-hidden rounded-4xl bg-muted">
            <div className="h-full w-[64%] rounded-4xl bg-accent" />
          </div>
        </div>

        <div className="flex flex-col gap-3 rounded-2xl bg-muted/70 p-4">
          <p className="text-sm font-medium text-pretty">
            Markets drop 9%. Your virtual portfolio is down €780. What do you
            do?
          </p>
          <div className="flex flex-col gap-2">
            <span className="rounded-xl border border-border bg-card px-3.5 py-2.5 text-xs text-foreground/75">
              Sell and move back to cash
            </span>
            <span className="rounded-xl border border-accent bg-accent/12 px-3.5 py-2.5 text-xs font-medium text-foreground">
              Hold and keep contributing
            </span>
            <span className="rounded-xl border border-border bg-card px-3.5 py-2.5 text-xs text-foreground/75">
              Buy more while prices are lower
            </span>
          </div>
        </div>

        <div className="flex items-end justify-between gap-4 border-t border-border pt-4">
          <div className="flex flex-col gap-0.5">
            <span className="text-[0.7rem] font-medium tracking-[0.14em] text-muted-foreground uppercase">
              Virtual portfolio
            </span>
            <span className="font-heading text-2xl font-semibold tracking-tight">
              €10,240.50
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-medium text-positive">
              <TrendingUp className="size-3.5" aria-hidden />
              +2.4% this month
            </span>
          </div>
          <svg
            viewBox="0 0 100 32"
            preserveAspectRatio="none"
            aria-hidden
            className="h-12 w-28 shrink-0"
          >
            <polyline
              points="0,26 12,22 24,27 36,17 48,21 60,12 72,15 84,7 100,4"
              fill="none"
              stroke="var(--positive)"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>
      </div>

      <figcaption className="text-center text-small text-primary-foreground/45">
        Illustrative preview. Ante is in development.
      </figcaption>
    </figure>
  );
}
