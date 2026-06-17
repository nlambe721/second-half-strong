"use client";
import Link from "next/link";
import { knowledgeChunks } from "@/lib/knowledge-base";

const TOPICS = [
  { label: "🧪 Testosterone", query: "testosterone", desc: "Natural hormone optimization" },
  { label: "🏋️ Training", query: "training", desc: "Smarter programming after 40" },
  { label: "🥗 Nutrition", query: "nutrition", desc: "Fuel for performance & longevity" },
  { label: "😴 Sleep", query: "sleep", desc: "Alpha Sleep System protocols" },
  { label: "🧠 Mindset", query: "mindset", desc: "Warrior mindset & REAL Alpha" },
  { label: "💊 Supplements", query: "supplements", desc: "What actually works" },
  { label: "🦵 Mobility", query: "mobility", desc: "Move pain-free for life" },
  { label: "⚡ Recovery", query: "recovery", desc: "Non-negotiable after 40" },
  { label: "🫁 Breathwork", query: "breathwork", desc: "Wim Hof & stress reduction" },
  { label: "⚖️ Hormones", query: "hormones", desc: "Full hormone optimization" },
  { label: "🦠 Gut Health", query: "gut", desc: "Microbiome & digestion" },
  { label: "🔋 Mitochondria", query: "mitochondria", desc: "Cellular energy production" },
  { label: "👑 Leadership", query: "leadership", desc: "Lead your life & family" },
  { label: "💪 Resilience", query: "resilience", desc: "Mental toughness framework" },
];

const SUMMIT_EXPERTS = [
  { name: "Funk Roberts", role: "Creator & Host", topic: "Full Men Over 40 System" },
  { name: "Navin Khan", role: "Co-Host", topic: "Men Over 40 Coaching" },
  { name: "Dr. Anthony Balduzzi", role: "Physician & Coach", topic: "Fitness Over 40" },
  { name: "Ben Greenfield", role: "Biohacker & Author", topic: "Performance & Longevity" },
  { name: "Ben Pakulski", role: "IFBB Pro / Muscle Intelligence", topic: "Mitochondria & Optimization" },
  { name: "Bill Maeda", role: "Strength Coach", topic: "Strength & Performance" },
  { name: "Bryan Krahn", role: "Physique Coach & Writer", topic: "Muscle After 50" },
  { name: "Chris Lopez", role: "Kettlebell Expert", topic: "Kettlebell Training" },
  { name: "Clark Bartram", role: "Fitness Icon", topic: "Body Transformation" },
  { name: "Coach Kavita Ajlani", role: "Relationship Coach", topic: "Love & Relationships" },
  { name: "Dan John", role: "Strength Legend", topic: "Simple Strength Systems" },
  { name: "Dean Pohlman", role: "Man Flow Yoga", topic: "Yoga & Mobility for Men" },
  { name: "Dean Somerset", role: "Exercise Specialist", topic: "Corrective & Functional" },
  { name: "Eddie Panting", role: "Performance Coach", topic: "Athletic Performance" },
  { name: "Firas Zahabi", role: "MMA Coach", topic: "Combat Sports & Mindset" },
  { name: "Frank Rich", role: "Health Coach", topic: "Men's Health Systems" },
  { name: "Gregory Dzemaili", role: "Professional Athlete", topic: "Athletic Longevity" },
  { name: "Jason Brown", role: "Strength Coach", topic: "40+ Training Strategies" },
  { name: "Joe DeFranco", role: "Elite S&C Coach", topic: "Athletic Development" },
  { name: "Joyce Somers", role: "Wellness Expert", topic: "Holistic Health" },
  { name: "Dr. Justin Farnsworth", role: "Chiropractor", topic: "Movement & Recovery" },
  { name: "Keith Bozeman", role: "Fitness Coach", topic: "Fat Loss & Conditioning" },
  { name: "Kelsey Dunbar & Marc Rogala", role: "Mental Fitness Coaches", topic: "Resilience & Toughness" },
  { name: "Kenneth Swartz", role: "Oxidative Stress Researcher", topic: "Cellular Energy & Aging" },
  { name: "Kevin Carr", role: "CFSC / Mike Boyle S&C", topic: "Functional Strength" },
  { name: "Lance Short", role: "BJJ & Performance Coach", topic: "Combat Sports & Fitness" },
  { name: "Luka Hocevar", role: "Vigor Ground / NBA Coach", topic: "Athletic Training After 40" },
  { name: "Marc Rodriguez", role: "Performance Coach", topic: "Strength & Conditioning" },
  { name: "Dr. Marco Lujic", role: "Physician / Age Management", topic: "Preventive Medicine & Nutrition" },
  { name: "Mike Ranfone", role: "Ranfone Training Systems", topic: "Performance & Nutrition" },
  { name: "Mollie Eastman", role: "Sleep Expert", topic: "Sleep Optimization" },
  { name: "Dr. Mike Fortunato", role: "Physician", topic: "Men's Health & Longevity" },
  { name: "Dr. Mike T. Nelson", role: "Exercise Physiologist", topic: "Metabolic Flexibility" },
  { name: "Dr. Perry Nicholson", role: "The Lymph Doctor", topic: "Lymphatic & Pain Relief" },
  { name: "Phil DeRue", role: "Daru Strong / Elite Coach", topic: "Combat Performance" },
  { name: "Robert Linkel", role: "Coach & Speaker", topic: "Men's Development" },
  { name: "Roderick Lambert", role: "Performance Coach", topic: "Athletic Training" },
  { name: "Rustin Webb", role: "Strength & Life Coach", topic: "Strength & Purpose" },
  { name: "Stefanos Sifandos", role: "Relationship Expert", topic: "Inner Work & Intimacy" },
  { name: "Dr. Sherry McAllister", role: "Doctor of Chiropractic", topic: "Whole-Being Alignment" },
  { name: "Tricon Training (Nick)", role: "Strength Coach", topic: "Triple Contraction Training" },
  { name: "Dr. Tom Cowan", role: "Alternative MD & Author", topic: "Natural Health Systems" },
  { name: "Marcello", role: "Niche Fragrance Collector", topic: "Sensory Wellness & Presence" },
];

