"use client";

import { useRef } from "react";
import Image from "next/image";
import { Waves, Palmtree, Trophy, Gamepad2, Mic, Users } from "lucide-react";
import useInView from "@/hooks/useInView";

const experiences = [
  {
    title: "Swimming",
    description: "Dive into our beautiful pool with family and friends. A refreshing escape on any day.",
    icon: Waves,
    image: "/images/facilities/pool-deck/pool-area.jpg",
  },
  {
    title: "Beach Relaxation",
    description: "Soak up the sun at our beachfront with stunning ocean views and peaceful surroundings.",
    icon: Palmtree,
    image: "/images/facilities/beach-front/seating.jpg",
  },
  {
    title: "Outdoor Games",
    description: "Football, volleyball, tug of war, sack race and egg race — all free for guests to enjoy.",
    icon: Trophy,
    image: "/images/gallery/hellas-external.jpg",
  },
  {
    title: "Indoor Games",
    description: "Challenge your friends to snooker, table tennis or PlayStation 4 in our games area.",
    icon: Gamepad2,
    image: "/images/facilities/vip-glass-house/interior.jpg",
  },
  {
    title: "Karaoke",
    description: "Grab the mic and sing your heart out — available for individuals and groups.",
    icon: Mic,
    image: "/images/facilities/wunder-bar/interior.jpg",
  },
  {
    title: "Family Fun",
    description: "Trampoline, bouncing castle and wooden box games for the kids. Fun for the whole family.",
    icon: Users,
    image: "/images/gallery/hellas-ocean-view.jpg",
  },
];

export default function Experiences() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="experiences"
      ref={sectionRef}
      className="section-spacing bg-sand-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto section-padding relative">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-10 sm:mb-14 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-10 h-[2px] bg-coral-500" />
            <span className="text-coral-500 text-xs sm:text-sm font-heading font-semibold tracking-wider uppercase">
              Things to Do
            </span>
            <div className="w-8 sm:w-10 h-[2px] bg-coral-500" />
          </div>
          <h2 className="text-section-mobile md:text-section-desktop font-heading font-bold text-dark mb-3 text-balance">
            Unforgettable{" "}
            <span className="font-accent italic text-ocean-900">
              Experiences
            </span>
          </h2>
          <p className="text-dark/70 text-sm sm:text-base md:text-lg leading-relaxed">
            From thrilling activities to pure coastal relaxation, every moment at Redline
            is designed to delight.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={exp.title}
                className={`group relative rounded-2xl overflow-hidden aspect-[16/11] sm:aspect-[4/3] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                {/* 100% Natural Photo (No colored tint wash) */}
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Single subtle dark gradient scrim at bottom ONLY for text contrast */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/35 to-transparent transition-opacity duration-300" />

                {/* Card Content with mobile-friendly padding */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 sm:p-5 md:p-6">
                  <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-white/20 backdrop-blur-md border border-white/20 flex items-center justify-center mb-2.5 text-white">
                    <IconComponent className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <h3 className="text-white text-lg sm:text-xl font-heading font-bold">
                    {exp.title}
                  </h3>
                  <p className="text-white/80 text-xs sm:text-sm leading-relaxed mt-1 line-clamp-2 sm:line-clamp-none transition-all duration-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
