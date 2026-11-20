"use client";

import { useRef, useState } from "react";
import {
  Ticket,
  Wine,
  Waves,
  Gamepad2,
  Mic,
  Building2,
  Camera,
  Moon,
  LucideIcon,
} from "lucide-react";
import useInView from "@/hooks/useInView";

type PricingCategory = {
  id: string;
  title: string;
  icon: LucideIcon;
  items: { name: string; price: string; note?: string }[];
};

const categories: PricingCategory[] = [
  {
    id: "entrance",
    title: "Entrance Fees",
    icon: Ticket,
    items: [
      { name: "Adults / Teenagers", price: "₦2,000" },
      { name: "Kids (Age 3 and above)", price: "₦1,500" },
    ],
  },
  {
    id: "corkage",
    title: "Corkage Fee",
    icon: Wine,
    items: [
      { name: "Groups of 10 & above", price: "₦10,000" },
      { name: "Groups below 10", price: "₦1,000", note: "per head" },
    ],
  },
  {
    id: "pool",
    title: "Swimming Pool",
    icon: Waves,
    items: [
      { name: "Adults / Teenagers", price: "₦2,500", note: "2 hours" },
      { name: "Kids", price: "₦1,000" },
    ],
  },
  {
    id: "games",
    title: "Games",
    icon: Gamepad2,
    items: [
      {
        name: "Outdoor Games",
        price: "Free",
        note: "Football, Volleyball, Tug of War, Sack Race, Egg Race",
      },
      { name: "Snooker", price: "₦1,000", note: "per coin" },
      { name: "Tennis & PS4", price: "₦1,000", note: "per head" },
      {
        name: "Trampoline & Bouncing Castle",
        price: "₦1,000",
        note: "per kid/game",
      },
      { name: "Wooden Box & Basket Game", price: "Free" },
    ],
  },
  {
    id: "karaoke",
    title: "Karaoke",
    icon: Mic,
    items: [
      { name: "Individual", price: "₦2,000", note: "30 minutes" },
      { name: "Group", price: "₦10,000", note: "30 minutes" },
    ],
  },
  {
    id: "venues",
    title: "Venue Rentals",
    icon: Building2,
    items: [
      { name: "Hella's House — Up Floor", price: "₦300,000", note: "150 persons" },
      { name: "Hella's House — Down Floor", price: "₦250,000", note: "150 persons" },
      { name: "Hella's House — Partition", price: "₦150,000", note: "50 persons" },
      { name: "Hella's House External", price: "₦10,000", note: "10 persons" },
      { name: "Wunder Bar (Pool Bar)", price: "₦200,000", note: "80 persons" },
      { name: "VIP Glass House", price: "₦120,000", note: "80 persons" },
      { name: "Cabana", price: "₦30,000", note: "12 persons" },
      { name: "Walkway Gazebo", price: "₦20,000", note: "9 persons" },
      { name: "Pool Deck", price: "₦15,000", note: "6 persons" },
      { name: "Beach Front", price: "Free", note: "Open seating" },
    ],
  },
  {
    id: "photo",
    title: "Photography & Video",
    icon: Camera,
    items: [
      { name: "Video Shoot — Weekdays", price: "₦200,000", note: "Max 10 persons" },
      { name: "Video Shoot — Weekends", price: "₦250,000", note: "Max 10 persons" },
      { name: "Photo Shoot — Weekdays", price: "₦50,000", note: "Max 10 persons" },
      { name: "Photo Shoot — Weekends", price: "₦70,000", note: "Max 10 persons" },
    ],
  },
  {
    id: "overnight",
    title: "Overnight Hangout",
    icon: Moon,
    items: [
      {
        name: "Overnight Hangout",
        price: "₦70,000",
        note: "Strictly by reservation",
      },
    ],
  },
];

export default function Pricing() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.05 });
  const [activeTab, setActiveTab] = useState("entrance");

  const activeCategory = categories.find((c) => c.id === activeTab)!;
  const ActiveIcon = activeCategory.icon;

  return (
    <section
      id="pricing"
      ref={sectionRef}
      className="section-spacing bg-gradient-sand relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-coral-500" />
            <span className="text-coral-500 text-sm font-heading font-semibold tracking-wider uppercase">
              Rates &amp; Packages
            </span>
            <div className="w-10 h-[2px] bg-coral-500" />
          </div>
          <h2 className="text-section-mobile md:text-section-desktop font-heading font-bold text-dark mb-4 text-balance">
            Transparent{" "}
            <span className="font-accent italic text-ocean-900">Pricing</span>
          </h2>
          <p className="text-dark/60 text-lg leading-relaxed">
            Everything you need to plan your perfect visit. All prices in
            Nigerian Naira (₦).
          </p>
        </div>

        {/* Category Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-2 mb-10 transition-all duration-1000 delay-200 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {categories.map((cat) => {
            const TabIcon = cat.icon;
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-ocean-900 text-white shadow-md"
                    : "bg-white text-dark/60 hover:text-dark hover:bg-white/80 border border-dark/5"
                }`}
              >
                <TabIcon className={`w-4 h-4 ${isActive ? "text-aqua-200" : "text-ocean-700"}`} />
                <span className="hidden sm:inline">{cat.title}</span>
              </button>
            );
          })}
        </div>

        {/* Price Table */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-1000 delay-300 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-dark/5">
            {/* Header */}
            <div className="px-8 py-6 bg-ocean-900 text-white">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-aqua-200">
                  <ActiveIcon className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-heading font-bold">
                  {activeCategory.title}
                </h3>
              </div>
            </div>

            {/* Items */}
            <div className="divide-y divide-dark/5">
              {activeCategory.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between px-8 py-5 hover:bg-sand-50/50 transition-colors"
                >
                  <div>
                    <span className="font-medium text-dark">{item.name}</span>
                    {item.note && (
                      <span className="block text-sm text-dark/40 mt-0.5">
                        {item.note}
                      </span>
                    )}
                  </div>
                  <span
                    className={`font-heading font-bold text-lg ${
                      item.price === "Free"
                        ? "text-tropical-500"
                        : "text-ocean-900"
                    }`}
                  >
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
