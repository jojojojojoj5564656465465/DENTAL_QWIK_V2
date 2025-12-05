import { globalFontFace } from "@vanilla-extract/css";

const dancingScript = "dancingScript";
globalFontFace(dancingScript, {
  fontDisplay: "auto",
  fontStyle: "normal",
  fontWeight: "normal",
  src: 'url(/fonts/dancing/dancing.woff2) format("woff2")',
});

const nunito = "nunito";
globalFontFace(nunito, [
  {
    fontDisplay: "auto",
    fontStyle: "italic",
    fontWeight: "normal",
    src: "url(/fonts/numito/Nunito-Italic.woff2) format('woff2')",
  },
  {
    fontDisplay: "auto",
    fontStyle: "normal",
    fontWeight: "normal",
    src: "url(/fonts/numito/Nunito-Regular.woff2) format('woff2')",
  },
  {
    fontDisplay: "auto",
    fontStyle: "normal",
    fontWeight: "600-900",
    src: "url(/fonts/numito/Nunito-SemiBold.woff2) format('woff2')",
  },
]);

const exo = "exo";
globalFontFace(exo, [
  {
    fontDisplay: "auto",
    fontWeight: "100-400",
    src: "url(/fonts/exo/Exo-Light.woff2) format(woff2)",
  },
  {
    fontDisplay: "auto",
    fontWeight: "normal",
    src: "url(/fonts/exo/Exo-Regular.woff2) format(woff2)",
  },

  {
    fontDisplay: "auto",
    fontWeight: "600",
    src: "url(/fonts/exo/Exo-SemiBold.woff2) format(woff2)",
  },
  {
    fontDisplay: "auto",
    fontWeight: "700-900",
    src: "url(/fonts/exo/Exo-Bold.woff2) format(woff2)",
  },
]);

export default {
  dancingScript,
  exo,
  nunito,
};
