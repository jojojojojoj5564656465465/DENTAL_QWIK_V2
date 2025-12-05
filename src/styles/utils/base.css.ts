import { style } from "@vanilla-extract/css";

export const defaultContainer = style({
  marginInline: "auto",
  boxSizing: "border-box",
  position: "relative",
  isolation: "isolate",
  caretColor: "transparent",
});

export const containerSize = {
  default: "60rem",
  full: "100svw",
  large: "90rem",
  medium: "72rem",
  small: "60rem",
  xxl: "120rem",
} as const;

export const maxInlineSizeFn = (x: keyof typeof containerSize): string => {
  return `min(calc(100% - clamp(0.75rem, 0.42rem + 1.7vw, 1.7rem) * 2), ${containerSize[x]}, 130rem)`;
};
