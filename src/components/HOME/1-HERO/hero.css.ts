import { flex } from "@recipe";
import { media, space } from "@styles/token";
import { fluid } from "@styles/utils/utils.ts";
import { color } from "@theme";
import { style } from "@vanilla-extract/css";
import { container } from "~/styles/container/index.css";

export const wrapper = style([
  container({ size: "small" }),
  {
    borderImage:
      "linear-gradient(oklch(58.09% 0.1151 235.69 / 40%), oklch(97.44% 0.0134 240.95) / 20% ) fill 1",
    display: "grid",
    placeItems: "center",
    gap: space.lg,
    paddingBlock: space.lg,
  },
]);

export const hr = style([
  { height: 2, minInlineSize: "80%", backgroundColor: color.theme.divider },
]);

/**
 * MARK: BANNER
 */
export const bannerWrapper = style([
  container({ size: "large", background: true }),
  flex({
    direction: "row",
    side: 4,
    wrap: true,
    justifyContent: "evenly",
    gap: "lg",
  }),
  {
    "@media": {
      [media.mobile]: {
        // flexDirection: 'column',
        // gap: '1.4rem',
      },
    },
  },
]);

/**
 * @description ok good
 */
export const banner__element = style({
  display: "grid",
  // Définit explicitement 2 colonnes : une pour l'icône (auto), une pour le titre (auto)
  // Cela garantira que les colonnes ne prennent que l'espace nécessaire à leur contenu.
  gridTemplateColumns: "auto 1fr",
  // Deux lignes : une pour l'icône/titre, une pour la description en dessous
  gridTemplateRows: "auto auto",
  columnGap: space.sm, // Espace entre l'icône et le titre
  rowGap: "0.2rem", // Espace entre la ligne du titre et la ligne de la description
  justifyContent: "start",
  justifyItems: "start", // Aligne le contenu de la grille au début de l'axe principal
  alignItems: "center", // Centre verticalement les éléments de la première ligne (icône et titre)

  "@media": {
    [media.mobile]: {
      marginInlineStart: "30px",
    },
    [media.tablet]: {
      marginInline: "auto",
    },
    [media.md]: {
      marginInline: fluid(10, 20),
    },
  },
});

export const banner__element_icon = style({
  minBlockSize: 35,
  minInlineSize: 35,
  marginBlock: "auto",
  gridRow: "1 / 2", // L'icône prend la première ligne
  gridColumn: "1 / 2", // L'icône prend la première colonne
});

// Ajoute une classe pour le titre
export const banner__element_title = style({
  gridRow: "1 / 2", // Le titre prend la première ligne
  gridColumn: "2 / 3", // Le titre prend la deuxième colonne, juste après l'icône
  margin: 0, // Assure qu'il n'y a pas de marges par défaut sur le h6 qui pourraient créer de l'espace
  padding: 0,
});

// Ajoute une classe pour la description
export const banner__element_description = style({
  gridRow: "2 / 3", // La description prend la deuxième ligne
  gridColumn: "1 / 3", // La description s'étend sur les deux colonnes (icône + titre)
  margin: 0, // Assure qu'il n'y a pas de marges par défaut sur le p
  padding: 0,
});

export const banner_hr = style({
  width: ".1rem",
  blockSize: "50px",
  //marginBlock: 'auto',
  backgroundColor: color.theme.divider,
  border: "white solid 1px",
  justifySelf: "center",
  "@media": {
    [media.mobile]: {
      display: "none",
    },
    "all and ( width <= 640px)": {
      display: "none",
    },
    "all and ( width > 1120px)": {
      display: "none",
    },
  },
});
export const banner_button = style({
  inlineSize: "100%",
  backgroundColor: color.theme.primary,

  "@media": {
    [media.tablet]: {
      minInlineSize: "18rem",
      maxInlineSize: "max-content",
      marginInline: "auto",
      marginBlock: 20,
    },
    [media.md]: {
      marginInlineStart: "auto",
    },
  },
});
