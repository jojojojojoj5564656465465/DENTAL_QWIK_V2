import { createVar, fallbackVar } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils"; // Import calc utility
import { recipe } from "@vanilla-extract/recipes";
import { defaultContainer, maxInlineSizeFn } from "../utils/base.css";
import { colorTheme, theme } from "../utils/themeNew.css";
import { textSprinkles } from "./textSprinkles.css";

const gridMaxColCount = createVar({
  syntax: "<integer>", // Expects a whole number
  inherits: false,
  initialValue: "6", // Default value (must be a string)
});

const gridMinColSize = createVar({
  syntax: "<length>", // Expects a CSS length unit (px, rem, etc.)
  inherits: false,
  initialValue: "200px",
});

const gridGap = createVar({
  syntax: "<length>", // Expects a CSS length unit
  inherits: false,
  initialValue: "1rem",
});

export const containerGridMaxColumn = recipe({
  base: [
    defaultContainer,
    {
      display: "grid",
      marginInline: "auto",
      gap: gridGap,
      gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, max(${gridMinColSize}, ${calc(
        "100%",
      )
        .subtract(calc.multiply(gridGap, gridMaxColCount))
        .divide(gridMaxColCount)
        .toString()})), 1fr))`,
    },
  ],
  variants: {
    theme: {
      ...colorTheme,
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
    maxColumn: {
      2: {
        vars: {
          [gridMaxColCount]: "2",
          gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, max(${gridMinColSize}, ${calc(
            "100%",
          )
            .subtract(calc.multiply(gridGap, gridMaxColCount))
            .divide(gridMaxColCount)
            .toString()})), 1fr))`,
        },
      },
      3: {
        vars: {
          [gridMaxColCount]: "3",
          gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, max(${gridMinColSize}, ${calc(
            "100%",
          )
            .subtract(calc.multiply(gridGap, gridMaxColCount))
            .divide(gridMaxColCount)
            .toString()})), 1fr))`,
        },
      },
      4: {
        vars: {
          [gridMaxColCount]: "4",
          gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, max(${gridMinColSize}, ${calc(
            "100%",
          )
            .subtract(calc.multiply(gridGap, gridMaxColCount))
            .divide(gridMaxColCount)
            .toString()})), 1fr))`,
        },
      },
      5: {
        vars: {
          [gridMaxColCount]: "5",
          gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, max(${gridMinColSize}, ${calc(
            "100%",
          )
            .subtract(calc.multiply(gridGap, gridMaxColCount))
            .divide(gridMaxColCount)
            .toString()})), 1fr))`,
        },
      },
      6: {
        vars: {
          [gridMaxColCount]: "6",
          gridTemplateColumns: `repeat(auto-fit, minmax(min(100%, max(${gridMinColSize}, ${calc(
            "100%",
          )
            .subtract(calc.multiply(gridGap, gridMaxColCount))
            .divide(gridMaxColCount)
            .toString()})), 1fr))`,
        },
      },
    },

    gap: {
      xs: {
        vars: { [gridGap]: "1rem" },
      },
      sm: {
        vars: { [gridGap]: "1.25rem" },
      },
      md: {
        vars: { [gridGap]: "1.5rem" },
      },
      lg: {
        vars: { [gridGap]: "1.75rem" },
      },
    },
    sizeOfBox: {
      100: {
        vars: { [gridMinColSize]: "100px" },
      },
      200: {
        vars: { [gridMinColSize]: "200px" },
      },
      250: {
        vars: { [gridMinColSize]: "250px" },
      },
      300: {
        vars: { [gridMinColSize]: "300px" },
      },
    },
  },

  defaultVariants: {
    hover: false,
    background: true,
    size: "full",
    sizeOfBox: 300,
    maxColumn: 4,
    gap: "xs",
  },
});
