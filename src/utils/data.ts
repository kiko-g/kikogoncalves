import { media } from '@/images/portfolio'
import type { Project } from '@/types'

export const projectsData: Project[] = [
  {
    relevant: true,
    name: 'Bagr UI',
    description:
      'Long stash of reusable and customizable React TSX components stashed from many projects. Inspired by RadixUI, HeadlessUI and TailwindUI.',
    startDate: '2023-07-17',
    endDate: 'present',
    repo: 'https://github.com/kiko-g/bagr-ui',
    deployment: 'https://bagr-ui.vercel.app',
    color: 'teal',
    stack: ['React.js', 'Next.js', 'Typescript', 'Tailwind'],
    image: media.bagrui.screenshot,
    videoUrl: null,
  },
  {
    relevant: true,
    name: "Analytics and Usability Dashboard for CMF's MES",
    description:
      "Dashboard with custom insights for components inside Critical Manufacturing's MES, an application used for managing industrial shop floors. The dashboard aims to identify user behavior patterns and improve usability based on evidence collected over time.",
    startDate: '2023-02-06',
    endDate: '2023-07-01',
    repo: 'https://github.com/kiko-g/usability-dashboard-mes',
    deployment: 'https://usability-dashboard-mes.vercel.app',
    color: 'blue',
    stack: ['React.js', 'Next.js', 'Typescript', 'Tailwind', 'Angular', 'Docker', 'Matomo', 'MySQL'],
    image: null,
    videoUrl: 'https://user-images.githubusercontent.com/40745490/246076879-659c8170-4f10-42ec-a67f-03f66dc2e3e7.mp4',
  },
  {
    relevant: true,
    name: 'Finishers Hub',
    description:
      'The place for all finisher related content: chaotic, outrageous, lawless on the fence of criminality. Perfectly unbalanced. As all things should be. The most amusing and most personal project I have ever worked on.',
    startDate: '2022-05-01',
    endDate: '2023-08-01',
    repo: 'https://github.com/kiko-g/finishershub',
    deployment: 'https://finishershub.vercel.app',
    color: 'indigo',
    stack: ['React.js', 'Next.js', 'Typescript', 'Tailwind', 'AWS S3', 'Mongo DB'],
    image: null,
    videoUrl: 'https://user-images.githubusercontent.com/40745490/230927052-362d6bd0-0abe-495d-9cbf-bd2524354e6e.mp4',
  },
  {
    relevant: true,
    name: 'Guerner & Irmãos Website',
    startDate: '2023-01-15',
    endDate: '2023-09-28',
    description:
      'Website for Guerner & Irmãos, a textiles, technical fabrics, and building materials company, showcasing their products, mission, history and values.',
    color: 'orange',
    stack: ['React.js', 'Typescript', 'Tailwind', 'Gatsby.js', 'MDX', 'GraphQL'],
    repo: 'https://github.com/kiko-g/guerner',
    deployment: 'https://guerner.vercel.app',
    image: media.guerner.screenshot,
    videoUrl: null,
  },
  {
    relevant: false,
    name: 'Rushing B (2D Game)',
    startDate: '2023-01-15',
    endDate: '2023-09-28',
    description:
      "Endless scroller computer game where a student races across FEUP's main hall trying to get to class on time. On their way, they will face many different kinds of enemies and power-ups which will aid them in their journey.",
    color: 'forest',
    stack: ['Unity', 'C#'],
    repo: 'https://github.com/kiko-g/rushing-b',
    deployment: 'https://guerner.vercel.app',
    image: null,
    videoUrl: 'https://github.com/kiko-g/rushing-b/assets/40745490/ee78a378-a3bd-41aa-b120-aa0496f6abad',
  },
]
