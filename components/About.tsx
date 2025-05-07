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
            I&apos;m a <span className="font-medium">Full Stack Developer</span> with expertise in building complex web
            applications and mobile solutions. My focus is on creating scalable, maintainable software architectures
            that deliver exceptional user experiences.
          </p>
          <p>
            With a strong background in <span className="font-medium">microservices architecture</span>, I specialize in
            developing enterprise-grade applications for the financial sector. I&apos;m passionate about implementing
            server-driven UI approaches that enable dynamic content delivery and reduce deployment overhead.
          </p>
          <p>
            My experience spans both web and mobile development, with a particular focus on{" "}
            <span className="font-medium">React, React Native, Node.js, and TypeScript</span>. I enjoy working with
            modern technologies and architectural patterns to solve complex business problems.
          </p>
         
        </div>
      </motion.div>
    </section>
  )
}
