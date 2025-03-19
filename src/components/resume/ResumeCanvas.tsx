"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { CodeIcon, DownloadIcon, ExternalLinkIcon, MailIcon, PhoneIcon } from "lucide-react"
import { JumpsellerLogoLink } from "../about/JumpsellerLogoLink"
import { XTwitterIcon, GithubIcon } from "../icons"
import { logoLinkedin } from "@/images/logos/resume"

export function ResumeCanvas() {
  return (
    <Wrapper>
      <Header />
      <Experience />
    </Wrapper>
  )
}

function Wrapper({ children }: { children: React.ReactNode }) {
  const downloadResume = () => {
    const resumeElement = document.getElementById("resume") as HTMLCanvasElement
    if (resumeElement) {
      const resumeUrl = resumeElement.toDataURL("image/png")
      const a = document.createElement("a")
      a.href = resumeUrl
      a.download = "Francisco Gonçalves - Resume.png"
      a.click()
    }
  }

  return (
    <div id="resume" className="group relative mx-auto w-full" style={{ aspectRatio: "1/1.4142" }}>
      <Button
        variant="default"
        size="icon-sm"
        onClick={downloadResume}
        className="absolute right-4 top-4 z-50 opacity-20 transition-opacity group-hover:opacity-100"
      >
        <DownloadIcon />
      </Button>

      <Overlay />

      <article className="absolute left-0 top-0 z-20 flex h-full w-full flex-col gap-4 p-4 text-zinc-800 dark:text-zinc-50">
        {children}
      </article>
    </div>
  )
}

function Overlay() {
  return <div className="absolute inset-0 rounded-xl border bg-white dark:bg-black/30"></div>
}

function Header() {
  return (
    <header>
      <h1 className="text-4xl">
        <span>Francisco</span>
        <span className="ml-1.5 font-bold">Gonçalves</span>
      </h1>

      <div className="flex flex-col gap-0 divide-x-0 divide-zinc-300 text-sm dark:divide-zinc-500 lg:flex-row lg:gap-3 lg:divide-x lg:text-base lg:[&>*:not(:first-child)]:pl-3">
        <span className="flex items-center gap-1 font-bold">
          Fullstack Engineer at Jumpseller <JumpsellerLogoLink width={20} height={20} />
        </span>
        <span className="font-normal">MSc in Informatics and Computing Engineering</span>
        <span className="font-normal opacity-70">Porto, Portugal</span>
      </div>

      <div className="mt-2 flex w-full flex-col gap-0 divide-x-0 divide-zinc-300 border-t pt-2 text-sm opacity-80 dark:divide-zinc-500 lg:mt-1 lg:flex-row lg:gap-3 lg:divide-x lg:border-t-0 lg:pt-0 [&>*:not(:first-child)]:pl-0 lg:[&>*:not(:first-child)]:pl-3">
        <Link href="tel:+351918271105" className="flex items-center gap-1 hover:underline">
          <PhoneIcon className="size-4" />
          <span>+351 91 827 11 05</span>
        </Link>

        <Link href="mailto:kikojpgoncalves@gmail.com" className="flex items-center gap-1 hover:underline">
          <MailIcon className="size-4" />
          <span>kikojpgoncalves@gmail.com</span>
        </Link>

        {/* <Link href="https://x.com/kikogoncalves_" className="flex items-center gap-1 hover:underline">
            <XTwitterIcon className="size-4" />
            <span>kikogoncalves_</span>
          </Link> */}

        <Link href="https://kikogoncalves.com/projects" className="flex items-center gap-1 hover:underline">
          <CodeIcon className="size-4" />
          <span>Projects</span>
        </Link>

        <Link href="https://www.linkedin.com/in/kikogoncalves/" className="flex items-center gap-1 hover:underline">
          <Image src={logoLinkedin} alt="Linkedin" width={16} height={16} />
          <span>kikogoncalves_</span>
        </Link>

        <Link href="https://github.com/kiko-g" className="flex items-center gap-1 hover:underline">
          <GithubIcon className="size-4" />
          <span>kiko-g</span>
        </Link>
      </div>
    </header>
  )
}

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
}

function Experience() {
  const experienceData: Experience[] = [
    {
      title: "Full-stack Engineer",
      company: "Jumpseller",
      location: "Porto, Porto, Portugal",
      period: "Oct 2023 - Present",
      companyLink: "#",
      companyLinkType: "external",
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
      companyLink: "#",
      companyLinkType: "external",
      responsibilities: [
        {
          text: "Gathered analytics and usability metrics for CMF's Manufacturing Execution System (MES) to enhance UI/UX",
          link: {
            text: "(dissertation",
            url: "#",
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
      companyLink: "#",
      companyLinkType: "external",
      responsibilities: [
        "Created a marketing and display website for Guerner & Irmãos, offering high-performance textiles, technical fabrics, and quality building materials with Gatsby.js and MDX.",
      ],
    },
    {
      title: "Active Member",
      company: "NIAEFEUP - Informatics Engineering Student Branch @ FEUP",
      location: "Porto, Portugal",
      period: "Nov 2020 - Jun 2023",
      companyLink: "#",
      companyLinkType: "github",
      responsibilities: [
        {
          text: "Led development for the ",
          link: {
            text: "Time Table Scheduler for the University of Porto",
            url: "#",
            type: "external",
          },
          extraText:
            ": a web application for students find the best class time slots, work groups and share timetables for every semester. Built with React, Typescript, Tailwind, SQL",
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
          <a href={item.link.url} className="mx-1 inline-flex items-center">
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
    <div>
      <h2 className="mb-2 border-b pb-1 text-2xl font-bold">
        <span className="text-sky-600">Pro</span>fessional & Other Experiences
      </h2>

      {experienceData.map((experience, index) => (
        <div key={index} className="mb-4">
          {/* Header with job title and period */}
          <div className="flex items-baseline justify-between">
            <h3 className="text-xl font-bold leading-none">{experience.title}</h3>
            <span className="font-medium text-sky-600">{experience.period}</span>
          </div>

          {/* Subheader with company and location */}
          <div className="flex items-baseline justify-between">
            <div className="flex items-center">
              <span className="font-medium">{experience.company}</span>
              <a href={experience.companyLink} className="ml-1 inline-flex opacity-70">
                {experience.companyLinkType === "external" && <ExternalLinkIcon className="size-4" />}
                {experience.companyLinkType === "github" && <GithubIcon className="size-4" />}
              </a>
            </div>
            <span className="text-sm opacity-70">{experience.location}</span>
          </div>

          {/* Responsibilities list */}
          <ul className="list-disc pl-5 text-sm">
            {experience.responsibilities.map((resp, respIndex) => renderResponsibility(resp, respIndex))}
          </ul>
        </div>
      ))}
    </div>
  )
}