const WAVES = [
  { n: 1, label: "Core Philosophy & Rules", icon: "🎯" },
  { n: 2, label: "Men Over 40 Health Summit", icon: "🏔️" },
  { n: 3, label: "Summit Expert Interviews", icon: "🎤" },
  { n: 4, label: "Training Systems & Blueprints", icon: "🏋️" },
  { n: 5, label: "Mobility & Functional Training", icon: "🦵" },
  { n: 6, label: "Hormone Optimization", icon: "⚗️" },
  { n: 7, label: "Metabolic & Nutrition Pillars", icon: "🥗" },
  { n: 8, label: "Warrior Mindset", icon: "⚔️" },
  { n: 9, label: "REAL Alpha Pillars", icon: "👑" },
  { n: 10, label: "Meta Test Boost Nutrition", icon: "🧪" },
  { n: 11, label: "Stretching & Flexibility", icon: "🤸" },
  { n: 12, label: "Alpha Sleep System", icon: "😴" },
  { n: 13, label: "Breathwork Challenge", icon: "🫁" },
  { n: 14, label: "Wim Hof Breathing", icon: "❄️" },
  { n: 15, label: "Breathwork Implementation", icon: "🌬️" },
  { n: 16, label: "Meditation for Men", icon: "🧘" },
  { n: 17, label: "Gratitude & Mindfulness", icon: "🙏" },
  { n: 18, label: "Meditation for Busy People", icon: "⏰" },
  { n: 19, label: "Supplements for Men Over 40", icon: "💊" },
];

