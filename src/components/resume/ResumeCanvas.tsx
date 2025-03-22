"use client"

import { Button } from "@/components/ui/button"
import { Skills } from "./Skills"
import { Headline } from "./Headline"
import { Projects } from "./Projects"
import { Education } from "./Education"
import { Experience } from "./Experience"

import { DownloadIcon } from "lucide-react"

export function ResumeCanvas() {
  return (
    <Wrapper>
      <Headline />
      <Projects />
      <Experience />
      <Education />
      <Skills />
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
    <div id="resume" className="group relative mx-auto aspect-[0.1] w-full lg:aspect-[1/1.4142]">
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
