import { NextResponse } from "next/server";
import { AIServiceError, generateBriefPlan } from "@/lib/ai";
import { generateRequestSchema } from "@/lib/brief-schema";

export const runtime = "nodejs";
export const maxDuration = 60;

const MAX_BODY_BYTES = 64 * 1024;
const RATE_LIMIT_WINDOW_MS = 60_000;
const RATE_LIMIT_MAX_REQUESTS = 12;

type RateLimitEntry = {
  count: number;
  resetAt: number;
};

const rateLimitStore = new Map<string, RateLimitEntry>();

function json(
  body: Record<string, unknown>,
  status = 200,
  headers?: HeadersInit,
) {
  return NextResponse.json(body, {
    status,
    headers: {
      "Cache-Control": "no-store",
      ...headers,
    },
  });
}

function getClientKey(request: Request) {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    return forwarded.split(",")[0]?.trim() || "anonymous";
  }

  return request.headers.get("x-real-ip")?.trim() || "anonymous";
}

function consumeRateLimit(request: Request) {
  const key = getClientKey(request);
  const now = Date.now();
  const current = rateLimitStore.get(key);

  if (!current || current.resetAt <= now) {
    rateLimitStore.set(key, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return null;
  }

  if (current.count >= RATE_LIMIT_MAX_REQUESTS) {
    return Math.max(1, Math.ceil((current.resetAt - now) / 1000));
  }

  current.count += 1;
  rateLimitStore.set(key, current);
  return null;
}

export async function POST(request: Request) {
  const contentLength = Number(request.headers.get("content-length") ?? "0");

  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return json(
      { error: "Request is too large." },
      413,
    );
  }

  const retryAfter = consumeRateLimit(request);

  if (retryAfter !== null) {
    return json(
      { error: "Too many requests. Please wait a moment and retry." },
      429,
      { "Retry-After": String(retryAfter) },
    );
  }

  try {
    const jsonBody = await request.json();
    const parsed = generateRequestSchema.safeParse(jsonBody);

    if (!parsed.success) {
      return json(
        {
          error: "Please provide a software idea between 12 and 4,000 characters.",
        },
        400,
      );
    }

    const plan = await generateBriefPlan(parsed.data);

    return json({ plan });
  } catch (error) {
    if (error instanceof SyntaxError) {
      return json({ error: "Request body must be valid JSON." }, 400);
    }

    if (error instanceof AIServiceError) {
      return json({ error: error.message }, error.status);
    }

    return json(
      { error: "Unable to generate the plan. Please retry." },
      500,
    );
  }
}
