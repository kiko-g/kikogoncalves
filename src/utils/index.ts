import type { ProjectColor, ProjectCardColor } from '@/types'

export function resolveProjectCardColors(color: ProjectColor): ProjectCardColor {
  switch (color) {
    case 'blue':
      return {
        background: 'bg-sky-600/10 dark:bg-sky-600/[12%]',
        border: 'border-sky-600/30 dark:border-sky-600/50',
        badge: 'bg-sky-600 dark:bg-sky-500',
        bubble: 'bg-sky-600/80 text-white dark:bg-sky-500/50',
        textHover: 'hover:text-sky-600 dark:hover:text-sky-300',
      }
    case 'teal':
      return {
        background: 'bg-teal-600/10 dark:bg-teal-600/[12%]',
        border: 'border-teal-600/30 dark:border-teal-600/50',
        badge: 'bg-teal-600 dark:bg-teal-500',
        bubble: 'bg-teal-600/80 text-white dark:bg-teal-500/50',
        textHover: 'hover:text-teal-600 dark:hover:text-teal-400',
      }
    case 'purple':
      return {
        background: 'bg-purple-500/10 dark:bg-purple-400/[12%]',
        border: 'border-purple-500/30 dark:border-purple-400/50',
        badge: 'bg-purple-500 dark:bg-purple-400',
        bubble: 'bg-purple-500/80 text-white dark:bg-purple-400/50',
        textHover: 'hover:text-purple-500 dark:hover:text-purple-400',
      }
    case 'pink':
      return {
        background: 'bg-pink-600/10 dark:bg-pink-600/[12%]',
        border: 'border-pink-600/30 dark:border-pink-600/50',
        badge: 'bg-pink-600 dark:bg-pink-500',
        bubble: 'bg-pink-600/80 text-white dark:bg-pink-500/50',
        textHover: 'hover:text-pink-600 dark:hover:text-pink-600',
      }
    case 'orange':
      return {
        background: 'bg-orange-600/10 dark:bg-orange-600/[12%]',
        border: 'border-orange-600/30 dark:border-orange-600/50',
        badge: 'bg-orange-500 dark:bg-orange-400',
        bubble: 'bg-orange-500/80 text-white dark:bg-orange-400/50',
        textHover: 'hover:text-orange-600 dark:hover:text-orange-600',
      }
    case 'red':
      return {
        background: 'bg-rose-600/10 dark:bg-rose-600/[12%]',
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
