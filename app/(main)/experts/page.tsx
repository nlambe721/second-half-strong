"use client";
import { useState } from "react";
import Link from "next/link";

const ALL_EXPERTS = [
  // Funk Roberts Core
  { name: "Funk Roberts", role: "Creator & Host", topic: "Full Men Over 40 System", category: "Core", tags: ["training", "mindset", "nutrition", "hormones", "lifestyle"] },
  { name: "Navin Khan", role: "Co-Host & Coach", topic: "Men Over 40 Coaching", category: "Core", tags: ["coaching", "lifestyle", "mindset"] },
  // Medical & Health
  { name: "Dr. Anthony Balduzzi", role: "Physician & Coach", topic: "Men's Fitness Over 40", category: "Medical", tags: ["health", "fitness", "nutrition"] },
  { name: "Dr. Justin Farnsworth", role: "Chiropractor", topic: "Movement & Recovery", category: "Medical", tags: ["recovery", "movement", "pain"] },
  { name: "Dr. Marco Lujic", role: "Physician / Age Management", topic: "Preventive Medicine & Nutrition", category: "Medical", tags: ["hormones", "nutrition", "diagnostics", "longevity"] },
  { name: "Dr. Mike Fortunato", role: "Physician", topic: "Men's Health & Longevity", category: "Medical", tags: ["health", "longevity", "hormones"] },
  { name: "Dr. Mike T. Nelson", role: "Exercise Physiologist", topic: "Metabolic Flexibility & Supplements", category: "Medical", tags: ["supplements", "metabolism", "performance"] },
  { name: "Dr. Perry Nicholson", role: "The Lymph Doctor", topic: "Lymphatic Health & Pain Relief", category: "Medical", tags: ["pain", "inflammation", "lymphatic", "recovery"] },
  { name: "Dr. Sherry McAllister", role: "Doctor of Chiropractic", topic: "Whole-Being Alignment", category: "Medical", tags: ["alignment", "chiropractic", "recovery", "mobility"] },
  { name: "Dr. Tom Cowan", role: "Alternative MD & Author", topic: "Natural Health & Healing", category: "Medical", tags: ["natural health", "alternative medicine", "healing"] },
  { name: "Kenneth Swartz", role: "Oxidative Stress Researcher", topic: "Cellular Energy & Aging", category: "Medical", tags: ["cellular health", "oxidative stress", "energy", "longevity"] },
  // Strength & Conditioning
  { name: "Ben Pakulski", role: "IFBB Pro / Muscle Intelligence", topic: "Mitochondria & Muscle Optimization", category: "Strength", tags: ["muscle", "mitochondria", "optimization", "hormones"] },
  { name: "Bill Maeda", role: "Strength Coach", topic: "Strength & Athletic Performance", category: "Strength", tags: ["strength", "performance", "athletes"] },
  { name: "Clark Bartram", role: "Fitness Icon", topic: "Body Transformation After 40", category: "Strength", tags: ["transformation", "muscle", "training"] },
  { name: "Dan John", role: "Strength Legend & Author", topic: "Simple Strength Systems", category: "Strength", tags: ["strength", "simplicity", "longevity", "training"] },
  { name: "Joe DeFranco", role: "Elite S&C Coach", topic: "Athletic Development", category: "Strength", tags: ["athletic", "strength", "performance"] },
  { name: "Luka Hocevar", role: "Vigor Ground / NBA Coach", topic: "Athletic Training After 40", category: "Strength", tags: ["athletic", "basketball", "training", "power"] },
  { name: "Mike Ranfone", role: "Ranfone Training Systems", topic: "Performance & Nutrition Strategy", category: "Strength", tags: ["nutrition", "performance", "strategy"] },
  { name: "Phil DeRue", role: "Daru Strong / Elite Coach", topic: "Combat Performance", category: "Strength", tags: ["combat", "performance", "UFC", "discipline"] },
  { name: "Bryan Krahn", role: "Physique Coach & Writer", topic: "Building Muscle After 50", category: "Strength", tags: ["muscle", "physique", "50+"] },
  { name: "Jason Brown", role: "Jason Brown Coaching", topic: "40+ Training Strategies", category: "Strength", tags: ["training", "strategies", "dad", "lifestyle"] },
  { name: "Marc Rodriguez", role: "Performance Coach", topic: "Strength & Conditioning", category: "Strength", tags: ["strength", "conditioning"] },
  { name: "Roderick Lambert", role: "Performance Coach", topic: "Athletic Training", category: "Strength", tags: ["athletic", "training", "performance"] },
  { name: "Tricon Training (Nick)", role: "Strength Coach", topic: "Triple Contraction Training", category: "Strength", tags: ["training method", "joint health", "hypertrophy"] },
  // Mobility & Movement
  { name: "Dean Pohlman", role: "Man Flow Yoga Founder", topic: "Yoga & Mobility for Men", category: "Mobility", tags: ["yoga", "mobility", "flexibility", "recovery"] },
  { name: "Dean Somerset", role: "Exercise Specialist", topic: "Corrective & Functional Training", category: "Mobility", tags: ["corrective", "functional", "mobility", "pain"] },
  { name: "Kevin Carr", role: "CFSC / Mike Boyle S&C", topic: "Functional Strength & Longevity", category: "Mobility", tags: ["functional", "strength", "longevity", "movement"] },
  // Nutrition
  { name: "Chris Lopez", role: "Kettlebell Expert", topic: "Kettlebell Training & Nutrition", category: "Nutrition", tags: ["kettlebell", "nutrition", "fat loss"] },
  { name: "Joyce Somers", role: "Wellness Expert", topic: "Holistic Health & Nutrition", category: "Nutrition", tags: ["holistic", "nutrition", "wellness"] },
  // Mental & Mindset
  { name: "Ben Greenfield", role: "Biohacker & Author", topic: "Performance, Longevity & Biohacking", category: "Mindset", tags: ["biohacking", "longevity", "performance", "optimization"] },
  { name: "Coach Kavita Ajlani", role: "Relationship Coach", topic: "Love, Relationships & Connection", category: "Mindset", tags: ["relationships", "love", "connection", "dating"] },
  { name: "Firas Zahabi", role: "MMA Coach & Philosopher", topic: "Combat Sports & Mindset", category: "Mindset", tags: ["mindset", "MMA", "philosophy", "discipline"] },
  { name: "Kelsey Dunbar & Marc Rogala", role: "Mental Fitness Coaches", topic: "Resilience & Mental Toughness", category: "Mindset", tags: ["resilience", "mental toughness", "adversity", "growth"] },
  { name: "Stefanos Sifandos", role: "Relationship Expert", topic: "Inner Work & Emotional Mastery", category: "Mindset", tags: ["inner work", "emotions", "relationships", "vulnerability"] },
  { name: "Robert Linkel", role: "Coach & Speaker", topic: "Men's Personal Development", category: "Mindset", tags: ["development", "purpose", "leadership"] },
  { name: "Rustin Webb", role: "Strength & Life Coach", topic: "Strength, Purpose & Identity", category: "Mindset", tags: ["strength", "purpose", "identity", "leadership"] },
  // Sleep & Recovery
  { name: "Mollie Eastman", role: "Sleep Expert", topic: "Sleep Optimization for Men", category: "Recovery", tags: ["sleep", "recovery", "performance", "hormones"] },
  { name: "Eddie Panting", role: "Performance Coach", topic: "Athletic Performance & Recovery", category: "Recovery", tags: ["recovery", "performance", "athletic"] },
  { name: "Gregory Dzemaili", role: "Professional Athlete & Coach", topic: "Athletic Longevity", category: "Recovery", tags: ["longevity", "athletic", "recovery"] },
  // Combat Sports
  { name: "Lance Short", role: "BJJ & Performance Coach", topic: "Combat Sports & Fitness Over 40", category: "Combat", tags: ["BJJ", "combat", "fitness", "grappling"] },
  { name: "Keith Bozeman", role: "Fitness Coach", topic: "Fat Loss & Conditioning", category: "Combat", tags: ["fat loss", "conditioning", "training"] },
  // Lifestyle
  { name: "Frank Rich", role: "Health Coach", topic: "Men's Health Systems", category: "Lifestyle", tags: ["health", "systems", "lifestyle"] },
  { name: "Marcello", role: "Niche Fragrance Collector", topic: "Sensory Wellness & Presence", category: "Lifestyle", tags: ["fragrance", "presence", "confidence", "sensory", "lifestyle"] },
];

