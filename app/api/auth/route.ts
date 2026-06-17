import { NextResponse } from "next/server";
import { cookies } from "next/headers";

const VALID_CODES = ["M40SUMMIT2025", "HEALTH40PRO", "BETA2025"];

export async function POST(req: Request) {
  const { code } = await req.json();
  if (!VALID_CODES.includes(code)) {
    return NextResponse.json({ error: "Invalid code" }, { status: 401 });
  }
  const cookieStore = await cookies();
  cookieStore.set("access_code", code, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });
  return NextResponse.json({ ok: true });
}
