import { type GlobalStyleRule, globalStyle } from "@vanilla-extract/css";
import * as v from "valibot";
import { custom } from "./layer.css.ts";

/**
 * @description Calculates a fluid value based px
 * @param {number} minSize use pixels
 * @param {number} maxSize  use pixels
 * @returns {string} Clamp value string (e.g. "clamp(10rem, 12rem + 12vw, 20rem)")
 * @version 1.0.2
 * @todo Implement this function.
 */
const fluid = (minSize: number, maxSize: number) => {
  const numberConvertToRem = v.pipe(
    v.number(),
    v.maxValue(490),
    v.minValue(1),
    v.transform((e) => e / 16),
    v.description("convert to rem px"),
  );
  const fluid = v.pipe(
    v.object({
      minSize: numberConvertToRem,
      maxSize: numberConvertToRem,
    }),
    v.partialCheck(
      [["minSize"], ["maxSize"]],
      (input) => input.minSize < input.maxSize,
      "maxVwRem is less than minScreenW invert data",
    ),
    v.transform((obj) => {
      const slope = (obj.maxSize - obj.minSize) / (75 - 20);
      const yAxisIntersection = -20 * slope + obj.minSize;
      return `clamp(${obj.minSize}rem, ${yAxisIntersection}rem + ${slope * 100}vw, ${obj.maxSize}rem)`;
    }),
  );
  const parserFluid = v.parser(fluid);
  return parserFluid({ minSize, maxSize });
};
/**
 * light-dark css
 * add => color-scheme: light dark;
 * @param {string} light
 * @param {string} dark
 * @returns {string}
 */
const ld = (light: string, dark: string) => `light-dark(${light},${dark})`;

/**
 * Applique des styles globaux à des éléments HTML donnés sous un parent spécifié.
 * @param parent - Le sélecteur parent pour les styles.
 * @param obj - Un objet de styles à appliquer aux éléments HTML.
 */
const globalStyleTag = (
  parent: string,
  obj: Record<string, GlobalStyleRule>,
): void => {
  const regexParentStat = /^&(:[a-z-]{4,})\s+(.+)/;
  for (const [key, value] of Object.entries(obj)) {
    const match = key.match(regexParentStat);
    if (match?.[1] && match[2]) {
      globalStyle(`${parent}${match[1]} > ${match[2]}`, {
        "@layer": {
          [custom]: value,
        },
      });
    } else {
      globalStyle(`${parent} > ${key}`, {
        "@layer": {
          [custom]: value,
        },
      });
    }
  }
};

export function boxShadowGenerator(colors: unknown, spread = 1): string {
  const ArrayLengthSchema = v.pipe(
    v.array(v.string()),
    v.minLength(2, "At least 2 colors are required"),
    v.maxLength(7, "Maximum 7 colors allowed"),
  );
  const result = v.safeParse(ArrayLengthSchema, colors);
  if (!result.success) {
    throw new Error(
      `Invalid colors: ${result.issues.map((i) => i.message).join(", ")}`,
    );
  }

  return result.output
    .map((color, index) => `0 0 0 ${spread * (index + 1)}px ${color}`)
    .join(", ");
}

type DirectionGradien = "to top" | "to bottom" | "to left" | "to right";
/**
 * Crée un style CSS pour la propriété border-image avec un dégradé linéaire.
 *
 * @param colors - Tableau de couleurs au format string (ex: 'oklch(58.09% 0.1151 235.69 / 40%)').@param colors - Tableau de couleurs au format string (ex: 'oklch(58.09% 0.1151 235.69 / 40%)').
 * @param deg {number}
 *
 * @returns Un objet contenant la propriété CSS 'borderImage'.
 */
const createBorderImage = (
  deg: number | DirectionGradien,
  ...colors: string[]
): string => {
  const colorsValidation = v.pipe(
    v.array(v.string()),
    v.minLength(
      2,
      "La fonction nécessite au moins trois arguments : un angle ou une direction et au moins deux couleurs.",
    ),
    v.maxLength(7, "limite is 7 colors"),
  );
  v.parse(colorsValidation, colors);
  const isNumberP = v.parser(
    v.pipe(v.number(), v.minValue(1), v.maxValue(360)),
  );
  const degreResult = isNumberP(deg) ? `${deg}deg` : deg;
  const gradient = `linear-gradient(${degreResult}, ${colors.join(", ")})`;
  return `${gradient} fill 1`;
};

export {
  // boxShadowGenerator,
  globalStyleTag,
  ld,
  fluid,
  createBorderImage,
};
