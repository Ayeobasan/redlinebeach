"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experiences", href: "#experiences" },
  { label: "Facilities", href: "#facilities" },
  { label: "Dining", href: "#dining" },
  { label: "Pricing", href: "#pricing" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm py-3"
            : "bg-gradient-to-b from-dark/60 via-dark/20 to-transparent py-4 md:py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto section-padding flex items-center justify-between">
          {/* Logo with White Pill Badge for Crisp High-Contrast Legibility */}
          <Link
            href="#home"
            className={`relative z-10 flex items-center gap-2 rounded-2xl px-3 py-1.5 transition-all duration-300 ${
              scrolled
                ? "bg-transparent"
                : "bg-white/90 backdrop-blur-md shadow-md hover:bg-white"
            }`}
          >
            <Image
              src="/images/logo/redline-logo.png"
              alt="Redline Leisure & Resorts Logo"
              width={160}
              height={60}
              className="h-9 md:h-11 w-auto object-contain"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/10 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/20">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all duration-300 ${
                  scrolled
                    ? "text-dark/80 hover:text-ocean-900 hover:bg-black/5"
                    : "text-white/90 hover:text-white hover:bg-white/20"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link
              href="#reservation"
              className={`hidden sm:inline-flex items-center gap-2 px-6 py-2.5 text-sm font-heading font-semibold rounded-full transition-all duration-300 ${
                scrolled
                  ? "bg-coral-500 text-white hover:bg-coral-600 shadow-md shadow-coral-500/20"
                  : "bg-coral-500 text-white hover:bg-coral-600 shadow-lg shadow-coral-500/30"
              }`}
            >
              <span>Plan Your Visit</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden relative z-10 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                scrolled
                  ? "bg-dark/5 text-dark"
                  : "bg-white/20 backdrop-blur-md text-white"
              }`}
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 bg-ocean-900/98 backdrop-blur-xl transition-all duration-500 lg:hidden flex flex-col justify-between py-24 px-8 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center justify-center space-y-6 my-auto">
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-white/90 text-2xl font-heading font-semibold hover:text-coral-400 transition-colors"
              style={{
                transitionDelay: mobileOpen ? `${i * 50}ms` : "0ms",
                opacity: mobileOpen ? 1 : 0,
                transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
                transition: "all 0.4s ease-out",
              }}
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#reservation"
            onClick={() => setMobileOpen(false)}
            className="mt-6 btn-primary text-base px-8 py-3.5"
            style={{
              transitionDelay: mobileOpen ? `${navLinks.length * 50}ms` : "0ms",
              opacity: mobileOpen ? 1 : 0,
              transform: mobileOpen ? "translateY(0)" : "translateY(20px)",
              transition: "all 0.4s ease-out",
            }}
          >
            Plan Your Visit
          </Link>
        </div>

        <div className="text-center border-t border-white/10 pt-6">
          <p className="text-aqua-200 font-accent italic text-lg">Free Your Mind!</p>
          <p className="text-white/40 text-xs mt-1">Redline Leisure &amp; Resorts</p>
        </div>
      </div>
    </>
  );
}
