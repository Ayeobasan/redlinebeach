"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const y = window.scrollY;
        heroRef.current.style.setProperty("--scroll-y", `${y * 0.3}px`);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Parallax */}
      <div
        className="absolute inset-0 w-full h-[120%]"
        style={{ transform: "translateY(var(--scroll-y, 0))" }}
      >
        <Image
          src="/images/hero/cabana-beach.jpg"
          alt="Redline Leisure & Resorts beachfront cabanas"
          fill
          className="object-cover object-center"
          priority
          quality={90}
        />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark/50 via-dark/30 to-dark/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-ocean-900/30 to-transparent" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto section-padding text-center">
        {/* Tagline Badge */}
        <div className="inline-flex items-center gap-2 px-5 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/15 animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-coral-500 animate-pulse" />
          <span className="text-white/90 text-sm font-medium tracking-wide">
            Free Your Mind!
          </span>
        </div>

        {/* Main Heading */}
        <h1
          className="text-hero-mobile md:text-hero-desktop font-heading font-bold text-white mb-6 animate-slide-up text-balance"
          style={{ animationDelay: "0.2s", animationFillMode: "both" }}
        >
          Escape the Ordinary.{" "}
          <span className="block mt-1">
            <span className="text-gradient bg-gradient-to-r from-aqua-200 to-tropical-300 bg-clip-text text-transparent">
              Embrace the Coast.
            </span>
          </span>
        </h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.4s", animationFillMode: "both" }}
        >
          Discover a refreshing escape where beautiful ocean views, exciting
          experiences and unforgettable moments come together.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-slide-up"
          style={{ animationDelay: "0.6s", animationFillMode: "both" }}
        >
          <Link href="#experiences" className="btn-primary text-base px-9 py-4">
            Explore the Resort
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </Link>
          <Link href="#reservation" className="btn-secondary text-base px-9 py-4">
            Plan Your Visit
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 rounded-full bg-white/60 animate-bounce" />
        </div>
      </div>

      {/* Decorative wave at bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          viewBox="0 0 1440 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full"
          preserveAspectRatio="none"
        >
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="#FFFCF7"
          />
        </svg>
      </div>
    </section>
  );
}
