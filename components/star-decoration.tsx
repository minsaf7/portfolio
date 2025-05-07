"use client"

import { motion } from "framer-motion"

export default function StarDecoration() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <motion.div
        className="absolute top-[15%] right-[10%] text-3xl text-primary/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute top-[40%] left-[5%] text-4xl text-primary/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute bottom-[20%] right-[15%] text-2xl text-primary/30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.2 }}
      >
        ✦
      </motion.div>
      <motion.div
        className="absolute top-[60%] left-[20%] text-5xl text-primary/20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        ✦
      </motion.div>
    </div>
  )
}
