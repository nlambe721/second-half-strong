"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [code, setCode] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ code }),
    });
    if (res.ok) {
      router.push("/dashboard");
    } else {
      setError("Invalid access code. Check your welcome email or receipt.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#0c0e14] flex items-center justify-center p-4">
      <div className="w-full max-w-sm text-center">
        {/* SHS Badge */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-lg shadow-amber-900/40">
            <span className="text-white font-bold text-xl tracking-wide">SHS</span>
          </div>
        </div>

        <p className="text-amber-600/80 text-xs font-semibold uppercase tracking-widest mb-2">Member Access</p>
        <h1 className="text-3xl font-bold text-white mb-1">The Second Half Strong</h1>
        <h2 className="text-2xl font-bold text-amber-500 mb-3">AI Coach</h2>
        <p className="text-gray-400 text-sm mb-1">Coach · Accountability Partner · Guide</p>
        <p className="text-gray-500 text-sm mb-8">for Men Over 40</p>

        <div className="bg-[#141820] border border-gray-800 rounded-2xl p-6">
          <p className="text-white font-medium mb-1">Enter your access code</p>
          <p className="text-gray-500 text-xs mb-4">Your code was provided when you joined. Check your welcome email or receipt.</p>
          <form onSubmit={handleSubmit} className="space-y-3">
            <input
              type="text"
              placeholder="E.G. SHS2025ALPHA"
              className="w-full px-4 py-3 bg-[#0c0e14] border border-gray-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-amber-600 font-mono text-sm text-center tracking-widest uppercase"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              required
            />
            {error && <p className="text-red-400 text-xs text-center">{error}</p>}
            <button
              type="submit"
              disabled={loading || !code}
              className="w-full py-3 bg-amber-700 hover:bg-amber-600 disabled:bg-gray-800 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors"
            >
              {loading ? "Verifying..." : "Enter the Coach →"}
            </button>
          </form>
        </div>

        <p className="text-gray-600 text-xs mt-6">Powered by 80+ Men Over 40 expert sessions</p>
        <p className="text-gray-700 text-xs mt-1">
          Need help? <span className="text-amber-700 cursor-pointer hover:text-amber-500">Contact support</span>
        </p>
      </div>
    </div>
  );
}
