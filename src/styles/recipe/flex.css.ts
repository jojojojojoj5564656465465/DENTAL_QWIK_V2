import { recipe } from "@vanilla-extract/recipes";
import { fallbackVar, style, styleVariants } from "@vanilla-extract/css";
import { space } from "../token";
//import { defaultContainer } from "../utils/base.css";
import { colorTheme, theme } from "../utils/themeNew.css.ts";
import { textSprinkles } from "./textSprinkles.css";
import { calc } from "@vanilla-extract/css-utils";

const gapVariants = styleVariants(space, (length) => ({
  gap: length,
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

const sizeContainer = {
  small: "60rem",
  medium: "72rem",
  large: "90rem",
  full: "none",
  xxl: "120rem",
} as const;

export const sizeVar = styleVariants(sizeContainer, (length, key) => {
  const calculatedLength = calc("100%")
    .subtract("clamp(0.75rem, 0.42rem + 1.7vw, 1.7rem)")
    .multiply(2)
    .toString();
  const maxInlineSizeValue =
    key === "full"
      ? "none"
      : // : `min(calc(100% - clamp(0.75rem, 0.42rem + 1.7vw, 1.7rem) * 2), ${length})`;
        `min(${calculatedLength}, ${length})`;
  return {
    maxInlineSize: maxInlineSizeValue,
  };
});

const paddingInline = styleVariants(sizeContainer, (length, key) => {
  const paddingValueMdVw = calc("100vw").subtract(length).divide(2).toString();
  const paddingValue = key === "full" ? "0" : paddingValueMdVw;
  return {
    //maxInlineSize: "none !important",
    paddingInline: "clamp(0.75rem, 0.42rem + 1.7vw, 1.7rem)",
    "@media": {
      "all and ( width > 60rem)": {
        paddingInline: paddingValue,
      },
    },
  };
});

export const defaultContainer = style({
  marginInline: "auto",
  boxSizing: "border-box",
  position: "relative",
  isolation: "isolate",
  caretColor: "transparent",
  //maxInlineSize: inlineSizeVar,
});

export const flex = recipe({
  base: [
    defaultContainer,
    {
      display: "flex",
    },
  ],
  variants: {
    direction: {
      row: { flexDirection: "row" },
      column: { flexDirection: "column" },
    },
    side: {
      1: { justifyContent: "start", alignItems: "start" },
      2: { justifyContent: "center", alignItems: "start" },
      3: { justifyContent: "end", alignItems: "start" },
      4: { justifyContent: "start", alignItems: "center" },
      5: { justifyContent: "center", alignItems: "center" },
      6: { justifyContent: "end", alignItems: "center" },
      7: { justifyContent: "start", alignItems: "end" },
      8: { justifyContent: "center", alignItems: "end" },
      9: { justifyContent: "end", alignItems: "end" },
    },
    justifyContent: {
      between: { justifyContent: "space-between" },
      around: { justifyContent: "space-around" },
      evenly: { justifyContent: "space-evenly" },
    },
    alignItems: {
      stretch: { alignItems: "stretch" },
      baseline: { alignItems: "baseline" },
      firstBaseline: { alignItems: "first baseline" },
      lastBaseline: { alignItems: "last baseline" },
      safeCenter: { alignItems: "safe center" },
      unsafeCenter: { alignItems: "unsafe center" },
      safeStart: { alignItems: "safe start" },
    },
    wrap: {
      true: {
        flexWrap: "wrap",
      },
    },
    gap: gapVariants,

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
    size: sizeVar,
    paddingInline,
    theme: {
      ...colorTheme,
    },
  },
  defaultVariants: {
    direction: "row",
    side: 1,
    wrap: false,
  },
  compoundVariants: [],
});
