"use client"

import { useTheme } from "next-themes"
import {
  Home,
  User,
  Briefcase,
  GraduationCap,
  FolderOpen,
  Mail,
  Sun,
  Moon,
} from "lucide-react"
import { useEffect, useState } from "react"

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Briefcase, label: "Experience", href: "#experience" },
  { icon: GraduationCap, label: "Education", href: "#education" },
  { icon: FolderOpen, label: "Projects", href: "#projects" },
  { icon: Mail, label: "Contact", href: "#contact" },
]

export function DockNavigation() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <nav
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2"
      aria-label="Main navigation"
    >
      <div className="flex items-center gap-1.5 rounded-2xl border border-border bg-background/80 px-3 py-2.5 shadow-lg backdrop-blur-xl">
        {navItems.map((item) => {
          const Icon = item.icon
          return (
            <a
              key={item.label}
              href={item.href}
              className="dock-item group relative flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              aria-label={item.label}
            >
              <Icon className="h-[18px] w-[18px]" />
              {/* Tooltip */}
              <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 text-[11px] font-medium text-background opacity-0 transition-opacity group-hover:opacity-100">
                {item.label}
              </span>
            </a>
          )
        })}

        {/* Separator */}
        <div className="mx-1 h-6 w-px bg-border" />

        {/* Theme toggle */}
        {mounted && (
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="dock-item group relative flex h-10 w-10 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            type="button"
          >
            {theme === "dark" ? (
              <Sun className="h-[18px] w-[18px]" />
            ) : (
              <Moon className="h-[18px] w-[18px]" />
            )}
            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2.5 py-1 text-[11px] font-medium text-background opacity-0 transition-opacity group-hover:opacity-100">
              {theme === "dark" ? "Light mode" : "Dark mode"}
            </span>
          </button>
        )}
      </div>
    </nav>
  )
}
