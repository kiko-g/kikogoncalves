import Image from "next/image"
import { skills } from "@/lib/data"
import { techStackIcons } from "@/lib/utilities"
import { ExternalLinkIcon } from "lucide-react"

export function Skills() {
  const languages = [
    { name: "Portuguese", level: "Native" },
    { name: "English", level: "Proficient | CAE C1 Level, 2016" },
    { name: "Spanish", level: "Intermediate understanding" },
    { name: "French", level: "Basic understanding" },
  ]

  return (
    <div id="skills">
      <h2 className="mb-1 mt-2 border-b pb-0.5 text-2xl font-bold leading-none">Skills</h2>
      <div className="flex flex-col gap-3 lg:gap-0.5">
        <div className="flex flex-col items-start gap-1 lg:flex-row lg:items-center lg:gap-2">
          <a className="flex w-[100px] flex-shrink-0 items-center gap-1 hover:opacity-70" href="/about#skills">
            <h2 className="text-base font-semibold">Technical</h2>
            <ExternalLinkIcon className="size-4" />
          </a>
          <div className="flex flex-wrap gap-x-2">
            {skills.map((skill, index) => {
              const techIcon = techStackIcons[skill.name.toLowerCase()]
              return (
                <div key={index} className="inline-flex items-center gap-0.5 text-xs">
                  {techIcon && (
                    <Image
                      src={techIcon}
                      alt={skill.name}
                      width={11}
                      height={11}
                      className="size-[11px] rounded-sm grayscale-[0.5] dark:grayscale-0"
                    />
                  )}
                  <span className="font-medium">{skill.name}</span>
                </div>
              )
            })}
          </div>
        </div>

        <div className="flex flex-col items-start gap-1 lg:flex-row lg:items-center lg:gap-2">
          <a
            className="flex w-[100px] flex-shrink-0 items-center gap-1 hover:opacity-70"
            href="https://linkedin.com/kikogoncalves_"
          >
            <h2 className="text-base font-semibold">Languages</h2>
          </a>

          <div className="flex flex-col flex-wrap gap-x-4 gap-y-0 lg:flex-row">
            {languages.map((language, index) => (
              <div key={index} className="text-xs">
                <span className="font-medium">{language.name}</span>
                <span className="ml-1 text-gray-500 dark:text-gray-300">{language.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
