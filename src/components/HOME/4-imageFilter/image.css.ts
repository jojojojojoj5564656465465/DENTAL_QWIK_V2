import { media } from "@/styles/token";
import { fluid } from "@/styles/utils/utils";
import { color } from "@theme";
import { createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

// --- Variables ---
const overlaping = createVar({
  syntax: "<length>",
  inherits: false,
  initialValue: "250px",
});

export const menBG = createVar();

// --- Styles ---

// 1. Le conteneur principal qui prend toute la largeur
export const sectionWrapper = style({
  position: "relative",
  width: "100%", // Force la pleine largeur
  isolation: "isolate", // Crée un contexte d'empilement

  // Hauteur responsive (votre logique existante)
  "@media": {
    [media.mobile]: {
      blockSize: "349px",
      vars: { [overlaping]: "0px" },
    },
    [media.tablet]: {
      blockSize: "449px",
      vars: { [overlaping]: "120px" },
    },
    [media.md]: {
      blockSize: "600px",
      vars: { [overlaping]: "250px" },
    },
  },
});

// 2. L'overlay qui couvre tout le fond
export const overlay = style({
  position: "absolute",
  inset: 0, // top: 0, right: 0, bottom: 0, left: 0
  zIndex: -1, // Se place derrière le contenu
  backgroundImage: `linear-gradient(to bottom, ${color.variable.whiteBlue} ${overlaping}, ${color.variable.darkLight} ${overlaping})`,
  // Si vous voulez que l'overlay soit au-dessus d'une image de fond du parent, ajustez le zIndex ou l'ordre HTML
});

// 3. Le contenu centré (votre wrapper existant, simplifié)
export const wrapper = style({
  marginInline: "auto",
  maxInlineSize: "60rem",
  width: "100%",
  clipPath: "inset(0 round 50px)",
  paddingBlock: fluid(5, 40),
  blockSize: calc.multiply(overlaping, 1.5),
  backgroundImage: menBG,
  display: "grid",
  placeItems: "center",
  transition: "border-image 4s ease-in-out 1s",
  backgroundAttachment: "fixed",
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  borderImage:
    "linear-gradient(light-dark(oklch(58.09% 0.1151 235.69/70%),oklch(32.25% 0.0573 233.51 / 80%))) fill 1",
  zIndex: 20,
  "@media": {
    [media.md]: {
      blockSize: calc.multiply(overlaping, 2),
    },
  },
});
