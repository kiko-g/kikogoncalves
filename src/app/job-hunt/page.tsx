import { type Metadata } from 'next'
import { LayoutSimple } from '@/components/LayoutSimple'
import Link from 'next/link'
import { CopyToClipboard } from '@/components/job-hunt/CopyToClipboard'

export const metadata: Metadata = {
  title: 'Job Hunt',
  description:
    "This is a playground for me to test out different job hunt strategies and tactics. I'll be sharing my progress and learnings here",
}

export default function JobHunt() {
  const jobHuntEntries = [
    {
      company: 'Decipad',
      position: 'Frontend Developer',
      description: (
        <p>
          I’m excited about the opportunity at Decipad because your innovative approach to digital storytelling and data
          visualization aligns perfectly with my interests. The focus on creativity and innovation resonates with me, as
          I love exploring new ways to create user-friendly digital tools. I believe my skills and passion for frontend
          development match the job description well, and I’m confident I can contribute significantly to Decipad&apos;s
          product. You can check out my technical profile and experience in my CV (
          <Link href="kikogoncalves.com/cv.pdf" className="outer-link">
            kikogoncalves.com/cv.pdf
          </Link>
          ) and portfolio (
          <Link href="kikogoncalves.com/projects" className="outer-link">
            kikogoncalves.com/projects
          </Link>
          ), which showcase projects that align well with this opportunity.
        </p>
      ),
      link: 'kikogoncalves.com/cv.pdf',
    },
  ]

  return (
    <LayoutSimple
      title="Job Hunt playground"
      intro="This is a playground for me to test out different job hunt strategies and tactics. I'll be sharing my progress and learnings here."
    >
      {jobHuntEntries.map((jobHuntEntry, jobHuntEntryIdx) => (
        <JobHuntEntry key={jobHuntEntryIdx} {...jobHuntEntry} />
      ))}
    </LayoutSimple>
  )
}

function JobHuntEntry({
  company,
  position,
  description,
  link,
}: {
  company: string
  position: string
  description: React.ReactNode
  link: string
}) {
  return (
    <section className="border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-600/20">
      <div className="flex items-center justify-between gap-2">
        <div className="mb-1.5 flex flex-col">
          <h3 className="flex-1 text-xl font-bold leading-7">{company}</h3>
          <p className="text-sm text-slate-500 dark:text-slate-400">{position}</p>
        </div>
        <CopyToClipboard textTsx={description} />
      </div>
      <div className="max-w-2xl">{description}</div>
    </section>
  )
}
