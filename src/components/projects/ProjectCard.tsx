"use client"

import React, { useEffect } from "react"
import { cn } from "@/lib/utils"
import Image from "next/image"
import type { Project } from "@/types"

import { resolveProjectCardColors, getDatespan, techStackIcons } from "@/lib/utilities"

import { ExpandableText } from "@/components/ExpandableText"
import { VideoComponent } from "@/components/projects/Video"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import { GithubIcon } from "@/components/icons"
import { BookCheckIcon, ExternalLinkIcon, LinkIcon } from "lucide-react"

type Props = {
  project: Project
  compact?: boolean
  tagClickCallback?: (tagName: string) => void
  projectIndex?: number
}

export function ProjectCard({ project, tagClickCallback, compact = false, projectIndex }: Props) {
  const cx = resolveProjectCardColors(project.color)

  const datespan = getDatespan(project.startDate, project.endDate)
  const nextButtonRef = React.useRef<HTMLButtonElement>(null)
  const showPinnedBadge = false

  const handleNextSlide = () => {
    if (!nextButtonRef.current) return

    const nextButton = nextButtonRef.current
    if (nextButton && !nextButton.disabled) nextButton.click()
  }

  function handleTagClick(tech: string) {
    if (typeof tagClickCallback !== "function") return
    tagClickCallback(tech)
  }

  useEffect(() => {
    if (typeof projectIndex !== "number" || projectIndex > 0) return

    const interval = setInterval(() => {
      handleNextSlide()
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <li
      className={cn(
        "relative flex flex-col rounded-lg border lg:flex-row",
        compact ? "gap-3 p-3 lg:p-4" : "gap-4 p-4 lg:p-5",
        compact ? "bg-white dark:bg-black/30" : [cx.background, cx.border],
      )}
    >
      <div className="order-1 flex flex-1 flex-col self-stretch lg:order-1">
        <div className="flex flex-wrap items-center justify-between gap-1">
          <div className="flex items-center gap-2">
            <h3
              className={cn(
                "flex-1 leading-7",
                compact ? "text-base font-semibold tracking-tight" : "text-xl font-bold",
              )}
            >
              {project.name}
            </h3>
          </div>

          <div className="flex items-start gap-2">
            {project.feup && (
              <span className="inline-flex items-center rounded-sm bg-feup px-1.5 py-1 text-xs font-bold uppercase leading-4 tracking-tighter text-white">
                FEUP
              </span>
            )}
            {project.status === "beta" && (
              <span className="inline-flex items-center rounded-sm bg-gradient-to-br from-amber-500 to-amber-600 px-1.5 py-1 text-xs font-semibold leading-4 tracking-tighter text-white">
                Beta
              </span>
            )}
            {project.status === "early-access" && (
              <span className="inline-flex items-center rounded-sm bg-gradient-to-br from-indigo-400 to-indigo-600 px-1.5 py-1 text-xs font-semibold leading-4 tracking-tighter text-white">
                Early Access
              </span>
            )}
            {showPinnedBadge && project.pinned && (
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

        <ExpandableText maxHeight={compact ? 85 : 95}>
          <div className={cn("mt-2", compact ? "text-sm leading-snug" : "text-base leading-normal")}>
            {project.description}
          </div>
        </ExpandableText>

        <div className={cn("flex flex-wrap", compact ? "mt-2 gap-2" : "mt-3 gap-1.5")}>
          {project.stack.map((tech) => {
            const TechStackBadge = compact ? TechStackBadgeSmall : TechStackBadgeNormal
            return <TechStackBadge key={tech} tech={tech} handleTagClick={handleTagClick} className={cx.bubble} />
          })}
        </div>

        <div className={cn("flex flex-col items-start justify-start", compact ? "mt-auto gap-1.5 pt-4" : "mt-4 gap-2")}>
          {project.attachment && (
            <a
              href={project.attachment}
              target="_blank"
              className={cn(
                compact ? "" : cx.textHover,
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
                compact ? "" : cx.textHover,
                "flex items-center justify-center gap-2 text-sm font-medium lowercase leading-4 tracking-tight transition hover:underline hover:opacity-80",
              )}
            >
              <ExternalLinkIcon className="size-4 flex-shrink-0 text-gray-700 dark:text-white" strokeWidth={1.5} />
              <span className="line-clamp-1">{project.deployment}</span>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              className={cn(
                compact ? "" : cx.textHover,
                "flex items-center justify-center gap-2 text-sm font-medium lowercase leading-4 tracking-tight transition hover:underline hover:opacity-80",
              )}
            >
              <GithubIcon className="size-4 flex-shrink-0 fill-[#333333] dark:fill-white" />
              <span className="line-clamp-1">{project.repo}</span>
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
        <Carousel className="flex w-full max-w-full flex-col gap-2 lg:max-w-lg" opts={{ loop: true }}>
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
              ref={nextButtonRef}
              variant="ghost"
              className="transition-all hover:scale-125 hover:bg-black/0 dark:hover:bg-white/0 [&_svg]:size-5"
            />
          </div>
        </Carousel>
      </div>
    </li>
  )
}

const TechStackBadgeNormal = ({
  tech,
  handleTagClick,
  className,
}: {
  tech: string
  handleTagClick: (tech: string) => void
  className?: string
}) => {
  const techIcon = techStackIcons[tech.toLowerCase()]
  return (
    <button
      key={tech}
      onClick={() => {
        handleTagClick(tech)
      }}
      className={cn(
        tech === "FEUP" ? "bg-feup/80 text-white dark:bg-feup/50" : className,
        "flex items-center gap-1 rounded-sm px-1.5 py-[5px] text-xs font-normal lowercase leading-tight tracking-tight hover:opacity-80",
      )}
    >
      {techIcon && <Image src={techIcon} alt={tech} width={15} height={15} className="size-[15px] rounded-sm" />}
      <span className="-mt-[2px]">{tech}</span>
    </button>
  )
}

const TechStackBadgeSmall = ({
  tech,
  handleTagClick,
  className,
}: {
  tech: string
  handleTagClick: (tech: string) => void
  className?: string
}) => {
  const techIcon = techStackIcons[tech.toLowerCase()]
  return (
    <button
      key={tech}
      onClick={() => {
        handleTagClick(tech)
      }}
      className={cn(
        "flex items-center gap-1 rounded-sm text-xs font-normal lowercase leading-tight tracking-tight hover:opacity-80",
      )}
    >
      {techIcon && <Image src={techIcon} alt={tech} width={14} height={14} className="size-[14px] rounded-sm" />}
      <span className="-mt-[2px]">{tech}</span>
    </button>
  )
}
