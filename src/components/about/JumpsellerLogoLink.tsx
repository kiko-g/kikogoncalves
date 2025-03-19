import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { logoJumpseller } from "@/images/logos/resume"

type Props = {
  className?: string
  width?: number
  height?: number
}

export function JumpsellerLogoLink({ className, width = 15, height = 20 }: Props) {
  return (
    <Link
      href="https://jumpseller.com"
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        className,
        "inline-flex items-center justify-center transition-opacity duration-300 ease-in-out hover:opacity-80",
      )}
    >
      <Image src={logoJumpseller} alt="Jumpseller" width={width} height={height} />
    </Link>
  )
}
