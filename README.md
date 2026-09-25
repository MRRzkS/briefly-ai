# Briefly AI

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

- Generate a structured project brief from a rough software idea
- Generate functional requirements
- Generate user stories
- Generate acceptance criteria
- Generate implementation task breakdowns
- Regenerate individual sections without rebuilding the entire result
- Copy generated sections
- Export output as Markdown
- Optional local history using `localStorage`
- Structured AI responses validated before rendering
- Clear loading, empty, success, and error states
- Responsive, accessible, production-oriented UI

## Tech Stack

- **Framework:** Next.js
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **AI:** OpenRouter API and/or Google Gemini
- **Validation:** Zod
- **Persistence:** Browser `localStorage` only
- **Deployment:** Vercel

## Architecture

```text
User Input
   ↓
Next.js UI
   ↓
Server Action / API Route
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
npm install
npm run dev
```

Create a local environment file when AI integration is added:

```bash
cp .env.example .env.local
```

Never commit secrets or API keys.

## Project Status

🚧 In development.

## License

This project is licensed under the [MIT License](./LICENSE).
