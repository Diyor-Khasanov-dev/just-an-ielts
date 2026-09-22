import { randomUUID } from "node:crypto";
import { NextResponse } from "next/server";

export async function GET(request: Request) {
  const clientId = process.env.GOOGLE_CLIENT_ID;
  if (!clientId) return NextResponse.redirect(new URL("/login?error=configuration", request.url));
  const state = randomUUID(); const redirectUri = new URL("/api/auth/google/callback", request.url).toString();
  const google = new URL("https://accounts.google.com/o/oauth2/v2/auth");
  google.search = new URLSearchParams({ client_id: clientId, redirect_uri: redirectUri, response_type: "code", scope: "openid email profile", state, prompt: "select_account" }).toString();
  const response = NextResponse.redirect(google);
  response.cookies.set("ielts_oauth_state", state, { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", maxAge: 600, path: "/" });
  return response;
}
