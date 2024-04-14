import * as React from 'react'
import clsx from 'clsx'
import Link from 'next/link'
import Image, { type ImageProps } from 'next/image'

import { formatDate } from '@/lib/utilities'
import { type ArticleWithSlug, getAllArticles } from '@/lib/articles'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'

import { image1, image2, image3, image4, image5 } from '@/images/photos'
import { logoJumpseller, logoCriticalManufacturing, logoFeup } from '@/images/logos/resume'
import { BriefcaseIcon, MailIcon, ArrowDownIcon } from '@/components/Icons'
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.slug}`}>{article.title}</Card.Title>
      <Card.Eyebrow as="time" dateTime={article.date} decorate>
        {formatDate(article.date)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  )
}

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-navy-500 transition group-hover:fill-primary-500 dark:fill-navy-400 dark:group-hover:fill-white" />
    </Link>
  )
}

function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="bg-navy-25 rounded-2xl border border-navy-100 p-6 dark:border-navy-700/40 dark:bg-white/[3%]"
    >
      <h2 className="flex text-sm font-semibold text-navy-900 dark:text-navy-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-navy-600 dark:text-navy-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-navy-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-navy-800/5 placeholder:text-navy-400 focus:border-primary-500 focus:outline-none focus:ring-4 focus:ring-primary-500/10 dark:border-navy-700 dark:bg-navy-700/[0.15] dark:text-navy-200 dark:placeholder:text-navy-500 dark:focus:border-primary-400 dark:focus:ring-primary-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}

interface Role {
  company: string
  title: string
  logo: ImageProps['src']
  start: string | { label: string; dateTime: string }
  end: string | { label: string; dateTime: string }
}

function Role({ role }: { role: Role }) {
  let startLabel = typeof role.start === 'string' ? role.start : role.start.label
  let startDate = typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-navy-800/5 ring-1 ring-navy-900/5 dark:border dark:border-navy-700/50 dark:bg-transparent dark:ring-0">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium tracking-tighter text-navy-900 dark:text-navy-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-navy-500 dark:text-navy-400">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd className="ml-auto text-xs text-navy-400 dark:text-navy-500" aria-label={`${startLabel} until ${endLabel}`}>
          <time dateTime={startDate}>{startLabel}</time> <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

interface Skill {
  name: string
  color: string
  experience: string
}

function TechSkills() {
  const skills: Skill[] = [
    { name: 'Git', experience: '4y', color: '#f1502f' },
    { name: 'HTML', experience: '4y', color: '#e34c26' },
    { name: 'CSS', experience: '4y', color: '#1572b6' },
    { name: 'JS', experience: '4y', color: '#f7df1e' },
    { name: 'TS', experience: '2.5y', color: '#007acc' },
    { name: 'NodeJS', experience: '3y', color: '#68a063' },
    { name: 'Python', experience: '3y', color: '#3776ab' },
    { name: 'Ruby on Rails', experience: '0.5y', color: '#a01508' },
    { name: 'Rust', experience: '3y', color: '#a0522e' },
    { name: 'Java', experience: '3y', color: '#007396' },
    { name: 'ReactJS', experience: '3y', color: '#61dafb' },
    { name: 'Tailwind', experience: '2y', color: '#38b2ac' },
    { name: 'Next.js', experience: '1.5y', color: '#000000' },
    { name: 'Gatsby.js', experience: '1.5y', color: '#663399' },
    { name: 'Angular', experience: '0.5y', color: '#dd0031' },
    { name: 'PHP', experience: '2y', color: '#4f5b93' },
    { name: 'Laravel', experience: '1y', color: '#ff2d20' },
    { name: 'SQL', experience: '2y', color: '#4479a1' },
    { name: 'Docker', experience: '2y', color: '#2496ed' },
    { name: 'GraphQL', experience: '1y', color: '#e535ab' },
    { name: 'React Native', experience: '0.5y', color: '#61dafb' },
    { name: 'Flutter', experience: '0.5y', color: '#02569b' },
    { name: 'C/C++', experience: '3y', color: '#00599c' },
  ]

  return (
    <div className="bg-navy-25 rounded-2xl border border-navy-100 p-6 dark:border-navy-700/40 dark:bg-white/[3%]">
      <h2 className="flex text-sm font-semibold text-navy-900 dark:text-navy-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Tech Skills</span>
      </h2>

      <ul className="mt-6 flex flex-wrap gap-2">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="flex items-center gap-1 rounded-full px-2 py-0"
            style={{
              border: `1px solid ${skill.color}80`,
              backgroundColor: `${skill.color}20`,
            }}
          >
            <span
              className="h-2 w-2 rounded-full"
              style={{
                backgroundColor: skill.color,
              }}
            />
            <span className="text-xs font-normal tracking-tight">{skill.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Resume() {
  let resume: Array<Role> = [
    {
      company: 'Jumpseller',
      title: 'Fullstack Engineer',
      logo: logoJumpseller,
      start: '10/2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Critical Manufacturing',
      title: 'Software Engineer Intern',
      logo: logoCriticalManufacturing,
      start: '02/2022',
      end: '07/2022',
    },
    {
      company: 'Faculty of Engineering of the University of Porto',
      title: 'Computer Engineering BSc/MSc Student',
      logo: logoFeup,
      start: '09/2018',
      end: '07/2023',
    },
  ]

  return (
    <div className="bg-navy-25 rounded-2xl border border-navy-100 p-6 dark:border-navy-700/40 dark:bg-white/[3%]">
      <h2 className="flex text-sm font-semibold text-navy-900 dark:text-navy-100">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>

      <ol className="mt-6 space-y-6">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>

      <Button target="_blank" href="/cv.pdf" variant="primary" className="group mt-6 w-full">
        Download CV
        <ArrowDownIcon className="h-4 w-4 stroke-navy-400 transition group-active:stroke-navy-600 dark:group-hover:stroke-navy-50 dark:group-active:stroke-navy-50" />
      </Button>
    </div>
  )
}

function Photos() {
  let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']
  let images = [image1, image2, image3, image4, image5]

  return (
    <div className="mt-16 sm:mt-20">
      <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className={clsx(
              'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-navy-100 dark:bg-navy-800 sm:w-72 sm:rounded-2xl',
              rotations[imageIndex % rotations.length],
            )}
          >
            <Image
              src={image}
              alt=""
              sizes="(min-width: 1920px)"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function Home() {
  let articles = (await getAllArticles()).slice(0, 4)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-navy-800 dark:text-navy-100 sm:text-5xl">
            Francisco Gonçalves
          </h1>
          <p className="mt-6 text-base text-navy-600 dark:text-navy-400">
            I’m Francisco, a software engineer based in Porto, Portugal. I am currently working at Jumpseller as a
            full-stack engineer, where we develop a platform for clients to create and deeply customize online stores.
            Parallel to that, I also ocasionally work as a freelancer or solopreneur, developing websites for clients or
            useful cool projects.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://twitter.com/kikogoncalves_"
              target="_blank"
              aria-label="Follow on Twitter"
              icon={TwitterIcon}
            />
            <SocialLink
              href="https://instagram.com/kikogoncalves_"
              target="_blank"
              aria-label="Follow on Instagram"
              icon={InstagramIcon}
            />
            <SocialLink
              href="https://github.com/kiko-g"
              target="_blank"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/kikogoncalves"
              target="_blank"
              icon={LinkedInIcon}
              aria-label="Follow on LinkedIn"
            />
          </div>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <Article key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            <Newsletter />
            <TechSkills />
          </div>
        </div>
      </Container>
    </>
  )
}
