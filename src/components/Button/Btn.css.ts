import { fontSize, space } from "@/styles/token/index.ts";
import { color, fontFamily } from "@/styles/utils/themeNew.css";
import {
  createTheme,
  createThemeContract,
  fallbackVar,
  style,
  styleVariants,
} from "@vanilla-extract/css";

const vars = createThemeContract({
  color: {
    background: null,
    border: null,
    font: null,
  },
  hover: {
    background: null,
    font: null,
  },
  font: {
    letterSpacing: null,
  },
  size: {
    borderRadius: null,
    bordersize: null,
    fontSize: null,
    paddingBlock: null,
    paddingInline: null,
  },
});
export const themeSmall = createTheme(vars, {
  color: {
    background: color.variable.whiteBlue,
    border: color.variable.accent,
    font: color.variable.darkLight,
  },
  hover: {
    background: "oklch(0.6589 0.1209 221.29)",
    font: "black",
  },
  font: {
    letterSpacing: "1.6",
  },
  size: {
    borderRadius: "100vw",
    bordersize: "3px",
    fontSize: fontSize.xs,
    paddingBlock: space.xs,
    paddingInline: "1rem",
  },
});
export const themeBig = createTheme(vars, {
  color: {
    background: color.variable.whiteBlue,
    border: color.variable.accent,
    font: "black",
  },
  hover: {
    background: color.variable.whiteBlue,
    font: "oklch(0.7 0.1209 221.29)",
  },
  font: {
    letterSpacing: "1.9",
  },
  size: {
    borderRadius: "15px",
    bordersize: "0.21rem",
    fontSize: fontSize.md,
    paddingBlock: "0.5rem",
    paddingInline: space.sm,
  },
});
const wrapper = style({
  ":focus-visible": {
    backgroundColor: vars.hover.background,
    color: vars.hover.font,
    cursor: "pointer",
  },
  ":hover": {
    color: vars.hover.font,
    backgroundColor: vars.hover.background,
    cursor: "pointer",
    borderColor: "oklch(0.7 0.1209 221.29)",
  },
  backgroundColor: fallbackVar(vars.color.background, "purple"),
  borderColor: vars.color.border,
  borderRadius: vars.size.borderRadius,
  borderStyle: "solid",
  borderWidth: vars.size.bordersize,
  color: vars.color.font,
  display: "grid",
  fontFamily: fontFamily.numito,
  fontSize: vars.size.fontSize,
  fontWeight: "500",
  justifyItems: "start",
  letterSpacing: vars.font.letterSpacing,

  maxInlineSize: "max-content",
  paddingBlock: vars.size.paddingBlock,
  paddingInline: vars.size.paddingInline,
});

export const content = styleVariants({
  Big: [
    wrapper,
    themeBig,
    {
      gridTemplateColumns: "1fr",
    },
  ],
  Small: [
    wrapper,
    themeSmall,
    {
      gridTemplateColumns: "1fr",
    },
  ],
});
export const text = style({
  color: vars.color.font,
  display: "inline",
  selectors: {
    [`&:hover, ${wrapper}:hover &`]: {
      color: vars.hover.font,
    },
  },
});
export const icon = style({
  display: "inline",
  marginInlineStart: space.xxxs,
  maxBlockSize: "5rem",
  maxInlineSize: "4.2em",
  paddingBlockEnd: space.xxxs,
});
export type Content = keyof typeof content;
