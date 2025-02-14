import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}



export const changeTheme = (theme: string) => {
  document.querySelector("html")?.setAttribute("data-theme", theme);
};