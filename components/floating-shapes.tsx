"use client"

import { motion } from "framer-motion"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

interface Shape {
  id: number
  x: string
  y: string
  size: number
  opacity: number
  duration: number
  delay: number
  type: "circle" | "square" | "triangle" | "hexagon"
  rotate: number
}

export default function FloatingShapes() {
  const { resolvedTheme } = useTheme()
  const [shapes, setShapes] = useState<Shape[]>([])
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Generate random shapes
    const newShapes: Shape[] = []
    const shapeCount = 8

    for (let i = 0; i < shapeCount; i++) {
      newShapes.push({
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 100}%`,
        size: Math.random() * 100 + 50,
        opacity: Math.random() * 0.05 + 0.02,
        duration: Math.random() * 20 + 20,
        delay: Math.random() * 5,
        type: ["circle", "square", "triangle", "hexagon"][Math.floor(Math.random() * 4)] as Shape["type"],
        rotate: Math.random() * 360,
      })
    }

    setShapes(newShapes)
  }, [])

  if (!mounted) return null

  const getShapeColor = () => {
    return resolvedTheme === "dark" ? "rgba(255, 255, 255, 0.03)" : "rgba(0, 82, 72, 0.03)"
  }

  const renderShape = (shape: Shape) => {
    switch (shape.type) {
      case "circle":
        return (
          <div
            className="rounded-full absolute"
            style={{
              width: shape.size,
              height: shape.size,
              background: getShapeColor(),
              left: shape.x,
              top: shape.y,
              opacity: shape.opacity,
            }}
          />
        )
      case "square":
        return (
          <div
            className="absolute"
            style={{
              width: shape.size,
              height: shape.size,
              background: getShapeColor(),
              left: shape.x,
              top: shape.y,
              opacity: shape.opacity,
              borderRadius: "10%",
            }}
          />
        )
      case "triangle":
        return (
          <div
            className="absolute"
            style={{
              width: 0,
              height: 0,
              borderLeft: `${shape.size / 2}px solid transparent`,
              borderRight: `${shape.size / 2}px solid transparent`,
              borderBottom: `${shape.size}px solid ${getShapeColor()}`,
              left: shape.x,
              top: shape.y,
              opacity: shape.opacity,
            }}
          />
        )
      case "hexagon":
        return (
          <div
            className="absolute"
            style={{
              width: shape.size,
              height: `${shape.size * 0.866}px`,
              background: getShapeColor(),
              left: shape.x,
              top: shape.y,
              opacity: shape.opacity,
              clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            }}
          />
        )
    }
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          initial={{ x: 0, y: 0, rotate: shape.rotate }}
          animate={{
            x: [0, Math.random() * 50 - 25, 0],
            y: [0, Math.random() * 50 - 25, 0],
            rotate: [shape.rotate, shape.rotate + 20, shape.rotate],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: shape.duration,
            ease: "easeInOut",
            delay: shape.delay,
          }}
          className="absolute"
          style={{ left: shape.x, top: shape.y }}
        >
          {renderShape(shape)}
        </motion.div>
      ))}
    </div>
  )
}
