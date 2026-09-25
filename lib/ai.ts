import { briefPlanSchema, type ArtifactKey, type BriefPlan } from "./brief-schema";

export class AIServiceError extends Error {
  constructor(
    message: string,
    public readonly status: number,
  ) {
    super(message);
    this.name = "AIServiceError";
  }
}

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
      throw new AIServiceError(
        "The AI returned an invalid response. Please retry.",
        502,
      );
    }

    try {
      return JSON.parse(trimmed.slice(start, end + 1)) as unknown;
    } catch {
      throw new AIServiceError(
        "The AI returned an invalid response. Please retry.",
        502,
      );
    }
  }
}

function sectionInstruction(section?: ArtifactKey, currentPlan?: BriefPlan) {
  if (!section || !currentPlan) {
    return "";
  }

  return `
You are regenerating only the "${section}" artifact.
Use the current plan below as source context:
${JSON.stringify(currentPlan)}
Return the complete JSON object in the same schema. Improve only "${section}".
`;
}

function mergeRegeneratedSection(
  currentPlan: BriefPlan,
  generatedPlan: BriefPlan,
  section: ArtifactKey,
): BriefPlan {
  return {
    ...currentPlan,
    [section]: generatedPlan[section],
  } as BriefPlan;
}

export async function generateBriefPlan(input: {
  idea: string;
  section?: ArtifactKey;
  currentPlan?: BriefPlan;
}) {
  const apiKey = process.env.OPENROUTER_API_KEY;
  const model = process.env.OPENROUTER_MODEL;

  if (!apiKey || !model) {
    throw new AIServiceError(
      "AI provider is not configured. Add OPENROUTER_API_KEY and OPENROUTER_MODEL.",
      503,
    );
  }

  let response: Response;

  try {
    response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
        "HTTP-Referer":
          process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
        "X-Title": "Briefly AI",
      },
      body: JSON.stringify({
        model,
        temperature: input.section ? 0.35 : 0.25,
        response_format: { type: "json_object" },
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
  } catch (error) {
    if (
      error instanceof DOMException &&
      (error.name === "TimeoutError" || error.name === "AbortError")
    ) {
      throw new AIServiceError(
        "The AI request timed out. Please retry.",
        504,
      );
    }

    throw new AIServiceError(
      "Unable to reach the AI provider. Please retry.",
      502,
    );
  }

  if (!response.ok) {
    if (response.status === 429) {
      throw new AIServiceError(
        "The AI provider is rate-limited. Please retry shortly.",
        429,
      );
    }

    if (response.status >= 500) {
      throw new AIServiceError(
        "The AI provider is temporarily unavailable. Please retry.",
        503,
      );
    }

    throw new AIServiceError(
      "The AI provider rejected the request. Please retry.",
      502,
    );
  }

  let payload: {
    choices?: Array<{ message?: { content?: string } }>;
  };

  try {
    payload = (await response.json()) as {
      choices?: Array<{ message?: { content?: string } }>;
    };
  } catch {
    throw new AIServiceError(
      "The AI provider returned an unreadable response. Please retry.",
      502,
    );
  }

  const content = payload.choices?.[0]?.message?.content;

  if (!content) {
    throw new AIServiceError(
      "The AI provider returned an empty response. Please retry.",
      502,
    );
  }

  const parsed = extractJson(content);
  const validated = briefPlanSchema.safeParse(parsed);

  if (!validated.success) {
    throw new AIServiceError(
      "The AI output did not match the Briefly AI schema. Please retry.",
      502,
    );
  }

  if (input.section && input.currentPlan) {
    return mergeRegeneratedSection(
      input.currentPlan,
      validated.data,
      input.section,
    );
  }

  return validated.data;
}
