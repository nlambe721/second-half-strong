"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { knowledgeChunks } from "@/lib/knowledge-base";

const MODES = [
  { href: "/chat?mode=chat",     icon: "💬", label: "Chat / Ask Questions",     sub: "Ask any question" },
  { href: "/chat?mode=case",     icon: "📋", label: "Case Study",    sub: "Analyze my full situation" },
  { href: "/chat?mode=diagnose", icon: "🔍", label: "Personal Analysis",   sub: "Deep personal analysis" },
  { href: "/chat?mode=program",  icon: "🏆", label: "Accountability", sub: "Check-in + progress" },
];

const QUICK = [
  { href: "/chat?mode=photo", icon: "📷", label: "Photo Analysis", sub: "Food label · Meal · Blood work" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const searchParams = typeof window !== "undefined" ? new URLSearchParams(window.location.search) : null;
  const currentMode = searchParams?.get("mode") ?? "";
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  }

  function isActive(href: string) {
    const [path, qs] = href.split("?");
    const mode = new URLSearchParams(qs ?? "").get("mode") ?? "";
    if (pathname !== path && !pathname.startsWith(path + "/")) return false;
    if (path === "/chat") return currentMode === mode;
    return true;
  }

  return (
    <aside className="w-60 bg-[#0f1117] border-r border-gray-800/60 flex flex-col h-full flex-shrink-0">
      {/* Brand */}
      <div className="p-4 border-b border-gray-800/60">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center shadow-md flex-shrink-0">
            <span className="text-white font-bold text-xs tracking-wide">SHS</span>
          </div>
          <div>
            <div className="text-white font-bold text-xs uppercase tracking-wide leading-tight">Second Half Strong</div>
            <div className="text-amber-600/80 text-xs">AI Coach · Men Over 40</div>
          </div>
        </div>
      </div>

      <nav className="flex-1 overflow-y-auto p-3 space-y-4">
        {/* Dashboard */}
        <div>
          <Link
            href="/dashboard"
            className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors ${
              pathname === "/dashboard"
                ? "bg-amber-700/20 text-amber-500 border border-amber-700/30"
                : "text-gray-400 hover:text-white hover:bg-gray-800/50"
            }`}
          >
            <span className="text-base">🏠</span>
            <span className="font-medium">Dashboard</span>
          </Link>
        </div>

        {/* Coaching Modes */}
        <div>
          <div className="text-gray-600 text-xs uppercase tracking-widest px-2 mb-2 font-medium">Coaching Modes</div>
          <div className="space-y-0.5">
            {MODES.map((m) => {
              const active = isActive(m.href);
              return (
                <Link
                  key={m.href}
                  href={m.href}
                  className={`flex items-start gap-2.5 px-3 py-2.5 rounded-lg transition-colors ${
                    active
                      ? "bg-amber-700/25 border border-amber-700/40 text-amber-400"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <span className="text-base mt-0.5 flex-shrink-0">{m.icon}</span>
                  <div>
                    <div className={`text-sm font-medium leading-tight ${active ? "text-white" : ""}`}>{m.label}</div>
                    <div className={`text-xs mt-0.5 ${active ? "text-amber-600/70" : "text-gray-600"}`}>{m.sub}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* Quick Analysis */}
        <div>
          <div className="text-gray-600 text-xs uppercase tracking-widest px-2 mb-2 font-medium">Quick Analysis</div>
          <div className="space-y-0.5">
            {QUICK.map((q) => {
              const active = isActive(q.href);
              return (
                <Link
                  key={q.href}
                  href={q.href}
                  className={`flex items-start gap-2.5 px-3 py-2.5 rounded-lg transition-colors ${
                    active
                      ? "bg-amber-700/25 border border-amber-700/40 text-amber-400"
                      : "text-gray-400 hover:text-white hover:bg-gray-800/50"
                  }`}
                >
                  <span className="text-base mt-0.5 flex-shrink-0">{q.icon}</span>
                  <div>
                    <div className={`text-sm font-medium leading-tight ${active ? "text-white" : ""}`}>{q.label}</div>
                    <div className={`text-xs mt-0.5 ${active ? "text-amber-600/70" : "text-gray-600"}`}>{q.sub}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-800/60">
        <div className="text-gray-600 text-xs mb-1">Beta v1.0 · Member Access</div>
        <div className="text-gray-500 text-xs mb-3">{knowledgeChunks.length} Expert Knowledge Chunks</div>
        <button
          onClick={handleLogout}
          className="text-gray-600 hover:text-gray-400 text-xs transition-colors"
        >
          Sign out
        </button>
      </div>
    </aside>
  );
}
