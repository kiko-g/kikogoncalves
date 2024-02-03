import { BagrUI } from '@/images/portfolio'
import { Project, ProjectColor } from '@/types'

type ProjectCardColor = {
  background: string
  border: string
  badge: string
  bubble: string
  textHover: string
}

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
    image: BagrUI,
  },
]

export function resolveProjectCardColors(color: ProjectColor): ProjectCardColor {
  switch (color) {
    case 'blue':
      return {
        background: 'bg-sky-600/5 dark:bg-sky-600/5',
        border: 'border-sky-600/30 dark:border-sky-600/50',
        badge: 'bg-sky-600 dark:bg-sky-500',
        bubble: 'bg-sky-600/80 text-white dark:bg-sky-500/50',
        textHover: 'hover:text-sky-600 dark:hover:text-sky-500',
      }
    case 'teal':
      return {
        background: 'bg-teal-600/5 dark:bg-teal-600/5',
        border: 'border-teal-600/30 dark:border-teal-600/50',
        badge: 'bg-teal-600 dark:bg-teal-500',
        bubble: 'bg-teal-600/80 text-white dark:bg-teal-500/50',
        textHover: 'hover:text-teal-600 dark:hover:text-teal-400',
      }
    case 'purple':
      return {
        background: 'bg-violet-600/5 dark:bg-violet-600/5',
        border: 'border-violet-600/30 dark:border-violet-600/50',
        badge: 'bg-violet-600 dark:bg-violet-500',
        bubble: 'bg-violet-600/80 text-white dark:bg-violet-500/50',
        textHover: 'hover:text-violet-600 dark:hover:text-violet-600',
      }
    case 'pink':
      return {
        background: 'bg-pink-600/5 dark:bg-pink-600/5',
        border: 'border-pink-600/30 dark:border-pink-600/50',
        badge: 'bg-pink-600 dark:bg-pink-500',
        bubble: 'bg-pink-600/80 text-white dark:bg-pink-500/50',
        textHover: 'hover:text-pink-600 dark:hover:text-pink-600',
      }
    case 'orange':
      return {
        background: 'bg-orange-600/5 dark:bg-orange-600/5',
        border: 'border-orange-600/30 dark:border-orange-600/50',
        badge: 'bg-orange-500 dark:bg-orange-400',
        bubble: 'bg-orange-500/80 text-white dark:bg-orange-400/50',
        textHover: 'hover:text-orange-600 dark:hover:text-orange-600',
      }
    case 'red':
      return {
        background: 'bg-rose-600/5 dark:bg-rose-600/5',
        border: 'border-rose-600/30 dark:border-rose-600/50',
        badge: 'bg-rose-600 dark:bg-rose-500',
        bubble: 'bg-rose-600/80 text-white dark:bg-rose-500/50',
        textHover: 'hover:text-rose-600 dark:hover:text-rose-600',
      }
    default:
      return {
        border: 'border-navy-300 dark:border-navy-700',
        background: 'bg-navy-100 dark:bg-white/5',
        badge: 'bg-gray-700 dark:bg-gray-400',
        bubble: 'bg-gray-600/80 text-white dark:bg-gray-400/50',
        textHover: 'hover:text-gray-600 dark:hover:text-gray-500',
      }
  }
}
