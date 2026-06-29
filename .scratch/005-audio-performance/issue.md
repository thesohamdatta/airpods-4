# Issue 5: Audio Performance (Scroll Storytelling)

**Status:** `ready-for-agent`  
**Labels:** `feature`, `ready-for-agent`  
**Depends on:** Issue 1

## Description

Build the "Audio performance" pinned scroll narrative with the dancer hero image as a sticky backdrop and 5 feature cards scrolling over it.

## Requirements

- Section eyebrow "Audio performance"
- Main headline "A completely transformed experience."
- Pinned dancer hero image (GSAP ScrollTrigger pin)
- 5 feature cards scroll over the hero image: H2 Chip, Voice Isolation, Acoustic Architecture, Adaptive EQ, FaceTime
- Each card has a supporting image/icon and descriptive text
- GSAP ScrollTrigger timeline with pin and scrub
- Smooth transitions between cards (opacity, translateY)
- Mobile-adaptive layout
- `prefers-reduced-motion` fallback

## Acceptance Criteria

- Dancer image is pinned during scroll
- All 5 cards appear in sequence
- Images from Apple CDN
- Responsive at all breakpoints
