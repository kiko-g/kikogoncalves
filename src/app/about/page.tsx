import clsx from 'clsx'
import Link from 'next/link'
import Image from 'next/image'
import { type Metadata } from 'next'
import { calculateAge } from '@/lib/utilities'

import portraitImage from '@/images/portrait.jpg'
import { Container } from '@/components/Container'
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'
import { EnvelopeIcon } from '@heroicons/react/24/solid'

export const metadata: Metadata = {
  title: 'About',
  description: 'I’m Francisco Gonçalves. I live in Porto, Portugal where I cook up cool software projects.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              className="aspect-square rotate-3 rounded-2xl bg-navy-100 object-cover dark:bg-navy-800"
            />
          </div>
        </div>

        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-navy-800 dark:text-navy-100 sm:text-5xl">
            I’m Francisco. I live in Porto, Portugal where I’m busy crafting cool software projects.
          </h1>
          <div className="mt-6 space-y-7 text-base text-navy-600 dark:text-navy-400">
            <p>
              I’m a {calculateAge()} year old Software Engineer based in Porto. I have a Masters Degree in Informatics
              and Computer Engineering, from FEUP, the Factulty of Engineering of the University of Porto (
              <Link
                className="outer-link"
                href="https://sigarra.up.pt/feup/en/cur_geral.cur_planos_estudos_view?pv_plano_id=31204&pv_tipo_cur_sigla=&pv_origem=CUR&pv_ano_lectivo=2023"
                target="_blank"
              >
                FEUP-MEIC
              </Link>
              ).
            </p>
            <p>
              I have a great passion for software engineering as a whole with a special interest in frontend development
              and data science. On the more personal side of things, I would describe myself as a passionate person, who
              believes in getting better every day and finding zeal in things.
            </p>
            <p>
              I’m big on music, gaming, football, and pretty much anything media-related. When I’m not caught up in
              that, I’m usually running, hanging out with friends, playing guitar, gaming, coding something cool, or
              hitting the gym to stay in shape.
            </p>
            <p>
              My preferred and best technologies are <strong>React.js</strong>, <strong>Javascript</strong>,{' '}
              <strong>Typescript</strong>, <strong>Next.js</strong> and <strong>Tailwind</strong>. If you’re interested
              in my profile reach me on LinkedIn, as I’m always interested in hearing about opportunities for a frontend
              or full-stack position, preferably using React with Typescript!
            </p>
          </div>
        </div>

        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/kikogoncalves_" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://instagram.com/kikogoncalves_" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/kiko-g" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://linkedin.com/in/kikogoncalves" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:kikojpgoncalves@gmail.com"
              icon={EnvelopeIcon}
              className="mt-8 border-t border-navy-100 pt-8 dark:border-navy-700/40"
            >
              kikogoncalves@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>

      <div></div>
    </Container>
  )
}

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        target="_blank"
        className="group flex text-sm font-medium text-navy-800 transition hover:text-primary-500 dark:text-navy-200 dark:hover:text-primary-500"
      >
        <Icon className="h-6 w-6 flex-none fill-navy-500 transition group-hover:fill-primary-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}
