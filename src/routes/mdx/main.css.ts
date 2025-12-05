import { isArrayBufferView } from "node:util/types";
import { createVar, globalStyle, style } from "@vanilla-extract/css";
import { container } from "@/styles/recipe";
//import { media } from "@/styles/token";
import { custom } from "@/styles/utils/layer.css.ts";

export const article = style([{}]);

globalStyle(`${article} > p`, {
  "@layer": {
    [custom]: {
      color: "red",
      fontSize: ".5rem",
    },
  },
});

const colorVar = createVar({
  inherits: true,
  syntax: "<color>",
  initialValue: "black",
});
const fontSizeVar = createVar({
  inherits: true,
  syntax: "<length>",
  initialValue: "1rem",
});
globalStyle(`${article} > p`, {
  lineHeight: "1.5",
  "@layer": {
    [custom]: {
      color: colorVar,
      fontSize: fontSizeVar,
    },
  },
});
[1, 2, 3, 4].forEach((e) => {
  globalStyle(`${article} > p:nth-of-type(${e})`, {
    "@layer": {
      [custom]: {
        vars: {
          [colorVar]: "orange",
          [fontSizeVar]: `${e}rem`,
        },
      },
    },
  });
});

globalStyle(`${article} h1`, {
  color: "tomato ",
  fontSize: "3.5rem",
});
