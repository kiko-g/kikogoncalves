"use client"

import React, { useMemo, useState, useEffect } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import { type Technology } from "@/types"

import { projectsData } from "@/lib/data"
import { extractTechStackAndSortByFrequency, sortByPinned, techStackIcons } from "@/lib/utilities"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ProjectCard } from "@/components/projects/ProjectCard"
import { Listbox, ListboxButton, ListboxOption, ListboxOptions, Transition } from "@headlessui/react"

import { CheckIcon, ChevronDownIcon, LayoutGrid, MinusCircleIcon, PlusCircleIcon, Tally4Icon } from "lucide-react"

export function ProjectsShowcase() {
  const tags = useMemo(() => extractTechStackAndSortByFrequency(projectsData), [])
  const [selectedTags, setSelectedTags] = useState<Technology[]>([])

  const [query, setQuery] = useState("")
  const [compact, setCompact] = useState(false)
  const [showLess, setShowLess] = useState(true)

  const filteredProjects = useMemo(
    () =>
      projectsData
        .filter((p) => (showLess ? p.relevant : true))
        .filter((x) => x.name.toLowerCase().includes(query.toLowerCase()))
        .filter((p) => (selectedTags.length > 0 ? selectedTags.every((tag) => p.stack.includes(tag.name)) : true))
        .sort(sortByPinned),
    [query, showLess, selectedTags],
  )

  function clearFilters() {
    setQuery("")
    setSelectedTags([])
    setCompact(false)
    setShowLess(false)
  }

  function onTagClickToggle(tagName: string) {
    setShowLess(false)
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

  useEffect(() => {
    if (query.length > 0) setShowLess(false)
  }, [query])

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

      <div className="flex w-full items-center justify-center gap-3">
        <Input
          type="search"
          value={query}
          placeholder="Search by project name"
          onChange={(e) => setQuery(e.target.value)}
          className="h-[42px] w-full flex-1"
        />

        <Listbox value={selectedTags} onChange={setSelectedTags} multiple>
          <ListboxButton
            className={cn(
              "flex items-center gap-1 self-stretch rounded-md border px-3 text-sm font-medium transition hover:opacity-80",
              selectedTags.length > 0
                ? "border-zinc-800 bg-zinc-800 text-white dark:border-zinc-50 dark:bg-zinc-50 dark:text-zinc-800"
                : "border-zinc-300 bg-transparent dark:border-zinc-200/10",
            )}
          >
            <span>Tags</span>
            <ChevronDownIcon className="size-4" />
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
              className="mt-2 flex w-64 flex-col gap-0.5 rounded-md border border-zinc-300 bg-white py-2 pl-2 pr-4 text-sm text-zinc-950 transition dark:border-zinc-200/10 dark:bg-zinc-900 dark:text-zinc-200"
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
                    <div className="inline-flex items-center gap-2">
                      {techIcon && (
                        <Image
                          src={techIcon}
                          alt={tag.name}
                          width={13}
                          height={13}
                          className="size-[13px] rounded-sm"
                        />
                      )}
                      <span className={cn("block truncate font-medium", isSelected ? "" : "")}>
                        {tag.name} ({tag.freq})
                      </span>
                    </div>
                    {isSelected && <CheckIcon className="size-4 data-[focus]:text-white" aria-hidden="true" />}
                  </ListboxOption>
                )
              })}
            </ListboxOptions>
          </Transition>
        </Listbox>

        <Button
          size="icon-lg"
          variant={compact ? "default" : "outline"}
          title="Toggle compact view"
          onClick={() => setCompact((prev) => !prev)}
        >
          {compact ? <LayoutGrid className="size-5 stroke-2" /> : <Tally4Icon className="size-5 rotate-90 stroke-2" />}
        </Button>
      </div>

      <ul
        id="list"
        role="list"
        className={cn(
          "grid pt-4",
          compact ? "grid-cols-1 gap-x-5 gap-y-5 lg:grid-cols-3 lg:gap-x-3 lg:gap-y-3" : "grid-cols-1 gap-x-6 gap-y-8",
        )}
      >
        {filteredProjects.map((project, projectIndex) => (
          <ProjectCard
            project={project}
            compact={compact}
            key={project.name}
            tagClickCallback={onTagClickToggle}
            projectIndex={projectIndex}
          />
        ))}
      </ul>

      <div className="mb-6 mt-4 flex items-center justify-center gap-2">
        <Button
          variant="outline"
          onClick={() => setShowLess((prev) => !prev)}
          className={cn(filteredProjects.length === 0 && "hidden")}
        >
          {showLess ? "Show more projects" : "Show less projects"}
          {showLess ? <PlusCircleIcon className="size-4" /> : <MinusCircleIcon className="size-4" />}
        </Button>
      </div>
    </>
  )
}
