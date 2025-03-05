import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigation = [
  { name: "Home", href: "/", shown: true },
  { name: "About", href: "/about", shown: true },
  { name: "Resume", href: "/resume", shown: process.env.NODE_ENV === "development" },
  { name: "Projects", href: "/projects", shown: true },
  { name: "Articles", href: "/articles", shown: true },
  { name: "Uses", href: "/uses", shown: false },
  { name: "Speaking", href: "/speaking", shown: false },
].filter((item) => item.shown)
