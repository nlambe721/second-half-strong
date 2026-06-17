"use client";
import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface Message {
  role: "user" | "assistant";
  content: string;
  image?: { data: string; mediaType: string; preview: string };
}

type Mode = "chat" | "case" | "ask" | "program";

const MODES: { id: Mode; icon: string; label: string; desc: string; color: string }[] = [
  {
    id: "chat",
    icon: "💬",
    label: "Open Chat",
    desc: "Ask anything — training, nutrition, mindset, hormones, recovery",
    color: "border-orange-500/50 bg-orange-500/10 text-orange-400",
  },
  {
    id: "case",
    icon: "📋",
    label: "Case Study",
    desc: "Share your full situation for a deep-dive personal analysis",
    color: "border-blue-500/50 bg-blue-500/10 text-blue-400",
  },
  {
    id: "ask",
    icon: "❓",
    label: "Quick Ask",
    desc: "Get a direct, tactical answer to a specific question fast",
    color: "border-green-500/50 bg-green-500/10 text-green-400",
  },
  {
    id: "program",
    icon: "🎯",
    label: "Accountability",
    desc: "Check in on your program, track progress, stay on track",
    color: "border-purple-500/50 bg-purple-500/10 text-purple-400",
  },
];

const MODE_STARTERS: Record<Mode, { emoji: string; text: string }[]> = {
  chat: [
    { emoji: "⚡", text: "What is the best training approach for men over 40?" },
    { emoji: "🧪", text: "How do I naturally boost testosterone?" },
    { emoji: "💊", text: "What supplements should I take after 40?" },
    { emoji: "😴", text: "How do I fix my sleep and recovery?" },
    { emoji: "🥗", text: "What is Funk Roberts' nutrition system?" },
    { emoji: "🔥", text: "How do I lose belly fat after 40?" },
    { emoji: "👑", text: "What is the REAL Alpha system?" },
    { emoji: "🧠", text: "How do I build a warrior mindset?" },
    { emoji: "⚔️", text: "What are the non-negotiables for men over 40?" },
    { emoji: "🫁", text: "Teach me the Wim Hof breathing technique" },
    { emoji: "🦵", text: "What mobility work should I do daily?" },
    { emoji: "🧬", text: "How do I optimize my hormones naturally?" },
  ],
  case: [
    { emoji: "📋", text: "I'm 47, I've been training for 2 years but not seeing results. Analyze my situation." },
    { emoji: "🩸", text: "My testosterone is low (320 ng/dL). What does my full picture look like?" },
    { emoji: "⚖️", text: "I'm 40lbs overweight, sleep-deprived, and stressed. Where do I start?" },
    { emoji: "💪", text: "I've hit a plateau in strength. Do a case study on my training." },
    { emoji: "🧬", text: "I have my bloodwork results. Can you analyze what they mean for my health?" },
    { emoji: "📸", text: "I want to upload my food label or supplement to analyze it for me." },
  ],
  ask: [
    { emoji: "❓", text: "What's the single most important thing a man over 40 should do for testosterone?" },
    { emoji: "⏱️", text: "How long should I rest between sets at 45?" },
    { emoji: "🥩", text: "How much protein do I actually need per day?" },
    { emoji: "💤", text: "What time should I stop eating to improve my sleep?" },
    { emoji: "🏃", text: "Is cardio killing my gains after 40?" },
    { emoji: "🧴", text: "Is creatine safe for men over 40?" },
  ],
  program: [
    { emoji: "🎯", text: "I need to check in on my progress this week." },
    { emoji: "📅", text: "I missed 3 workouts this week. Help me get back on track." },
    { emoji: "✅", text: "I completed my first week of the protocol. What's next?" },
    { emoji: "📊", text: "Review my nutrition adherence and give me feedback." },
    { emoji: "🔄", text: "I've been doing this for 30 days. Assess my progress." },
    { emoji: "🚧", text: "I keep failing at [habit]. Help me problem-solve this." },
  ],
};

const EXPERT_QUERIES = [
  { name: "Funk Roberts", query: "What are Funk Roberts' core principles for men over 40?" },
  { name: "Ben Pakulski", query: "What does Ben Pakulski say about mitochondria and muscle optimization?" },
  { name: "Dan John", query: "What does Dan John say about simple strength training?" },
  { name: "Mollie Eastman", query: "What are Mollie Eastman's sleep optimization protocols?" },
  { name: "Ben Greenfield", query: "What does Ben Greenfield recommend for performance and longevity?" },
  { name: "Firas Zahabi", query: "What is Firas Zahabi's mindset philosophy?" },
];

