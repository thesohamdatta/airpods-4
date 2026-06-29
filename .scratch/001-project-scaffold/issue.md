# Issue 1: Project Scaffold

**Status:** `ready-for-agent`  
**Labels:** `foundation`, `ready-for-agent`  
**Depends on:** None

## Description

Initialize the Next.js project with TypeScript, Tailwind CSS, install all dependencies, configure ESLint/Prettier, set up the font loading, create the app layout with Lenis provider, and establish the design token system in globals.css.

## Requirements

- Next.js 15 App Router with Turbopack
- TypeScript strict mode
- Tailwind CSS v4 with custom design tokens
- Inter variable font via `next/font`
- Lenis smooth scroll provider
- GSAP + ScrollTrigger registered
- Framer Motion installed
- ESLint + Prettier config
- `next.config.ts` with Apple CDN remote patterns
- `globals.css` with Apple design tokens (colors, spacing, typography, glassmorphism utilities)
- `lib/` directory with easing constants, breakpoints, typography scale
- `hooks/` directory with useReducedMotion stub
- `components/` directory structure
- `.gitignore`

## Acceptance Criteria

- `npm run dev` starts the dev server without errors
- Page renders with Inter font loaded
- Lenis is active (smooth scrolling works)
- Design tokens are available as CSS custom properties
- Build succeeds with `npm run build`
- No TypeScript errors
- No ESLint errors
