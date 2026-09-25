# AGENTS.md — Briefly AI

This file is the **source of truth** for AI coding agents working in this repository.

All instructions below are mandatory unless the repository owner explicitly overrides them. For UI/UX work, the **Universal Steve Jobs & Apple HIG UI/UX Generation Mandate** in Section 13 is a critical specification and takes precedence over generic styling decisions. Project-specific product scope, architecture, and the Briefly AI color palette remain authoritative.

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

## 5. Briefly AI Visual Identity

The master visual specification is defined in Section 13.

Briefly AI-specific identity:

- **Primary:** `#0B0D12` — Obsidian Black
- **Secondary:** `#F5F5F7` — Soft Apple White
- **Accent:** `#6E5CFF` — Electric Violet
- Use only these three foundational palette roles.
- Use accent sparingly for CTA, active/focus states, AI processing feedback, and micro-interactions.
- Do not introduce random brand colors.
- Typography is restricted to **Geist Sans, Inter, or Plus Jakarta Sans**.

## 6. Responsive Rules

- Mobile quality must equal desktop quality.
- Preserve information hierarchy and section intent across breakpoints.
- Prevent horizontal overflow.
- Ensure keyboard navigation and visible focus states.
- Test common mobile, tablet, laptop, and wide-desktop widths.
- Section 13 Module 8 defines the mandatory mobile layout and carousel behavior.
- Section 13 Module 9 defines minimum interactive hit areas.

## 7. UX Rules

- The primary action must be obvious.
- Users should understand what Briefly AI does without excessive scrolling.
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
- Use animation libraries intentionally and only where required by the design mandate or experience.
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
9. Parse affected component files against Section 13 before considering UI work complete.
10. If a UI element violates a Section 13 restriction, refactor it before output.

---

# 13. DESIGN GUIDELINE: UNIVERSAL STEVE JOBS & APPLE HIG UI/UX GENERATION MANDATE

**This section is mandatory for every Briefly AI UI/UX implementation.**

Premium SaaS Design, Premium Minimalism, Apple-esque Aesthetics, featuring a Monumental Hero Shot + Bold Typography, Glassmorphism Effect, Scroll-Driven Storytelling, Perfect Contrast, and Generous White Space.

## MODULE 1: THE LIQUID-GLASS MATRIX (CRITICAL SPECIFICATION)

When instructed to create containers, cards, modals, or trays, replicate the physical precision of the "Strawberry Fields" iteration process. Never use flat, dull, standard transparent glass. Apply this exact Tailwind configuration:

- **Background Density:** `bg-white/[0.04]` or `bg-black/[0.05]` exclusively.
- **Saturate Multiplier:** Bind `backdrop-blur-xl` together with `backdrop-saturate-[180%]` or `backdrop-saturate-[200%]`.
- **Dual-Layer Borders:** Hairline `1px` outer stroke with strict muted opacities: `border border-white/[0.08]` or `border-white/[0.05]`. The top edge catches structural light highlights; the bottom edge falls into deep context shadows.
- **Shadow Drop:** `shadow-[0_8px_32px_0_rgba(0,0,0,0.37)]`.
- **Masking & Noise Layering:** Inject a micro-grain/noise transparent overlay texture at an operational opacity under 3% as a container mask.

## MODULE 2: UNIVERSAL CONTEXT ADAPTATION MATRIX

Contextually adapt this design language depending on the engineering task target while maintaining case-agnostic utility:

1. **Landing Page Context:** Restrict full-bleed liquid glass to sticky header navigation bars and floating CTA layers. Use monumental hero shots, crisp bold typography, and smooth scroll-driven storytelling blocks.
2. **Dashboard Context:** Apply liquid-glass architecture to sidebars, data-widget cards, global command inputs, and filtering control drawers. Data points, logic paths, and internal charts must retain absolute clarity.
3. **Chatbot Interface Context:** Apply the liquid-glass parameters to conversational message bubbles and the terminal text-input dock. Ground the layout using fine-line avatar glyphs, micro-animated typing/status sequences, and clean inline code snippet boxes.

