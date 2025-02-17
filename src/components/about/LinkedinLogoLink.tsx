import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import { logoLinkedin } from "@/images/logos/resume"

type Props = {
  href: string
  className?: string
  width?: number
  height?: number
}

export function LinkedinLogoLink({ href, className, width = 16, height = 16 }: Props) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        className,
        "inline-flex size-4 items-center justify-center transition-opacity duration-300 ease-in-out hover:opacity-80",
      )}
    >
      <Image src={logoLinkedin} alt="Linkedin" width={512} height={512} />
    </Link>
  )
}
