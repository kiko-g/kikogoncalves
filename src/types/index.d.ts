export type ProjectColor = 'blue' | 'teal' | 'purple' | 'pink' | 'red' | 'orange'

export type Project = {
  name: string
  description: React.ReactNode
  repo: string
  datespan: string
  deployment: string
  color: ProjectColor
  stack: string[]
  image: StaticImageData
}
