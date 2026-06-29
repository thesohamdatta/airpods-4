# Issue 2: Hero Section

**Status:** `ready-for-agent`  
**Labels:** `feature`, `ready-for-agent`  
**Depends on:** Issue 1

## Description

Build the full-viewport hero section with the dancing person image backdrop, gradient scrim overlay, product name marquee lockup ("AirPods. Iconic. Now supersonic. AirPods 4"), "Buy" CTA button, and "Watch the film" link that triggers the video modal. Add the sticky local navigation bar that appears on scroll past the hero.

## Requirements

- Full-viewport hero (100vh) with responsive image from Apple CDN
- Gradient scrim overlay for text readability
- Marquee lockup with Apple-style typography hierarchy
- "Buy" CTA button with Apple-style styling and hover state
- "Watch the film" link with play-circle icon
- Film modal with video player
- Sticky local navigation bar ("Overview / Tech Specs / Compare" + Buy button)
- `StaggeredFadeIn` reveal on load
- Responsive at all breakpoints

## Acceptance Criteria

- Hero fills viewport on all screen sizes
- Local nav appears pinned at top when scrolled past hero
- Marquee lockup is centered on desktop, adjusted on mobile
- Film modal opens/closes with smooth transition
- "Buy" link points to Apple store
- All text is readable against the image backdrop
