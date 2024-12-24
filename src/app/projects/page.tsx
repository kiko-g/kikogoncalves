import React from "react"
import { type Metadata } from "next"

import { LayoutSimple } from "@/components/LayoutSimple"
import { ProjectsShowcase } from "@/components/projects/ProjectsShowcase"

export const metadata: Metadata = {
  title: "Projects",
  description: "Cool things I’ve built across the years trying to leave my mark on this world.",
}

export default function Projects() {
  return (
    <LayoutSimple
      title="Cool things I’ve built across the years trying to leave my mark on this world."
      intro="Here are the projects I've worked on extensively, either solo or with significant contributions. Some are ongoing open-source projects, so if something catches your eye, feel free to explore, contribute, or suggest improvements."
    >
      <ProjectsShowcase />
    </LayoutSimple>
  )
}
