import { recipe } from "@vanilla-extract/recipes";
import { theme } from "../utils/themeNew.css.ts";
import { textSprinkles } from "./textSprinkles.css.ts";

export const textRecipe = recipe({
  base: {
    textTransform: "capitalize",
    caretColor: "transparent",
  },
  variants: {
    font: {
      preTitle: [
        textSprinkles({
          fontSize: "xs",
          color: "accent",
          lineHeight: "loose",
          textTransform: "uppercase",
          letterSpacing: "widest",
          caretColor: "inherit",
        }),
        {
          ":before": {
            content: "+ ",
            caretColor: "transparent",
          },
        },
      ],
      title: textSprinkles({
        fontSize: "xl",
        color: "primary",
        fontFamily: "exo",
        fontWeight: "bold",
      }),
      span: textSprinkles({
        fontSize: "inherit",
        color: "accent",
      }),

      highLight: textSprinkles({
        fontSize: "sm",
        color: "primary",
        fontWeight: "bold",
        fontFamily: "exo",
        textTransform: "capitalize",
      }),
      text: textSprinkles({
        fontSize: "sm",
        color: "text",
        fontWeight: "normal",
        fontFamily: "exo",
      }),
    },
    marginBlock: {
      xxxs: textSprinkles({ marginBlock: "xxxs" }),
      xxs: textSprinkles({ marginBlock: "xxs" }),
      xs: textSprinkles({ marginBlock: "xs" }),
      sm: textSprinkles({ marginBlock: "sm" }),
      md: textSprinkles({ marginBlock: "md" }),
      lg: textSprinkles({ marginBlock: "lg" }),
    },
    lineHeight: {
      none: textSprinkles({ lineHeight: "none" }),
      tight: textSprinkles({ lineHeight: "tight" }),
      snug: textSprinkles({ lineHeight: "snug" }),
      normal: textSprinkles({ lineHeight: "normal" }),
      relaxed: textSprinkles({ lineHeight: "relaxed" }),
      loose: textSprinkles({ lineHeight: "loose" }),
      inherit: "inherit",
    },
    hover: {
      true: {
        ":hover": {
          color: theme.textHover,
        },
      },
    },
    hoverSection: {
      true: {
        selectors: {
          "section:has(&):hover > &": {
            color: theme.textHover,
          },
          "section:has(&):active > &": {
            color: theme.textHover,
          },
        },
      },
    },
    hoverDiv: {
      true: {
        selectors: {
          "div:has(&):hover > &": {
            color: theme.textHover,
          },
          "div:has(&):active > &": {
            color: theme.textHover,
          },
        },
      },
    },
    textAlign: {
      left: textSprinkles({ textAlign: "left" }),
      center: textSprinkles({ textAlign: "center" }),
      right: textSprinkles({ textAlign: "right" }),
      justify: textSprinkles({ textAlign: "justify" }),
    },
    display: {
      inline: {
        display: "inline-block",
      },
      block: {
        display: "block",
      },
    },
  },
  defaultVariants: {
    font: "text",
    display: "block",
    textAlign: "left",
    hoverDiv: false,
    hoverSection: false,
    hover: false,
  },
});
