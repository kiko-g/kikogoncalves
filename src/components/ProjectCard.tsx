'use client'

import React from 'react'
import clsx from 'clsx'
import Image from 'next/image'
import { type Project } from '@/types'
import { resolveProjectCardColors, getDatespan } from '@/utils'
import { GitHubIcon } from '@/components/SocialIcons'
import { LinkIcon } from '@heroicons/react/20/solid'

export function ProjectCard({ project }: { project: Project }) {
  const useLinkColor = false
  const cx = resolveProjectCardColors(project.color)
  const datespan = getDatespan(project.startDate, project.endDate)

  return (
    <div className={clsx('relative flex flex-col gap-4 rounded-2xl border p-6 lg:flex-row', cx.background, cx.border)}>
      <div className="order-2 flex flex-1 flex-col self-stretch lg:order-1">
        <div className="flex items-center gap-x-2">
          <h3 className="text-xl font-bold">{project.name}</h3>
          <span className={clsx('h-3 w-3 rounded-full', cx.badge)} />
        </div>
        <p className="text-sm font-normal text-navy-700 dark:text-white/50">{datespan}</p>
        <p className="mt-2">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className={clsx(
                cx.bubble,
                'rounded px-1.5 py-1 text-xs font-normal lowercase leading-tight tracking-tight',
              )}
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex flex-col items-start justify-start gap-2">
          {project.deployment && (
            <a
              href={project.deployment}
              target="_blank"
              className={clsx(
                'flex items-center justify-center gap-2 text-sm font-medium lowercase leading-4 tracking-tight transition hover:underline hover:opacity-80',
                useLinkColor ? cx.textHover : '',
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
                'flex items-center justify-center gap-2 text-sm font-medium lowercase leading-3 tracking-tight transition hover:underline hover:opacity-80',
                useLinkColor ? cx.textHover : '',
              )}
            >
              <GitHubIcon className="h-5 w-5 fill-[#333333] dark:fill-white" />
              <span>{project.repo}</span>
            </a>
          )}
        </div>
      </div>

      <div className="order-1 max-w-full lg:order-2 lg:max-w-md">
        {project.videoUrl ? (
          <video controls className={clsx('rounded-2xl shadow dark:shadow-xl', cx.border)}>
            <source src={project.videoUrl} type="video/mp4"></source>
          </video>
        ) : (
          <Image src={project.image} alt="" className={clsx('rounded-2xl shadow dark:shadow-xl', cx.border)} />
        )}
      </div>
    </div>
  )
}
