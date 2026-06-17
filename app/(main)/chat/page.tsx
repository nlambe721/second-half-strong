"use client";
import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface Message { role: "user" | "assistant"; content: string; }

const STARTERS = [
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
];

const EXPERT_QUERIES = [
  { name: "Funk Roberts", query: "What are Funk Roberts' core principles for men over 40?" },
  { name: "Ben Pakulski", query: "What does Ben Pakulski say about mitochondria and muscle optimization?" },
  { name: "Dan John", query: "What does Dan John say about simple strength training?" },
  { name: "Mollie Eastman", query: "What are Mollie Eastman's sleep optimization protocols?" },
  { name: "Ben Greenfield", query: "What does Ben Greenfield recommend for performance and longevity?" },
  { name: "Firas Zahabi", query: "What is Firas Zahabi's mindset philosophy?" },
];

function ChatInner() {
  const searchParams = useSearchParams();
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showExperts, setShowExperts] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const q = searchParams.get("q");
    if (q && messages.length === 0) {
      sendMessage(decodeURIComponent(q));
    }
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(content: string) {
    if (!content.trim() || loading) return;
    const newMessages: Message[] = [...messages, { role: "user", content }];
    setMessages(newMessages);
    setInput("");
    setShowExperts(false);
    setLoading(true);
    const assistantMsg: Message = { role: "assistant", content: "" };
    setMessages((prev) => [...prev, assistantMsg]);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: content, messages: newMessages }),
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
    } catch {
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: "Sorry, something went wrong. Please try again.",
        };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }

  function clearChat() {
    setMessages([]);
    setInput("");
    setShowExperts(false);
    inputRef.current?.focus();
  }

  const isEmpty = messages.length === 0;

  return (
    <div className="flex flex-col h-screen bg-gray-950">
      {/* Header */}
      <div className="border-b border-gray-800 px-6 py-4 bg-gray-900 flex items-center justify-between">
        <div>
          <h1 className="text-white font-semibold text-sm">AI Coaching Session</h1>
          <p className="text-gray-500 text-xs mt-0.5">Powered by Funk Roberts & 43 Men Over 40 Health Summit experts</p>
        </div>
        {!isEmpty && (
          <button
            onClick={clearChat}
            className="text-gray-500 hover:text-gray-300 text-xs border border-gray-700 hover:border-gray-600 px-3 py-1.5 rounded-lg transition-colors"
          >
            New Session
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
        {isEmpty && (
          <div className="max-w-2xl mx-auto">
            {/* Welcome */}
            <div className="text-center py-8">
              <div className="text-5xl mb-4">💪</div>
              <h2 className="text-white text-xl font-bold mb-2">What do you want to work on today, brother?</h2>
              <p className="text-gray-500 text-sm mb-2">
                Ask anything about training, nutrition, sleep, hormones, or mindset after 40.
              </p>
              <p className="text-gray-600 text-xs mb-8">
                162 knowledge chunks · 43 expert voices · Funk Roberts system
              </p>
            </div>

            {/* Tab: Topics / Experts */}
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setShowExperts(false)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  !showExperts ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Popular Topics
              </button>
              <button
                onClick={() => setShowExperts(true)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  showExperts ? "bg-orange-500/20 text-orange-400 border border-orange-500/30" : "text-gray-500 hover:text-gray-300"
                }`}
              >
                Ask an Expert
              </button>
            </div>

            {!showExperts && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {STARTERS.map((s) => (
                  <button
                    key={s.text}
                    onClick={() => sendMessage(s.text)}
                    className="text-left px-4 py-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-orange-500/40 text-gray-300 text-sm transition-all flex items-start gap-3"
                  >
                    <span className="text-base flex-shrink-0">{s.emoji}</span>
                    <span>{s.text}</span>
                  </button>
                ))}
              </div>
            )}

            {showExperts && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {EXPERT_QUERIES.map((e) => (
                  <button
                    key={e.name}
                    onClick={() => sendMessage(e.query)}
                    className="text-left px-4 py-3 rounded-lg bg-gray-800/50 hover:bg-gray-800 border border-gray-700/50 hover:border-orange-500/40 text-gray-300 text-sm transition-all flex items-center gap-3"
                  >
                    <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-xs font-bold flex-shrink-0">
                      {e.name.charAt(0)}
                    </div>
                    <div>
                      <div className="text-orange-400/80 text-xs font-medium mb-0.5">{e.name}</div>
                      <div className="text-gray-400 text-xs">{e.query}</div>
                    </div>
                  </button>
                ))}
                <button
                  onClick={() => sendMessage("Who are all the experts in the Men Over 40 Health Summit and what do they specialize in?")}
                  className="sm:col-span-2 text-left px-4 py-3 rounded-lg bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/20 hover:border-orange-500/40 text-orange-300 text-sm transition-all"
                >
                  🎤 Tell me about all the summit experts →
                </button>
              </div>
            )}
          </div>
        )}

        {messages.map((msg, i) => (
          <div key={i} className={`flex gap-4 max-w-4xl mx-auto ${msg.role === "user" ? "flex-row-reverse" : ""}`}>
            <div
              className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center text-xs font-bold ${
                msg.role === "user" ? "bg-orange-500/20 text-orange-400" : "bg-gray-800 text-lg"
              }`}
            >
              {msg.role === "user" ? "You" : "💪"}
            </div>
            <div
              className={`max-w-2xl rounded-2xl px-5 py-4 text-sm leading-relaxed whitespace-pre-wrap ${
                msg.role === "user"
                  ? "bg-orange-500/20 border border-orange-500/30 text-white"
                  : "bg-gray-800/80 text-gray-200"
              }`}
            >
              {msg.content ||
                (loading && i === messages.length - 1 ? (
                  <span className="flex gap-1 items-center text-gray-500">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                ) : (
                  ""
                ))}
            </div>
          </div>
        ))}

        {/* Follow-up suggestions after assistant responds */}
        {!isEmpty && !loading && messages[messages.length - 1]?.role === "assistant" && (
          <div className="max-w-4xl mx-auto pl-12">
            <div className="flex flex-wrap gap-2">
              {[
                "Give me a specific protocol for this",
                "What does Funk Roberts say about this?",
                "What are common mistakes to avoid?",
                "How long before I see results?",
              ].map((suggestion) => (
                <button
                  key={suggestion}
                  onClick={() => sendMessage(suggestion)}
                  className="text-xs text-gray-500 hover:text-orange-400 border border-gray-700 hover:border-orange-500/40 px-3 py-1.5 rounded-full transition-colors"
                >
                  {suggestion}
                </button>
              ))}
            </div>
          </div>
        )}

        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div className="border-t border-gray-800 p-4 bg-gray-900">
        <form
          onSubmit={(e) => { e.preventDefault(); sendMessage(input); }}
          className="flex gap-3 max-w-4xl mx-auto"
        >
          <input
            ref={inputRef}
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask your coach anything about training, nutrition, sleep, hormones, mindset..."
            disabled={loading}
            className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 disabled:opacity-50 text-sm"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-5 py-3 bg-orange-500 hover:bg-orange-600 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-colors text-sm"
          >
            {loading ? "..." : "Send"}
          </button>
        </form>
        <p className="text-center text-gray-700 text-xs mt-2">
          AI Coach · 162 knowledge chunks · Men Over 40 Health Summit
        </p>
      </div>
    </div>
  );
}

export default function ChatPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center h-screen text-gray-500">Loading...</div>}>
      <ChatInner />
    </Suspense>
  );
}
