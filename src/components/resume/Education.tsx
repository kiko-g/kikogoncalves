import Image from "next/image"
import { StaticImageData } from "next/image"

import { ExternalLinkIcon } from "lucide-react"
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
      <h2 className="mb-1 border-b pb-0.5 text-2xl font-bold leading-none">
        <span className="text-teal-700">Edu</span>cation
      </h2>

      {educationData.map((education, index) => (
        <div key={index} className={cn("mb-3", index === educationData.length - 1 && "mb-0")}>
          {/* Header with institution and period */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{education.degree}</h3>
            <span className="text-sm font-semibold text-teal-700">{education.period}</span>
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
                <span className="font-semibold tracking-tight">{education.institution}</span>
                {education.institutionLinkType === "external" && <ExternalLinkIcon className="size-4" />}
              </a>
            </div>
            <span className="text-sm font-semibold opacity-70">{education.location}</span>
          </div>

          <div className="mt-1 flex items-start gap-4">
            {/* Details list */}
            <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300">
              {education.details.map((detail, detailIndex) => (
                <li key={detailIndex}>
                  {detail.includes("18/20") ? (
                    <>
                      {detail.split("18/20")[0]}
                      <span className="font-bold">18/20</span>
                      {detail.split("18/20")[1]}
                    </>
                  ) : (
                    detail
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  )
}
