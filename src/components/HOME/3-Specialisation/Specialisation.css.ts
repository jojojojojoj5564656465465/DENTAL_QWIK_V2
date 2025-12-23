import { flex, grid, textSprinkles as sprinkle } from "@recipe";
import { color } from "@theme";
import { globalStyle, style, styleVariants } from "@vanilla-extract/css";

export const parent = style([
  grid({
    background: false,
    marginBlock: "lg",
    theme: "blueLightBg",
    size: "medium",
    numberColumn: 4,
    gap: "sm",
  }),
]);

export const CardStyle = styleVariants({
  icon: {
    aspectRatio: 1,
    blockSize: 55,
    inlineSize: 55,
  },
  wrapper: [
    flex({
      direction: "column",
      gap: "xxs",
      side: 1,
      background: true,
      hover: true,
      theme: "whiteBg",
    }),
    sprinkle({
      cursor: "pointer",
      p: "1.75rem",
      overflow: "hidden",
      borderColor: "accent",
    }),
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
      borderRadius: 1,
      borderWidth: "1.2px",
      borderStyle: "solid",
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
