import {
  createVar,
  fallbackVar,
  styleVariants,
  style,
  assignVars,
  createThemeContract,
} from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { defaultContainer } from "../utils/base.css.ts";
import { colorTheme, theme } from "../utils/themeNew.css.ts";
import { media, space } from "../token/index.ts";
import { calc } from "@vanilla-extract/css-utils";
import { fluid } from "../utils/utils.ts";
import { containerSize } from "../utils/base.css.ts";

import { textSprinkles } from "@/styles/recipe/textSprinkles.css";

const gridMinColSize = createVar({
  syntax: "<length-percentage>",
  inherits: false,
  initialValue: "100%",
});
/**
 * MARK:FULL BLEED GRID VARS
 */
const vars = createThemeContract({
  col: null,
});

const numberOfColumnVars = style({
  vars: assignVars(vars, {
    col: "3",
  }),
  "@media": {
    [media.tablet]: {
      vars: assignVars(vars, {
        col: "6",
      }),
    },
    [media.md]: {
      vars: assignVars(vars, {
        col: "12",
      }),
    },
  },
});

const { "100%": _, full: __, ...rest } = containerSize;
const gridGap = createVar({
  syntax: "<length>",
  inherits: false,
  initialValue: "0rem",
});
/*
 * @description Variant pour les tailles de container en mode grid fullBleed
 */
const containerGridVariant = styleVariants(rest, (size) => [
  numberOfColumnVars,
  {
    gridTemplateColumns: `1fr repeat(${vars.col}, calc((min(${calc.subtract("100%", fluid(40, 80))}, ${size ?? "60rem"}) - calc((${vars.col} - 1) * ${fallbackVar(gridGap, "0.1px")})) / ${vars.col})) 1fr `,
    gap: gridGap,
  },
]);

/**
 * MARK: CLASSIQUE VARIANTS
 */
const sizeVariants = styleVariants(containerSize, (length, key) => {
  const maxInlineSizeValue =
    key === "full"
      ? "none"
      : `min(calc(100% - clamp(0.75rem, 0.42rem + 1.7vw, 1.7rem) * 2), ${length})`;

  return {
    maxInlineSize: maxInlineSizeValue,
    gridTemplateColumns: `repeat(auto-fit, ${calc.subtract(gridMinColSize, fallbackVar(gridGap, "0rem"))})`,
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
} as const satisfies Record<number, { tablet: number; md: number }>;

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

/**
 * @description Variant pour les tailles de container en mode grid fullBleed
 */

const gapVar = styleVariants(space, (length) => ({
  gap: length,
  vars: {
    [gridGap]: length,
  },
}));
const spacingVariant = (property: keyof Parameters<typeof textSprinkles>[0]) =>
  ({
    sm: textSprinkles({ [property]: "sm" }),
    md: textSprinkles({ [property]: "md" }),
    lg: textSprinkles({ [property]: "lg" }),
    xl: textSprinkles({ [property]: "xl" }),
    xxl: textSprinkles({ [property]: "xxl" }),
    xxxl: textSprinkles({ [property]: "xxxl" }),
    auto: textSprinkles({ [property]: "auto" }),
  }) as const;

const paddingBlock = spacingVariant("paddingBlock");
const marginBlock = spacingVariant("marginBlock");
const marginBlockStart = spacingVariant("marginBlockStart");
const marginBlockEnd = spacingVariant("marginBlockEnd");

export const grid = recipe({
  base: [
    defaultContainer,
    {
      gridAutoFlow: "row",
      display: "grid",
    },
  ],
  variants: {
    theme: {
      ...colorTheme,
    },
    marginBlock,
    marginBlockStart,
    marginBlockEnd,
    paddingBlock,
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
    fullbleed: containerGridVariant,
    numberColumn: numberOfColumns,
    gap: gapVar,
  },
  defaultVariants: {
    hover: false,
    background: true,
  },
});
