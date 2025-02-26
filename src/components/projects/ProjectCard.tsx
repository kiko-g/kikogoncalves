"use client"

import React, { useMemo, useState } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import type { Project } from "@/types"

import { resolveProjectCardColors, getDatespan, techStackIcons } from "@/lib/utilities"

import { VideoComponent } from "@/components/projects/Video"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import { GithubIcon } from "@/components/icons"
import { BookCheckIcon, LinkIcon } from "lucide-react"

type Props = {
  project: Project
  compact?: boolean
  tagClickCallback?: (tagName: string) => void
}

export function ProjectCard({ project, tagClickCallback, compact = false }: Props) {
  const cx = resolveProjectCardColors(project.color)
  const datespan = getDatespan(project.startDate, project.endDate)

  return (
    <li
      className={cn("relative flex flex-col gap-4 rounded-lg border p-4 lg:flex-row lg:p-6", cx.background, cx.border)}
    >
      <div className="order-1 flex flex-1 flex-col self-stretch lg:order-1">
        <div className="flex flex-wrap items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <span className={cn("h-2.5 w-2.5 rounded-full", cx.badge)} />
            <h3 className="flex-1 text-xl font-bold leading-7">{project.name}</h3>
          </div>

          <div className="flex items-start gap-2">
            {project.feup && (
              <span className="inline-flex items-center rounded-sm bg-feup px-1.5 py-1 text-xs font-bold uppercase leading-4 tracking-tight text-white">
                FEUP
              </span>
            )}
            {project.status === "beta" && (
              <span className="inline-flex items-center rounded-sm bg-gradient-to-br from-amber-500 to-amber-600 px-1.5 py-1 text-xs font-semibold leading-4 tracking-tight text-white">
                Beta
              </span>
            )}
            {project.status === "early-access" && (
              <span className="inline-flex items-center rounded-sm bg-gradient-to-br from-indigo-400 to-indigo-600 px-1.5 py-1 text-xs font-semibold leading-4 tracking-tight text-white">
                Early Access
              </span>
            )}
            {project.pinned && (
              <div className="inline-flex items-center rounded-sm bg-gradient-to-br from-rose-500 to-rose-600 px-1 py-1 text-xs">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="none"
                  viewBox="0 0 24 24"
                  className="size-4 fill-white stroke-transparent stroke-2"
                >
                  <path d="M19.183 7.805 16.22 4.838c-2.027-2.03-3.04-3.043-4.129-2.803-1.088.24-1.581 1.587-2.568 4.28l-.668 1.823c-.263.718-.395 1.077-.632 1.355a2.035 2.035 0 0 1-.36.332c-.296.213-.664.314-1.4.517-1.66.458-2.491.687-2.804 1.23a1.528 1.528 0 0 0-.204.773c.004.627.613 1.236 1.83 2.455L6.7 16.216l-4.476 4.48a.764.764 0 0 0 1.08 1.08l4.475-4.48 1.466 1.468c1.226 1.226 1.839 1.84 2.47 1.84.265 0 .526-.068.757-.2.548-.313.778-1.149 1.239-2.822.202-.735.303-1.102.515-1.399.093-.129.201-.247.322-.352.275-.238.632-.372 1.345-.64l1.844-.693c2.664-1 3.996-1.501 4.23-2.586.235-1.086-.77-2.093-2.783-4.107Z" />
                </svg>
              </div>
            )}
          </div>
        </div>

        <p className="mt-0.5 text-sm font-normal text-zinc-700 dark:text-white/50">{datespan}</p>
        <div className={cn("mt-2", compact ? "text-sm leading-snug" : "text-base leading-normal")}>
          {project.description}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => {
            const techIcon = techStackIcons[tech.toLowerCase()]
            return (
              <button
                key={tech}
                onClick={() => typeof tagClickCallback === "function" && tagClickCallback(tech)}
                className={cn(
                  tech === "FEUP" ? "bg-feup/80 text-white dark:bg-feup/50" : cx.bubble,
                  "flex items-center gap-1 rounded-sm px-1.5 py-[5px] text-xs font-normal lowercase leading-tight tracking-tight hover:opacity-80",
                )}
              >
                {techIcon && (
                  <Image src={techIcon} alt={tech} width={15} height={15} className="size-[15px] rounded-sm" />
                )}
                <span className="-mt-[2px]">{tech}</span>
              </button>
            )
          })}
        </div>

        <div className="mt-4 flex flex-col items-start justify-start gap-2">
          {project.attachment && (
            <a
              href={project.attachment}
              target="_blank"
              className={cn(
                cx.textHover,
                "flex items-center justify-center gap-2 text-sm font-medium lowercase leading-4 tracking-tight transition hover:underline hover:opacity-80",
              )}
            >
              <BookCheckIcon className="size-4 text-gray-700 dark:text-white" />
              <span>{project.attachment}</span>
            </a>
          )}

          {project.deployment && (
            <a
              href={project.deployment}
              target="_blank"
              className={cn(
                cx.textHover,
                "flex items-center justify-center gap-2 text-sm font-medium lowercase leading-4 tracking-tight transition hover:underline hover:opacity-80",
              )}
            >
              <LinkIcon className="size-4 text-gray-700 dark:text-white" strokeWidth={1.5} />
              <span>{project.deployment}</span>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              className={cn(
                cx.textHover,
                "flex items-center justify-center gap-2 text-sm font-medium lowercase leading-4 tracking-tight transition hover:underline hover:opacity-80",
              )}
            >
              <GithubIcon className="size-4 fill-[#333333] dark:fill-white" />
              <span>{project.repo}</span>
            </a>
          )}
        </div>
      </div>

      <div
        className={cn(
          compact ? "block lg:hidden" : "block",
          "group relative order-2 max-w-full lg:order-2 lg:max-w-md",
        )}
      >
        <Carousel className="flex w-full max-w-md flex-col gap-2" opts={{ loop: true }}>
          <CarouselContent>
            {project.media.map((media, mediaIdx) => (
              <CarouselItem key={mediaIdx}>
                {media.type === "image" && (
                  <Image
                    src={media.src}
                    alt={`${project.name}: Media ${mediaIdx + 1}`}
                    className="h-full rounded-md object-cover shadow transition-all"
                    placeholder="blur"
                  />
                )}
                {media.type === "video" && <VideoComponent media={media} additionalClassnames={cx.border} />}
              </CarouselItem>
            ))}
          </CarouselContent>

          <div className="flex items-center justify-between gap-2">
            <CarouselPrevious
              variant="ghost"
              className="transition-all hover:scale-125 hover:bg-black/0 dark:hover:bg-white/0 [&_svg]:size-5"
            />
            <CarouselNext
              variant="ghost"
              className="transition-all hover:scale-125 hover:bg-black/0 dark:hover:bg-white/0 [&_svg]:size-5"
            />
          </div>
        </Carousel>
      </div>
    </li>
  )
}
