"use client";

import { useRef } from "react";
import Image from "next/image";
import { Gift, Sparkles, Check } from "lucide-react";
import useInView from "@/hooks/useInView";

const meals = [
  {
    name: "Rice & Chicken",
    image: "/images/dining/rice-chicken.jpg",
    prices: [
      { group: "5", price: "₦37,500" },
      { group: "10", price: "₦75,000" },
      { group: "20", price: "₦150,000" },
    ],
    promo: true,
  },
  {
    name: "Chicken & Chips",
    image: "/images/dining/chicken-chips.jpg",
    prices: [
      { group: "5", price: "₦36,500" },
      { group: "10", price: "₦75,000" },
      { group: "20", price: "₦150,000" },
    ],
    promo: true,
  },
  {
    name: "Shawarma",
    image: "/images/dining/shawarma.jpg",
    prices: [
      { group: "5", price: "₦17,500" },
      { group: "10", price: "₦35,000" },
      { group: "20", price: "₦70,000" },
    ],
    promo: false,
  },
  {
    name: "Small Chops",
    image: "/images/dining/small-chops.jpg",
    prices: [
      { group: "5", price: "₦17,500" },
      { group: "10", price: "₦35,000" },
      { group: "20", price: "₦70,000" },
    ],
    promo: false,
  },
  {
    name: "Mixed Platter",
    image: "/images/dining/mixed-platter.jpg",
    prices: [{ group: "5", price: "₦30,000" }],
    promo: false,
  },
];

export default function Dining() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="dining"
      ref={sectionRef}
      className="section-spacing bg-ocean-900 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-tropical-400 blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-aqua-400 blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto section-padding relative">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-coral-400" />
            <span className="text-coral-400 text-sm font-heading font-semibold tracking-wider uppercase">
              Group Meals
            </span>
            <div className="w-10 h-[2px] bg-coral-400" />
          </div>
          <h2 className="text-section-mobile md:text-section-desktop font-heading font-bold text-white mb-4 text-balance">
            Dine Together,{" "}
            <span className="font-accent italic text-aqua-200">
              Celebrate Together
            </span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Delicious group meal packages crafted for every gathering. Bring your
            people, we&apos;ll bring the flavour.
          </p>
        </div>

        {/* Meals Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {meals.map((meal, index) => (
            <div
              key={meal.name}
              className={`group bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-700 ${
                isInView
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-12"
              } ${meal.name === "Mixed Platter" ? "md:col-span-2 lg:col-span-1" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Food Image */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={meal.image}
                  alt={meal.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {meal.promo && (
                  <div className="absolute top-3 right-3 inline-flex items-center gap-1.5 px-3 py-1 bg-coral-500 text-white text-xs font-bold rounded-full shadow-md">
                    <Gift className="w-3.5 h-3.5" />
                    <span>PROMO ELIGIBLE</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-white mb-4">
                  {meal.name}
                </h3>
                <div className="space-y-2">
                  {meal.prices.map((p) => (
                    <div
                      key={p.group}
                      className="flex items-center justify-between py-2 border-b border-white/5 last:border-0"
                    >
                      <span className="text-white/50 text-sm">
                        Group of {p.group}
                      </span>
                      <span className="text-white font-heading font-bold">
                        {p.price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Promo Banner */}
        <div
          className={`relative rounded-2xl overflow-hidden bg-gradient-to-r from-coral-500/20 to-coral-500/5 border border-coral-500/30 p-8 md:p-10 transition-all duration-1000 delay-500 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-coral-500 flex items-center justify-center text-white shadow-lg shadow-coral-500/30">
              <Sparkles className="w-7 h-7" />
            </div>
            <div className="flex-1">
              <h4 className="text-white text-lg font-heading font-bold mb-2">
                Special Group Dining Offer
              </h4>
              <p className="text-white/70 leading-relaxed">
                Order <strong className="text-white">Rice &amp; Chicken</strong>{" "}
                or <strong className="text-white">Chicken &amp; Chips</strong>{" "}
                for a minimum of{" "}
                <strong className="text-coral-400">10 plates</strong> and receive
                one of the following complimentary:
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {[
                  "1 Set of Gazebo Tent",
                  "1 Set of Hella House Extension",
                  "1 Set of Pool Top Tent",
                ].map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm border border-white/10"
                  >
                    <Check className="w-3.5 h-3.5 text-coral-400" />
                    <span>{item}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
