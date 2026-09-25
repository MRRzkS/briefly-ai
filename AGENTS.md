# AGENTS.md — Briefly AI

This file is the source of truth for AI coding agents working in this repository.

## 1. Product Mission

Build **Briefly AI**, a lightweight AI-powered SaaS that turns a rough software idea into a structured software plan:

```text
Idea → Project Brief → Requirements → User Stories → Acceptance Criteria → Tasks
```

The project exists primarily as a portfolio-quality demonstration of **Full-Stack Software Engineering + Applied AI Engineering**.

## 2. MVP Scope

Implement only the core product experience:

- Idea input
- AI-generated Project Brief
- Functional Requirements
- User Stories
- Acceptance Criteria
- Task Breakdown
- Per-section regeneration
- Copy actions
- Markdown export
- Optional local history through `localStorage`
- Robust loading, empty, validation, rate-limit, and error states

Do not add product scope without a clear reason.

## 3. Architecture Rules

- Use **Next.js + TypeScript**.
- Use **Tailwind CSS** for styling.
- Use **Zod** to validate structured AI output.
- Use **OpenRouter API and/or Google Gemini** through server-side code only.
- Never expose provider API keys to client-side code.
- The MVP must work **without a database**.
- Do not add Prisma, Supabase DB, PostgreSQL, Firebase DB, or another database unless explicitly requested.
- Browser persistence, when needed, should use `localStorage`.
- Prefer Server Components by default; use Client Components only where interaction requires them.
- Keep AI-provider logic isolated so providers can be swapped without rewriting the UI.
- Validate all AI output before rendering.
- Fail gracefully when the model returns malformed or incomplete data.

## 4. Suggested Structured Output

The AI response should map to a schema similar to:

```ts
{
  projectBrief: string;
  functionalRequirements: string[];
  userStories: Array<{
    role: string;
    goal: string;
    benefit: string;
  }>;
  acceptanceCriteria: string[];
  tasks: Array<{
    title: string;
    description: string;
  }>;
}
```

The exact schema may evolve, but it must remain typed, deterministic enough for UI rendering, and validated with Zod.

## 5. Visual System

Style: **Premium SaaS + Premium Minimalism + Apple-esque aesthetics**.

Use:

- Monumental hero with bold typography
- Generous whitespace
- Excellent contrast
- Restrained, meaningful animation
- Premium typography using only **Geist Sans, Inter, or Plus Jakarta Sans**
- Tight letter spacing for large headings
- Layered text opacity for hierarchy
- Subtle Apple-style liquid-glass surfaces where appropriate
- Thin 1px low-opacity borders
- Smooth shadows, never harsh decorative effects
- Minimal noise and visual clutter

### Required Palette

- Primary: `#0B0D12` — Obsidian Black
- Secondary: `#F5F5F7` — Soft Apple White
- Accent: `#6E5CFF` — Electric Violet

Use accent sparingly for CTA, active/focus states, AI processing, and micro-interactions.

Avoid random additional brand colors.

## 6. Responsive Rules

- Mobile quality must equal desktop quality.
- Do not solve responsive layouts by blindly stacking every desktop block into an excessively long column.
- Preserve information hierarchy and section intent across breakpoints.
- Prevent horizontal overflow.
- Interactive targets must be comfortable on touch devices.
- Test at common mobile, tablet, laptop, and wide-desktop widths.
- Ensure keyboard navigation and visible focus states.

## 7. UX Rules

- The primary action must be obvious.
- Users should understand what Briefly AI does without scrolling extensively.
- Generated content must be easy to scan.
- Every generation action needs visible progress feedback.
- Regeneration must identify which section is being regenerated.
- Destructive actions, if introduced, require confirmation.
- Do not fabricate saved state: if data only exists locally, communicate that accurately.
- Never imply cloud sync, accounts, or permanent storage unless those features actually exist.

## 8. Engineering Quality

Before considering a task complete:

- Run linting.
- Run type checking.
- Run the production build.
- Fix console errors and warnings caused by the implementation.
- Check responsive behavior.
- Check keyboard accessibility.
- Check loading/error states.
- Avoid unused dependencies.
- Avoid premature abstractions.
- Prefer small reusable components with clear ownership.
- Keep code readable enough to discuss in a technical interview.

## 9. Performance

- Optimize for Core Web Vitals.
- Avoid unnecessary client-side JavaScript.
- Lazy-load non-critical heavy modules.
- Avoid heavy animation libraries unless they materially improve the experience.
- Do not block initial rendering on AI-related code.
- Keep dependencies intentional.

## 10. SEO

Target these terms naturally, without keyword stuffing:

1. AI Project Brief Generator
2. Software Requirements Generator
3. AI User Story Generator
4. AI Product Requirements Generator
5. Project Planning AI

Primary keyword: **AI Project Brief Generator**.

Use meaningful metadata, semantic HTML, Open Graph metadata, and accessible heading structure.

## 11. Security

- Never commit secrets.
- Keep API calls requiring credentials server-side.
- Validate and sanitize user-controlled input where relevant.
- Add reasonable input-length constraints.
- Handle provider failures and rate limits.
- Do not log secrets or full sensitive prompts in production.

## 12. Agent Working Style

When modifying this project:

1. Inspect the existing implementation before changing it.
2. Preserve working behavior unless the task explicitly requires a change.
3. Prefer the smallest coherent change that fully solves the task.
4. Do not silently change product copy, palette, architecture, or scope.
5. Reuse existing components and conventions before adding new ones.
6. If a task exposes an adjacent bug directly caused by the same area, fix it when safe.
7. Keep documentation aligned with actual behavior.
8. Never claim a feature is complete without validating the relevant build/runtime behavior.
