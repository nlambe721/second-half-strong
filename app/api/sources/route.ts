import { searchKnowledge } from "@/lib/knowledge-base";

export const runtime = "nodejs";

export async function POST(req: Request) {
  const { query } = await req.json();
  if (!query) return Response.json([]);
  const chunks = searchKnowledge(query, 8);
  const sources = chunks.map((c) => ({
    id: c.id,
    speakerId: c.speakerId,
    topic: Array.isArray(c.topic) ? c.topic[0] : c.topic ?? "",
  }));
  return Response.json(sources);
}
