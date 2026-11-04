import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16 px-4 max-w-4xl mx-auto">
      <Link href="/" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-8">
        <ArrowLeft className="w-4 h-4" /> Back to Home
      </Link>
      <h1 className="text-3xl font-bold text-slate-900 mb-4">About Northstar Works</h1>
      <p className="text-slate-600 leading-relaxed">
        Northstar Works is a multi-service support provider offering trusted maintenance, general repair, home assistance, and responsive local service for everyday needs.
      </p>
    </div>
  );
}
