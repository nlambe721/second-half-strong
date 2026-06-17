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
      setError("Invalid access code. Please check your code and try again.");
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="text-5xl mb-4">💪</div>
          <h1 className="text-3xl font-bold text-white mb-1">The Second Half Strong</h1>
          <h2 className="text-xl font-semibold text-orange-400 mb-2">AI Coach</h2>
          <p className="text-gray-400 text-sm">Coach · Accountability Partner · Guide for Men Over 40</p>
        </div>
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h3 className="text-lg font-semibold text-white mb-6 text-center">Enter Your Access Code</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="e.g. M40SUMMIT2025"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 font-mono text-lg text-center tracking-widest"
              value={code}
              onChange={(e) => setCode(e.target.value.toUpperCase())}
              required
            />
            {error && <p className="text-red-400 text-sm text-center">{error}</p>}
            <button
              type="submit"
              disabled={loading || !code}
              className="w-full py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-lg transition-colors"
            >
              {loading ? "Verifying..." : "Access Your AI Coach"}
            </button>
          </form>
          <p className="text-gray-600 text-xs text-center mt-6">
            Access codes provided with your Men Over 40 Health Summit membership.
          </p>
        </div>
      </div>
    </div>
  );
}
