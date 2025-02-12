"use client";

import { useTheme } from "@/app/ThemeProvider";

// import { useTheme } from "@/context/ThemeProvider";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-4">
      <label className="mr-2">Select Theme:</label>
      <select
        className="border rounded p-2 bg-background text-text"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="blue">Blue</option>
      </select>
    </div>
  );
}
