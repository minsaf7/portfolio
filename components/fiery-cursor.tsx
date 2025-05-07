"use client"

import { useEffect, useRef } from "react"
import { useMobile } from "@/hooks/use-mobile"

interface Particle {
  x: number
  y: number
  size: number
  color: string
  speedX: number
  speedY: number
  life: number
  maxLife: number
}

export default function FieryCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const particlesRef = useRef<Particle[]>([])
  const mouseRef = useRef({ x: 0, y: 0, prevX: 0, prevY: 0 })
  const animationRef = useRef<number>()
  const isMobile = useMobile()

  useEffect(() => {
    if (isMobile) return

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.prevX = mouseRef.current.x
      mouseRef.current.prevY = mouseRef.current.y
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY

      // Create particles based on mouse movement speed
      const dx = mouseRef.current.x - mouseRef.current.prevX
      const dy = mouseRef.current.y - mouseRef.current.prevY
      const speed = Math.sqrt(dx * dx + dy * dy)

      // Only create particles if mouse is moving
      if (speed > 1) {
        const particleCount = Math.min(Math.floor(speed / 2), 5)

        for (let i = 0; i < particleCount; i++) {
          createParticle(mouseRef.current.x - dx * (i / particleCount), mouseRef.current.y - dy * (i / particleCount))
        }
      }
    }

    const createParticle = (x: number, y: number) => {
      // Fire colors
      const colors = [
        "#ff4500", // Red-orange
        "#ff7700", // Orange
        "#ff9900", // Amber
        "#ffcc00", // Gold
        "#ffff00", // Yellow
      ]

      // Create a new particle
      const particle: Particle = {
        x,
        y,
        size: Math.random() * 5 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2 - 1, // Bias upward
        life: 0,
        maxLife: Math.random() * 30 + 20,
      }

      particlesRef.current.push(particle)
    }

    const drawParticles = () => {
      // Apply fade effect instead of clearing completely
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      particlesRef.current.forEach((p, index) => {
        // Update position
        p.x += p.speedX
        p.y += p.speedY

        // Update life
        p.life++

        // Remove dead particles
        if (p.life >= p.maxLife) {
          particlesRef.current.splice(index, 1)
          return
        }

        // Calculate opacity based on life
        const opacity = 1 - p.life / p.maxLife

        // Draw particle with glow effect
        ctx.save()

        // Outer glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 2)
        gradient.addColorStop(0, `${p.color}`)
        gradient.addColorStop(1, "rgba(255, 69, 0, 0)")

        ctx.globalAlpha = opacity * 0.3
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * 2, 0, Math.PI * 2)
        ctx.fill()

        // Inner particle
        ctx.globalAlpha = opacity
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size * (1 - p.life / p.maxLife), 0, Math.PI * 2)
        ctx.fill()

        ctx.restore()

        // Simulate fire behavior
        p.speedY -= 0.05 // Particles rise
        p.speedX *= 0.99 // Slow down horizontally
        p.size *= 0.97 // Shrink over time
      })

      // Draw cursor glow
      ctx.save()
      const cursorGradient = ctx.createRadialGradient(
        mouseRef.current.x,
        mouseRef.current.y,
        0,
        mouseRef.current.x,
        mouseRef.current.y,
        30,
      )
      cursorGradient.addColorStop(0, "rgba(255, 69, 0, 0.5)")
      cursorGradient.addColorStop(1, "rgba(255, 69, 0, 0)")

      ctx.fillStyle = cursorGradient
      ctx.beginPath()
      ctx.arc(mouseRef.current.x, mouseRef.current.y, 30, 0, Math.PI * 2)
      ctx.fill()
      ctx.restore()

      animationRef.current = requestAnimationFrame(drawParticles)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", handleMouseMove)
    drawParticles()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      if (animationRef.current) cancelAnimationFrame(animationRef.current)
    }
  }, [isMobile])

  if (isMobile) return null

  return (
    <canvas ref={canvasRef} className="fixed inset-0 z-50 pointer-events-none" style={{ mixBlendMode: "screen" }} />
  )
}
