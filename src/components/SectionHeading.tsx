import clsx from "clsx"
import React, { HTMLAttributes } from "react"

import { LinkIcon } from "lucide-react"

type Props = HTMLAttributes<HTMLHeadingElement> & {
  children: React.ReactNode
  slideTo?: string
  noMargin?: boolean
  withDivider?: boolean
}

export function SectionHeading({ children, slideTo, noMargin, withDivider, ...props }: Props) {
  const heading = (
    <h2
      {...props}
      className={clsx(
        noMargin ? "mb-0" : "mb-3",
        withDivider && "border-dimmed border-b pb-2.5",
        "mb-3 flex flex-1 text-3xl font-bold leading-7 tracking-tight text-navy-800 dark:text-navy-100 sm:text-4xl",
      )}
    >
      {children}
    </h2>
  )

  return slideTo ? (
    <a id={slideTo} href={`#${slideTo}`} className="group relative hover:underline">
      <span className="absolute -left-7 top-[26px] opacity-0 transition-all group-hover:opacity-60">
        <LinkIcon className="h-5 w-5" />
      </span>
      {heading}
    </a>
  ) : (
    heading
  )
}
