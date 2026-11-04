import Link from "next/link";

export default function ServiceAreasPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Service Areas in Karachi</h1>
      <p className="text-slate-600 mb-6">We provide door-to-door technician dispatch across DHA, Clifton, Gulshan-e-Iqbal, Johar, North Nazimabad, PECHS, and surrounding regions.</p>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
    </div>
  );
}
