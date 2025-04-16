"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Orb {
  x: number
  y: number
  radius: number
  xSpeed: number
  ySpeed: number
  hue: number
  saturation: number
  lightness: number
}

export default function GradientOrbs() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    const orbs: Orb[] = []
    const orbCount = 5

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initOrbs()
    }

    // Initialize orbs
    const initOrbs = () => {
      orbs.length = 0

      for (let i = 0; i < orbCount; i++) {
        const radius = Math.random() * 200 + 100

        // Create color based on theme
        let hue, saturation, lightness

        if (resolvedTheme === "dark") {
          hue = Math.random() * 60 + 180 // Blue to purple range
          saturation = 70
          lightness = 30
        } else {
          hue = Math.random() * 40 + 160 // Teal to green range
          saturation = 70
          lightness = 60
        }

        orbs.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          radius: radius,
          xSpeed: (Math.random() - 0.5) * 0.3,
          ySpeed: (Math.random() - 0.5) * 0.3,
          hue,
          saturation,
          lightness,
        })
      }
    }

    // Draw orbs with glow effect
    const drawOrbs = () => {
      // Clear canvas with fade effect
      ctx.fillStyle = resolvedTheme === "dark" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Draw each orb
      orbs.forEach((orb) => {
        // Update position
        orb.x += orb.xSpeed
        orb.y += orb.ySpeed

        // Bounce off edges
        if (orb.x - orb.radius < 0 || orb.x + orb.radius > canvas.width) {
          orb.xSpeed = -orb.xSpeed
        }

        if (orb.y - orb.radius < 0 || orb.y + orb.radius > canvas.height) {
          orb.ySpeed = -orb.ySpeed
        }

        // Create gradient
        const gradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius)

        gradient.addColorStop(0, `hsla(${orb.hue}, ${orb.saturation}%, ${orb.lightness}%, 0.3)`)
        gradient.addColorStop(1, `hsla(${orb.hue}, ${orb.saturation}%, ${orb.lightness}%, 0)`)

        // Draw orb
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2)
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(drawOrbs)
    }

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    drawOrbs()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [resolvedTheme])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20 pointer-events-none" />
}
