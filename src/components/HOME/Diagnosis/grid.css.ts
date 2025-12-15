import { textRecipe } from "@recipe";
import { media } from "@styles/token";
import { styleVariants } from "@vanilla-extract/css";
import { container } from "@container";

export const elementVariants = styleVariants({
  parent: {
    border: "3px solid oklch(0.7893 0.0691 234.53)",
    padding: "1rem",
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
  },
  title: [textRecipe({ font: "preTitle", lineHeight: "relaxed" }), {}],
  description: [textRecipe({ font: "text", lineHeight: "normal" })],
});

export const gridVariants = styleVariants({
  child: [
    container.child({ size: "large", display: "grid" }),
    {
      gap: "1.5rem",
      "@media": {
        [media.mobile]: {
          display: "grid",
          gridTemplateColumns: "1fr",
          gridAutoRows: "auto",
        },
        [media.tablet]: {
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gridAutoRows: "auto",
          alignItems: "start",
        },
        [media.md]: {
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "repeat(3, 1fr)",
          gridColumnGap: "2rem",
          gridRowGap: "1.5rem",
          alignItems: "stretch",
        },
      },
    },
  ],

  // Positions spécifiques pour chaque carte en desktop
  card1: {
    "@media": {
      [media.md]: {
        gridColumn: "1",
        gridRow: "1",
      },
    },
  },
  card2: {
    "@media": {
      [media.md]: {
        gridColumn: "1",
        gridRow: "2",
      },
    },
  },
  card3: {
    "@media": {
      [media.md]: {
        gridColumn: "1",
        gridRow: "3",
      },
    },
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    //gridRow: 1,
    "@media": {
      [media.tablet]: {
        order: -1,
        gridColumn: "1 / -1",
        objectFit: "contain",
      },
      [media.md]: {
        order: 0,
        gridColumn: "2",
        gridRow: "1 / 4",
      },
    },
  },

  card4: {
    "@media": {
      [media.md]: {
        gridColumn: "3",
        gridRow: "1",
      },
    },
  },
  card5: {
    "@media": {
      [media.md]: {
        gridColumn: "3",
        gridRow: "2",
      },
    },
  },
  card6: {
    "@media": {
      [media.md]: {
        gridColumn: "3",
        gridRow: "3",
      },
    },
  },
});
