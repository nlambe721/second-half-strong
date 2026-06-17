"use client";
import Link from "next/link";

const WAVES = [
  {
    n: 1, icon: "🎯", label: "Core Philosophy & Rules",
    desc: "Funk Roberts' foundational rules for men over 40: why consistency beats intensity, the non-negotiables of recovery, and the mindset shift required for the second half of life.",
    topics: ["core rules", "philosophy", "non-negotiables", "second half strong"],
    color: "from-orange-900/40",
  },
  {
    n: 2, icon: "🏔️", label: "Men Over 40 Health Summit",
    desc: "The full Men Over 40 Health Summit overview: what's covered, why it matters, and how to get the most from every expert session.",
    topics: ["summit overview", "health summit", "men over 40"],
    color: "from-blue-900/30",
  },
  {
    n: 3, icon: "🎤", label: "Summit Expert Interviews",
    desc: "Deep dives with 40+ world-class experts including physicians, S&C coaches, mindset masters, and performance specialists — all focused on men over 40.",
    topics: ["summit experts", "interviews", "expert knowledge"],
    color: "from-purple-900/30",
  },
  {
    n: 4, icon: "🏋️", label: "Training Systems & Blueprints",
    desc: "The complete Funk Roberts training system: AMRAP protocols, HIIT for men over 40, compound movements, and periodization that builds strength without breaking down the body.",
    topics: ["training system", "AMRAP", "HIIT", "strength training", "blueprints"],
    color: "from-red-900/30",
  },
  {
    n: 5, icon: "🦵", label: "Mobility & Functional Training",
    desc: "Why mobility is the foundation of longevity. Hip openers, shoulder mobility, spine health, and functional movement patterns for men over 40.",
    topics: ["mobility", "functional training", "flexibility", "hip mobility", "shoulder"],
    color: "from-green-900/30",
  },
  {
    n: 6, icon: "⚗️", label: "Hormone Optimization",
    desc: "Natural testosterone optimization through lifestyle, training, nutrition, and sleep. Understanding estrogen balance, cortisol management, and the hormone hierarchy.",
    topics: ["testosterone", "hormones", "cortisol", "estrogen", "hormone optimization"],
    color: "from-yellow-900/30",
  },
  {
    n: 7, icon: "🥗", label: "Metabolic & Nutrition Pillars",
    desc: "The metabolic nutrition system: protein targets, carb cycling, intermittent fasting, anti-inflammatory eating, and the specific nutrition strategies for men over 40.",
    topics: ["nutrition", "metabolism", "protein", "intermittent fasting", "anti-inflammatory"],
    color: "from-teal-900/30",
  },
  {
    n: 8, icon: "⚔️", label: "Warrior Mindset",
    desc: "Building the warrior mindset: discipline over motivation, embracing discomfort, daily habits of elite performers, and how to show up when you don't feel like it.",
    topics: ["warrior mindset", "discipline", "mental toughness", "habits"],
    color: "from-orange-800/30",
  },
  {
    n: 9, icon: "👑", label: "REAL Alpha Pillars",
    desc: "Funk Roberts' REAL Alpha framework — Radical Ownership, Evolution, Alignment, Leadership. The complete system for becoming the man you're meant to be in the second half of life.",
    topics: ["REAL Alpha", "Radical Ownership", "Evolution", "Alignment", "Leadership"],
    color: "from-amber-900/30",
  },
  {
    n: 10, icon: "🧪", label: "Meta Test Boost Nutrition",
    desc: "Specific foods, compounds, and nutritional protocols that naturally support testosterone production. The Meta Test Boost framework.",
    topics: ["testosterone boost", "nutrition", "Meta Test Boost", "foods for testosterone"],
    color: "from-rose-900/30",
  },
  {
    n: 11, icon: "🤸", label: "Stretching & Flexibility",
    desc: "Complete stretching protocols for men over 40: morning routines, post-workout recovery stretches, and the mobility work that prevents injury and maintains athleticism.",
    topics: ["stretching", "flexibility", "morning routine", "recovery stretches"],
    color: "from-lime-900/30",
  },
  {
    n: 12, icon: "😴", label: "Alpha Sleep System",
    desc: "The complete Alpha Sleep System: sleep hygiene protocols, pre-sleep nutrition, cortisol management, sleep environment optimization, and how to get 7-9 hours of deep restorative sleep.",
    topics: ["sleep", "Alpha Sleep System", "sleep hygiene", "recovery", "cortisol"],
    color: "from-indigo-900/30",
  },
  {
    n: 13, icon: "🫁", label: "Breathwork Challenge",
    desc: "The 30-day breathwork challenge for stress reduction, nervous system regulation, and performance enhancement. Protocols for different goals and times of day.",
    topics: ["breathwork", "breathing challenge", "stress", "nervous system"],
    color: "from-cyan-900/30",
  },
  {
    n: 14, icon: "❄️", label: "Wim Hof Breathing",
    desc: "Wim Hof breathing technique for men over 40: the science, the protocol, how to do it correctly, and how to combine cold exposure with breathwork for maximum benefit.",
    topics: ["Wim Hof", "breathing", "cold exposure", "breathwork technique"],
    color: "from-sky-900/30",
  },
  {
    n: 15, icon: "🌬️", label: "Breathwork Implementation",
    desc: "Practical breathwork implementation: how to build a daily breathwork habit, common mistakes, advanced techniques, and tracking progress.",
    topics: ["breathwork implementation", "breathing practice", "daily habit"],
    color: "from-blue-800/30",
  },
  {
    n: 16, icon: "🧘", label: "Meditation for Men",
    desc: "Meditation demystified for men. Why meditation is one of the most powerful performance tools, how to start, and the science behind its effects on cortisol and testosterone.",
    topics: ["meditation", "mindfulness", "cortisol", "performance", "stress"],
    color: "from-violet-900/30",
  },
  {
    n: 17, icon: "🙏", label: "Gratitude & Mindfulness",
    desc: "The science of gratitude and its effects on mental health, relationships, and performance. Practical daily gratitude practices for busy men.",
    topics: ["gratitude", "mindfulness", "mental health", "daily practice"],
    color: "from-pink-900/30",
  },
  {
    n: 18, icon: "⏰", label: "Meditation for Busy People",
    desc: "Micro-meditation protocols for men who say they don't have time. 5-minute techniques, pattern interrupts, and how to integrate mindfulness into your existing routine.",
    topics: ["meditation", "busy schedule", "micro-meditation", "5 minute meditation"],
    color: "from-fuchsia-900/30",
  },
  {
    n: 19, icon: "💊", label: "Supplements for Men Over 40",
    desc: "The definitive supplement guide for men over 40: what works, what doesn't, the essential stack, and how to stack supplements for maximum synergy without wasting money.",
    topics: ["supplements", "men over 40", "supplement stack", "testosterone supplements"],
    color: "from-emerald-900/30",
  },
];

