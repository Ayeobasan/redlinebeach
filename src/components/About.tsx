"use client";

import { useRef } from "react";
import Image from "next/image";
import { Waves, Sparkles, Wine, Gamepad2, Palmtree, Utensils } from "lucide-react";
import useInView from "@/hooks/useInView";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.2 });

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
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text Content */}
          <div
            className={`transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-coral-500" />
              <span className="text-coral-500 text-sm font-heading font-semibold tracking-wider uppercase">
                About Redline
              </span>
            </div>

            <h2 className="text-section-mobile md:text-section-desktop font-heading font-bold text-dark mb-6 text-balance">
              Your Escape,{" "}
              <span className="font-accent italic text-ocean-900">
                Your Experience.
              </span>
            </h2>

            <p className="text-dark/70 text-lg leading-relaxed mb-6">
              Redline Leisure and Resorts is set in a tranquil environment,
              allowing guests to experience and be inspired by the wonders of
              nature.
            </p>

            <p className="text-dark/60 leading-relaxed mb-8">
              We offer a range of world-class facilities including a swimming
              pool, event center, exotic bar, games area and a beautiful beach
              front sit out. We also provide catering services with a touch of
              class.
            </p>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-4">
              {offerings.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.label}
                    className="flex items-center gap-3 p-3.5 rounded-xl bg-sand-100/60 hover:bg-sand-100 transition-colors border border-sand-200/40"
                  >
                    <div className="w-8 h-8 rounded-lg bg-ocean-900/10 flex items-center justify-center flex-shrink-0 text-ocean-900">
                      <IconComponent className="w-4 h-4" />
                    </div>
                    <span className="text-sm font-medium text-dark/80">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Image Composition */}
          <div
            className={`relative transition-all duration-1000 delay-200 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                <Image
                  src="/images/facilities/wunder-bar/interior.jpg"
                  alt="Wunder Bar at Redline Leisure & Resorts"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating Accent Image */}
              <div className="absolute -bottom-8 -left-8 w-48 h-36 md:w-56 md:h-44 rounded-2xl overflow-hidden shadow-xl border-4 border-warm-white">
                <Image
                  src="/images/gallery/pool.jpg"
                  alt="Swimming pool at Redline Resorts"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-tropical-400/20 blur-2xl" />
              <div className="absolute top-1/2 -right-4 bg-white rounded-2xl shadow-lg p-4 hidden md:block">
                <p className="text-sm font-heading font-bold text-ocean-900">Free Your Mind!</p>
                <p className="text-xs text-dark/50 mt-0.5">Since Establishment</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
