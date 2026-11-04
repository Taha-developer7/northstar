import Link from "next/link";

export default function IndustriesPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Industries We Serve</h1>
      <p className="text-slate-600 mb-6">Residential homes, corporate offices, healthcare facilities, commercial retailers, and educational institutes.</p>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
    </div>
  );
}
