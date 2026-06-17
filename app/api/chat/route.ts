import Anthropic from "@anthropic-ai/sdk";
import { searchKnowledge } from "@/lib/knowledge-base";

export const runtime = "nodejs";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

const MODE_CONTEXT: Record<string, string> = {
  chat: `The member is in open coaching mode — answer their question directly with your coaching expertise.`,

  case: `The member is in CASE STUDY mode. They want a deep-dive personal analysis of their specific situation.
Conduct a thorough case study review using this structure:
1. **Current State Assessment** — What's actually going on based on what they've shared
2. **Root Cause Analysis** — The underlying reasons behind their situation
3. **Key Opportunities** — The 2-3 biggest levers they can pull right now
4. **Protocol Recommendations** — Specific, numbered action steps with details
5. **Priority Action Plan** — Their #1 focus for the next 7 days
Be thorough. This is a deep coaching analysis, not a quick answer.
If they upload an image (bloodwork, food label, supplement, body photo) — analyze it in detail as part of the case study.`,

  ask: `The member is in QUICK ASK mode. They want a direct, tactical answer to a specific question.
Format: Give the answer immediately (no preamble), add 2-3 sentences of key context, then one clear action step.
Be precise, be direct, be fast. No fluff.`,

  program: `The member is in ACCOUNTABILITY & PROGRAM mode. This is a coaching check-in.
Your role: Review their progress like a coach reviewing tape with an athlete.
- Acknowledge what they've done (wins first)
- Identify what needs to improve (direct, not soft)
- Reinforce the protocol and why it matters
- Give them 1-3 specific adjustments for the upcoming week
- Close with a motivating commitment statement
Be like a world-class coach — firm, supportive, and results-focused.`,
};

export async function POST(req: Request) {
  const { messages, query, mode = "chat", image } = await req.json();

  const searchQuery = query || (messages?.slice(-1)[0]?.content ?? "");
  const searchText = typeof searchQuery === "string" ? searchQuery : (searchQuery?.[0]?.text ?? "");

  const chunks = searchKnowledge(searchText, 5);
  const contextBlock =
    chunks.length > 0
      ? `RELEVANT KNOWLEDGE BASE CONTENT:\n\n${chunks
          .map(
            (c) =>
              `[${c.id} — ${c.speakerId}]\n${c.content}${c.quote ? `\n\nKEY QUOTE: "${c.quote}"` : ""}${
                c.protocol ? `\n\nPROTOCOL:\n${c.protocol.map((p) => `• ${p}`).join("\n")}` : ""
              }`
          )
          .join("\n\n---\n\n")}\n\n`
      : "";

  const modeContext = MODE_CONTEXT[mode] || MODE_CONTEXT.chat;

  const systemPrompt = `${contextBlock}You are The Second Half Strong AI Coach — a direct, knowledgeable, and motivating personal coach, accountability partner, and guide for men over 40. You are powered by Funk Roberts and the Men Over 40 Health Summit.

Your identity: You are not a chatbot. You are a coach. You think, speak, and act like the best men's health coach in the world for men in their second half of life.

Your coaching style: Direct and masculine, like Funk Roberts. Use "brother" occasionally. Do not accept excuses but always support the man. Be specific with protocols, numbers, and timelines. Never be vague when a specific answer exists.

Core principles you coach from:
- Recovery is non-negotiable for men over 40
- Consistency beats intensity — longevity beats ego
- Train smarter, not just harder
- Sleep, nutrition, and stress management are as important as training
- Natural testosterone optimization through lifestyle first
- The REAL Alpha system: Radical Ownership, Evolution, Alignment, Leadership
- The Second Half of life is where the REAL game begins

Image analysis capability: If the member uploads an image (food label, supplement bottle, bloodwork results, body composition photo, workout plan, or any health-related image) — analyze it thoroughly and give specific coaching insights based on what you see.

CURRENT SESSION MODE:
${modeContext}

Always provide actionable advice. When you have specific protocols from the knowledge base, share them with exact numbers and steps. Keep responses focused, practical, and powerful.`;

  // Build the final messages array — handle image in the last user message
  let finalMessages = messages ?? [];

  // If there's a standalone image (not already embedded in messages), attach it to the last user message
  if (image && finalMessages.length > 0) {
    const last = finalMessages[finalMessages.length - 1];
    if (last.role === "user" && typeof last.content === "string") {
      finalMessages = [
        ...finalMessages.slice(0, -1),
        {
          role: "user",
          content: [
            { type: "image", source: { type: "base64", media_type: image.mediaType, data: image.data } },
            { type: "text", text: last.content || "Analyze this image." },
          ],
        },
      ];
    }
  }

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const anthropicStream = await client.messages.create({
          model: "claude-opus-4-5",
          max_tokens: 2048,
          system: systemPrompt,
          messages: finalMessages,
          stream: true,
        });
        for await (const event of anthropicStream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
      } catch (e) {
        console.error(e);
        controller.enqueue(encoder.encode("Sorry, I encountered an error. Please try again."));
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
