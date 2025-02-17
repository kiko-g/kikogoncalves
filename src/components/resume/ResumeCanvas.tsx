"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DownloadIcon, MailIcon, PhoneIcon } from "lucide-react"
import { JumpsellerLogoLink } from "../about/JumpsellerLogoLink"
import { XTwitterIcon } from "../icons"
import { logoLinkedin } from "@/images/logos/resume"

export function ResumeCanvas() {
  function downloadResume() {
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
    <div className="group relative mx-auto w-full" style={{ aspectRatio: "1/1.4142" }} id="resume">
      <Button
        variant="default"
        size="icon-sm"
        onClick={downloadResume}
        className="absolute right-4 top-4 z-10 opacity-20 transition-opacity group-hover:opacity-100"
      >
        <DownloadIcon />
      </Button>

      <div className="absolute inset-0 rounded-xl border bg-white dark:bg-zinc-800"></div>
      <section className="absolute left-0 top-0 h-full w-full p-4">
        <h1 className="text-3xl">
          <span>Francisco</span>
          <span className="ml-1.5 font-bold">Gonçalves</span>
        </h1>

        <div className="flex space-x-2 divide-x divide-zinc-300 dark:divide-zinc-500">
          <span className="flex items-center gap-1 font-semibold">
            Fullstack Engineer at Jumpseller <JumpsellerLogoLink width={20} height={20} />
          </span>
          <span className="pl-2.5 font-normal">MSc in Informatics and Computing Engineering</span>
          <span className="pl-2.5 font-normal">Porto, Portugal</span>
        </div>

        <div className="mt-1 flex w-full space-x-3 divide-x divide-zinc-300 text-sm opacity-80 dark:divide-zinc-500">
          <Link href="tel:+351918271105" className="flex items-center gap-1 hover:underline">
            <PhoneIcon className="h-4 w-4" />
            <span>+351 91 827 11 05</span>
          </Link>

          <Link href="mailto:kikojpgoncalves@gmail.com" className="flex items-center gap-1 pl-3.5 hover:underline">
            <MailIcon className="h-4 w-4" />
            <span>kikojpgoncalves@gmail.com</span>
          </Link>

          <Link href="https://x.com/kikogoncalves_" className="flex items-center gap-1 pl-3.5 hover:underline">
            <XTwitterIcon className="h-4 w-4" />
            <span>kikogoncalves_</span>
          </Link>

          <Link
            href="https://www.linkedin.com/in/kikogoncalves/"
            className="flex items-center gap-1 pl-3.5 hover:underline"
          >
            <Image src={logoLinkedin} alt="Linkedin" width={16} height={16} />
            <span>kikogoncalves_</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
