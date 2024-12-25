import Image from "next/image"
import { type Role } from "@/types"
import { Button } from "@/components/ui/button"
import { logoJumpseller, logoCriticalManufacturing, logoFeup } from "@/images/logos/resume"
import { ArrowDownIcon, BriefcaseBusinessIcon } from "lucide-react"
import Link from "next/link"

export function Resume() {
  let resume: Array<Role> = [
    {
      company: "Jumpseller",
      title: "Fullstack Engineer",
      logo: logoJumpseller,
      start: "10/2023",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: "Critical Manufacturing",
      title: "Software Engineer Intern",
      logo: logoCriticalManufacturing,
      start: "01/2023",
      end: "07/2023",
    },
    {
      company: "Faculty of Engineering of the University of Porto",
      title: "Computer Engineering BSc/MSc Student",
      logo: logoFeup,
      start: "09/2018",
      end: "07/2023",
    },
  ]

  return (
    <div className="rounded-2xl border border-zinc-100 bg-zinc-25 p-6 dark:border-zinc-700/40 dark:bg-white/[3%]">
      <h2 className="flex items-center gap-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <BriefcaseBusinessIcon className="size-5 flex-none" />
        <span>Work</span>
      </h2>

      <ol className="mt-6 space-y-6">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>

      <Button variant="default" asChild className="mt-6 w-full">
        <Link href="/cv.pdf" target="_blank">
          <span>Download CV</span>
          <ArrowDownIcon />
        </Link>
      </Button>
    </div>
  )
}

function Role({ role }: { role: Role }) {
  let startLabel = typeof role.start === "string" ? role.start : role.start.label
  let startDate = typeof role.start === "string" ? role.start : role.start.dateTime

  let endLabel = typeof role.end === "string" ? role.end : role.end.label
  let endDate = typeof role.end === "string" ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white p-[1px] shadow-md ring-1 ring-zinc-900/5 dark:border dark:border-zinc-500/40 dark:bg-white/10 dark:ring-0">
        <Image src={role.logo} alt="" className="h-8 w-8" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium tracking-tighter text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-zinc-400 dark:text-zinc-500" aria-label={`${startLabel} until ${endLabel}`}>
          <time dateTime={startDate}>{startLabel}</time> <span aria-hidden="true">—</span>{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}
