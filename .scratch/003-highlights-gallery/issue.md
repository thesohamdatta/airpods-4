# Issue 3: Highlights Gallery (Media Cards)

**Status:** `ready-for-agent`  
**Labels:** `feature`, `ready-for-agent`  
**Depends on:** Issue 1

## Description

Build the "Get the highlights" section with horizontally scrollable media cards that auto-advance on scroll. Four cards: ANC lifestyle, Live Translation, H2 Chip (with video), and Charging Case. Dot navigation + play/pause button.

## Requirements

- Section header "Get the highlights." with Apple typography
- Horizontal scroll gallery with CSS scroll-snap
- 4 media cards with full-bleed images, overlaid captions
- Card 3 (H2 Chip): inline muted video with startframe/endframe poster images
- Dot navigation (tablist) below the cards
- Play/pause button for auto-advance
- Auto-advance driven by scroll position
- `StaggeredFadeIn` on each card
- Each caption has `theme-dark` (white text on dark imagery)
- Caption positioning changes at breakpoints (top-left desktop, top-center mobile)

## Acceptance Criteria

- All 4 cards render with correct images from Apple CDN
- Horizontal scroll works on desktop + mobile (swipe)
- Dots highlight current card
- Play/pause toggles auto-advance
- H2 chip video plays inline when active
- Captions are positioned correctly at each breakpoint
