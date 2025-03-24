import { ExternalLinkIcon } from "lucide-react"

export function ExternalResource({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-0.5 font-bold hover:opacity-80"
    >
      {children}
      <ExternalLinkIcon className="mt-[-2px] size-4" />
    </a>
  )
}
