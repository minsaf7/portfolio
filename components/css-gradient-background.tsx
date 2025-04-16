"use client"

import { useTheme } from "next-themes"
import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function CssGradientBackground() {
  const { resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  // Define gradient colors based on theme
  const gradientColors =
    resolvedTheme === "dark"
      ? ["rgba(20, 30, 60, 1)", "rgba(30, 60, 90, 1)", "rgba(20, 60, 70, 1)", "rgba(40, 20, 60, 1)"]
      : ["rgba(200, 240, 230, 1)", "rgba(180, 230, 210, 1)", "rgba(160, 230, 230, 1)", "rgba(190, 220, 200, 1)"]

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden">
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            `linear-gradient(120deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 30%, ${gradientColors[2]} 60%, ${gradientColors[3]} 100%)`,
            `linear-gradient(240deg, ${gradientColors[3]} 0%, ${gradientColors[0]} 30%, ${gradientColors[1]} 60%, ${gradientColors[2]} 100%)`,
            `linear-gradient(360deg, ${gradientColors[2]} 0%, ${gradientColors[3]} 30%, ${gradientColors[0]} 60%, ${gradientColors[1]} 100%)`,
            `linear-gradient(480deg, ${gradientColors[1]} 0%, ${gradientColors[2]} 30%, ${gradientColors[3]} 60%, ${gradientColors[0]} 100%)`,
            `linear-gradient(600deg, ${gradientColors[0]} 0%, ${gradientColors[1]} 30%, ${gradientColors[2]} 60%, ${gradientColors[3]} 100%)`,
          ],
        }}
        transition={{
          duration: 20,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "loop",
          ease: "linear",
        }}
      />

      {/* Add subtle noise texture overlay */}
      <div className="absolute inset-0 bg-noise opacity-5" />
    </div>
  )
}
