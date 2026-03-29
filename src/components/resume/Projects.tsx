import { ReactElement } from "react"
import Image from "next/image"
import { StaticImageData } from "next/image"
import { cn } from "@/lib/utils"
import { techStackIcons } from "@/lib/utilities"

import { ExternalResource } from "@/components/ExternalResource"

import { media } from "@/images/portfolio"
import { GithubIcon } from "@/components/icons"
import { ExternalLinkIcon } from "lucide-react"
import { logoBaggerFlow, logoBaggerUi, logoPriceLens, pngNiaefeup } from "@/images/logos/resume"

type LinkType = "external" | "github"

interface Link {
  text: string
  url: string
  type: LinkType
}

interface Project {
  title: string
  logo?: React.ReactNode
  repo: string
  deployment: string
  stack: string[]
  image?: StaticImageData | StaticImageData[] | null
  imageCompact?: boolean
  responsibilities: ReactElement
}

export function Projects() {
  const projectsData: Project[] = [
    {
      title: "Price Lens",
      logo: <Image src={logoPriceLens} alt="Price Lens" width={18} height={18} className="mr-0" />,
      repo: "https://github.com/kiko-g/price-lens",
      deployment: "https://price-lens.vercel.app",
      stack: ["React.js", "Typescript", "Tailwind", "Next.js", "Supabase", "PostgreSQL", "Redis", "QStash"],
      image: [media.priceLens.screenshot1, media.priceLens.screenshot2],
      responsibilities: (
        <ul className="flex-1 p-0 text-sm text-zinc-600 dark:text-zinc-300 lg:list-disc lg:pl-4">
          <li>
            <span className="font-semibold">Founder / Sole Engineer</span>: Built a price intelligence platform for
            portuguese supermarkets covering 126k+ products across Continente, Auchan, and Pingo Doce, processing ~29k
            daily price checks. <span className="font-semibold">Save Money. Buy at the right time.</span>
          </li>
          <li>
            Engineered cross-store product and category matching algorithms (barcode + canonical mapping) to normalise
            and link the same product across retailer catalogs with different SKU systems and naming conventions.
          </li>
          <li>
            Focused on increasing consumer purchasing power awareness through price tracking and product
            recommendations.
          </li>
          <li>
            Key features:{" "}
            <span className="font-semibold">
              barcode scanner, price comparison across stores, price history charts, daily deal in-store detection,
              money saving tally, price drop alerts
            </span>{" "}
            (~2k price changes/day). Available at{" "}
            <ExternalResource underline href="https://price-lens.vercel.app">
              price-lens.vercel.app
            </ExternalResource>
          </li>
        </ul>
      ),
    },
    {
      title: "Bagger UI - Components and snippets library for React",
      logo: <Image src={logoBaggerUi} alt="Bagger UI" width={18} height={18} className="mr-0" />,
      repo: "https://github.com/kiko-g/bagger-ui",
      deployment: "https://bagger-ui.vercel.app",
      stack: ["React.js", "Typescript", "Tailwind", "Next.js", "Supabase", "PostgreSQL"],
      image: media.baggerui.screenshot4,
      imageCompact: true,
      responsibilities: (
        <ul className="flex-1 p-0 text-sm text-zinc-600 dark:text-zinc-300 lg:list-disc lg:pl-4">
          <li>
            Built a React component library (TypeScript, Tailwind) evolving from custom components into a curated
            repository of real-world UI patterns and snippets, extending shadcn/ui and TailwindUI.
          </li>
          <li>
            Captured recurring UI scenarios into reusable, composable components to accelerate development and reduce
            duplication.
          </li>
        </ul>
      ),
    },
    {
      title: "Time Table Selector for the University of Porto",
      logo: <Image src={pngNiaefeup} alt="NIAEFEUP" width={20} height={20} className="mr-0" />,
      repo: "https://github.com/NIAEFEUP/tts-fe",
      deployment: "https://tts.niaefeup.pt",
      stack: ["React.js", "Typescript", "Tailwind", "Docker", "SQL", "Python"],
      image: media.tts.screenshot1,
      imageCompact: true,
      responsibilities: (
        <ul className="flex-1 p-0 text-sm text-zinc-600 dark:text-zinc-300 lg:list-disc lg:pl-4">
          <li>
            Lead Developer: Built a timetable planning app used by university students; designed core scheduling logic
            and interactive time-grid UI (conflict detection, multi-schedule support).
          </li>
          <li>
            Established the architecture and UI framework that continues to power the platform. Available at{" "}
            <ExternalResource underline href="https://tts.niaefeup.pt">
              tts.niaefeup.pt
            </ExternalResource>
          </li>
        </ul>
      ),
    },
    {
      title: "Bagger Flow - VS Code Theme ",
      logo: <Image src={logoBaggerFlow} alt="Bagger Flow" width={18} height={18} className="mr-0 rounded-full" />,
      repo: "https://github.com/kiko-g/bagger-flow-vscode",
      deployment: "https://marketplace.visualstudio.com/items?itemName=kikogoncalves.bagger-flow",
      stack: ["Node.js", "JSON"],
      image: media.baggerFlow.screenshot1,
      imageCompact: true,
      responsibilities: (
        <ul className="flex-1 p-0 text-sm text-zinc-600 dark:text-zinc-300 lg:list-disc lg:pl-4">
          <li>
            Designed and published a VS Code theme with custom syntax highlighting for JS/TS, JSX/TSX, HTML/CSS,
            improving code readability and developer experience.{" "}
            <ExternalResource href="https://marketplace.visualstudio.com/items?itemName=kikogoncalves.bagger-flow">
              Available on the VS Code Marketplace
            </ExternalResource>
          </li>
        </ul>
      ),
    },
  ]

  return (
    <div id="experience">
      <h2 className="mb-1 border-b pb-0.5 text-2xl font-bold leading-none">Projects & Indie Ventures</h2>

      {projectsData.map((project, index) => (
        <div key={index} className={cn("mb-3", index === projectsData.length - 1 && "mb-0")}>
          <div className="flex flex-col items-start justify-between gap-2 lg:flex-row lg:items-center">
            <div className="flex items-center gap-2">
              <a
                href={project.deployment}
                className="inline-flex items-center gap-1 hover:opacity-70"
                target="_blank"
                rel="noopener noreferrer"
              >
                {project.logo}
                <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                <ExternalLinkIcon className="size-4 flex-shrink-0" />
              </a>
              <a
                href={project.repo}
                className="inline-flex items-center gap-1 hover:opacity-70"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubIcon className="size-4 flex-shrink-0" />
              </a>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => {
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
                        className="size-[12px] rounded-sm grayscale-[0.2] dark:grayscale-0"
                      />
                    )}
                    <span className="-mt-[2px]">{tech}</span>
                  </span>
                )
              })}
            </div>
          </div>

          <div className="mt-[5px] flex flex-col items-start gap-4 lg:flex-row lg:items-start">
            {project.responsibilities}

            {/* Image */}
            {project.image && !Array.isArray(project.image) && (
              <a
                href={project.deployment}
                target="_blank"
                className={cn(
                  "mb-2 inline-flex aspect-video w-auto flex-shrink-0 overflow-hidden transition-opacity hover:opacity-80 lg:mb-0 lg:w-[125px]",
                  project.imageCompact && "md:h-[40px]",
                )}
                rel="noopener noreferrer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1600}
                  height={900}
                  className={cn(
                    "aspect-video rounded-md border-0",
                    project.imageCompact ? "object-cover object-top" : "object-cover",
                  )}
                />
              </a>
            )}

            {project.image && Array.isArray(project.image) && (
              <div className="grid grid-cols-2 gap-2 md:flex md:flex-col md:gap-0.5">
                {project.image.map((image) => (
                  <a
                    key={image.src}
                    href={project.deployment}
                    target="_blank"
                    className="inline-flex aspect-video w-full flex-shrink-0 overflow-hidden transition-opacity hover:opacity-80 lg:mb-0 lg:w-[125px]"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={image}
                      alt={project.title}
                      width={1600}
                      height={900}
                      className="aspect-video rounded-md border-0 object-cover"
                    />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
