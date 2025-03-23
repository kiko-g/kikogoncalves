"use client"

import { useEffect, useState } from "react"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"

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
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const downloadResumeAsPdf = async () => {
    if (!isClient) return

    try {
      const resumeElement = document.getElementById("resume")
      if (!resumeElement) {
        console.error("Resume element not found")
        return
      }

      const originalWidth = resumeElement.offsetWidth
      const originalHeight = resumeElement.offsetHeight

      const canvas = await html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
        logging: false,
        backgroundColor: getComputedStyle(resumeElement).backgroundColor || "#ffffff",
        removeContainer: false,
        windowWidth: document.documentElement.offsetWidth,
        windowHeight: document.documentElement.offsetHeight,
      })

      const imgData = canvas.toDataURL("image/png", 1.0)

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (originalHeight * pdfWidth) / originalWidth
      const now = new Date()
      const datestamp = `${now.getDate().toString().padStart(2, "0")}-${(now.getMonth() + 1).toString().padStart(2, "0")}-${now.getFullYear().toString().slice(-2)}`

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
      pdf.save(`francisco-goncalves-cv-${datestamp}.pdf`)
    } catch (error) {
      console.error("Error generating PDF:", error)
    }
  }

  const downloadResumeAsPng = () => {
    if (!isClient) return

    const resumeElement = document.getElementById("resume") as HTMLElement
    if (resumeElement) {
      html2canvas(resumeElement, {
        scale: 2,
        useCORS: true,
        logging: false,
      }).then((canvas) => {
        const now = new Date()
        const datestamp = `${now.getDate().toString().padStart(2, "0")}-${(now.getMonth() + 1).toString().padStart(2, "0")}-${now.getFullYear().toString().slice(-2)}`

        const resumeUrl = canvas.toDataURL("image/png")
        const a = document.createElement("a")
        a.href = resumeUrl
        a.download = `francisco-goncalves-cv-${datestamp}.png`
        a.click()
      })
    }
  }

  return (
    <div id="resume" className="group relative mx-auto aspect-[0.1] w-full lg:aspect-[1/1.4142]">
      <div className="absolute right-4 top-4 z-50 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
        <Button variant="default" size="icon-sm" onClick={downloadResumeAsPng} title="Download as PDF">
          <DownloadIcon />
        </Button>
      </div>

      <Overlay />

      <article className="absolute left-0 top-0 z-20 flex h-full w-full flex-col px-4 py-3 text-zinc-800 dark:text-zinc-50">
        {children}
      </article>
    </div>
  )
}

function Overlay() {
  return <div className="absolute inset-0 border bg-white dark:bg-black/30"></div>
}
