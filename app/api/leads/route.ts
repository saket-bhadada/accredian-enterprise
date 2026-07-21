import { NextRequest } from "next/server";
import { leadSchema } from "@/lib/schema";
import { insertLead, listLeads } from "@/lib/db";

export const runtime = "nodejs";

// ---------------------------------------------------------------------------
// In-memory rate limiter: max 5 submissions per IP per 10 minutes.
// NOTE: This resets on serverless cold starts. Swap for a durable store
// (e.g. Upstash Redis) before relying on it in production.
// ---------------------------------------------------------------------------
const RATE_WINDOW_MS = 10 * 60 * 1000; // 10 minutes
const RATE_LIMIT = 5;
const ipTimestamps = new Map<string, number[]>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (ipTimestamps.get(ip) ?? []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );

  if (timestamps.length >= RATE_LIMIT) {
    ipTimestamps.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  ipTimestamps.set(ip, timestamps);
  return false;
}

// ---------------------------------------------------------------------------
// POST /api/leads — create a new lead
// ---------------------------------------------------------------------------
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Honeypot: if the hidden "website" field is filled, silently discard.
    if (body.website) {
      return Response.json({ ok: true }, { status: 200 });
    }

    // Validate
    const result = leadSchema.safeParse(body);
    if (!result.success) {
      return Response.json(
        { ok: false, errors: result.error.flatten().fieldErrors },
        { status: 400 }
      );
    }

    // Rate limit
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
      "unknown";

    if (isRateLimited(ip)) {
      return Response.json(
        { ok: false, error: "Too many requests" },
        { status: 429 }
      );
    }

    // Persist
    const userAgent = request.headers.get("user-agent") ?? null;
    insertLead({
      name: result.data.name,
      email: result.data.email,
      company: result.data.company,
      team_size: result.data.teamSize,
      message: result.data.message || null,
      user_agent: userAgent,
      ip,
    });

    return Response.json({ ok: true }, { status: 201 });
  } catch {
    return Response.json(
      { ok: false, error: "Invalid request body" },
      { status: 400 }
    );
  }
}

// ---------------------------------------------------------------------------
// GET /api/leads — admin listing (requires x-admin-token header)
// ---------------------------------------------------------------------------
export async function GET(request: NextRequest) {
  const token = request.headers.get("x-admin-token");
  const expected = process.env.ADMIN_TOKEN;

  if (!expected || token !== expected) {
    return Response.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const leads = listLeads();
  return Response.json({ ok: true, leads });
}
