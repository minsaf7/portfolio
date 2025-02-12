"use client"; // Required in Next.js 13+

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

const themes = {
  light: "themes/light.css",
  dark: "themes/dark.css",
  blue: "themes/blue.css",
};

type ThemeContextType = {
  theme: string;
  setTheme: (theme: string) => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme") || "light";
    setTheme(storedTheme);
    document.documentElement.setAttribute("data-theme", storedTheme);
    loadTheme(storedTheme);
  }, []);

  const loadTheme = (theme: string) => {
    const themeLink = document.getElementById("theme-style") as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = themes[theme] || themes.light;
    } else {
      const link = document.createElement("link");
      link.id = "theme-style";
      link.rel = "stylesheet";
      link.href = themes[theme] || themes.light;
      document.head.appendChild(link);
    }
    localStorage.setItem("theme", theme);
  };

  const updateTheme = (newTheme: string) => {
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    loadTheme(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: updateTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
