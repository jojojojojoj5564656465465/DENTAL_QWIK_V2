import { containerGrid, textRecipe } from "@recipe";
import { media, space } from "@styles/token";
import { fluid } from "@styles/utils/utils.ts";
import { createVar, style, styleVariants } from "@vanilla-extract/css";

/**
 * WRAPPER DE LA PAGE INDEX
 */
export const wrapperIndex = style([
  containerGrid({ cols: 2, size: "medium" }),

  {
    "@media": {
      "(width< 846px)": {
        gridTemplateColumns: "1fr",
      },
    },
    // border: `${color.theme.primary} 5px solid`,
    gap: fluid(10, 50),
  },
]);

/**
 * Content File
 */
export const content__wrapper = style({
  alignSelf: "center",
  display: "grid",
  gap: fluid(10, 50),
  marginTop: 10,
  //inlineSize: '100%',
  minInlineSize: 300,
  zIndex: 2,
});

export const text = styleVariants({
  li: [
    textRecipe({ font: "highLight" }),
    {
      alignItems: "center",
      display: "flex",
      listStyle: "none",
      // ":before": {
      // 	width: liSizeMask,
      // 	height: liSizeMask,
      // 	marginInlineEnd: "min(5px + 1vw, 10px)",
      // 	display: "inline",
      // 	backgroundSize: "cover",
      // 	fill: "darkgreen",
      // 	content: "",
      // 	backgroundImage: `url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="red" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="%231C274C" stroke-width="1.5"/><path stroke="%231C274C" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="m8.5 12.5 2 2 5-5"/></svg>')`,
      // 	//
      // 	//
      // 	//
      // 	//
      // 	//
      // 	// maskImage: 'public/check.svg',
      // 	maskSize: "contain",
      // 	maskRepeat: "no-repeat",
      // 	maskPosition: "center", // Utilisera la couleur du texte (rouge)
      // },
    },
  ],
  ul: [
    {
      display: "grid",
      gap: space.xs,
      gridTemplateColumns: "repeat(auto-fit,minmax(9.40rem,1fr))",
    },
  ],
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
