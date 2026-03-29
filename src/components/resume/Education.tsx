import { ReactElement } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

import { ExternalResource } from "@/components/ExternalResource"
import { Bubble } from "@/components/resume/_components/Bubble"

import { logoAalto, pngFeup } from "@/images/logos/resume"
import { ExternalLinkIcon } from "lucide-react"

type LinkType = "external" | "github"

interface Course {
  name: string
  highlights?: string[]
}

interface Education {
  institution: string
  location: string
  degree: string
  period: string
  institutionLink: string
  institutionLinkType: LinkType
  details: ReactElement
  institutionLogo?: React.ReactNode
  courses?: Course[]
}

export function Education() {
  const educationData: Education[] = [
    {
      institution: "Faculty of Engineering of the University of Porto (FEUP)",
      location: "Porto, Portugal",
      degree: "Bachelor and Master in Informatics and Computing Engineering",
      period: "Sep/2018 - Jul/2023",
      institutionLink: "https://fe.up.pt",
      institutionLinkType: "external",
      institutionLogo: <Image src={pngFeup} alt="FEUP" width={20} height={20} className="mr-0" />,
      details: (
        <ul className="flex-1 p-0 text-sm text-zinc-600 dark:text-zinc-300 lg:list-disc lg:pl-4">
          <li>
            Member of NIAEFEUP, student branch of the Computer Engineering major. Active participant in events and
            projects like <ExternalResource href="https://tts.niaefeup.pt">Timetable Selector</ExternalResource>
          </li>
          <li>Completed both the bachelor and master degrees, finishing the masters' averaging 18/20</li>
          <li>
            Relevant coursework: Full Stack Development, Algorithms and Data Structures, Databases, Artificial
            Intelligence, P2P Timeline, Agile Methods
          </li>
        </ul>
      ),
    },
    {
      institution: "Aalto University School of Science",
      location: "Espoo, Finland",
      degree: "Erasmus Student",
      period: "Aug/2022 - Dec/2022",
      institutionLink: "https://www.aalto.fi/en/school-of-science",
      institutionLinkType: "external",
      institutionLogo: <Image src={logoAalto} alt="Aalto University" width={20} height={20} className="mr-0" />,
      details: (
        <ul className="flex-1 p-0 text-sm text-zinc-600 dark:text-zinc-300 lg:list-disc lg:pl-4">
          <li>
            Studied computer science abroad at Aalto University, in Espoo, Finland as an exchange student part of the
            Erasmus program
          </li>
        </ul>
      ),
    },
  ]

  return (
    <div id="education">
      <h2 className="mb-1 border-b pb-0.5 text-2xl font-bold leading-none">Education</h2>

      {educationData.map((education, index) => (
        <div key={index} className={cn("mb-3", index === educationData.length - 1 && "mb-0")}>
          {/* Header with institution and period */}
          <div className="flex flex-col items-start justify-between lg:flex-row lg:items-center">
            <h3 className="text-xl font-bold">{education.degree}</h3>
            <div className="flex items-center gap-1">
              <Bubble variant="muted" className="text-2xs font-medium">
                {education.location}
              </Bubble>
              <Bubble variant="outline" className="text-2xs font-medium">
                {education.period}
              </Bubble>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a
                href={education.institutionLink}
                className="inline-flex items-center gap-0.5 hover:opacity-70"
                target="_blank"
                rel="noopener noreferrer"
              >
                {education.institutionLogo}
                <span className="mr-0.5 font-semibold tracking-tight">{education.institution}</span>
                {education.institutionLinkType === "external" && <ExternalLinkIcon className="size-4" />}
              </a>
            </div>
          </div>

          <div className="mt-1 flex items-start gap-4">{education.details}</div>
        </div>
      ))}
    </div>
  )
}
