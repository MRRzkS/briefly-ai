# Briefly AI

[![Production QA](https://github.com/MRRzkS/briefly-ai/actions/workflows/production-qa.yml/badge.svg)](https://github.com/MRRzkS/briefly-ai/actions/workflows/production-qa.yml)

> **Turn an idea into a structured software plan.**

Briefly AI is a lightweight AI-powered SaaS that transforms rough software ideas into structured project briefs, functional requirements, user stories, acceptance criteria, and task breakdowns using structured AI output.

## Overview

Briefly AI is designed as a focused, stateless SaaS prototype for a **Full-Stack Software Engineering + Applied AI** portfolio. The product intentionally avoids a traditional database for its MVP: generation happens on demand, while optional browser-side persistence can be handled with `localStorage`.

### Product Flow

```text
Idea
  ↓
Project Brief
  ↓
Functional Requirements
  ↓
User Stories
  ↓
Acceptance Criteria
  ↓
Task Breakdown
```

## Core Features

- Premium Apple-esque landing page
- Generator workspace at `/generate`
- Generate a structured project brief from a rough software idea
- Generate functional requirements
- Generate user stories
- Generate acceptance criteria
- Generate implementation task breakdowns
- Regenerate individual sections
- Copy the active generated artifact
- Export the complete plan as Markdown
- Local draft + recent plan history using `localStorage`
- Structured AI responses validated with Zod before rendering
- Clear loading, empty, success, and provider error states
- Responsive desktop/mobile workspace with Compose / Output parity

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI:** OpenRouter API (provider-agnostic model selection)
- **Validation:** Zod
- **Persistence:** Browser `localStorage` only
- **Deployment:** Vercel

## Architecture

```text
User Input
   ↓
Next.js UI
   ↓
Server-side API Route
   ↓
AI Provider
   ↓
Structured JSON
   ↓
Zod Validation
   ↓
Rendered Result
```

The MVP does **not** require authentication or a database. AI provider keys must remain server-side and must never be exposed to the browser.

## Design Direction

Briefly AI uses a premium, minimal, developer-focused interface with generous whitespace, strong typography, restrained motion, and an Apple-esque visual language.

### Color Palette

| Role | Color | Name |
| --- | --- | --- |
| Primary | `#0B0D12` | Obsidian Black |
| Secondary | `#F5F5F7` | Soft Apple White |
| Accent | `#6E5CFF` | Electric Violet |

The violet accent should be used selectively for primary actions, active states, AI-processing feedback, focus states, and subtle micro-interactions.

## SEO Keywords

- AI Project Brief Generator
- Software Requirements Generator
- AI User Story Generator
- AI Product Requirements Generator
- Project Planning AI

Primary keyword: **AI Project Brief Generator**

## Local Development

```bash
git clone https://github.com/MRRzkS/briefly-ai.git
cd briefly-ai
npm ci
npm run dev
```

Create the local environment file:

```bash
cp .env.example .env.local
```

Configure OpenRouter:

```env
OPENROUTER_API_KEY=your_key
OPENROUTER_MODEL=google/gemini-2.5-flash
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

The provider request runs server-side through `/api/generate`; API keys are never sent to the browser. Change `OPENROUTER_MODEL` without changing the workspace UI or route contract.

Never commit secrets or API keys.

## Production QA

GitHub Actions validates every push to `main` with:

- Reproducible `npm ci` install from `package-lock.json`
- TypeScript type checking
- ESLint
- Optimized Next.js production build
- Production server smoke tests for `/` and `/generate`
- API edge tests for invalid JSON/input, oversized payloads, and rate limiting

The generation API also includes structured output validation, request-size limits, best-effort per-IP rate limiting, safe provider/timeout error mapping, and true section-only regeneration.

## Project Status

🚧 Production-ready codebase; deployment configuration remains environment-specific.

- ✅ Phase 1: Premium responsive landing page
- ✅ Phase 2: Generator workspace + structured OpenRouter integration
- ✅ Phase 3: Production hardening, reproducible CI, build and smoke validation
- ⏳ Phase 4: Vercel production deployment + production environment variables

## License

This project is licensed under the [MIT License](./LICENSE).
