import { cn } from "@/lib/utils"
import Link from "next/link"
import Image from "next/image"
import { type Metadata } from "next"

import { skills } from "@/lib/data"
import { calculateAge, techStackIcons } from "@/lib/utilities"

import portraitImage from "@/images/portrait.jpg"
import { logoJumpseller } from "@/images/logos/resume"
import { image0, image1, image2, image3, image4, image5 } from "@/images/photos"

import { Container } from "@/components/Container"
import { LinkedinLogoLink } from "@/components/about/LinkedinLogoLink"
import { CriticalLogoLink } from "@/components/about/CriticalLogoLink"
import { SectionHeading } from "@/components/SectionHeading"

import { MailIcon } from "lucide-react"
import { JumpsellerLogoLink } from "@/components/about/JumpsellerLogoLink"
import { GithubIcon, InstagramIcon, LinkedinIcon, XTwitterIcon } from "@/components/icons"
import { FeupLogoLink } from "@/components/about/FeupLogoLink"
import { Button } from "@/components/ui/button"
import { TweetCard } from "@/components/Twitter"
import { ExternalResource } from "@/components/ExternalResource"

export const metadata: Metadata = {
  title: "About",
  description: "I’m Francisco Gonçalves. I live in Porto, Portugal where I cook up cool software projects.",
}

export default function About() {
  return (
    <Container className="mt-12 sm:mt-20">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>

        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Hey, I’m Francisco — building cool software from Porto, Portugal.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-700 dark:text-zinc-400">
            <p>
              My name is Francisco Gonçalves. I’m a {calculateAge()} software engineer based in Porto. I hold a Master’s
              degree in Computer Science and Engineering from{" "}
              <ExternalResource href="https://sigarra.up.pt/feup/en/cur_geral.cur_planos_estudos_view?pv_plano_id=31204&pv_tipo_cur_sigla=&pv_origem=CUR&pv_ano_lectivo=2023">
                FEUP
              </ExternalResource>{" "}
              — the Faculty of Engineering at the University of Porto.
            </p>
            <p>
              I enjoy all things software, with a strong focus on full-stack web development. Currently, I’m working at{" "}
              <ExternalResource href="https://jumpseller.com" useIcon={false}>
                <span>Jumpseller</span>
                <Image src={logoJumpseller} alt="Jumpseller" width={16} height={16} />
              </ExternalResource>
              , where I help build and improve storefront themes under our e-commerce platform, which is equipped with
              tools like a Visual and Code Editors that power store customization.
            </p>
            <p>
              Beyond work, I’ve launched indie projects like{" "}
              <ExternalResource href="https://price-lens.vercel.app">Price Lens</ExternalResource> and{" "}
              <ExternalResource href="https://bagger-ui.vercel.app">Bagger UI</ExternalResource> — blending my interests
              and packing them into hopefully useful tools. I’m always open to chatting about new opportunities, so feel
              free to connect with me on{" "}
              <ExternalResource href="https://linkedin.com/in/kikogoncalves">LinkedIn</ExternalResource>.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-start gap-3 lg:pl-20">
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://twitter.com/kikogoncalves_" target="_blank" rel="noopener noreferrer">
              <XTwitterIcon />
              <span className="ml-2 text-sm font-medium">Follow on Twitter</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://instagram.com/kikogoncalves_" target="_blank" rel="noopener noreferrer">
              <InstagramIcon />
              <span className="ml-2 text-sm font-medium">Follow on Instagram</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://github.com/kiko-g" target="_blank" rel="noopener noreferrer">
              <GithubIcon />
              <span className="ml-2 text-sm font-medium">Follow on GitHub</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="https://linkedin.com/in/kikogoncalves" target="_blank" rel="noopener noreferrer">
              <LinkedinIcon />
              <span className="ml-2 text-sm font-medium">Follow on LinkedIn</span>
            </Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="mailto:kikojpgoncalves@gmail.com" target="_blank" rel="noopener noreferrer">
              <MailIcon />
              <span className="ml-2 text-sm font-medium">kikogoncalves@gmail.com</span>
            </Link>
          </Button>
        </div>
      </div>

      <Skillset />
      <CurriculumVitae />
    </Container>
  )
}

