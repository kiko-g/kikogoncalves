"use client"

import { Button } from "@/components/ui/button"
import { DownloadIcon } from "lucide-react"

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

      <div className="absolute inset-0 rounded-xl border bg-zinc-50 dark:bg-zinc-800"></div>
      <section className="absolute left-0 top-0 h-full w-full p-4">
        <h1 className="text-3xl">
          <span>Francisco</span>
          <span className="ml-1.5 font-bold">Gonçalves</span>
        </h1>
      </section>
    </div>
  )
}