## MODULE 3: INTERACTIVITY & ASSET COMPLIANCE

- **Sourcing Restrictions:** Use only copyright-free, minimalist-luxury assets.
  - Photography: Unsplash, Pexels, Pixabay.
  - Graphics & Heroes: unDraw, ManyPixel Gallery, minimal design style.
  - UI Elements, Features & Bento Blocks: SVG Repo, Iconoir, The Noun Project.
- **SVG Structure:** All generated or embedded vector elements must use a stroke width of `1px` to `1.5px`. Colors must dynamically trace global CSS variables.
- **Storytelling Delivery:** Content structural updates must use scroll-driven storytelling structures to retain premium narrative flow.

## MODULE 4: PREMIUM TYPOGRAPHY CONSTRAINTS

- **Permitted Font System:** Strictly use only `Geist Sans`, `Inter`, or `Plus Jakarta Sans`.
- **Styling Rules:** Enforce extreme size contrasts, tight tracking using `tracking-tight` or `tracking-tighter`, and sophisticated layered use of text opacity.

## MODULE 5: ASYMMETRIC GRID & LAYOUT ARCHITECTURES

- **Layout for Unsorted Grids:** For collections containing more than 3 cards, build an asymmetric, varied Bento-Grid layout within clean Apple-esque bounds. Every separate block requires at least one visual anchor: a content-relevant SVG, accent-colored text, a premium supporting luxury image, a looping short video clip, or dynamic data visualization/statistical chart.
- **Layout for Sorted Grids:** Ordered components must slide through horizontal carousels supporting native swipe gestures.
  - **Controls:** Semi-transparent circular buttons containing fine white/gray chevron icons.
  - **Indicators:** Semi-transparent pagination dots centered around a stretched active capsule progress bar.
  - **Animation Engines:** Use Embla Carousel, Swiper.js, or Framer Motion/Motion for smooth indicator tracking.

## MODULE 6: ADVANCED STATE DEEP-DIVES & INTERACTIVE CONTROLS

- **Interactive Exploded View Showcase:** For deep feature breakdowns, implement a multi-layered vertical accordion menu on the left paired with a real-time synchronized Exploded View Animation panel on the right. Manual clicks, scrolls, or separated vertical chevrons must trigger immediate visual transformations such as layer scale changes, camera zoom changes, or isolated internal structural meshes.
- **Segmented Control Switcher:** Linear navigation arrays or state selectors must use a capsule-shaped horizontal layout backed by a dark semi-transparent bar.
- **Sliding Pill Indicator:** The selected state background must be a solid white capsule that slides smoothly between targets using Framer Motion `layoutId`. Instant color blinking or jarring flashing is prohibited.
- **Color Restriction:** Palette logic is strictly limited to three foundational parameters: `Primary`, `Secondary`, and `Accent`. Briefly AI's exact values are defined in Section 5.
- **SEO Mandate:** Integrate layout copy that naturally maps the five project keywords in Section 10.

## MODULE 7: PREMIUM NARRATIVE PACING & EXPLORATORY GEOMETRY (APPLE SECRETS)

Reject rigid, predictable SaaS template grids. Balance mathematical structure with exploratory pacing.

- **The Marketing Moment Mandate:** Integrate at least one full-screen, high-impact transitional sequence triggered on initial viewport mount or a key scroll threshold. This block prioritizes visual value delivery, smooth animation, and emotional immersion over dense informational copy.
- **The Text-to-Motion Buffer Rule:** Do not place back-to-back heavy informational text or data blocks. Buffer dense copy with a high-end looping micro-video asset or smooth scroll-linked asset movement.
- **Exploratory Masonry Layouts:** For non-sequential media or content groups, use deliberate asymmetric spacing, irregular masonry offsets, and varied padding gutters. Elements should feel rhythmically distributed around focal points while retaining strict underlying grid integrity.

