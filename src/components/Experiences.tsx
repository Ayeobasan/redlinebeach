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
    color: "from-blue-500/80 to-ocean-900/80",
  },
  {
    title: "Beach Relaxation",
    description: "Soak up the sun at our beachfront with stunning ocean views and peaceful surroundings.",
    icon: Palmtree,
    image: "/images/facilities/beach-front/seating.jpg",
    color: "from-amber-500/80 to-orange-700/80",
  },
  {
    title: "Outdoor Games",
    description: "Football, volleyball, tug of war, sack race and egg race — all free for guests to enjoy.",
    icon: Trophy,
    image: "/images/gallery/hellas-external.jpg",
    color: "from-green-500/80 to-emerald-700/80",
  },
  {
    title: "Indoor Games",
    description: "Challenge your friends to snooker, table tennis or PlayStation 4 in our games area.",
    icon: Gamepad2,
    image: "/images/facilities/vip-glass-house/interior.jpg",
    color: "from-purple-500/80 to-indigo-700/80",
  },
  {
    title: "Karaoke",
    description: "Grab the mic and sing your heart out — available for individuals and groups.",
    icon: Mic,
    image: "/images/facilities/wunder-bar/interior.jpg",
    color: "from-pink-500/80 to-rose-700/80",
  },
  {
    title: "Family Fun",
    description: "Trampoline, bouncing castle and wooden box games for the kids. Fun for the whole family.",
    icon: Users,
    image: "/images/gallery/hellas-ocean-view.jpg",
    color: "from-cyan-500/80 to-teal-700/80",
  },
];

export default function Experiences() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });

  return (
    <section
      id="experiences"
      ref={sectionRef}
      className="section-spacing bg-gradient-sand relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-tropical-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-ocean-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto section-padding relative">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-10 h-[2px] bg-coral-500" />
            <span className="text-coral-500 text-sm font-heading font-semibold tracking-wider uppercase">
              Things to Do
            </span>
            <div className="w-10 h-[2px] bg-coral-500" />
          </div>
          <h2 className="text-section-mobile md:text-section-desktop font-heading font-bold text-dark mb-4 text-balance">
            Unforgettable{" "}
            <span className="font-accent italic text-ocean-900">
              Experiences
            </span>
          </h2>
          <p className="text-dark/60 text-lg leading-relaxed">
            From thrilling activities to pure relaxation, every moment at Redline
            is designed to delight.
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experiences.map((exp, index) => {
            const IconComponent = exp.icon;
            return (
              <div
                key={exp.title}
                className={`group relative rounded-2xl overflow-hidden aspect-[4/3] cursor-pointer transition-all duration-700 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <Image
                  src={exp.image}
                  alt={exp.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div
                  className={`absolute inset-0 bg-gradient-to-t ${exp.color} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur-md flex items-center justify-center mb-3 group-hover:bg-white/30 transition-colors">
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white text-xl font-heading font-bold mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
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
