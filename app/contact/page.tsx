import Link from "next/link";
import { Phone, MapPin } from "lucide-react";
import { COMPANY_INFO } from "../../lib/content/data";

export default function ContactPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-slate-600 mb-6">{COMPANY_INFO.tagline}</p>
      <div className="space-y-3 mb-8">
        <p className="flex items-center gap-2"><Phone className="w-4 h-4 text-blue-600" /> Phone: {COMPANY_INFO.phone}</p>
        <p className="flex items-center gap-2"><MapPin className="w-4 h-4 text-blue-600" /> Location: {COMPANY_INFO.address}</p>
      </div>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
    </div>
  );
}