const CATEGORIES = ["All", "Core", "Medical", "Strength", "Mobility", "Nutrition", "Mindset", "Recovery", "Combat", "Lifestyle"];

export default function ExpertsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = ALL_EXPERTS.filter((e) => {
    const matchCat = category === "All" || e.category === category;
    const q = search.toLowerCase();
    const matchSearch =
      !q ||
      e.name.toLowerCase().includes(q) ||
      e.topic.toLowerCase().includes(q) ||
      e.role.toLowerCase().includes(q) ||
      e.tags.some((t) => t.toLowerCase().includes(q));
    return matchCat && matchSearch;
  });

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">Expert Roster</h1>
        <p className="text-zinc-400 text-sm">
          {ALL_EXPERTS.length} world-class experts from the Men Over 40 Health Summit. Click any expert to start a coaching session.
        </p>
      </div>

      {/* Search & Filter */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search experts by name, topic, or specialty..."
          className="flex-1 px-4 py-2.5 bg-zinc-900 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-orange-500"
        />
        <div className="flex gap-2 flex-wrap">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-2 rounded-lg text-xs font-medium transition-colors ${
                category === cat
                  ? "bg-orange-500 text-white"
                  : "bg-zinc-800 text-zinc-400 hover:bg-zinc-700 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Results count */}
      <div className="text-zinc-500 text-sm">
        Showing {filtered.length} of {ALL_EXPERTS.length} experts
      </div>

      {/* Expert Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {filtered.map((expert) => (
          <Link
            key={expert.name}
            href={`/chat?q=${encodeURIComponent(`Tell me everything about ${expert.name} — their background, expertise on "${expert.topic}", and specific protocols or strategies they recommend for men over 40`)}`}
            className="bg-zinc-900 border border-zinc-800 hover:border-orange-500/40 rounded-xl p-4 flex gap-4 transition-all hover:bg-zinc-800/80 group"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-500/20 flex items-center justify-center text-orange-400 font-bold text-lg flex-shrink-0">
              {expert.name.charAt(0)}
            </div>
            <div className="min-w-0 flex-1">
              <div className="flex items-start justify-between gap-2">
                <div className="text-white font-semibold text-sm group-hover:text-orange-300 transition-colors">{expert.name}</div>
                <span className="text-xs text-zinc-600 bg-zinc-800 px-2 py-0.5 rounded-full flex-shrink-0">{expert.category}</span>
              </div>
              <div className="text-zinc-500 text-xs mt-0.5">{expert.role}</div>
              <div className="text-orange-400/80 text-xs mt-1 font-medium">{expert.topic}</div>
              <div className="flex flex-wrap gap-1 mt-2">
                {expert.tags.slice(0, 3).map((tag) => (
                  <span key={tag} className="text-zinc-600 text-xs bg-zinc-800/80 px-2 py-0.5 rounded-full">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-12 text-zinc-500">
          No experts found for "{search}" in {category}. Try a different search.
        </div>
      )}
    </div>
  );
}
