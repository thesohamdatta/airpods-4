export const BREAKPOINTS = {
  xsmall: 480,
  small: 734,
  medium: 1068,
  large: 1440,
  xlarge: 1441,
} as const;

export type Breakpoint = keyof typeof BREAKPOINTS;

export function getBreakpoint(width: number): Breakpoint {
  if (width <= BREAKPOINTS.xsmall) return "xsmall";
  if (width <= BREAKPOINTS.small) return "small";
  if (width <= BREAKPOINTS.medium) return "medium";
  if (width <= BREAKPOINTS.large) return "large";
  return "xlarge";
}

export const MEDIA_QUERIES = {
  xsmall: `(max-width: ${BREAKPOINTS.xsmall}px)`,
  small: `(max-width: ${BREAKPOINTS.small}px)`,
  medium: `(max-width: ${BREAKPOINTS.medium}px)`,
  large: `(max-width: ${BREAKPOINTS.large}px)`,
  xlarge: `(min-width: ${BREAKPOINTS.xlarge}px)`,
  reducedMotion: "(prefers-reduced-motion: reduce)",
  noReducedMotion: "(prefers-reduced-motion: no-preference)",
} as const;
