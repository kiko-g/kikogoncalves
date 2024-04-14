type ISODateString = `${number}-${number}-${number}`
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

export type Project = {
  pinned?: boolean
  relevant?: boolean
  name: string
  description: React.ReactNode
  repo: string | null
  deployment: string | null
  startDate: ISODateString
  endDate: ISODateString | 'present'
  color: ProjectColor
  stack: string[]
  image: StaticImageData | null
  videoUrl: string | null
}

type ProjectCardColor = {
  background: string
  border: string
  badge: string
  bubble: string
  textHover: string
}

export type Skill = {
  name: string
  experience: string
  color: string
}
