# Issue 7: Wearability Section (Redesigned for Comfort)

**Status:** `ready-for-agent`  
**Labels:** `feature`, `ready-for-agent`  
**Depends on:** Issue 1

## Description

Build the "Redesigned for comfort. How fitting." section with smart pin annotations that animate on scroll.

## Requirements

- Section eyebrow "Wearability"
- Main headline "Redesigned for comfort. How fitting."
- Product hero image (AirPods back view)
- 3 smart pin annotations: Ear fit ("Physical fit-ness"), Force sensor (stem), Water resistance (IP54)
- Pin lines: `::after` pseudo-element with width/height animation
- GSAP ScrollTrigger controls pin line reveal
- Horizontal lines on desktop, vertical on mobile
- 4 product images from Apple CDN

## Acceptance Criteria

- Product images render from Apple CDN
- Pin lines animate smoothly on scroll
- Correct orientation per breakpoint
- Text captions positioned correctly
