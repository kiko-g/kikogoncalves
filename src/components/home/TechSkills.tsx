'use client'

import clsx from 'clsx'
import Link from 'next/link'
import { type Skill } from '@/types'
import { skills } from '@/utils/data'
import { BriefcaseIcon } from '@/components/Icons'

export function TechSkills() {
  return (
    <div className="rounded-2xl border border-navy-100 bg-navy-25 p-6 dark:border-navy-700/40 dark:bg-white/[3%]">
      <h2 className="flex text-sm font-semibold text-navy-900 dark:text-navy-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Tech Skills</span>
      </h2>

      <p className="mt-2 text-sm text-navy-600 dark:text-navy-400">
        Some of the technologies I have experience with. Visit the{' '}
        <Link className="underline hover:opacity-80" href="/projects">
          projects
        </Link>{' '}
        page to know more.
      </p>

      <ul className="mt-4 flex flex-wrap gap-3">
        {skills.map((skill) => (
          <SkillBubble key={skill.name} skill={skill} background rounded lowercase />
        ))}
      </ul>
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
  return (
    <li
      className={clsx('flex items-center gap-1 px-1.5 py-0 leading-none', rounded ? 'rounded-full' : 'rounded-none')}
      style={{
        border: `1px solid ${bordered ? `${skill.color}80` : 'transparent'}`,
        backgroundColor: background ? `${skill.color}22` : undefined,
      }}
    >
      <span
        className="h-2 w-2 rounded-full"
        style={{
          backgroundColor: skill.color,
        }}
      />
      <span className={clsx('text-xs font-normal tracking-tight', lowercase && 'lowercase')}>{skill.name}</span>
    </li>
  )
}
