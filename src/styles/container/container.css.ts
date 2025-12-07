import { fallbackVar, globalStyle } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { textSprinkles } from "../recipe/textSprinkles.css.ts";
import { maxInlineSizeFn } from "../utils/base.css.ts";
import { colorTheme, theme } from "../utils/themeNew.css.ts";

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
      small: {
        maxInlineSize: maxInlineSizeFn("small"),
      },
      medium: {
        maxInlineSize: maxInlineSizeFn("medium"),
      },
      large: {
        maxInlineSize: maxInlineSizeFn("large"),
      },
      xxl: {
        maxInlineSize: maxInlineSizeFn("xxl"),
      },
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

// /home/tim/Documents/dentistLanding/src/styles/recipe/container.css.ts

// ... other code ...

// /home/tim/Documents/dentistLanding/src/styles/recipe/container.css.ts

globalStyle(
  // Cette ligne génère le sélecteur CSS invalide
  `${container.classNames.variants.size.small}:has(> :is(${container.classNames.variants.size.medium}, ${container.classNames.variants.size.large}, ${container.classNames.variants.size.xxl})) > *`,
  {
    maxInlineSize: "100%",
  },
);

globalStyle(
  `${container.classNames.variants.size.medium}:has(> :is(${container.classNames.variants.size.large}, ${container.classNames.variants.size.xxl})) > *`,
  {
    maxInlineSize: "100%",
  },
);
globalStyle(
  `${container.classNames.variants.size.large}:has(> :is(${container.classNames.variants.size.xxl})) > *`,
  {
    maxInlineSize: "100%",
  },
);
