import {
  blackA,
  limeDark,
  limeDarkA,
  orangeDark,
  orangeDarkA,
  redDark,
  redDarkA,
  sageDark,
  sageDarkA,
} from "@radix-ui/colors"

export const DEFAULT_THEME_COLORS = {
  neutral: [...Object.values(sageDark), ...Object.values(sageDarkA)],
  primary: [...Object.values(limeDark), ...Object.values(limeDarkA)],
  secondary: [...Object.values(orangeDark), ...Object.values(orangeDarkA)],
  destructive: [...Object.values(redDark), ...Object.values(redDarkA)],
}
export const createScaleObject = (key: string, colors: string[]) => {
  const steps = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "a1",
    "a2",
    "a3",
    "a4",
    "a5",
    "a6",
    "a7",
    "a8",
    "a9",
    "a10",
    "a11",
    "a12",
  ]
  return steps.reduce((scale, step, currentIndex) => {
    scale[`--ui-${key}-${step}`] = colors[currentIndex]
    return scale
  }, {} as Record<string, string>)
}
export const gradients = {
  peach: {
    light: {
      from: "#fb923c",
      to: "#fb7185",
    },
    dark: {
      from: "#ffecd2",
      to: "#fcb69f",
    },
  },
  sky: {
    light: {
      from: "#0ea5e9",
      to: "#7dd3fc",
    },
    dark: {
      from: "#a1c4fd",
      to: "#c2e9fb",
    },
  },
  lime: {
    light: {
      from: "#a3e635",
      to: "#86efac",
    },
    dark: {
      from: "#d4fc79",
      to: "#96e6a1",
    },
  },
  dusk: {
    light: {
      from: "#8b5cf6",
      to: "#fca5a5",
    },
    dark: {
      from: "#a78bfa",
      to: "#fda4af",
    },
  },
  "cotton-candy": {
    light: {
      from: "#60a5fa",
      to: "#a78bfa",
    },
    dark: {
      from: "#97c5ff",
      to: "#ebd5fe",
    },
  },
  "wild-apple": {
    light: {
      from: "#bb7aa5",
      to: "#fcd34d",
    },
    dark: {
      from: "#d299c2",
      to: "#fef9d7",
    },
  },
  "fresh-mint": {
    light: {
      from: "#00cdac",
      to: "#34d399",
    },
    dark: {
      from: "#00cdac",
      to: "#8ddad5",
    },
  },
  "grape-gummy": {
    light: {
      from: "#fb923c",
      via: "#b572cc",
      to: "#8b5cf6",
    },
    dark: {
      from: "#e9b189",
      via: "#b572cc",
      to: "#8d74e4",
    },
  },
}

const _legacy_tokens = {
  //   FIXME: just to get it working
  "--ui-color-purple": "#ac6aff",
  "--ui-color-yellow": "#ffc876",
  "--ui-color-red": "#ff776f",
  "--ui-color-green": "#7adb78",
  "--ui-color-indigo": "#858dff",
  "--ui-color-pink": "#ff98e2",
  "--ui-stroke": "#26242c",
  "--ui-n-1": "#ffffff",
  "--ui-n-2": "#cac6dd",
  "--ui-n-3": "#ada8c3",
  "--ui-n-4": "#757185",
  "--ui-n-5": "#3f3a52",
  "--ui-n-6": "#252134",
  "--ui-n-7": "#15131d",
  "--ui-n-8": "#0e0c15",
}
export const variables = {
  ..._legacy_tokens,
  "--ui-background": "var(--ui-neutral-1)",
  "--ui-foreground": "var(--ui-neutral-12)",
  "--ui-foreground-muted": "var(--ui-neutral-11)",
  "--popover": "var(--ui-neutral-1)",
  "--popover-foreground": "var(--ui-neutral-12)",
  "--ui-border": "var(--ui-neutral-7)",
  "--ui-ring": "var(--ui-primary-8)",
  "--ui-separator": "var(--ui-neutral-a6)",
  "--card": "var(--ui-neutral-1)",
  "--card-foreground": "var(--ui-neutral-12)",
  "--primary": "var(--ui-primary-a9)",
  "--primary-foreground": "var(--ui-primary-12)",
  "--secondary": "var(--ui-secondary-9)",
  "--secondary-foreground": "var(--ui-secondary-12)",
  "--accent-foreground": "var(--ui-neutral-12)",
  "--destructive": "var(--ui-destructive-9)",
  "--destructive-foreground": "var(--ui-destructive-12)",
  "--radius-full": "999px",
  "--radius-factor": "1",
  "--scaling": "1",
  "--radius-1": "calc(3px * var(--scaling) * var(--radius-factor))",
  "--radius-2": "calc(4px * var(--scaling) * var(--radius-factor))",
  "--radius-3": "calc(6px * var(--scaling) * var(--radius-factor))",
  "--radius-4": "calc(8px * var(--scaling) * var(--radius-factor))",
  "--radius-5": "calc(12px * var(--scaling) * var(--radius-factor))",
  "--radius-6": "calc(16px * var(--scaling) * var(--radius-factor))",
}
