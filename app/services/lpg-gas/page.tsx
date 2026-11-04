import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { COMPANY_INFO } from "../../../lib/content/data";

export default function LpgGasPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="text-3xl font-bold mb-4">LPG Gas Supply & Delivery</h1>
      <p className="text-slate-600 mb-6">Reliable cylinder deliveries with connection safety testing for domestic and commercial consumers.</p>
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=I%20need%20LPG%20Gas%20Supply`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold"
      >
        Order LPG on WhatsApp
      </a>
    </div>
  );
}
