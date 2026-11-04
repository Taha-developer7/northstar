import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="text-slate-600 mb-6">Northstar Works values your privacy and protects your personal information.</p>
      <Link href="/" className="text-blue-600 hover:underline">← Back to Home</Link>
    </div>
  );
}
