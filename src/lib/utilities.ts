import {
  AngularSvg,
  AwsSvg,
  CppSvg,
  CSharpSvg,
  CssSvg,
  DockerSvg,
  FeupSvg,
  FlutterSvg,
  GatsbyJsSvg,
  GitSvg,
  GraphQlSvg,
  HtmlSvg,
  JavascriptSvg,
  JavaSvg,
  JsonSvg,
  LaravelSvg,
  MdxSvg,
  MongoDbSvg,
  MySqlSvg,
  NextJsSvg,
  NodeJsSvg,
  PhpSvg,
  PostgresSvg,
  PythonSvg,
  ReactJsSvg,
  ReduxSvg,
  RubyRailsSvg,
  RubySvg,
  RustSvg,
  ShopifySvg,
  SupabaseSvg,
  TailwindSvg,
  TypeScriptSvg,
  UnitySvg,
  VueJsSvg,
} from "@/images/tech"
import type { Project, ProjectCardColor, ProjectColor, Technology } from "@/types"

export function getDatespan(startDate: string, endDate: string | "present"): string {
  const start = new Date(startDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })
  const end =
    endDate === "present"
      ? "Present"
      : new Date(endDate).toLocaleDateString("en-US", { month: "short", year: "numeric" })
  return `${start} - ${end}`
}

export function getStartDate(startDate: string): Date {
  return new Date(startDate)
}

export function getEndDate(endDate: string | "present"): Date | null {
  return endDate === "present" ? new Date() : new Date(endDate)
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
    case "blue":
      return {
        background: "bg-blue-600/10 dark:bg-blue-600/10",
        border: "border-blue-600/30 dark:border-blue-600/50",
        badge: "bg-blue-600 dark:bg-blue-500",
        bubble: "bg-blue-600/60 text-white dark:bg-blue-500/30",
        textHover: "hover:text-blue-600 dark:hover:text-blue-300",
        ring: "ring-1 ring-offset-2 ring-blue-600 dark:ring-blue-500",
      }
    case "teal":
      return {
        background: "bg-teal-600/10 dark:bg-teal-600/10",
        border: "border-teal-600/30 dark:border-teal-600/50",
        badge: "bg-teal-600 dark:bg-teal-500",
        bubble: "bg-teal-800/50 text-white dark:bg-teal-600/30",
        textHover: "hover:text-teal-600 dark:hover:text-teal-400",
        ring: "ring-1 ring-offset-2 ring-teal-600 dark:ring-teal-500",
      }
    case "purple":
      return {
        background: "bg-purple-600/10 dark:bg-purple-400/10",
        border: "border-purple-600/30 dark:border-purple-400/50",
        badge: "bg-purple-600 dark:bg-purple-400",
        bubble: "bg-purple-700/40 text-white dark:bg-purple-400/30",
        textHover: "hover:text-purple-600 dark:hover:text-purple-400",
        ring: "ring-1 ring-offset-2 ring-purple-600 dark:ring-purple-400",
      }
    case "indigo":
      return {
        background: "bg-indigo-500/10 dark:bg-indigo-400/10",
        border: "border-indigo-500/30 dark:border-indigo-400/50",
        badge: "bg-indigo-500 dark:bg-indigo-400",
        bubble: "bg-indigo-500/60 text-white dark:bg-indigo-400/30",
        textHover: "hover:text-indigo-500 dark:hover:text-indigo-400",
        ring: "ring-1 ring-offset-2 ring-indigo-500 dark:ring-indigo-400",
      }
    case "pink":
      return {
        background: "bg-pink-600/10 dark:bg-pink-600/10",
        border: "border-pink-600/30 dark:border-pink-600/50",
        badge: "bg-pink-600 dark:bg-pink-500",
        bubble: "bg-pink-600/60 text-white dark:bg-pink-500/50",
        textHover: "hover:text-pink-600 dark:hover:text-pink-600",
        ring: "ring-1 ring-offset-2 ring-pink-600 dark:ring-pink-500",
      }
    case "orange":
      return {
        background: "bg-orange-600/10 dark:bg-orange-600/10",
        border: "border-orange-600/30 dark:border-orange-600/50",
        badge: "bg-orange-500 dark:bg-orange-400",
        bubble: "bg-orange-500/60 text-white dark:bg-orange-400/30",
        textHover: "hover:text-orange-600 dark:hover:text-orange-600",
        ring: "ring-1 ring-offset-2 ring-orange-600 dark:ring-orange-500",
      }
    case "amber":
      return {
        background: "bg-amber-600/10 dark:bg-amber-500/10",
        border: "border-amber-600/30 dark:border-amber-500/50",
        badge: "bg-amber-600 dark:bg-amber-500",
        bubble: "bg-amber-600/60 text-white dark:bg-amber-500/30",
        textHover: "hover:text-amber-600 dark:hover:text-amber-500",
        ring: "ring-1 ring-offset-2 ring-amber-600 dark:ring-amber-500",
      }
    case "red":
      return {
        background: "bg-red-600/10 dark:bg-red-600/20",
        border: "border-red-600/30 dark:border-red-600/50",
        badge: "bg-red-600 dark:bg-red-500",
        bubble: "bg-red-600/60 text-white dark:bg-red-600/40",
        textHover: "hover:text-red-600 dark:hover:text-red-600",
        ring: "ring-1 ring-offset-2 ring-red-600 dark:ring-red-500",
      }
    case "rose":
      return {
        background: "bg-rose-700/10 dark:bg-rose-600/10",
        border: "border-rose-700/30 dark:border-rose-600/50",
        badge: "bg-rose-700 dark:bg-rose-600",
        bubble: "bg-rose-700/60 text-white dark:bg-rose-600/40",
        textHover: "hover:text-rose-700 dark:hover:text-rose-600",
        ring: "ring-1 ring-offset-2 ring-rose-700 dark:ring-rose-600",
      }
    case "forest":
      return {
        background: "bg-emerald-700/10 dark:bg-emerald-700/10",
        border: "border-emerald-700/30 dark:border-emerald-700/50",
        badge: "bg-emerald-700 dark:bg-emerald-600",
        bubble: "bg-emerald-700/60 text-white dark:bg-emerald-600/30",
        textHover: "hover:text-emerald-700 dark:hover:text-emerald-700",
        ring: "ring-1 ring-offset-2 ring-emerald-700 dark:ring-emerald-600",
      }
    case "jumpseller":
      return {
        background: "bg-lime-800/10 dark:bg-lime-800/10",
        border: "border-lime-800/50 dark:border-lime-800/70",
        badge: "bg-lime-800 dark:bg-lime-700",
        bubble: "bg-lime-800/60 text-white dark:bg-lime-700/30",
        textHover: "hover:text-lime-800 dark:hover:text-lime-800",
        ring: "ring-1 ring-offset-2 ring-lime-800 dark:ring-lime-700",
      }
    case "highlight":
      return {
        background: "bg-gradient-to-br from-zinc-50 to-zinc-200 dark:from-zinc-100/20 dark:to-zinc-50/10",
        border: "border-zinc-500/10 dark:border-zinc-400/10",
        badge: "bg-zinc-700 dark:bg-zinc-300",
        bubble: "bg-zinc-900/70 text-white dark:bg-zinc-900/80",
        textHover: "hover:text-zinc-700 dark:hover:text-zinc-300",
        ring: "ring-1 ring-offset-2 ring-zinc-400 dark:ring-zinc-300",
      }
    case "slate":
    default:
      return {
        background: "bg-slate-100 dark:bg-slate-600/20",
        border: "border-slate-300 dark:border-slate-700",
        badge: "bg-slate-700 dark:bg-slate-400",
        bubble: "bg-slate-600/60 text-white dark:bg-slate-400/30",
        textHover: "hover:text-slate-600 dark:hover:text-slate-500",
        ring: "ring-1 ring-offset-2 ring-slate-400 dark:ring-slate-700",
      }
  }
}

