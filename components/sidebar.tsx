"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { knowledgeChunks } from "@/lib/knowledge-base";

const nav = [
  { href: "/dashboard", icon: "🏠", label: "Dashboard" },
  { href: "/chat",      icon: "💬", label: "AI Coach" },
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
      <div className="p-6 border-b border-gray-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-xl">💪</div>
          <div>
            <div className="text-white font-bold text-sm leading-tight">Second Half Strong</div>
            <div className="text-gray-500 text-xs">Men Over 40 AI Coach</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="p-4 flex-1 space-y-1">
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
      </nav>

      {/* Stats */}
      <div className="p-4 border-t border-gray-800">
        <div className="bg-gray-800/50 rounded-lg p-3 mb-3">
          <div className="text-gray-500 text-xs mb-1">Knowledge Base</div>
          <div className="flex items-baseline gap-1">
            <span className="text-orange-400 text-xs font-bold">{knowledgeChunks.length}</span>
            <span className="text-gray-500 text-xs">Expert Knowledge Chunks</span>
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="w-full text-gray-500 hover:text-gray-300 text-xs py-2 text-left transition-colors"
        >
          Sign Out
        </button>
      </div>
    </aside>
  );
}
