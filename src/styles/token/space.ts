/**
 * MARK: SPACES
 */

// biome-ignore assist/source/useSortedKeys: <Il faut laisser pour la lisibilité>
export const space = {
  xxxs: "clamp(0.3125em, 0.3125em + 0dvw, 0.3125em)",
  xxs: "clamp(0.5625em, 0.5408em + 0.1087dvw, 0.625em)",
  xs: "clamp(0.875em, 0.8533em + 0.1087dvw, 0.9375em)",
  sm: "clamp(1.125em, 1.0815em + 0.2174dvw, 1.25em)",
  md: "clamp(1.6875em, 1.6223em + 0.3261dvw, 1.875em)",
  lg: "clamp(2.25em, 1.6223em + 0.4348dvw, 2.5em)",
  xl: "clamp(3.375em, 1.6223em + 0.6522dvw, 3.75em)",
  xxl: "clamp(4.5em, 4.3261em + 0.8696dvw, 5em)",
  xxxl: "clamp(6.75em, 6.4891em + 1.3043dvw, 7.5em)",
  auto: "auto",
  minContent: "min-content",
  maxContent: "max-content",
  "1rem": "1rem",
  "1.25rem": "1.25rem",
  "1.5rem": "1.5rem",
  "1.75rem": "1.75rem",
  "2rem": "2rem",
  "2.25rem": "2.25rem",
  "2.5rem": "2.5rem",
  "2.75rem": "2.75rem",
} as const;
