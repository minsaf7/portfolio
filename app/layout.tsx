import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import GradientBackground from "@/components/GradientBackground"
import FloatingNav from "@/components/FloatingNav"
// import SocialLinks from "@/components/SocialLinks"
// import FloatingNav from "@/components/FloatingNav"
// import GradientBackground from "@/components/GradientBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Modern Portfolio",
  description: "A modern portfolio website showcasing my projects and skills",
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
          {/* <SocialLinks /> */}
          <FloatingNav />
        </ThemeProvider>
      </body>
    </html>
  )
}
