"use client";
import { useState, useRef, useEffect, useCallback, Suspense } from "react";
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

// Strip all markdown — guaranteed clean output regardless of model behavior
function stripMarkdown(text: string): string {
  return text
    .replace(/#{1,6} /gm, "")
    .replace(/\*\*([^*]*)\*\*/g, "$1")
    .replace(/\*([^*\n]+)\*/g, "$1")
    .replace(/__([^_]*)__/g, "$1")
    .replace(/_([^_\n]+)_/g, "$1")
    .replace(/`([^`]+)`/g, "$1");
}

const MODE_META: Record<Mode, { icon: string; title: string; sub: string; placeholder: string }> = {
  chat:     { icon: "💬", title: "Free Chat",               sub: "Ask anything — open coaching conversation",              placeholder: "Type your question or situation here..." },
  case:     { icon: "📋", title: "Case Study Analysis",     sub: "Share your full picture — get a structured analysis",    placeholder: "Describe your situation — age, markers, symptoms, what you've tried..." },
  diagnose: { icon: "🔍", title: "Diagnose Me",             sub: "The coach interviews you before giving recommendations",  placeholder: 'Type "Start" to begin, or describe what you want to diagnose...' },
  program:  { icon: "🏆", title: "Accountability Check-In", sub: "Progress report · What broke down · Recalibrated plan",  placeholder: "Share your check-in — wins, breakdowns, this week's stats..." },
  photo:    { icon: "📷", title: "Photo & Document Analysis", sub: "Upload an image or PDF — analyzed with M40 context",  placeholder: "Attach a photo or file, or describe what you'd like analyzed..." },
};

const MODE_INTRO: Record<Mode, React.ReactNode> = {
  chat: (
    <div className="text-sm leading-relaxed space-y-3">
      <p>Welcome to the Second Half Strong AI Coach.</p>
      <p className="text-gray-300">Your personal Coach, Accountability Partner, and Guide — built on Funk Roberts' system and 80+ expert sessions from the Men Over 40 Health Summit.</p>
      <p className="text-gray-400">I can help with personalized protocols, blood work interpretation, food and supplement analysis, sleep, hormones, training, nutrition, mindset, and building real consistency.</p>
      <p className="text-amber-500">Type your question, use a quick start below, or hit the mic button to speak.</p>
    </div>
  ),
  case: (
    <div className="text-sm leading-relaxed space-y-3">
      <p className="text-amber-500">Here is how this works.</p>
      <p className="text-gray-300">Give me your full picture — age, current health markers, top symptoms, what you have already tried, your lifestyle reality, and your primary goal. The more context, the more precise the analysis.</p>
      <p className="text-gray-300">I will deliver a structured case study with root-cause analysis and a prioritized action protocol specific to your situation.</p>
      <p className="text-gray-500 text-xs">You can also attach blood work or a PDF and I will interpret every marker.</p>
      <p className="text-amber-500">Start by sharing your situation below.</p>
    </div>
  ),
  diagnose: (
    <div className="text-sm leading-relaxed space-y-3">
      <p>Welcome to your Diagnose Me session.</p>
      <p className="text-gray-300">I ask the questions, you answer them. This is the highest-precision format — I need your full picture before making recommendations.</p>
      <p className="text-gray-300">I will cover hormonal signals, sleep quality, energy patterns, training history, nutrition, stress load, and what you have already tried.</p>
      <p className="text-green-400">Type Start to begin and I will ask your first question.</p>
    </div>
  ),
  program: (
    <div className="text-sm leading-relaxed space-y-3">
      <p className="text-amber-400">Accountability Check-In</p>
      <p className="text-gray-300">Share your report — wins, what broke down, what got in the way, your current stats. I will give you honest feedback, diagnose the breakdown, and rebuild your next 7-day execution plan.</p>
      <p className="text-amber-500">No judgment. Just data and a better plan. What happened this week?</p>
    </div>
  ),
  photo: (
    <div className="text-sm leading-relaxed space-y-3">
      <p className="text-purple-400">Photo and Document Analysis</p>
      <p className="text-gray-300">Upload food labels, blood work, supplement bottles, meal photos, or any health PDF — I will analyze it with M40 context.</p>
      <p className="text-purple-400">Use the camera or attachment button below to get started.</p>
    </div>
  ),
};

const QUICK_STARTS: Record<Mode, { icon: string; title: string; sub: string; query: string }[]> = {
  chat: [
    { icon: "🌊", title: "I'm Overwhelmed",     sub: "Too much info, don't know where to start", query: "I'm overwhelmed with all the health information out there. I don't know where to start as a man over 40. Help me figure out what actually matters and where to begin." },
    { icon: "🔧", title: "Hard to Integrate",   sub: "I know what to do but can't fit it in",    query: "I know what I should be doing but I struggle to actually fit it into my life consistently. Help me build a realistic system I can stick to." },
    { icon: "🎯", title: "Need a Strategy",     sub: "Give me a complete plan",                  query: "I need a complete strategy for men over 40. Walk me through the most important areas to focus on and help me build a real plan." },
    { icon: "🏆", title: "Need Accountability", sub: "I keep starting and falling off",          query: "I keep starting programs and falling off track. Help me build a system for real consistency this time." },
  ],
  case: [
    { icon: "📋", title: "Full Health Picture", sub: "Share everything — get a complete analysis", query: "I want to share my full health picture for a complete case study analysis." },
    { icon: "🔧", title: "Symptom Cluster",      sub: "Multiple symptoms — find the root cause",   query: "I have multiple symptoms happening at once and I don't know the root cause. Help me figure this out." },
    { icon: "🩸", title: "Lab Interpretation",   sub: "Upload or describe your blood work",        query: "I have blood work results I would like you to interpret with men over 40 reference ranges." },
    { icon: "💊", title: "Supplement Audit",     sub: "What's working, what to cut",              query: "I want to audit my current supplement stack and figure out what is actually working and what to cut." },
  ],
  diagnose: [
    { icon: "🔍", title: "Full Diagnostic",  sub: "Let the coach interview you",        query: "Start" },
    { icon: "💤", title: "Sleep Issues",      sub: "Diagnose my sleep problems",         query: "I want to diagnose my sleep issues. Please ask me questions before giving recommendations." },
    { icon: "⚡", title: "Energy & Fatigue", sub: "Find the root cause of my fatigue",  query: "I want to diagnose my low energy and fatigue. Ask me questions to find the root cause before recommending anything." },
    { icon: "🔥", title: "Fat Loss Plateau", sub: "Why am I not losing fat?",           query: "I have hit a fat loss plateau. Ask me questions to diagnose why before giving me a protocol." },
  ],
  program: [
    { icon: "📅", title: "Weekly Check-In",   sub: "Report your week's results",      query: "I am doing my weekly check-in. Here is my report from this week:" },
    { icon: "❌", title: "I Fell Off",         sub: "Diagnose the breakdown + rebuild", query: "I fell off my program this week. Help me diagnose what happened and rebuild my plan." },
    { icon: "📊", title: "Progress Review",    sub: "Track what's working",            query: "I want to review my progress and figure out what is working versus what is not." },
    { icon: "📅", title: "Build My Week",      sub: "Create an execution plan",        query: "Help me build my execution plan for this week based on where I am right now." },
  ],
  photo: [
    { icon: "🥫", title: "Food Label",  sub: "Analyze a nutrition label",  query: "Analyze this food label for a man over 40. Flag anything harmful and give me specific guidance." },
    { icon: "🩸", title: "Blood Work",  sub: "Interpret my lab results",    query: "Here are my blood work results. Please interpret every marker with M40 reference ranges and flag what I need to address." },
    { icon: "💊", title: "Supplement",  sub: "Check my supplement bottle",  query: "Analyze this supplement for a man over 40. Check the dosage, quality, and whether it is worth taking." },
    { icon: "🍽️", title: "My Meal",     sub: "Break down what I'm eating",  query: "Analyze this meal photo. Give me a macro breakdown and M40 coaching feedback." },
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
      canvas.width = width; canvas.height = height;
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
      <div className="px-4 py-3 border-b border-gray-800/60">
        <span className="text-gray-400 text-xs font-semibold uppercase tracking-widest">Sources</span>
      </div>
      <div className="flex-1 overflow-y-auto p-3">
        <div className="text-gray-600 text-xs uppercase tracking-widest font-medium mb-2">Knowledge Base</div>
        {sources.length === 0 ? (
          <p className="text-gray-700 text-xs leading-relaxed mt-2">Ask a question — referenced experts appear here.</p>
        ) : (
          <div className="space-y-2">
            {sources.slice(0, 8).map((s) => (
              <div key={s.id} className="flex items-start gap-1.5">
                <span className="text-amber-700 text-xs mt-0.5 flex-shrink-0">•</span>
                <div>
                  <div className="text-gray-300 text-xs font-medium leading-tight">{s.speakerId.replace(/-/g, " ")}</div>
                  <div className="text-gray-600 text-xs">{s.topic}</div>
                </div>
              </div>
            ))}
            {sources.length > 8 && <div className="text-gray-600 text-xs mt-1">+ {sources.length - 8} more</div>}
          </div>
        )}
      </div>
    </div>
  );
}

// ── Voice hook ────────────────────────────────────────────────────────────────
function useVoice() {
  const [listening, setListening] = useState(false);
  const [supported, setSupported] = useState(false);
  const recognitionRef = useRef<SpeechRecognition | null>(null);

  useEffect(() => {
    const SpeechRec = (window as typeof window & { SpeechRecognition?: typeof SpeechRecognition; webkitSpeechRecognition?: typeof SpeechRecognition }).SpeechRecognition
      || (window as typeof window & { webkitSpeechRecognition?: typeof SpeechRecognition }).webkitSpeechRecognition;
    if (SpeechRec) {
      setSupported(true);
      const rec = new SpeechRec();
      rec.continuous = false;
      rec.interimResults = true;
      rec.lang = "en-US";
      recognitionRef.current = rec;
    }
  }, []);

  const startListening = useCallback((onResult: (text: string, final: boolean) => void) => {
    const rec = recognitionRef.current;
    if (!rec) return;
    rec.onresult = (e: SpeechRecognitionEvent) => {
      const transcript = Array.from(e.results)
        .map((r) => r[0].transcript)
        .join("");
      const isFinal = e.results[e.results.length - 1].isFinal;
      onResult(transcript, isFinal);
    };
    rec.onend = () => setListening(false);
    rec.onerror = () => setListening(false);
    rec.start();
    setListening(true);
  }, []);

  const stopListening = useCallback(() => {
    recognitionRef.current?.stop();
    setListening(false);
  }, []);

  const speak = useCallback((text: string) => {
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    // Clean text further for speech (remove any residual symbols)
    const clean = text.replace(/[#*_`]/g, "").replace(/\n{2,}/g, ". ").trim();
    const utterance = new SpeechSynthesisUtterance(clean);
    utterance.rate = 0.95;
    utterance.pitch = 0.9;
    utterance.volume = 1;
    // Prefer a deep male voice if available
    const voices = window.speechSynthesis.getVoices();
    const preferred = voices.find(v =>
      v.name.toLowerCase().includes("daniel") ||
      v.name.toLowerCase().includes("alex") ||
      v.name.toLowerCase().includes("david") ||
      (v.lang === "en-US" && v.name.toLowerCase().includes("male"))
    ) || voices.find(v => v.lang.startsWith("en"));
    if (preferred) utterance.voice = preferred;
    window.speechSynthesis.speak(utterance);
  }, []);

  const stopSpeaking = useCallback(() => {
    window.speechSynthesis?.cancel();
  }, []);

  return { listening, supported, startListening, stopListening, speak, stopSpeaking };
}

