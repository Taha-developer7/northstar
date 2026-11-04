import Link from "next/link";
import { ArrowRight, ShieldCheck, Clock, Award, PhoneCall } from "lucide-react";
import { COMPANY_INFO } from "../../lib/content/data";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-100/70 via-white to-white py-16 sm:py-24 border-b border-slate-200/60">
      {/* Background ambient accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full pointer-events-none overflow-hidden">
        <div className="absolute -top-40 right-10 w-96 h-96 bg-[#172949]/10 rounded-full blur-3xl"></div>
        <div className="absolute top-60 -left-20 w-80 h-80 bg-[#c5a962]/15 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#172949]/5 text-[#172949] border border-[#c5a962]/40 text-xs sm:text-sm font-semibold tracking-wide mb-6">
            <span className="flex h-2 w-2 rounded-full bg-[#c5a962] animate-pulse"></span>
            Professional Home & Everyday Support Services
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#0e1a30] tracking-tight leading-tight sm:leading-none mb-6">
            Smart, Dependable <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#172949] via-[#233b66] to-[#c5a962]">Maintenance & Technical</span> Services
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            From AC servicing, general repairs, and certified support to everyday home assistance, Northstar Works delivers trusted doorstep care across the city.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="#services"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#172949] hover:bg-[#0e1a30] text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg shadow-[#172949]/20 hover:shadow-xl transition-all text-base border border-[#c5a962]/30"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-4 h-4 text-[#c5a962]" />
            </Link>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hi,%20I%20would%20like%20to%20book%20a%20service`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold px-8 py-3.5 rounded-xl border border-slate-300 shadow-xs hover:border-[#c5a962] transition-all text-base"
            >
              <PhoneCall className="w-4 h-4 text-emerald-600" />
              <span>Book via WhatsApp</span>
            </a>
          </div>

          {/* Value Props Ribbon */}
          <div className="mt-14 pt-8 border-t border-slate-200/80 grid grid-cols-2 md:grid-cols-3 gap-6 text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#172949]/5 flex items-center justify-center text-[#172949] shrink-0 border border-[#172949]/10">
                <ShieldCheck className="w-5 h-5 text-[#c5a962]" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Verified Technicians</p>
                <p className="text-xs text-slate-500">Trained & background-checked</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600 shrink-0 border border-emerald-100">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Prompt Doorstep Visit</p>
                <p className="text-xs text-slate-500">Quick dispatch to your location</p>
              </div>
            </div>

            <div className="col-span-2 md:col-span-1 flex items-center gap-3 justify-center md:justify-start">
              <div className="w-10 h-10 rounded-xl bg-[#c5a962]/10 flex items-center justify-center text-[#c5a962] shrink-0 border border-[#c5a962]/20">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-800">Service Guarantee</p>
                <p className="text-xs text-slate-500">Quality results assured</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
