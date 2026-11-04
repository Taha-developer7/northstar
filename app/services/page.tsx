import Link from "next/link";
import { ServicesGrid } from "../../components/home/ServicesGrid";
import { Navbar } from "../../components/layout/Navbar";
import { Footer } from "../../components/layout/Footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <ServicesGrid />
      </main>
      <Footer />
    </div>
  );
}
