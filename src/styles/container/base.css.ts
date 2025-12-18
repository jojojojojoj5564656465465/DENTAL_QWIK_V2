const spacingVariant = (property: keyof Parameters<typeof textSprinkles>[0]) =>
  ({
    sm: textSprinkles({ [property]: "sm" }),
    md: textSprinkles({ [property]: "md" }),
    lg: textSprinkles({ [property]: "lg" }),
    xl: textSprinkles({ [property]: "xl" }),
    xxl: textSprinkles({ [property]: "xxl" }),
    xxxl: textSprinkles({ [property]: "xxxl" }),
    auto: textSprinkles({ [property]: "auto" }),
  }) as const;

const _paddingBlock = spacingVariant("paddingBlock");
const _marginBlock = spacingVariant("marginBlock");
const _marginBlockStart = spacingVariant("marginBlockStart");
const _marginBlockEnd = spacingVariant("marginBlockEnd");

const sizeContainer = {
  small: "60rem",
  medium: "72rem",
  large: "90rem",
  full: "none",
  xxl: "120rem",
} as const;

export const sizeVariants = styleVariants(sizeContainer, (length, key) => {
  const maxInlineSizeValue =
    key === "full"
      ? "none"
      : `min(calc(100% - clamp(0.75rem, 0.42rem + 1.7vw, 1.7rem) * 2), ${length})`;

  return {
    maxInlineSize: maxInlineSizeValue,
  };
});
