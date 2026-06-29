# PRD: Apple AirPods 4 Product Page — Open-Source Implementation

**Status:** `ready-for-agent`  
**Date:** 2026-06-30  
**Labels:** `prd`, `ready-for-agent`

---

## Problem Statement

Apple's product pages set the industry standard for premium web experiences — cinematic scroll storytelling, glassmorphism, typographic precision, and motion design. There is no comprehensive open-source reference implementation that demonstrates this level of frontend craftsmanship in a reusable, well-architected form. Developers and designers lack a production-quality blueprint they can study, fork, and learn from.

## Solution

Build an open-source, pixel-perfect recreation of Apple's AirPods 4 product page (`/airpods-4/`) using Next.js 15+, Tailwind CSS, Framer Motion, GSAP ScrollTrigger, Lenis, and modern React patterns. The page must feel indistinguishable from Apple's own in layout, motion, typography, performance, and accessibility — without copying any proprietary assets unlawfully.

## User Stories

1. As a visitor, I want a full-viewport hero section with a video/image backdrop, product name, tagline, and CTA so that I immediately understand what product is being presented.
2. As a visitor, I want a sticky local navigation bar that appears on scroll so that I can quickly jump between sections.
3. As a visitor, I want the page to follow a consistent visual rhythm — dark sections alternating with light — so that the narrative feels paced and intentional.
4. As a visitor on mobile, I want the layout to adapt fluidly across all breakpoints (480px/734px/1068px/1440px) so that the experience feels native on any device.
5. As a visitor on ultrawide displays, I want content constrained to a max-width (1680px) with generous margins so that the page doesn't feel stretched.
6. As a visitor, I want a cinematic hero with a product video or image sequence, a gradient scrim overlay, and text that overlays the visual so that I get an immediate premium brand impression.
7. As a visitor, I want the hero to have a "marquee" lockup with the product name, tagline ("Iconic. Now supersonic."), and a "Buy" CTA so that the core value prop is clear.
8. As a visitor, I want the hero to support a film/video modal triggered from a "Watch the film" link so that I can see the product in action.
9. As a visitor, I want to see a "Get the highlights" section with horizontally scrollable media cards that auto-advance as I scroll so that I can discover key features naturally.
10. As a visitor, I want each media card to have a full-bleed image or video with overlaid caption text so that the feature is communicated visually.
11. As a visitor, I want dot navigation and play/pause controls for the gallery so that I can manually navigate and control auto-advance.
12. As a visitor, I want the H2 chip card to play a muted inline video animation so that I can see the chip highlight in motion.
13. As a visitor, I want a "Take a closer look" section with horizontally scrollable product photography in a bento/stonehenge layout so that I can examine the product from multiple angles.
14. As a visitor, I want images to be arranged with alternating single/double compositions so that the layout feels dynamic and editorial.
15. As a visitor, I want an AR "View in your space" link so that I can see the product in my environment (if supported).
16. As a visitor on mobile, I want the bento grid to collapse to single-column so that the layout remains usable on small screens.
17. As a visitor, I want a pinned scroll narrative where a hero image stays fixed while feature cards scroll over it so that the story unfolds cinematically.
18. As a visitor, I want five feature cards (H2 Chip, Voice Isolation, Acoustic Architecture, Adaptive EQ, FaceTime) to appear in sequence as I scroll so that I learn about each audio capability.
19. As a visitor, I want each feature card to have a supporting image/icon and descriptive text so that the feature is clearly communicated.
20. As a visitor, I want an ANC section with three feature cards (Adaptive Audio, Transparency mode, Conversation Awareness) that reveal progressively on scroll so that I understand the noise control options.
21. As a visitor, I want each ANC feature to have an icon and a description so that the differences between modes are clear.
22. As a visitor, I want a "Redesigned for comfort" section with annotated product images where scroll-driven "smart pin" lines connect callout text to specific parts of the AirPods so that I understand the design improvements.
23. As a visitor, I want pin annotations for: ear fit ("Physical fit-ness"), force sensor on stem, and IP54 water resistance so that three key wearability features are highlighted.
24. As a visitor, I want the pin lines to animate from zero to full length as I scroll so that the annotation feels responsive and engaging.
25. As a visitor, I want a battery section with an "echo text" headline animation (layered depth effect) so that the headline feels dimensional and premium.
26. As a visitor, I want three battery stat cards with gradient text values so that the numbers feel vibrant and important.
27. As a visitor, I want USB-C and wireless charging option cards so that I understand the charging ecosystem.
28. As a visitor, I want the charging case image to scale/move on scroll so that the product feels alive.
29. As a visitor, I want a "Seamless experience" section with a pink/magenta gradient background so that the section visually signals a new chapter.
30. As a visitor, I want an inline video showing the AirPods pairing animation so that I see the "magic" of instant connection.
31. As a visitor, I want four feature cards (Detection, Find My, Siri Interactions, Listen Together) that scroll into view so that I understand the ecosystem benefits.
32. As a visitor, I want the Siri card to have a special rainbow conic gradient background with gradient text so that it stands out as a hero feature.
33. As a visitor, I want an icon card section explaining why to buy from Apple so that I understand the purchasing benefits.
34. As a visitor, I want each card to expand into a modal overlay with more detail so that I can dive deeper into each benefit.
35. As a visitor, I want cards in a horizontal scroll gallery with previous/next navigation so that I can browse through them.
36. As a visitor, I want a side-by-side comparison of AirPods 4 vs AirPods 4 with ANC so that I can choose the right model.
37. As a visitor, I want each variant to show: image, positioning tagline, price, CTA, and feature comparisons so that I have all information at a glance.
38. As a visitor, I want feature comparisons to include icons and formatted text so that the comparison is scannable.
39. As a visitor, I want a comprehensive footer with footnotes, breadcrumbs, multi-column directory navigation, and legal links so that I can find additional information and policies.
40. As a visitor, I want all section entries to use staggered fade-in-up animations so that content reveals smoothly on scroll.
41. As a visitor, I want scroll-linked animations to feel natural (Apple-like cubic-bezier easing) so that the experience is premium.
42. As a visitor, I want smooth scrolling via Lenis so that the page scroll is buttery smooth.
43. As a visitor who prefers reduced motion, I want all animations to degrade gracefully so that I can use the page without discomfort.
44. As a visitor, I want images to be lazy-loaded with responsive srcsets (WebP/AVIF) so that pages load fast.
45. As a visitor, I want the hero image to be priority-loaded so that the above-fold content renders immediately.
46. As a visitor, I want zero layout shifts during page load so that the experience is stable.
47. As a keyboard user, I want all interactive elements to be focusable and operable so that I can navigate without a mouse.
48. As a screen reader user, I want semantic HTML, ARIA labels, and proper heading hierarchy so that I can understand the page structure.
49. As a user with vestibular disorders, I want all motion to respect `prefers-reduced-motion` so that the page is safe to use.

