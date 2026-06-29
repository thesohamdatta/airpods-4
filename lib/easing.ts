export const EASING = {
  appleOut: [0.32, 0.08, 0.24, 1] as const,
  appleInOut: [0.42, 0, 0.58, 1] as const,
  appleIn: [0.42, 0, 1, 1] as const,
  appleReveal: [0.23, 1, 0.32, 1] as const,
  appleSpring: [0.34, 1.56, 0.64, 1] as const,
  appleMicro: [0.2, 0, 0, 1] as const,
  power2Out: "power2.out",
  power3Out: "power3.out",
  none: "none",
} as const;

export const DURATION = {
  micro: 0.15,
  standard: 0.3,
  emphasis: 0.4,
  reveal: 0.6,
  hero: 0.8,
  stagger: 0.15,
} as const;

export const TRANSITION = {
  default: {
    duration: DURATION.standard,
    ease: EASING.appleOut,
  },
  reveal: {
    duration: DURATION.reveal,
    ease: EASING.appleReveal,
  },
  spring: {
    duration: DURATION.emphasis,
    ease: EASING.appleSpring,
  },
  micro: {
    duration: DURATION.micro,
    ease: EASING.appleMicro,
  },
  hero: {
    duration: DURATION.hero,
    ease: EASING.appleOut,
  },
} as const;
