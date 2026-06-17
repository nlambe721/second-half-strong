"use client";
import { useState, useRef, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";

interface Message {
  role: "user" | "assistant";
  content: string;
  image?: string;       // preview data URL (display only)
  imageData?: string;   // raw base64 for API call
  imageMediaType?: string; // actual MIME type (image/jpeg, image/png, etc.)
}

interface Source {
  id: string;
  speakerId: string;
  topic: string;
}

type Mode = "chat" | "case" | "diagnose" | "program" | "photo";

const MODE_META: Record<Mode, { icon: string; title: string; sub: string; placeholder: string; color: string }> = {
  chat:     { icon: "💬", title: "Free Chat",             sub: "Second Half Strong AI Coach · Ask anything",                   placeholder: "Ask anything — or attach a food label, blood work, or meal photo...", color: "text-amber-400" },
  case:     { icon: "📋", title: "Case Study Analysis",   sub: "Describe your full situation — get a structured, personalized plan", placeholder: "Describe your full situation — age, markers, symptoms, what you've tried...", color: "text-blue-400" },
  diagnose: { icon: "🔍", title: "Diagnose Me",           sub: "The coach asks you targeted questions before giving recommendations", placeholder: 'Type "Start" and I\'ll begin asking you questions...',               color: "text-green-400" },
  program:  { icon: "🏆", title: "Accountability Check-In", sub: "Progress report · What broke down · Recalibrated plan",       placeholder: "Share your check-in — wins, breakdowns, this week's stats...",       color: "text-amber-400" },
  photo:    { icon: "📷", title: "Photo & Document Analysis", sub: "Upload an image or PDF — I'll analyze it with M40 context", placeholder: "Attach a photo or file, or describe what you'd like analyzed...",      color: "text-purple-400" },
};

const MODE_INTRO: Record<Mode, React.ReactNode> = {
  chat: (
    <div className="text-sm leading-relaxed space-y-3">
      <p>Welcome to the <strong className="text-amber-400">Second Half Strong AI Coach</strong></p>
      <p>I'm your personal <strong className="text-amber-400">Coach · Accountability Partner · Guide</strong> — built on content from <strong className="text-white">80+ expert summit speakers</strong> covering everything men over 40 need to win the second half.</p>
      <p className="text-amber-500 font-medium">What I can help you with:</p>
      <ul className="space-y-1.5 text-gray-300">
        <li>▸ <strong className="text-amber-400">🎯 Personalized protocols</strong> based on your health markers and situation</li>
        <li>▸ <strong className="text-amber-400">📷 Image & photo analysis</strong> — snap a food label, meal, or supplement and I'll break it down</li>
        <li>▸ <strong className="text-amber-400">🩸 Lab result interpretation</strong> — upload blood work and I'll walk through every marker with M40 reference ranges</li>
        <li>▸ <strong className="text-amber-400">💪 Sleep, hormones, training, nutrition, mindset</strong> — expert-cited answers from the full knowledge base</li>
        <li>▸ <strong className="text-amber-400">🏆 Accountability</strong> — building consistency when life keeps getting in the way</li>
      </ul>
      <p className="text-amber-500 font-medium">Ask me anything below — or use a quick start to jump into a common situation.</p>
    </div>
  ),
  case: (
    <div className="text-sm leading-relaxed space-y-3">
      <p className="text-amber-500 font-semibold">Here's how this works:</p>
      <p className="text-gray-300">Give me your full picture. Don't filter — the more context you share, the more precise the analysis. Include:</p>
      <ul className="space-y-1.5 text-gray-300">
        <li>▸ <strong className="text-amber-400">Age + current health markers</strong> (weight, testosterone level, A1C, blood pressure, energy — whatever you have)</li>
        <li>▸ <strong className="text-amber-400">Your top 3 symptoms or problems</strong> right now</li>
        <li>▸ <strong className="text-amber-400">What you've already tried</strong> and what happened</li>
        <li>▸ <strong className="text-amber-400">Your lifestyle reality</strong> — work, stress, sleep, training, travel, family demands</li>
        <li>▸ <strong className="text-amber-400">Your primary goal</strong> — fat loss, energy, testosterone, performance, longevity?</li>
      </ul>
      <p className="text-gray-300">I'll deliver a structured case study with a root-cause analysis and a <strong className="text-amber-400">prioritized action protocol</strong> specific to your situation — not generic advice.</p>
      <p className="text-gray-400 text-xs">📷 You can also attach your blood work PDF or a photo of your labs and I'll interpret every marker.</p>
      <p className="text-amber-500 font-medium">Start by sharing your situation below.</p>
    </div>
  ),
  diagnose: (
    <div className="text-sm leading-relaxed space-y-3">
      <p>Welcome to your <strong className="text-green-400">Diagnose Me</strong> session.</p>
      <p className="text-gray-300">In this format, <strong className="text-green-400">I ask the questions — you answer them</strong>. This is the highest-precision way to build your protocol because I need to understand your full picture before making recommendations.</p>
      <p className="text-gray-300">I'll run you through a targeted diagnostic interview covering:</p>
      <ul className="space-y-1 text-gray-400">
        <li>▸ Hormonal signals and lab markers</li>
        <li>▸ Sleep quality and recovery</li>
        <li>▸ Energy patterns and metabolic health</li>
        <li>▸ Training history and movement</li>
        <li>▸ Nutrition habits and eating window</li>
        <li>▸ Stress load and nervous system state</li>
        <li>▸ What you've tried and what hasn't worked</li>
      </ul>
      <p className="text-gray-300">At the end, I'll give you a <strong className="text-green-400">personalized protocol</strong> built on your specific answers — not a generic men's health plan.</p>
      <p className="text-green-400 font-medium">Ready to begin? Just say "Start" and I'll ask your first question.</p>
    </div>
  ),
  program: (
    <div className="text-sm leading-relaxed space-y-3">
      <p className="text-amber-400 font-bold text-base">🏆 Accountability Check-In</p>
      <div className="space-y-2 text-gray-300">
        <div className="flex items-start gap-2">
          <span>📅</span>
          <div><strong className="text-white">Weekly or Daily Check-Ins</strong><br/><span className="text-gray-500 text-xs italic">"Here's what I did this week / today..."</span></div>
        </div>
        <div className="flex items-start gap-2">
          <span>🔧</span>
          <div><strong className="text-white">Breakdown Analysis</strong><br/><span className="text-gray-500 text-xs italic">"I fell off on Day 4. Here's what happened..."</span></div>
        </div>
        <div className="flex items-start gap-2">
          <span>📊</span>
          <div><strong className="text-white">Progress Review</strong><br/><span className="text-gray-500 text-xs italic">"Stats from this week — weight, sleep score, energy 1-10..."</span></div>
        </div>
        <div className="flex items-start gap-2">
          <span>🔄</span>
          <div><strong className="text-white">Protocol Recalibration</strong><br/><span className="text-gray-500 text-xs italic">"My schedule changed. Help me rebuild the plan..."</span></div>
        </div>
      </div>
      <div>
        <p className="text-amber-400 font-medium text-xs uppercase tracking-wide mb-1">How to check in:</p>
        <p className="text-gray-300 text-sm">Share your report — wins, what broke down, what got in the way, and your current stats. I'll give you honest feedback, diagnose the breakdown, and rebuild your next 7-day execution plan.</p>
      </div>
      <p className="text-amber-400 font-medium">The rule: no judgment. Just data and a better plan.</p>
      <p className="text-amber-500 font-semibold">What happened this week? Start your check-in below.</p>
    </div>
  ),
  photo: (
    <div className="text-sm leading-relaxed space-y-3">
      <p className="text-purple-400 font-semibold">📷 Photo & Document Analysis</p>
      <p className="text-gray-300">Upload any of the following and I'll analyze it with M40-specific context:</p>
      <ul className="space-y-1.5 text-gray-300">
        <li>▸ <strong className="text-purple-400">Food labels</strong> — I'll flag what's good, what's harmful, and give M40-specific guidance</li>
        <li>▸ <strong className="text-purple-400">Blood work / lab results</strong> — full interpretation with optimal ranges for men over 40</li>
        <li>▸ <strong className="text-purple-400">Supplement bottles</strong> — dosage check, interactions, what to keep vs cut</li>
        <li>▸ <strong className="text-purple-400">Meal photos</strong> — macro breakdown and coaching feedback</li>
        <li>▸ <strong className="text-purple-400">PDFs</strong> — any health document, protocol, or report</li>
      </ul>
      <p className="text-purple-400 font-medium">Use the 📷 camera button or 📎 attachment button below to get started.</p>
    </div>
  ),
};

const QUICK_STARTS: Record<Mode, { icon: string; title: string; sub: string; query: string }[]> = {
  chat: [
    { icon: "🌊", title: "I'm Overwhelmed",    sub: "Too much info, don't know where to start", query: "I'm overwhelmed with all the health information. I don't know where to start as a man over 40. Help me prioritize." },
    { icon: "🔧", title: "Hard to Integrate",  sub: "I know what to do but can't fit it in",     query: "I know what I should be doing but I can't integrate it into my life. Help me build a realistic system." },
    { icon: "🎯", title: "Need a Strategy",    sub: "Give me a plan based on my markers",        query: "I need a complete strategy for men over 40. Walk me through the most important areas to focus on." },
    { icon: "🏆", title: "Need Accountability", sub: "I keep starting and falling off",          query: "I keep starting programs and falling off. Help me build a system for consistency." },
  ],
  case: [
    { icon: "📋", title: "Full Health Picture",  sub: "Share everything — get a complete analysis", query: "I want to share my full health picture for a complete case study analysis." },
    { icon: "🔧", title: "Symptom Cluster",       sub: "Multiple symptoms — find the root cause",    query: "I have multiple symptoms and don't know the root cause. Help me figure this out." },
    { icon: "🩸", title: "Lab Interpretation",    sub: "Upload or describe your blood work",          query: "I have blood work results I'd like you to interpret with men over 40 reference ranges." },
    { icon: "💊", title: "Supplement Audit",      sub: "What's working, what to cut",                query: "I want to audit my current supplements. Help me figure out what's working and what to cut." },
  ],
  diagnose: [
    { icon: "🔍", title: "Full Diagnostic",  sub: "Let the coach interview you",          query: "Start" },
    { icon: "💤", title: "Sleep Issues",      sub: "Diagnose my sleep problems",           query: "I want to diagnose my sleep issues. Ask me questions first." },
    { icon: "⚡", title: "Energy & Fatigue", sub: "Find the root cause of my fatigue",    query: "I want to diagnose my low energy and fatigue. Ask me questions to find the root cause." },
    { icon: "🔥", title: "Fat Loss Plateau", sub: "Why am I not losing fat?",             query: "I've hit a fat loss plateau. Ask me questions to diagnose why." },
  ],
  program: [
    { icon: "📅", title: "Weekly Check-In",    sub: "Report your week's results",      query: "I'm doing my weekly check-in. Here's my report:" },
    { icon: "❌", title: "I Fell Off",          sub: "Diagnose the breakdown + rebuild", query: "I fell off my program. Help me diagnose what happened and rebuild my plan." },
    { icon: "📊", title: "Progress Review",     sub: "Track what's working",             query: "I want to review my progress and track what's working vs what isn't." },
    { icon: "📅", title: "Build My Week",       sub: "Create an execution plan",         query: "Help me build my execution plan for this week based on my current program." },
  ],
  photo: [
    { icon: "🥫", title: "Food Label",   sub: "Analyze a nutrition label",   query: "Analyze this food label for a man over 40. Flag anything harmful and give me coaching guidance." },
    { icon: "🩸", title: "Blood Work",   sub: "Interpret my lab results",     query: "Here are my blood work results. Please interpret every marker with M40 reference ranges." },
    { icon: "💊", title: "Supplement",   sub: "Check my supplement bottle",   query: "Analyze this supplement. Check dosage, quality, and whether it's worth taking for men over 40." },
    { icon: "🍽️", title: "My Meal",      sub: "Break down what I'm eating",   query: "Analyze this meal photo. Give me a macro breakdown and M40 coaching feedback." },
  ],
};

// Compress an image to stay within Claude API limits (~5MB base64 safe)
async function compressImage(file: File): Promise<{ base64: string; mediaType: string }> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);
    img.onload = () => {
      URL.revokeObjectURL(url);
      const canvas = document.createElement("canvas");
      // Max dimension 1600px — keeps detail for blood work / labels
      const MAX = 1600;
      let { width, height } = img;
      if (width > MAX || height > MAX) {
        if (width > height) { height = Math.round((height * MAX) / width); width = MAX; }
        else { width = Math.round((width * MAX) / height); height = MAX; }
      }
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, width, height);
      // Always output as JPEG for consistency and smaller size
      const dataUrl = canvas.toDataURL("image/jpeg", 0.88);
      const base64 = dataUrl.split(",")[1];
      resolve({ base64, mediaType: "image/jpeg" });
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
        <span className="text-gray-600 text-xs">›</span>
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
  const [pendingFile, setPendingFile] = useState<{ base64: string; mediaType: string; preview: string; isPdf: boolean; rawData?: string } | null>(null);
  const [processingFile, setProcessingFile] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);
  const prevMode = useRef<string>("");

  // Reset on mode change
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
    const q = searchParams.get("q");
    if (q && messages.length === 0 && prevMode.current === mode) sendMessage(decodeURIComponent(q));
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleFile(file: File) {
    const isPdf = file.type === "application/pdf";
    setProcessingFile(true);
    try {
      if (isPdf) {
        // PDFs — read as base64 directly
        const reader = new FileReader();
        reader.onload = (ev) => {
          const result = ev.target?.result as string;
          const base64 = result.split(",")[1];
          setPendingFile({ base64, mediaType: "application/pdf", preview: "", isPdf: true });
          setProcessingFile(false);
        };
        reader.onerror = () => setProcessingFile(false);
        reader.readAsDataURL(file);
      } else {
        // Images — compress first to ensure compatibility + size limits
        const { base64, mediaType } = await compressImage(file);
        const preview = `data:${mediaType};base64,${base64}`;
        setPendingFile({ base64, mediaType, preview, isPdf: false });
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
      const data = await res.json();
      setSources(data);
    } catch {}
  }

  async function sendMessage(content: string) {
    if ((!content.trim() && !pendingFile) || loading) return;

    const file = pendingFile;
    const userMsg: Message = {
      role: "user",
      content: content || (file?.isPdf ? "Please analyze this PDF document." : "Please analyze this image."),
      // Store all three: preview URL (display), raw base64 (API), media type (API)
      ...(file && !file.isPdf ? {
        image: file.preview,
        imageData: file.base64,
        imageMediaType: file.mediaType,
      } : {}),
    };

    const newMessages = [...messages, userMsg];
    setMessages(newMessages);
    setInput("");
    setPendingFile(null);
    setLoading(true);

    // Update sources in background
    updateSources(content || userMsg.content);

    const assistantMsg: Message = { role: "assistant", content: "" };
    setMessages((prev) => [...prev, assistantMsg]);

    try {
      // Build API messages — use stored imageData/imageMediaType (not re-parsed from preview URL)
      const apiMessages = newMessages.map((m) => {
        if (m.imageData && m.imageMediaType) {
          return {
            role: m.role,
            content: [
              {
                type: "image",
                source: {
                  type: "base64",
                  media_type: m.imageMediaType,
                  data: m.imageData,
                },
              },
              { type: "text", text: m.content },
            ],
          };
        }
        return { role: m.role, content: m.content };
      });

      // If pending PDF, attach to the last message
      if (file?.isPdf) {
        const last = apiMessages[apiMessages.length - 1];
        apiMessages[apiMessages.length - 1] = {
          ...last,
          content: [
            {
              type: "document",
              source: {
                type: "base64",
                media_type: "application/pdf",
                data: file.base64,
              },
            },
            { type: "text", text: typeof last.content === "string" ? last.content : "" },
          ],
        };
      }

      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: content, messages: apiMessages, mode }),
      });

      if (!res.ok) {
        const errText = await res.text();
        throw new Error(`API error ${res.status}: ${errText}`);
      }

      if (!res.body) throw new Error("No stream");
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
      console.error("Chat error:", e);
      const errMsg = e instanceof Error ? e.message : "Unknown error";
      setMessages((prev) => {
        const updated = [...prev];
        updated[updated.length - 1] = {
          role: "assistant",
          content: `Something went wrong — please try again. ${errMsg.includes("API error") ? `(${errMsg})` : ""}`,
        };
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
      {/* Main chat area */}
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
                onClick={() => { setMessages([]); setSources([]); setPendingFile(null); }}
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

        {/* Messages */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-4">
          {isEmpty ? (
            <div className="max-w-2xl">
              {/* Intro message */}
              <div className="flex gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-amber-700/30 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">💪</div>
                <div className="bg-[#1a1f2e] border border-gray-700/40 rounded-2xl rounded-tl-sm px-4 py-3 text-gray-300">
                  {intro}
                </div>
              </div>

              {/* Quick starts */}
              <div className="mb-3">
                <p className="text-gray-600 text-xs uppercase tracking-widest font-medium mb-3">Quick Starts — or type your own below</p>
                <div className="grid grid-cols-2 gap-2">
                  {starters.map((s) => (
                    <button
                      key={s.title}
                      onClick={() => sendMessage(s.query)}
                      className="text-left bg-[#141820] hover:bg-[#1a1f2e] border border-gray-800/60 hover:border-gray-700 rounded-xl p-3.5 transition-all group"
                    >
                      <div className="flex items-center gap-1.5 mb-1">
                        <span className="text-base">{s.icon}</span>
                        <span className="text-white text-sm font-medium group-hover:text-amber-50">{s.title}</span>
                      </div>
                      <p className="text-gray-500 text-xs">{s.sub}</p>
                    </button>
                  ))}
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

        {/* Input */}
        <div className="border-t border-gray-800/60 bg-[#0f1117] px-4 py-3 flex-shrink-0">
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
            {/* File attachment */}
            <input
              ref={fileRef}
              type="file"
              accept="image/*,application/pdf"
              className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ""; }}
            />
            <button
              onClick={() => fileRef.current?.click()}
              title="Attach file (image or PDF)"
              className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors flex-shrink-0"
            >
              📎
            </button>
            {/* Camera */}
            <input
              ref={cameraRef}
              type="file"
              accept="image/*"
              capture="environment"
              className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ""; }}
            />
            <button
              onClick={() => cameraRef.current?.click()}
              title="Take photo"
              className="w-9 h-9 rounded-xl bg-amber-800/60 hover:bg-amber-700/60 border border-amber-700/40 flex items-center justify-center text-amber-400 hover:text-amber-300 transition-colors flex-shrink-0"
            >
              📷
            </button>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(input); }}}
              placeholder={meta.placeholder}
              className="flex-1 bg-[#141820] border border-gray-700 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-amber-700 text-sm"
              disabled={loading}
            />
            <button
              onClick={() => sendMessage(input)}
              disabled={loading || (!input.trim() && !pendingFile) || processingFile}
              className="w-9 h-9 rounded-xl bg-amber-700 hover:bg-amber-600 disabled:bg-gray-800 disabled:cursor-not-allowed flex items-center justify-center transition-colors flex-shrink-0"
            >
              <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <p className="text-gray-700 text-xs text-center mt-2">
            📷 Camera button takes a photo instantly · 📎 Attach food labels, meals, or blood work PDFs
          </p>
        </div>
      </div>

      {/* Sources panel */}
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
