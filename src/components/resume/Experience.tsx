import Image from "next/image"
import { StaticImageData } from "next/image"

import { media } from "@/images/portfolio"
import { GithubIcon } from "@/components/icons"
import { ExternalLinkIcon } from "lucide-react"

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
}

export function Experience() {
  const experienceData: Experience[] = [
    {
      title: "Full-stack Engineer",
      company: "Jumpseller",
      location: "Porto, Porto, Portugal",
      period: "Oct 2023 - Present",
      companyLink: "#",
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
    <div id="experience">
      <h2 className="mb-2 border-b pb-1 text-2xl font-bold leading-none">
        <span className="text-blue-600">Pro</span>fessional & Other Experiences
      </h2>

      {experienceData.map((experience, index) => (
        <div key={index} className="mb-4">
          {/* Header with job title and period */}
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold">{experience.title}</h3>
            <span className="text-sm font-semibold text-blue-500">{experience.period}</span>
          </div>

          {/* Subheader with company and location */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <span className="font-medium">{experience.company}</span>
              <a href={experience.companyLink} className="ml-1 inline-flex opacity-70">
                {experience.companyLinkType === "external" && <ExternalLinkIcon className="size-4" />}
                {experience.companyLinkType === "github" && <GithubIcon className="size-4" />}
              </a>
            </div>
            <span className="text-sm font-semibold opacity-70">{experience.location}</span>
          </div>

          <div className="mt-1 flex items-start gap-4">
            {/* Responsibilities list */}
            <ul className="list-disc pl-5 text-sm">
              {experience.responsibilities.map((resp, respIndex) => renderResponsibility(resp, respIndex))}
            </ul>

            {/* Image */}
            {experience.image && (
              <a
                href={experience.companyLink}
                target="_blank"
                className="inline-flex aspect-video w-[150px] flex-shrink-0 overflow-hidden rounded-md transition-opacity hover:opacity-80"
                rel="noopener noreferrer"
              >
                <Image
                  src={experience.image}
                  alt={experience.company}
                  width={1500}
                  height={843}
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
