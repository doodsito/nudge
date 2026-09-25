"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

import { BrandMark } from "@/components/brand-mark";
import { Button } from "@/components/ui/button";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#why-ante", label: "Why Ante" },
  { href: "#faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/85 backdrop-blur-md">
      <div className="section-container flex h-16 items-center justify-between lg:h-20">
        <Link
          href="#top"
          aria-label="Ante, back to top"
          className="text-primary transition-opacity duration-300 hover:opacity-80"
          onClick={() => setOpen(false)}
        >
          <BrandMark />
        </Link>

        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-8 lg:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-small font-medium text-foreground/80 transition-colors duration-300 hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button
            render={<Link href="#join">Join the waitlist</Link>}
            nativeButton={false}
            className="bg-accent text-accent-foreground hover:bg-accent/85 focus-visible:ring-accent"
          />
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="flex size-11 items-center justify-center rounded-md text-foreground transition-colors duration-300 hover:bg-muted lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-menu"
          aria-label="Mobile navigation"
          className="border-t border-border/80 bg-background lg:hidden"
        >
          <div className="section-container flex flex-col gap-1 py-4">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-body font-medium text-foreground/85 transition-colors duration-300 hover:bg-muted hover:text-primary"
              >
                {link.label}
              </Link>
            ))}
            <Button
              render={
                <Link href="#join" onClick={() => setOpen(false)}>
                  Join the waitlist
                </Link>
              }
              nativeButton={false}
              className="mt-2 bg-accent text-accent-foreground hover:bg-accent/85 focus-visible:ring-accent"
            />
          </div>
        </nav>
      ) : null}
    </header>
  );
}
