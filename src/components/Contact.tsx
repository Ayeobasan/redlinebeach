"use client";

import { useRef } from "react";
import { Phone, Mail, Instagram, Facebook, MapPin, ExternalLink, Clock } from "lucide-react";
import useInView from "@/hooks/useInView";

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { threshold: 0.15 });

  const address = "By Abraham Adesanya Junction, Off Ogombo Road, Okun Ajah Community, Lagos, Nigeria";
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    "Redline Leisure & Resorts, Okun Ajah, Lagos"
  )}`;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 md:py-28 bg-ocean-900 relative overflow-hidden text-white"
    >
      {/* Background Lighting Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-ocean-700/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-aqua-500/10 rounded-full blur-3xl" />
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
              Get In Touch
            </span>
            <div className="w-10 h-[2px] bg-coral-400" />
          </div>
          <h2 className="text-section-mobile md:text-section-desktop font-heading font-bold text-white mb-4 text-balance">
            We&apos;re Here to{" "}
            <span className="font-accent italic text-aqua-200">
              Welcome You
            </span>
          </h2>
          <p className="text-white/65 text-lg leading-relaxed">
            Reach out directly for bookings, venue reservations, and directions.
            We look forward to hosting you!
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {/* Card 1: Direct Phone Lines */}
          <div
            className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-700 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-coral-500/20 text-coral-400 flex items-center justify-center mb-5">
              <Phone className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white mb-2">
              Call Direct
            </h3>
            <p className="text-white/50 text-xs mb-4">
              Speak with resort hospitality managers:
            </p>
            <div className="space-y-2">
              {["08088576938", "08038436727", "08037333389"].map((phone) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className="block text-white/90 hover:text-coral-400 font-semibold text-sm transition-colors"
                >
                  {phone}
                </a>
              ))}
            </div>
          </div>

          {/* Card 2: Email */}
          <div
            className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-700 delay-100 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-aqua-400/20 text-aqua-200 flex items-center justify-center mb-5">
              <Mail className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white mb-2">
              Email Us
            </h3>
            <p className="text-white/50 text-xs mb-4">
              For event inquiries &amp; corporate packages:
            </p>
            <a
              href="mailto:info@redlineleisure.com"
              className="text-white/90 hover:text-aqua-200 font-semibold text-sm break-all transition-colors"
            >
              info@redlineleisure.com
            </a>
            <p className="text-white/40 text-xs mt-3">
              Replies typically within 24 hours
            </p>
          </div>

          {/* Card 3: Location */}
          <div
            className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-700 delay-200 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-tropical-400/20 text-tropical-300 flex items-center justify-center mb-5">
              <MapPin className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white mb-2">
              Resort Location
            </h3>
            <p className="text-white/80 text-xs leading-relaxed mb-4">
              {address}
            </p>
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-tropical-300 hover:text-tropical-200 text-xs font-semibold"
            >
              <span>Get Directions</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Card 4: Social Media */}
          <div
            className={`p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm transition-all duration-700 delay-300 ${
              isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="w-12 h-12 rounded-xl bg-pink-500/20 text-pink-300 flex items-center justify-center mb-5">
              <Instagram className="w-6 h-6" />
            </div>
            <h3 className="font-heading font-bold text-lg text-white mb-2">
              Social Media
            </h3>
            <p className="text-white/50 text-xs mb-4">
              Follow our latest updates &amp; parties:
            </p>
            <div className="flex items-center gap-3 mb-3">
              <a
                href="https://instagram.com/redlineleisure"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-coral-500 flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com/redlineleisure"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-coral-500 flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com/@redlineleisure"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-coral-500 flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <span className="text-xs font-bold">TT</span>
              </a>
            </div>
            <span className="text-white/40 text-xs font-mono">@redlineleisure</span>
          </div>
        </div>

        {/* Location Directions Notice Banner */}
        <div
          className={`p-6 md:p-8 rounded-2xl bg-gradient-to-r from-ocean-800 to-ocean-950 border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 transition-all duration-1000 delay-400 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-xl bg-white/10 text-aqua-200 flex-shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-base md:text-lg text-white mb-1">
                Visiting Redline Leisure &amp; Resorts
              </h4>
              <p className="text-white/70 text-sm max-w-2xl leading-relaxed">
                Located by <strong>Abraham Adesanya Junction, Off Ogombo Road, Okun Ajah</strong>.
                For overnight hangouts (₦70,000) and venue rentals, reservations must be confirmed in advance.
              </p>
            </div>
          </div>
          <a
            href="https://wa.me/2348088576938?text=Hello%20Redline%2C%20please%20send%20me%20driving%20directions%20to%20the%20resort"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm whitespace-nowrap self-stretch md:self-auto text-center justify-center"
          >
            Request Live Location
          </a>
        </div>
      </div>
    </section>
  );
}
