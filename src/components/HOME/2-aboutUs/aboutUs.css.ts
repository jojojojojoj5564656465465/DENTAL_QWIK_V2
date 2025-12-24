import { textRecipe, flex } from "@recipe";
import { media } from "@styles/token";
import { fluid } from "@styles/utils/utils.ts";
import { createVar, style, styleVariants } from "@vanilla-extract/css";
import { grid } from "@recipe";
/**
 * WRAPPER DE LA PAGE INDEX
 */
export const index_section = style([
  grid({
    //numberColumn: 2,
    background: false,
    hover: false,
    size: "medium",
    theme: "blueLightBg",
    gap: "lg",
  }),
  {
    "@media": {
      [media.tablet]: {
        gridTemplateColumns: "1fr",
      },
      [media.md]: {
        gridTemplateColumns: "1fr 1fr",
      },
    },
  },
]);

/**
 * Content File
 */
export const content__wrapper = style({
  alignSelf: "center",

  marginTop: 10,
  //inlineSize: '100%',

  zIndex: 2,
});

export const text = styleVariants({
  li: [
    textRecipe({ font: "highLight" }),
    {
      listStyle: "none",
    },
  ],
  ul: [flex({ direction: "row", wrap: true, gap: "md", side: 4 }), {}],
});

/**
 * Composant de Gauche pour les images qui se
 * @MARK: IMAGES LEFT
 */

const numberOfCc = createVar({
  inherits: true,
  initialValue: "6",
  syntax: "<integer>",
});
export const newImageGrid_Wrapper = style({
  "@media": {
    [media.tablet]: {
      vars: {
        [numberOfCc]: "7",
      },
    },
    [media.md]: {
      vars: {
        [numberOfCc]: "9",
      },
    },
  },
  aspectRatio: "1",
  display: "grid",
  gap: "0px 0px",
  gridAutoFlow: "row",
  gridTemplateColumns: `repeat(${numberOfCc},1fr)`,
  gridTemplateRows: `repeat(${numberOfCc},1fr)`,
  justifyItems: "stretch",
  marginTop: fluid(10, 50),
  width: "100%",
});
export const carreImage = createVar({
  inherits: false,
  initialValue: "",
  syntax: "<string>",
});
export const rectangleImage = createVar({
  inherits: false,
  initialValue: "",
  syntax: "<string>",
});
const baseImageStyle = style({
  backgroundPosition: "center",
  border: "10px solid white",
  borderRadius: "20px",
});
export const newImageGrid = styleVariants({
  square: [
    baseImageStyle,
    {
      backgroundImage: carreImage,
      gridArea: "1 / 1 / 7 / 7",
    },
  ],
  vertical: [
    baseImageStyle,
    {
      "@media": {
        [media.md]: {
          backgroundPosition: "0 0",
          gridArea: "6 / 4 / -1 / -1",
        },
      },
      backgroundImage: rectangleImage,

      backgroundPosition: "-10px -70px",
      gridArea: "5 / 3 / -1 / -1",
    },
  ],
});
