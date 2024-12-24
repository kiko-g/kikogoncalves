"use client"

import React, { useMemo, useState } from "react"
import clsx from "clsx"
import Image from "next/image"
import { type Technology } from "@/types"

import { useLocalStorageBoolean } from "@/lib/hooks"
import { projectsData } from "@/lib/data"
import { extractTechStackAndSortByFrequency, sortByPinned, techStackIcons } from "@/lib/utilities"

import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react"
import { ProjectCard } from "@/components/projects/ProjectCard"

import { CheckIcon, LayoutGrid, PartyPopperIcon, StarIcon, Tally4Icon } from "lucide-react"

export function ProjectsShowcase() {
  const tags = useMemo(() => extractTechStackAndSortByFrequency(projectsData), [])
  const [selectedTags, setSelectedTags] = useState<Technology[]>([])

  const [query, setQuery] = useState("")
  const [compact, setCompact] = useLocalStorageBoolean("kikogoncalves.projects.compact", false)
  const [showOnlyStarred, setShowOnlyStarred] = useLocalStorageBoolean("kikogoncalves.projects.starred", false)
  const filteredProjects = useMemo(
    () =>
      projectsData
        .filter((p) => (showOnlyStarred ? p.relevant : true))
        .filter((x) => x.name.toLowerCase().includes(query.toLowerCase()))
        .filter((p) => (selectedTags.length > 0 ? selectedTags.every((tag) => p.stack.includes(tag.name)) : true))
        .sort(sortByPinned),
    [query, showOnlyStarred, selectedTags],
  )

  function clearFilters() {
    setQuery("")
    setSelectedTags([])
    setCompact(false)
    setShowOnlyStarred(false)
  }

  function onTagClickToggle(tagName: string) {
    setSelectedTags((prev) => {
      let isTagPresent = false
      for (let i = 0; i < prev.length; i++) {
        if (prev[i].name === tagName) {
          isTagPresent = true
          break
        }
      }
      const tag = tags.find((t) => t.name === tagName)!
      return isTagPresent ? prev.filter((t) => t.name !== tag.name) : [...prev, tag]
    })
  }

  return (
    <>
      <div className="mb-1 flex items-center justify-between gap-2 text-sm">
        <span className="font-medium text-zinc-600 dark:text-zinc-400">
          Showing {filteredProjects.length} out of {projectsData.length} projects
        </span>
        <button onClick={clearFilters} className="hover:underline">
          Reset
        </button>
      </div>

      <div className="mb-4 flex w-full items-center justify-center gap-3">
        <input
          type="search"
          value={query}
          placeholder="Search by project name"
          onChange={(e) => setQuery(e.target.value)}
          className="w-full flex-1 border border-zinc-300 bg-zinc-50 px-2 py-2 text-xs font-normal transition placeholder:font-light placeholder:text-zinc-400 hover:border-indigo-500/80 hover:bg-indigo-500/10 focus:border-indigo-500 focus:accent-indigo-500 focus:ring-0 focus:ring-indigo-500 focus:ring-offset-0 dark:border-zinc-200/10 dark:bg-zinc-100/5 dark:placeholder:text-zinc-400 dark:hover:border-indigo-500/70 dark:hover:bg-indigo-500/10 dark:focus:border-indigo-500/50 dark:focus:ring-0 dark:focus:ring-indigo-500 lg:px-3 lg:py-2 lg:text-sm"
        />

        <Listbox value={selectedTags} onChange={setSelectedTags} multiple>
          <ListboxButton
            className={clsx(
              "flex items-center self-stretch border px-2.5 text-sm font-medium transition hover:opacity-80 dark:text-zinc-300",
              selectedTags.length > 0
                ? "border-indigo-600 bg-indigo-600/60 text-white dark:border-indigo-500/60 dark:bg-indigo-500/20"
                : "border-zinc-300 bg-zinc-50 text-zinc-700 dark:border-zinc-200/10 dark:bg-zinc-100/5",
            )}
          >
            <span>Tags</span>
            <PartyPopperIcon className="ml-1.5 h-4 w-4" />
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
              className="mt-2 flex w-52 flex-col gap-0.5 rounded-md border border-zinc-300 bg-white py-2 pl-2 pr-4 text-sm text-zinc-950 transition dark:border-zinc-200/10 dark:bg-zinc-900 dark:text-zinc-200"
            >
              <div className="mb-1 flex items-center justify-between gap-2 border-b border-zinc-300 pb-1 dark:border-zinc-200/10">
                <span className="pl-1 text-xs">{selectedTags.length} selected</span>
                <button onClick={() => setSelectedTags([])} className="text-xs hover:underline">
                  Clear
                </button>
              </div>

              {tags.map((tag) => {
                const isSelected = selectedTags.includes(tag)
                const techIcon = techStackIcons[tag.name.toLowerCase()]
                return (
                  <ListboxOption
                    key={tag.name}
                    value={tag}
                    className="flex cursor-pointer items-center justify-between gap-2 rounded border border-transparent px-1.5 py-0.5 data-[focus]:border-transparent data-[focus]:bg-zinc-800/10 data-[focus]:text-zinc-900 dark:data-[focus]:bg-white/10 dark:data-[focus]:text-white"
                  >
                    <div className="inline-flex items-center gap-1">
                      {techIcon && (
                        <Image
                          src={techIcon}
                          alt={tag.name}
                          width={13}
                          height={13}
                          className="size-[13px] rounded-sm"
                        />
                      )}
                      <span className={clsx("block truncate", isSelected ? "" : "")}>
                        {tag.name} ({tag.freq})
                      </span>
                    </div>
                    {isSelected && <CheckIcon className="h-4 w-4 data-[focus]:text-white" aria-hidden="true" />}
                  </ListboxOption>
                )
              })}
            </ListboxOptions>
          </Transition>
        </Listbox>

        <button
          type="button"
          title="Toggle compact view"
          onClick={() => setCompact((prev) => !prev)}
          className={clsx(
            "hidden items-center gap-2 self-stretch border px-2.5 text-sm transition hover:opacity-80 lg:flex",
            compact
              ? "border-indigo-600 bg-indigo-600/60 text-white dark:border-indigo-500/60 dark:bg-indigo-500/20"
              : "border-zinc-300 bg-zinc-50 text-zinc-600 dark:border-zinc-200/10 dark:bg-zinc-100/5 dark:text-zinc-300",
          )}
        >
          {compact ? (
            <Tally4Icon className="h-5 w-5 rotate-90 stroke-2" />
          ) : (
            <LayoutGrid className="h-5 w-5 stroke-2" />
          )}
        </button>

        <button
          type="button"
          title="Toggle starred projects"
          onClick={() => setShowOnlyStarred((prev) => !prev)}
          className={clsx(
            "flex items-center gap-2 self-stretch border px-2.5 text-sm transition hover:opacity-80",
            showOnlyStarred
              ? "text border-amber-600 bg-amber-600/70 text-white dark:border-amber-500/50 dark:bg-amber-600/30 dark:text-zinc-300"
              : "border-zinc-300 bg-zinc-50 text-zinc-600 dark:border-zinc-200/10 dark:bg-zinc-100/5 dark:text-zinc-300",
          )}
        >
          {showOnlyStarred ? (
            <StarIcon className="h-5 w-5 fill-red-400" />
          ) : (
            <StarIcon className="h-5 w-5 stroke-red-400" />
          )}
        </button>
      </div>

      <ul
        role="list"
        className={clsx(
          "grid",
          compact ? "grid-cols-1 gap-x-5 gap-y-5 lg:grid-cols-2" : "grid-cols-1 gap-x-6 gap-y-10",
        )}
      >
        {filteredProjects.map((project) => (
          <ProjectCard project={project} compact={compact} key={project.name} tagClickCallback={onTagClickToggle} />
        ))}
      </ul>

      <div className="mt-6 flex w-full items-center justify-center"></div>
    </>
  )
}
