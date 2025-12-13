import {
  assignVars,
  createThemeContract,
  createVar,
  fallbackVar,
  style,
  styleVariants,
} from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { media } from "../token";
import { defaultContainer, maxInlineSizeFn } from "../utils/base.css";
import { containerSize } from "../utils/base.css.ts";
import { colorTheme, theme } from "../utils/themeNew.css.ts";
import { fluid } from "../utils/utils.ts";

const spaceLrVar = createVar({
  syntax: "<length>",
  inherits: false,
  initialValue: "40px",
});

const spaceGapVar = createVar({
  syntax: "<length>",
  inherits: false,
  initialValue: "20px",
});

const gridWrapper = style({
  // Valeurs initiales des variables
  vars: {
    [spaceLrVar]: fluid(40, 80),
    [spaceGapVar]: fluid(20, 35),
  },
  gap: spaceGapVar,
});

const vars = createThemeContract({
  col: null,
});
const numberOfColumnTheme = style({
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

const _containerGridVariant = styleVariants(containerSize, (size) => [
  gridWrapper,
  numberOfColumnTheme,
  {
    gridTemplateColumns: `1fr repeat(${vars.col}, calc((min(100% - ${spaceLrVar}, ${size}) - (${vars.col} - 1) * ${spaceGapVar}) / ${vars.col})) 1fr`,
  },
]);
export const containerGrid = recipe({
  base: [
    defaultContainer,
    {
      display: "grid",
    },
  ],
  variants: {
    size: {
      small: { maxInlineSize: maxInlineSizeFn("small") },
      medium: { maxInlineSize: maxInlineSizeFn("medium") },
      large: { maxInlineSize: maxInlineSizeFn("large") },
      xxl: { maxInlineSize: maxInlineSizeFn("xxl") },
      full: { maxInlineSize: "none" },
    },
    cols: {
      2: {
        "@media": {
          [media.tablet]: { gridTemplateColumns: "repeat(2, 1fr)" },
          [media.md]: { gridTemplateColumns: "repeat(2, 1fr)" },
        },
      },
      3: {
        "@media": {
          [media.tablet]: { gridTemplateColumns: "repeat(2, 1fr)" },
          [media.md]: { gridTemplateColumns: "repeat(3, 1fr)" },
        },
      },
      4: {
        "@media": {
          [media.tablet]: { gridTemplateColumns: "repeat(2, 1fr)" },
          [media.md]: { gridTemplateColumns: "repeat(4, 1fr)" },
        },
      },

      6: {
        "@media": {
          [media.tablet]: { gridTemplateColumns: "repeat(3, 1fr)" },
          [media.md]: { gridTemplateColumns: "repeat(6, 1fr)" },
        },
      },
      8: {
        "@media": {
          [media.tablet]: { gridTemplateColumns: "repeat(4, 1fr)" },
          [media.md]: { gridTemplateColumns: "repeat(8, 1fr)" },
        },
      },
      12: {
        "@media": {
          [media.tablet]: { gridTemplateColumns: "repeat(6, 1fr)" },
          [media.md]: { gridTemplateColumns: "repeat(12, 1fr)" },
        },
      },
      24: {
        "@media": {
          [media.tablet]: { gridTemplateColumns: "repeat(12, 1fr)" },
          [media.md]: { gridTemplateColumns: "repeat(24, 1fr)" },
        },
      },
    },
    // fullSize: {
    //   small: [containerGridVariant.small],
    //   medium: [containerGridVariant.medium],
    //   large: [containerGridVariant.large],
    //   xxl: [containerGridVariant.xxl],
    //   full: [containerGridVariant.full],
    // },
    theme: {
      ...colorTheme,
    },
    background: {
      true: {
        backgroundColor: fallbackVar(theme.background, "red"),
      },
    },
    hover: {
      true: {
        cursor: "pointer",
        ":active": {
          color: fallbackVar(theme.textHover, "inherit"),
          backgroundColor: fallbackVar(theme.backgroundHover, "inherit"),
          transform: "scale(1.01,1)",
          outline: `min(4px, 3px + 0.1vw) solid ${theme.backgroundHover}`,
          outlineOffset: "1.6px",
        },
        ":focus": {
          outline: "min(4px, 3px + 0.1vw) solid yellow",
          outlineOffset: "4px",
        },

        ":hover": {
          backgroundColor: fallbackVar(theme.backgroundHover, theme.background),
          color: fallbackVar(theme.textHover, "inherit"),
          borderColor: fallbackVar(theme.textHover, "inherit"),
        },
      },
    },
    gap: {
      true: {
        gap: spaceGapVar,
      },
    },
  },
  defaultVariants: {
    hover: false,
    background: true,
  },
});
