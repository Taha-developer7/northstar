import { Phone, MessageSquare, Clock } from "lucide-react";
import { COMPANY_INFO } from "../../lib/content/data";

export function LeadCtaBand() {
  return (
    <section id="contact" className="py-16 bg-gradient-to-r from-[#0b1424] via-[#172949] to-[#1e335b] text-white relative overflow-hidden border-y border-[#c5a962]/20">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#c5a962]/15 text-[#faefce] border border-[#c5a962]/30 text-xs font-semibold mb-4 backdrop-blur-xs">
              <Clock className="w-3.5 h-3.5 text-[#c5a962]" />
              <span>Prompt Technical Assistance & Delivery</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3">
              Need Urgent Technical Support or Delivery?
            </h2>
            <p className="text-slate-300 text-base sm:text-lg">
              Contact our dispatch team right now via WhatsApp or phone call for rapid on-site technician dispatch across Karachi.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Hello,%20I%20need%20urgent%20assistance%20from%20Al%20Shaheryar%20Enterprises.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-black/20 hover:shadow-xl transition-all"
            >
              <MessageSquare className="w-5 h-5" />
              <span>Instant WhatsApp</span>
            </a>
            <a
              href={`tel:${COMPANY_INFO.phone}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-[#c5a962] to-[#dec174] hover:from-[#b9984e] hover:to-[#ceb266] text-[#0e1a30] font-bold px-7 py-3.5 rounded-xl shadow-lg transition-all"
            >
              <Phone className="w-5 h-5 text-[#0e1a30]" />
              <span>Call {COMPANY_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
