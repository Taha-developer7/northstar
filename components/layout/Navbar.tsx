"use client";

import { useState } from "react";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import { COMPANY_INFO } from "../../lib/content/data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Brand */}
          <Link href="/" className="flex items-center group">
            <div className="flex items-center gap-3 transition-transform group-hover:scale-[1.02]">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#172949] text-lg font-black text-[#c5a962] shadow-sm ring-1 ring-[#c5a962]/30">
                N
              </div>
              <div className="leading-none">
                <div className="text-base font-black tracking-[0.18em] text-[#172949] uppercase">Northstar</div>
                <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.38em] text-slate-500">Works</div>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-700">
            <Link href="/" className="hover:text-[#c5a962] transition-colors">
              Home
            </Link>
            <Link href="#services" className="hover:text-[#c5a962] transition-colors">
              Services
            </Link>
            <Link href="#why-us" className="hover:text-[#c5a962] transition-colors">
              Why Us
            </Link>
            <Link href="#contact" className="hover:text-[#c5a962] transition-colors">
              Contact
            </Link>
          </nav>

          {/* Direct CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello%20Al%20Shaheryar%20Enterprises,%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-xs hover:shadow transition-all"
            >
              <span>WhatsApp Us</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="inline-flex items-center gap-2 bg-[#172949] hover:bg-[#0e1a30] text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md shadow-[#172949]/20 hover:shadow-lg transition-all border border-[#c5a962]/30"
            >
              <Phone className="w-4 h-4 text-[#c5a962]" />
              <span>Call Now</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-[#172949] hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#172949]"
          >
            Home
          </Link>
          <Link
            href="#services"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#172949]"
          >
            Services
          </Link>
          <Link
            href="#why-us"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#172949]"
          >
            Why Us
          </Link>
          <Link
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#172949]"
          >
            Contact
          </Link>
          <div className="pt-2 flex flex-col gap-2">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-semibold"
            >
              WhatsApp Us
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full text-center py-2.5 bg-[#172949] hover:bg-[#0e1a30] text-white rounded-xl font-semibold flex items-center justify-center gap-2 border border-[#c5a962]/30"
            >
              <Phone className="w-4 h-4 text-[#c5a962]" />
              <span>Call Now</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

