"use client"

import { motion } from "framer-motion"

export default function Header() {
  return (
    <header className="mb-12 pt-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-3xl font-bold mb-1 flex items-center">
          hi, i'm minsaaf <span className="ml-2 inline-block animate-wave">👋</span>
        </h1>
        <p className="text-muted-foreground">
          Software Engineer. I love building things and helping people.
        </p>
      </motion.div>
    </header>
  )
}
