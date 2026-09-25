import { AppPreview } from "@/components/app-preview";
import { WaitlistCount } from "@/components/waitlist-count";
import { WaitlistForm } from "@/components/waitlist-form";

export function HeroSection({ count }: { count: number | null }) {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-primary bg-ledger-grid text-primary-foreground"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -right-24 size-96 rounded-full bg-accent/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -left-16 size-96 rounded-full bg-primary-foreground/10 blur-3xl"
      />

      {/* Two columns from lg up, with the whole conversion path (headline,
          promise, form) in the left one so it stays above the fold. */}
      <div className="section-container relative grid items-center gap-12 py-14 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:py-20">
        <div className="flex flex-col gap-6">
          <span className="inline-flex w-fit items-center rounded-4xl border border-accent/40 bg-accent/10 px-4 py-1.5 text-small font-medium text-accent">
            Early access · Free to join
          </span>

          <h1 className="text-h1 font-bold tracking-tight text-balance">
            Learn to invest with{" "}
            <span className="font-heading italic text-accent">play money</span>,
            before you ever risk the real thing.
          </h1>

          <p className="max-w-xl text-body text-primary-foreground/80 text-pretty">
            Five-minute lessons and a{" "}
            <strong className="font-semibold text-primary-foreground">
              €10,000 virtual portfolio
            </strong>{" "}
            that moves with real market conditions. Practise every decision
            before a single euro is at risk.
          </p>

          <div
            id="join"
            className="mt-2 max-w-xl scroll-mt-24 lg:scroll-mt-28"
          >
            <WaitlistForm />
          </div>

          <WaitlistCount count={count} className="text-primary-foreground/65" />
        </div>

        <AppPreview />
      </div>
    </section>
  );
}
