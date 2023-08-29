import plugin from "tailwindcss/plugin"

import { tokens } from "./plugin.base"
// import componentClasses from "./plugin.components"
// import utilititeClasses from "./plugin.utilitites"
import { gradients } from "./themes/default.theme"

const defaultOptions = {
  gradients,
}

const tailwindPlugin = plugin.withOptions(
  function (_options) {
    const options = {
      ...defaultOptions,
      ...(_options || {}),
    }
    return function ({ addBase, addUtilities, addComponents, matchUtilities, theme }) {
      // ===== Base =====
      addBase({
        ...tokens,
      })
      // ===== Gradients =====
      const gradients = Object.entries(options.gradients || {})
      const gradientClasses = gradients.reduce(
        (cssVariables, [name, colors]) => {
          const light = {
            ...cssVariables[":root"],
            [`--gradient-${name}-from`]: colors.light.from,
            [`--gradient-${name}-to`]: colors.light.to,
            // @ts-ignore
            ...(colors.light.via
              ? {
                  // @ts-ignore
                  [`--gradient-${name}-via`]: colors.light.via,
                }
              : {}),
          }
          cssVariables[":root"] = light
          // @ts-ignore
          cssVariables[".light"] = light
          cssVariables[".dark"] = {
            ...cssVariables[".dark"],
            [`--gradient-${name}-from`]: colors.dark.from,
            [`--gradient-${name}-to`]: colors.dark.to,
            // @ts-ignore
            ...(colors.dark.via
              ? {
                  // @ts-ignore
                  [`--gradient-${name}-via`]: colors.dark.via,
                }
              : {}),
          }
          // @ts-ignore
          cssVariables[`.gradient-${name}`] = {
            "--tw-gradient-name": `url(#gradient-${name})`,
            "--tw-gradient-from": `var(--gradient-${name}-from)`,
            "--tw-gradient-via": `var(--gradient-${name}-via)`,
            "--tw-gradient-to": `var(--gradient-${name}-to)`,
            // @ts-ignore
            "--tw-gradient-stops": colors.light.via
              ? `var(--tw-gradient-from), var(--tw-gradient-via), var(--tw-gradient-to)`
              : "var(--tw-gradient-from), var(--tw-gradient-to)",
          }
          return cssVariables
        },
        { ":root": {}, ".dark": {} }
      )
      addUtilities({
        // text gradient helper
        ".text-gradient": {
          color: "transparent",
          "background-clip": "text",
        },
        ".stroke-gradient": {
          // stroke: "url(var(--tw-gradient-name))",
          stroke: "var(--tw-gradient-name)",
        },
        ".fill-gradient": {
          fill: "var(--tw-gradient-name)",
        },
        // gradients classes
        ...gradientClasses,
      })
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]": {},
        },
        ".h1": {
          "@apply font-heading font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-mono font-light text-xs tracking-tagline uppercase": {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply text-xs font-bold uppercase tracking-wider": {},
        },
      })
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      })
    }
  },

  // ===== Extend Tailwind Config =====
  function (options) {
    // if (!options) options = theme
    return {
      theme: {
        extend: {
          colors: {
            // legacy
            color: {
              1: "var(--ui-color-purple)",
              2: "var(--ui-color-yellow)",
              3: "var(--ui-color-red)",
              4: "var(--ui-color-green)",
              5: "var(--ui-color-indigo)",
              6: "var(--ui-color-pink)",
            },
            stroke: {
              1: "var(--ui-stroke)",
            },
            n: {
              1: "var(--ui-n-1)",
              2: "var(--ui-n-2)",
              3: "var(--ui-n-3)",
              4: "var(--ui-n-4)",
              5: "var(--ui-n-5)",
              6: "var(--ui-n-6)",
              7: "var(--ui-n-7)",
              8: "var(--ui-n-8)",
            },
            // new
            gray: {
              1: "var(--ui-neutral-1)",
              2: "var(--ui-neutral-2)",
              3: "var(--ui-neutral-3)",
              4: "var(--ui-neutral-4)",
              5: "var(--ui-neutral-5)",
              6: "var(--ui-neutral-6)",
              7: "var(--ui-neutral-7)",
              8: "var(--ui-neutral-8)",
              9: "var(--ui-neutral-9)",
              10: "var(--ui-neutral-10)",
              11: "var(--ui-neutral-11)",
              12: "var(--ui-neutral-12)",
              a1: "var(--ui-neutral-a1)",
              a2: "var(--ui-neutral-a2)",
              a3: "var(--ui-neutral-a3)",
              a4: "var(--ui-neutral-a4)",
              a5: "var(--ui-neutral-a5)",
              a6: "var(--ui-neutral-a6)",
              a7: "var(--ui-neutral-a7)",
              a8: "var(--ui-neutral-a8)",
              a9: "var(--ui-neutral-a9)",
              a10: "var(--ui-neutral-a10)",
              a11: "var(--ui-neutral-a11)",
              a12: "var(--ui-neutral-a12)",
            },
            brand: {},
            accent: {},
            background: "var(--ui-background)",
            DEFAULT: "var(--ui-border)",
            separator: "var(--ui-separator)",
          },
          borderColor: {
            DEFAULT: "var(--ui-border)",
          },
          ringColor: {
            DEFAULT: "var(--ui-ring)",
          },
          textColor: {
            body: "var(--ui-foreground)",
            muted: "var(--ui-foreground-muted)",
          },
          borderRadius: {
            xs: "var(--radius-1)",
            sm: "var(--radius-2)",
            md: "var(--radius-3)",
            lg: "var(--radius-4)",
            xl: "var(--radius-5)",
            "2xl": "var(--radius-6)",
          },
          spacing: {
            0.25: "0.0625rem",
            7.5: "1.875rem",
            15: "3.75rem",
          },
          letterSpacing: {
            tagline: ".15em",
          },
          opacity: {
            15: ".15",
          },
          transitionDuration: {
            DEFAULT: "200ms",
          },
          transitionTimingFunction: {
            DEFAULT: "linear",
          },
          zIndex: {
            1: "1",
            2: "2",
            3: "3",
            4: "4",
            5: "5",
          },
          borderWidth: {
            DEFAULT: "0.0625rem",
          },
          backgroundImage: {
            "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
            "conic-gradient": "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
          },
        },
      },
    }
  }
)
export default tailwindPlugin

// ===== Helpers =====
// const getVariable = (token: string) => `--${token}`
