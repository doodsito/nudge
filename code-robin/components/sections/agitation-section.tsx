import { Check } from "lucide-react";

import { Reveal } from "@/components/reveal";

const SYMPTOMS = [
  "Do you understand investing basics, but still feel nervous putting real money in?",
  "Have you watched videos and read articles, but still don't know what you'd actually buy?",
  "Are you worried your first investing lesson could cost you real money?",
];

const HARD_QUESTIONS = [
  "How much should you invest?",
  "What should you actually buy?",
  "How much risk should you take?",
  "Should you hold, sell, or buy more?",
];

function CheckList({ items }: { items: readonly string[] }) {
  return (
    <ul className="flex flex-col gap-3">
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <Check className="mt-1 size-4 shrink-0 text-accent" aria-hidden />
          <span className="text-body text-foreground/85 text-pretty">
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function AgitationSection() {
  return (
    <section id="problem" className="section-padding bg-background">
      <div className="section-container">
        <Reveal className="mx-auto flex max-w-2xl flex-col gap-8">
          <h2 className="text-h2 font-bold tracking-tight text-balance">
            You know you should be investing. That&apos;s exactly the{" "}
            <span className="font-heading italic text-accent">problem</span>.
          </h2>

          <p className="text-body font-semibold">Dear Future Investor,</p>

          <CheckList items={SYMPTOMS} />

          <div className="flex flex-col gap-2">
            <p className="text-body font-semibold text-pretty">
              You are not missing more information.
            </p>
            <p className="text-body font-semibold text-accent-foreground text-pretty">
              You are missing practice making real investing decisions.
            </p>
          </div>

          <p className="text-body text-foreground/80 text-pretty">
            You can learn what ETFs, diversification, and compound interest
            mean. But knowing the terms is different from knowing what to do
            when your own money is involved.
          </p>

          <p className="text-body text-foreground/80 text-pretty">
            When markets fall, the questions suddenly feel much harder:
          </p>

          <CheckList items={HARD_QUESTIONS} />

          <p className="text-body text-foreground/80 text-pretty">
            So you watch another video, read another article, or save another
            post. But when it comes time to invest your own money, you still
            hesitate.
          </p>

          <p className="text-body text-foreground/80 text-pretty">
            And the longer you wait, the longer your money stays untouched that
            you <strong className="font-semibold text-foreground">COULD</strong>{" "}
            have been earning on.
          </p>

          <p className="text-body text-foreground/80 text-pretty">
            You don&apos;t need another investing course, to risk your savings
            just to learn, or someone telling you exactly what stocks to buy.
          </p>

          <p className="border-l-2 border-accent pl-5 text-body font-semibold text-pretty">
            You need a safe place to practice the decisions first.
          </p>

          <p className="text-body text-foreground/80 text-pretty">
            Ante gives you a{" "}
            <strong className="font-semibold text-foreground">
              €10,000 virtual portfolio
            </strong>{" "}
            connected to real market conditions. You make investing decisions
            without putting a single euro at risk.
          </p>

          <p className="text-body text-foreground/80 text-pretty">
            So when you&apos;re finally ready to invest real money, it
            won&apos;t feel like your first time. You&apos;ll already know what
            you&apos;re doing and why.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
