"use client";
import Link from "next/link";

const MODES = [
  {
    id: "chat",
    icon: "💬",
    label: "CHAT / ASK",
    labelColor: "text-amber-500",
    title: "Ask Me Anything",
    desc: "Open conversation with your AI Coach. Ask any health question, share what you're dealing with, or explore any topic — testosterone, sleep, fat loss, mindset, nutrition, training, or recovery.",
    bullet: "The fastest path to an answer",
    bulletColor: "text-amber-500",
    example: '"What should my testosterone levels actually be at 47?"',
    href: "/chat?mode=chat",
  },
  {
    id: "case",
    icon: "📋",
    label: "CASE STUDY",
    labelColor: "text-blue-400",
    title: "Analyze My Full Situation",
    desc: "Describe your complete picture — age, health markers, lifestyle, goals, what you've tried. The coach delivers a thorough, structured analysis with a prioritized action plan specific to your situation.",
    bullet: "Deep analysis, personalized strategy",
    bulletColor: "text-blue-400",
    example: '"I\'m 52, borderline low T, 25 lbs overweight, pre-diabetic A1C, tired all the time..."',
    href: "/chat?mode=case",
  },
  {
    id: "diagnose",
    icon: "🔍",
    label: "PERSONAL ANALYSIS",
    labelColor: "text-green-400",
    title: "Ask Me Questions First",
    desc: "Your AI Coach interviews you with targeted questions before giving recommendations. This is the highest-precision format — the coach builds your full picture before delivering a protocol built just for you.",
    bullet: "Questions first, then precision protocols",
    bulletColor: "text-green-400",
    example: "Start here if you want the most personalized guidance",
    href: "/chat?mode=diagnose",
  },
  {
    id: "program",
    icon: "🏆",
    label: "ACCOUNTABILITY",
    labelColor: "text-amber-400",
    title: "Program & Check-In",
    desc: "Structured accountability sessions. Report your progress, identify what broke down, and get a recalibrated plan. This mode keeps you executing consistently — not just starting strong.",
    bullet: "Consistency over intensity",
    bulletColor: "text-amber-400",
    example: '"I nailed Week 1 but fell off Wednesday. Here\'s what happened..."',
    href: "/chat?mode=program",
  },
];

export default function Dashboard() {
  return (
    <div className="h-full overflow-y-auto bg-[#0c0e14]">
      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* Header */}
        <div className="mb-8">
          <p className="text-gray-600 text-xs uppercase tracking-widest font-medium mb-3">Beta Access · Welcome</p>
          <h1 className="text-4xl font-bold text-white mb-1">
            The Second Half Strong <span className="text-amber-500">AI Coach</span>
          </h1>
          <p className="text-gray-400 text-base max-w-2xl mt-2">
            Your personal <strong className="text-white">Coach · Accountability Partner · Guide</strong> — powered by 80+ world-class
            expert sessions on men's health over 40. Choose how you want to engage below.
          </p>
        </div>

        {/* Mode selector */}
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-gray-400 text-xs uppercase tracking-widest font-semibold">Choose Your Coaching Format</h2>
          <span className="text-gray-600 text-xs">Each mode works differently</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {MODES.map((m) => (
            <Link
              key={m.id}
              href={m.href}
              className="block bg-[#141820] border border-gray-800/60 rounded-2xl p-5 hover:border-gray-700 hover:bg-[#1a1f2e] transition-all group"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">{m.icon}</span>
                <span className={`text-xs font-bold tracking-widest uppercase ${m.labelColor}`}>{m.label}</span>
              </div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-amber-50 transition-colors">{m.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-3">{m.desc}</p>
              <div className={`text-xs font-medium ${m.bulletColor} mb-1`}>• {m.bullet}</div>
              <p className="text-gray-600 text-xs italic">{m.example}</p>
            </Link>
          ))}
        </div>

        {/* Photo Analysis */}
        <Link
          href="/chat?mode=photo"
          className="flex items-center gap-4 bg-[#141820] border border-gray-800/60 rounded-2xl p-5 hover:border-gray-700 hover:bg-[#1a1f2e] transition-all group"
        >
          <div className="w-12 h-12 rounded-xl bg-gray-800 flex items-center justify-center text-2xl flex-shrink-0 group-hover:bg-gray-700 transition-colors">
            📷
          </div>
          <div className="flex-1">
            <div className="text-white font-semibold mb-1">Photo & Document Analysis</div>
            <p className="text-gray-500 text-sm">
              Photograph a food label, snap your meal, or upload a blood work PDF — the coach analyzes it instantly with M40-specific interpretation and action steps.
            </p>
          </div>
          <div className="text-gray-600 text-lg flex-shrink-0">→</div>
        </Link>
      </div>
    </div>
  );
}
