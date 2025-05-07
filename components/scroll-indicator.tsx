"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function ScrollIndicator() {
  const { scrollYProgress } = useScroll()

  // Transform scrollYProgress to create a progress bar
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1])

  return <motion.div className="fixed top-0 left-0 right-0 h-0.5 bg-primary z-50 origin-left" style={{ scaleX }} />
}
