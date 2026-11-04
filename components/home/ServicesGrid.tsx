"use client";

import {
  Snowflake,
  Zap,
  Flame,
  Droplets,
  Fuel,
  Shirt,
  Tv,
  ShoppingCart,
  Laptop,
  CheckCircle2,
  MessageCircle,
} from "lucide-react";
import { SERVICES, COMPANY_INFO } from "../../lib/content/data";

const iconMap: Record<string, React.ElementType> = {
  Snowflake,
  Zap,
  Flame,
  Droplets,
  Fuel,
  Shirt,
  Tv,
  ShoppingCart,
  Laptop,
};

export function ServicesGrid() {
  return (
    <section id="services" className="py-20 bg-slate-50/70 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-[#c5a962] uppercase tracking-widest">
            Complete Service Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e1a30] tracking-tight mt-2 mb-4">
            Our Professional Services
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            High-standard repairs, preventative maintenance, and essential daily supplies backed by experienced technicians.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => {
            const Icon = iconMap[service.iconName] || Zap;
            const whatsappText = encodeURIComponent(
              `Hello Northstar Works, I am interested in booking "${service.name}" (${service.code}). Please share pricing and technician availability.`
            );

            return (
              <div
                key={service.id}
                className="bg-white rounded-2xl border border-slate-200 hover:border-[#c5a962]/60 p-6 flex flex-col justify-between shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all group"
              >
                <div>
                  {/* Top Bar with Icon and Badges */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-[#172949]/5 text-[#172949] flex items-center justify-center group-hover:bg-[#172949] group-hover:text-[#c5a962] transition-all shadow-xs border border-[#172949]/10">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex items-center gap-2">
                      {service.badge && (
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-[#c5a962]/10 text-[#8d6f22] border border-[#c5a962]/30">
                          {service.badge}
                        </span>
                      )}
                      <span className="text-[11px] font-mono font-medium text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                        {service.code}
                      </span>
                    </div>
                  </div>

                  {/* Title & Category */}
                  <div className="mb-2">
                    <span className="text-xs font-semibold text-[#c5a962] tracking-wide uppercase">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-0.5 group-hover:text-[#172949] transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  {/* Descriptions */}
                  <p className="text-sm text-slate-600 leading-relaxed mb-3">
                    {service.description}
                  </p>
                  <p className="text-xs text-slate-600 italic mb-5 bg-slate-50/80 p-2.5 rounded-lg border border-slate-100">
                    "{service.descriptionUrdu}"
                  </p>

                  {/* Feature Checklist */}
                  <div className="space-y-2 mb-6">
                    {service.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action */}
                <div className="pt-4 border-t border-slate-100">
                  <a
                    href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${whatsappText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 bg-[#172949] hover:bg-[#c5a962] hover:text-[#0e1a30] text-white rounded-xl text-sm font-semibold transition-all shadow-xs border border-[#c5a962]/20"
                  >
                    <MessageCircle className="w-4 h-4 text-[#c5a962] group-hover:text-[#0e1a30]" />
                    <span>Inquire / Book Service</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
