import { textRecipe } from "@recipe";
import { fontSize, media, space } from "@styles/token";
import { fluid } from "@styles/utils/utils.ts";
import { color } from "@theme";
import {
  createContainer,
  createVar,
  style,
  styleVariants,
} from "@vanilla-extract/css";
import { container, containerGrid } from "~/styles/container/index.css";

export const sectionContainerIndex = style([
  {
    marginBlock: space.md,
    textAlign: "center",
  },
  container({ size: "large", theme: "blueLightBg" }),
]);
export const sectionContainer__Text = styleVariants({
  wrapper: { marginBlock: fluid(20, 45) },
  h6: [textRecipe({ font: "preTitle", textAlign: "center" })],
  h2: [textRecipe({ font: "title", textAlign: "center" })],
});

/**
 * MARK: ELEMENT
 */
const logoSize = createVar({
  inherits: false,
  initialValue: "70px",
  syntax: "<length>",
});
/**
 * MARK: GRID COMPO
 */
export const gridContainer = style([
  {
    // gridTemplateRows: "repeat(auto-fit, minmax(8.1rem, 1fr ))",
    gridAutoFlow: "column",
    justifyContent: "center",
    gap: fluid(10, 20),
    "@media": {
      "screen and (440px < width < 606px)": { columnGap: 11.5 },
      [media.tablet]: {
        gridTemplateRows: "10rem, repeat(3,6rem)",
      },
      [media.md]: {
        gridTemplateRows: "repeat(3, 9rem)",
      },
    },
  },
  containerGrid({ fullSize: "large", theme: "blueLightBg" }),
]);
/**
 * MARK: card
 */
export const cardContainer = createContainer();
/**
 * @description le grid interieur de la card avec titre desc et le logo
 *deja importé dans élément
 */
const inside = style({
  //maxInlineSize: "45rem",
  display: "inline-grid",
  gridTemplateAreas: '"h4 logo" "txt logo"',
  gridTemplateColumns: `${logoSize} 1fr`,
  containerName: cardContainer,
  containerType: "inline-size",
  "@container": {
    [`${cardContainer} (width <= 250px)`]: {
      gridTemplateAreas: '"h4 h4" "txt txt"',
      gridTemplateColumns: "1fr 1fr",
    },
  },
  selectors: {
    "&:nth-of-type(even)": {
      "@media": {
        [media.tablet]: {
          gridTemplateAreas: '"logo h4" "logo txt"',
          gridTemplateColumns: `${logoSize} 1fr`,
        },
      },
    },
  },

  "@media": {
    [media.mobile]: {
      gridTemplateAreas: '"logo h4" "logo txt"',
    },
    [media.tablet]: {
      gridTemplateRows: "min-content min-content",
      gridTemplateColumns: `1fr ${logoSize}`,
    },
    [media.md]: {
      gridTemplateColumns: `1fr ${logoSize}`,
    },
  },
});

/**
 * @description exterieur de la card
 */
export const element = style([
  {
    gridColumn: "2 / span 3",
    "@media": {
      [media.tablet]: {
        gridColumn: "2 / span 3",
      },
      [media.md]: {
        gridColumn: "2 / span 4",
      },
    },
    selectors: {
      "&:nth-of-type(even)": {
        "@media": {
          [media.tablet]: {
            gridColumn: "-5 / -2",
          },
          [media.md]: {
            gridColumn: "-6 / -2",
          },
        },
      },
    },
  },
  inside,
]);

const textAlignement = style({
  textAlign: "left",
  textTransform: "capitalize",
  selectors: {
    [`${element}:nth-of-type(odd) &`]: {
      "@media": {
        [media.tablet]: {
          textAlign: "right",
        },
      },
    },
  },
});
export const title = style([
  {
    gridArea: "h4",
    textDecoration: "underline",
    paddingBlock: 0,
    "@container": {
      [`${cardContainer} (width <= 250px)`]: {
        fontWeight: "600",
        gridColumn: "span 2",
      },
    },
  },
  textAlignement,
  textRecipe({ font: "highLight" }),
]);
export const description = style([
  textAlignement,
  textRecipe({ font: "text" }),
  {
    gridArea: "txt",

    "@container": {
      [`${cardContainer} (width <= 250px)`]: {
        fontSize: fontSize.base,
        gridColumn: "span 2",
        lineHeight: "1.1",
      },
    },
  },
]);
export const logoIcon = style({
  fontSize: fontSize["4xl"],
  marginInline: 6,
  gridArea: "logo",
  placeSelf: "center",
  transition: "transform 1s 1s ease",
  color: color.theme.accent,
  "@container": {
    [`${cardContainer} (width <= 250px)`]: {
      display: "none",
    },
  },
  selectors: {
    [`${element}:hover &`]: { transform: "rotate(10deg)" },
  },
});

export const image = style({
  minBlockSize: 150,
  display: "inline-grid",
  gridArea: "1 / 1/ span 1 / -1",
  justifySelf: "center",
  //backgroundImage: "url(public/why-choose-us-img.avif)",

  // backgroundRepeat: "no-repeat",
  // backgroundSize: "contain",
  // backgroundPositionX: "center",
  "@media": {
    [media.tablet]: {
      minBlockSize: "auto",
      gridArea: "1 / 2 /span 1 / span 6",
    },
    [media.md]: {
      alignSelf: "center",
      gridArea: "1/ 6 / -1 / -6",
      backgroundPositionY: "center",
    },
  },
});

export const test = style({
  height: "150px",
  width: "150px",
  //backgroundColor: "red",
});
