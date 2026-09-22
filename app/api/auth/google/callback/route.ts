import { NextRequest, NextResponse } from "next/server";
import { createSession, sessionCookie, type SessionUser } from "../../../../lib/session";

export async function GET(request: NextRequest) {
  const code = request.nextUrl.searchParams.get("code"); const state = request.nextUrl.searchParams.get("state");
  const expected = request.cookies.get("ielts_oauth_state")?.value;
  const fail = (reason: string) => { const response = NextResponse.redirect(new URL(`/login?error=${reason}`, request.url)); response.cookies.delete("ielts_oauth_state"); return response; };
  if (!code || !state || state !== expected) return fail("authentication");
  const clientId = process.env.GOOGLE_CLIENT_ID; const clientSecret = process.env.GOOGLE_CLIENT_SECRET;
  if (!clientId || !clientSecret || !process.env.AUTH_SECRET) return fail("configuration");
  const redirectUri = new URL("/api/auth/google/callback", request.url).toString();
  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", { method: "POST", headers: { "Content-Type": "application/x-www-form-urlencoded" }, body: new URLSearchParams({ code, client_id: clientId, client_secret: clientSecret, redirect_uri: redirectUri, grant_type: "authorization_code" }), cache: "no-store" });
  if (!tokenResponse.ok) return fail("authentication");
  const token = await tokenResponse.json() as { access_token?: string };
  if (!token.access_token) return fail("authentication");
  const profileResponse = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", { headers: { Authorization: `Bearer ${token.access_token}` }, cache: "no-store" });
  if (!profileResponse.ok) return fail("authentication");
  const profile = await profileResponse.json() as { name?: string; email?: string; picture?: string; email_verified?: boolean };
  if (!profile.name || !profile.email || !profile.email_verified) return fail("authentication");
  const response = NextResponse.redirect(new URL("/dashboard", request.url));
  response.cookies.delete("ielts_oauth_state"); response.cookies.set(sessionCookie, createSession({ name: profile.name, email: profile.email, picture: profile.picture } satisfies SessionUser), { httpOnly: true, sameSite: "lax", secure: process.env.NODE_ENV === "production", maxAge: 60 * 60 * 24 * 7, path: "/" });
  return response;
}
