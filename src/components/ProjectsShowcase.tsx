'use client'

import React, { useMemo, useState } from 'react'
import { projectsData } from '@/utils/data'
import { ProjectCard } from '@/components/ProjectCard'
import { Button } from './Button'

export function ProjectsShowcase() {
  const [hideLessRelevant, setHideLessRelevant] = useState(true)
  const projects = useMemo(() => {
    if (hideLessRelevant) return projectsData.filter((project) => project.relevant)
    else return projectsData
  }, [hideLessRelevant])

  return (
    <>
      <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-10">
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </ul>

      <div className="mt-6 flex w-full items-center justify-center">
        <Button variant="primary" onClick={() => setHideLessRelevant(!hideLessRelevant)}>
          Show {hideLessRelevant ? 'more' : 'less'}
        </Button>
      </div>
    </>
  )
}