import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { HeroSection } from "@/components/sections/hero-section";
import { AgitationSection } from "@/components/sections/agitation-section";
import { HowItWorksSection } from "@/components/sections/how-it-works-section";
import { ValuePropsSection } from "@/components/sections/value-props-section";
import { TrustSection } from "@/components/sections/trust-section";
import { FaqSection } from "@/components/sections/faq-section";
import { FinalCtaSection } from "@/components/sections/final-cta-section";
import { getWaitlistCount } from "@/lib/waitlistDb";

export default async function Home() {
  const count = await getWaitlistCount();

  return (
    <>
      <SiteHeader />
      <main className="flex flex-1 flex-col">
        <HeroSection count={count} />
        <AgitationSection />
        <HowItWorksSection />
        <ValuePropsSection />
        <TrustSection count={count} />
        <FaqSection />
        <FinalCtaSection count={count} />
      </main>
      <SiteFooter />
    </>
  );
}
