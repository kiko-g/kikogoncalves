'use client'

import React, { useMemo, useState } from 'react'
import clsx from 'clsx'

import { projectsData } from '@/utils/data'
import { sortByRelevancyThenDateDesc } from '@/utils'

import { Button } from '@/components/Button'
import { ProjectCard } from '@/components/ProjectCard'
import { Square3Stack3DIcon } from '@heroicons/react/24/outline'

export function ProjectsShowcase() {
  const [query, setQuery] = useState('')
  const [hideLessRelevant, setHideLessRelevant] = useState(false)

  const projects = useMemo(() => {
    if (hideLessRelevant) return projectsData.filter((project) => project.relevant)
    else return projectsData
  }, [hideLessRelevant])

  return (
    <>
      <div className="mb-4 flex w-full items-center justify-center gap-3">
        <input
          type="search"
          placeholder="Search by project name"
          className="w-full flex-1 rounded border border-slate-300 bg-slate-50 px-2 py-2 text-xs font-normal transition placeholder:font-light placeholder:text-slate-400 hover:border-slate-700/80 hover:bg-slate-700/5 focus:border-slate-700 focus:accent-slate-700 focus:ring-0 focus:ring-slate-700 focus:ring-offset-0 dark:border-slate-200/10  dark:bg-slate-100/5 dark:placeholder:text-slate-400 dark:hover:border-primary-700/70 dark:hover:bg-primary-700/5 dark:focus:border-primary-700/80 dark:focus:ring-0 dark:focus:ring-primary-700 lg:px-3 lg:py-2 lg:text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="button"
          title="Toggle projects relevancy"
          onClick={() => setHideLessRelevant(!hideLessRelevant)}
          className={clsx(
            'self-stretch rounded border px-2.5 transition hover:opacity-80',
            hideLessRelevant
              ? 'border-slate-300 bg-slate-50 text-slate-500 dark:border-slate-200/10 dark:bg-slate-100/5 dark:text-slate-300'
              : 'text border-primary-700 bg-primary-700/70 text-white dark:border-primary-500/50 dark:bg-primary-500/30 dark:text-slate-300',
          )}
        >
          <Square3Stack3DIcon className="h-5 w-5" />
        </button>
      </div>

      <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-10">
        {projects
          .filter((x) => x.name.toLowerCase().includes(query.toLowerCase()))
          .sort(sortByRelevancyThenDateDesc)
          .map((project) => (
            <ProjectCard project={project} key={project.name} />
          ))}
      </ul>

      <div className="mt-6 flex w-full items-center justify-center"></div>
    </>
  )
}
