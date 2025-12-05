export const media = {
  dark: "screen and (prefers-color-scheme: dark)",
  lg: "screen  and (hover: hover) and (min-width: 73em)",
  md: "all and (59rem <= width)",
  mobile: "only screen and (orientation: portrait) and (max-width: 27rem)",
  tablet: "only screen and (27rem <= width)",
  xl: "screen and (min-width: 80em)",
  "2xl": "screen and (min-width: 110em)",
  animation: "screen and (prefers-reduced-motion: no-preference)",
} as const;
