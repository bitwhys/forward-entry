"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"

interface ProviderProps extends ThemeProviderProps {
  grayColor?: string
  accentColor?: string
  destructiveColor?: string
  panelBackground?: "solid" | "translucent"
  radius?: string
}
export function ThemeProvider({
  panelBackground = "translucent",
  radius = "large",
  grayColor = "mauve",
  accentColor = "crimson",
  destructiveColor,
  children,
  ...props
}: ProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
