// "use client"

// import type React from "react"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { useTheme } from "next-themes"
// import { Sun, Moon, Monitor } from "lucide-react"

// export default function ThemeToggle() {
//   const [mounted, setMounted] = useState(false)
//   const { theme, setTheme, resolvedTheme } = useTheme()
//   const [isOpen, setIsOpen] = useState(false)

//   // After mounting, we can safely show the UI
//   useEffect(() => {
//     setMounted(true)
//   }, [])

//   // Close dropdown when clicking outside
//   useEffect(() => {
//     if (!isOpen) return

//     const handleClickOutside = () => {
//       setIsOpen(false)
//     }

//     document.addEventListener("click", handleClickOutside)
//     return () => document.removeEventListener("click", handleClickOutside)
//   }, [isOpen])

//   const toggleTheme = (newTheme: string) => {
//     setTheme(newTheme)
//     setIsOpen(false)
//   }

//   // Handle button click without closing dropdown immediately
//   const handleButtonClick = (e: React.MouseEvent) => {
//     e.stopPropagation()
//     setIsOpen(!isOpen)
//   }

//   // Handle theme option click
//   const handleThemeClick = (e: React.MouseEvent, newTheme: string) => {
//     e.stopPropagation()
//     toggleTheme(newTheme)
//   }

//   // Show placeholder until mounted to prevent hydration mismatch
//   if (!mounted) {
//     return (
//       <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
//         <span className="sr-only">Loading theme toggle</span>
//       </div>
//     )
//   }

//   // Determine current theme for display
//   const currentTheme = theme === "system" ? resolvedTheme : theme

//   return (
//     <div className="relative z-50">
//       <motion.button
//         onClick={handleButtonClick}
//         className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary"
//         whileHover={{ scale: 1.05 }}
//         whileTap={{ scale: 0.95 }}
//         aria-label="Toggle theme"
//       >
//         {currentTheme === "dark" ? (
//           <Moon className="h-5 w-5" />
//         ) : currentTheme === "light" ? (
//           <Sun className="h-5 w-5" />
//         ) : (
//           <Monitor className="h-5 w-5" />
//         )}
//       </motion.button>

//       <AnimatePresence>
//         {isOpen && (
//           <motion.div
//             initial={{ opacity: 0, y: 10, scale: 0.95 }}
//             animate={{ opacity: 1, y: 0, scale: 1 }}
//             exit={{ opacity: 0, y: 10, scale: 0.95 }}
//             transition={{ duration: 0.15 }}
//             className="absolute right-0 mt-2 py-2 w-36 bg-background border border-border rounded-lg shadow-lg"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={(e) => handleThemeClick(e, "light")}
//               className={`flex items-center w-full px-4 py-2 text-sm ${
//                 theme === "light" ? "text-primary font-medium" : "text-foreground"
//               } hover:bg-primary/10`}
//             >
//               <Sun className="h-4 w-4 mr-2" />
//               Light
//             </button>
//             <button
//               onClick={(e) => handleThemeClick(e, "dark")}
//               className={`flex items-center w-full px-4 py-2 text-sm ${
//                 theme === "dark" ? "text-primary font-medium" : "text-foreground"
//               } hover:bg-primary/10`}
//             >
//               <Moon className="h-4 w-4 mr-2" />
//               Dark
//             </button>
//             <button
//               onClick={(e) => handleThemeClick(e, "system")}
//               className={`flex items-center w-full px-4 py-2 text-sm ${
//                 theme === "system" ? "text-primary font-medium" : "text-foreground"
//               } hover:bg-primary/10`}
//             >
//               <Monitor className="h-4 w-4 mr-2" />
//               System
//             </button>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </div>
//   )
// }


"use client"

import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Ensure component is mounted to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="outline" size="icon" className="h-9 w-9">
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="h-9 w-9"
    >
      {theme === "dark" ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}

