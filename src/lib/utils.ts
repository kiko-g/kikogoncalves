import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const navigation = [
  { name: "Home", href: "/", shown: true },
  { name: "About", href: "/about", shown: true },
  { name: "Resume", href: "/resume", shown: true },
  { name: "Projects", href: "/projects", shown: true },
  { name: "Articles", href: "/articles", shown: true },
  { name: "Uses", href: "/uses", shown: false },
  { name: "Speaking", href: "/speaking", shown: false },
].filter((item) => item.shown)

export function getDateTimestamp() {
  const now = new Date()
  return `${now.getDate().toString().padStart(2, "0")}-${(now.getMonth() + 1)
    .toString()
    .padStart(2, "0")}-${now.getFullYear().toString().slice(-2)}`
}