export const techStackIcons: Record<string, any> = {
  angular: AngularSvg,
  "aws s3": AwsSvg,
  "c#": CSharpSvg,
  "c/c++": CppSvg,
  css: CssSvg,
  docker: DockerSvg,
  feup: FeupSvg,
  flutter: FlutterSvg,
  "gatsby.js": GatsbyJsSvg,
  git: GitSvg,
  graphql: GraphQlSvg,
  html: HtmlSvg,
  java: JavaSvg,
  javascript: JavascriptSvg,
  json: JsonSvg,
  laravel: LaravelSvg,
  liquid: ShopifySvg,
  mdx: MdxSvg,
  "mongo db": MongoDbSvg,
  sql: MySqlSvg,
  supabase: SupabaseSvg,
  "next.js": NextJsSvg,
  "node.js": NodeJsSvg,
  php: PhpSvg,
  python: PythonSvg,
  postgresql: PostgresSvg,
  "react.js": ReactJsSvg,
  "react native": ReactJsSvg,
  redux: ReduxSvg,
  ruby: RubySvg,
  "ruby on rails": RubyRailsSvg,
  rust: RustSvg,
  tailwind: TailwindSvg,
  typescript: TypeScriptSvg,
  unity: UnitySvg,
  "vue.js": VueJsSvg,
}

export function getColorContrast(hex: any) {
  const r = parseInt(hex.substr(1, 2), 16)
  const g = parseInt(hex.substr(3, 2), 16)
  const b = parseInt(hex.substr(5, 2), 16)
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF"
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
  return new Date(`${dateString}T00:00:00Z`).toLocaleDateString("pt-PT", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "GMT",
  })
}

export function calculateAge(dateOfBirth: string = "03-08-1999"): number {
  let [day, month, year] = dateOfBirth.split("-").map(Number) // dd-mm-yyyy
  let today = new Date()
  let birthDate = new Date(year, month - 1, day)
  let age = today.getFullYear() - birthDate.getFullYear()
  let m = today.getMonth() - birthDate.getMonth()

  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) age--

  return age
}

export function clamp(number: number, a: number, b: number) {
  let min = Math.min(a, b)
  let max = Math.max(a, b)
  return Math.min(Math.max(number, min), max)
}
