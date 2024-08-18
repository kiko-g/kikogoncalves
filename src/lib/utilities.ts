import type { ProjectColor, ProjectCardColor, Project, Technology } from '@/types'
import {
  AngularSvg,
  AwsSvg,
  DockerSvg,
  FeupSvg,
  GatsbyJsSvg,
  GraphQlSvg,
  JavascriptSvg,
  JsonSvg,
  MySqlSvg,
  MdxSvg,
  NextJsSvg,
  NodeJsSvg,
  ReactJsSvg,
  RubyOnRailsSvg,
  RubySvg,
  ShopifySvg,
  TailwindSvg,
  TypeScriptSvg,
  MongoDbSvg,
  UnitySvg,
  PythonSvg,
  CSharpSvg,
  JavaSvg,
  HtmlSvg,
  CssSvg,
} from '@/images/tech'

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

export function sortByPinned(a: Project, b: Project): number {
  if (a.pinned && !b.pinned) return -1
  else if (!a.pinned && b.pinned) return 1
  else return sortByRelevancyThenDateDesc(a, b)
}

export function resolveProjectCardColors(color: ProjectColor): ProjectCardColor {
  switch (color) {
    case 'blue':
      return {
        background: 'bg-blue-600/10 dark:bg-blue-600/10',
        border: 'border-blue-600/30 dark:border-blue-600/50',
        badge: 'bg-blue-600 dark:bg-blue-500',
        bubble: 'bg-blue-600/60 text-white dark:bg-blue-500/50',
        textHover: 'hover:text-blue-600 dark:hover:text-blue-300',
        ring: 'ring-1 ring-offset-2 ring-blue-600 dark:ring-blue-500',
      }
    case 'teal':
      return {
        background: 'bg-teal-600/10 dark:bg-teal-600/10',
        border: 'border-teal-600/30 dark:border-teal-600/50',
        badge: 'bg-teal-600 dark:bg-teal-500',
        bubble: 'bg-teal-600/60 text-white dark:bg-teal-500/50',
        textHover: 'hover:text-teal-600 dark:hover:text-teal-400',
        ring: 'ring-1 ring-offset-2 ring-teal-600 dark:ring-teal-500',
      }
    case 'purple':
      return {
        background: 'bg-purple-500/10 dark:bg-purple-400/10',
        border: 'border-purple-500/30 dark:border-purple-400/50',
        badge: 'bg-purple-500 dark:bg-purple-400',
        bubble: 'bg-purple-500/60 text-white dark:bg-purple-400/50',
        textHover: 'hover:text-purple-500 dark:hover:text-purple-400',
        ring: 'ring-1 ring-offset-2 ring-purple-500 dark:ring-purple-400',
      }
    case 'indigo':
      return {
        background: 'bg-indigo-500/10 dark:bg-indigo-400/10',
        border: 'border-indigo-500/30 dark:border-indigo-400/50',
        badge: 'bg-indigo-500 dark:bg-indigo-400',
        bubble: 'bg-indigo-500/60 text-white dark:bg-indigo-400/50',
        textHover: 'hover:text-indigo-500 dark:hover:text-indigo-400',
        ring: 'ring-1 ring-offset-2 ring-indigo-500 dark:ring-indigo-400',
      }
    case 'pink':
      return {
        background: 'bg-pink-600/10 dark:bg-pink-600/10',
        border: 'border-pink-600/30 dark:border-pink-600/50',
        badge: 'bg-pink-600 dark:bg-pink-500',
        bubble: 'bg-pink-600/60 text-white dark:bg-pink-500/50',
        textHover: 'hover:text-pink-600 dark:hover:text-pink-600',
        ring: 'ring-1 ring-offset-2 ring-pink-600 dark:ring-pink-500',
      }
    case 'orange':
      return {
        background: 'bg-orange-600/10 dark:bg-orange-600/10',
        border: 'border-orange-600/30 dark:border-orange-600/50',
        badge: 'bg-orange-500 dark:bg-orange-400',
        bubble: 'bg-orange-500/60 text-white dark:bg-orange-400/70',
        textHover: 'hover:text-orange-600 dark:hover:text-orange-600',
        ring: 'ring-1 ring-offset-2 ring-orange-600 dark:ring-orange-500',
      }
    case 'amber':
      return {
        background: 'bg-amber-600/10 dark:bg-amber-500/10',
        border: 'border-amber-600/30 dark:border-amber-500/50',
        badge: 'bg-amber-600 dark:bg-amber-500',
        bubble: 'bg-amber-600/60 text-white dark:bg-amber-500/50',
        textHover: 'hover:text-amber-600 dark:hover:text-amber-500',
        ring: 'ring-1 ring-offset-2 ring-amber-600 dark:ring-amber-500',
      }
    case 'red':
      return {
        background: 'bg-red-700/10 dark:bg-red-700/[15%]',
        border: 'border-red-700/30 dark:border-red-700/50',
        badge: 'bg-red-700 dark:bg-red-500',
        bubble: 'bg-red-700/60 text-white dark:bg-red-500/50',
        textHover: 'hover:text-red-700 dark:hover:text-red-700',
        ring: 'ring-1 ring-offset-2 ring-red-700 dark:ring-red-500',
      }
    case 'forest':
      return {
        background: 'bg-emerald-700/10 dark:bg-emerald-700/10',
        border: 'border-emerald-700/30 dark:border-emerald-700/50',
        badge: 'bg-emerald-700 dark:bg-emerald-600',
        bubble: 'bg-emerald-700/60 text-white dark:bg-emerald-600/50',
        textHover: 'hover:text-emerald-700 dark:hover:text-emerald-700',
        ring: 'ring-1 ring-offset-2 ring-emerald-700 dark:ring-emerald-600',
      }
    case 'jumpseller':
      return {
        background: 'bg-jumpseller-800/10 dark:bg-jumpseller-800/10',
        border: 'border-jumpseller-800/50 dark:border-jumpseller-800/70',
        badge: 'bg-jumpseller-800 dark:bg-jumpseller-700',
        bubble: 'bg-jumpseller-800/60 text-white dark:bg-jumpseller-700/50',
        textHover: 'hover:text-jumpseller-800 dark:hover:text-jumpseller-800',
        ring: 'ring-1 ring-offset-2 ring-jumpseller-800 dark:ring-jumpseller-700',
      }
    case 'slate':
    default:
      return {
        background: 'bg-slate-100 dark:bg-slate-600/20',
        border: 'border-slate-300 dark:border-slate-700',
        badge: 'bg-slate-700 dark:bg-slate-400',
        bubble: 'bg-slate-600/60 text-white dark:bg-slate-400/50',
        textHover: 'hover:text-slate-600 dark:hover:text-slate-500',
        ring: 'ring-1 ring-offset-2 ring-slate-400 dark:ring-slate-700',
      }
  }
}

