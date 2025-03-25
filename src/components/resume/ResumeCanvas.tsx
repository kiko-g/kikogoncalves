"use client"

import { useRef } from "react"
import { useReactToPrint } from "react-to-print"

import { Button } from "@/components/ui/button"
import { Skills } from "./Skills"
import { Headline } from "./Headline"
import { Projects } from "./Projects"
import { Education } from "./Education"
import { Experience } from "./Experience"

import { FileDown } from "lucide-react"

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
  const contentRef = useRef<HTMLDivElement>(null)

  const downloadResumeAsPdf = useReactToPrint({ contentRef })

  return (
    <div id="resume" ref={contentRef} className="group relative mx-auto aspect-[0.1] w-full lg:aspect-[1/1.4142]">
      <div className="absolute right-2 top-2 z-50 flex gap-2 opacity-100 transition-opacity group-hover:opacity-100 lg:right-4 lg:top-4 lg:opacity-0">
        <Button variant="outline" size="icon-sm" onClick={() => downloadResumeAsPdf()} title="Download as PDF">
          <FileDown size={16} />
        </Button>
      </div>

      <Overlay />

      <article className="absolute left-0 top-3 z-20 flex h-full w-full flex-col space-y-3 px-0 py-0 text-zinc-800 dark:text-zinc-50 md:px-6">
        {children}
      </article>
    </div>
  )
}

function Overlay() {
  return <div className="absolute inset-0 border border-transparent bg-[#fcfcfc] dark:bg-black/30"></div>
}
