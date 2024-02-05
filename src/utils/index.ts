import type { ProjectColor, ProjectCardColor, Project } from '@/types'

export function getDatespan(startDate: string, endDate: string | 'present'): string {
  const start = new Date(startDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  const end =
    endDate === 'present'
      ? 'Present'
      : new Date(endDate).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })
  return `${start} - ${end}`
}

export function getStartDate(startDate: string): Date {
  return new Date(startDate)
}

export function getEndDate(endDate: string | 'present'): Date | null {
  return endDate === 'present' ? new Date() : new Date(endDate)
}

export function sortByRelevancyThenDateDesc(a: Project, b: Project): number {
  if (a.relevant && !b.relevant) return -1
  else if (!a.relevant && b.relevant) return 1
  else return getStartDate(b.startDate).getTime() - getStartDate(a.startDate).getTime()
}

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
    case 'indigo':
      return {
        background: 'bg-indigo-500/10 dark:bg-indigo-400/[12%]',
        border: 'border-indigo-500/30 dark:border-indigo-400/50',
        badge: 'bg-indigo-500 dark:bg-indigo-400',
        bubble: 'bg-indigo-500/80 text-white dark:bg-indigo-400/50',
        textHover: 'hover:text-indigo-500 dark:hover:text-indigo-400',
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
        background: 'bg-emerald-700/10 dark:bg-emerald-700/[12%]',
        border: 'border-emerald-700/30 dark:border-emerald-700/50',
        badge: 'bg-emerald-700 dark:bg-rose-500',
        bubble: 'bg-emerald-700/80 text-white dark:bg-rose-500/50',
        textHover: 'hover:text-emerald-700 dark:hover:text-emerald-700',
      }
    case 'forest':
      return {
        background: 'bg-emerald-700/10 dark:bg-emerald-700/[12%]',
        border: 'border-emerald-700/30 dark:border-emerald-700/50',
        badge: 'bg-emerald-700 dark:bg-emerald-600',
        bubble: 'bg-emerald-700/80 text-white dark:bg-emerald-600/50',
        textHover: 'hover:text-emerald-700 dark:hover:text-emerald-700',
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
