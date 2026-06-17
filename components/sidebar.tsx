"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { knowledgeChunks } from "@/lib/knowledge-base";

const nav = [
  { href: "/dashboard", icon: "🏠", label: "Dashboard" },
  { href: "/chat",      icon: "💬", label: "AI Coach" },
  { href: "/experts",   icon: "🎤", label: "Experts" },
  { href: "/programs",  icon: "📚", label: "Programs" },
];

const QUICK_TOPICS = [
  { label: "Testosterone", query: "testosterone" },
  { label: "Training", query: "training over 40" },
  { label: "Sleep", query: "Alpha Sleep System" },
  { label: "Nutrition", query: "nutrition men over 40" },
  { label: "Mindset", query: "warrior mindset" },
];

const MODES = [
  { href: "/chat?mode=chat",    icon: "💬", label: "Open Chat" },
  { href: "/chat?mode=case",    icon: "📋", label: "Case Study" },
  { href: "/chat?mode=ask",     icon: "❓", label: "Ask a Question" },
  { href: "/chat?mode=program", icon: "🎯", label: "Accountability" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  return (
    <aside className="w-64 bg-gray-900 border-r border-gray-800 flex flex-col h-full">
      {/* Brand */}
      <div className="p-5 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-xl">💪</div>
          <div>
            <div className="text-white font-bold text-sm leading-tight">Second Half Strong</div>
            <div className="text-orange-400 text-xs font-medium">AI Coach</div>
            <div className="text-gray-500 text-xs leading-tight">Coach · Partner · Guide</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="p-4 flex-1 space-y-1 overflow-y-auto">
        {nav.map((item) => {
          const active = pathname === item.href || pathname.startsWith(item.href + "/");
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                active
                  ? "bg-orange-500/20 text-orange-400 border border-orange-500/30"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <span className="text-base">{item.icon}</span>
              {item.label}
            </Link>
          );
        })}

        {/* Coaching Modes */}
        <div className="pt-4 pb-1">
          <div className="text-gray-600 text-xs uppercase tracking-wider px-3 mb-2">Coaching Modes</div>
          {MODES.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-gray-500 hover:text-orange-400 hover:bg-gray-800 transition-colors"
            >
              <span>{m.icon}</span>
              {m.label}
            </Link>
          ))}
        </div>

        {/* Quick Topics */}
        <div className="pt-2 pb-1">
          <div className="text-gray-600 text-xs uppercase tracking-wider px-3 mb-2">Quick Topics</div>
          {QUICK_TOPICS.map((t) => (
            <Link
              key={t.query}
              href={`/chat?q=${encodeURIComponent(t.query)}`}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-gray-500 hover:text-gray-300 hover:bg-gray-800 transition-colors"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 flex-shrink-0" />
              {t.label}
            </Link>
          ))}
        </div>
      </nav>

      {/* Stats + Logout */}
      <div className="p-4 border-t border-gray-800 space-y-3">
        <div className="bg-gray-800/50 rounded-lg p-3">
          <div className="text-gray-500 text-xs mb-1.5">Knowledge Base</div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <div className="text-orange-400 text-sm font-bold">{knowledgeChunks.length}</div>
              <div className="text-gray-600 text-xs">Chunks</div>
            </div>
            <div>
              <div className="text-orange-400 text-sm font-bold">43</div>
              <div className="text-gray-600 text-xs">Experts</div>
            </div>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full text-gray-500 hover:text-gray-300 text-xs py-1.5 text-left transition-colors flex items-center gap-2"
        >
          <span>→</span> Sign Out
        </button>
      </div>
    </aside>
  );
}
