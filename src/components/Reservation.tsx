"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import useInView from "@/hooks/useInView";

const enquiryTypes = [
  "General Visit",
  "Venue Booking",
  "Private Space",
  "Group Dining",
  "Photography / Video Shoot",
  "Overnight Hangout",
  "Corporate Event",
  "Other",
];

export default function Reservation() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.1 });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Note: This form is not connected to a backend.
    // In production, integrate with an email service or booking API.
    setSubmitted(true);
  };

  return (
    <section
      id="reservation"
      ref={sectionRef}
      className="section-spacing bg-gradient-sand relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />

      <div className="max-w-7xl mx-auto section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left - Info */}
          <div
            className={`transition-all duration-1000 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }`}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-[2px] bg-coral-500" />
              <span className="text-coral-500 text-sm font-heading font-semibold tracking-wider uppercase">
                Reservations
              </span>
            </div>

            <h2 className="text-section-mobile md:text-section-desktop font-heading font-bold text-dark mb-6 text-balance">
              Plan Your{" "}
              <span className="font-accent italic text-ocean-900">Visit</span>
            </h2>

            <p className="text-dark/60 text-lg leading-relaxed mb-8">
              Whether you&apos;re planning a day out, a venue booking or a
              special event, we&apos;d love to hear from you. Send us your enquiry
              and our team will get back to you promptly.
            </p>

            {/* Quick Contact */}
            <div className="space-y-3 mb-6 sm:mb-8">
              <h4 className="font-heading font-bold text-dark text-xs sm:text-sm uppercase tracking-wider">
                Or call us directly
              </h4>
              {["08088576938", "08038436727", "08037333389"].map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-white hover:bg-ocean-50 transition-colors group border border-dark/5"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-ocean-900/5 flex items-center justify-center group-hover:bg-ocean-900 transition-colors">
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 text-ocean-900 group-hover:text-white transition-colors"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <span className="font-heading font-semibold text-ocean-900 text-sm sm:text-base">
                    {phone}
                  </span>
                </a>
              ))}
            </div>

            <div className="p-4 sm:p-6 rounded-2xl bg-ocean-900 text-white">
              <p className="font-accent italic text-sand-100 text-base sm:text-lg mb-1">
                &ldquo;Free Your Mind!&rdquo;
              </p>
              <p className="text-white/70 text-xs sm:text-sm">
                Let Redline Leisure &amp; Resorts be your next unforgettable escape.
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <div
            className={`transition-all duration-1000 delay-200 ${
              isInView
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-12"
            }`}
          >
            {submitted ? (
              <div className="bg-white rounded-2xl shadow-sm border border-dark/5 p-6 sm:p-10 text-center">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-coral-50 flex items-center justify-center">
                  <svg
                    className="w-8 h-8 sm:w-10 sm:h-10 text-coral-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-bold text-dark mb-2">
                  Enquiry Sent!
                </h3>
                <p className="text-dark/60 text-sm sm:text-base mb-6">
                  Thank you for your interest. Our team will contact you shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="btn-outline text-xs sm:text-sm"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-sm border border-dark/5 p-4 sm:p-7 md:p-10 space-y-4 sm:space-y-5"
              >
                <h3 className="text-xl font-heading font-bold text-dark mb-2">
                  Make an Enquiry
                </h3>

                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1.5">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 rounded-xl border border-dark/10 bg-sand-50/50 text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-ocean-500/30 focus:border-ocean-500 transition-all"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1.5">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0801 234 5678"
                    className="w-full px-4 py-3 rounded-xl border border-dark/10 bg-sand-50/50 text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-ocean-500/30 focus:border-ocean-500 transition-all"
                  />
                </div>

                {/* Type of Enquiry */}
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1.5">
                    Type of Enquiry *
                  </label>
                  <select
                    required
                    className="w-full px-4 py-3 rounded-xl border border-dark/10 bg-sand-50/50 text-dark focus:outline-none focus:ring-2 focus:ring-ocean-500/30 focus:border-ocean-500 transition-all appearance-none"
                  >
                    <option value="">Select enquiry type</option>
                    {enquiryTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Date & Guests */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-dark/70 mb-1.5">
                      Preferred Date
                    </label>
                    <input
                      type="date"
                      className="w-full px-4 py-3 rounded-xl border border-dark/10 bg-sand-50/50 text-dark focus:outline-none focus:ring-2 focus:ring-ocean-500/30 focus:border-ocean-500 transition-all"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark/70 mb-1.5">
                      Number of Guests
                    </label>
                    <input
                      type="number"
                      min="1"
                      placeholder="e.g. 20"
                      className="w-full px-4 py-3 rounded-xl border border-dark/10 bg-sand-50/50 text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-ocean-500/30 focus:border-ocean-500 transition-all"
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-dark/70 mb-1.5">
                    Additional Message
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Tell us more about what you're looking for..."
                    className="w-full px-4 py-3 rounded-xl border border-dark/10 bg-sand-50/50 text-dark placeholder:text-dark/30 focus:outline-none focus:ring-2 focus:ring-ocean-500/30 focus:border-ocean-500 transition-all resize-none"
                  />
                </div>

                <button type="submit" className="btn-primary w-full justify-center py-4">
                  Send Enquiry
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>

                <p className="text-xs text-dark/40 text-center">
                  This form sends an enquiry — it does not confirm a booking.
                  Our team will reach out to finalise your reservation.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
