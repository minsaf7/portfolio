"use client"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { ThemeProviderProps } from "next-themes/dist/types"
// import type { ThemeProviderProps } from "next-themes"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
