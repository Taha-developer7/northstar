import { Navbar } from "../components/layout/Navbar";
import { HeroSection } from "../components/home/HeroSection";
import { ServicesGrid } from "../components/home/ServicesGrid";
import { WhyChooseUs } from "../components/home/WhyChooseUs";
import { LeadCtaBand } from "../components/home/LeadCtaBand";
import { Footer } from "../components/layout/Footer";
import { WhatsAppFloat } from "../components/layout/WhatsAppFloat";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 selection:bg-[#172949] selection:text-[#f8ecce]">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <ServicesGrid />
        <WhyChooseUs />
        <LeadCtaBand />
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

