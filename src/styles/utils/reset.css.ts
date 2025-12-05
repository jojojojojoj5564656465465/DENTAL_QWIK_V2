import { fontSize } from "@styles/token";
import { fallbackVar, globalStyle } from "@vanilla-extract/css";
import { color, theme, fontFamily } from "../utils/themeNew.css.ts";
import { base, reset } from "./layer.css.ts";
//import * as T from "./theme.css";

globalStyle("*, *::before, *::after", {
  "@layer": {
    [reset]: {
      boxSizing: "border-box",
      margin: 0,
    },
  },
});

globalStyle("*", {
  "@layer": {
    [reset]: {
      margin: 0,
      maxInlineSize: "100dvw",
      boxSizing: "border-box",
    },
  },
});

globalStyle("html, body", {
  "@layer": {
    [reset]: {
      blockSize: "100%",
      overflowInline: "hidden",
      boxSizing: "border-box",
      lineHeight: 1.5,
      WebkitFontSmoothing: "antialiased",
      scrollBehavior: "smooth",
      caretColor: "transparent",
    },
  },
});

globalStyle("img, svg", {
  "@layer": {
    [reset]: {
      verticalAlign: "middle",
    },
  },
});
globalStyle("input, button, textarea, select", {
  "@layer": {
    [reset]: {
      font: "inherit",
      caretColor: "auto",
      //all: 'unset',
    },
  },
});
globalStyle(":where(img, picture, video, canvas, svg)", {
  "@layer": {
    [reset]: {
      scrollBehavior: "smooth",
      display: "block",
      maxInlineSize: "100%",
    },
  },
});

globalStyle(":root", {
  "@layer": {
    [reset]: {
      colorScheme: "light dark",
      isolation: "isolate",
    },
  },
});

globalStyle("html, body *", {
  "@layer": {
    [reset]: {
      boxSizing: "border-box",
    },
  },
});

globalStyle("ul li", {
  "@layer": {
    [reset]: {
      listStyleType: "none",
    },
  },
});

globalStyle("img", {
  "@layer": {
    [reset]: {
      objectFit: "cover",
    },
  },
});

globalStyle("a", {
  "@layer": {
    [reset]: {
      textDecoration: "none",
    },
  },
});

globalStyle("a:hover", {
  "@layer": {
    [reset]: {
      textDecoration: "underline",
    },
  },
});
globalStyle("span", {
  "@layer": {
    [reset]: {
      color: color.theme.accent,
    },
  },
});
globalStyle(":where(h1, h2, h3, h4, h5, h6, p)", {
  margin: 0,
  textWrap: ["balance", "pretty"],
  caretColor: "transparent",
});

// globalStyle('body', {
//   '@layer': {
//     base: {
//       backgroundColor: `light-dark(${T.color.background.blue},#121212)`,
//     },
//   },
// })

const responsiveFontSize = {
  h1: {
    fontSize: "clamp(2.5rem, 5vw + 0.5rem, 4rem)",
    fontFamily: fontFamily.dancingScript,
  },
  h2: {
    fontSize: "clamp(2rem, 4vw, 3rem)",
    fontFamily: fontFamily.dancingScript,
  },
  h3: {
    fontSize: "clamp(1.75rem, 3.5vw, 2.5rem)",
    fontFamily: fontFamily.exo,
  },
  h4: {
    fontSize: "clamp(1.5rem, 3vw, 2rem)",
    fontFamily: fontFamily.exo,
  },
  h5: {
    fontSize: "clamp(1.25rem, 2.5vw, 1.75rem)",

    fontFamily: fontFamily.exo,
  },
  h6: {
    fontSize: "clamp(1rem, 2vw, 1.5rem)",
    fontFamily: fontFamily.exo,
  },
  p: {
    fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
    fontFamily: fontFamily.numito,
  },
  span: {
    fontSize: "inherit",
    fontFamily: "inherit",
  },
  li: {
    fontSize: "clamp(1rem, 1.5vw, 1.25rem)",
    fontFamily: fontFamily.numito,
  },
} as const satisfies Record<string, Record<"fontSize" | "fontFamily", string>>;

for (const [key, value] of Object.entries(responsiveFontSize)) {
  const { fontSize, fontFamily } = value;
  globalStyle(key, {
    "@layer": {
      [reset]: {
        fontSize,
        fontFamily,
      },
    },
  });
}
globalStyle("p", {
  "@layer": {
    [base]: {
      lineHeight: "28px",
      fontSize: fontSize["base"],
      fontWeight: "400",
      color: fallbackVar(theme.text, "#527282"),
      fontFamily: "Poppins",
    },
  },
});
