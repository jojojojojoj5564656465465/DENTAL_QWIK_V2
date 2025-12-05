import { defineProperties } from "@vanilla-extract/sprinkles";

import { media, space } from "../token";

export default defineProperties({
  conditions: {
    mobile: {},
    tablet: { "@media": media.tablet },
    desktop: { "@media": media.md },
  },
  defaultCondition: "mobile",
  responsiveArray: ["mobile", "tablet", "desktop"],
  properties: {
    paddingInlineStart: space,
    paddingInlineEnd: space,
    paddingInline: space,
    paddingBlock: space,
    paddingBlockStart: space,
    paddingBlockEnd: space,
    padding: space,

    marginInlineStart: space,
    marginInlineEnd: space,
    marginBlockStart: space,
    marginBlockEnd: space,
    marginInline: space,
    marginBlock: space,
    margin: space,
  },
  shorthands: {
    py: ["paddingBlock"],
    my: ["marginBlockEnd", "marginBlockStart"],
    px: ["paddingInlineEnd", "paddingInlineStart"],
    mx: ["marginInlineEnd", "marginInlineStart"],
    m: [
      "marginInlineEnd",
      "marginInlineStart",
      "marginBlockEnd",
      "marginBlockStart",
    ],
    p: [
      "paddingInlineEnd",
      "paddingInlineStart",
      "paddingBlockEnd",
      "paddingBlockStart",
    ],
  },
});
