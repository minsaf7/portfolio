"use client"

import { motion } from "framer-motion"
import { Twitter, Github, Linkedin, Mail, Globe } from "lucide-react"

export default function SocialLinks() {
  const socialLinks = [
    { icon: <Twitter size={18} />, url: "https://twitter.com", label: "Twitter" },
    { icon: <Github size={18} />, url: "https://github.com", label: "GitHub" },
    { icon: <Linkedin size={18} />, url: "https://linkedin.com", label: "LinkedIn" },
    { icon: <Mail size={18} />, url: "mailto:example@example.com", label: "Email" },
    { icon: <Globe size={18} />, url: "https://example.com", label: "Website" },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.5 }}
      className="fixed bottom-6 right-6 flex gap-3"
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
  )
}
