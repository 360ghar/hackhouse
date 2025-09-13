# Repository Guidelines

## Project Structure & Module Organization
- Root React + TypeScript app powered by Vite.
- Key paths:
  - `components/` — UI sections and hooks (PascalCase for components, e.g., `HeroSection.tsx`; camelCase for hooks, e.g., `usePointerInfo.ts`).
  - `App.tsx` — composition of sections; page layout.
  - `index.tsx` — entry; mounts `App` with `HelmetProvider`.
  - `public/` — static assets, icons, SEO files; served as‑is.
  - `dist/` — build output (do not edit by hand).
- Import alias `@` maps to project root (Vite `resolve.alias`).

## Build, Test, and Development Commands
- `npm install` — install dependencies.
- `npm run dev` — start Vite dev server at `http://localhost:5173`.
- `npm run build` — production build to `dist/` (splits vendor chunk).
- `npm run preview` — serve the production build locally.

## Coding Style & Naming Conventions
- Language: TypeScript + React function components (`React.FC`).
- Indentation: 2 spaces; keep lines concise; prefer single quotes and semicolons.
- File naming: `PascalCase.tsx` for components; `camelCase.ts` for hooks/utilities beginning with `use*`.
- Styling: Tailwind via CDN in `index.html` and small CSS utilities; avoid adding heavy CSS tooling without discussion.
- Imports: relative paths or `@/components/...` alias; group and order consistently.

## Testing Guidelines
- No test runner is configured yet. If adding tests, prefer Vitest + React Testing Library.
- Place tests next to components or under `components/__tests__/`.
- Naming: `*.test.tsx` | `*.test.ts`. Example: `HeroSection.test.tsx`.

## Commit & Pull Request Guidelines
- Commits: imperative present tense, concise subject, optional body.
  - Example: `Add application modal and integrate with CTA`
- PRs: include purpose, summary of changes, screenshots (UI), and any breaking changes; reference issues (e.g., `Closes #12`).
- Keep diffs focused; avoid unrelated refactors or reformatting.

## Security & Configuration Tips
- Environment: Vite loads env via `loadEnv`. Use a local `.env`/`.env.local` for secrets.
- Keys: `GEMINI_API_KEY` is read in `vite.config.ts` and defined at build time. Never commit secrets; avoid exposing sensitive values in `public/`.
- Preserve SEO meta and JSON‑LD blocks in `index.html` unless intentionally updating.

