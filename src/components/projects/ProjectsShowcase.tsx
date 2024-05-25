'use client'

import React, { useMemo, useState } from 'react'
import clsx from 'clsx'
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from '@headlessui/react'

import { projectsData } from '@/utils/data'
import { extractTechStackAndSortByFrequency, sortByPinned } from '@/utils'

import { ProjectCard } from '@/components/projects/ProjectCard'
import { ChevronDownIcon, CheckIcon, StarIcon as StarIconSolid } from '@heroicons/react/24/solid'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'

export function ProjectsShowcase() {
  const tags = useMemo(() => extractTechStackAndSortByFrequency(projectsData), [])
  const [selectedTags, setSelectedTags] = useState([tags[0], tags[1]])

  const [query, setQuery] = useState('')
  const [hideLessRelevant, setHideLessRelevant] = useState(false)
  const filteredProjects = useMemo(
    () =>
      projectsData
        .filter((p) => (hideLessRelevant ? p.relevant : true))
        .filter((x) => x.name.toLowerCase().includes(query.toLowerCase()))
        .filter((p) => (selectedTags.length > 0 ? selectedTags.every((tag) => p.stack.includes(tag.name)) : true))
        .sort(sortByPinned),
    [query, hideLessRelevant, selectedTags],
  )

  function clearFilters() {
    setQuery('')
    setHideLessRelevant(false)
  }

  return (
    <>
      <div className="mb-1 flex items-center justify-between gap-2 text-sm">
        <span className="font-medium text-navy-500 dark:text-navy-400">
          Showing {filteredProjects.length} out of {projectsData.length} projects
        </span>
        <button onClick={clearFilters} className="hover:underline">
          Clear
        </button>
      </div>

      <div className="mb-4 flex w-full items-center justify-center gap-3">
        <input
          type="search"
          placeholder="Search by project name"
          className="w-full flex-1 border border-navy-400 bg-navy-50 px-2 py-2 text-xs font-normal transition placeholder:font-light placeholder:text-navy-400 hover:border-primary-500/80 hover:bg-primary-500/10 focus:border-primary-500 focus:accent-primary-500 focus:ring-0 focus:ring-primary-500 focus:ring-offset-0 dark:border-navy-200/10  dark:bg-navy-100/5 dark:placeholder:text-navy-400 dark:hover:border-primary-500/70 dark:hover:bg-primary-500/10 dark:focus:border-primary-500/50 dark:focus:ring-0 dark:focus:ring-primary-500 lg:px-3 lg:py-2 lg:text-sm"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <Listbox value={selectedTags} onChange={setSelectedTags} multiple>
          <ListboxButton
            className={clsx(
              'flex items-center self-stretch border px-2.5 text-sm font-medium transition hover:opacity-80 dark:text-navy-300',
              selectedTags.length > 0
                ? 'border-primary-600 bg-primary-600/60 text-white dark:border-primary-500/60 dark:bg-primary-500/20'
                : 'border-navy-400 bg-navy-50 text-navy-700 dark:border-navy-200/10 dark:bg-navy-100/5',
            )}
          >
            <span>Tags</span>
            <ChevronDownIcon className="ml-2 h-4 w-4" />
          </ListboxButton>

          <Transition
            enter="duration-200 ease-out"
            enterFrom="scale-95 opacity-0"
            enterTo="scale-100 opacity-100"
            leave="duration-300 ease-out"
            leaveFrom="scale-100 opacity-100"
            leaveTo="scale-95 opacity-0"
          >
            <ListboxOptions
              anchor="bottom end"
              className="mt-2 flex w-52 flex-col gap-0.5 border border-navy-400 bg-navy-50 py-2 pl-2 pr-4 text-sm text-navy-800 transition dark:border-navy-200/10 dark:bg-navy-900 dark:text-navy-300"
            >
              <div className="mb-1 flex items-center justify-between gap-2 border-b border-navy-400 pb-1 dark:border-navy-200/10">
                <span className="text-xs">{selectedTags.length} selected</span>
                <button onClick={() => setSelectedTags([])} className="text-xs hover:underline">
                  Clear
                </button>
              </div>

              {tags.map((tag) => {
                const isSelected = selectedTags.includes(tag)
                return (
                  <ListboxOption
                    key={tag.name}
                    value={tag}
                    className="flex cursor-pointer items-center justify-between gap-2 rounded border border-transparent px-1.5 py-0.5 transition data-[focus]:border-transparent data-[focus]:bg-navy-800/70 data-[focus]:text-white dark:data-[focus]:bg-navy-500/30"
                  >
                    <span className={clsx('block truncate', isSelected ? '' : '')}>
                      {tag.name} ({tag.freq})
                    </span>
                    {isSelected && <CheckIcon className="h-4 w-4 data-[focus]:text-white" aria-hidden="true" />}
                  </ListboxOption>
                )
              })}
            </ListboxOptions>
          </Transition>
        </Listbox>

        <button
          type="button"
          title="Toggle starred projects"
          onClick={() => setHideLessRelevant(!hideLessRelevant)}
          className={clsx(
            'flex items-center gap-2 self-stretch border px-2.5 text-sm transition hover:opacity-80',
            hideLessRelevant
              ? 'text border-amber-600 bg-amber-600/70 text-white dark:border-amber-500/50 dark:bg-amber-600/30 dark:text-navy-300'
              : 'border-navy-400 bg-navy-50 text-navy-500 dark:border-navy-200/10 dark:bg-navy-100/5 dark:text-navy-300',
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
