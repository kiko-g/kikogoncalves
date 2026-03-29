import { ReactElement } from "react"
import Image from "next/image"
import { StaticImageData } from "next/image"
import { cn } from "@/lib/utils"
import { techStackIcons } from "@/lib/utilities"

import { ExternalResource } from "@/components/ExternalResource"
import { Bubble } from "@/components/resume/_components/Bubble"

import { media } from "@/images/portfolio"
import { GithubIcon } from "@/components/icons"
import { ExternalLinkIcon } from "lucide-react"
import { logoFeedzai, pngCriticalManufacturing, pngJumpseller, pngNiaefeup } from "@/images/logos/resume"

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
  responsibilities: ReactElement
  stack: string[]
  image?: StaticImageData | null
  companyLogo?: React.ReactNode
}

export function Experience() {
  const experienceData: Experience[] = [
    {
      title: "Frontend Engineer @ Feedzai",
      location: "Porto/Lisbon/Coimbra, Portugal",
      period: "Sep/2025 - Present",
      companyLink: "https://feedzai.com",
      companyLogo: <Image src={logoFeedzai} alt="Feedzai" width={18} height={18} className="rounded" />,
      companyLinkType: "external",
      image: media.feedzai.screenshot1,
      stack: ["React.js", "Javascript", "Typescript", "Tailwind", "Tanstack", "Vitest", "Vite", "Docker", "SQL"],
      responsibilities: (
        <ul className="flex-1 p-0 text-sm text-zinc-600 dark:text-zinc-300 lg:list-disc lg:pl-4">
          <li>
            Developed the <span className="font-semibold">Screening Service UI for RiskOps Studio</span>: a central hub
            used by financial analysts to configure and orchestrate transaction screening workflows within the{" "}
            <span className="font-semibold">Watchlist Transaction Screening</span> solution; enabled transaction
            screening configurations management, sanction list operations, and exception handling at bank-grade scale.
          </li>
          <li>
            Contributed to complex platforms such as <span className="font-semibold">Case Manager</span> supporting
            Feedzai's <span className="font-semibold">Anti Money Laundering (AML)</span> solutions by building features
            for managing high-volume transaction screening alerts and their relationships for large financial
            institutions.
          </li>
        </ul>
      ),
    },
    {
      title: "Full-stack Engineer @ Jumpseller",
      location: "Porto, Porto, Portugal",
      period: "Oct/2023 - Sep/2025",
      companyLink: "https://jumpseller.com/themes",
      companyLogo: <Image src={pngJumpseller} alt="Jumpseller" width={15} height={20} />,
      companyLinkType: "external",
      image: media.jumpseller.screenshot1,
      stack: ["React.js", "Javascript", "Ruby", "Ruby on Rails", "Redux", "SQL", "Liquid", "AWS S3", "Cypress"],
      responsibilities: (
        <ul className="flex-1 p-0 text-sm text-zinc-600 dark:text-zinc-300 lg:list-disc lg:pl-4">
          <li>
            Expanded customization for e-commerce storefront themes. Improved Visual and Code Editors for deep store
            personalization.
          </li>
          <li>
            Developed an <strong>AI-powered theme engine</strong> to generate tailored storefront theme configurations
            from user prompts.
          </li>
          <li>
            <span className="font-bold">Streamlined storefront theme implementation</span> by consolidating themes into
            a centralized base theme with extensive customizable JSON options, significantly improving maintainability
            and enabling faster edition and delivery of themes.
          </li>
        </ul>
      ),
    },
    {
      title: "Software Engineer Intern @ Critical Manufacturing",
      location: "Maia, Porto, Portugal",
      period: "Feb/2023 - Jul/2023",
      companyLink: "https://usability-dashboard-mes.vercel.app",
      companyLogo: <Image src={pngCriticalManufacturing} alt="Critical Manufacturing" width={20} height={20} />,
      companyLinkType: "external",
      image: null,
      stack: ["React.js", "Next.js", "Typescript", "Tailwind", "Angular", "Docker", "SQL"],
      responsibilities: (
        <ul className="flex-1 p-0 text-sm text-zinc-600 dark:text-zinc-300 lg:list-disc lg:pl-4">
          <li>
            Gathered analytics and usability metrics for CMF's Manufacturing Execution System (MES) to enhance UI/UX{" "}
            <ExternalResource href="https://kikogoncalves.com/dissertation.pdf">(dissertation)</ExternalResource>
          </li>
          <li>
            Developed a custom dashboard with organized data and KPIs from CMF MES, offering usability insights for its
            components, which democratizes the UX improvement process by attributing scores to components and workflows
            with varying heuristics.
          </li>
        </ul>
      ),
    },
    {
      title: "Freelance Web Developer",
      location: "Gaia, Porto, Portugal",
      period: "Jan/2023 - Jun/2023",
      companyLink: "https://guerner.pt",
      companyLinkType: "external",
      image: null,
      stack: ["React.js", "Typescript", "Tailwind", "Gatsby.js", "MDX", "GraphQL"],
      responsibilities: (
        <ul className="flex-1 p-0 text-sm text-zinc-600 dark:text-zinc-300 lg:list-disc lg:pl-4">
          <li>
            Delivered a marketing website for a tech textile manufacturer, handling design, development, and deployment.
          </li>
          <li>
            Worked directly with stakeholders to define requirements and build a performant, SEO-optimized platform;{" "}
            <ExternalResource underline href="https://guerner.pt">
              guerner.pt
            </ExternalResource>
          </li>
        </ul>
      ),
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
            className="inline-flex items-center gap-0.5 rounded-md px-1 text-zinc-900 opacity-100 transition hover:bg-blue-500/20 hover:text-blue-700 dark:text-white dark:hover:bg-blue-500/10 dark:hover:text-blue-500"
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
      <h2 className="mb-1 border-b pb-0.5 text-2xl font-bold leading-none">Professional Experience</h2>

      {experienceData.map((experience, index) => {
        const isCurrentRole = experience.period.includes("Present")
        return (
          <div key={index} className={cn("mb-3", index === experienceData.length - 1 && "mb-0")}>
            <div className="flex flex-col items-start justify-between gap-2 lg:flex-row lg:items-center">
              <a
                className="inline-flex items-center gap-1 hover:opacity-70"
                target="_blank"
                rel="noopener noreferrer"
                href={experience.companyLink}
              >
                {experience.companyLogo}
                <h3 className="text-lg font-semibold tracking-tight">{experience.title}</h3>
                <span className="inline-flex items-center gap-1">
                  {experience.companyLinkType === "external" && <ExternalLinkIcon className="size-4" />}
                  {experience.companyLinkType === "github" && <GithubIcon className="size-4" />}
                </span>
              </a>

              <div className="flex flex-wrap items-center justify-start gap-1 md:items-end md:justify-center">
                {experience.stack.map((tech) => {
                  const techIcon = techStackIcons[tech.toLowerCase()]
                  return (
                    <span
                      key={tech}
                      className={cn(
                        "flex items-center gap-[3px] rounded-sm bg-zinc-100 px-1 py-[4px] text-2xs font-normal lowercase leading-tight tracking-tight text-zinc-600 dark:bg-zinc-700/40 dark:text-zinc-300",
                      )}
                    >
                      {techIcon && (
                        <Image
                          src={techIcon}
                          alt={tech}
                          width={12}
                          height={12}
                          className="size-[12px] rounded-sm grayscale-[0.5] dark:grayscale-0"
                        />
                      )}
                      <span className="-mt-[1px]">{tech}</span>
                    </span>
                  )
                })}
              </div>
            </div>

            <div className="mt-1 flex flex-col items-start justify-between gap-2 lg:flex-row lg:items-start lg:gap-4">
              <div className="flex flex-col gap-1">{experience.responsibilities}</div>

              <div className="order-first flex flex-col items-start justify-start gap-1 md:order-last md:items-end md:justify-end">
                <Bubble
                  variant={isCurrentRole ? "active" : "outline"}
                  className="w-min whitespace-nowrap text-2xs font-medium tracking-tighter lg:w-min"
                >
                  {isCurrentRole ? experience.period.split("-")[0] + " - Present" : experience.period}
                </Bubble>

                {experience.image && (
                  <a
                    href={experience.companyLink}
                    target="_blank"
                    className="mb-4 inline-flex aspect-video w-auto flex-shrink-0 overflow-hidden rounded-md transition-opacity hover:opacity-80 lg:mb-0 lg:w-[125px]"
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
          </div>
        )
      })}
    </div>
  )
}
