import { NextResponse } from "next/server";
import { generateBriefPlan } from "@/lib/ai";
import { generateRequestSchema } from "@/lib/brief-schema";

export const runtime = "nodejs";
export const maxDuration = 60;

export async function POST(request: Request) {
  try {
    const json = await request.json();
    const parsed = generateRequestSchema.safeParse(json);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error: "Please provide a software idea between 12 and 4,000 characters.",
        },
        { status: 400 },
      );
    }

    const plan = await generateBriefPlan(parsed.data);

    return NextResponse.json({ plan });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Unable to generate the plan.";

    const status = message.includes("not configured") ? 503 : 500;

    return NextResponse.json({ error: message }, { status });
  }
}
