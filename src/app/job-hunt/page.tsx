import Link from 'next/link'
import { type Metadata } from 'next'
import { LayoutSimple } from '@/components/LayoutSimple'
import { JobHuntEntry } from '@/components/job-hunt/JobHuntEntry'

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
      jobPost: (
        <>
          <h2 className="mb-2 text-xl font-bold">Who you are</h2>
          <ul className="list-disc pl-4">
            <li>Experience in building productivity tools</li>
            <li>Experience developing React and React Native applications</li>
            <li>Knowledge in SaaS billing, management, and APIs</li>
            <li>Understanding of modern JS application packaging</li>
            <li>Worked in open source software before (nice to have)</li>
          </ul>
          <h2 className="mb-2 mt-4 text-xl font-bold">What the job involves</h2>
          <ul className="list-disc pl-4">
            <li>Develop open-source libraries</li>
            <li>Implement rich no-code and low-code interactions alongside our designers</li>
            <li>Work with the product team to make the process of manipulating data super simple for our users</li>
            <li>Craft well-documented, reusable, testable code</li>
            <li>Be responsible for creating a product that is fast, responsive, and accessible</li>
            <li>Be responsive for our Slate.js Notebook Implementation</li>
          </ul>
          <h2 className="mb-2 mt-4 text-xl font-bold">Application process</h2>
          <p>
            Send us your portfolio showcasing your work on complex web applications, along with a few lines explaining
            why you&apos;re excited to join Decipad. Bonus points if you have explored our product (app.decipad.com)
          </p>
        </>
      ),
      application: (
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
