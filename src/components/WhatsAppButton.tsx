"use client";

import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  const whatsappNumber = "2348088576938";
  const defaultMessage = encodeURIComponent(
    "Hello Redline Leisure & Resorts, I would like to make an enquiry about visiting your resort."
  );

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-40 group">
      <a
        href={`https://wa.me/${whatsappNumber}?text=${defaultMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-[#25D366] text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl hover:bg-[#20ba59] transition-all duration-300 hover:scale-105 active:scale-95"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 fill-white stroke-none" />
        <span className="font-heading font-semibold text-sm hidden sm:inline-block pr-1">
          Chat with Us
        </span>
      </a>
    </aside>
  );
}

