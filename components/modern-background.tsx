"use client"

import { useEffect, useRef, useState } from "react"
import { useTheme } from "next-themes"

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  opacity: number
  connections: number[]
}

export default function ModernBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { resolvedTheme } = useTheme()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const particlesRef = useRef<Particle[]>([])
  const animationRef = useRef<number>()
  const mouseRef = useRef({ x: 0, y: 0, radius: 150 })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
      initParticles()
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }

    const initParticles = () => {
      const particleCount = Math.min(Math.floor((canvas.width * canvas.height) / 15000), 100)
      const particles: Particle[] = []

      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 2 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          opacity: Math.random() * 0.5 + 0.2,
          connections: [],
        })
      }

      particlesRef.current = particles
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update and draw particles
      for (let i = 0; i < particlesRef.current.length; i++) {
        const p = particlesRef.current[i]

        // Update position
        p.x += p.speedX
        p.y += p.speedY

        // Boundary check
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1
        if (p.y < 0 || p.y > canvas.height) p.speedY *= -1

        // Mouse interaction
        const dx = mouseRef.current.x - p.x
        const dy = mouseRef.current.y - p.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < mouseRef.current.radius) {
          const angle = Math.atan2(dy, dx)
          const pushX = Math.cos(angle) * 0.5
          const pushY = Math.sin(angle) * 0.5
          p.speedX -= pushX * (1 - distance / mouseRef.current.radius)
          p.speedY -= pushY * (1 - distance / mouseRef.current.radius)
        }

        // Draw particle
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)

        if (resolvedTheme === "dark") {
          ctx.fillStyle = `rgba(255, 255, 255, ${p.opacity})`
        } else {
          ctx.fillStyle = `rgba(0, 82, 72, ${p.opacity})`
        }

        ctx.fill()

        // Find connections
        p.connections = []
        for (let j = i + 1; j < particlesRef.current.length; j++) {
          const p2 = particlesRef.current[j]
          const dx = p.x - p2.x
          const dy = p.y - p2.y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 150) {
            p.connections.push(j)

            // Draw connection
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)

            if (resolvedTheme === "dark") {
              ctx.strokeStyle = `rgba(255, 255, 255, ${0.1 * (1 - distance / 150)})`
            } else {
              ctx.strokeStyle = `rgba(0, 82, 72, ${0.1 * (1 - distance / 150)})`
            }

            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

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
  }, [resolvedTheme])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20 pointer-events-none" style={{ opacity: 0.7 }} />
}