// ── Main component ────────────────────────────────────────────────────────────
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
  const [autoSpeak, setAutoSpeak] = useState(false);
  const [speakingIdx, setSpeakingIdx] = useState<number | null>(null);

  const bottomRef = useRef<HTMLDivElement>(null);
  const fileRef = useRef<HTMLInputElement>(null);
  const cameraRef = useRef<HTMLInputElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const prevMode = useRef<string>("");

  const { listening, supported: voiceSupported, startListening, stopListening, speak, stopSpeaking } = useVoice();

  useEffect(() => {
    if (prevMode.current !== mode) {
      setMessages([]); setSources([]); setPendingFile(null); setInput("");
      prevMode.current = mode;
    }
  }, [mode]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function handleFile(file: File) {
    setProcessingFile(true);
    try {
      if (file.type === "application/pdf") {
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
    } catch { setProcessingFile(false); }
  }

  async function updateSources(query: string) {
    try {
      const res = await fetch("/api/sources", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ query }) });
      setSources(await res.json());
    } catch {}
  }

  function populateQuickStart(query: string) {
    setInput(query);
    setTimeout(() => { inputRef.current?.focus(); }, 50);
  }

  function toggleMic() {
    if (listening) { stopListening(); return; }
    startListening((text, final) => {
      setInput(text);
      if (final) setTimeout(() => inputRef.current?.focus(), 50);
    });
  }

  function handleSpeakMessage(content: string, idx: number) {
    if (speakingIdx === idx) { stopSpeaking(); setSpeakingIdx(null); return; }
    setSpeakingIdx(idx);
    speak(content);
    // Clear speaking state when done
    const synth = window.speechSynthesis;
    const check = setInterval(() => {
      if (!synth.speaking) { setSpeakingIdx(null); clearInterval(check); }
    }, 500);
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
    setInput(""); setPendingFile(null); setLoading(true);
    updateSources(content || userMsg.content);
    setMessages((prev) => [...prev, { role: "assistant", content: "" }]);

    try {
      const apiMessages = newMessages.map((m) => {
        if (m.imageData && m.imageMediaType) {
          return { role: m.role, content: [
            { type: "image", source: { type: "base64", media_type: m.imageMediaType, data: m.imageData } },
            { type: "text", text: m.content },
          ]};
        }
        return { role: m.role, content: m.content };
      });

      if (file?.isPdf) {
        const last = apiMessages[apiMessages.length - 1];
        apiMessages[apiMessages.length - 1] = { ...last, content: [
          { type: "document", source: { type: "base64", media_type: "application/pdf", data: file.base64 } },
          { type: "text", text: typeof last.content === "string" ? last.content : "" },
        ]};
      }

      const res = await fetch("/api/chat", {
        method: "POST", headers: { "Content-Type": "application/json" },
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
        const clean = stripMarkdown(accumulated);
        setMessages((prev) => {
          const updated = [...prev];
          updated[updated.length - 1] = { role: "assistant", content: clean };
          return updated;
        });
      }

      // Auto-speak the finished response if enabled
      if (autoSpeak && accumulated.trim()) {
        const clean = stripMarkdown(accumulated);
        const responseIdx = newMessages.length;
        setSpeakingIdx(responseIdx);
        speak(clean);
        const check = setInterval(() => {
          if (!window.speechSynthesis.speaking) { setSpeakingIdx(null); clearInterval(check); }
        }, 500);
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
            {/* Auto-speak toggle */}
            {voiceSupported && (
              <button
                onClick={() => { setAutoSpeak(!autoSpeak); stopSpeaking(); }}
                title={autoSpeak ? "Auto-speak on — click to turn off" : "Auto-speak off — click to hear responses"}
                className={`flex items-center gap-1.5 text-xs border rounded-lg px-2.5 py-1 transition-colors ${
                  autoSpeak
                    ? "border-amber-600 text-amber-400 bg-amber-900/20"
                    : "border-gray-800 text-gray-600 hover:text-gray-400"
                }`}
              >
                🔊 {autoSpeak ? "Audio on" : "Audio off"}
              </button>
            )}
            {messages.length > 0 && (
              <button
                onClick={() => { setMessages([]); setSources([]); setPendingFile(null); setInput(""); stopSpeaking(); }}
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
              <div className="flex gap-3 mb-6">
                <div className="w-8 h-8 rounded-full bg-amber-700/30 flex items-center justify-center text-sm flex-shrink-0 mt-0.5">💪</div>
                <div className="bg-[#1a1f2e] border border-gray-700/40 rounded-2xl rounded-tl-sm px-4 py-3 text-gray-300">
                  {MODE_INTRO[mode]}
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
                  <div className={`max-w-[78%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-amber-700/80 text-white rounded-tr-sm"
                      : "bg-[#1a1f2e] text-gray-200 border border-gray-700/40 rounded-tl-sm"
                  }`}>
                    {msg.image && <img src={msg.image} alt="upload" className="rounded-lg mb-2 max-h-40 object-contain" />}
                    <div className="whitespace-pre-wrap">{msg.content}</div>
                    {/* Listen button on assistant messages */}
                    {msg.role === "assistant" && msg.content && voiceSupported && (
                      <button
                        onClick={() => handleSpeakMessage(msg.content, i)}
                        className={`mt-2 flex items-center gap-1 text-xs transition-colors ${
                          speakingIdx === i ? "text-amber-400" : "text-gray-600 hover:text-gray-400"
                        }`}
                      >
                        {speakingIdx === i ? "⏹ Stop" : "▶ Listen"}
                      </button>
                    )}
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

        {/* Quick starts — always visible */}
        <div className="border-t border-gray-800/40 bg-[#0c0f17] px-4 pt-2.5 pb-1.5 flex-shrink-0">
          <p className="text-gray-700 text-xs uppercase tracking-widest font-medium mb-2">Quick starts</p>
          <div className="flex gap-2 overflow-x-auto pb-1" style={{ scrollbarWidth: "none" }}>
            {QUICK_STARTS[mode].map((s) => (
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

        {/* Input */}
        <div className="bg-[#0f1117] px-4 pt-2 pb-3 flex-shrink-0">
          {processingFile && (
            <div className="flex items-center gap-2 mb-2 px-1">
              <div className="h-10 w-10 rounded-lg bg-gray-800 border border-gray-700 flex items-center justify-center text-xs text-gray-400 animate-pulse">...</div>
              <span className="text-gray-500 text-xs">Processing image...</span>
            </div>
          )}
          {pendingFile && !processingFile && (
            <div className="flex items-center gap-2 mb-2 px-1">
              {pendingFile.isPdf
                ? <div className="h-10 w-10 rounded-lg bg-red-900/40 border border-red-800/40 flex items-center justify-center text-xs text-red-400 flex-shrink-0">PDF</div>
                : <img src={pendingFile.preview} alt="pending" className="h-10 w-10 object-cover rounded-lg border border-gray-700 flex-shrink-0" />
              }
              <span className="text-gray-400 text-xs flex-1">Ready to send</span>
              <button onClick={() => setPendingFile(null)} className="text-gray-600 hover:text-red-400 text-xs">✕</button>
            </div>
          )}

          {/* Listening indicator */}
          {listening && (
            <div className="flex items-center gap-2 mb-2 px-1">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
              <span className="text-red-400 text-xs">Listening — speak now...</span>
            </div>
          )}

          <div className="flex gap-2 items-end">
            {/* File attach */}
            <input ref={fileRef} type="file" accept="image/*,application/pdf" className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ""; }} />
            <button onClick={() => fileRef.current?.click()} title="Attach file"
              className="w-9 h-9 rounded-xl bg-gray-800 hover:bg-gray-700 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-white transition-colors flex-shrink-0">
              📎
            </button>

            {/* Camera */}
            <input ref={cameraRef} type="file" accept="image/*" capture="environment" className="hidden"
              onChange={(e) => { const f = e.target.files?.[0]; if (f) handleFile(f); e.target.value = ""; }} />
            <button onClick={() => cameraRef.current?.click()} title="Take photo"
              className="w-9 h-9 rounded-xl bg-amber-800/60 hover:bg-amber-700/60 border border-amber-700/40 flex items-center justify-center text-amber-400 hover:text-amber-300 transition-colors flex-shrink-0">
              📷
            </button>

            {/* Mic button */}
            {voiceSupported && (
              <button
                onClick={toggleMic}
                title={listening ? "Stop listening" : "Speak your question"}
                className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-colors flex-shrink-0 ${
                  listening
                    ? "bg-red-700 border-red-600 text-white animate-pulse"
                    : "bg-gray-800 hover:bg-gray-700 border-gray-700 text-gray-400 hover:text-white"
                }`}>
                🎤
              </button>
            )}

            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => { if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); } }}
              placeholder={listening ? "Listening..." : meta.placeholder}
              className="flex-1 bg-[#141820] border border-gray-700 rounded-xl px-4 py-2.5 text-white placeholder-gray-600 focus:outline-none focus:border-amber-700 text-sm"
              disabled={loading}
            />

            <button
              onClick={() => sendMessage()}
              disabled={loading || (!input.trim() && !pendingFile) || processingFile}
              className="w-9 h-9 rounded-xl bg-amber-700 hover:bg-amber-600 disabled:bg-gray-800 disabled:cursor-not-allowed flex items-center justify-center transition-colors flex-shrink-0">
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
  return <Suspense><ChatInner /></Suspense>;
}
