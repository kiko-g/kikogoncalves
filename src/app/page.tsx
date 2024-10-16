import * as React from 'react'
import { getAllArticles } from '@/lib/articles'
import { Container } from '@/components/Container'
import { Resume } from '@/components/home/Resume'
import { Newsletter } from '@/components/home/Newsletter'
import { TechSkills } from '@/components/home/TechSkills'
import { ArticleCard } from '@/components/home/ArticleCard'
import { SocialLink } from '@/components/home/SocialLink'
import { GitHubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from '@/components/SocialIcons'
import Link from 'next/link'

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
            full-stack engineer, where we develop a platform for clients to create and deeply customize online stores. I
            also occasionally work as a freelancer or solopreneur, developing websites for clients or useful cool
            projects.{' '}
            <Link href="/about" className="inner-link">
              Read more about me
            </Link>{' '}
            or check out my{' '}
            <Link href="/about#skillset" className="inner-link">
              skills
            </Link>{' '}
            and{' '}
            <Link href="/projects" className="inner-link highlight">
              projects
            </Link>
            .
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

      <Container className="mt-16 md:mt-20">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {articles.map((article) => (
              <ArticleCard key={article.slug} article={article} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume />
            <TechSkills />
          </div>
        </div>
      </Container>
    </>
  )
}
