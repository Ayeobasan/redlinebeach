"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";
import useInView from "@/hooks/useInView";

const facilities = [
  {
    name: "Hella's House",
    category: "Event Center",
    description:
      "Our premier multi-level venue with ocean-view floor-to-ceiling windows, ambient lighting, and flexible floor plans. Designed for weddings, corporate retreats, conferences, and milestone parties.",
    capacity: "Up to 150 persons (Main) · 50 persons (Partition)",
    prices: [
      { label: "Up Floor", price: "₦300,000" },
      { label: "Down Floor", price: "₦250,000" },
      { label: "Partition", price: "₦150,000" },
    ],
    image: "/images/facilities/hellas-house/interior-2.jpg",
    featured: true,
  },
  {
    name: "Hella's House External",
    category: "Outdoor Lounge",
    description:
      "An intimate outdoor extension featuring shaded bench seating beneath large parasols on paved grounds. Perfect for small groups desiring an open-air coastal atmosphere right outside the main hall.",
    capacity: "Up to 10 persons",
    prices: [{ label: "Rental", price: "₦10,000" }],
    image: "/images/facilities/hellas-external/exterior.jpg",
    featured: false,
  },
  {
    name: "Wunder Bar",
    category: "Pool Bar & Lounge",
    description:
      "The resort's signature entertainment and cocktail bar overlooking the pool. Featuring woven wicker armchairs, low tables, widescreen TVs, indoor games, and ambient mood lighting.",
    capacity: "Up to 80 persons",
    prices: [{ label: "Rental", price: "₦200,000" }],
    image: "/images/facilities/wunder-bar/interior.jpg",
    featured: true,
  },
  {
    name: "VIP Glass House",
    category: "Exclusive Lounge",
    description:
      "An elevated VIP lounge with rich artificial turf flooring, stylish armchair seating, and panoramic resort views. An exclusive setting for private birthdays, celebrations, and VIP gatherings.",
    capacity: "Up to 80 persons",
    prices: [{ label: "Rental", price: "₦120,000" }],
    image: "/images/facilities/vip-glass-house/interior.jpg",
    featured: false,
  },
  {
    name: "Cabana",
    category: "Beachfront Shelter",
    description:
      "Charming private wooden beach huts positioned directly on the sand under swaying palm trees. Comfortable cushioned bench seating facing the Atlantic ocean waves.",
    capacity: "Up to 12 persons",
    prices: [{ label: "Rental", price: "₦30,000" }],
    image: "/images/facilities/cabana/beachside.jpg",
    featured: true,
  },
  {
    name: "Walkway Gazebo",
    category: "Garden Gazebo",
    description:
      "A dark-timber pergola pavilion with vibrant red cushions and sheltered slatted walls. Situated along the resort walkway, offering shade and comfort with a breeze from the sea.",
    capacity: "Up to 9 persons",
    prices: [{ label: "Rental", price: "₦20,000" }],
    image: "/images/facilities/gazebo/exterior.jpg",
    featured: false,
  },
  {
    name: "Pool Deck",
    category: "Poolside Space",
    description:
      "Reserved umbrella-shaded deck tables right along the turquoise pool perimeter. Enjoy immediate pool access and front-row seats for all water activities.",
    capacity: "Up to 6 persons",
    prices: [{ label: "Rental", price: "₦15,000" }],
    image: "/images/facilities/pool-deck/pool-area.jpg",
    featured: false,
  },
  {
    name: "Beach Front",
    category: "Open Shoreline",
    description:
      "Spacious open-air seating with tables and chairs set directly into the soft sand, just paces from the ocean tide. Open to all resort guests at no extra rental fee.",
    capacity: "Open seating area",
    prices: [{ label: "Access", price: "Free" }],
    image: "/images/facilities/beach-front/seating.jpg",
    featured: true,
  },
];

