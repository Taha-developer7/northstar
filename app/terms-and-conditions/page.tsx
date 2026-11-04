import Link from "next/link";

export default function TermsPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Terms and Conditions</h1>
      <p className="text-slate-600 mb-6">Service terms, booking policies, warranty, and technician dispatch conditions.</p>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
    </div>
  );
}
