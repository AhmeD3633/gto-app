import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("session")?.value;
  console.log("Middleware is running. Token:", token);

  if (!token) {
    console.log("No token found, redirecting...");
    return NextResponse.redirect(new URL("/", req.url));
  }

  console.log("Token found, allowing access.");
  return NextResponse.next();
}

export const config = {
  matcher: ["/profile/:path*"],
};
