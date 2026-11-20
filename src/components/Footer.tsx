"use client";

import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Experiences", href: "#experiences" },
      { label: "Facilities & Spaces", href: "#facilities" },
      { label: "Dining & Menus", href: "#dining" },
      { label: "Photo Gallery", href: "#gallery" },
    ],
  },
  {
    title: "Information",
    links: [
      { label: "Rates & Pricing", href: "#pricing" },
      { label: "About Redline", href: "#about" },
      { label: "Plan Your Visit", href: "#reservation" },
      { label: "Contact & Directions", href: "#contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-dark text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto section-padding pt-16 md:pt-20 pb-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-12 gap-10 mb-16">
          {/* Brand & Tagline */}
          <div className="lg:col-span-5 space-y-5">
            <Link href="#home" className="inline-block bg-white/95 rounded-2xl px-4 py-2">
              <Image
                src="/images/logo/redline-logo.png"
                alt="Redline Leisure & Resorts"
                width={150}
                height={55}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm">
              Redline Leisure and Resorts is set in a tranquil coastal environment,
              allowing guests to experience and be inspired by the wonders of nature.
            </p>
            <div className="pt-2">
              <span className="font-accent italic text-aqua-200 text-xl font-normal block">
                &ldquo;Free Your Mind!&rdquo;
              </span>
            </div>
          </div>

          {/* Quick Links */}
          {footerLinks.map((group) => (
            <div key={group.title} className="lg:col-span-2">
              <h4 className="text-white font-heading font-bold text-xs uppercase tracking-wider mb-4 text-coral-400">
                {group.title}
              </h4>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Location & Quick Contact */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-heading font-bold text-xs uppercase tracking-wider mb-4 text-coral-400">
              Direct Contact
            </h4>
            <div className="flex items-start gap-2.5 text-xs text-white/60 leading-relaxed">
              <MapPin className="w-4 h-4 text-tropical-400 flex-shrink-0 mt-0.5" />
              <span>Abraham Adesanya Junction, Off Ogombo Road, Okun Ajah, Lagos</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-white/60">
              <Phone className="w-4 h-4 text-tropical-400 flex-shrink-0" />
              <a href="tel:08088576938" className="hover:text-white transition-colors">
                08088576938 / 08038436727
              </a>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-white/60">
              <Mail className="w-4 h-4 text-tropical-400 flex-shrink-0" />
              <a href="mailto:info@redlineleisure.com" className="hover:text-white transition-colors">
                info@redlineleisure.com
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>
            &copy; {new Date().getFullYear()} Redline Leisure &amp; Resorts. All
            rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/redlineleisure"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>
            <span>•</span>
            <a
              href="https://facebook.com/redlineleisure"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Facebook
            </a>
            <span>•</span>
            <a
              href="https://tiktok.com/@redlineleisure"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              TikTok
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
