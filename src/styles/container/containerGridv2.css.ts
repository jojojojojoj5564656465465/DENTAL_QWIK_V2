import { createVar, fallbackVar, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { defaultContainer } from "../utils/base.css";
import { colorTheme, theme } from "../utils/themeNew.css";
import { media, space } from "../token";
import { calc } from "@vanilla-extract/css-utils";
const gridMinColSize = createVar({
  syntax: "<length-percentage>",
  inherits: false,
  initialValue: "100%",
});

const sizeContainer = {
  small: "60rem",
  medium: "72rem",
  large: "90rem",
  full: "none",
  xxl: "120rem",
} as const;

export const sizeVariants = styleVariants(sizeContainer, (length, key) => {
  const maxInlineSizeValue =
    key === "full"
      ? "none"
      : `min(calc(100% - clamp(0.75rem, 0.42rem + 1.7vw, 1.7rem) * 2), ${length})`;

  return {
    maxInlineSize: maxInlineSizeValue,
  };
});

const NbColObj = {
  2: { tablet: 2, md: 2 },
  3: { tablet: 2, md: 3 },
  4: { tablet: 2, md: 4 },
  6: { tablet: 3, md: 6 },
  8: { tablet: 4, md: 8 },
  10: { tablet: 5, md: 10 },
  12: { tablet: 6, md: 12 },
} as const;

// CORRECTION : Simplification de la structure
const numberOfColumns = styleVariants(NbColObj, (mediaQuery) => ({
  vars: {
    [gridMinColSize]: "100%",
  },
  "@media": {
    [media.tablet]: {
      vars: {
        [gridMinColSize]: `${100 / mediaQuery.tablet}%`,
      },
    },
    [media.md]: {
      vars: {
        [gridMinColSize]: `${100 / mediaQuery.md}%`,
      },
    },
  },
}));

const gridGap = createVar({
  syntax: "<length>",
  inherits: false,
  initialValue: "0rem",
});

const gapVar = styleVariants(space, (length) => ({
  gap: length,
  vars: {
    [gridGap]: length,
  },
}));

export default recipe({
  base: [
    defaultContainer,
    {
      gridTemplateColumns: `repeat(auto-fill, ${calc.subtract(gridMinColSize, fallbackVar(gridGap, "0rem"))})`,
      gridAutoFlow: "row",
      marginInline: "auto",
      gap: gridGap,
    },
  ],
  variants: {
    theme: {
      ...colorTheme,
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
    size: sizeVariants,
    numberColumn: numberOfColumns,
    gap: gapVar,
    display: {
      grid: { display: "grid" },
      inlineGrid: { display: "inline-grid" },
    },
  },
  defaultVariants: {
    display: "grid",
    hover: false,
    background: true,
    size: "full",
  },
});
