import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQS = [
  {
    question: "Is it free?",
    answer:
      "Joining the waitlist is free, and early access will be free. We have not set pricing beyond that yet, and we would rather tell you that than invent a number.",
  },
  {
    question: "Is this financial advice?",
    answer:
      "No. Ante teaches how investing works and lets you practise decisions with virtual money. It will never recommend a specific investment, manage real money, or tell you what to buy.",
  },
  {
    question: "Do I need money to start?",
    answer:
      "No. Everything in Ante runs on a €10,000 virtual portfolio. You never connect a bank account and you never deposit a euro.",
  },
  {
    question: "I know nothing about finance. Is that a problem?",
    answer:
      "That is the point. Ante assumes no background at all. If you have been meaning to look into investing for two years and still have not, you are the person we are building this for.",
  },
  {
    question: "When does it launch?",
    answer:
      "Early access opens in stages while we build. Joining the list is how you get in first, and we will email you as soon as your spot is ready.",
  },
  {
    question: "What happens to my email address?",
    answer:
      "We use it to tell you when early access opens. Nothing else. We do not run a newsletter, we do not share it with partners, and you can unsubscribe at any time.",
  },
];

export function FaqSection() {
  return (
    <section
      id="faq"
      className="section-padding scroll-mt-16 bg-background lg:scroll-mt-20"
    >
      <div className="section-container flex flex-col gap-16">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <span className="text-small font-medium tracking-[0.2em] text-muted-foreground uppercase">
            FAQ
          </span>
          <h2 className="text-h2 font-bold tracking-tight text-balance">
            The questions you were about to{" "}
            <span className="font-heading italic text-accent">ask</span>.
          </h2>
        </Reveal>

        <Reveal className="mx-auto w-full max-w-3xl">
          <Accordion>
            {FAQS.map((faq) => (
              <AccordionItem key={faq.question} className="border-border">
                <AccordionTrigger className="gap-6 py-6 font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="pr-10 pb-6 text-foreground/75">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
