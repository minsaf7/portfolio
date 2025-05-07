"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

export default function MovingGradientBackground() {
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
      time += 0.005 // Speed of animation

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Define colors based on theme
      const colors =
        resolvedTheme === "dark"
          ? [
              [20, 30, 60], // Deep blue
              [30, 60, 90], // Medium blue
              [20, 60, 70], // Teal
              [40, 20, 60], // Purple
            ]
          : [
              [200, 240, 230], // Light mint
              [180, 230, 210], // Soft teal
              [160, 230, 230], // Cyan
              [190, 220, 200], // Sage
            ]

      // Create multiple gradient blobs
      const blobCount = 4
      for (let i = 0; i < blobCount; i++) {
        const phase = time + i * ((Math.PI * 2) / blobCount)

        // Position that moves in a circular pattern
        const centerX = canvas.width * (0.5 + 0.25 * Math.sin(phase))
        const centerY = canvas.height * (0.5 + 0.25 * Math.cos(phase * 0.7))

        // Size that pulses slightly
        const radius = Math.min(canvas.width, canvas.height) * (0.4 + 0.05 * Math.sin(time * 2 + i))

        // Create radial gradient
        const gradient = ctx.createRadialGradient(centerX, centerY, 0, centerX, centerY, radius)

        // Color from the palette with opacity
        const color = colors[i % colors.length]
        gradient.addColorStop(0, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.7)`)
        gradient.addColorStop(1, `rgba(${color[0]}, ${color[1]}, ${color[2]}, 0)`)

        // Draw the gradient blob
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2)
        ctx.fill()
      }

      // Use screen blend mode to make colors brighter where they overlap
      ctx.globalCompositeOperation = "screen"

      // Add a subtle overall gradient
      const bgGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      if (resolvedTheme === "dark") {
        bgGradient.addColorStop(0, "rgba(10, 15, 30, 0.2)")
        bgGradient.addColorStop(1, "rgba(20, 30, 40, 0.2)")
      } else {
        bgGradient.addColorStop(0, "rgba(220, 240, 235, 0.2)")
        bgGradient.addColorStop(1, "rgba(200, 230, 220, 0.2)")
      }

      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Reset composite operation
      ctx.globalCompositeOperation = "source-over"

      animationFrameId = requestAnimationFrame(drawGradient)
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
