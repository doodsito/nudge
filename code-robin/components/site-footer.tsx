import Link from "next/link";

import { BrandMark } from "@/components/brand-mark";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#why-ante", label: "Why Ante" },
  { href: "#faq", label: "FAQ" },
  { href: "#join", label: "Join the waitlist" },
];

const CONTACT_EMAIL = "hello@ante-app.com";

export function SiteFooter() {
  return (
    <footer className="bg-[#10182c] text-primary-foreground">
      <div className="section-container flex flex-col gap-12 py-16">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="flex max-w-sm flex-col gap-3">
            <Link
              href="#top"
              aria-label="Ante, back to top"
              className="w-fit transition-opacity duration-300 hover:opacity-80"
            >
              <BrandMark />
            </Link>
            <p className="text-small text-primary-foreground/60 text-pretty">
              Every hand starts with an ante. Learn to invest with virtual
              money, before you risk the real thing.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div className="flex flex-col gap-3">
              <span className="text-small font-semibold text-primary-foreground/85">
                Navigation
              </span>
              <nav
                aria-label="Footer navigation"
                className="flex flex-col gap-2.5"
              >
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-small text-primary-foreground/60 transition-colors duration-300 hover:text-accent"
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </div>

            <div className="flex flex-col gap-3">
              <span className="text-small font-semibold text-primary-foreground/85">
                Contact
              </span>
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-small text-primary-foreground/60 transition-colors duration-300 hover:text-accent"
              >
                {CONTACT_EMAIL}
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-primary-foreground/10 pt-8">
          <p className="max-w-3xl text-small text-primary-foreground/50 text-pretty">
            Ante is an educational product. It does not provide investment
            advice or recommendations, does not sell financial products, and
            never handles real money. All portfolios in the app are virtual.
          </p>
          <div className="flex flex-col gap-2 text-small text-primary-foreground/50 sm:flex-row sm:items-center sm:justify-between">
            <span>© {new Date().getFullYear()} Ante. All rights reserved.</span>
            <span>Student project · ENGIN 2831</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
