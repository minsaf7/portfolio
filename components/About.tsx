"use client"

import { motion } from "framer-motion"

export default function About() {
  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h2 className="section-title">About</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own
            SaaS businesses. In the past, I studied and got degrees in computer science and business. Interned at top
            tech companies in Silicon Valley.
          </p>
          <p>
            Competed in over 15 hackathons for fun. Been coding since I was 12. Passionate about AI, design, and
            building products that people love.
          </p>
        </div>
      </motion.div>
    </section>
  )
}
