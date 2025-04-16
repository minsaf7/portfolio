"use client"

import { useEffect, useRef } from "react"
import { useTheme } from "next-themes"

interface Point {
  x: number
  y: number
  z: number
}

interface Edge {
  start: number
  end: number
}

export default function GlowingMeshBackground() {
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

    // Create a simple icosahedron-like structure
    const points: Point[] = []
    const edges: Edge[] = []

    // Generate points on a sphere
    const generatePoints = () => {
      points.length = 0
      edges.length = 0

      // Create vertices
      const count = 12
      const radius = Math.min(canvas.width, canvas.height) * 0.3

      // Create points in a spherical arrangement
      for (let i = 0; i < count; i++) {
        const phi = Math.acos(-1 + (2 * i) / count)
        const theta = Math.sqrt(count * Math.PI) * phi

        points.push({
          x: radius * Math.cos(theta) * Math.sin(phi),
          y: radius * Math.sin(theta) * Math.sin(phi),
          z: radius * Math.cos(phi),
        })
      }

      // Connect points to create edges
      for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
          // Connect points that are close enough
          const dx = points[i].x - points[j].x
          const dy = points[i].y - points[j].y
          const dz = points[i].z - points[j].z
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < radius * 1.2) {
            edges.push({ start: i, end: j })
          }
        }
      }
    }

    // Draw the wireframe mesh
    const drawMesh = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Update time
      time += 0.005

      // Rotate points
      const rotatedPoints = points.map((point) => {
        // Rotate around Y axis
        const cosY = Math.cos(time * 0.5)
        const sinY = Math.sin(time * 0.5)

        const x1 = point.x * cosY - point.z * sinY
        const z1 = point.z * cosY + point.x * sinY

        // Rotate around X axis
        const cosX = Math.cos(time * 0.3)
        const sinX = Math.sin(time * 0.3)

        const y2 = point.y * cosX - z1 * sinX
        const z2 = z1 * cosX + point.y * sinX

        return {
          x: x1,
          y: y2,
          z: z2,
        }
      })

      // Project 3D points to 2D
      const projectedPoints = rotatedPoints.map((point) => {
        const scale = 1000 / (1000 + point.z)
        return {
          x: canvas.width / 2 + point.x * scale,
          y: canvas.height / 2 + point.y * scale,
          scale: scale,
        }
      })

      // Draw edges with glow effect
      edges.forEach((edge) => {
        const start = projectedPoints[edge.start]
        const end = projectedPoints[edge.end]

        // Calculate depth for opacity
        const depth = (rotatedPoints[edge.start].z + rotatedPoints[edge.end].z) / 2
        const normalizedDepth = (depth + 300) / 600 // Normalize to 0-1 range
        const opacity = Math.max(0.1, Math.min(0.8, normalizedDepth))

        // Set color based on theme
        const color =
          resolvedTheme === "dark"
            ? `rgba(100, 150, 255, ${opacity})` // Blue for dark mode
            : `rgba(0, 128, 128, ${opacity})` // Teal for light mode

        // Draw line with glow
        ctx.beginPath()
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
        ctx.strokeStyle = color
        ctx.lineWidth = Math.max(1, 3 * ((start.scale + end.scale) / 2))
        ctx.stroke()

        // Add glow effect
        ctx.beginPath()
        ctx.moveTo(start.x, start.y)
        ctx.lineTo(end.x, end.y)
        ctx.strokeStyle = color.replace(")", ", 0.3)")
        ctx.lineWidth = Math.max(2, 6 * ((start.scale + end.scale) / 2))
        ctx.stroke()
      })

      // Draw points with glow
      projectedPoints.forEach((point, i) => {
        const depth = rotatedPoints[i].z
        const normalizedDepth = (depth + 300) / 600
        const opacity = Math.max(0.2, Math.min(0.9, normalizedDepth))

        // Set color based on theme
        const color =
          resolvedTheme === "dark"
            ? `rgba(150, 200, 255, ${opacity})` // Blue for dark mode
            : `rgba(0, 150, 150, ${opacity})` // Teal for light mode

        // Draw point
        ctx.beginPath()
        ctx.arc(point.x, point.y, 3 * point.scale, 0, Math.PI * 2)
        ctx.fillStyle = color
        ctx.fill()

        // Add glow
        ctx.beginPath()
        ctx.arc(point.x, point.y, 6 * point.scale, 0, Math.PI * 2)
        ctx.fillStyle = color.replace(")", ", 0.3)")
        ctx.fill()
      })

      animationFrameId = requestAnimationFrame(drawMesh)
    }

    resizeCanvas()
    generatePoints()
    window.addEventListener("resize", () => {
      resizeCanvas()
      generatePoints()
    })

    drawMesh()

    return () => {
      window.removeEventListener("resize", resizeCanvas)
      cancelAnimationFrame(animationFrameId)
    }
  }, [resolvedTheme])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-20 pointer-events-none" />
}
