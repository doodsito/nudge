import Link from "next/link";
import { Hammer, Mail, Scale } from "lucide-react";

import { Reveal } from "@/components/reveal";
import { WaitlistCount } from "@/components/waitlist-count";

const COMMITMENTS = [
  {
    icon: Hammer,
    title: "We are pre-launch",
    body: "Ante is being built right now. There is no app to download yet, and we are not going to pretend otherwise.",
  },
  {
    icon: Scale,
    title: "Education only, by design",
    body: "Ante will never recommend a security, take a commission, or touch your real money. That is a deliberate limit, not a missing feature.",
  },
  {
    icon: Mail,
    title: "Your email does one thing",
    body: "We use it to tell you when early access opens. No newsletter, no partners, no resale, and you can leave in one click.",
  },
];

export function TrustSection({ count }: { count: number | null }) {
  return (
    <section className="section-padding bg-secondary">
      <div className="section-container flex flex-col gap-16">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="text-small font-medium tracking-[0.2em] text-muted-foreground uppercase">
            Where we are
          </span>
          <h2 className="text-h2 font-bold tracking-tight text-balance">
            Early access,{" "}
            <span className="font-heading italic text-accent">honestly</span>.
          </h2>
          <p className="text-body text-muted-foreground text-pretty">
            No fake user counts, no invented testimonials. Here is exactly where
            this project stands today.
          </p>
        </Reveal>

        <ul className="grid gap-6 lg:grid-cols-3">
          {COMMITMENTS.map((item, index) => (
            <li key={item.title} className="flex">
              <Reveal delay={index * 100} className="flex flex-1">
                <div className="flex flex-1 flex-col gap-4 rounded-2xl border border-border bg-card p-8">
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-4xl bg-primary text-primary-foreground">
                    <item.icon className="size-4.5" aria-hidden />
                  </span>
                  <h3 className="font-heading text-xl font-semibold text-balance">
                    {item.title}
                  </h3>
                  <p className="text-small text-foreground/75 text-pretty">
                    {item.body}
                  </p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal className="flex flex-col items-center gap-4 text-center">
          <WaitlistCount count={count} className="text-foreground/75" />
          <Link
            href="#join"
            className="text-small font-semibold text-primary underline underline-offset-4 transition-colors duration-300 hover:text-accent-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
          >
            Add your name to the list
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
