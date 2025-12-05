import { style } from "@vanilla-extract/css";
import { type RecipeVariants, recipe } from "@vanilla-extract/recipes";

const theme = {
  colors: {
    white: "white",
    shadow: "rgba(0, 0, 0, 0.2)",
    handleArrowBg: "rgba(255, 255, 255, 0.9)",
    handleArrowColor: "#2a6496",
  },
};
export const containerPerso = recipe({
  base: {
    position: "relative",
    inlineSize: "100%",
    margin: "2rem auto",
    overflow: "hidden",
    borderRadius: "8px",
    boxShadow: `0 4px 15px ${theme.colors.shadow}`,
    cursor: "col-resize",
    touchAction: "none",
    userSelect: "none",
    isolation: "isolate",
  },
  variants: {
    aspectRatio: {
      "16/9": {
        aspectRatio: "16 / 9",
      },
      "4/3": {
        aspectRatio: "4 / 3",
      },
      "1/1": {
        aspectRatio: "1 / 1",
      },
    },
    maxWidth: {
      "400px": {
        maxWidth: "min(400px, 100%)",
      },
      "600px": {
        maxWidth: "min(600px, 100%)",
      },
      "800px": {
        maxWidth: "min(800px, 100%)",
      },
    },
  },
  compoundVariants: [
    {
      variants: {
        aspectRatio: "1/1",
        maxWidth: "800px",
      },
      style: {
        borderColor: "blue",
        borderWidth: "4px",
        borderStyle: "solid",
      },
    },
  ],
  defaultVariants: {
    aspectRatio: "16/9",
    maxWidth: "400px",
  },
});
export type containerPersoVariants = RecipeVariants<typeof containerPerso>;

const baseImage = style({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  pointerEvents: "none",
});

export const beforeImage = style([
  baseImage,
  {
    zIndex: 1,
  },
]);

export const afterImage = style([
  baseImage,
  {
    zIndex: 2,
  },
]);

export const sliderHandle = style({
  position: "absolute",
  top: 0,
  height: "100%",
  width: "5px",
  background: theme.colors.white,
  transform: "translateX(-50%)",
  zIndex: 10,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "col-resize",

  ":focus-visible": {
    outline: `3px solid ${theme.colors.handleArrowColor}`,
    outlineOffset: "2px",
  },

  "@media": {
    "screen and (max-width: 400px)": {
      width: "2px",
    },
    "screen and (min-width: 800px)": {
      width: "8px",
    },
  },
});

export const sliderArrow = style({
  position: "absolute",
  width: "40px",
  height: "40px",
  background: theme.colors.handleArrowBg,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.colors.handleArrowColor,
  fontSize: "20px",
  fontWeight: "bold",
  boxShadow: `0 2px 8px ${theme.colors.shadow}`,
});
