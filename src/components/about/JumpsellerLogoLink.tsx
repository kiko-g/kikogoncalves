import { logoJumpseller } from '@/images/logos/resume'
import clsx from 'clsx'
import Image from 'next/image'
import Link from 'next/link'

type Props = {
  className?: string
  width?: number
  height?: number
}

export function JumpsellerLogoLink({ className, width = 28, height = 28 }: Props) {
  return (
    <Link
      href="https://jumpseller.com"
      target="_blank"
      rel="noopener noreferrer"
      className={clsx(
        className,
        'inline-flex items-center justify-center transition-opacity duration-300 ease-in-out hover:opacity-80',
      )}
    >
      <Image src={logoJumpseller} alt="Jumpseller" width={width} height={height} />
    </Link>
  )
}
