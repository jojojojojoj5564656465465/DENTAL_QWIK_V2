import { fallbackVar, globalStyle, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { textSprinkles } from "@recipe";
import { colorTheme, theme } from "../utils/themeNew.css.ts";
import { containerSize, maxInlineSizeFn } from "../utils/base.css.ts";

const sizeVariants = styleVariants(containerSize, (_, key) => {
  if (key === "full") {
    return {
      maxInlineSize: "none",
      inlineSize: "100svw",
      marginInline: "none",
    };
  }
  return {
    maxInlineSize: maxInlineSizeFn(key),
  };
});

export const container = recipe({
  base: {
    position: "relative",
    boxSizing: "border-box",
    color: theme.text,
    isolation: "isolate",
    marginInline: "auto",
  },
  variants: {
    theme: {
      ...colorTheme,
    },
    display: {
      block: { display: "block" },
      grid: { display: "grid" },
      flex: { display: "flex" },
      inlineBlock: { display: "inline-block" },
      inlineFlex: { display: "inline-flex" },
      inlineGrid: { display: "inline-grid" },
    },
    // marginInline: {
    //   auto: { marginInline: "auto" },
    //   none: { marginInline: "none" },
    //   sm: textSprinkles({ marginInline: "sm" }),
    //   md: textSprinkles({ marginInline: "md" }),
    //   lg: textSprinkles({ marginInline: "lg" }),
    //   xl: textSprinkles({ marginInline: "xl" }),
    //   xxl: textSprinkles({ marginInline: "xxl" }),
    //   xxxl: textSprinkles({ marginInline: "xxxl" }),
    // },
    marginBlock: {
      sm: textSprinkles({ marginBlock: "sm" }),
      md: textSprinkles({ marginBlock: "md" }),
      lg: textSprinkles({ marginBlock: "lg" }),
      xl: textSprinkles({ marginBlock: "xl" }),
      xxl: textSprinkles({ marginBlock: "xxl" }),
      xxxl: textSprinkles({ marginBlock: "xxxl" }),
    },
    paddingBlock: {
      sm: textSprinkles({ paddingBlock: "sm" }),
      md: textSprinkles({ paddingBlock: "md" }),
      lg: textSprinkles({ paddingBlock: "lg" }),
      xl: textSprinkles({ paddingBlock: "xl" }),
      xxl: textSprinkles({ paddingBlock: "xxl" }),
      xxxl: textSprinkles({ paddingBlockStart: "xxxl" }),
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
            backgroundColor: fallbackVar(
              theme.backgroundHover,
              theme.background,
            ),
            color: fallbackVar(theme.textHover, theme.text, "inherit"),
            borderColor: fallbackVar(theme.textHover, "inherit"),
          },
        },
      },
    },
    background: {
      true: {
        backgroundColor: theme.background,
      },
    },
    size: sizeVariants,
  },
  compoundVariants: [
    {
      variants: {
        theme: "accent",
        hover: true,
        background: true,
      },
      style: {
        borderRadius: "10px",
        textAlign: "center",
      },
    },
    {
      variants: {
        size: "full",
      },
      style: {
        inlineSize: "100svw",
      },
    },
  ],
  defaultVariants: {
    hover: false,
    background: true,
    //size: "full",
    //marginInline: "auto",
  },
});

// Global styles for nested containers
// Using sizeVariants directly as selectors

globalStyle(
  `${sizeVariants.small}:has(> :is(${sizeVariants.medium}, ${sizeVariants.large}, ${sizeVariants.xxl})) > *`,
  {
    maxInlineSize: "100%",
  },
);

globalStyle(
  `${sizeVariants.medium}:has(> :is(${sizeVariants.large}, ${sizeVariants.xxl})) > *`,
  {
    maxInlineSize: "100%",
  },
);

globalStyle(`${sizeVariants.large}:has(> :is(${sizeVariants.xxl})) > *`, {
  maxInlineSize: "100%",
});