function Skillset({ useProgressBarColor = true }) {
  return (
    <section id="skillset" className="mt-6 pt-12 sm:mt-12">
      <SectionHeading noMargin slideTo="skillset">
        Skillset
      </SectionHeading>
      <p className="mb-8 text-base text-zinc-600 dark:text-zinc-400">
        Here’s a breakdown of my skills and experience in the tech field. I’m always learning new things and
        experimenting with new technologies, so this list is always changing. The progress bars are a rough estimate of
        my experience and familiriaty with each technology.
      </p>
      <ul className="grid grid-cols-3 gap-4 md:grid-cols-3 md:gap-5 lg:grid-cols-4 lg:gap-6 xl:grid-cols-5 xl:gap-6">
        {skills.map((skill, skillIdx) => {
          const techIcon = techStackIcons[skill.name.toLowerCase()]
          return (
            <li key={`skill-${skillIdx}`} title={`${skill.name}: ${skill.score}%`} className="flex flex-col gap-1.5">
              <div className="flex items-center justify-between gap-1">
                <div className="mb-0 flex w-full items-center gap-1">
                  {techIcon ? (
                    <Image
                      src={techIcon}
                      alt={skill.name}
                      width={13}
                      height={13}
                      className="size-[13px] rounded-[2px]"
                    />
                  ) : (
                    <span className="block size-2 rounded-full" style={{ backgroundColor: skill.color }}></span>
                  )}
                  <span className="text-xs font-medium leading-none tracking-tight text-zinc-600 dark:text-zinc-300">
                    {skill.name}
                  </span>
                </div>
              </div>

              <div className="relative h-3.5 w-full overflow-hidden rounded-sm bg-zinc-200 dark:bg-white/5">
                <div
                  className="bg-skillbar h-full rounded-sm"
                  style={
                    {
                      width: `${skill.score}%`,

                      ...(useProgressBarColor
                        ? {
                            border: `1px solid ${skill.color}b0`,
                            "--color-start": `${skill.color}b0`,
                            "--color-mid": `${skill.color}a0`,
                            "--color-end": `${skill.color}90`,
                          }
                        : { border: `1px solid #232830`, backgroundColor: "#3b404b" }),
                    } as React.CSSProperties
                  }
                />
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}

function CurriculumVitae() {
  return (
    <section id="cv" className="mt-6 pt-12 sm:mt-12">
      <SectionHeading noMargin slideTo="curriculum">
        Curriculum
      </SectionHeading>
      <p className="mb-8 text-base text-zinc-600 dark:text-zinc-400">
        Here’s a brief overview of my professional experience and education. I’m always looking for new opportunities
        and challenges, so feel free to reach out if you think I’d be a good fit for your team.
      </p>

      {/* Languages */}
      <div className="mt-6 border-t border-zinc-200 pt-8 dark:border-zinc-700/80 sm:mt-12">
        <h4 className="mb-1 flex-1 text-xl font-bold leading-7 text-zinc-700 dark:text-zinc-200 sm:text-2xl">
          Languages
        </h4>
        <p className="mb-2 text-base text-zinc-600 dark:text-zinc-400">
          Here are the languages I speak and my proficiency level in each.
        </p>

        <ul className="ml-1 mt-1 text-sm text-zinc-600 dark:text-zinc-300">
          <li>
            <strong>🇵🇹 Portuguese</strong>: Native
          </li>
          <li>
            <strong>🇬🇧 English</strong>: Proficient, C1 Level, CAE 2016
          </li>
          <li>
            <strong>🇪🇸 Spanish</strong>: Intermediate Understanding
          </li>
          <li>
            <strong>🇫🇷 French</strong>: Basic Understanding
          </li>
        </ul>
      </div>

      {/* Education */}
      <div className="mt-6 border-t border-zinc-200 pt-8 dark:border-zinc-700/80 sm:mt-12">
        <h4 className="mb-1 flex-1 text-xl font-bold leading-7 text-zinc-700 dark:text-zinc-200 sm:text-2xl">
          Education
        </h4>
        <h5 className="mb-0 flex-1 text-base font-bold leading-7 text-zinc-700 dark:text-zinc-200 sm:text-lg">
          Faculty of Engineering of the University of Porto
        </h5>
        <p className="flex items-center gap-1 text-base font-normal text-zinc-700 dark:text-zinc-200">
          <Link
            target="_blank"
            href="https://sigarra.up.pt/feup/en/cur_geral.cur_planos_estudos_view?pv_plano_id=31224&pv_tipo_cur_sigla=&pv_origem=CUR&pv_ano_lectivo=2023"
            className="external-link"
          >
            Bachelor
          </Link>{" "}
          and{" "}
          <Link
            target="_blank"
            href="https://sigarra.up.pt/feup/en/cur_geral.cur_planos_estudos_view?pv_plano_id=31204&pv_tipo_cur_sigla=&pv_origem=CUR&pv_ano_lectivo=2023"
            className="external-link"
          >
            Master
          </Link>{" "}
          in Informatics and Computer Engineering
          <FeupLogoLink />
        </p>

        <ul className="ml-4 mt-1 list-disc text-sm text-zinc-600 dark:text-zinc-300">
          <li>Completed both the bachelor and master degrees, finishing the masters’ averaging 18/20.</li>
          <li>
            Member of <strong>NIAEFEUP</strong>, the Student Branch of the Computer Engineering and Informatics
            Association of the University of Porto. Active participant in relevant projects of the association like the{" "}
            <ExternalResource href="https://tts.niaefeup.pt">Timetable Selector</ExternalResource>
          </li>
          <li>
            Relevant <strong>bachelor coursework</strong>: Web App Development, Algorithms and Data Structures,
            Databases, Artificial Intelligence.
          </li>
          <li>
            Relevant <strong>master coursework</strong>: Full Stack Development, IOT factory management, AI Assistant
            Web Navigator, P2P Timeline, Semantic Web App Development.
          </li>
        </ul>
      </div>

      {/* Experience */}
      <div className="mt-6 border-t border-zinc-200 pt-8 dark:border-zinc-700/80 sm:mt-12">
        <h4 className="mb-1 flex-1 text-xl font-bold leading-7 text-zinc-700 dark:text-zinc-200 sm:text-2xl">
          Professional Experience
        </h4>

        <ul className="flex flex-col gap-y-8">
          {/* Jumpseller */}
          <li>
            <h5 className="mb-0 flex flex-1 items-center gap-1 text-base font-bold leading-7 text-zinc-700 dark:text-zinc-200 sm:text-lg">
              <span>Jumpseller</span>
              <JumpsellerLogoLink />
              <LinkedinLogoLink href="https://www.linkedin.com/company/jumpseller/" className="mt-[3px]" />
            </h5>
            <p className="text-base font-normal text-zinc-700 dark:text-zinc-200">Full-stack Engineer</p>

            <ul className="ml-4 mt-1 list-disc text-sm text-zinc-600 dark:text-zinc-300">
              <li>Contributed and developed customizable e-commerce storefront themes.</li>
              <li>
                Developed and improved both a Visual Editor and Code Editor for Jumpseller customers to deeply
                personalize their stores.
              </li>
              <li>
                Streamlined storefront theme implementation by consolidating themes into a centralized base theme with
                extensive customizable JSON options, significantly improving maintainability and enabling faster
                customization.
              </li>
            </ul>
          </li>

          {/* Critical Manufacturing */}
          <li>
            <h5 className="mb-0 flex flex-1 items-center gap-1 text-base font-bold leading-7 text-zinc-700 dark:text-zinc-200 sm:text-lg">
              <span>Critical Manufacturing</span>
              <CriticalLogoLink />
              <LinkedinLogoLink href="https://www.linkedin.com/company/critical-manufacturing/" />
            </h5>
            <p className="text-base font-normal text-zinc-700 dark:text-zinc-200">Software Engineer Intern</p>
            <ul className="ml-4 mt-1 list-disc text-sm text-zinc-600 dark:text-zinc-300">
              <li>
                Interned at Critical Manufacturing as a part of product development team. Work focused on collecting web
                analytics and usability metrics for Critical’s Manufacturing Execution System (MES) aiming to improve
                UI/UX. Dashboard preview{" "}
                <Link
                  href="https://usability-dashboard-mes.vercel.app/wizards"
                  className="external-link"
                  target="_blank"
                >
                  deployed here
                </Link>
                .
              </li>
              <li>
                Developed a custom dashboard for usability metrics in Critical MES, offering insights for its
                components. The dashboard democratizes the UX improvement process by scoring components and highlighting
                key metrics within them. Wrote a dissertation around this topic{" "}
                <Link href="https://kikogoncalves.com/dissertation.pdf" className="external-link" target="_blank">
                  available here
                </Link>
                .
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </section>
  )
}

function Moments() {
  return (
    <section id="moments" className="mt-6 pt-12 sm:mt-12">
      <SectionHeading noMargin slideTo="moments">
        Moments
      </SectionHeading>
      <p className="mb-8 text-base text-zinc-600 dark:text-zinc-400">Highlights of exquisite yapping tendencies</p>

      <div className="grid grid-cols-2 gap-4">
        <TweetCard id="1876986582739062807" />
        <TweetCard id="1886775379852931413" />
      </div>
    </section>
  )
}

function Photos() {
  let images = [image0, image1, image2, image3, image4, image5]

  return (
    <section id="photos" className="mt-6 pt-12 sm:mt-12">
      <SectionHeading noMargin slideTo="photos">
        Photos
      </SectionHeading>
      <p className="mb-8 text-base text-zinc-600 dark:text-zinc-400">Some of my favorite personal photos.</p>
      <div className="-my-4 grid grid-cols-2 gap-4 py-4 lg:grid-cols-3 lg:gap-8">
        {images.map((image) => (
          <div
            key={image.src}
            className="relative aspect-square w-full flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800"
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
    </section>
  )
}

function PhotosAlt() {
  let rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"]
  let images = [image1, image2, image3, image4, image5]

  return (
    <section id="photos" className="mt-6 overflow-hidden pt-12 sm:mt-12">
      <SectionHeading noMargin slideTo="photos">
        Photos
      </SectionHeading>
      <p className="mb-8 text-base text-zinc-600 dark:text-zinc-400">Some of my favorite personal photos.</p>
      <div className="-my-4 flex justify-center gap-5 overflow-visible py-4 sm:gap-8">
        {images.map((image, imageIndex) => (
          <div
            key={image.src}
            className={cn(
              "relative aspect-[8/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:aspect-[9/10] sm:w-72 sm:rounded-2xl",
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
    </section>
  )
}
