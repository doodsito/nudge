import { Reveal } from "@/components/reveal";
import { WaitlistCount } from "@/components/waitlist-count";
import { WaitlistForm } from "@/components/waitlist-form";

export function FinalCtaSection({ count }: { count: number | null }) {
  return (
    <section
      id="waitlist"
      className="relative isolate scroll-mt-16 overflow-hidden bg-primary bg-ledger-grid text-primary-foreground lg:scroll-mt-20"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 size-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl"
      />

      <div className="section-container relative flex flex-col items-center gap-10 py-20 sm:py-28">
        <Reveal className="flex flex-col items-center gap-6 text-center">
          <h2 className="max-w-3xl text-h2 font-bold tracking-tight text-balance">
            Make your first investing mistake where it costs you{" "}
            <span className="font-heading italic text-accent">nothing</span>.
          </h2>
          <p className="max-w-xl text-body text-primary-foreground/80 text-pretty">
            Join the waitlist and get early access to your €10,000 virtual
            portfolio, plus the five-minute lessons that go with it.
          </p>
        </Reveal>

        <div className="w-full max-w-xl">
          <WaitlistForm />
        </div>

        <WaitlistCount count={count} className="text-primary-foreground/65" />
      </div>
    </section>
  );
}
