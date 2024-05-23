'use client'

import React, { useMemo, useState } from 'react'
import clsx from 'clsx'

import { projectsData } from '@/utils/data'
import { sortByPinned } from '@/utils'

import { ProjectCard } from '@/components/projects/ProjectCard'
import { StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'

export function ProjectsShowcase() {
  const [query, setQuery] = useState('')
  const [hideLessRelevant, setHideLessRelevant] = useState(false)

  const filteredProjects = useMemo(
    () =>
      projectsData
        .filter((p) => (hideLessRelevant ? p.relevant : true))
        .filter((x) => x.name.toLowerCase().includes(query.toLowerCase()))
        .sort(sortByPinned),
    [hideLessRelevant, query],
  )

  return (
    <>
      <div className="mb-1 flex items-center justify-between gap-2 text-sm">
        <span className="font-medium text-navy-600 dark:text-navy-400">
          Showing {filteredProjects.length}/{projectsData.length} projects
        </span>
        <button className="hover:underline">Clear all</button>
      </div>

      <div className="mb-4 flex w-full items-center justify-center gap-3">
        <input
          type="search"
          placeholder="Search by project name"
          className="w-full flex-1 border border-slate-300 bg-slate-50 px-2 py-2 text-xs font-normal transition placeholder:font-light placeholder:text-slate-400 hover:border-primary-500/80 hover:bg-primary-500/10 focus:border-primary-500 focus:accent-primary-500 focus:ring-0 focus:ring-primary-500 focus:ring-offset-0 dark:border-slate-200/10  dark:bg-slate-100/5 dark:placeholder:text-slate-400 dark:hover:border-primary-500/70 dark:hover:bg-primary-500/10 dark:focus:border-primary-500/50 dark:focus:ring-0 dark:focus:ring-primary-500 lg:px-3 lg:py-2 lg:text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          type="button"
          title="Toggle starred projects"
          onClick={() => setHideLessRelevant(!hideLessRelevant)}
          className={clsx(
            'flex items-center gap-2 self-stretch border px-2.5 text-sm transition hover:opacity-80',
            hideLessRelevant
              ? 'text border-amber-600 bg-amber-600/70 text-white dark:border-amber-500/50 dark:bg-amber-600/30 dark:text-slate-300'
              : 'border-slate-300 bg-slate-50 text-slate-500 dark:border-slate-200/10 dark:bg-slate-100/5 dark:text-slate-300',
          )}
        >
          {hideLessRelevant ? <StarIconSolid className="h-5 w-5" /> : <StarIconOutline className="h-5 w-5" />}
        </button>
      </div>

      <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-10">
        {filteredProjects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </ul>

      <div className="mt-6 flex w-full items-center justify-center"></div>
    </>
  )
}
