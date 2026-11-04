import { ShieldCheck, Clock, Receipt, ThumbsUp } from "lucide-react";

const BENEFITS = [
  {
    icon: ShieldCheck,
    title: "Vetted & Certified Technicians",
    description: "Every technician on our roster is background-verified, skilled, and strictly evaluated for technical proficiency and safety standards.",
  },
  {
    icon: Clock,
    title: "Quick & Reliable Turnaround",
    description: "We respect your time. Expect prompt arrival, fast problem diagnosis, and timely delivery for every single service order.",
  },
  {
    icon: Receipt,
    title: "Honest & Transparent Estimates",
    description: "No hidden charges, ambiguous fees, or surprising post-service bills. You receive clear pricing before any work starts.",
  },
  {
    icon: ThumbsUp,
    title: "100% Quality Assurance",
    description: "Our work isn't finished until you test and confirm satisfactory performance. We stand behind the quality of every repair.",
  },
];

export function WhyChooseUs() {
  return (
    <section id="why-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-bold text-[#c5a962] uppercase tracking-widest">
            The Northstar Difference
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0e1a30] tracking-tight mt-2 mb-4">
            Why Karachi Chooses Us
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Built on trust, speed, and craftsmanship. Delivering dependable solutions for residential homes, corporate offices, and retail businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {BENEFITS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50/80 border border-slate-200/80 hover:border-[#c5a962]/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#172949] text-[#c5a962] flex items-center justify-center mb-5 shadow-md shadow-[#172949]/20 group-hover:scale-105 transition-transform border border-[#c5a962]/20">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#172949] transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
