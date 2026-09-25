import { briefPlanSchema, type ArtifactKey, type BriefPlan } from "./brief-schema";

const SYSTEM_PROMPT = `You are Briefly AI, a senior software product planner.
Turn rough software ideas into concise, implementation-ready planning artifacts.

Return valid JSON only. Do not wrap JSON in markdown.
Use this exact shape:
{
  "projectBrief": "string",
  "functionalRequirements": ["string"],
  "userStories": [
    { "role": "string", "goal": "string", "benefit": "string" }
  ],
  "acceptanceCriteria": ["string"],
  "tasks": [
    { "title": "string", "description": "string" }
  ]
}

Quality rules:
- Preserve the user's intent. Do not invent a different product.
- Be concrete, concise, technically realistic, and implementation-oriented.
- Project brief: one compact paragraph covering problem, target user, proposed solution, and scope.
- Functional requirements: 4-8 clear product behaviors.
- User stories: 3-6 stories in role / goal / benefit form.
- Acceptance criteria: 4-8 testable statements.
- Tasks: 5-10 implementation tasks ordered from foundation to finish.
- Avoid filler, buzzwords, and generic advice.
- Do not include authentication, payments, databases, or infrastructure unless the idea needs them.
`;

function extractJson(text: string) {
  const trimmed = text.trim();

  try {
    return JSON.parse(trimmed) as unknown;
  } catch {
    const start = trimmed.indexOf("{");
    const end = trimmed.lastIndexOf("}");

    if (start === -1 || end === -1 || end <= start) {
      throw new Error("The AI provider did not return valid JSON.");
    }

    return JSON.parse(trimmed.slice(start, end + 1)) as unknown;
  }
}

function sectionInstruction(section?: ArtifactKey, currentPlan?: BriefPlan) {
  if (!section || !currentPlan) {
    return "";
  }

  return `
You are regenerating only the "${section}" artifact.
Keep every other artifact semantically unchanged.
Use the current plan below as source context:
${JSON.stringify(currentPlan)}
Return the complete JSON object in the same schema, with only "${section}" meaningfully improved.
`;
}

export async function generateBriefPlan(input: {
  idea: string;
  section?: ArtifactKey;
  currentPlan?: BriefPlan;
}) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const model = process.env.OPENROUTER_MODEL;

  if (!apiKey || !model) {
    throw new Error(
      "AI provider is not configured. Add OPENROUTER_API_KEY and OPENROUTER_MODEL to .env.local.",
    );
  }

  const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "HTTP-Referer": process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
      "X-Title": "Briefly AI",
    },
    body: JSON.stringify({
      model,
      temperature: input.section ? 0.35 : 0.25,
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        {
          role: "user",
          content: `Software idea:\n${input.idea}\n${sectionInstruction(input.section, input.currentPlan)}`,
        },
      ],
    }),
    signal: AbortSignal.timeout(45_000),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => "");
    throw new Error(
      `AI provider request failed (${response.status})${detail ? `: ${detail.slice(0, 220)}` : ""}`,
    );
  }

  const payload = (await response.json()) as {
    choices?: Array<{ message?: { content?: string } }>;
  };

  const content = payload.choices?.[0]?.message?.content;

  if (!content) {
    throw new Error("AI provider returned an empty response.");
  }

  const parsed = extractJson(content);
  const validated = briefPlanSchema.safeParse(parsed);

  if (!validated.success) {
    throw new Error("AI output did not match the Briefly AI schema. Please retry.");
  }

  return validated.data;
}