const COACHING_PATHS = [
  {
    title: "Reclaim Your Testosterone",
    icon: "⚡",
    desc: "Natural hormone optimization through training, nutrition, sleep, and lifestyle.",
    queries: ["testosterone", "hormones", "natural testosterone boost"],
    color: "from-orange-900/40 to-zinc-900",
    border: "border-orange-800/30",
  },
  {
    title: "Build Strength After 40",
    icon: "🏋️",
    desc: "Train smarter, not harder. Blueprints built for longevity and performance.",
    queries: ["training over 40", "strength training", "muscle building"],
    color: "from-blue-900/30 to-zinc-900",
    border: "border-blue-800/30",
  },
  {
    title: "Fix Your Sleep & Recovery",
    icon: "😴",
    desc: "The Alpha Sleep System and recovery protocols that change everything.",
    queries: ["sleep", "recovery", "sleep optimization"],
    color: "from-purple-900/30 to-zinc-900",
    border: "border-purple-800/30",
  },
  {
    title: "Eliminate Belly Fat",
    icon: "🔥",
    desc: "Metabolic nutrition, fasting protocols, and fat loss strategies that work.",
    queries: ["belly fat", "fat loss", "nutrition"],
    color: "from-red-900/30 to-zinc-900",
    border: "border-red-800/30",
  },
  {
    title: "Master Your Mindset",
    icon: "🧠",
    desc: "Warrior mindset, REAL Alpha principles, and inner work for men.",
    queries: ["mindset", "mental toughness", "REAL Alpha"],
    color: "from-green-900/30 to-zinc-900",
    border: "border-green-800/30",
  },
  {
    title: "Move Pain-Free",
    icon: "🦵",
    desc: "Mobility, flexibility, and corrective protocols to stay injury-free.",
    queries: ["mobility", "pain", "flexibility"],
    color: "from-teal-900/30 to-zinc-900",
    border: "border-teal-800/30",
  },
];

