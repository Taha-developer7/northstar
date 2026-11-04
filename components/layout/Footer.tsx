import Link from "next/link";
import { Phone, MapPin, Clock, MessageSquare } from "lucide-react";
import { COMPANY_INFO, SERVICES } from "../../lib/content/data";

export function Footer() {
  return (
    <footer className="bg-[#0a1322] text-slate-300 pt-16 pb-12 border-t border-[#172949]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand Info */}
          <div>
            <div className="mb-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#c5a962] text-base font-black text-[#0a1322] shadow-sm">
                  N
                </div>
                <div className="leading-none">
                  <div className="text-base font-black tracking-[0.18em] text-white uppercase">Northstar</div>
                  <div className="mt-1 text-[9px] font-bold uppercase tracking-[0.38em] text-slate-400">Works</div>
                </div>
              </div>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed mb-6">
              Your dependable partner for all technical, electrical, appliance repair, and domestic supply services across Karachi.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <Clock className="w-4 h-4 text-[#c5a962]" />
              <span>{COMPANY_INFO.operatingHours}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-[#c5a962] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#services" className="hover:text-[#c5a962] transition-colors">
                  All Services
                </Link>
              </li>
              <li>
                <Link href="#why-us" className="hover:text-[#c5a962] transition-colors">
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="hover:text-[#c5a962] transition-colors">
                  Contact & Booking
                </Link>
              </li>
            </ul>
          </div>

          {/* Featured Services */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              {SERVICES.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link href="#services" className="hover:text-[#c5a962] transition-colors">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Get In Touch
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c5a962] shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#c5a962] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phone}`} className="hover:text-white">
                  {COMPANY_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400"
                >
                  WhatsApp Dispatch
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 border-t border-slate-800/80 text-center text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {COMPANY_INFO.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
