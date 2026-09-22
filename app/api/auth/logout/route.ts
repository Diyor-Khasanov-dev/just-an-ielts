import { NextResponse } from "next/server";
import { sessionCookie } from "../../../lib/session";
export async function GET(request: Request) { const response = NextResponse.redirect(new URL("/", request.url)); response.cookies.delete(sessionCookie); return response; }
