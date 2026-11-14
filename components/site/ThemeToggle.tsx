"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

/** Icons swap via CSS on the `.dark` class, so they never get stuck mid-animation. */
export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle light and dark mode"
      className="relative -mr-2 flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:text-foreground"
    >
      <Moon className="absolute h-4 w-4 rotate-0 scale-100 transition-transform duration-300 dark:-rotate-90 dark:scale-0" />
      <Sun className="absolute h-4 w-4 rotate-90 scale-0 transition-transform duration-300 dark:rotate-0 dark:scale-100" />
    </button>
  );
}
