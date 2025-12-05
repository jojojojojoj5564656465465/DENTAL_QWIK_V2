import { layer } from "@vanilla-extract/css";

export const custom = layer("custom");
export const base = layer({ parent: custom }, "base");
export const reset = layer({ parent: base }, "reset");
