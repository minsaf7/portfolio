"use client"

import type React from "react"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { useTheme } from "next-themes"

interface SectionBackgroundProps {
  children: React.ReactNode
  variant?: "dots" | "grid" | "waves" | "none"
  className?: string
  id?: string
}

export default function SectionBackground({ children, variant = "none", className = "", id }: SectionBackgroundProps) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const { resolvedTheme } = useTheme()
  const baseColor = resolvedTheme === "dark" ? "255, 255, 255" : "0, 82, 72"

  // Parallax effect
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "10%"])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  // Background pattern based on variant
  let backgroundStyle = {}

  switch (variant) {
    case "dots":
      backgroundStyle = {
        backgroundImage: `radial-gradient(circle, rgba(${baseColor}, 0.1) 1px, transparent 1px)`,
        backgroundSize: "20px 20px",
      }
      break
    case "grid":
      backgroundStyle = {
        backgroundImage: `linear-gradient(to right, rgba(${baseColor}, 0.05) 1px, transparent 1px), 
                          linear-gradient(to bottom, rgba(${baseColor}, 0.05) 1px, transparent 1px)`,
        backgroundSize: "40px 40px",
      }
      break
    case "waves":
      // Waves are created with SVG in the component
      break
  }

  return (
    <div ref={ref} id={id} className={`relative overflow-hidden ${className}`}>
      {variant === "waves" && (
        <motion.div className="absolute inset-0 -z-10 pointer-events-none" style={{ y, opacity }}>
          <svg
            width="100%"
            height="100%"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="absolute bottom-0 left-0 w-full h-40"
          >
            <motion.path
              d="M0,0 C300,60 600,120 1200,60 L1200,120 L0,120 Z"
              fill={`rgba(${baseColor}, 0.03)`}
              animate={{
                d: [
                  "M0,0 C300,60 600,120 1200,60 L1200,120 L0,120 Z",
                  "M0,0 C300,120 900,30 1200,90 L1200,120 L0,120 Z",
                  "M0,0 C300,60 600,120 1200,60 L1200,120 L0,120 Z",
                ],
              }}
              transition={{
                duration: 20,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      )}

      <motion.div className="absolute inset-0 -z-10 pointer-events-none" style={{ ...backgroundStyle, y, opacity }} />

      <div className="relative z-10">{children}</div>
    </div>
  )
}
