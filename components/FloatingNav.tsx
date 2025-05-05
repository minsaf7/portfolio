"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { Home, User, Briefcase, GraduationCap, Code, Mail, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function FloatingNav() {
  const [activeSection, setActiveSection] = useState("home")
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // After mounting, we can safely show the UI that depends on the theme
  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "home", offset: 0 },
        { id: "about", offset: document.getElementById("about")?.offsetTop || 0 },
        { id: "experience", offset: document.getElementById("experience")?.offsetTop || 0 },
        { id: "education", offset: document.getElementById("education")?.offsetTop || 0 },
        { id: "projects", offset: document.getElementById("projects")?.offsetTop || 0 },
        { id: "contact", offset: document.getElementById("contact")?.offsetTop || 0 },
      ]

      const scrollPosition = window.scrollY + 200

      for (let i = sections.length - 1; i >= 0; i--) {
        if (scrollPosition >= sections[i].offset) {
          setActiveSection(sections[i].id)
          break
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={20} /> },
    { id: "about", label: "About", icon: <User size={20} /> },
    { id: "experience", label: "Work", icon: <Briefcase size={20} /> },
    { id: "education", label: "Education", icon: <GraduationCap size={20} /> },
    { id: "projects", label: "Projects", icon: <Code size={20} /> },
    { id: "contact", label: "Contact", icon: <Mail size={20} /> },
  ]

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark")
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="flex items-center gap-1 px-3 py-2 bg-background/80 backdrop-blur-md rounded-full border shadow-lg">
        {navItems.map((item) => (
          <Link
            key={item.id}
            href={`#${item.id}`}
            className={`p-2 rounded-full flex flex-col items-center transition-colors ${
              activeSection === item.id
                ? "text-primary bg-secondary"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            }`}
            onClick={() => setActiveSection(item.id)}
            aria-label={item.label}
          >
            {item.icon}
            <span className="sr-only">{item.label}</span>
          </Link>
        ))}

        {mounted && (
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/50"
            aria-label="Toggle theme"
          >
            {resolvedTheme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        )}
      </div>
    </motion.div>
  )
}
