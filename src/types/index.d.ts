// Home
export interface Skill {
  name: string
  color: string
  experience: string
  score: number
}

export interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

// Projects
export type Technology = {
  freq: number
  name: string
}

export type ProjectColor =
  | 'blue'
  | 'teal'
  | 'purple'
  | 'pink'
  | 'red'
  | 'orange'
  | 'forest'
  | 'indigo'
  | 'amber'
  | 'slate'
  | 'jumpseller'

type Media = {
  type: 'image' | 'video'
  src: StaticImageData | string | null
}
type ISODateString = `${number}-${number}-${number}`
export type Project = {
  name: string
  description: React.ReactNode
  startDate: ISODateString
  endDate: ISODateString | 'present'
  repo: string | null
  deployment: string | null
  color: ProjectColor
  stack: string[]
  media: Media[]
  attachment?: string
  beta?: boolean
  pinned?: boolean
  relevant?: boolean
  feup?: boolean
}

export type ProjectCardColor = {
  background: string
  border: string
  badge: string
  bubble: string
  textHover: string
  ring: string
}
