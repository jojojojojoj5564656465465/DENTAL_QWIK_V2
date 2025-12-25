// /home/tom/Documents/DEV/dentistLanding/src/components/HOME/howItWorks/content.css.ts

import { textRecipe as R, grid, textSprinkles } from "@recipe";
import {
  createVar,
  keyframes,
  style,
  styleVariants,
} from "@vanilla-extract/css";
import { createBorderImage, fluid } from "@/styles/utils";
import { color } from "@/styles/utils/themeNew.css.ts";

// Animation pour le changement de couleur progressif
const changeColor = keyframes({
  "0%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 0%)",
  },
  "25%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 25%)",
  },
  "50%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 50%)",
  },
  "75%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 75%)",
  },
  "100%": {
    background:
      "linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(0, 212, 255, 1) 100%)",
  },
});

// Container principal pour la liste
export const ul = style({
  display: "flex",
  flexDirection: "column",
  gap: 35,
  justifyItems: "stretch",
  marginInline: 20,
  paddingInline: 0,
});

// Background image pour la section
export const bgImage = style({
  backgroundImage: "url(@/assets/istockphoto.avif)",
  backgroundPosition: "center",
  backgroundRepeat: "repeat",
  backgroundSize: "contain",
});

// Wrapper principal pour chaque élément de liste
export const liWrapper = style([
  grid({ background: true, theme: "whiteBg", gap: "1.25rem" }),
  {
    border: "2px solid oklch(0.8 0.0345 261.53)",
    borderRadius: "5px",
    cursor: "pointer",
    display: "grid",
    //gap: "10px",
    gridTemplateColumns: "auto 1fr auto",
    gridTemplateRows: "auto auto",
    height: "auto",
    padding: "15px",
    position: "relative",
    selectors: {
      "&:has(+li):before": {
        backgroundColor: color.theme.accent,
        bottom: "-25px",
        content: "",
        height: "5px",
        left: 0,
        position: "absolute",
        width: "100%",
      },
      "&:hover": {
        borderColor: color.theme.accent,
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
        transform: "translateY(-2px)",
      },
      "&:hover:has(+li):before": {
        animationDirection: "alternate",
        animationDuration: "4s",
        animationIterationCount: "infinite",
        animationName: changeColor,
      },
    },
    transition: "all 0.3s ease",
    width: "100%",
  },
]);

// Header de chaque élément (titre + icône + indicateur)
export const liHeader = style({
  alignItems: "center",
  background: color.theme.secondary,
  border: "none",
  cursor: "pointer",
  display: "grid",
  gap: "10px",
  gridColumn: "1 / -1",
  gridRow: "1 / 2",
  gridTemplateColumns: "auto 1fr auto",
  padding: 0,
  textAlign: "left",
  width: "100%",
});

// Variable CSS pour l'icône dynamique
export const myContent = createVar({
  inherits: false,
  initialValue: "url(/assets/icons/icon-how-it-work-1.svg)",
  syntax: "<string>",
});

// Checkbox cachée pour la logique d'accordéon
export const hiddenCheckbox = style({
  opacity: 0,
  pointerEvents: "none",
  position: "absolute",
});
export const notificationBase = style({
  color: color.theme.accent,
  fontSize: "24px",
  fontWeight: "bold",
  gridColumn: "3 / 4",

  selectors: {
    [`${liWrapper}:hover &`]: {
      color: color.theme.primary,
      transform: "scale(1.1)",
    },
  },
  transition: "transform 0.3s ease, color 0.3s ease",
});
// Variants pour les différents éléments
export const li_content = styleVariants({
  // Indicateur fermé (+)
  notificationClosed: [
    notificationBase,
    {
      ":after": {
        content: "+",
      },
    },
  ],

  // Indicateur ouvert (-)
  notificationOpen: [
    notificationBase,
    {
      ":after": {
        content: "-",
      },
    },
  ],
  // Titre avec icône
  txt1: [
    R({ font: "highLight" }),
    {
      ":before": {
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        content: myContent,
        display: "inline-block",
        height: "24px",
        marginInlineEnd: "1rem",
        width: "24px",
      },
      alignItems: "center",
      color: color.theme.primary,
      display: "flex",
      fontWeight: "bold",
      gap: "1rem",
      gridColumn: "2 / 3",
      marginInlineStart: "0rem",
      selectors: {
        [`${liWrapper}:hover &`]: {
          color: color.theme.accent,
        },
        [`${liWrapper}:focus &`]: {
          color: color.theme.accent,
        },
      },
    },
  ],

  // Contenu ouvert
  open: [
    R({ font: "text", display: "block" }),
    textSprinkles({
      color: "secondary",
      cursor: "default",
      marginBlockStart: "1rem",
    }),
    {
      transition:
        "max-height 0.4s ease-out, opacity 0.4s ease-out, padding 0.4s ease-out",
    },
  ],

  // Contenu fermé
  close: [
    {
      cursor: "help",
      //visibility: "hidden",
      display: "none",
      height: 0,
    },
  ],
});

// Style de base pour les icônes (si nécessaire)
export const iconBase = style({
  alignItems: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "contain",
  display: "flex",
  gridColumn: "1 / 2",
  height: "40px",
  justifyContent: "center",
  padding: "10px",
  width: "40px",
});

export const leftBoxWrapper = style({
  borderImage: createBorderImage(
    1,
    "oklch(0.4436 0.0937 249.88 / 50.47%)",
    "oklch(0.6484 0.0937 249.88 / 51.47%)",
  ),
  paddingBlock: fluid(10, 20),
  borderRadius: "10px",
  //backgroundImage: 'url(/assets/men.avif)',
  backgroundSize: "cover",
});
