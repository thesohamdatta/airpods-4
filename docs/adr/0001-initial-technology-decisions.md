# ADR 1: Initial Technology Decisions

**Status:** Accepted  
**Date:** 2026-06-30  

## Context

Need to decide on the technology stack for the AirPods 4 product page implementation. The page must match Apple's production quality in layout, motion, typography, performance, and accessibility.

## Decision

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS with custom design tokens
- **Animation:** GSAP ScrollTrigger for scroll narratives, Framer Motion for UI state/entry animations
- **Smooth Scroll:** Lenis with GSAP ticker integration
- **Font:** Inter variable font via `next/font` (SF Pro alternative)
- **Images:** Next.js Image component with Apple CDN remote patterns
- **Package Manager:** npm

## Consequences

- GSAP + Framer Motion coexistence requires clear separation of concerns: GSAP for scroll-linked timelines, Framer for entry/exit animations
- Lenis integration with GSAP requires custom ticker sync
- No 3D (R3F) in this phase — deferred to Phase 2
- No i18n, dark mode toggle, or SSR animation state
