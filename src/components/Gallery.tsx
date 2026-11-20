"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import useInView from "@/hooks/useInView";

const galleryImages = [
  { src: "/images/gallery/cabana.jpg", alt: "Beachside cabanas", span: "col-span-2 row-span-2" },
  { src: "/images/gallery/pool.jpg", alt: "Swimming pool area", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/wunder-bar.jpg", alt: "Wunder Bar interior", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/gazebo.jpg", alt: "Walkway Gazebo", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/beach.jpg", alt: "Beach front seating", span: "col-span-1 row-span-2" },
  { src: "/images/gallery/vip-glass-house.jpg", alt: "VIP Glass House", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/hellas-interior.jpg", alt: "Hella's House interior", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/hellas-ocean-view.jpg", alt: "Ocean view from Hella's House", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/food-spread.jpg", alt: "Food and dining", span: "col-span-1 row-span-1" },
  { src: "/images/gallery/hellas-external.jpg", alt: "Hella's House External seating", span: "col-span-1 row-span-1" },
];

export default function Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.05 });
  const [lightbox, setLightbox] = useState<number | null>(null);

  return (
    <>
      <section
        id="gallery"
        ref={sectionRef}
        className="section-spacing bg-white relative"
      >
        <div className="max-w-7xl mx-auto section-padding">
          {/* Section Header */}
          <div
            className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-coral-500" />
              <span className="text-coral-500 text-sm font-heading font-semibold tracking-wider uppercase">
                Gallery
              </span>
              <div className="w-10 h-[2px] bg-coral-500" />
            </div>
            <h2 className="text-section-mobile md:text-section-desktop font-heading font-bold text-dark mb-4 text-balance">
              A Glimpse of{" "}
              <span className="font-accent italic text-ocean-900">Paradise</span>
            </h2>
            <p className="text-dark/60 text-lg leading-relaxed">
              Explore Redline through the lens — real moments, real beauty.
            </p>
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[240px]">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                className={`group relative rounded-xl overflow-hidden cursor-pointer ${img.span} transition-all duration-700 ${
                  isInView
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-95"
                }`}
                style={{ transitionDelay: `${index * 60}ms` }}
                onClick={() => setLightbox(index)}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/30 transition-colors duration-500 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-500">
                    <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="lightbox-overlay"
          onClick={() => setLightbox(null)}
        >
          <button
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={() => setLightbox(null)}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Navigation */}
          <button
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox - 1 + galleryImages.length) % galleryImages.length);
            }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            onClick={(e) => {
              e.stopPropagation();
              setLightbox((lightbox + 1) % galleryImages.length);
            }}
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          <div
            className="relative w-[90vw] h-[80vh] max-w-5xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={galleryImages[lightbox].src}
              alt={galleryImages[lightbox].alt}
              fill
              className="object-contain"
              quality={95}
            />
          </div>
          <p className="absolute bottom-6 text-white/70 text-sm">
            {galleryImages[lightbox].alt}
          </p>
        </div>
      )}
    </>
  );
}
