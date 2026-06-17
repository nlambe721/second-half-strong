"use client";
import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface Message {
  role: "user" | "assistant";
  content: string;
  image?: string;
  imageData?: string;
  imageMediaType?: string;
}

interface Source {
  id: string;
  speakerId: string;
  topic: string;
}

type Mode = "chat" | "case" | "diagnose" | "program" | "photo";

// Strip all markdown symbols from streamed text — guaranteed clean output
function stripMarkdown(text: string): string {
  return text
    .replace(/#{1,6} /gm, "")          // # ## ### headers
    .replace(/\*\*([^*]*)\*\*/g, "$1") // **bold**
    .replace(/\*([^*]+)\*/g, "$1")     // *italic*
    .replace(/__([^_]*)__/g, "$1")     // __bold__
    .replace(/_([^_]+)_/g, "$1")       // _italic_
    .replace(/`([^`]+)`/g, "$1");      // `code`
}

const MODE_META: Record<Mode, { icon: string; title: string; sub: string; placeholder: string }> = {
  chat:     { icon: "💬", title: "Free Chat",               sub: "Ask anything — open coaching conversation",               placeholder: "Type your question or situation here..." },
  case:     { icon: "📋", title: "Case Study Analysis",     sub: "Share your full picture — get a structured analysis",      placeholder: "Describe your situation — age, markers, symptoms, what you've tried..." },
  diagnose: { icon: "🔍", title: "Diagnose Me",             sub: "The coach interviews you before giving recommendations",    placeholder: 'Type "Start" to begin, or describe what you want to diagnose...' },
  program:  { icon: "🏆", title: "Accountability Check-In", sub: "Progress report · What broke down · Recalibrated plan",    placeholder: "Share your check-in — wins, breakdowns, this week's stats..." },
  photo:    { icon: "📷", title: "Photo & Document Analysis", sub: "Upload an image or PDF — analyzed with M40 context",    placeholder: "Attach a photo or file, or describe what you'd like analyzed..." },
};

const MODE_INTRO: Record<Mode, React.ReactNode> = {
  chat: (
    <div className="text-sm leading-relaxed space-y-3">
      <p>Welcome to the Second Half Strong AI Coach.</p>
      <p className="text-gray-300">I'm your personal Coach, Accountability Partner, and Guide — built on content from 80+ expert summit speakers covering everything men over 40 need to win the second half.</p>
      <p className="text-gray-400">What I can help with: personalized protocols, blood work and lab interpretation, food label and supplement analysis, sleep, hormones, training, nutrition, mindset, and building real consistency.</p>
      <p className="text-amber-500">Type your question below, or pick a quick start to jump in.</p>
    </div>
  ),
  case: (
    <div className="text-sm leading-relaxed space-y-3">
      <p className="text-amber-500">Here's how this works.</p>
      <p className="text-gray-300">Give me your full picture. The more context you share, the more precise the analysis. Include your age and current health markers, your top symptoms or problems right now, what you've already tried, your lifestyle reality, and your primary goal.</p>
      <p className="text-gray-300">I'll deliver a structured case study with root-cause analysis and a prioritized action protocol specific to your situation — not generic advice.</p>
      <p className="text-gray-500 text-xs">You can also attach your blood work PDF or a photo of your labs and I'll interpret every marker.</p>
      <p className="text-amber-500">Start by sharing your situation below.</p>
    </div>
  ),
  diagnose: (
    <div className="text-sm leading-relaxed space-y-3">
      <p>Welcome to your Diagnose Me session.</p>
      <p className="text-gray-300">In this format, I ask the questions and you answer them. This is the highest-precision way to build your protocol because I need to understand your full picture before making recommendations.</p>
      <p className="text-gray-300">I'll run you through a targeted diagnostic interview covering hormonal signals, sleep quality, energy patterns, training history, nutrition habits, stress load, and what you've already tried.</p>
      <p className="text-green-400">Ready to begin? Type "Start" and I'll ask your first question.</p>
    </div>
  ),
  program: (
    <div className="text-sm leading-relaxed space-y-3">
      <p className="text-amber-400">Accountability Check-In</p>
      <p className="text-gray-300">Share your report — wins, what broke down, what got in the way, and your current stats. I'll give you honest feedback, diagnose the breakdown, and rebuild your next 7-day execution plan.</p>
      <p className="text-gray-400">Use this for weekly or daily check-ins, breakdown analysis, progress reviews, or when your schedule changes and you need to recalibrate the plan.</p>
      <p className="text-amber-500">No judgment. Just data and a better plan. What happened this week?</p>
    </div>
  ),
  photo: (
    <div className="text-sm leading-relaxed space-y-3">
      <p className="text-purple-400">Photo and Document Analysis</p>
      <p className="text-gray-300">Upload any of the following and I'll analyze it with M40 context: food labels, blood work or lab results, supplement bottles, meal photos, or any health PDF.</p>
      <p className="text-purple-400">Use the camera button or attachment button below to get started.</p>
    </div>
  ),
};

const QUICK_STARTS: Record<Mode, { icon: string; title: string; sub: string; query: string }[]> = {
  chat: [
    { icon: "🌊", title: "I'm Overwhelmed",    sub: "Too much info, don't know where to start", query: "I'm overwhelmed with all the health information out there. I don't know where to start as a man over 40. Help me figure out what actually matters and where to begin." },
    { icon: "🔧", title: "Hard to Integrate",  sub: "I know what to do but can't fit it in",    query: "I know what I should be doing but I struggle to actually fit it into my life. Help me build a realistic system I can stick to." },
    { icon: "🎯", title: "Need a Strategy",    sub: "Give me a plan based on my markers",       query: "I need a complete strategy for men over 40. Walk me through the most important areas to focus on and help me build a plan." },
    { icon: "🏆", title: "Need Accountability", sub: "I keep starting and falling off",         query: "I keep starting programs and falling off. Help me build a system for real consistency this time." },
  ],
  case: [
    { icon: "📋", title: "Full Health Picture",  sub: "Share everything — get a complete analysis", query: "I want to share my full health picture for a complete case study analysis." },
    { icon: "🔧", title: "Symptom Cluster",       sub: "Multiple symptoms — find the root cause",   query: "I have multiple symptoms and don't know the root cause. Help me figure this out." },
    { icon: "🩸", title: "Lab Interpretation",    sub: "Upload or describe your blood work",         query: "I have blood work results I'd like you to interpret with men over 40 reference ranges." },
    { icon: "💊", title: "Supplement Audit",      sub: "What's working, what to cut",               query: "I want to audit my current supplements and figure out what's actually working and what to cut." },
  ],
  diagnose: [
    { icon: "🔍", title: "Full Diagnostic",  sub: "Let the coach interview you",         query: "Start" },
    { icon: "💤", title: "Sleep Issues",      sub: "Diagnose my sleep problems",          query: "I want to diagnose my sleep issues. Ask me questions first before giving recommendations." },
    { icon: "⚡", title: "Energy & Fatigue", sub: "Find the root cause of my fatigue",   query: "I want to diagnose my low energy and fatigue. Ask me questions to find the root cause." },
    { icon: "🔥", title: "Fat Loss Plateau", sub: "Why am I not losing fat?",            query: "I've hit a fat loss plateau. Ask me questions to diagnose why before recommending anything." },
  ],
  program: [
    { icon: "📅", title: "Weekly Check-In",    sub: "Report your week's results",     query: "I'm doing my weekly check-in. Here's my report from this week:" },
    { icon: "❌", title: "I Fell Off",          sub: "Diagnose the breakdown + rebuild", query: "I fell off my program. Help me diagnose what happened and rebuild my plan." },
    { icon: "📊", title: "Progress Review",     sub: "Track what's working",            query: "I want to review my progress and track what's working vs what isn't." },
    { icon: "📅", title: "Build My Week",       sub: "Create an execution plan",        query: "Help me build my execution plan for this week." },
  ],
  photo: [
    { icon: "🥫", title: "Food Label",   sub: "Analyze a nutrition label",  query: "Analyze this food label for a man over 40. Flag anything harmful and give me specific coaching guidance." },
    { icon: "🩸", title: "Blood Work",   sub: "Interpret my lab results",    query: "Here are my blood work results. Please interpret every marker with M40 reference ranges and flag anything I need to address." },
    { icon: "💊", title: "Supplement",   sub: "Check my supplement bottle",  query: "Analyze this supplement for a man over 40. Check the dosage, quality, and whether it's worth taking." },
    { icon: "🍽️", title: "My Meal",      sub: "Break down what I'm eating",  query: "Analyze this meal photo. Give me a macro breakdown and M40 coaching feedback." },
  ],
};

async function compressImage(file: File): Promise<{ base64: string; mediaType: string }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement("canvas");
      const MAX = 1600;
      let { width, height } = img;
      if (width > MAX || height > MAX) {
        if (width > height) { height = Math.round((height * MAX) / width); width = MAX; }
        else { width = Math.round((width * MAX) / height); height = MAX; }
      }
      canvas.width = width;
      canvas.height = height;
      canvas.getContext("2d")!.drawImage(img, 0, 0, width, height);
      const dataUrl = canvas.toDataURL("image/jpeg", 0.88);
      resolve({ base64: dataUrl.split(",")[1], mediaType: "image/jpeg" });
    };
    img.onerror = reject;
    img.src = url;
  });
}

function SourcesPanel({ sources }: { sources: Source[] }) {
  return (
    <div className="w-52 bg-[#0f1117] border-l border-gray-800/60 flex flex-col flex-shrink-0 overflow-hidden">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800/60">
        <div className="flex items-center gap-1.5">
          <span className="text-gray-500 text-xs">⊞</span>
          <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest">Sources</span>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-3">
        <div className="text-gray-600 text-xs uppercase tracking-widest font-medium mb-2">Knowledge Base</div>
        {sources.length === 0 ? (
          <p className="text-gray-700 text-xs leading-relaxed mt-2">
            Ask a question or attach a file — referenced experts appear here.
          </p>
        ) : (
          <div className="space-y-2">
            {sources.slice(0, 6).map((s) => (
              <div key={s.id} className="flex items-start gap-1.5">
                <span className="text-gray-700 text-xs mt-0.5 flex-shrink-0">•</span>
                <div>
                  <div className="text-gray-300 text-xs font-medium leading-tight">{s.speakerId}</div>
                  <div className="text-gray-600 text-xs">{s.topic}</div>
                </div>
              </div>
            ))}
            {sources.length > 6 && (
              <div className="text-gray-600 text-xs mt-1">+ {sources.length - 6} more experts</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function ChatInner() {
  const searchParams = useSearchParams();
  const rawMode = (searchParams.get("mode") as Mode) || "chat";
  const mode: Mode = ["chat", "case", "diagnose", "program", "photo"].includes(rawMode) ? rawMode : "chat";

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [sources, setSources] = useState<Source[]>([]);
  const [pendingFile, setPendingFile] = useState<{ base64: string; mediaType: string; preview: string; isPdf: boolean } | null>(null);
  const [processingFile, setProcessingFile] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevMode = useRef<string>("");

  useEffect(() => {
    if (prevMode.current !== mode) {
      setMessages([]);
      setSources([]);
      setPendingFile(null);
      setInput("");
      prevMode.current = mode;
    }
  }, [mode]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleFile(file: File) {
    const isPdf = file.type === "application/pdf";
    setProcessingFile(true);
    try {
      if (isPdf) {
        const reader = new FileReader();
        reader.onload = (ev) => {
          const result = ev.target?.result as string;
          setPendingFile({ base64: result.split(",")[1], mediaType: "application/pdf", preview: "", isPdf: true });
          setProcessingFile(false);
        };
        reader.onerror = () => setProcessingFile(false);
        reader.readAsDataURL(file);
      } else {
        const { base64, mediaType } = await compressImage(file);
        setPendingFile({ base64, mediaType, preview: `data:${mediaType};base64,${base64}`, isPdf: false });
        setProcessingFile(false);
      }
    } catch {
      setProcessingFile(false);
    }
  }

  async function updateSources(query: string) {
    try {
      const res = await fetch("/api/sources", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
      });
      setSources(await res.json());
    } catch {}
  }

  // Populate input field with quick-start text — user can edit before sending
  function populateQuickStart(query: string) {
    setInput(query);
    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.setSelectionRange(query.length, query.length);
    }, 50);
  }

  async function sendMessage(text?: string) {
    const content = text ?? input;
    if ((!content.trim() && !pendingFile) || loading) return;

    const file = pendingFile;
    const userMsg: Message = {
      role: "user",
      content: content || (file?.isPdf ? "Please analyze this PDF document." : "Please analyze this image."),
      ...(file && !file.isPdf ? { image: file.preview, imageData: file.base64, imageMediaType: file.mediaType } : {}),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setPendingFile(null);
    setLoading(true);

    updateSources(content || userMsg.content);

    const assistantMsg: Message = { role: "assistant", content: "" };
    setMessages((prev) => [...prev, assistantMsg]);

    try {
      const apiMessages = newMessages.map((m) => {
        if (m.imageData && m.imageMediaType) {
          return {
            role: m.role,
            content: [
              { type: "image", source: { type: "base64", media_type: m.imageMediaType, data: m.imageData } },
              { type: "text", text: m.content },
            ],
          };
        }
        return { role: m.role, content: m.content };
      });

      if (file?.isPdf) {
        const last = apiMessages[apiMessages.length - 1];
        apiMessages[apiMessages.length - 1] = {
          ...last,
          content: [
            { type: "document", source: { type: "base64", media_type: "application/pdf", data: file.base64 } },
            { type: "text", text: typeof last.content === "string" ? last.content : "" },
          ],
        };
      }

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: content, messages: apiMessages, mode }),
      });

      if (!res.ok) throw new Error(`API error ${res.status}`);
      if (!res.body) throw new Error("No stream");

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let accumulated = "";
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        accumulated += decoder.decode(value, { stream: true });
        // Strip markdown as it streams — guaranteed clean output
        const clean = stripMarkdown(accumulated);
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: clean };
          return updated;
        });
      }
    } catch (e) {
      console.error("Chat error:", e);
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = { role: "assistant", content: "Something went wrong. Please try again." };
        return updated;
      });
    } finally {
      setLoading(false);
    }
  }

  const meta = MODE_META[mode];
  const intro = MODE_INTRO[mode];
  const starters = QUICK_STARTS[mode];
  const isEmpty = messages.length === 0;

  return (
    <div className="flex h-full overflow-hidden">
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* Header */}
        <div className="flex items-center justify-between px-5 py-3 border-b border-gray-800/60 flex-shrink-0">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-lg">{meta.icon}</span>
              <span className="text-white font-bold text-sm">{meta.title}</span>
            </div>
            <p className="text-gray-500 text-xs mt-0.5 ml-7">{meta.sub}</p>
          </div>
          <div className="flex items-center gap-3">
            {messages.length > 0 && (
              <button
                onClick={() => { setMessages([]); setSources([]); setPendingFile(null); setInput(""); }}
                className="text-gray-600 hover:text-gray-400 text-xs border border-gray-800 px-2.5 py-1 rounded-lg transition-colors"
              >
                New Session
              </button>
            )}
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
              <span className="text-gray-500 text-xs">Active</span>
            </div>
          </div>
        </div>

        {/* Messages area */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {isEmpty ? (
            <div className="max-w-2xl">
              <div className="flex gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-amber-700/30 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">💪</div>
                <div className="bg-[#1a1f2e] border border-gray-700/40 rounded-2xl rounded-tl-sm px-4 py-3 text-gray-300">
                  {intro}
                </div>
              </div>
            </div>
          ) : (
            <>
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"} gap-2`}>
                  {msg.role === "assistant" && (
                    <div className="w-7 h-7 rounded-full bg-amber-700/30 flex items-center justify-center text-xs flex-shrink-0 mt-1">💪</div>
                  )}
                  <div
                    className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      msg.role === "user"
                        ? "bg-amber-700/80 text-white rounded-tr-sm"
                        : "bg-[#1a1f2e] text-gray-200 border border-gray-700/40 rounded-tl-sm"
                    }`}
                  >
                    {msg.image && (
                      <img src={msg.image} alt="upload" className="rounded-lg mb-2 max-h-40 object-contain" />
                    )}
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                  </div>
                </div>
              ))}
              {loading && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-amber-700/30 flex items-center justify-center text-xs flex-shrink-0">💪</div>
                  <div className="bg-[#1a1f2e] border border-gray-700/40 rounded-2xl rounded-tl-sm px-4 py-3">
                    <div className="flex gap-1">
                      <span className="w-2 h-2 bg-amber-500/60 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                      <span className="w-2 h-2 bg-amber-500/60 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                      <span className="w-2 h-2 bg-amber-500/60 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                    </div>
                  </div>
                </div>
              )}
            </>
          )}
          <div ref={bottomRef} />
        </div>

        {/* Quick starts — always visible above the input */}
        <div className="border-t border-gray-800/40 bg-[#0c0f17] px-4 pt-3 pb-1 flex-shrink-0">
          <p className="text-gray-700 text-xs uppercase tracking-widest font-medium mb-2">Quick starts</p>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {starters.map((s) => (
              <button
                key={s.title}
                onClick={() => populateQuickStart(s.query)}
                className="flex-shrink-0 flex items-center gap-1.5 bg-[#141820] hover:bg-[#1a1f2e] border border-gray-800 hover:border-gray-700 rounded-xl px-3 py-2 transition-all group"
              >
                <span className="text-sm">{s.icon}</span>
                <div className="text-left">
                  <div className="text-gray-300 text-xs font-medium whitespace-nowrap group-hover:text-amber-200">{s.title}</div>
                  <div className="text-gray-600 text-xs whitespace-nowrap">{s.sub}</div>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Input area */}
        <div className="bg-[#0f1117] px-4 pt-2 pb-3 flex-shrink-0">
          {processingFile && (
            <div className="flex items-center gap-2 mb-2 px-1">
              <div className="h-10 w-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-xs text-gray-400 animate-pulse">...</div>
              <span className="text-gray-500 text-xs">Processing image...</span>
            </div>
          )}
          {pendingFile && !processingFile && (
            <div className="flex items-center gap-2 mb-2 px-1">
              {pendingFile.isPdf ? (
                <div className="h-10 w-10 rounded-lg bg-red-900/40 border border-red-800/40 flex items-center justify-center text-xs text-red-400 flex-shrink-0">PDF</div>
              ) : (
                <img src={pendingFile.preview} alt="pending" className="h-10 w-10 object-cover rounded-lg border border-gray-700 flex-shrink-0" />
              )}
              <span className="text-gray-400 text-xs flex-1">Ready to send</span>
              <button onClick={() => setPendingFile(null)} className="text-gray-600 hover:text-red-400 text-xs">✕</button>
            </div>
          )}
          <div className="flex gap-2 items-end">
            <input ref={fileRef} type="file" accept="image/*,application/pdf" className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ""; }} />
            <button onClick={() => fileRef.current?.click()} title="Attach file"
              className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors flex-shrink-0">
              📎
            </button>
            <input ref={cameraRef} type="file" accept="image/*" capture="environment" className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ""; }} />
            <button onClick={() => cameraRef.current?.click()} title="Take photo"
              className="w-9 h-9 rounded-xl bg-amber-800/60 hover:bg-amber-700/60 border border-amber-700/40 flex items-center justify-center text-amber-400 hover:text-amber-300 transition-colors flex-shrink-0">
              📷
            </button>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
              placeholder={meta.placeholder}
              className="flex-1 bg-[#141820] border border-gray-700 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-amber-700 text-sm"
              disabled={loading}
            />
            <button
              onClick={() => sendMessage()}
              disabled={loading || (!input.trim() && !pendingFile) || processingFile}
              className="w-9 h-9 rounded-xl bg-amber-700 hover:bg-amber-600 disabled:bg-gray-800 disabled:cursor-not-allowed flex items-center justify-center transition-colors flex-shrink-0"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
        </div>

      </div>
      <SourcesPanel sources={sources} />
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
