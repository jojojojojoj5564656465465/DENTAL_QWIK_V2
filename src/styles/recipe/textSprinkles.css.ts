import { createSprinkles, defineProperties } from "@vanilla-extract/sprinkles";

// Assuming these imports are correctly set up
import { media, space } from "../token"; // Renamed imported 'space' to avoid conflict
import f from "../utils/fontFace.css.ts"; // Make sure these are exported font family names
import { theme } from "../utils/themeNew.css.ts"; // Make sure 'theme' structure matches usage (e.g., theme.primary or theme.colors.primary)
import marginPaddingSprinkles from "./spaceMarginPadding.css.ts"; // Ensure this is the defineProperties result

// Define semantic line heights (unitless are generally recommended)
const lineHeights = {
  none: 1,
  tight: 1.25,
  snug: 1.375,
  normal: 1.5,
  relaxed: 1.625,
  loose: 2,
  inherit: "inherit",
};

// Define semantic font weights
const fontWeights = {
  thin: 100,
  extralight: 200,
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
  black: 900,
  inherit: "inherit",
};

// Define letter spacing
const letterSpacings = {
  tighter: "-0.05em",
  tight: "-0.025em",
  normal: "0em",
  wide: "0.05em",
  wider: "0.1em",
  widest: "0.15em",
  inherit: "inherit",
};

const textProperties = defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": media.tablet },
    desktop: { "@media": media.md }, // Assuming media.md is your desktop breakpoint query string
  },
  defaultCondition: "mobile",
  responsiveArray: ["mobile", "tablet", "desktop"],
  properties: {
    // --- Font & Typeface ---
    fontSize: {
      cqi: "clamp(0.60rem, .65cqi, .9cqi)", // Container Query Based Size
      xs: "clamp(0.78rem, calc(0.77rem + 0.03vw), 0.80rem)",
      sm: "clamp(0.94rem, calc(0.92rem + 0.11vw), 1.00rem)",
      base: "clamp(1.13rem, calc(1.08rem + 0.22vw), 1.25rem)",
      md: "clamp(1.35rem, calc(1.28rem + 0.37vw), 1.56rem)",
      lg: "clamp(1.62rem, calc(1.50rem + 0.58vw), 1.95rem)",
      xl: "clamp(1.94rem, calc(1.77rem + 0.87vw), 2.44rem)",
      "2xl": "clamp(2.33rem, calc(2.08rem + 1.25vw), 3.05rem)",
      "3xl": "clamp(2.80rem, calc(2.45rem + 1.77vw), 3.82rem)",
      "4xl": "clamp(3.36rem, calc(2.87rem + 2.45vw), 4.77rem)",
      "5xl": "clamp(4.03rem, calc(3.36rem + 3.36vw), 5.96rem)",
      "6xl": "clamp(4.84rem, calc(3.93rem + 4.54vw), 7.45rem)",
      inherit: "inherit",
    },
    fontFamily: {
      dancingScript: f.dancingScript,
      exo: `${f.exo}, Times, serif`,
      numito: `${f.nunito}, Arial, sans-serif`,
      inherit: "inherit",
    },
    fontWeight: fontWeights,
    lineHeight: lineHeights,
    letterSpacing: letterSpacings,
    fontStyle: ["normal", "italic", "inherit"],

    // --- Color & Appearance ---
    color: theme, // Assumes theme = { primary: '...', accent: '...', etc. }
    backgroundColor: theme,
    borderColor: theme, // Useful if text elements have borders

    // --- Text Layout & Decoration ---
    textAlign: [
      "left",
      "center",
      "right",
      "justify",
      "start",
      "end",
      "inherit",
    ],
    verticalAlign: [
      "baseline",
      "top",
      "middle",
      "bottom",
      "text-top",
      "text-bottom",
      "sub",
      "super",
      "inherit",
    ],
    textTransform: ["uppercase", "lowercase", "capitalize", "none", "inherit"],
    textDecoration: ["underline", "line-through", "none", "inherit"], // Could expand with 'overline' etc. if needed
    textDecorationColor: theme,
    // textDecorationStyle: ['solid', 'dotted', 'dashed', 'wavy'], // Optional
    // textDecorationThickness: ['auto', 'from-font', '1px', '2px'], // Optional
    textOverflow: ["clip", "ellipsis", "inherit"],
    whiteSpace: ["normal", "nowrap", "pre", "pre-wrap", "pre-line", "inherit"],
    overflow: ["visible", "hidden", "clip", "scroll", "auto"], // Often used with textOverflow/whiteSpace

    // --- Visibility & Interaction ---
    visibility: ["visible", "hidden", "collapse"],
    cursor: ["pointer", "default", "text", "not-allowed"], // Optional: If text acts as interactive element
    userSelect: ["none", "text", "all", "auto"], // Optional: Control text selection
    caret: ["auto", "default", "pointer", "text", "wait"], // Optional: Caret appearance
    caretColor: ["transparent", "inherit"], // Extend caretColor options
  },
  // No text-specific shorthands defined here, usually better to keep atomic
  // shorthands: { ... }
});

// Combine text properties with margin/padding properties
export const textSprinkles = createSprinkles(
  textProperties,
  marginPaddingSprinkles,
);

// Export the type for easier use in components
export type TextSprinkles = Parameters<typeof textSprinkles>[0];
