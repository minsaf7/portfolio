"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import ParticlesBackground from "./particles-background"

export default function BackgroundGrid() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Grid pattern */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0"
      >
        <div className="h-full w-full bg-grid-pattern" />
      </motion.div>

      {/* Animated gradient blobs */}
      <motion.div
        className="absolute -top-[10%] -right-[10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px]"
        animate={{
          x: [0, 30, 0],
          y: [0, -30, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute -bottom-[10%] -left-[10%] h-[500px] w-[500px] rounded-full bg-primary/20 blur-[100px]"
        animate={{
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 20,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Secondary gradient blob */}
      <motion.div
        className="absolute top-[30%] -left-[5%] h-[300px] w-[300px] rounded-full bg-secondary/30 blur-[80px]"
        animate={{
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{
          repeat: Number.POSITIVE_INFINITY,
          duration: 15,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      {/* Animated particles */}
      <ParticlesBackground />
    </div>
  )
}
