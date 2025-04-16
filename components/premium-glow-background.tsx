"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface GlowPoint {
  x: number
  y: number
  radius: number
  baseRadius: number
  xSpeed: number
  ySpeed: number
  hue: number
  saturation: number
  lightness: number
  opacity: number
  pulseSpeed: number
  pulsePhase: number
}

export default function PremiumGlowBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const glowPoints: GlowPoint[] = []
    const pointCount = 5

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initGlowPoints()
    }

    // Initialize glow points
    const initGlowPoints = () => {
      glowPoints.length = 0

      for (let i = 0; i < pointCount; i++) {
        // Create color based on theme
        let hue, saturation, lightness

        if (resolvedTheme === "dark") {
          // Dark mode: cooler colors (blues, purples)
          hue = Math.random() * 60 + 180
          saturation = 70 + Math.random() * 20
          lightness = 40 + Math.random() * 20
        } else {
          // Light mode: teals, cyans
          hue = Math.random() * 40 + 160
          saturation = 60 + Math.random() * 20
          lightness = 60 + Math.random() * 15
        }

        const baseRadius = Math.min(canvas.width, canvas.height) * (0.2 + Math.random() * 0.2)

        glowPoints.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: baseRadius,
          baseRadius: baseRadius,
          xSpeed: (Math.random() - 0.5) * 0.2,
          ySpeed: (Math.random() - 0.5) * 0.2,
          hue,
          saturation,
          lightness,
          opacity: 0.15 + Math.random() * 0.1,
          pulseSpeed: 0.005 + Math.random() * 0.005,
          pulsePhase: Math.random() * Math.PI * 2,
        })
      }
    }

    // Draw the glowing effect
    const drawGlowEffect = (timestamp: number) => {
      // Apply fade effect instead of clearing completely
      ctx.fillStyle = resolvedTheme === "dark" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw each glow point
      glowPoints.forEach((point) => {
        // Update position
        point.x += point.xSpeed
        point.y += point.ySpeed

        // Bounce off edges with some padding
        const padding = point.baseRadius * 0.5
        if (point.x - padding < 0 || point.x + padding > canvas.width) {
          point.xSpeed = -point.xSpeed
        }
        if (point.y - padding < 0 || point.y + padding > canvas.height) {
          point.ySpeed = -point.ySpeed
        }

        // Pulse effect
        const time = timestamp * 0.001
        const pulse = Math.sin(time * point.pulseSpeed + point.pulsePhase) * 0.15 + 0.85
        point.radius = point.baseRadius * pulse

        // Draw multiple layers of gradients for enhanced glow
        for (let i = 0; i < 3; i++) {
          const gradientRadius = point.radius * (1 + i * 0.5)
          const gradient = ctx.createRadialGradient(point.x, point.y, 0, point.x, point.y, gradientRadius)

          const layerOpacity = point.opacity * (1 - i * 0.3)

          gradient.addColorStop(0, `hsla(${point.hue}, ${point.saturation}%, ${point.lightness}%, ${layerOpacity})`)
          gradient.addColorStop(
            0.5,
            `hsla(${point.hue}, ${point.saturation}%, ${point.lightness}%, ${layerOpacity * 0.5})`,
          )
          gradient.addColorStop(1, `hsla(${point.hue}, ${point.saturation}%, ${point.lightness}%, 0)`)

          ctx.fillStyle = gradient
          ctx.beginPath()
          ctx.arc(point.x, point.y, gradientRadius, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // Blend glow points together
      ctx.globalCompositeOperation = "screen"

      // Draw connecting gradients between points
      for (let i = 0; i < glowPoints.length; i++) {
        for (let j = i + 1; j < glowPoints.length; j++) {
          const p1 = glowPoints[i]
          const p2 = glowPoints[j]

          // Calculate distance between points
          const dx = p2.x - p1.x
          const dy = p2.y - p1.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          // Only connect points that are somewhat close
          if (distance < (p1.baseRadius + p2.baseRadius) * 1.5) {
            // Create gradient between points
            const gradient = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y)

            const midHue = (p1.hue + p2.hue) / 2
            const midSat = (p1.saturation + p2.saturation) / 2
            const midLight = (p1.lightness + p2.lightness) / 2
            const midOpacity = ((p1.opacity + p2.opacity) / 2) * 0.3

            gradient.addColorStop(0, `hsla(${p1.hue}, ${p1.saturation}%, ${p1.lightness}%, ${p1.opacity * 0.3})`)
            gradient.addColorStop(0.5, `hsla(${midHue}, ${midSat}%, ${midLight}%, ${midOpacity})`)
            gradient.addColorStop(1, `hsla(${p2.hue}, ${p2.saturation}%, ${p2.lightness}%, ${p2.opacity * 0.3})`)

            // Draw a wide line with the gradient
            ctx.beginPath()
            ctx.strokeStyle = gradient
            ctx.lineWidth = Math.min(p1.radius, p2.radius) * 0.5
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.stroke()
          }
        }
      }

      // Reset composite operation
      ctx.globalCompositeOperation = "source-over"

      animationFrameId = requestAnimationFrame(drawGlowEffect)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    drawGlowEffect(0)

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [resolvedTheme])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none"
      style={{ opacity: resolvedTheme === "dark" ? 0.8 : 0.7 }}
    />
  )
}