export default function ProgramsPage() {
  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-1">Programs & Knowledge Waves</h1>
        <p className="text-zinc-400 text-sm max-w-2xl">
          19 structured content waves covering every dimension of men's health, performance, and mindset after 40.
          Each wave is powered by Funk Roberts' system and expert summit knowledge.
        </p>
      </div>

      {/* Waves Grid */}
      <div className="space-y-3">
        {WAVES.map((w) => (
          <div
            key={w.n}
            className={`bg-gradient-to-r ${w.color} to-zinc-900 border border-zinc-800 rounded-xl p-5`}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-zinc-800/80 rounded-xl flex items-center justify-center">
                <span className="text-2xl">{w.icon}</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-orange-500 font-bold text-sm">Wave {w.n}</span>
                  <h3 className="text-white font-semibold">{w.label}</h3>
                </div>
                <p className="text-zinc-400 text-sm leading-relaxed mb-3">{w.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {w.topics.slice(0, 4).map((t) => (
                    <Link
                      key={t}
                      href={`/chat?q=${encodeURIComponent(t)}`}
                      className="bg-zinc-800/80 hover:bg-orange-500/20 hover:border-orange-500/40 border border-zinc-700 text-zinc-300 hover:text-orange-300 text-xs px-3 py-1 rounded-full transition-colors"
                    >
                      {t}
                    </Link>
                  ))}
                  <Link
                    href={`/chat?q=${encodeURIComponent(w.label + " Funk Roberts men over 40")}`}
                    className="bg-orange-500/20 hover:bg-orange-500/30 border border-orange-500/30 text-orange-300 text-xs px-3 py-1 rounded-full transition-colors font-medium"
                  >
                    Ask AI Coach →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
