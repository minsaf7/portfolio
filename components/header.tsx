"use client";

import { motion } from "framer-motion";
import { Twitter, Github, Linkedin, Mail, Globe } from "lucide-react"

export default function Header() {
  const socialLinks = [
    // { icon: <Twitter size={18} />, url: "https://twitter.com", label: "Twitter" },
    { icon: <Github size={18} />, url: "https://github.com/minsaf7", label: "GitHub" },
    { icon: <Linkedin size={18} />, url: "https://www.linkedin.com/in/mohamed-minsaaf", label: "LinkedIn" },
    { icon: <Mail size={18} />, url: "mailto:minsafmohamed7@gmail.com", label: "Email" },
    // { icon: <Globe size={18} />, url: "https://example.com", label: "Website" },
  ]

  return (
    <header className="mb-12 pt-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl font-bold mb-1 flex items-center">
          hi, i&apos;m minsaaf{" "}
          <span className="ml-2 inline-block animate-wave">👋</span>
        </h1>
        <p className="text-muted-foreground">
          Software Engineer. I love building things and helping people.
        </p>
      </motion.div>

      <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="items-center justify-center flex gap-3 p-10"
    >
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
          aria-label={link.label}
        >
          {link.icon}
        </a>
      ))}
    </motion.div>
    </header>
  );
}
