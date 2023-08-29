import { fontFamily } from "tailwindcss/defaultTheme"

import tailwindPlugin from "./plugins/tailwindcss"

const config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      fontFamily: {
        heading: "var(--font-heading)",
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
    },
  },
  plugins: [tailwindPlugin({})],
}

export default config
