import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"
import { logoCriticalManufacturing, logoJumpseller } from "@/images/logos/resume"

type Props = {
  className?: string
  width?: number
  height?: number
}

export function CriticalLogoLink({ className, width = 24, height = 24 }: Props) {
  return (
    <Link
      href="https://jumpseller.com"
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        className,
        "inline-flex items-center justify-center transition-opacity duration-300 ease-in-out hover:opacity-80",
      )}
    >
      <Image src={logoCriticalManufacturing} alt="Critical Manufacturing" width={width} height={height} />
    </Link>
  )
}
