import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { COMPANY_INFO } from "../../lib/content/data";

export default function RequestServicePage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Request a Service</h1>
      <p className="text-slate-600 mb-6">Contact us directly on WhatsApp or call our dispatch desk.</p>
      <a
        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=I%20would%20like%20to%20request%20a%20service`}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white rounded-xl font-semibold mb-6"
      >
        <MessageCircle className="w-5 h-5" /> Contact on WhatsApp
      </a>
      <div>
        <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
      </div>
    </div>
  );
}