export const techStackIcons: Record<string, any> = {
  angular: AngularSvg,
  'aws s3': AwsSvg,
  'c#': CSharpSvg,
  css: CssSvg,
  docker: DockerSvg,
  feup: FeupSvg,
  'gatsby.js': GatsbyJsSvg,
  html: HtmlSvg,
  graphql: GraphQlSvg,
  liquid: ShopifySvg,
  java: JavaSvg,
  javascript: JavascriptSvg,
  json: JsonSvg,
  mdx: MdxSvg,
  'mongo db': MongoDbSvg,
  mysql: MySqlSvg,
  'next.js': NextJsSvg,
  'node.js': NodeJsSvg,
  python: PythonSvg,
  'react.js': ReactJsSvg,
  ruby: RubySvg,
  'ruby on rails': RubyOnRailsSvg,
  tailwind: TailwindSvg,
  typescript: TypeScriptSvg,
  unity: UnitySvg,
}

export function getColorContrast(hex: any) {
  const r = parseInt(hex.substr(1, 2), 16)
  const g = parseInt(hex.substr(3, 2), 16)
  const b = parseInt(hex.substr(5, 2), 16)
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF'
}

export function extractTechStackAndSortByFrequency(projects: Project[]): Technology[] {
  return Object.entries(
    projects
      .flatMap((p) => p.stack)
      .reduce(
        (acc: Record<string, number>, tech) => {
          acc[tech] = (acc[tech] || 0) + 1
          return acc
        },
        {} as Record<string, number>,
      ),
  )
    .map(([name, freq]) => ({ name, freq }))
    .sort((a, b) => b.freq - a.freq)
}

export function formatDate(dateString: string) {
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString('pt-PT', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'GMT',
  })
}

export function calculateAge(dateOfBirth: string = '03-08-1999'): number {
  let [day, month, year] = dateOfBirth.split('-').map(Number) // dd-mm-yyyy
  let today = new Date()
  let birthDate = new Date(year, month - 1, day)
  let age = today.getFullYear() - birthDate.getFullYear()
  let m = today.getMonth() - birthDate.getMonth()

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--

  return age
}
