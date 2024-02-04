import React from 'react'
import { type Metadata } from 'next'
import { projectsData } from '@/utils/data'

import { SimpleLayout } from '@/components/SimpleLayout'
import { ProjectCard } from '@/components/ProjectCard'

export const metadata: Metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Things I’ve made trying to put my dent in the universe."
      intro="I’ve worked on tons of little projects over the years but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul role="list" className="grid grid-cols-1 gap-x-6 gap-y-10">
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </ul>
    </SimpleLayout>
  )
}
