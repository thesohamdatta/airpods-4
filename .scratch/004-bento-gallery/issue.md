# Issue 4: Bento Gallery (Take a Closer Look)

**Status:** `ready-for-agent`  
**Labels:** `feature`, `ready-for-agent`  
**Depends on:** Issue 1

## Description

Build the "Take a closer look" section with a horizontal scroll gallery of product photography in a bento/stonehenge layout. 4 slides containing 6 images total, with alternating single-image and split-image compositions.

## Requirements

- Section header "Take a closer look." with AR link ("View in your space")
- Horizontal scroll gallery with CSS scroll-snap
- 4 gallery slides:
  - Slide 1: Single image (case open, AirPods entering)
  - Slide 2: Two images side-by-side (stem mic + bulb closeup)
  - Slide 3: Single image (case closed)
  - Slide 4: Two images side-by-side (side view + tapered ear section)
- Desktop: 2-column layout for split slides
- Mobile: stacked (2-row) layout for split slides
- Images responsive at all breakpoints
- `StaggeredFadeIn` on each slide
- Bento images have `scale: var(--bento-gallery-zoom)` reveal
- Gallery height: 740px (xlarge) → 480px (xsmall)
- Padding nav arrows for navigation

## Acceptance Criteria

- All 6 images render from Apple CDN
- Bento grid alternates single/double composition
- Split images are side-by-side on desktop, stacked on mobile
- AR link shows only when WebXR/QuickLook is supported
- Horizontal scroll + snap works on all devices
- Correct gallery height at each breakpoint
