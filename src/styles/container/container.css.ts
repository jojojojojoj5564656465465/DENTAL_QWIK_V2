import { fallbackVar, globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { textSprinkles } from "@recipe";
import { maxInlineSizeFn } from "../utils/base.css.ts";
import { colorTheme, theme } from "../utils/themeNew.css.ts";

const sizeSmall = style({});
const sizeMedium = style({});
const sizeLarge = style({});
const sizeXxl = style({});

export const container = recipe({
  base: {
    position: "relative",
    boxSizing: "border-box",
    color: theme.text,
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
    marginInline: {
      auto: { marginInline: "auto" },
      sm: textSprinkles({ marginInline: "sm" }),
      md: textSprinkles({ marginInline: "md" }),
      lg: textSprinkles({ marginInline: "lg" }),
      xl: textSprinkles({ marginInline: "xl" }),
      xxl: textSprinkles({ marginInline: "xxl" }),
      xxxl: textSprinkles({ marginInline: "xxxl" }),
    },
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
        ":active": {
          color: fallbackVar(theme.textHover, "inherit"),
          backgroundColor: fallbackVar(theme.backgroundHover, "inherit"),
          outline: `min(4px, 3px + 0.1vw) solid ${theme.backgroundHover}`,
          outlineOffset: "1.6px",
        },
        ":focus": {
          outline: "min(4px, 3px + 0.1vw) solid yellow",
          outlineOffset: "4px",
        },
        "@supports": {
          "selector(:hover)": {
            ":hover": {
              backgroundColor: fallbackVar(
                theme.backgroundHover,
                theme.background,
              ),
              color: fallbackVar(theme.textHover, theme.text, "inherit"),
              borderColor: fallbackVar(theme.textHover, "inherit"),
            },
          },
          "not selector(:hover)": {
            ":active": {
              color: fallbackVar(theme.textHover, "inherit"),
              backgroundColor: fallbackVar(theme.backgroundHover, "inherit"),
              transform: "scale(1.03)",
              outline: `min(4px, 3px + 0.1vw) solid ${theme.backgroundHover}`,
              outlineOffset: "1.6px",
            },
          },
        },
      },
    },
    background: {
      true: {
        backgroundColor: theme.background,
      },
    },
    size: {
      small: [
        sizeSmall,
        {
          maxInlineSize: maxInlineSizeFn("small"),
        },
      ],
      medium: [
        sizeMedium,
        {
          maxInlineSize: maxInlineSizeFn("medium"),
        },
      ],
      large: [
        sizeLarge,
        {
          maxInlineSize: maxInlineSizeFn("large"),
        },
      ],
      xxl: [
        sizeXxl,
        {
          maxInlineSize: maxInlineSizeFn("xxl"),
        },
      ],
      full: {
        maxInlineSize: "none",
      },
    },
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
  ],
  defaultVariants: {
    hover: false,
    background: true,
    size: "full",
  },
});

globalStyle(
  `${sizeSmall}:has(> :is(${sizeMedium}, ${sizeLarge}, ${sizeXxl})) > *`,
  {
    maxInlineSize: "100%",
  },
);

globalStyle(`${sizeMedium}:has(> :is(${sizeLarge}, ${sizeXxl})) > *`, {
  maxInlineSize: "100%",
});

globalStyle(`${sizeLarge}:has(> :is(${sizeXxl})) > *`, {
  maxInlineSize: "100%",
});
