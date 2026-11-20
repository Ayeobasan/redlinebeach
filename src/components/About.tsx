"use client";

import { useRef } from "react";
import Image from "next/image";
import { Waves, Sparkles, Wine, Gamepad2, Palmtree, Utensils } from "lucide-react";
import useInView from "@/hooks/useInView";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.15 });

  const offerings = [
    { icon: Waves, label: "Swimming Pool" },
    { icon: Sparkles, label: "Event Center" },
    { icon: Wine, label: "Exotic Bar" },
    { icon: Gamepad2, label: "Games Area" },
    { icon: Palmtree, label: "Beach Front" },
    { icon: Utensils, label: "Catering" },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="section-spacing bg-warm-white overflow-hidden"
    >
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-8 sm:w-10 h-[2px] bg-coral-500" />
              <span className="text-coral-500 text-xs sm:text-sm font-heading font-semibold tracking-wider uppercase">
                About Redline
              </span>
            </div>

            <h2 className="text-section-mobile md:text-section-desktop font-heading font-bold text-dark mb-4 sm:mb-6 text-balance">
              Your Escape,{" "}
              <span className="font-accent italic text-ocean-900">
                Your Experience.
              </span>
            </h2>

            <p className="text-dark/70 text-base sm:text-lg leading-relaxed mb-4 sm:mb-6">
              Redline Leisure and Resorts is set in a tranquil environment,
              allowing guests to experience and be inspired by the wonders of
              nature.
            </p>

            <p className="text-dark/65 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              We offer a range of world-class facilities including a swimming
              pool, event center, exotic bar, games area and a beautiful beach
              front sit out. We also provide catering services with a touch of
              class.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {offerings.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3.5 rounded-xl bg-sand-100/60 hover:bg-sand-100 transition-colors border border-sand-200/40"
                  >
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-ocean-900/10 flex items-center justify-center flex-shrink-0 text-ocean-900">
                      <IconComponent className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="text-xs sm:text-sm font-medium text-dark/80">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Composition - cleanly constrained on mobile */}
          <div
            className={`relative transition-all duration-1000 delay-200 mt-4 sm:mt-0 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden aspect-[4/3] sm:aspect-[4/5] shadow-xl sm:shadow-2xl">
                <Image
                  src="/images/facilities/wunder-bar/interior.jpg"
                  alt="Wunder Bar at Redline Leisure & Resorts"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Floating Accent Image: contained inside on mobile, offset on desktop */}
              <div className="absolute bottom-3 left-3 sm:-bottom-6 sm:-left-6 md:-bottom-8 md:-left-8 w-32 h-24 sm:w-44 sm:h-32 md:w-56 md:h-44 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:shadow-xl border-2 sm:border-4 border-warm-white">
                <Image
                  src="/images/gallery/pool.jpg"
                  alt="Swimming pool at Redline Resorts"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Tagline Badge */}
              <div className="absolute top-4 right-4 sm:top-1/2 sm:-right-4 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-3 sm:p-4 border border-dark/5">
                <p className="text-xs sm:text-sm font-heading font-bold text-ocean-900">Free Your Mind!</p>
                <p className="text-[10px] sm:text-xs text-dark/50 mt-0.5">Since Establishment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
