type ISODateString = `${number}-${number}-${number}`
export type ProjectColor = 'blue' | 'teal' | 'purple' | 'pink' | 'red' | 'orange' | 'forest' | 'indigo'

export type Project = {
  relevant?: boolean
  name: string
  description: React.ReactNode
  repo: string
  startDate: ISODateString
  endDate: ISODateString | 'present'
  deployment: string
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
