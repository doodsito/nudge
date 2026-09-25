import { BookOpen, Flame, LineChart } from "lucide-react";

import { Reveal } from "@/components/reveal";

const STEPS = [
  {
    icon: BookOpen,
    title: "Learn the idea in five minutes",
    body: "One concept at a time, in plain language. No prerequisites, no jargon, and no forty minute video to get through first.",
  },
  {
    icon: LineChart,
    title: "Make the call with virtual money",
    body: "Your €10,000 portfolio moves with real market conditions. Buy, hold, or sell, and see exactly what your decision does.",
  },
  {
    icon: Flame,
    title: "Come back tomorrow",
    body: "Streaks and XP turn it into a daily habit instead of a course you abandon somewhere in week two.",
  },
];

export function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="section-padding scroll-mt-16 bg-muted/60 lg:scroll-mt-20"
    >
      <div className="section-container flex flex-col gap-16">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="text-small font-medium tracking-[0.2em] text-muted-foreground uppercase">
            How it works
          </span>
          <h2 className="text-h2 font-bold tracking-tight text-balance">
            Go from hesitating to{" "}
            <span className="font-heading italic text-accent">deciding</span>,
            in three steps.
          </h2>
        </Reveal>

        <ol className="grid gap-6 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <li key={step.title} className="flex">
              <Reveal delay={index * 100} className="flex flex-1">
                <div className="flex flex-1 flex-col gap-5 rounded-2xl border border-border bg-card p-8">
                  <div className="flex items-center gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-4xl bg-primary text-primary-foreground">
                      <step.icon className="size-4.5" aria-hidden />
                    </span>
                    <span className="text-small font-semibold tracking-[0.2em] text-muted-foreground uppercase">
                      Step {index + 1}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-semibold text-balance">
                    {step.title}
                  </h3>
                  <p className="text-small text-foreground/75 text-pretty">
                    {step.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
