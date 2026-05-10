# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

HackHouse Gurgaon — a static landing page for a co-living space targeting founders/developers. Dark-themed, glassmorphism design. No backend; the application form simulates submission with `setTimeout`.

## Commands

```sh
npm run dev       # Start dev server on port 8080
npm run build     # Production build → dist/
npm run build:dev # Development-mode build
npm run lint      # ESLint (flat config)
npm run preview   # Preview production build
```

No test framework is configured. There are no test scripts, test files, or test runners.

## Architecture

**SPA with React Router** — 3 routes: `/` (landing), `/blog` (placeholder), `*` (404). All state is local; TanStack React Query is installed but barely used.

**Landing page composition** (`src/pages/Index.tsx`): Sections compose top-to-bottom as a single scrollable page. `isModalOpen` state in `Index` is passed as `onApplyClick` callback to Header, Hero, ApplicationProcess, and FinalCTA, which all trigger the same `ApplicationModal`.

**Key patterns:**
- `AnimatedSection` wraps content with IntersectionObserver-based scroll-reveal animations (5 types: fade-up, fade-in, scale-in, slide-left, slide-right, with configurable delay)
- `cn()` utility (`clsx` + `tailwind-merge`) in `src/lib/utils.ts` — use this for all conditional class composition
- Application form uses `react-hook-form` + `zod` schema validation with `@hookform/resolvers/zod`

## Styling

- **Tailwind CSS 3** with `tailwindcss-animate` and `@tailwindcss/typography` plugins
- **Dark theme only** — CSS custom properties (HSL) in `src/index.css` define the color palette
- **Design tokens** in `tailwind.config.ts`: custom colors (`primary` purple/violet, `accent` amber/gold, `glass`, `glow`), fonts (`heading` = Space Grotesk, `body` = Inter), container max 1400px
- **Reusable CSS classes**: `.glass` (glassmorphism panels), `.text-gradient` (gradient text), `.glow-primary`/`.glow-accent` (colored shadows), `.grid-pattern`/`.noise-overlay` (decorative backgrounds)
- **Custom animations**: float, pulseGlow, fadeUp, fadeIn, scaleIn, slideLeft, slideRight, countUp, plus `.stagger-1` through `.stagger-5` delay utilities

## Path Aliases

`@/*` → `./src/*` (configured in both `vite.config.ts` and `tsconfig.json`)

## Component Libraries

- **shadcn/ui** — 45+ components in `src/components/ui/`. Add new ones via the shadcn CLI. Config in `components.json`.
- **Lucide React** — icon library used throughout all landing components

## TypeScript

Strict mode is **disabled** (`strict: false`, `noImplicitAny: false`, `strictNullChecks: false` in `tsconfig.app.json`). Keep this in mind — type errors may not surface at compile time.

## SEO

`index.html` contains extensive structured data (JSON-LD), Open Graph tags, and meta tags. `public/robots.txt` allows all bots including AI crawlers. `public/sitemap.xml` references `hackhouse.in`. Any page additions should update the sitemap and structured data accordingly.
