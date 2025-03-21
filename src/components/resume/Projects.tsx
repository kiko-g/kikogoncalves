import Image from "next/image"
import { StaticImageData } from "next/image"
import { cn } from "@/lib/utils"
import { techStackIcons } from "@/lib/utilities"

import { media } from "@/images/portfolio"
import { GithubIcon } from "@/components/icons"
import { ExternalLinkIcon, LinkIcon } from "lucide-react"
import {
  logoBaggerFlow,
  logoBaggerUi,
  logoCriticalManufacturing,
  logoFeup,
  logoJumpseller,
  logoNiaefeup,
} from "@/images/logos/resume"

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

interface Project {
  title: string
  logo?: React.ReactNode
  repo: string
  deployment: string
  stack: string[]
  image?: StaticImageData | null
  responsibilities: (string | ResponsibilityItem)[]
}

export function Projects() {
  const projectsData: Project[] = [
    {
      title: "Price Lens - See Through Prices",
      logo: <Image src={logoBaggerUi} alt="Bagger UI" width={18} height={18} className="mr-1" />,
      repo: "https://github.com/kiko-g/price-lens",
      deployment: "https://price-lens.vercel.app",
      stack: ["React.js", "Typescript", "Tailwind", "Next.js", "Supabase", "PostgreSQL"],
      image: media.priceLens.screenshot1,
      responsibilities: [
        {
          text: "Developed an app that tracks supermarket prices over time, bringing transparency to consumer goods inflation in Portugal and helping shoppers understand price changes beyond what appears on shelf labels.",
        },
        {
          text: "Created effective scheduled scrapers that automatically collect and update pricing data from multiple supermarkets, enabling price trend analysis and historical comparisons.",
        },
        {
          text: "Designed a user-friendly data visualization system that presents pricing information in an accessible way, helping consumers make more informed purchasing decisions.",
        },
      ],
    },
    {
      title: "Bagger UI - UI Components library for React + Typescript",
      logo: <Image src={logoBaggerUi} alt="Bagger UI" width={18} height={18} className="mr-1" />,
      repo: "https://github.com/kiko-g/bagger-ui",
      deployment: "https://bagger-ui.vercel.app",
      stack: ["React.js", "Typescript", "Tailwind", "Next.js", "Supabase", "PostgreSQL"],
      image: media.baggerui.screenshot1,
      responsibilities: [
        {
          text: "Beautiful collection of copy pasteable, reusable and customizable React Typescript components combined and stashed from different projects. Built for covering recurring UI scenarios. You own the code, take it and build the project of your dreams with a fitting design. Inspired by Shadcn, TailwindUI and HyperUI.",
        },
      ],
    },
    {
      title: "Bagger Flow - AI-powered workflow for Jumpseller",
      logo: <Image src={logoBaggerFlow} alt="Bagger Flow" width={18} height={18} className="mr-1 rounded-full" />,
      repo: "",
      deployment: "",
      stack: ["Node.js", "Typescript"],
      image: media.baggerFlow.screenshot1,
      responsibilities: [
        {
          text: "A Visual Studio Code Theme with a refined color palette combining elements of other popular themes and with a clean and minimal feel. Contains carefully customized and exhaustive support for JS/TS, JSX/TSX, HTML/CSS and Ruby. Available on the VSCode Marketplace.",
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
      <h2 className="mb-1 border-b pb-0.5 text-2xl font-bold leading-none text-zinc-900 dark:text-white">
        Projects and Indie Ventures
      </h2>

      {projectsData.map((project, index) => (
        <div key={index} className={cn("mb-3", index === projectsData.length - 1 && "mb-2")}>
          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <a
                href={project.deployment}
                className="inline-flex items-center gap-1 hover:opacity-70"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.logo}
                <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                <LinkIcon className="size-4" />
              </a>
              <a
                href={project.repo}
                className="inline-flex items-center gap-1 hover:opacity-70"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="size-4" />
              </a>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => {
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
                        className="size-[12px] rounded-sm grayscale dark:grayscale-0"
                      />
                    )}
                    <span className="-mt-[2px]">{tech}</span>
                  </span>
                )
              })}
            </div>
          </div>

          <div className="mt-1 flex items-start gap-4">
            {/* Responsibilities list */}
            <ul className="flex-1 list-disc pl-5 text-sm text-zinc-600 dark:text-zinc-300">
              {project.responsibilities.map((resp, respIndex) => renderResponsibility(resp, respIndex))}
            </ul>

            {/* Image */}
            {project.image && (
              <a
                href={project.deployment}
                target="_blank"
                className="inline-flex aspect-video w-[110px] flex-shrink-0 overflow-hidden rounded-md transition-opacity hover:opacity-80"
                rel="noopener noreferrer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
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
