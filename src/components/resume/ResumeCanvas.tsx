"use client"

import Link from "next/link"
import { useRef } from "react"
import { useReactToPrint } from "react-to-print"

import { Button } from "@/components/ui/button"
import { Skills } from "./Skills"
import { Headline } from "./Headline"
import { Projects } from "./Projects"
import { Education } from "./Education"
import { Experience } from "./Experience"

import { FileArchiveIcon, FileDownIcon } from "lucide-react"

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

function Overlay() {
  return <div className="absolute inset-0 border border-transparent"></div>
}

function Wrapper({ children }: { children: React.ReactNode }) {
  const contentRef = useRef<HTMLDivElement>(null)

  const downloadResumeAsPdf = useReactToPrint({ contentRef })

  return (
    <div
      id="resume"
      ref={contentRef}
      className="group relative mx-auto aspect-[0.1] w-full md:aspect-[1/1.41421356237]"
    >
      <div className="absolute right-2 top-2 z-50 flex gap-2 opacity-100 transition-opacity group-hover:opacity-100 md:right-4 md:top-4 md:opacity-0">
        <Button asChild variant="outline" size="icon-sm" title="See PDF version">
          <Link href="/cv.pdf" target="_blank" rel="noopener noreferrer">
            <FileArchiveIcon size={16} />
          </Link>
        </Button>

        <Button
          variant="outline"
          size="icon-sm"
          onClick={() => downloadResumeAsPdf()}
          title="Download as PDF"
          className="hidden md:flex"
        >
          <FileDownIcon size={16} />
        </Button>
      </div>

      <Overlay />

      <article className="absolute left-0 top-0 z-20 flex h-full w-full flex-col space-y-3 px-0 py-0 text-zinc-800 dark:text-zinc-50 md:top-3 md:px-6">
        {children}
      </article>
    </div>
  )
}
