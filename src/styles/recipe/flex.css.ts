import { recipe } from "@vanilla-extract/recipes";
import { space } from "../token";
import { defaultContainer } from "../utils/base.css";

export const flex = recipe({
  base: [
    defaultContainer,
    {
      display: "flex",
    },
  ],
  variants: {
    direction: {
      row: { flexDirection: "row" },
      rowReverse: { flexDirection: "row-reverse" },
      column: { flexDirection: "column" },
    },
    side: {
      1: { justifyContent: "start", alignItems: "start" },
      2: { justifyContent: "center", alignItems: "start" },
      3: { justifyContent: "end", alignItems: "start" },
      4: { justifyContent: "start", alignItems: "center" },
      5: { justifyContent: "center", alignItems: "center" },
      6: { justifyContent: "end", alignItems: "center" },
      7: { justifyContent: "start", alignItems: "end" },
      8: { justifyContent: "center", alignItems: "end" },
      9: { justifyContent: "end", alignItems: "end" },
    },
    justifyContent: {
      between: { justifyContent: "space-between" },
      around: { justifyContent: "space-around" },
      evenly: { justifyContent: "space-evenly" },
    },
    alignItems: {
      stretch: { alignItems: "stretch" },
      baseline: { alignItems: "baseline" },
      firstBaseline: { alignItems: "first baseline" },
      lastBaseline: { alignItems: "last baseline" },
      safeCenter: { alignItems: "safe center" },
      unsafeCenter: { alignItems: "unsafe center" },
      safeStart: { alignItems: "safe start" },
    },
    wrap: {
      true: {
        flexWrap: "wrap",
      },
    },
    gap: {
      xxxs: { gap: space.xxxs },
      xxs: { gap: space.xxs },
      xs: { gap: space.xs },
      sm: { gap: space.sm },
      md: { gap: space.md },
      lg: { gap: space.lg },
      xl: { gap: space.xl },
      xxl: { gap: space.xxl },
      xxxl: { gap: space.xxxl },
      "1rem": { gap: space["1rem"] },
      "1.25rem": { gap: space["1.25rem"] },
      "1.5rem": { gap: space["1.5rem"] },
      "1.75rem": { gap: space["1.75rem"] },
      "2rem": { gap: space["2rem"] },
      "2.25rem": { gap: space["2.25rem"] },
      "2.5rem": { gap: space["2.5rem"] },
      "2.75rem": { gap: space["2.75rem"] },
    },
  },
  defaultVariants: {
    direction: "row",
    side: 1,
    wrap: false,
  },
});
