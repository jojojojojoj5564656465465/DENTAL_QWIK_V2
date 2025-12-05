import { space } from "@styles/token";
import { style } from "@vanilla-extract/css";

export const hr = style({
  blockSize: 4,
  marginBlock: space.sm,
  background:
    "linear-gradient(0deg,rgba(34, 193, 195, 1) 0%, rgba(16, 40, 145, 1) 100%)",
});
