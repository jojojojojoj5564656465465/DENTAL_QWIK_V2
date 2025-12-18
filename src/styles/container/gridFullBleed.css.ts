import {
  assignVars,
  createThemeContract,
  createVar,
  style,
  styleVariants,
  fallbackVar,
} from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { media } from "../token";
//import { defaultContainer } from "../utils/base.css";
import { containerSize } from "../utils/base.css.ts";
import { colorTheme, theme } from "../utils/themeNew.css.ts";
import { fluid } from "../utils/utils.ts";

import { calc } from "@vanilla-extract/css-utils";
/**MARK:GOBAL IMPORT
 *
 */

import { textSprinkles } from "@/styles/recipe/textSprinkles.css";

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

const gridGap = createVar({
  syntax: "<length>",
  inherits: true,
  initialValue: "20px",
});

const gridWrapper = style({
  // Valeurs initiales des variables
  vars: {
    [gridGap]: fluid(15, 35),
  },
});

const vars = createThemeContract({
  col: null,
});

const numberOfColumnVars = style({
  gridTemplateAreas: '"left . . right"',
  vars: assignVars(vars, {
    col: "3",
  }),
  "@media": {
    [media.tablet]: {
      gridTemplateAreas: '"left . . . . . right"',
      vars: assignVars(vars, {
        col: "6",
      }),
    },
    [media.md]: {
      gridTemplateAreas: '"left . . . . . . . . . . . . right"',
      vars: assignVars(vars, {
        col: "12",
      }),
    },
  },
});

const { "100%": _, full: __, ...rest } = containerSize;

/*
 * @description Variant pour les tailles de container en mode grid fullBleed
 */
const containerGridVariant = styleVariants(rest, (size) => [
  gridWrapper,
  numberOfColumnVars,
  {
    gridTemplateColumns: `1fr repeat(${vars.col}, calc((min(${calc.subtract("100%", fluid(40, 80))}, ${size ?? "60rem"}) - calc((${vars.col} - 1) * ${fallbackVar(gridGap, "0.1px")})) / ${vars.col})) 1fr`,
    gap: gridGap,
  },
]);

export const containerGrid = recipe({
  base: [
    {
      marginInline: "auto",
      boxSizing: "border-box",
      position: "relative",
      isolation: "isolate",
      caretColor: "transparent",
      display: "grid",
    },
  ],
  variants: {
    size: containerGridVariant,
    gap: {
      true: {
        gap: gridGap,
      },
    },

    /**MARK: GLOBAL
     *
     */
    marginBlock,
    marginBlockStart,
    marginBlockEnd,
    paddingBlock,
    background: {
      true: {
        backgroundColor: theme.background,
      },
    },

    theme: {
      ...colorTheme,
    },
  },
  defaultVariants: {
    background: true,
  },
});
