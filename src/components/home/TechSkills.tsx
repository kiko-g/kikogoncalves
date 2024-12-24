"use client"

import clsx from "clsx"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"

import { type Skill } from "@/types"
import { skills } from "@/lib/data"
import { techStackIcons } from "@/lib/utilities"
import { BriefcaseIcon } from "lucide-react"

export function TechSkills() {
  return (
    <div className="rounded-2xl border border-navy-100 bg-navy-25 p-6 dark:border-navy-700/40 dark:bg-white/[3%]">
      <h2 className="flex text-sm font-semibold text-navy-900 dark:text-navy-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Technologies</span>
      </h2>

      <p className="mt-2 text-sm text-navy-600 dark:text-navy-400">
        Some of the technologies I have experience with. Visit the{" "}
        <Link className="underline hover:opacity-80" href="/projects">
          projects
        </Link>{" "}
        page to see them in action.
      </p>

      <ul className="mt-4 flex flex-wrap gap-3">
        {skills.map((skill) => {
          return <SkillBubble key={skill.name} skill={skill} background bordered rounded lowercase />
        })}
      </ul>

      <div className="mt-4 flex items-center justify-end gap-2 border-t border-navy-200 pt-2 dark:border-navy-700/80">
        <Link
          href="/about#skillset"
          className="flex items-center gap-1 text-sm text-navy-600 hover:underline dark:text-navy-400"
        >
          <span>See more</span>
        </Link>
      </div>
    </div>
  )
}

function SkillBubble({
  skill,
  background,
  bordered,
  lowercase,
  rounded,
}: {
  skill: Skill
  background?: boolean
  bordered?: boolean
  lowercase?: boolean
  rounded?: boolean
}) {
  const { resolvedTheme } = useTheme()
  const isDarkMode = resolvedTheme === "dark"
  const borderTransparencyChannel = isDarkMode ? "00" : "00"
  const backgroundTransparencyChannel = isDarkMode ? "30" : "20"
  const techIcon = techStackIcons[skill.name.toLowerCase()]

  return (
    <li
      style={{
        backgroundColor: background ? `${skill.color}${backgroundTransparencyChannel}` : "transparent",
        border: `1px solid ${bordered ? `${skill.color}${borderTransparencyChannel}` : "transparent"}`,
      }}
      className={clsx(
        "flex items-center gap-1 px-2 pb-[5px] pt-[4px] leading-none",
        rounded ? "rounded-full" : "rounded-none",
      )}
    >
      {techIcon ? (
        <Image src={techIcon} alt={skill.name} width={13} height={13} className="mt-[1px] size-[13px] rounded-sm" />
      ) : (
        <span
          className="mt-[3px] h-2 w-2 rounded-full"
          style={{
            backgroundColor: skill.color,
          }}
        />
      )}

      <span className={clsx("text-xs font-normal leading-none tracking-tight", lowercase && "lowercase")}>
        {skill.name}
      </span>
    </li>
  )
}
