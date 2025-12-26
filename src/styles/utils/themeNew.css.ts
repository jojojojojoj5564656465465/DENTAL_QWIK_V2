import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
  globalStyle,
} from "@vanilla-extract/css";

import f from "./fontFace.css";
import { ld } from "./utils";

export const fontFamily = createGlobalTheme(":root", {
  dancingScript: `${f.dancingScript}, Times, serif`,
  exo: `${f.exo}, Times, serif`,
  numito: `${f.nunito}, Arial, sans-serif`,
});

/**
 * MARK: COLORS
 */
const variable = createGlobalTheme(":root", {
  accent: "oklch(58.09% 0.1151 235.69)",
  blackToWhite: ld("black", "oklch(97.44% 0.0134 240.95)"),
  darkDark: "oklch(25.88% 0.037 240.95)",
  darkLight: "oklch(32.25% 0.0573 233.51)",
  r: ld("orange", "green"),
  textLight: "oklch(53.36% 0.0445 230.26)",
  whiteBlue: "oklch(97.44% 0.0134 240.95)",
  whiteToBlack: ld("oklch(97.44% 0.0134 240.95)", "black"),
});
globalStyle("body", {
  backgroundColor: variable.whiteBlue,
});
export const theme = createThemeContract({
  accent: null,
  background: null,
  backgroundHover: null,
  divider: null,
  primary: null,
  secondary: null,
  text: null,
  textHover: null,
});
const accent = createTheme(theme, {
  accent: "white",
  background: variable.accent,
  backgroundHover: variable.darkLight,
  divider: "#0E384C1A",
  primary: "white",
  secondary: "null",
  text: "white",
  textHover: variable.darkDark,
});
const darkBlueBanner = createTheme(theme, {
  accent: variable.accent,
  background: "oklch(32.25% 0.0573 233.51)",
  backgroundHover: "oklch(72.55% 0.0573 233.51)",
  divider: "white",
  primary: "white",
  secondary: "null",
  text: "white",
  textHover: "black",
});

const whiteBg = createTheme(theme, {
  accent: variable.accent,
  background: "white",
  backgroundHover: variable.darkLight,
  divider: "oklch(0.67 0.1 207.53)",
  primary: variable.darkDark,
  secondary: "null",
  text: variable.textLight,
  textHover: "white",
});
const whiteLD = createTheme(theme, {
  accent: variable.accent,
  background: "white",
  backgroundHover: variable.darkLight,
  divider: variable.accent,
  primary: variable.darkDark,
  secondary: "null",
  text: variable.textLight,
  textHover: variable.accent,
});

const blueLightBg = createTheme(theme, {
  accent: variable.accent,
  background: "oklch(97.44% 0.0134 240.95)",
  backgroundHover: "#0e384c",
  divider: "#0E384C1A",
  primary: "#0e384c",
  secondary: "null",
  text: "oklch(53.36% 0.0445 230.26)",
  textHover: "white",
});

export const colorTheme = {
  accent,
  blueLightBg,
  darkBlueBanner,
  whiteBg,
  whiteLD,
} as const;

export const color = {
  theme,
  variable,
} as const;