const FOLLOW_UPS: Record<Mode, string[]> = {
  chat: [
    "Give me a specific protocol for this",
    "What does Funk Roberts say about this?",
    "How does this change for men over 50?",
    "What are the most common mistakes?",
    "Break this down into a weekly plan",
  ],
  case: [
    "Dig deeper into my hormone picture",
    "What should my priority action be this week?",
    "Create a 90-day protocol for my situation",
    "What metrics should I track?",
    "What's the worst thing I could do given my situation?",
  ],
  ask: [
    "Can you expand on that?",
    "What's the science behind this?",
    "Give me the exact protocol",
    "Is there a faster approach?",
    "What should I avoid?",
  ],
  program: [
    "What adjustments should I make next week?",
    "How do I stay accountable to this?",
    "What's my biggest risk of falling off?",
    "Give me a simple daily checklist",
    "What results should I expect in 30 days?",
  ],
};

function ChatInner() {
  const searchParams = useSearchParams();
  const [mode, setMode] = useState<Mode>((searchParams.get("mode") as Mode) || "chat");
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showExperts, setShowExperts] = useState(false);
  const [pendingImage, setPendingImage] = useState<{ data: string; mediaType: string; preview: string } | null>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const q = searchParams.get("q");
    const m = searchParams.get("mode") as Mode;
    if (m && MODES.find((x) => x.id === m)) setMode(m);
    if (q && messages.length === 0) sendMessage(decodeURIComponent(q));
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (ev) => {
      const result = ev.target?.result as string;
      const base64 = result.split(",")[1];
      setPendingImage({ data: base64, mediaType: file.type, preview: result });
    };
    reader.readAsDataURL(file);
    // reset so same file can be re-selected
    e.target.value = "";
  }

  async function sendMessage(content: string) {
    if ((!content.trim() && !pendingImage) || loading) return;
    const img = pendingImage;
    const newMessages: Message[] = [
      ...messages,
      { role: "user", content, ...(img ? { image: img } : {}) },
    ];
    setMessages(newMessages);
    setInput("");
    setPendingImage(null);
    setShowExperts(false);
    setLoading(true);
    const assistantMsg: Message = { role: "assistant", content: "" };
    setMessages((prev) => [...prev, assistantMsg]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          query: content,
          messages: newMessages.map((m) => ({
            role: m.role,
            content: m.image
              ? [
                  { type: "image", source: { type: "base64", media_type: m.image.mediaType, data: m.image.data } },
                  { type: "text", text: m.content || "Analyze this image." },
                ]
              : m.content,
          })),
          mode,
          image: img ? { data: img.data, mediaType: img.mediaType } : null,
        }),
      });
      if (!res.body) throw new Error("No response body");
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: accumulated };
          return updated;
        });
      }
    } catch (e) {
      console.error(e);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "assistant", content: "Sorry, something went wrong. Please try again." };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }

  const currentMode = MODES.find((m2) => m2.id === mode)!;
  const starters = MODE_STARTERS[mode];
  const followUps = FOLLOW_UPS[mode];
  const isEmpty = messages.length === 0;

  return (
    <div className="flex flex-col h-full">
      {/* Header */}
      <div className="border-b border-gray-800 bg-gray-900/50 px-6 py-3">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-white font-bold text-sm">The Second Half Strong AI Coach</h1>
            <p className="text-gray-500 text-xs">Coach · Accountability Partner · Guide for Men Over 40</p>
          </div>
          {messages.length > 0 && (
            <button
              onClick={() => { setMessages([]); setPendingImage(null); }}
              className="text-gray-500 hover:text-gray-300 text-xs border border-gray-700 px-3 py-1.5 rounded-lg transition-colors"
            >
              New Session
            </button>
          )}
        </div>
        {/* Mode selector */}
        <div className="flex gap-2 mt-3 overflow-x-auto pb-1">
          {MODES.map((m2) => (
            <button
              key={m2.id}
              onClick={() => { setMode(m2.id); setMessages([]); setPendingImage(null); }}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium border transition-all whitespace-nowrap ${
                mode === m2.id
                  ? m2.color
                  : "border-gray-700 text-gray-500 hover:text-gray-300 hover:border-gray-600"
              }`}
            >
              <span>{m2.icon}</span>
              {m2.label}
            </button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {isEmpty ? (
          <div className="max-w-2xl mx-auto">
            {/* Mode intro */}
            <div className={`rounded-xl border p-5 mb-6 ${currentMode.color}`}>
              <div className="text-2xl mb-2">{currentMode.icon}</div>
              <div className="font-semibold text-white mb-1">{currentMode.label} Mode</div>
              <p className="text-sm opacity-80">{currentMode.desc}</p>
              {currentMode.id === "case" && (
                <p className="text-xs opacity-60 mt-2">
                  📸 You can upload photos — food labels, bloodwork, supplements, workout plans — and I'll analyze them.
                </p>
              )}
            </div>

            {/* Tab: starters / experts */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setShowExperts(false)}
                className={`text-sm px-3 py-1.5 rounded-lg transition-colors ${!showExperts ? "bg-orange-500/20 text-orange-400" : "text-gray-500 hover:text-gray-300"}`}
              >
                {currentMode.id === "program" ? "Check-In Prompts" : "Conversation Starters"}
              </button>
              <button
                onClick={() => setShowExperts(true)}
                className={`text-sm px-3 py-1.5 rounded-lg transition-colors ${showExperts ? "bg-orange-500/20 text-orange-400" : "text-gray-500 hover:text-gray-300"}`}
              >
                Ask an Expert
              </button>
            </div>

            {!showExperts ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {starters.map((s) => (
                  <button
                    key={s.text}
                    onClick={() => sendMessage(s.text)}
                    className="text-left bg-gray-800/60 hover:bg-gray-800 border border-gray-700/50 rounded-xl px-4 py-3 transition-colors group"
                  >
                    <span className="text-lg mr-2">{s.emoji}</span>
                    <span className="text-gray-300 text-sm group-hover:text-white">{s.text}</span>
                  </button>
                ))}
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {EXPERT_QUERIES.map((eq) => (
                  <button
                    key={eq.name}
                    onClick={() => sendMessage(eq.query)}
                    className="text-left bg-gray-800/60 hover:bg-gray-800 border border-gray-700/50 rounded-xl px-3 py-2.5 transition-colors"
                  >
                    <div className="text-orange-400 text-xs font-semibold">{eq.name}</div>
                    <div className="text-gray-400 text-xs mt-0.5 line-clamp-2">{eq.query}</div>
                  </button>
                ))}
              </div>
            )}
          </div>
        ) : (
          <>
            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                {msg.role === "assistant" && (
                  <div className="w-7 h-7 rounded-full bg-orange-500/20 flex items-center justify-center text-sm mr-2 mt-1 flex-shrink-0">💪</div>
                )}
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-orange-600 text-white"
                      : "bg-gray-800 text-gray-100"
                  }`}
                >
                  {msg.image && (
                    <img
                      src={msg.image.preview}
                      alt="Uploaded"
                      className="rounded-lg mb-2 max-h-48 object-contain"
                    />
                  )}
                  <div className="whitespace-pre-wrap">{msg.content}</div>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="w-7 h-7 rounded-full bg-orange-500/20 flex items-center justify-center text-sm mr-2 flex-shrink-0">💪</div>
                <div className="bg-gray-800 rounded-2xl px-4 py-3">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-orange-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            {!loading && messages[messages.length - 1]?.role === "assistant" && (
              <div className="flex flex-wrap gap-2 pl-9">
                {followUps.map((fu) => (
                  <button
                    key={fu}
                    onClick={() => sendMessage(fu)}
                    className="text-xs bg-gray-800/80 hover:bg-gray-700 border border-gray-700 text-gray-400 hover:text-white px-3 py-1.5 rounded-full transition-colors"
                  >
                    {fu}
                  </button>
                ))}
              </div>
            )}
          </>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input area */}
      <div className="border-t border-gray-800 bg-gray-900/50 px-4 py-4">
        {pendingImage && (
          <div className="flex items-center gap-2 mb-2 px-1">
            <img src={pendingImage.preview} alt="pending" className="h-12 w-12 object-cover rounded-lg border border-gray-600" />
            <span className="text-gray-400 text-xs flex-1">Image ready to send</span>
            <button onClick={() => setPendingImage(null)} className="text-gray-500 hover:text-red-400 text-xs">✕ Remove</button>
          </div>
        )}
        <div className="flex gap-2 items-end">
          {/* Image upload button */}
          <input ref={fileRef} type="file" accept="image/*" className="hidden" onChange={handleFileChange} />
          <button
            onClick={() => fileRef.current?.click()}
            title="Upload image (food label, bloodwork, supplement)"
            className="flex-shrink-0 w-10 h-10 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-orange-400 transition-colors"
          >
            📸
          </button>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); }}}
            placeholder={
              mode === "chat" ? "Ask your AI Coach anything..." :
              mode === "case" ? "Describe your situation in detail..." :
              mode === "ask" ? "Ask your specific question..." :
              "Check in on your progress..."
            }
            className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 text-sm resize-none"
            disabled={loading}
          />
          <button
            onClick={() => sendMessage(input)}
            disabled={loading || (!input.trim() && !pendingImage)}
            className="flex-shrink-0 w-10 h-10 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 disabled:cursor-not-allowed flex items-center justify-center transition-colors"
          >
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <p className="text-gray-600 text-xs text-center mt-2">
          📸 Upload food labels, bloodwork, or supplement photos for analysis
        </p>
      </div>
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense>
      <ChatInner />
    </Suspense>
  );
}
