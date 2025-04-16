/* eslint-disable react-hooks/exhaustive-deps */
"use client"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { useTheme } from "next-themes"

interface Particle {
  id: number
  x: number
  y: number
  size: number
  alpha: number
  color: string
}

export default function ShootingStarCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [particles, setParticles] = useState<Particle[]>([])
  const [isActive, setIsActive] = useState(false)
  const particleIdRef = useRef(0)
  const isMobile = useMobile()
  const requestRef = useRef<number>()
  const previousTimeRef = useRef<number>()
  const { resolvedTheme } = useTheme()

  // Don't render on mobile
  const shouldRender = !isMobile

  useEffect(() => {
    if (!shouldRender) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsActive(true)

      // Add new particle
      const newParticle: Particle = {
        id: particleIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        size: Math.random() * 3 + 1,
        alpha: 1,
        color: getRandomColor(),
      }

      setParticles((prevParticles) => [...prevParticles, newParticle])
    }

    const handleMouseLeave = () => {
      setIsActive(false)
    }

    const handleMouseEnter = () => {
      setIsActive(true)
    }

    window.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
      cancelAnimationFrame(requestRef.current!)
    }
  }, [shouldRender,])

  // Animation loop for particles
  useEffect(() => {
    if (!shouldRender) return

    const animate = (time: number) => {
      if (previousTimeRef.current !== undefined) {
        setParticles((prevParticles) =>
          prevParticles
            .map((particle) => ({
              ...particle,
              alpha: particle.alpha - 0.02, // Fade out
            }))
            .filter((particle) => particle.alpha > 0),
        )
      }
      previousTimeRef.current = time
      requestRef.current = requestAnimationFrame(animate)
    }

    requestRef.current = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(requestRef.current!)
  }, [shouldRender])

  // Generate random colors for particles based on theme
  const getRandomColor = () => {
    const lightModeColors = ["#005248", "#00857a", "#00a99d", "#00c9bd", "#00e6d9"]
    const darkModeColors = ["#64ffda", "#00b8d4", "#18ffff", "#6effff", "#84ffff"]

    const colors = resolvedTheme === "dark" ? darkModeColors : lightModeColors
    return colors[Math.floor(Math.random() * colors.length)]
  }

  return (
    <>
      {shouldRender && (
        <>
          {/* Main cursor */}
          {isActive && (
            <motion.div
              className="fixed top-0 left-0 w-6 h-6 rounded-full bg-primary/50 pointer-events-none z-50 mix-blend-screen"
              animate={{
                x: mousePosition.x - 12,
                y: mousePosition.y - 12,
              }}
              transition={{
                type: "spring",
                mass: 0.1,
                stiffness: 120,
                damping: 10,
              }}
            />
          )}

          {/* Particles */}
          {particles.map((particle) => (
            <motion.div
              key={particle.id}
              className="fixed top-0 left-0 rounded-full pointer-events-none z-50 mix-blend-screen"
              style={{
                width: particle.size,
                height: particle.size,
                backgroundColor: particle.color,
                opacity: particle.alpha,
                x: particle.x,
                y: particle.y,
              }}
              initial={{ scale: 1 }}
              animate={{ scale: 0.8 }}
              transition={{ duration: 0.5 }}
            />
          ))}
        </>
      )}
    </>
  )
}
