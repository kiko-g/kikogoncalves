import Image from "next/image"
import { StaticImageData } from "next/image"
import { cn } from "@/lib/utils"

import { media } from "@/images/portfolio"
import { GithubIcon } from "@/components/icons"
import { ExternalLinkIcon } from "lucide-react"
import { logoCriticalManufacturing, logoFeup, logoJumpseller, logoNiaefeup } from "@/images/logos/resume"

type LinkType = "external" | "github"

interface Link {
  text: string
  url: string
  type: LinkType
}

interface ResponsibilityItem {
  text: string
  bold?: boolean
  extraText?: string
  link?: Link
}

interface Experience {
  title: string
  company: string
  location: string
  period: string
  companyLink: string
  companyLinkType: LinkType
  responsibilities: (string | ResponsibilityItem)[]
  image?: StaticImageData
  companyLogo?: React.ReactNode
}

export function Experience() {
  const experienceData: Experience[] = [
    {
      title: "Full-stack Engineer",
      company: "Jumpseller",
      location: "Porto, Porto, Portugal",
      period: "Oct 2023 - Present",
      companyLink: "https://jumpseller.com",
      companyLogo: <Image src={logoJumpseller} alt="Jumpseller" width={15} height={20} />,
      companyLinkType: "external",
      image: media.jumpseller.screenshot1,
      responsibilities: [
        "Contributed and developed customizable e-commerce storefront themes.",
        "Developed and improved both a Visual Editor and Code Editor for Jumpseller customers to deeply personalize their stores.",
        {
          text: "Streamlined storefront theme implementation",
          bold: true,
          extraText:
            " by consolidating themes into a centralized base theme with extensive customizable JSON options, significantly improving maintainability and enabling faster customization.",
        },
      ],
    },
    {
      title: "Software Engineer Intern",
      company: "Critical Manufacturing",
      location: "Maia, Porto, Portugal",
      period: "Feb 2023 - Jul 2023",
      companyLink: "https://criticalmanufacturing.com",
      companyLogo: <Image src={logoCriticalManufacturing} alt="Critical Manufacturing" width={20} height={20} />,
      companyLinkType: "external",
      image: media.cmfUx.screenshot2,
      responsibilities: [
        {
          text: "Gathered analytics and usability metrics for CMF's Manufacturing Execution System (MES) to enhance UI/UX",
          link: {
            text: "(dissertation",
            url: "https://kikogoncalves.com/dissertation.pdf",
            type: "external",
          },
        },
        {
          text: "Developed a ",
          link: {
            text: "custom dashboard",
            url: "#",
            type: "external",
          },
          extraText:
            " with organized data and KPIs from CMF's MES, offering usability insights for its components, which democratizes the UX improvement process by attributing scores to components and workflows with varying heuristics.",
        },
      ],
    },
    {
      title: "Freelance Web Developer",
      company: "Guerner & Irmãos S.A.",
      location: "Gaia, Porto, Portugal",
      period: "Jan 2023 - Aug 2023",
      companyLink: "https://guerner.pt",
      companyLinkType: "external",
      image: media.guerner.screenshot1,
      responsibilities: [
        "Designed and developed a modern, responsive marketing website for Guerner & Irmãos from scratch using Gatsby.js and MDX, transforming their digital presence and enabling effective showcasing of their products.",
        "Collaborated closely with stakeholders to create an intuitive, SEO-optimized platform that significantly improved market reach and streamlined the sales process, resulting in enhanced customer engagement and business growth.",
      ],
    },
    {
      title: "Active Member",
      company: "NIAEFEUP - Informatics Engineering Student Branch @ FEUP",
      location: "Porto, Portugal",
      period: "Nov 2020 - Jun 2023",
      companyLink: "https://tts.niaefeup.pt",
      companyLogo: <Image src={logoNiaefeup} alt="NIAEFEUP" width={20} height={20} className="mr-1" />,
      companyLinkType: "external",
      image: media.tts.screenshot1,
      responsibilities: [
        {
          text: "Initiated and led development for the ",
          link: {
            text: "Time Table Scheduler for the University of Porto",
            url: "https://tts.niaefeup.pt",
            type: "external",
          },
          extraText:
            ": a web application helping students optimize class schedules, form work groups, and share timetables. Built with React, TypeScript, Tailwind, and SQL.",
        },
        {
          text: "Established the core architecture and UI framework",
          bold: true,
          extraText:
            " that continues to serve as the foundation for the platform, creating a maintainable codebase that facilitated smooth collaboration and ongoing development by the team.",
        },
      ],
    },
  ]

  const renderResponsibility = (item: string | ResponsibilityItem, index: number) => {
    if (typeof item === "string") return <li key={index}>{item}</li>

    return (
      <li key={index} className="leading-snug">
        {/* Main text */}
        {item.bold ? <span className="font-bold">{item.text}</span> : item.text}

        {/* Optional link */}
        {item.link && (
          <a
            href={item.link.url}
            className="inline-flex items-center gap-0.5 rounded-md px-1 text-zinc-900 opacity-100 transition hover:bg-teal-500/20 hover:text-teal-700 dark:text-white dark:hover:bg-teal-500/10 dark:hover:text-teal-500"
          >
            <span className="font-medium">{item.link.text}</span>
            {item.link.type === "external" && <ExternalLinkIcon className="size-4" />}
            {item.link.type === "github" && <GithubIcon className="size-4" />}
            {item.link.text.startsWith("(") && <span>)</span>}
          </a>
        )}

        {/* Extra text */}
        {item.extraText}
      </li>
    )
  }

  return (
    <div id="experience">
      <h2 className="mb-1 border-b pb-0.5 text-2xl font-bold leading-none">
        <span className="text-teal-700">Pro</span>fessional & Other Experiences
      </h2>

      {experienceData.map((experience, index) => (
        <div key={index} className={cn("mb-3", index === experienceData.length - 1 && "mb-2")}>
          {/* Header with job title and period */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{experience.title}</h3>
            <span className="text-sm font-semibold text-teal-700">{experience.period}</span>
          </div>

          {/* Subheader with company and location */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <a
                href={experience.companyLink}
                className="inline-flex items-center gap-0.5 hover:opacity-70"
                target="_blank"
                rel="noopener noreferrer"
              >
                {experience.companyLogo}
                <span className="font-semibold tracking-tight">{experience.company}</span>
                {experience.companyLinkType === "external" && <ExternalLinkIcon className="size-4" />}
                {experience.companyLinkType === "github" && <GithubIcon className="size-4" />}
              </a>
            </div>
            <span className="text-sm font-semibold opacity-70">{experience.location}</span>
          </div>

          <div className="mt-1 flex items-start gap-4">
            {/* Responsibilities list */}
            <ul className="list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300">
              {experience.responsibilities.map((resp, respIndex) => renderResponsibility(resp, respIndex))}
            </ul>

            {/* Image */}
            {experience.image && (
              <a
                href={experience.companyLink}
                target="_blank"
                className="inline-flex aspect-video w-[120px] flex-shrink-0 overflow-hidden rounded-md transition-opacity hover:opacity-80"
                rel="noopener noreferrer"
              >
                <Image
                  src={experience.image}
                  alt={experience.company}
                  width={1600}
                  height={900}
                  className="aspect-video object-cover"
                />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
