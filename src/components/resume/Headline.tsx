"use client"

import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Bubble } from "@/components/resume/_components/Bubble"

import { logoLinkedin, logoFeedzai } from "@/images/logos/resume"
import { GithubIcon } from "@/components/icons"
import { CodeIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

export function Headline() {
  return (
    <header className="mb-2">
      <h1 className="text-4xl">
        <span>Francisco</span>
        <span className="ml-1.5 font-bold">Gonçalves</span>
      </h1>
      <div className="flex flex-col gap-1 text-sm lg:flex-row lg:gap-3 lg:text-base">
        <Bubble className="w-fit text-xs font-semibold" variant="outline">
          Frontend Engineer @ Feedzai
          <Image src={logoFeedzai} alt="Feedzai" width={15} height={15} className="rounded-full" />
        </Bubble>
        <Bubble className="w-fit text-xs font-semibold" variant="outline">
          MSc in Computer Science and Engineering
        </Bubble>
        <Bubble className="w-fit text-xs font-semibold" variant="outline">
          <MapPinIcon className="h-3 w-3" /> Porto, Portugal
        </Bubble>
      </div>

      <div className="mt-2 flex w-full flex-col flex-wrap gap-1 border-t pt-2 text-sm lg:mt-2 lg:flex-row lg:gap-4 lg:border-t-0 lg:pt-0">
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

        <Link href="https://linkedin.com/in/kikogoncalves" className="flex items-center gap-2 hover:underline lg:gap-1">
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
