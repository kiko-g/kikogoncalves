"use client"

import { useEffect, useState, useRef } from "react"
import { jsPDF } from "jspdf"
import html2canvas from "html2canvas"

import { Button } from "@/components/ui/button"
import { Skills } from "./Skills"
import { Headline } from "./Headline"
import { Projects } from "./Projects"
import { Education } from "./Education"
import { Experience } from "./Experience"

import { FileDown, ImageDown } from "lucide-react"

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
  const resumeRef = useRef<HTMLDivElement>(null)

  const downloadResumeAsPdf = async () => {
    if (!resumeRef.current) return

    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: "#FFFFFF",
      })

      const imgData = canvas.toDataURL("image/png")
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      // Calculate dimensions to maintain aspect ratio
      const imgWidth = 210 // A4 width in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width

      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight)
      pdf.save("resume.pdf")
    } catch (error) {
      console.error("Error generating PDF:", error)
    }
  }

  const downloadResumeAsPng = async () => {
    if (!resumeRef.current) return

    try {
      const canvas = await html2canvas(resumeRef.current, {
        scale: 2, // Higher scale for better quality
        useCORS: true,
        logging: false,
        backgroundColor: "#FFFFFF",
      })

      const link = document.createElement("a")
      link.download = "resume.png"
      link.href = canvas.toDataURL("image/png")
      link.click()
    } catch (error) {
      console.error("Error generating PNG:", error)
    }
  }

  return (
    <div id="resume" ref={resumeRef} className="group relative mx-auto aspect-[0.1] w-full lg:aspect-[1/1.4142]">
      <div className="absolute right-4 top-4 z-50 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
        <Button variant="outline" size="icon-sm" onClick={downloadResumeAsPng} title="Download as PNG">
          <ImageDown size={16} />
        </Button>
        <Button variant="default" size="icon-sm" onClick={downloadResumeAsPdf} title="Download as PDF">
          <FileDown size={16} />
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