## MODULE 8: MOBILE-FRIENDLY & SCROLL BOUND PARITY (WITH PARITY CONTROL)

Do not stack layout blocks into an endless vertical column that forces a mobile user to scroll more than approximately 1.5 screen viewports to finish a single layout section. Keep sections self-contained and preserve desktop intent.

- **Mobile Horizontal Carousel Rule:** If a desktop layout contains a Bento-Grid, multi-column feature stack, or sorted grid with more than 3 cards, do not default to `grid-cols-1`. On mobile, use a single horizontal touch/swipe row such as `flex flex-row overflow-x-auto snap-x scrollbar-none`.
- **Short Grid Exception (≤3 items):** For 3 or fewer items, do not use a horizontal carousel. Build a compact static mobile layout that fits within the screen boundaries, using a tight split grid such as `grid-cols-2`, a scaled `flex-row`, or a heavily condensed layout.
- **Strict Control Parity Enforcer:** Mobile carousels must retain the same navigation controls and indicators defined in Module 5. Controls must remain visible, layered cleanly, and functional alongside native swipe.
- **Micro-Accordion Rule:** Long informational copy blocks must use compact tap-to-expand patterns on mobile to reduce vertical space.
- **Asset Scaling Rule:** Heavy illustrations or SVGs that consume excessive mobile height must be scaled down by approximately 50% or hidden with patterns such as `hidden md:block` if they push core context out of the first fold.
- **Touch Optimization:** Interactive controls must use safe touch targets with at least `min-h-[44px]`.

## MODULE 9: APPLE HIG MANDATORY CORE PRINCIPLES

Enforce the fundamental pillars of Apple Human Interface Guidelines across all layouts:

- **Pillar 1 — Clarity through Hierarchy:** Use size contrast, stark weight distribution, and varying opacities so critical interactive content takes precedence over structural containment.
- **Pillar 2 — Deference via Elimination:** Remove redundant drop-shadow strokes, outer borders, and heavy dividers that do not actively contribute to orientation. The UI must defer to content, typography, and visual components.
- **Pillar 3 — Visual App Depth:** Build a multi-layered coordinate system: background wallpaper, high-vibrancy Liquid-Glass layers, foreground typography, and floating structural controls.
- **System Integrity & Access Controls:** Do not customize native interaction inputs into unrecognizable forms. Search inputs, destructive actions, dropdowns, and tab toggles must preserve recognizable system signifiers.
- **Rigid 44×44 Target Constraint:** All interactive hit areas, clickable text links, chevron arrows, menu icons, and navigation buttons must be at least `min-w-[44px] min-h-[44px]`.

## MODULE 10: DESIGN PSYCHOLOGY & PREMIUM PERCEPTION MANDATES

Apply these frameworks to reinforce professional trust, conversion pacing, and perceived quality:

1. **Halo Effect Optimization:** Treat the unscrolled upper fold and Hero Section as critical. It must be immaculate, clean, and professional so first impressions positively frame subsequent interaction.
2. **Cognitive Fluency & Energy Conservation:** Eliminate design chaos, crowded text containers, and competing elements. Build layouts that require minimal mental friction and create a sense of calm, control, and professional safety.
3. **Peak-End Rule Implementation:** Avoid flat, lifeless experiences. Add deliberate micro-interactions, subtle hover color translations, and smooth feedback triggers to create memorable peaks of craftsmanship.

## COGNITIVE EXECUTION INSTRUCTIONS FOR THE AI AGENT

1. Parse all affected component files against this mandate before compiling.
2. If any element drops a restriction—for example generic blur without saturate modifiers, generic tracking, missing mobile carousel controls, or hit targets smaller than 44px—refactor the node before considering the task complete.
3. Keep code output structural and modular. Do not add narrative comment bloat inside implementation code.
4. Treat these modules as mandatory constraints, not optional inspiration.
5. When two visual rules appear to conflict, preserve usability, accessibility, and product function first, then satisfy the mandate with the smallest coherent adaptation.
