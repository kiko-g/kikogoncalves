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

import { DownloadIcon, FileDown, ImageDown } from "lucide-react"

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
  const [isGenerating, setIsGenerating] = useState(false)
  const resumeRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsClient(true)
  }, [])

  // Helper to generate a timestamp for filenames
  const getDateStamp = () => {
    const now = new Date()
    return `${now.getDate().toString().padStart(2, "0")}-${(now.getMonth() + 1)
      .toString()
      .padStart(2, "0")}-${now.getFullYear().toString().slice(-2)}`
  }

  // Force all styles to be computed and rendered before capture
  const prepareForCapture = async (element: HTMLElement) => {
    // Create a clone of the element to avoid modifying the original
    const clone = element.cloneNode(true) as HTMLElement

    // Apply computed styles to the clone
    const styles = window.getComputedStyle(element)
    clone.style.cssText = Array.from(styles).reduce((str, property) => {
      return `${str}${property}:${styles.getPropertyValue(property)};`
    }, "")

    // Force a reflow
    document.body.appendChild(clone)
    clone.getBoundingClientRect()

    return clone
  }

  const downloadResumeAsPdf = async () => {
    if (!isClient || !resumeRef.current) return
    setIsGenerating(true)

    try {
      // Ensure scrollbars are hidden during capture
      const originalOverflow = document.body.style.overflow
      document.body.style.overflow = "hidden"

      // Wait for all images to load
      await Promise.all(
        Array.from(resumeRef.current.querySelectorAll("img"))
          .filter((img) => !img.complete)
          .map(
            (img) =>
              new Promise((resolve) => {
                img.onload = resolve
                img.onerror = resolve
              }),
          ),
      )

      // Set explicit dimensions for the capture
      const resumeElement = resumeRef.current
      const rect = resumeElement.getBoundingClientRect()

      // Use higher scale for better quality
      const canvas = await html2canvas(resumeElement, {
        scale: 3, // Increased for better quality
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: getComputedStyle(resumeElement).backgroundColor || "#ffffff",
        width: rect.width,
        height: rect.height,
        // Force render of all CSS properties
        onclone: (clonedDoc, clonedElement) => {
          // Find all elements with style classes
          const elements = clonedElement.querySelectorAll("*")

          // Apply explicit styles to each element
          elements.forEach((el) => {
            const computedStyle = window.getComputedStyle(el as Element)
            const styleProps = Array.from(computedStyle)

            styleProps.forEach((prop) => {
              ;(el as HTMLElement).style.setProperty(prop, computedStyle.getPropertyValue(prop), "important")
            })
          })
        },
      })

      // Create PDF with appropriate dimensions
      const imgData = canvas.toDataURL("image/png", 1.0)

      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "mm",
        format: "a4",
      })

      const pdfWidth = pdf.internal.pageSize.getWidth()
      const pdfHeight = (rect.height * pdfWidth) / rect.width

      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight)
      pdf.save(`francisco-goncalves-cv-${getDateStamp()}.pdf`)

      // Restore original overflow setting
      document.body.style.overflow = originalOverflow
    } catch (error) {
      console.error("Error generating PDF:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  const downloadResumeAsPng = async () => {
    if (!isClient || !resumeRef.current) return
    setIsGenerating(true)

    try {
      // Using the same improved capture method as for PDF
      const resumeElement = resumeRef.current
      const rect = resumeElement.getBoundingClientRect()

      const canvas = await html2canvas(resumeElement, {
        scale: 3,
        useCORS: true,
        allowTaint: true,
        logging: false,
        backgroundColor: getComputedStyle(resumeElement).backgroundColor || "#ffffff",
        width: rect.width,
        height: rect.height,
        onclone: (clonedDoc, clonedElement) => {
          const elements = clonedElement.querySelectorAll("*")
          elements.forEach((el) => {
            const computedStyle = window.getComputedStyle(el as Element)
            const styleProps = Array.from(computedStyle)
            styleProps.forEach((prop) => {
              ;(el as HTMLElement).style.setProperty(prop, computedStyle.getPropertyValue(prop), "important")
            })
          })
        },
      })

      const resumeUrl = canvas.toDataURL("image/png", 1.0)
      const a = document.createElement("a")
      a.href = resumeUrl
      a.download = `francisco-goncalves-cv-${getDateStamp()}.png`
      a.click()
    } catch (error) {
      console.error("Error generating PNG:", error)
    } finally {
      setIsGenerating(false)
    }
  }

  return (
    <div id="resume" ref={resumeRef} className="group relative mx-auto aspect-[0.1] w-full lg:aspect-[1/1.4142]">
      <div className="absolute right-4 top-4 z-50 flex gap-2 opacity-0 transition-opacity group-hover:opacity-100">
        <Button
          variant="outline"
          size="icon-sm"
          onClick={downloadResumeAsPng}
          title="Download as PNG"
          disabled={isGenerating}
        >
          <ImageDown size={16} />
        </Button>
        <Button
          variant="default"
          size="icon-sm"
          onClick={downloadResumeAsPdf}
          title="Download as PDF"
          disabled={isGenerating}
        >
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
