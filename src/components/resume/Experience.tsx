import Image from "next/image"
import { StaticImageData } from "next/image"
import { cn } from "@/lib/utils"
import { techStackIcons } from "@/lib/utilities"

import { media } from "@/images/portfolio"
import { GithubIcon } from "@/components/icons"
import { ExternalLinkIcon, LinkIcon } from "lucide-react"
import { logoCriticalManufacturing, logoJumpseller, logoNiaefeup } from "@/images/logos/resume"

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
  location: string
  period: string
  companyLink: string
  companyLinkType: LinkType
  responsibilities: (string | ResponsibilityItem)[]
  stack: string[]
  image?: StaticImageData
  companyLogo?: React.ReactNode
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

export function Experience() {
  const experienceData: Experience[] = [
    {
      title: "Full-stack Engineer at Jumpseller",
      location: "Porto, Porto, Portugal",
      period: "Oct 2023 - Present",
      companyLink: "https://jumpseller.com/themes",
      companyLogo: <Image src={logoJumpseller} alt="Jumpseller" width={15} height={20} />,
      companyLinkType: "external",
      image: media.jumpseller.screenshot1,
      stack: ["React.js", "Javascript", "Ruby", "Ruby on Rails", "Redux", "SQL", "Liquid", "AWS S3"],
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
      title: "Software Engineer Intern at Critical Manufacturing",
      location: "Maia, Porto, Portugal",
      period: "Feb 2023 - Jul 2023",
      companyLink: "https://usability-dashboard-mes.vercel.app",
      companyLogo: <Image src={logoCriticalManufacturing} alt="Critical Manufacturing" width={20} height={20} />,
      companyLinkType: "external",
      image: media.cmfUx.screenshot2,
      stack: ["React.js", "Next.js", "Typescript", "Tailwind", "Angular", "Docker", "SQL"],
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
      location: "Gaia, Porto, Portugal",
      period: "Jan 2023 - Aug 2023",
      companyLink: "https://guerner.pt",
      companyLinkType: "external",
      image: media.guerner.screenshot1,
      stack: ["React.js", "Typescript", "Tailwind", "Gatsby.js", "MDX", "GraphQL"],
      responsibilities: [
        "Designed and developed a modern, responsive marketing website for Guerner & Irmãos from scratch using Gatsby.js and MDX, transforming their digital presence and enabling effective showcasing of their products.",
        "Collaborated closely with stakeholders to create an intuitive, SEO-optimized platform that significantly improved market reach and streamlined the sales process, resulting in enhanced customer engagement and business growth.",
      ],
    },
    {
      title: "Active Member at Informatics Engineering Student Branch (NIAEFEUP, FEUP)",
      location: "Porto, Portugal",
      period: "Nov 2020 - Jun 2023",
      companyLink: "https://tts.niaefeup.pt",
      companyLogo: <Image src={logoNiaefeup} alt="NIAEFEUP" width={20} height={20} className="mr-1" />,
      companyLinkType: "external",
      image: media.tts.screenshot1,
      stack: ["React.js", "Typescript", "Tailwind", "Docker", "SQL", "Python"],
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
      <h2 className="mb-1 border-b pb-0.5 text-2xl font-bold leading-none">Professional & Other Experiences</h2>

      {experienceData.map((experience, index) => (
        <div key={index} className={cn("mb-3", index === experienceData.length - 1 && "mb-2")}>
          <div className="flex flex-col items-start justify-between gap-2 lg:flex-row lg:items-center">
            <a
              className="flex items-center gap-1"
              target="_blank"
              rel="noopener noreferrer"
              href={experience.companyLink}
            >
              {experience.companyLogo}
              <h3 className="text-lg font-semibold tracking-tight">{experience.title}</h3>
              <span className="inline-flex items-center gap-1 hover:opacity-70">
                {experience.companyLinkType === "external" && <LinkIcon className="size-4" />}
                {experience.companyLinkType === "github" && <GithubIcon className="size-4" />}
              </span>
            </a>

            <div className="flex items-end justify-center gap-1">
              <Bubble variant="default" className="text-2xs font-medium">
                {experience.period}
              </Bubble>
              <Bubble variant="secondary" className="text-2xs font-medium">
                {experience.location}
              </Bubble>
            </div>
          </div>

          <div className="mt-1 flex flex-col items-start gap-4 lg:flex-row lg:items-center">
            <div className="flex flex-col gap-1">
              <div className="flex flex-wrap gap-1.5">
                {experience.stack.map((tech) => {
                  const techIcon = techStackIcons[tech.toLowerCase()]
                  return (
                    <span
                      key={tech}
                      className={cn(
                        "text-2xs flex items-center gap-1 rounded-sm bg-zinc-100 px-1 py-[4px] font-normal lowercase leading-tight tracking-tight text-zinc-600 dark:bg-zinc-700/40 dark:text-zinc-300",
                      )}
                    >
                      {techIcon && (
                        <Image
                          src={techIcon}
                          alt={tech}
                          width={12}
                          height={12}
                          className="size-[12px] rounded-sm grayscale-[0.8] dark:grayscale-0"
                        />
                      )}
                      <span className="-mt-[2px]">{tech}</span>
                    </span>
                  )
                })}
              </div>

              <ul className="flex-1 p-0 text-sm text-zinc-600 dark:text-zinc-300 lg:list-disc lg:pl-5">
                {experience.responsibilities.map((resp, respIndex) => renderResponsibility(resp, respIndex))}
              </ul>
            </div>

            {experience.image && (
              <a
                href={experience.companyLink}
                target="_blank"
                className="mb-4 inline-flex aspect-video w-[200px] flex-shrink-0 overflow-hidden rounded-md transition-opacity hover:opacity-80 lg:mb-0 lg:w-[115px]"
                rel="noopener noreferrer"
              >
                <Image
                  src={experience.image}
                  alt={experience.title}
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