export default function Dashboard() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-10">

      {/* Hero */}
      <div className="rounded-2xl bg-gradient-to-br from-orange-900/40 to-zinc-900 border border-orange-800/30 p-8">
        <div className="flex items-start gap-4">
          <div className="text-5xl">💪</div>
          <div>
            <h1 className="text-3xl font-bold text-white mb-1">Second Half Strong</h1>
            <p className="text-zinc-400 text-base max-w-2xl">
              Coach · Accountability Partner · Guide for Men Over 40 — powered by Funk Roberts, the Men Over 40 Health Summit,
              and {SUMMIT_EXPERTS.length} world-class expert voices across {knowledgeChunks.length} knowledge chunks.
            </p>
            <div className="flex flex-wrap gap-3 mt-5">
              <Link
                href="/chat"
                className="bg-orange-600 hover:bg-orange-500 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                💬 Start Coaching Session
              </Link>
              <Link
                href="/experts"
                className="bg-zinc-700 hover:bg-zinc-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                🎤 Browse Experts
              </Link>
              <Link
                href="/programs"
                className="bg-zinc-700 hover:bg-zinc-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors text-sm"
              >
                📚 View Programs
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-orange-400">{knowledgeChunks.length}</div>
          <div className="text-zinc-400 text-xs mt-1">Knowledge Chunks</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-orange-400">{SUMMIT_EXPERTS.length}</div>
          <div className="text-zinc-400 text-xs mt-1">Expert Voices</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-orange-400">19</div>
          <div className="text-zinc-400 text-xs mt-1">Content Waves</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 text-center">
          <div className="text-3xl font-bold text-orange-400">24/7</div>
          <div className="text-zinc-400 text-xs mt-1">AI Coach Access</div>
        </div>
      </div>

      {/* Coaching Pathways */}
      <div>
        <h2 className="text-xl font-bold text-white mb-1">Coaching Pathways</h2>
        <p className="text-zinc-500 text-sm mb-4">Choose your focus area and dive deep with expert-backed guidance.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {COACHING_PATHS.map((path) => (
            <Link
              key={path.title}
              href={`/chat?q=${encodeURIComponent(path.queries[0])}`}
              className={`bg-gradient-to-br ${path.color} border ${path.border} rounded-xl p-5 hover:scale-[1.01] transition-transform`}
            >
              <div className="text-2xl mb-2">{path.icon}</div>
              <div className="text-white font-semibold text-sm mb-1">{path.title}</div>
              <div className="text-zinc-400 text-xs leading-relaxed">{path.desc}</div>
            </Link>
          ))}
        </div>
      </div>

      {/* Quick Topics */}
      <div>
        <h2 className="text-xl font-bold text-white mb-1">Quick Topics</h2>
        <p className="text-zinc-500 text-sm mb-4">Jump directly into any topic — each opens an expert coaching session.</p>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((t) => (
            <Link
              key={t.query}
              href={`/chat?q=${encodeURIComponent(t.query)}`}
              className="bg-zinc-800 hover:bg-zinc-700 border border-zinc-700 hover:border-orange-500/40 text-zinc-200 text-sm px-4 py-2 rounded-full transition-colors"
              title={t.desc}
            >
              {t.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Featured Experts */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-white">Expert Roster</h2>
            <p className="text-zinc-500 text-sm">{SUMMIT_EXPERTS.length} world-class voices — click any expert to start a session</p>
          </div>
          <Link href="/experts" className="text-orange-400 hover:text-orange-300 text-sm font-medium">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          {SUMMIT_EXPERTS.slice(0, 12).map((expert) => (
            <Link
              key={expert.name}
              href={`/chat?q=${encodeURIComponent(`Tell me about ${expert.name} and their expertise on ${expert.topic}`)}`}
              className="bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 rounded-lg p-3 flex items-center gap-3 transition-colors group"
            >
              <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs font-bold flex-shrink-0">
                {expert.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <div className="text-zinc-200 text-sm font-medium group-hover:text-orange-300 transition-colors truncate">{expert.name}</div>
                <div className="text-zinc-500 text-xs truncate">{expert.topic}</div>
              </div>
              <div className="ml-auto text-zinc-600 group-hover:text-orange-400 transition-colors text-xs">→</div>
            </Link>
          ))}
        </div>
        <Link
          href="/experts"
          className="mt-3 block text-center text-zinc-500 hover:text-orange-400 text-sm py-3 border border-zinc-800 hover:border-orange-500/30 rounded-xl transition-colors"
        >
          View all {SUMMIT_EXPERTS.length} experts →
        </Link>
      </div>

      {/* Programs / Waves */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div>
            <h2 className="text-xl font-bold text-white">Programs & Knowledge Waves</h2>
            <p className="text-zinc-500 text-sm">19 structured content waves covering every aspect of men's health over 40</p>
          </div>
          <Link href="/programs" className="text-orange-400 hover:text-orange-300 text-sm font-medium">
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {WAVES.slice(0, 9).map((w) => (
            <Link
              key={w.n}
              href={`/chat?q=${encodeURIComponent(w.label)}`}
              className="bg-zinc-900 border border-zinc-800 hover:border-orange-500/30 rounded-lg p-3 flex items-center gap-3 transition-colors group"
            >
              <span className="text-lg">{w.icon}</span>
              <div className="min-w-0">
                <div className="text-orange-500 font-bold text-xs">Wave {w.n}</div>
                <div className="text-zinc-300 text-xs group-hover:text-white transition-colors leading-tight">{w.label}</div>
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="/programs"
          className="mt-3 block text-center text-zinc-500 hover:text-orange-400 text-sm py-3 border border-zinc-800 hover:border-orange-500/30 rounded-xl transition-colors"
        >
          View all 19 program waves →
        </Link>
      </div>

      {/* REAL Alpha Framework */}
      <div className="rounded-2xl bg-gradient-to-br from-zinc-900 to-zinc-800 border border-zinc-700 p-6">
        <h2 className="text-xl font-bold text-white mb-1">The REAL Alpha Framework</h2>
        <p className="text-zinc-400 text-sm mb-5">Funk Roberts' core system for men over 40</p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { letter: "R", word: "Radical Ownership", desc: "Own every outcome in your life" },
            { letter: "E", word: "Evolution", desc: "Constant growth and adaptation" },
            { letter: "A", word: "Alignment", desc: "Mind, body, and spirit unified" },
            { letter: "L", word: "Leadership", desc: "Lead yourself and those around you" },
          ].map((p) => (
            <Link
              key={p.letter}
              href={`/chat?q=${encodeURIComponent(p.word + " men over 40")}`}
              className="bg-zinc-800/60 hover:bg-zinc-700 border border-zinc-700 rounded-xl p-4 text-center transition-colors"
            >
              <div className="text-3xl font-black text-orange-500 mb-1">{p.letter}</div>
              <div className="text-white text-xs font-semibold mb-1">{p.word}</div>
              <div className="text-zinc-500 text-xs">{p.desc}</div>
            </Link>
          ))}
        </div>
        <Link
          href="/chat?q=REAL Alpha system Funk Roberts"
          className="mt-4 block text-center text-orange-400 hover:text-orange-300 text-sm font-medium"
        >
          Ask about the REAL Alpha system →
        </Link>
      </div>

    </div>
  );
}
