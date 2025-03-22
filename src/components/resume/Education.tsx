import Image from "next/image"
import { StaticImageData } from "next/image"

import { LinkIcon } from "lucide-react"
import { logoFeup, logoAalto } from "@/images/logos/resume" // You'll need to add these logo images
import { cn } from "@/lib/utils"

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
  details: string[]
  institutionLogo?: React.ReactNode
  courses?: Course[]
}

function Bubble({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode
  variant?: "default" | "secondary"
  className?: string
}) {
  return (
    <span
      className={cn(
        "flex items-center gap-1 rounded-full border-0 bg-gradient-to-r px-1.5 py-[1px] leading-none",
        variant === "default" && "border-teal-600/10 bg-teal-600/10 dark:border-teal-500/20 dark:bg-teal-500/20",
        variant === "secondary" && "border-zinc-600/10 bg-zinc-600/10 dark:border-zinc-500/20 dark:bg-zinc-500/20",
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Education() {
  const educationData: Education[] = [
    {
      institution: "Faculty of Engineering of the University of Porto (FEUP)",
      location: "Porto, Portugal",
      degree: "Bachelor and Master in Informatics and Computing Engineering",
      period: "Sep 2018 - Jul 2023",
      institutionLink: "https://fe.up.pt",
      institutionLinkType: "external",
      institutionLogo: <Image src={logoFeup} alt="FEUP" width={20} height={20} className="mr-1" />,
      details: [
        "Completed both the bachelor and master degrees, finishing the masters' averaging 18/20",
        "Relevant coursework: Full Stack Development, Algorithms and Data Structures, Databases, Artificial Intelligence, P2P Timeline",
      ],
    },
    {
      institution: "Aalto University School of Science",
      location: "Espoo, Finland",
      degree: "Erasmus Student",
      period: "Aug 2022 - Dec 2022",
      institutionLink: "https://www.aalto.fi/en/school-of-science",
      institutionLinkType: "external",
      institutionLogo: <Image src={logoAalto} alt="Aalto University" width={20} height={20} className="mr-1" />,
      details: [
        "Studied computer science abroad at Aalto University, in Espoo, Finland as an exchange student part of the Erasmus program",
      ],
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
              <Bubble variant="default" className="text-2xs font-medium">
                {education.period}
              </Bubble>
              <Bubble variant="secondary" className="text-2xs font-medium">
                {education.location}
              </Bubble>
            </div>
          </div>

          {/* Subheader with institution and location */}
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
                {education.institutionLinkType === "external" && <LinkIcon className="size-4" />}
              </a>
            </div>
          </div>

          <div className="mt-1 flex items-start gap-4">
            {/* Details list */}
            <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300">
              {education.details.map((detail, detailIndex) => (
                <li key={detailIndex}>{detail}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
