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
        background: 'bg-blue-600/10 dark:bg-blue-600/10',
        border: 'border-blue-600/30 dark:border-blue-600/50',
        badge: 'bg-blue-600 dark:bg-blue-500',
        bubble: 'bg-blue-600/80 text-white dark:bg-blue-500/50',
        textHover: 'hover:text-blue-600 dark:hover:text-blue-300',
      }
    case 'teal':
      return {
        background: 'bg-teal-600/10 dark:bg-teal-600/10',
        border: 'border-teal-600/30 dark:border-teal-600/50',
        badge: 'bg-teal-600 dark:bg-teal-500',
        bubble: 'bg-teal-600/80 text-white dark:bg-teal-500/50',
        textHover: 'hover:text-teal-600 dark:hover:text-teal-400',
      }
    case 'purple':
      return {
        background: 'bg-purple-500/10 dark:bg-purple-400/10',
        border: 'border-purple-500/30 dark:border-purple-400/50',
        badge: 'bg-purple-500 dark:bg-purple-400',
        bubble: 'bg-purple-500/80 text-white dark:bg-purple-400/50',
        textHover: 'hover:text-purple-500 dark:hover:text-purple-400',
      }
    case 'indigo':
      return {
        background: 'bg-indigo-500/10 dark:bg-indigo-400/10',
        border: 'border-indigo-500/30 dark:border-indigo-400/50',
        badge: 'bg-indigo-500 dark:bg-indigo-400',
        bubble: 'bg-indigo-500/80 text-white dark:bg-indigo-400/50',
        textHover: 'hover:text-indigo-500 dark:hover:text-indigo-400',
      }
    case 'pink':
      return {
        background: 'bg-pink-600/10 dark:bg-pink-600/10',
        border: 'border-pink-600/30 dark:border-pink-600/50',
        badge: 'bg-pink-600 dark:bg-pink-500',
        bubble: 'bg-pink-600/80 text-white dark:bg-pink-500/50',
        textHover: 'hover:text-pink-600 dark:hover:text-pink-600',
      }
    case 'orange':
      return {
        background: 'bg-orange-600/10 dark:bg-orange-600/10',
        border: 'border-orange-600/30 dark:border-orange-600/50',
        badge: 'bg-orange-500 dark:bg-orange-400',
        bubble: 'bg-orange-500/80 text-white dark:bg-orange-400/80',
        textHover: 'hover:text-orange-600 dark:hover:text-orange-600',
      }
    case 'amber':
      return {
        background: 'bg-amber-600/10 dark:bg-amber-500/10',
        border: 'border-amber-600/30 dark:border-amber-500/50',
        badge: 'bg-amber-600 dark:bg-amber-500',
        bubble: 'bg-amber-600/80 text-white dark:bg-amber-500/50',
        textHover: 'hover:text-amber-600 dark:hover:text-amber-500',
      }
    case 'red':
      return {
        background: 'bg-red-700/10 dark:bg-red-700/[15%]',
        border: 'border-red-700/30 dark:border-red-700/50',
        badge: 'bg-red-700 dark:bg-red-500',
        bubble: 'bg-red-700/80 text-white dark:bg-red-500/50',
        textHover: 'hover:text-red-700 dark:hover:text-red-700',
      }
    case 'forest':
      return {
        background: 'bg-emerald-700/10 dark:bg-emerald-700/10',
        border: 'border-emerald-700/30 dark:border-emerald-700/50',
        badge: 'bg-emerald-700 dark:bg-emerald-600',
        bubble: 'bg-emerald-700/80 text-white dark:bg-emerald-600/50',
        textHover: 'hover:text-emerald-700 dark:hover:text-emerald-700',
      }
    case 'slate':
    default:
      return {
        border: 'border-slate-300 dark:border-slate-700',
        background: 'bg-slate-100 dark:bg-slate-600/20',
        badge: 'bg-slate-700 dark:bg-slate-400',
        bubble: 'bg-slate-600/80 text-white dark:bg-slate-400/50',
        textHover: 'hover:text-slate-600 dark:hover:text-slate-500',
      }
  }
}
