"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Experience } from "./Experience"
import { Education } from "./Education"
import { Projects } from "./Projects"

import { cn } from "@/lib/utils"
import { logoLinkedin } from "@/images/logos/resume"
import { XTwitterIcon, GithubIcon } from "../icons"
import { CodeIcon, DownloadIcon, MailIcon, MapPinIcon, PhoneIcon } from "lucide-react"

export function ResumeCanvas() {
  return (
    <Wrapper>
      <Header />
      <Projects />
      <Experience />
      <Education />
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

      <article className="absolute left-0 top-0 z-20 flex h-full w-full flex-col px-4 py-3 text-zinc-800 dark:text-zinc-50">
        {children}
      </article>
    </div>
  )
}

function Overlay() {
  return <div className="absolute inset-0 rounded-xl border bg-white dark:bg-black/30"></div>
}

function Bubble({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        "flex items-center gap-1 rounded-full border border-teal-600/10 bg-gradient-to-r from-teal-600/10 to-teal-600/10 px-1.5 py-0.5 leading-none dark:border-teal-500/20 dark:bg-teal-500/20",
        className,
      )}
    >
      {children}
    </span>
  )
}

function Header() {
  return (
    <header className="mb-2">
      <h1 className="text-4xl">
        <span>Francisco</span>
        <span className="ml-1.5 font-bold">Gonçalves</span>
      </h1>

      <div className="flex flex-col gap-1 text-sm lg:flex-row lg:gap-3 lg:text-base">
        <Bubble className="w-fit text-xs font-medium">Fullstack Engineer at Jumpseller</Bubble>
        <Bubble className="w-fit text-xs font-medium">MSc in Informatics and Computing Engineering</Bubble>
        <Bubble className="w-fit text-xs font-medium">
          <MapPinIcon className="h-3 w-3" /> Porto, Portugal
        </Bubble>
      </div>

      <div className="mt-2 flex w-full flex-wrap gap-3 border-t pt-2 text-sm opacity-80 lg:mt-1 lg:flex-row lg:gap-4 lg:border-t-0 lg:pt-0">
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
          <span>https://kikogoncalves.com/projects</span>
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
