# AGENTS.md — Shared Working Contract

> **Note for Claude Code users:** `docs/CLAUDE.md` is the Claude-specific entry point with commands and file map. This file is the tool-agnostic contract that every coding agent (Claude Code, Codex, Gemini agents, Cursor, etc.) must read before working on this repo.

## Before Any Work

Read these three files before making any change:

1. `docs/CLAUDE.md` — project orientation, commands, file map
2. `docs/DECISIONS.md` — locked decisions; do not re-litigate
3. `docs/CONTENT.md` — canonical event facts

**Single source of truth for all content:** `src/data/event.ts`. Never hardcode facts (names, dates, distances, prize pools, URLs) in components — always import from `event.ts`.

## Conventions

### Architecture

- Astro components are static by default. Add interactivity ONLY via React islands with explicit `client:` directives (`client:load`, `client:idle`, `client:visible`).
- Keep content-as-data: every user-facing string that could vary by language lives in `src/data/event.ts`. This makes a future Bangla toggle a data swap, not a component rewrite.
- One page: `src/pages/index.astro`. Don't add routes without explicit approval.

### Styling

- Use CSS custom properties (design tokens in `global.css` `:root`) — never hardcode color hex values or pixel sizes in components.
- Self-hosted fonts only (`@fontsource/oswald`, `@fontsource/inter`). No CDN font URLs.
- Tailwind is available but prefer the CSS token system for design-sensitive values.

### Accessibility & Performance

- Honor `prefers-reduced-motion`: all animations must have a static fallback.
- Maintain semantic landmarks (`<header>`, `<nav>`, `<section>`, `<footer>`), meaningful `alt` text, and `focus-visible` styles.
- Target Lighthouse ≥ 95 (performance, accessibility, best practices, SEO).
- Use `astro:assets` for image imports that go through the Astro image pipeline.

## Skill & Tool Use

Before creating or editing a file of a known type (React island, Astro component, CSS, SVG animation), read the relevant skill documentation if available.

Before finishing any task:
1. Run `npm run build` and confirm zero errors.
2. If gstack is available, run the project review and report results.
3. Report any lint warnings.

## Scope Discipline

Change only what the task explicitly names. Do not:

- Refactor adjacent code.
- Add error handling for impossible scenarios.
- Abstract single-use code.
- "Improve" formatting or comments in untouched files.

This repo had prior over-engineering that was a real problem. One signature idea, executed well — the rest clean. Three similar lines is better than a premature abstraction.

## Process

- After each major step, output `✅ [step name done]`.
- At the end of a task, output a full file-change summary (created / edited / deleted).
- Confirm that no content was invented and `src/data/event.ts` was not modified.
- Update `docs/PROGRESSION.md` when shipping a change.
- **Never** deploy, push to git, or delete files without explicit human approval.
- If a stop condition is hit (ambiguous path, unfamiliar file, unresolvable error in 2 attempts), pause and ask.

## Stop Conditions — Pause and Ask When

- A file would be deleted.
- Two valid implementation paths affect architecture.
- An error cannot be resolved in 2 attempts.
- A change requires touching files outside the task's named scope.
- A doc would require asserting a fact not present in `event.ts` or prior decisions.
