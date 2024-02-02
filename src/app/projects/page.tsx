import { type Metadata } from 'next'
import Image, { StaticImageData } from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { GitHubIcon } from '../../components/SocialIcons'

import { BagrUI } from '@/images/portfolio'
import logoPlanetaria from '@/images/logos/planetaria.svg'
import { FingerPrintIcon } from '@heroicons/react/24/outline'

type Project = {
  name: string
  description: React.ReactNode
  repo: string
  datespan: string
  deployment: string
  stack: string[]
  image: StaticImageData
}

const projects: Project[] = [
  {
    name: 'Bagr UI',
    description:
      'Long stash of reusable and customizable React TSX components stashed from many projects. Inspired by RadixUI, HeadlessUI and TailwindUI.',
    datespan: 'July 2023 - Present',
    repo: 'https://github.com/kiko-g/bagr-ui',
    deployment: 'https://bagr-ui.vercel.app',
    stack: ['React.js', 'Next.js', 'Typescript', 'Tailwind'],
    image: BagrUI,
  },
]

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
        {projects.map((project) => (
          <ProjectCard project={project} key={project.name} />
        ))}
      </ul>
    </SimpleLayout>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="relative flex gap-6 rounded-2xl border border-navy-300 bg-navy-100 p-6 dark:border-navy-700 dark:bg-navy-100/5">
      <div className="flex flex-1 flex-col self-stretch">
        <div className="flex items-center gap-x-2">
          <h3 className="text-xl font-bold">{project.name}</h3>
          <span className="h-3 w-3 rounded-full bg-teal-600" />
        </div>
        <p className="mt-0.5 text-sm font-normal text-navy-700 dark:text-white/50">{project.datespan}</p>
        <p className="mt-2">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded bg-teal-600/80 px-1.5 py-1 text-xs font-normal lowercase leading-tight tracking-tight text-white dark:bg-teal-500/50"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-start gap-1">
          {project.deployment && <FingerPrintIcon className="h-5 w-5" />}
          {project.repo && <GitHubIcon className="h-5 w-5 fill-[#333333] dark:fill-white" />}
        </div>
      </div>

      <div className="max-w-sm">
        <Image src={project.image} alt="" className="rounded-2xl" />
      </div>
    </div>
  )
}
