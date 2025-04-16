"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useTheme } from "next-themes"

export default function InteractiveBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    handleResize()
    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Calculate relative position (0-1) for gradient
  const relativeX = dimensions.width ? mousePosition.x / dimensions.width : 0.5
  const relativeY = dimensions.height ? mousePosition.y / dimensions.height : 0.5

  // Create gradient that follows mouse
  const gradientStyle = {
    background:
      resolvedTheme === "dark"
        ? `radial-gradient(circle at ${relativeX * 100}% ${relativeY * 100}%, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0) 70%)`
        : `radial-gradient(circle at ${relativeX * 100}% ${relativeY * 100}%, rgba(0, 82, 72, 0.03) 0%, rgba(0, 82, 72, 0) 70%)`,
  }

  return (
    <motion.div
      className="fixed inset-0 -z-15 pointer-events-none"
      style={gradientStyle}
      animate={{
        opacity: [0.7, 1, 0.7],
      }}
      transition={{
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      }}
    />
  )
}
