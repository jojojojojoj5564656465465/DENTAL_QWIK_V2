import { media } from "@styles/token";
import { fluid } from "@styles/utils/utils";
import { color } from "@theme";
import { createVar, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { container } from "@container";
const overlaping = createVar({
  syntax: "<length>",
  inherits: false,
  initialValue: "250px",
});

export const overlay = style({
  backgroundImage: `linear-gradient(to bottom, ${color.variable.whiteBlue} ${overlaping}, ${color.variable.darkLight} ${overlaping})`,
  borderImageSlice: "fill 1",
});

export const sectionWrapper = style([
  overlay,
  container({ hover: false, theme: "accent", display: "block", size: "full" }),
  {
    blockSize: 600,
    aspectRatio: "21/9",
    "@media": {
      [media.mobile]: {
        blockSize: "349px",
        vars: {
          [overlaping]: "0px",
        },
      },
      [media.tablet]: {
        blockSize: "449px",
        vars: {
          [overlaping]: "120px",
        },
      },
      [media.md]: {
        blockSize: "609px",
        vars: {
          [overlaping]: "250px",
        },
      },
    },
  },
]);

export const menBG = createVar();

export const wrapper = style([
  container({ size: "medium", background: false }),
  {
    clipPath: "inset(0 round 50px)",
    paddingBlock: fluid(5, 40),
    blockSize: calc.multiply(overlaping, 1.5),
    inlineSize: "100%",
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
  },
]);
