import Link from "next/link";

export default function CareersPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Careers at Northstar Works</h1>
      <p className="text-slate-600 mb-6">Join our expanding team of professional technicians and service specialists.</p>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
    </div>
  );
}
