// Home
export interface Skill {
  name: string
  color: string
  experience: string
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

type ISODateString = `${number}-${number}-${number}`
export type Project = {
  pinned?: boolean
  relevant?: boolean
  beta?: boolean
  name: string
  description: React.ReactNode
  attachment?: string
  repo: string | null
  deployment: string | null
  startDate: ISODateString
  endDate: ISODateString | 'present'
  color: ProjectColor
  stack: string[]
  image: StaticImageData | null
  videoUrl: string | null
}

export type ProjectCardColor = {
  background: string
  border: string
  badge: string
  bubble: string
  textHover: string
}
