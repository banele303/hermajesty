'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // Provide sensible defaults to avoid SSR/CSR attribute mismatches.
  // - attribute="class": toggles the `dark` class on <html>
  // - defaultTheme="system": respects OS preference on first load
  // - enableSystem: allow system theme switching
  // - disableTransitionOnChange: avoid flash when toggling
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      {children}
    </NextThemesProvider>
  )
}
