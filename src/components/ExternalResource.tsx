import { cn } from "@/lib/utils"
import { ExternalLinkIcon } from "lucide-react"

export function ExternalResource({
  href,
  useIcon = true,
  children,
  underline = false,
  emphasize = false,
}: {
  href: string
  useIcon?: boolean
  children: React.ReactNode
  underline?: boolean
  emphasize?: boolean
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center gap-0.5 hover:opacity-80",
        underline && "underline",
        emphasize && "font-bold",
      )}
    >
      {children}
      {useIcon && <ExternalLinkIcon className="mt-[-2px] size-4" />}
    </a>
  )
}
