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
  image?: StaticImageData | null
  responsibilities: ReactElement
}

export function Projects() {
  const projectsData: Project[] = [
    {
      title: "Price Lens - See Through Prices",
      logo: <Image src={logoPriceLens} alt="Price Lens" width={18} height={18} className="mr-0" />,
      repo: "https://github.com/kiko-g/price-lens",
      deployment: "https://price-lens.vercel.app",
      stack: ["React.js", "Typescript", "Tailwind", "Next.js", "Supabase", "PostgreSQL"],
      image: media.priceLens.screenshot1,
      responsibilities: (
        <ul className="flex-1 p-0 text-sm text-zinc-600 dark:text-zinc-300 lg:list-disc lg:pl-5">
          <li>
            Developed an app that tracks supermarket prices over time, bringing{" "}
            <span className="font-semibold">transparency to consumer goods inflation</span> in Portugal and helping
            shoppers understand price changes beyond what appears on shelf labels.
          </li>
          <li>
            Created effective <span className="font-semibold">scheduled scrapers</span> that automatically collect and
            update pricing data from multiple supermarkets, enabling price trend analysis and historical comparisons.
          </li>
          <li>
            User-friendly data visualization system to present pricing data in an accessible way.{" "}
            <ExternalResource href="https://price-lens.vercel.app">Free and premium plans available</ExternalResource>
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
      image: media.baggerui.screenshot1,
      responsibilities: (
        <ul className="flex-1 p-0 text-sm text-zinc-600 dark:text-zinc-300 lg:list-disc lg:pl-5">
          <li>
            A collection of copy pasteable and reusable React (Typescript, .tsx) components and snippets. Created to
            address common UI patterns with the goal of continously expanding the library and minimizing the need to
            recode similar things.
          </li>
          <li>
            The code is yours, take it, adapt it and build the project of your dreams with a fitting design. Inspired by
            Shadcn, TailwindUI and HyperUI and Flowbite.{" "}
            <ExternalResource href="https://bagger-ui.vercel.app">Available on Vercel</ExternalResource>
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
      responsibilities: (
        <ul className="flex-1 p-0 text-sm text-zinc-600 dark:text-zinc-300 lg:list-disc lg:pl-5">
          <li>
            Initiated and led development for the web app that allows students to optimize class schedules, form work
            groups, share timetables and land the best schedule depending on their interests, often crucial to the
            semester's success.
          </li>
          <li>
            Established the core architecture and UI framework that continues to serve as the foundation for the
            platform, which now has more features, including a schedule exchanger using the university's authentication
            API. <ExternalResource href="https://tts.niaefeup.pt">Available online here</ExternalResource>
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
      responsibilities: (
        <ul className="flex-1 p-0 text-sm text-zinc-600 dark:text-zinc-300 lg:list-disc lg:pl-5">
          <li>
            A Visual Studio Code Theme with a refined color palette combining elements of other popular themes and with
            a clean and minimal feel. Contains carefully customized and exhaustive support for JS/TS, JSX/TSX, HTML/CSS
            and Ruby.{" "}
          </li>
          <li>
            Give it a try.{" "}
            <ExternalResource href="https://marketplace.visualstudio.com/items?itemName=kikogoncalves.bagger-flow">
              Available on the VSCode Marketplace
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
                        className="size-[12px] rounded-sm grayscale-[0.5] dark:grayscale-0"
                      />
                    )}
                    <span className="-mt-[2px]">{tech}</span>
                  </span>
                )
              })}
            </div>
          </div>

          <div className="mt-1 flex flex-col items-start gap-4 lg:flex-row lg:items-center">
            {project.responsibilities}

            {/* Image */}
            {project.image && (
              <a
                href={project.deployment}
                target="_blank"
                className="mb-2 inline-flex aspect-video w-[200px] flex-shrink-0 overflow-hidden transition-opacity hover:opacity-80 lg:mb-0 lg:w-[115px]"
                rel="noopener noreferrer"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={1600}
                  height={900}
                  className="aspect-video rounded-md border object-cover"
                />
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
}
