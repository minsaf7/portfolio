"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Shape {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  type: "circle" | "square" | "triangle" | "dot"
  opacity: number
}

export default function AnimatedCanvasBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const { theme } = useTheme()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let shapes: Shape[] = []

    // Set canvas dimensions
    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      initShapes()
    }

    // Initialize shapes
    const initShapes = () => {
      shapes = []
      const numShapes = Math.floor((window.innerWidth * window.innerHeight) / 25000) // Adjust density based on screen size

      for (let i = 0; i < numShapes; i++) {
        shapes.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 10 + 2,
          speedX: (Math.random() - 0.5) * 0.3,
          speedY: (Math.random() - 0.5) * 0.3,
          type: ["circle", "square", "triangle", "dot"][Math.floor(Math.random() * 4)] as Shape["type"],
          opacity: Math.random() * 0.3 + 0.1,
        })
      }
    }

    // Draw shapes
    const drawShapes = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      shapes.forEach((shape) => {
        ctx.save()

        // Set color based on theme
        if (theme === "dark") {
          ctx.fillStyle = `rgba(255, 255, 255, ${shape.opacity})`
        } else {
          ctx.fillStyle = `rgba(0, 82, 72, ${shape.opacity})`
        }

        // Draw different shape types
        switch (shape.type) {
          case "circle":
            ctx.beginPath()
            ctx.arc(shape.x, shape.y, shape.size, 0, Math.PI * 2)
            ctx.fill()
            break
          case "square":
            ctx.fillRect(shape.x - shape.size / 2, shape.y - shape.size / 2, shape.size, shape.size)
            break
          case "triangle":
            ctx.beginPath()
            ctx.moveTo(shape.x, shape.y - shape.size / 2)
            ctx.lineTo(shape.x + shape.size / 2, shape.y + shape.size / 2)
            ctx.lineTo(shape.x - shape.size / 2, shape.y + shape.size / 2)
            ctx.closePath()
            ctx.fill()
            break
          case "dot":
            ctx.beginPath()
            ctx.arc(shape.x, shape.y, shape.size / 3, 0, Math.PI * 2)
            ctx.fill()
            break
        }

        ctx.restore()
      })
    }

    // Update shape positions
    const updateShapes = () => {
      shapes.forEach((shape) => {
        shape.x += shape.speedX
        shape.y += shape.speedY

        // Wrap around edges
        if (shape.x < -shape.size) shape.x = canvas.width + shape.size
        if (shape.x > canvas.width + shape.size) shape.x = -shape.size
        if (shape.y < -shape.size) shape.y = canvas.height + shape.size
        if (shape.y > canvas.height + shape.size) shape.y = -shape.size
      })
    }

    // Animation loop
    const animate = () => {
      updateShapes()
      drawShapes()
      animationFrameId = requestAnimationFrame(animate)
    }

    // Initialize
    resizeCanvas()
    animate()

    // Handle resize
    window.addEventListener("resize", resizeCanvas)

    // Cleanup
    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [theme])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10 pointer-events-none" style={{ opacity: 0.7 }} />
}
