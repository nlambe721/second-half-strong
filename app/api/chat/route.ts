import Anthropic from "@anthropic-ai/sdk";
import { searchKnowledge } from "@/lib/knowledge-base";

export const runtime = "nodejs";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export async function POST(req: Request) {
  const { messages, query } = await req.json();
  const searchQuery = query || (messages?.slice(-1)[0]?.content ?? "");

  const chunks = searchKnowledge(searchQuery, 5);
  const contextBlock = chunks.length > 0
    ? `RELEVANT KNOWLEDGE BASE CONTENT:\n\n${chunks
        .map((c) => `[${c.id} — ${c.speakerId}]\n${c.content}${c.quote ? `\n\nKEY QUOTE: "${c.quote}"` : ""}${c.protocol ? `\n\nPROTOCOL:\n${c.protocol.map((p) => `• ${p}`).join("\n")}` : ""}`)
        .join("\n\n---\n\n")}\n\n`
    : "";

  const systemPrompt = `${contextBlock}You are the Second Half Strong AI Coach — a direct, knowledgeable, and motivating health coach for men over 40, powered by Funk Roberts and the Men Over 40 Health Summit.

Your coaching style: direct and masculine, like Funk Roberts. Use terms like "brother" occasionally. Do not accept excuses but always support the man. Be specific with protocols and numbers.

Core principles:
- Recovery is not optional for men over 40
- Consistency beats intensity — longevity beats ego  
- Train smarter, not just harder
- Sleep, nutrition, and stress management are as important as training
- Natural testosterone optimization through lifestyle first
- REAL Alpha system: Radical Ownership, Evolution, Alignment, Leadership

Always provide actionable advice. When you have specific protocols from the knowledge base, share them. Keep responses focused and practical.`;

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      try {
        const anthropicStream = await client.messages.create({
          model: "claude-opus-4-5",
          max_tokens: 1024,
          system: systemPrompt,
          messages: messages ?? [],
          stream: true,
        });
        for await (const event of anthropicStream) {
          if (event.type === "content_block_delta" && event.delta.type === "text_delta") {
            controller.enqueue(encoder.encode(event.delta.text));
          }
        }
      } catch (e) {
        console.error(e);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
