import {
  fallbackVar,
  styleVariants,
  createVar,
  style,
} from "@vanilla-extract/css";
import { textSprinkles } from "@recipe";
import { colorTheme, theme } from "../utils/themeNew.css.ts";

const paddingBlock = {
  sm: textSprinkles({ paddingBlock: "sm" }),
  md: textSprinkles({ paddingBlock: "md" }),
  lg: textSprinkles({ paddingBlock: "lg" }),
  xl: textSprinkles({ paddingBlock: "xl" }),
  xxl: textSprinkles({ paddingBlock: "xxl" }),
  xxxl: textSprinkles({ paddingBlock: "xxxl" }),
};
const marginBlock = {
  sm: textSprinkles({ marginBlock: "sm" }),
  md: textSprinkles({ marginBlock: "md" }),
  lg: textSprinkles({ marginBlock: "lg" }),
  xl: textSprinkles({ marginBlock: "xl" }),
  xxl: textSprinkles({ marginBlock: "xxl" }),
  xxxl: textSprinkles({ marginBlock: "xxxl" }),
  auto: textSprinkles({ marginBlock: "auto" }),
};
const marginBlockStart = {
  sm: textSprinkles({ marginBlockStart: "sm" }),
  md: textSprinkles({ marginBlockStart: "md" }),
  lg: textSprinkles({ marginBlockStart: "lg" }),
  xl: textSprinkles({ marginBlockStart: "xl" }),
  xxl: textSprinkles({ marginBlockStart: "xxl" }),
  xxxl: textSprinkles({ marginBlockStart: "xxxl" }),
  auto: textSprinkles({ marginBlockStart: "auto" }),
};

const marginBlockEnd = {
  sm: textSprinkles({ marginBlockEnd: "sm" }),
  md: textSprinkles({ marginBlockEnd: "md" }),
  lg: textSprinkles({ marginBlockEnd: "lg" }),
  xl: textSprinkles({ marginBlockEnd: "xl" }),
  xxl: textSprinkles({ marginBlockEnd: "xxl" }),
  xxxl: textSprinkles({ marginBlockEnd: "xxxl" }),
  auto: textSprinkles({ marginBlockEnd: "auto" }),
};

const sizeContainer = {
  //default: "60rem",
  small: "60rem",
  medium: "72rem",
  large: "90rem",
  full: "none",
  xxl: "120rem",
} as const;

export const inlineSizeVar = createVar({
  inherits: false,
  syntax: "<length>",
  initialValue: "60rem",
});

export const sizeVar = styleVariants(sizeContainer, (length, key) => {
  const maxInlineSizeValue =
    key === "full"
      ? "none"
      : `min(calc(100% - clamp(0.75rem, 0.42rem + 1.7vw, 1.7rem) * 2), ${length})`;

  return {
    // maxInlineSize: maxInlineSizeValue,
    vars: {
      [inlineSizeVar]: fallbackVar(maxInlineSizeValue, "100%"), // Stocke la valeur de `length` dans une variable CSS pour une réutilisation ultérieure.
    },
  };
});
export const defaultContainer = style({
  marginInline: "auto",
  boxSizing: "border-box",
  position: "relative",
  isolation: "isolate",
  caretColor: "transparent",
  maxInlineSize: inlineSizeVar,
});

export const containerSize = {
  theme: {
    ...colorTheme,
  },

  marginBlock,
  marginBlockStart,
  marginBlockEnd,
  paddingBlock,
  background: {
    true: {
      backgroundColor: theme.background,
    },
  },
  hover: {
    true: {
      cursor: "pointer",
      selectors: {
        "&:active": {
          color: fallbackVar(theme.textHover, "inherit"),
          backgroundColor: fallbackVar(theme.backgroundHover, "inherit"),
          outline: `min(4px, 3px + 0.1vw) solid ${theme.backgroundHover}`,
          outlineOffset: "1.6px",
        },
        "&:focus": {
          outline: "min(4px, 3px + 0.1vw) solid yellow",
          outlineOffset: "4px",
        },
        "&:hover": {
          backgroundColor: fallbackVar(theme.backgroundHover, theme.background),
          color: fallbackVar(theme.textHover, theme.text, "inherit"),
          borderColor: fallbackVar(theme.textHover, "inherit"),
        },
      },
    },
  },
  size: sizeVar,
};
