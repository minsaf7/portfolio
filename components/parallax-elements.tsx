"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useTheme } from "next-themes"

export default function ParallaxElements() {
  const { scrollY } = useScroll()
  const { resolvedTheme } = useTheme()

  // Transform values for different parallax speeds
  const y1 = useTransform(scrollY, [0, 3000], [0, -600])
  const y2 = useTransform(scrollY, [0, 3000], [0, -300])
  const y3 = useTransform(scrollY, [0, 3000], [0, -900])
  const rotate1 = useTransform(scrollY, [0, 3000], [0, 45])
  const rotate2 = useTransform(scrollY, [0, 3000], [0, -30])

  const getColor = (opacity: number) => {
    return resolvedTheme === "dark" ? `rgba(255, 255, 255, ${opacity})` : `rgba(0, 82, 72, ${opacity})`
  }

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
      {/* Large circle with parallax */}
      <motion.div
        style={{
          y: y1,
          rotate: rotate1,
          background: getColor(0.03),
        }}
        className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full"
      />

      {/* Medium square with parallax */}
      <motion.div
        style={{
          y: y2,
          rotate: rotate2,
          background: getColor(0.02),
        }}
        className="absolute top-[60%] -left-20 w-[300px] h-[300px] rounded-[50px]"
      />

      {/* Small triangle with parallax */}
      <motion.div style={{ y: y3 }} className="absolute top-[30%] right-[10%]">
        <div
          style={{
            width: 0,
            height: 0,
            borderLeft: "80px solid transparent",
            borderRight: "80px solid transparent",
            borderBottom: `120px solid ${getColor(0.02)}`,
          }}
        />
      </motion.div>

      {/* Grid pattern with parallax */}
      <motion.div style={{ y: useTransform(scrollY, [0, 3000], [0, -200]) }} className="absolute inset-0">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle, ${getColor(0.03)} 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        />
      </motion.div>
    </div>
  )
}
