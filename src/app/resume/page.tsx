import { type Metadata } from "next"
import { LayoutSimple } from "@/components/LayoutSimple"
import { ResumeCanvas } from "@/components/resume/ResumeCanvas"

export const metadata: Metadata = {
  title: "Resume",
  description:
    "My resume, with my work experience, skills, and education with the web format twist. Extra razzledazzle.",
}

export default function Resume() {
  return (
    <LayoutSimple
      title="My resume"
      intro="My resume, with my work experience, skills, and education with the web format twist. Extra razzledazzle."
    >
      {/* <ResumeCanvas /> */}
    </LayoutSimple>
  )
}
