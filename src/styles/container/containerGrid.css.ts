// import {
//   assignVars,
//   createThemeContract,
//   createVar,
//   style,
//   styleVariants,
// } from "@vanilla-extract/css";
// import { recipe } from "@vanilla-extract/recipes";
// import { media } from "../token";
// //import { defaultContainer } from "../utils/base.css";
// import { containerSize } from "../utils/base.css.ts";
// import { colorTheme, theme } from "../utils/themeNew.css.ts";
// import { fluid } from "../utils/utils.ts";

// /**MARK:GOBAL IMPORT
//  *
//  */

// import { textSprinkles } from "@/styles/recipe/textSprinkles.css";

// const spacingVariant = (property: keyof Parameters<typeof textSprinkles>[0]) =>
//   ({
//     sm: textSprinkles({ [property]: "sm" }),
//     md: textSprinkles({ [property]: "md" }),
//     lg: textSprinkles({ [property]: "lg" }),
//     xl: textSprinkles({ [property]: "xl" }),
//     xxl: textSprinkles({ [property]: "xxl" }),
//     xxxl: textSprinkles({ [property]: "xxxl" }),
//     auto: textSprinkles({ [property]: "auto" }),
//   }) as const;

// const paddingBlock = spacingVariant("paddingBlock");
// const marginBlock = spacingVariant("marginBlock");
// const marginBlockStart = spacingVariant("marginBlockStart");
// const marginBlockEnd = spacingVariant("marginBlockEnd");

// const sizeContainer = {
//   small: "60rem",
//   medium: "72rem",
//   large: "90rem",
//   full: "none",
//   xxl: "120rem",
// } as const;

// export const sizeVar = styleVariants(sizeContainer, (length, key) => {
//   const maxInlineSizeValue =
//     key === "full"
//       ? "none"
//       : `min(calc(100% - clamp(0.75rem, 0.42rem + 1.7vw, 1.7rem) * 2), ${length})`;

//   return {
//     maxInlineSize: maxInlineSizeValue,
//   };
// });

// const spaceLrVar = createVar({
//   syntax: "<length>",
//   inherits: false,
//   initialValue: "40px",
// });

// const spaceGapVar = createVar({
//   syntax: "<length>",
//   inherits: false,
//   initialValue: "20px",
// });

// const colsConfig = {
//   2: { tablet: 2, md: 2 },
//   3: { tablet: 2, md: 3 },
//   4: { tablet: 2, md: 4 },
//   6: { tablet: 3, md: 6 },
//   8: { tablet: 4, md: 8 },
//   12: { tablet: 6, md: 12 },
//   24: { tablet: 12, md: 24 },
// };

// /**
//  * @description le nombre de colones maximum Attention ne gere pas le mobile
//  *
//  */
// const _numberOfColumns = styleVariants(colsConfig, (config, key) => ({
//   [key]: {
//     gridTemplateColumns: "minmax(0,1fr)",
//     "@media": {
//       [media.tablet]: {
//         gridTemplateColumns: `repeat(${config.tablet}, minmax(0,1fr))`,
//       },
//       [media.md]: {
//         gridTemplateColumns: `repeat(${config.md}, minmax(0,1fr))`,
//       },
//     },
//   },
// }));

// export const containerGrid = recipe({
//   base: [
//     {
//       marginInline: "auto",
//       boxSizing: "border-box",
//       position: "relative",
//       isolation: "isolate",
//       caretColor: "transparent",
//       display: "grid",
//     },
//   ],
//   variants: {
//     // cols: numberOfColumns,

//     gap: {
//       true: {
//         gap: spaceGapVar,
//       },
//     },

//     /**MARK: GLOBAL
//      *
//      */
//     marginBlock,
//     marginBlockStart,
//     marginBlockEnd,
//     paddingBlock,
//     background: {
//       true: {
//         backgroundColor: theme.background,
//       },
//     },

//     size: sizeVar,
//     theme: {
//       ...colorTheme,
//     },
//   },
//   defaultVariants: {
//     background: true,
//   },
// });