## Implementation Decisions

### Architecture
- Next.js 15 App Router with Turbopack for development
- Strict TypeScript throughout
- Tailwind CSS for utility-first styling, extended with Apple's design tokens
- Shared layout in `app/layout.tsx` (Lenis provider, font loading, metadata)

### Animation Framework Split
- **GSAP ScrollTrigger** for pinned scroll narratives, image sequences, and complex timeline-based animations (Audio Performance, Wearability pin lines, Battery echo text)
- **Framer Motion** for scroll-triggered reveal animations (`whileInView`, `useScroll`, `useTransform`), staggered card entries, and micro-interactions (hover states, modal transitions)
- **Lenis** for smooth scrolling, integrated with GSAP's ticker for sync

### Font Strategy
- Inter variable font (via `next/font`) as the primary SF Pro alternative
- System font stack fallback

### Typography Tokens
- Scale mapping: 12px (caption) → 17px (body) → 20px (subhead) → 28px (card headline) → 48–56px (section headline)
- Font weights: 400, 600, 700
- Apple-style letter-spacing and line-height per size

### Animation Timing
- Apple ease-out: `cubic-bezier(0.32, 0.08, 0.24, 1)`
- Standard reveal: `cubic-bezier(0.23, 1, 0.32, 1)`
- Spring entry: `cubic-bezier(0.34, 1.56, 0.64, 1)`

### Image Strategy
- Apple CDN for publicly available product imagery
- Next.js `Image` component with `remotePatterns`
- Responsive sizes at all breakpoints
- WebP/AVIF formats

### Glassmorphism
- 4-layer: backdrop-filter blur + saturate, surface tint, catch-light border, soft shadow with inset highlight

### Modules
- `components/ui/` — GlassCard, IconCard, TileButton, Modal
- `components/sections/` — all major page sections
- `components/layout/` — Navbar, LocalNav, SmoothScrollProvider, Footer
- `components/animation/` — StaggeredFadeIn, ScrollReveal, PinLine, EchoText
- `hooks/` — useReducedMotion, useScrollProgress, useMediaQuery
- `lib/` — easing constants, breakpoints, typography tokens
- `styles/` — globals.css with Apple design tokens

### Accessibility
- `MotionConfig reducedMotion="user"` wrapper
- Lenis disabled on reduced motion
- Semantic HTML throughout
- ARIA on interactive elements

## Testing Decisions

- No unit tests for purely presentational components
- Accessibility audits (axe-core via Lighthouse)
- Performance budgets (Lighthouse thresholds)
- Cross-browser manual testing
- Visual regression deferred to future phase

## Out of Scope

- Server-side rendering of animation state
- Actual e-commerce checkout
- 3D product viewer (R3F deferred)
- Image sequence canvas animations
- Multi-language/i18n
- Dark mode toggle
- Service worker / offline

## Further Notes

- Imagery loaded from Apple's public CDN at `https://www.apple.com/v/airpods-4/g/images/`
- Each issue should deliver a visually complete section (vertical slice)
- Repo at `D:\PROJECTS\web`
