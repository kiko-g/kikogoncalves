'use client'

import React, { useMemo, useState } from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import type { Technology, Project } from '@/types'
import { resolveProjectCardColors, getDatespan, techStackIcons } from '@/lib/utilities'
import { GitHubIcon } from '@/components/SocialIcons'
import { LinkIcon } from '@heroicons/react/20/solid'
import { StarIcon, DocumentArrowDownIcon, ArrowLongRightIcon, ArrowLongLeftIcon } from '@heroicons/react/24/outline'

type Props = {
  project: Project
  compact?: boolean
  tagClickCallback?: (tagName: string) => void
}

export function ProjectCard({ project, tagClickCallback, compact }: Props) {
  const [selectedMediaIdx, setSelectedMediaIdx] = useState(0)
  const media = useMemo(() => project.media[selectedMediaIdx], [selectedMediaIdx, project.media])

  const cx = resolveProjectCardColors(project.color)
  const datespan = getDatespan(project.startDate, project.endDate)

  return (
    <li
      className={clsx(
        'relative flex flex-col gap-4 rounded-none border p-4 xl:flex-row xl:p-6',
        cx.background,
        cx.border,
      )}
    >
      <div className="order-2 flex flex-1 flex-col self-stretch xl:order-1">
        <div className="flex items-center justify-between gap-x-2">
          <div className="flex items-center gap-x-2">
            <h3 className="flex-1 text-xl font-bold leading-7">{project.name}</h3>
            <span className={clsx('h-3 w-3 rounded-full', cx.badge)} />
          </div>
          {project.beta && (
            <div className="inline-flex items-center rounded-sm border border-amber-400 bg-amber-400 px-1 py-0.5 font-bold uppercase text-amber-950">
              <div className="text-xs font-bold uppercase leading-4">Beta</div>
            </div>
          )}
        </div>

        <p className="text-sm font-normal text-navy-700 dark:text-white/50">{datespan}</p>
        <p className={clsx('mt-2', compact ? 'text-sm leading-snug' : 'text-base leading-normal')}>
          {project.description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => {
            const techIcon = techStackIcons[tech.toLowerCase()]
            return (
              <button
                key={tech}
                onClick={() => typeof tagClickCallback === 'function' && tagClickCallback(tech)}
                className={clsx(
                  tech === 'FEUP' ? 'bg-feup/80 text-white dark:bg-feup/50' : cx.bubble,
                  'flex items-center gap-1 rounded px-1.5 py-[5px] text-xs font-normal lowercase leading-tight tracking-tight hover:opacity-80',
                )}
              >
                {techIcon && <Image src={techIcon} alt={tech} width={14} height={14} className="rounded-sm" />}
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
              className={clsx(
                cx.textHover,
                'flex items-center justify-center gap-2 text-sm font-medium lowercase leading-4 tracking-tight transition hover:underline hover:opacity-80',
              )}
            >
              <DocumentArrowDownIcon className="h-5 w-5 stroke-gray-700 dark:stroke-white" />
              <span>{project.attachment}</span>
            </a>
          )}
          {project.deployment && (
            <a
              href={project.deployment}
              target="_blank"
              className={clsx(
                cx.textHover,
                'flex items-center justify-center gap-2 text-sm font-medium lowercase leading-4 tracking-tight transition hover:underline hover:opacity-80',
              )}
            >
              <LinkIcon className="h-5 w-5 fill-gray-700 dark:fill-white" strokeWidth={1.5} />
              <span>{project.deployment}</span>
            </a>
          )}
          {project.repo && (
            <a
              href={project.repo}
              target="_blank"
              className={clsx(
                cx.textHover,
                'flex items-center justify-center gap-2 text-sm font-medium lowercase leading-4 tracking-tight transition hover:underline hover:opacity-80',
              )}
            >
              <GitHubIcon className="h-5 w-5 fill-[#333333] dark:fill-white" />
              <span>{project.repo}</span>
            </a>
          )}
        </div>
      </div>

      <div
        className={clsx(
          compact ? 'block lg:hidden' : 'block',
          'group relative order-1 max-w-full xl:order-2 xl:max-w-md',
        )}
      >
        {project.relevant && (
          <div className="absolute right-2 top-0 rounded-b-xl bg-amber-700 p-2 opacity-0 shadow-xl transition-all group-hover:opacity-100">
            <StarIcon className="h-4 w-4 stroke-white stroke-2" />
          </div>
        )}

        <div className={clsx('relative rounded-none shadow', cx.border)}>
          {media.type === 'image' && (
            <Image
              src={media.src}
              alt={`${project.name}: Media ${selectedMediaIdx + 1}`}
              className="rounded-none shadow"
              placeholder="blur"
            />
          )}
          {media.type === 'video' && (
            <video controls muted className={clsx('rounded-none shadow', cx.border)}>
              <source src={media.src} type="video/mp4"></source>
            </video>
          )}
        </div>

        {project.media.length > 1 && (
          <div className="mt-3 flex w-full items-center gap-2">
            <button
              className="disabled:cursor-not-allowed disabled:opacity-25"
              disabled={selectedMediaIdx === 0}
              onClick={() => setSelectedMediaIdx(selectedMediaIdx - 1)}
            >
              <ArrowLongLeftIcon className="h-5 w-5" />
            </button>
            <div className="mt-[1px] flex flex-1 items-center justify-center gap-2.5">
              {project.media.map((_, mediaIdx) => (
                <button
                  onClick={() => setSelectedMediaIdx(mediaIdx)}
                  key={`${project.name}-indicator-${mediaIdx}`}
                  title={`Show media ${mediaIdx + 1} for ${project.name}`}
                  className={clsx(
                    'h-3 w-3 rounded-full hover:opacity-80',
                    cx.badge,
                    selectedMediaIdx === mediaIdx ? `ring-offset-white dark:ring-offset-navy-800 ${cx.ring}` : '',
                  )}
                />
              ))}
            </div>
            <button
              className="disabled:cursor-not-allowed disabled:opacity-25"
              disabled={selectedMediaIdx === project.media.length - 1}
              onClick={() => setSelectedMediaIdx(selectedMediaIdx + 1)}
            >
              <ArrowLongRightIcon className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </li>
  )
}
