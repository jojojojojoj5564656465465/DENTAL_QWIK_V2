import { container, containerGrid } from "@container";
import { flex } from "@recipe";
import { space } from "@styles/token";
import { color } from "@theme";
import { globalStyle, style, styleVariants } from "@vanilla-extract/css";

export const cardsWrapper = style([
  containerGrid({ background: false, cols: 4, gap: true, size: "medium" }),
  {
    marginBlock: space.lg,
  },
]);

export const CardStyle = styleVariants({
  icon: {
    aspectRatio: 1,
    blockSize: 55,
    inlineSize: 55,
  },
  wrapper: [
    container({ background: true, hover: true, theme: "whiteBg" }),
    flex({ direction: "column", gap: "xxs", side: 1 }),
    {
      ":before": {
        backgroundColor: color.variable.accent,
        blockSize: "100%",
        bottom: "-100%",
        content: "",
        inlineSize: "100%",
        left: 0,
        maskImage: "linear-gradient(to bottom, transparent 20%, black 100%)",
        position: "absolute",

        transition: "bottom 0.4s ease-out",
        zIndex: -1,
      },
      borderRadius: 30,
      //outline: color.variable.darkDark,
      cursor: "pointer",
      overflow: "hidden",
      padding: space.sm,

      selectors: {
        "&:hover::before": {
          bottom: "0",
        },
      },
      zIndex: 1,
    },
  ],
});

globalStyle(`${CardStyle.wrapper}:hover > ${CardStyle.icon}`, {
  rotate: "40deg",
});

globalStyle(`${CardStyle.wrapper}:hover > ${CardStyle.icon} path`, {
  fill: color.theme.textHover,
});