export default function Facilities() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.05 });

  return (
    <section
      id="facilities"
      ref={sectionRef}
      className="section-spacing bg-white relative"
    >
      <div className="max-w-7xl mx-auto section-padding">
        {/* Section Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-10 sm:mb-16 transition-all duration-1000 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <div className="w-8 sm:w-10 h-[2px] bg-coral-500" />
            <span className="text-coral-500 text-xs sm:text-sm font-heading font-semibold tracking-wider uppercase">
              Spaces &amp; Venues
            </span>
            <div className="w-8 sm:w-10 h-[2px] bg-coral-500" />
          </div>
          <h2 className="text-section-mobile md:text-section-desktop font-heading font-bold text-dark mb-3 text-balance">
            Find Your{" "}
            <span className="font-accent italic text-ocean-900">
              Perfect Space
            </span>
          </h2>
          <p className="text-dark/70 text-sm sm:text-base md:text-lg leading-relaxed">
            From intimate cabanas by the surf to versatile event centers for up
            to 150 guests, each space is maintained for your comfort and
            enjoyment.
          </p>
        </div>

        {/* Facilities - Asymmetric & Editorial Layout with mobile-optimized padding */}
        <div className="space-y-6 sm:space-y-8 md:space-y-12">
          {facilities.map((facility, index) => {
            const isReversed = index % 2 !== 0;
            return (
              <div
                key={facility.name}
                className={`group transition-all duration-1000 ${
                  isInView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 75}ms` }}
              >
                <div className="grid lg:grid-cols-12 gap-0 card-elevated border border-dark/5 bg-sand-50/20">
                  {/* Image Column */}
                  <div
                    className={`relative min-h-[220px] sm:min-h-[280px] lg:min-h-[420px] overflow-hidden ${
                      isReversed
                        ? "lg:col-span-7 lg:order-2"
                        : "lg:col-span-7 lg:order-1"
                    }`}
                  >
                    <Image
                      src={facility.image}
                      alt={`${facility.name} at Redline Leisure & Resorts`}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 60vw"
                    />
                    <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex gap-2">
                      <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-dark/75 backdrop-blur-md text-white text-[11px] sm:text-xs font-semibold rounded-full tracking-wide">
                        {facility.category}
                      </span>
                      {facility.prices[0].price === "Free" && (
                        <span className="px-3 py-1 sm:px-3.5 sm:py-1.5 bg-coral-500 text-white text-[11px] sm:text-xs font-bold rounded-full tracking-wide shadow-sm">
                          FREE SITTING
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Content Column with clean mobile padding */}
                  <div
                    className={`p-5 sm:p-7 md:p-10 lg:p-12 flex flex-col justify-between ${
                      isReversed
                        ? "lg:col-span-5 lg:order-1"
                        : "lg:col-span-5 lg:order-2"
                    }`}
                  >
                    <div>
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-heading font-bold text-dark mb-2 sm:mb-3">
                        {facility.name}
                      </h3>
                      <p className="text-dark/70 leading-relaxed mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
                        {facility.description}
                      </p>

                      {/* Capacity Pill */}
                      <div className="flex items-center gap-2 mb-4 sm:mb-6 text-ocean-900 bg-ocean-50/80 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl w-fit">
                        <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
                        <span className="text-xs sm:text-sm font-medium">
                          {facility.capacity}
                        </span>
                      </div>
                    </div>

                    <div>
                      {/* Price Badges */}
                      <div className="flex flex-wrap gap-2 mb-5 sm:mb-6">
                        {facility.prices.map((p) => (
                          <div
                            key={p.label}
                            className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white border border-sand-200/80 shadow-xs"
                          >
                            <span className="text-[10px] sm:text-[11px] uppercase tracking-wider text-dark/40 block">
                              {p.label}
                            </span>
                            <span className="text-sm sm:text-base md:text-lg font-heading font-bold text-ocean-900">
                              {p.price}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* CTA */}
                      <Link
                        href={`#reservation?space=${encodeURIComponent(
                          facility.name
                        )}`}
                        className="btn-outline text-xs sm:text-sm py-2 px-4 sm:py-2.5 sm:px-6 inline-flex items-center gap-2 w-full sm:w-auto justify-center"
                      >
                        <span>Enquire About {facility.name}</span>
                        <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
