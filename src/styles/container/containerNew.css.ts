import { fallbackVar, styleVariants, createVar } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { textSprinkles } from "@recipe";
import { colorTheme, theme } from "../utils/themeNew.css.ts";
import { containerSize } from "../utils/base.css.ts";
import { defaultContainer } from "@/styles/utils/base.css.ts";

const paddingBlock = {
  sm: textSprinkles({ marginBlock: "sm" }),
  md: textSprinkles({ marginBlock: "md" }),
  lg: textSprinkles({ marginBlock: "lg" }),
  xl: textSprinkles({ marginBlock: "xl" }),
  xxl: textSprinkles({ marginBlock: "xxl" }),
  xxxl: textSprinkles({ marginBlock: "xxxl" }),
};
const marginBlock = {
  sm: textSprinkles({ marginBlock: "sm" }),
  md: textSprinkles({ marginBlock: "md" }),
  lg: textSprinkles({ marginBlock: "lg" }),
  xl: textSprinkles({ marginBlock: "xl" }),
  xxl: textSprinkles({ marginBlock: "xxl" }),
  xxxl: textSprinkles({ marginBlock: "xxxl" }),
};

const parent = recipe({
  base: defaultContainer,
  variants: {
    theme: {
      ...colorTheme,
    },
    marginBlock,
    paddingBlock,
    background: {
      true: {
        backgroundColor: theme.background,
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        theme: "accent",

        background: true,
      },
      style: {
        borderRadius: "10px",
        textAlign: "center",
      },
    },
  ],
  defaultVariants: {
    background: true,
    theme: "blueLightBg",
  },
});

const inlineSizeVar = createVar({
  inherits: false,
  syntax: "<length>",
  initialValue: "100svw",
});
const sizeVar = styleVariants(containerSize, (length, key) => {
  // Détermine la valeur de `maxInlineSize` en fonction de la clé.
  // Si la clé est "full", on utilise "none" pour désactiver la contrainte de taille.
  // Sinon, on calcule une taille responsive avec `clamp` et `min`.

  const maxInlineSizeValue =
    key === "full"
      ? "none"
      : `min(calc(100% - clamp(0.75rem, 0.42rem + 1.7vw, 1.7rem) * 2), ${length})`;

  return {
    selectors: {
      // Applique les styles uniquement lorsque le composant est un enfant direct de `parent`.
      [`.${parent.classNames.base} > &`]: {
        maxInlineSize: maxInlineSizeValue,
        vars: {
          [inlineSizeVar]: length, // Stocke la valeur de `length` dans une variable CSS pour une réutilisation ultérieure.
        },
      },
    },
  };
});
const child = recipe({
  base: {
    // display: "block",
    marginInline: "auto",
  },
  variants: {
    marginBlock,
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
    display: {
      block: { display: "block" },
      grid: { display: "grid" },
      flex: { display: "flex" },
      inlineBlock: { display: "inline-block" },
      inlineFlex: { display: "inline-flex" },
      inlineGrid: { display: "inline-grid" },
    },
  },
  compoundVariants: [
    {
      variants: {
        size: "full",
      },
      style: {
        marginInline: "none",
      },
    },
  ],
  defaultVariants: {
    hover: false,
    background: true,
  },
});

export const container = {
  parent,
  child,
};
export type ContainerParentVariants = Parameters<typeof parent>[0];
