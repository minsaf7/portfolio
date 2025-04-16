"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function AnimatedGradientBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    // Draw the animated gradient
    const drawGradient = () => {
      time += 0.002 // Speed of animation

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create multiple gradient layers
      drawGradientLayer(time, 0.5)
      drawGradientLayer(time + 1.5, 0.3)
      drawGradientLayer(time + 3, 0.2)

      animationFrameId = requestAnimationFrame(drawGradient)
    }

    const drawGradientLayer = (t: number, opacity: number) => {
      const width = canvas.width
      const height = canvas.height

      // Create gradient points that move over time
      const x1 = width * (0.5 + 0.4 * Math.sin(t * 0.5))
      const y1 = height * (0.5 + 0.4 * Math.cos(t * 0.3))
      const x2 = width * (0.5 + 0.4 * Math.sin(t * 0.4 + 2))
      const y2 = height * (0.5 + 0.4 * Math.cos(t * 0.6 + 1))

      const gradient = ctx.createLinearGradient(x1, y1, x2, y2)

      // Set colors based on theme
      if (resolvedTheme === "dark") {
        // Dark mode: deep blues, purples, teals
        gradient.addColorStop(0, `rgba(20, 30, 60, ${opacity})`)
        gradient.addColorStop(0.3, `rgba(30, 60, 90, ${opacity})`)
        gradient.addColorStop(0.6, `rgba(20, 60, 70, ${opacity})`)
        gradient.addColorStop(1, `rgba(40, 20, 60, ${opacity})`)
      } else {
        // Light mode: soft teals, cyans, mint
        gradient.addColorStop(0, `rgba(200, 240, 230, ${opacity})`)
        gradient.addColorStop(0.3, `rgba(180, 230, 210, ${opacity})`)
        gradient.addColorStop(0.6, `rgba(160, 230, 230, ${opacity})`)
        gradient.addColorStop(1, `rgba(190, 220, 200, ${opacity})`)
      }

      // Fill canvas with gradient
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    drawGradient()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [resolvedTheme])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20 pointer-events-none" />
}
