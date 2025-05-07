import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import SocialLinks from "@/components/SocialLinks"
import FloatingNav from "@/components/FloatingNav"
import GradientBackground from "@/components/GradientBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Mohamed Minsaf",
  description: "Software Engineer",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <GradientBackground />
          {children}
          <FloatingNav />
        </ThemeProvider>
      </body>
    </html>
  )
}
