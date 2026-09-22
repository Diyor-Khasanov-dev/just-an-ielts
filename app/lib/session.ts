import { createHmac, timingSafeEqual } from "node:crypto";
import { cookies } from "next/headers";

export type SessionUser = { name: string; email: string; picture?: string };
const COOKIE_NAME = "ielts_session";
const secret = process.env.AUTH_SECRET;

function sign(value: string) { return createHmac("sha256", secret ?? "").update(value).digest("base64url"); }
export function createSession(user: SessionUser) { const value = Buffer.from(JSON.stringify(user)).toString("base64url"); return `${value}.${sign(value)}`; }
export function parseSession(cookie?: string): SessionUser | null {
  if (!cookie || !secret) return null;
  const [value, signature] = cookie.split(".");
  if (!value || !signature) return null;
  const expected = Buffer.from(sign(value)); const received = Buffer.from(signature);
  if (expected.length !== received.length || !timingSafeEqual(expected, received)) return null;
  try { const user = JSON.parse(Buffer.from(value, "base64url").toString("utf8")); return typeof user.name === "string" && typeof user.email === "string" ? user : null; } catch { return null; }
}
export async function getSession() { return parseSession((await cookies()).get(COOKIE_NAME)?.value); }
export const sessionCookie = COOKIE_NAME;
