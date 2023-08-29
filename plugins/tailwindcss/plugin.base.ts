// TODO: add --ui-overlay

import { blackA } from "@radix-ui/colors"

import { DEFAULT_THEME_COLORS, createScaleObject, variables } from "./themes/default.theme"

export const createOverlayScaleObject = () => {
  return Object.values(blackA).reduce((scale, step, currentIndex) => {
    scale[`--ui-overlay-${currentIndex}`] = step
    return scale
  }, {} as Record<string, string>)
}

const baseClasses = {
  overlay: createOverlayScaleObject(),
}

export default baseClasses

export const tokens = {
  ":root": {
    ...createOverlayScaleObject(),
    ...createScaleObject("neutral", DEFAULT_THEME_COLORS["neutral"]),
    ...createScaleObject("brand", DEFAULT_THEME_COLORS["primary"]),
    ...createScaleObject("accent", DEFAULT_THEME_COLORS["secondary"]),
    ...createScaleObject("destructive", DEFAULT_THEME_COLORS["destructive"]),
    ...variables,
  },
}
