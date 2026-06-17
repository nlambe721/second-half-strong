"use client";
import Link from "next/link";
import { knowledgeChunks } from "@/lib/knowledge-base";

const TOPICS = [
  { label: "Testosterone", query: "testosterone" },
  { label: "Training", query: "training" },
  { label: "Nutrition", query: "nutrition" },
  { label: "Sleep", query: "sleep" },
  { label: "Mindset", query: "mindset" },
  { label: "Supplements", query: "supplements" },
  { label: "Mobility", query: "mobility" },
  { label: "Recovery", query: "recovery" },
  { label: "Breathwork", query: "breathwork" },
  { label: "Hormones", query: "hormones" },
  { label: "Gut Health", query: "gut" },
  { label: "Sprinting", query: "sprint" },
];

const WAVES = [
  { n: 1, label: "Core Philosophy & Rules" },
  { n: 2, label: "Men Over 40 Health Summit" },
  { n: 3, label: "Summit Expert Interviews" },
  { n: 4, label: "Training Systems & Blueprints" },
  { n: 5, label: "Mobility & Functional Training" },
  { n: 6, label: "Hormone Optimization" },
  { n: 7, label: "Metabolic & Nutrition Pillars" },
  { n: 8, label: "Warrior Mindset" },
  { n: 9, label: "REAL Alpha Pillars" },
  { n: 10, label: "Meta Test Boost Nutrition" },
  { n: 11, label: "Stretching & Flexibility" },
  { n: 12, label: "Alpha Sleep System" },
  { n: 13, label: "Breathwork Challenge" },
  { n: 14, label: "Wim Hof Breathing" },
  { n: 15, label: "Breathwork Implementation" },
  { n: 16, label: "Meditation for Men" },
  { n: 17, label: "Gratitude & Mindfulness" },
  { n: 18, label: "Meditation for Busy People" },
  { n: 19, label: "Supplements for Men Over 40" },
];

const SUMMIT_EXPERTS = [
  "Dr. Anthony Balduzzi", "Ben Pakulski", "Ben Greenfield", "Bill Maeda",
  "Chris Lopez", "Clark Bartram", "Dean Pohlman", "Dean Somerset",
  "Firas Zahabi", "Bryan Krahn", "Gregory Dzemaili", "Dan John",
  "Dr. Sherry McAllister", "Coach Kavita", "Kenneth Swartz", "Kevin Carr",
  "Phil DeRue", "Stefanos Sifandos", "Kelsey Dunbar & Marc Rogala",
  "Jason Brown", "Joe DeFranco", "Joyce Somers", "Dr. Justin Farnsworth",
  "Keith Bozeman", "Luka Hocevar", "Tricon Training", "Dr. Mike Fortunato",
  "Dr. Perry Nicholson", "Rustin Webb", "Dr. Mike T. Nelson", "Dr. Tom Cowan",
  "Navin Khan", "Funk Roberts",
];

export default function Dashboard() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-8">
      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-orange-900/40 to-zinc-900 border border-orange-800/30 p-8">
        <h1 className="text-3xl font-bold text-white mb-2">Second Half Strong</h1>
        <p className="text-zinc-400 text-lg max-w-2xl">
          AI coaching for men over 40 — powered by Funk Roberts, the Men Over 40
          Health Summit, and 33 world-class expert interviews.
        </p>
        <Link
          href="/chat"
          className="mt-6 inline-block bg-orange-600 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
        >
          Start Coaching Session →
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-orange-400">{knowledgeChunks.length}</div>
          <div className="text-zinc-400 text-sm mt-1">Knowledge Chunks</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-orange-400">19</div>
          <div className="text-zinc-400 text-sm mt-1">Content Waves</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-orange-400">{SUMMIT_EXPERTS.length}</div>
          <div className="text-zinc-400 text-sm mt-1">Summit Experts</div>
        </div>
      </div>

      {/* Quick Topics */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-3">Quick Topics</h2>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <Link
              key={t.query}
              href={`/chat?q=${encodeURIComponent(t.query)}`}
              className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 text-zinc-200 text-sm px-4 py-2 rounded-full transition-colors"
            >
              {t.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Summit Experts Grid */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-3">Summit Expert Roster</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {SUMMIT_EXPERTS.map((name) => (
            <div
              key={name}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 flex items-center gap-2"
            >
              <span className="text-orange-500 text-xs">●</span>
              <span className="text-zinc-300 text-sm">{name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Content Waves */}
      <div>
        <h2 className="text-lg font-semibold text-white mb-3">Knowledge Base Waves</h2>
        <div className="grid grid-cols-2 gap-2">
          {WAVES.map((w) => (
            <div
              key={w.n}
              className="bg-zinc-900 border border-zinc-800 rounded-lg p-3 flex items-center gap-3"
            >
              <span className="text-orange-500 font-bold text-sm w-8">W{w.n}</span>
              <span className="text-zinc-300 text-sm">{w.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
