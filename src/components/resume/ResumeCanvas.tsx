"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Experience } from "./Experience"

import { logoLinkedin } from "@/images/logos/resume"
import { XTwitterIcon, GithubIcon } from "../icons"
import { JumpsellerLogoLink } from "../about/JumpsellerLogoLink"
import { CodeIcon, DownloadIcon, MailIcon, PhoneIcon } from "lucide-react"

export function ResumeCanvas() {
  return (
    <Wrapper>
      <Header />
      <Experience />
    </Wrapper>
  )
}

function Wrapper({ children }: { children: React.ReactNode }) {
  const downloadResume = () => {
    const resumeElement = document.getElementById("resume") as HTMLCanvasElement
    if (resumeElement) {
      const resumeUrl = resumeElement.toDataURL("image/png")
      const a = document.createElement("a")
      a.href = resumeUrl
      a.download = "Francisco Gonçalves - Resume.png"
      a.click()
    }
  }

  return (
    <div id="resume" className="group relative mx-auto w-full" style={{ aspectRatio: "1/1.4142" }}>
      <Button
        variant="default"
        size="icon-sm"
        onClick={downloadResume}
        className="absolute right-4 top-4 z-50 opacity-20 transition-opacity group-hover:opacity-100"
      >
        <DownloadIcon />
      </Button>

      <Overlay />

      <article className="absolute left-0 top-0 z-20 flex h-full w-full flex-col gap-4 p-4 text-zinc-800 dark:text-zinc-50">
        {children}
      </article>
    </div>
  )
}

function Overlay() {
  return <div className="absolute inset-0 rounded-xl border bg-white dark:bg-black/30"></div>
}

function Header() {
  return (
    <header>
      <h1 className="text-4xl">
        <span>Francisco</span>
        <span className="ml-1.5 font-bold">Gonçalves</span>
      </h1>

      <div className="flex flex-col gap-0 divide-x-0 divide-zinc-300 text-sm dark:divide-zinc-500 lg:flex-row lg:gap-3 lg:divide-x lg:text-base lg:[&>*:not(:first-child)]:pl-3">
        <span className="flex items-center gap-1 font-bold">
          Fullstack Engineer at Jumpseller <JumpsellerLogoLink width={20} height={20} />
        </span>
        <span className="font-normal">MSc in Informatics and Computing Engineering</span>
        <span className="font-normal opacity-70">Porto, Portugal</span>
      </div>

      <div className="mt-2 flex w-full flex-col gap-0 divide-x-0 divide-zinc-300 border-t pt-2 text-sm opacity-80 dark:divide-zinc-500 lg:mt-1 lg:flex-row lg:gap-3 lg:divide-x lg:border-t-0 lg:pt-0 [&>*:not(:first-child)]:pl-0 lg:[&>*:not(:first-child)]:pl-3">
        <Link href="tel:+351918271105" className="flex items-center gap-1 hover:underline">
          <PhoneIcon className="size-4" />
          <span>+351 91 827 11 05</span>
        </Link>

        <Link href="mailto:kikojpgoncalves@gmail.com" className="flex items-center gap-1 hover:underline">
          <MailIcon className="size-4" />
          <span>kikojpgoncalves@gmail.com</span>
        </Link>

        {/* <Link href="https://x.com/kikogoncalves_" className="flex items-center gap-1 hover:underline">
            <XTwitterIcon className="size-4" />
            <span>kikogoncalves_</span>
          </Link> */}

        <Link href="https://kikogoncalves.com/projects" className="flex items-center gap-1 hover:underline">
          <CodeIcon className="size-4" />
          <span>Projects</span>
        </Link>

        <Link href="https://www.linkedin.com/in/kikogoncalves/" className="flex items-center gap-1 hover:underline">
          <Image src={logoLinkedin} alt="Linkedin" width={16} height={16} />
          <span>kikogoncalves_</span>
        </Link>

        <Link href="https://github.com/kiko-g" className="flex items-center gap-1 hover:underline">
          <GithubIcon className="size-4" />
          <span>kiko-g</span>
        </Link>
      </div>
    </header>
  )
}
