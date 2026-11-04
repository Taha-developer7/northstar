import Link from "next/link";

export default function AdminLoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
      <div className="max-w-md w-full p-8 bg-white rounded-2xl shadow border border-slate-200">
        <h1 className="text-2xl font-bold text-slate-900 mb-4">Admin Login</h1>
        <p className="text-sm text-slate-500 mb-6">Staff portal access for order management.</p>
        <Link href="/" className="text-sm text-blue-600 hover:underline">← Return to website</Link>
      </div>
    </div>
  );
}
