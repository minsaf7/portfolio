"use client";

import { motion } from "framer-motion";

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
            I am a passionate Full Stack Developer with expertise in building
            complex web and mobile applications.
          </p>
          <br />
          <p>
            My focus is on creating scalable, efficient, and user-friendly
            solutions that solve real-world problems. With a strong background
            in both frontend and backend development, I specialize in modern
            JavaScript frameworks like React and React Native, as well as
            server-side technologies including Node.js and microservice
            architectures.
          </p>
          <p>
            My experience includes developing enterprise-level content
            management systems, financial applications, and implementing
            server-driven UI architectures that provide dynamic and responsive
            user experiences.
          </p>
        </div>
      </motion.div>
    </section>
  );
}
