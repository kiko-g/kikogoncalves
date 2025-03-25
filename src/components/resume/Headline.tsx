"use client"

import Link from "next/link"
import Image from "next/image"

import { cn } from "@/lib/utils"
import { logoLinkedin } from "@/images/logos/resume"
import { GithubIcon } from "../icons"
import { CodeIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

function Bubble({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "flex items-center gap-1 rounded-full border-0 border-teal-600/10 bg-teal-600/10 px-1.5 py-0.5 leading-none dark:border-teal-500/20 dark:bg-teal-500/20",
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Headline() {
  return (
    <header className="mb-2">
      <h1 className="text-4xl">
        <span>Francisco</span>
        <span className="ml-1.5 font-bold">Gonçalves</span>
      </h1>

      <div className="flex flex-col gap-1 text-sm lg:flex-row lg:gap-3 lg:text-base">
        <Bubble className="w-fit text-xs font-medium">Software Development Engineer @ Jumpseller</Bubble>
        <Bubble className="w-fit text-xs font-medium">MSc in Computer Science and Engineering</Bubble>
        <Bubble className="w-fit text-xs font-medium">
          <MapPinIcon className="h-3 w-3" /> Porto, Portugal
        </Bubble>
      </div>

      <div className="mt-2 flex w-full flex-col flex-wrap gap-1 border-t pt-2 text-sm opacity-80 lg:mt-2 lg:flex-row lg:gap-4 lg:border-t-0 lg:pt-0">
        <Link href="tel:+351918271105" className="flex items-center gap-2 hover:underline lg:gap-1">
          <PhoneIcon className="size-4" />
          <span>+351 91 827 11 05</span>
        </Link>

        <Link href="mailto:kikojpgoncalves@gmail.com" className="flex items-center gap-2 hover:underline lg:gap-1">
          <MailIcon className="size-4" />
          <span>kikojpgoncalves@gmail.com</span>
        </Link>

        <Link href="https://kikogoncalves.com/projects" className="flex items-center gap-2 hover:underline lg:gap-1">
          <CodeIcon className="size-4" />
          <span>https://kikogoncalves.com/projects</span>
        </Link>

        <Link
          href="https://www.linkedin.com/in/kikogoncalves/"
          className="flex items-center gap-2 hover:underline lg:gap-1"
        >
          <Image src={logoLinkedin} alt="Linkedin" width={16} height={16} />
          <span>kikogoncalves_</span>
        </Link>

        <Link href="https://github.com/kiko-g" className="flex items-center gap-2 hover:underline lg:gap-1">
          <GithubIcon className="size-4" />
          <span>kiko-g</span>
        </Link>
      </div>
    </header>
  )
}
