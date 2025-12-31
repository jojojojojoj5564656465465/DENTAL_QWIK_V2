import { createVar, keyframes, style } from "@vanilla-extract/css";
import { fluid } from "@/styles/utils/utils.ts";
import { textSprinkles as sp } from "@recipe";
export const imgUrl = createVar();
/**
 * Overlay pour les images linear-gradient
 * @example "fill 0 linear-gradient(#0003,#000)",
 */
const overlayColor = style({
  borderImage: "fill 0 linear-gradient(#0003,#000)",
});

/**
 * Clip-path pour des formes personnalisées
 * @description Permet de découper des éléments en formes non rectangulaires
 */
export const clippy = style([
  overlayColor,
  {
    clipPath: "polygon(0 0, 100% 0, 100% 78%, 0% 100%)",
    ":hover": {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 78%)",
      transition: "clip-path 0.9s ease",
    },
    //clipPath: "xywh(0 5px 100% 75% round 15% 0);",
  },
]);
const angle = createVar({
  syntax: "<angle>",
  inherits: false,
  initialValue: "0deg",
});

const angleKeyframes = keyframes({
  "0%": {
    vars: {
      [angle]: "0deg",
    },
  },
  "20%": {
    vars: {
      [angle]: "26deg",
    },
  },
  "100%": {
    vars: {
      [angle]: "0deg",
    },
  },
});
/**
 * Style pour le bouton plus en ABSOLUTE
 */
const plusButton = style([
  sp({ outlineColor: "secondary" }),
  {
    transform: angle,
    animationName: angleKeyframes,
    animationDuration: "5s",
    animationIterationCount: "1",
    position: "absolute",
    bottom: "0.2rem",
    right: "1.5rem",
    inlineSize: "5rem",
    aspectRatio: "1 / 1",
    zIndex: "6",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    outline: ".3em solid",

    boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)",
    transition: "all 0.3s ease-in-out 1s",
    selectors: {
      [`${clippy}:hover + &`]: {
        outlineStyle: "dashed",
        inlineSize: "6rem",
      },
    },
    ":hover": {
      transform: "scale(1.1)",
      boxShadow: "0 30px 60px -12px rgba(0,0,0,0.6)",
    },
  },
]);
export const photoPortraitDoctor = style([
  plusButton,
  {
    objectFit: "contain", // Cette propriété est pour les <img>, pas pour les background-image
    borderRadius: "50%", // Assure que le conteneur est un cercle parfait
    backgroundImage: imgUrl,
    zIndex: 100,
    backgroundPosition: "center", // Centre l'image horizontalement et verticalement
    backgroundSize: "cover", // Redimensionne l'image pour qu'elle soit entièrement visible dans le conteneur
    backgroundRepeat: "no-repeat", // Empêche la répétition de l'image si elle est plus petite que le conteneur
  },
]);

/**
 * @description Style pour le bouton margin Top Fluidvous
 */
export const ButtonStyle = style({
  marginBlockStart: fluid(5, 30),
});
