"use client";

import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const LINKS = [
  { label: "Solutions", href: "#capabilities" },
  { label: "How It Works", href: "#process" },
  { label: "Programs", href: "#capabilities" },
  { label: "Testimonials", href: "#stories" },
  { label: "Partners", href: "#partners" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink/85 backdrop-blur-md border-b border-line-dark py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 shrink-0">
          <span className="grid place-items-center w-8 h-8 rounded-[7px] bg-gold text-ink font-display font-bold text-sm">
            A
          </span>
          <span className="font-display font-semibold text-[15px] tracking-tight text-paper">
            Accredian<span className="text-gold">Enterprise</span>
          </span>
        </a>

        <div className="hidden lg:flex items-center gap-9">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13.5px] font-medium text-mist hover:text-paper transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <a
            href="#contact"
            className="text-[13.5px] font-medium text-mist hover:text-paper transition-colors"
          >
            Sign In
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-1.5 rounded-full bg-gold px-4.5 py-2.5 text-[13px] font-semibold text-ink hover:bg-gold-soft transition-colors"
          >
            Get a Demo
            <ArrowUpRight
              size={14}
              strokeWidth={2.5}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden text-paper p-1.5"
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden mx-6 mt-4 rounded-2xl border border-line-dark bg-navy p-5 flex flex-col gap-1">
          {LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-[14px] font-medium text-mist hover:text-paper py-2.5 border-b border-line-dark last:border-0"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 text-center rounded-full bg-gold px-4 py-3 text-[13px] font-semibold text-ink"
          >
            Get a Demo
          </a>
        </div>
      )}
    </header>
  );
}
