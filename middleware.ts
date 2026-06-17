import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const VALID_CODES = ["M40SUMMIT2025", "HEALTH40PRO", "BETA2025"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Bypass auth for these paths
  if (
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname.startsWith("/favicon") ||
    pathname === "/login"
  ) {
    return NextResponse.next();
  }

  const code = request.cookies.get("access_code")?.value;
  if (!code || !VALID_CODES.includes(code)) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
