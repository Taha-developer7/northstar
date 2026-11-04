"use client";

import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "../../lib/content/data";

export function WhatsAppFloat() {
  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50">
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Al%20Shaheryar%20Enterprises,%20I%20need%20assistance.`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-3 rounded-full shadow-2xl hover:scale-105 transition-all group"
      >
        <MessageCircle className="w-6 h-6 animate-bounce" />
        <span className="hidden sm:inline text-sm font-medium pr-1">Chat With Us</span>
      </a>
    </aside>
  );
}
