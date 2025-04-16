"use client"

import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { AnimatePresence } from "framer-motion"
import CursorFollower from "@/components/cursor-follower"

const inter = Inter({ subsets: ["latin"] })

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <body className={inter.className}>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
        <div className="flex min-h-screen flex-col">
          <Header />
          <AnimatePresence mode="wait">
            <main className="flex-1">{children}</main>
          </AnimatePresence>
          <Footer />
          <CursorFollower />
        </div>
      </ThemeProvider>
    </body>
  )
}
