import { media } from '@/images/portfolio'
import type { Project } from '@/types'

export const projectsData: Project[] = [
  {
    name: 'Bagr UI',
    description:
      'Long stash of reusable and customizable React TSX components stashed from many projects. Inspired by RadixUI, HeadlessUI and TailwindUI.',
    datespan: 'July 2023 - Present',
    repo: 'https://github.com/kiko-g/bagr-ui',
    deployment: 'https://bagr-ui.vercel.app',
    color: 'teal',
    stack: ['React.js', 'Next.js', 'Typescript', 'Tailwind'],
    image: media.bagrui.screenshot,
    videoUrl: '',
  },
  {
    name: "Analytics and Usability Dashboard for CMF's MES",
    description:
      "Dashboard with custom insights for components inside Critical Manufacturing's MES, an application used for managing industrial shop floors. The dashboard aims to identify user behavior patterns and improve usability based on evidence collected over time.",
    datespan: 'January 2023 - July 2023',
    repo: 'https://github.com/kiko-g/usability-dashboard-mes',
    deployment: 'https://usability-dashboard-mes.vercel.app',
    color: 'blue',
    stack: ['React.js', 'Next.js', 'Typescript', 'Tailwind', 'Angular', 'Docker', 'Matomo', 'MySQL'],
    image: media.bagrui.screenshot,
    videoUrl: 'https://user-images.githubusercontent.com/40745490/246076879-659c8170-4f10-42ec-a67f-03f66dc2e3e7.mp4',
  },
  {
    name: 'Finishers Hub',
    description:
      'The place for all finisher related content: chaotic, outrageous, lawless on the fence of criminality. Perfectly unbalanced. As all things should be. The most amusing and most personal project I have ever worked on.',
    datespan: 'May 2022 - July 2023',
    repo: 'https://github.com/kiko-g/finishershub',
    deployment: 'https://finishershub.vercel.app',
    color: 'purple',
    stack: ['React.js', 'Next.js', 'Typescript', 'Tailwind', 'AWS S3', 'Mongo DB'],
    image: media.bagrui.screenshot,
    videoUrl: 'https://user-images.githubusercontent.com/40745490/230927052-362d6bd0-0abe-495d-9cbf-bd2524354e6e.mp4',
  },
]
