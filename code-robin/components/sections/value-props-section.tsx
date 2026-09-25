import { Repeat, ShieldCheck, Sprout, Timer, Wallet } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { cn } from "@/lib/utils";

const VALUE_PROPS = [
  {
    icon: Wallet,
    title: "€10,000 to practice with, and nothing to lose",
    body: "Real market conditions, virtual euros. Make your expensive mistakes here, where they cost you nothing but a lesson.",
    wide: true,
  },
  {
    icon: ShieldCheck,
    title: "We never tell you what to buy",
    body: "Ante is education, not advice. Nothing to sell you, no affiliate links, and nobody taking a cut of your decisions.",
    wide: false,
  },
  {
    icon: Timer,
    title: "Five minutes, not five hours",
    body: "Built for a lunch break. One concept, one decision, then back to your day.",
    wide: false,
  },
  {
    icon: Sprout,
    title: "Start from actual zero",
    body: "No finance background assumed. If you are still not sure what an ETF is, you are exactly who this is for.",
    wide: false,
  },
  {
    icon: Repeat,
    title: "A habit, not a course",
    body: "The same mechanics that made learning a language stick, pointed at the thing you keep postponing.",
    wide: false,
  },
];

export function ValuePropsSection() {
  return (
    <section
      id="why-ante"
      className="section-padding scroll-mt-16 bg-background lg:scroll-mt-20"
    >
      <div className="section-container flex flex-col gap-16">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="text-small font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Why Ante
          </span>
          <h2 className="text-h2 font-bold tracking-tight text-balance">
            Built to make you{" "}
            <span className="font-heading italic text-accent">decisive</span>,
            not just informed.
          </h2>
        </Reveal>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {VALUE_PROPS.map((prop, index) => (
            <li
              key={prop.title}
              className={cn("flex", prop.wide && "lg:col-span-2")}
            >
              <Reveal delay={index * 80} className="flex flex-1">
                <div
                  className={cn(
                    "flex flex-1 flex-col gap-4 rounded-2xl border p-8",
                    prop.wide
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-card-foreground"
                  )}
                >
                  <span
                    className={cn(
                      "flex size-10 shrink-0 items-center justify-center rounded-4xl",
                      prop.wide
                        ? "bg-accent text-accent-foreground"
                        : "bg-secondary text-secondary-foreground"
                    )}
                  >
                    <prop.icon className="size-4.5" aria-hidden />
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-balance">
                    {prop.title}
                  </h3>
                  <p
                    className={cn(
                      "text-small text-pretty",
                      prop.wide
                        ? "text-primary-foreground/75"
                        : "text-foreground/75"
                    )}
                  >
                    {prop.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
