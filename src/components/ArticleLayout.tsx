'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'

import { AppContext } from '@/app/providers'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'
import { type ArticleWithSlug } from '@/lib/articles'
import { formatDate } from '@/lib/utilities'

function ArrowLeftIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ArticleLayout({ article, children }: { article: ArticleWithSlug; children: React.ReactNode }) {
  let router = useRouter()
  let { previousPathname } = useContext(AppContext)

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-3xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to articles"
              className="dark:bg-navy-800 dark:border-navy-700/50 dark:hover:border-navy-700 shadow-navy-800/5 ring-navy-900/5 group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md ring-1 transition dark:border dark:ring-0 dark:ring-white/10 dark:hover:ring-white/20 lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
            >
              <ArrowLeftIcon className="stroke-navy-500 group-hover:stroke-navy-700 dark:stroke-navy-500 dark:group-hover:stroke-navy-400 h-4 w-4 transition" />
            </button>
          )}
          <article>
            <header className="flex flex-col">
              <h1 className="text-navy-800 dark:text-navy-100 mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
                {article.title}
              </h1>
              <time
                dateTime={article.date}
                className="text-navy-400 dark:text-navy-500 order-first flex items-center text-base"
              >
                <span className="bg-navy-200 dark:bg-navy-500 h-4 w-0.5 rounded-full" />
                <span className="ml-3">{formatDate(article.date)}</span>
              </time>
            </header>
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
          </article>
        </div>
      </div>
    </Container>
  )
}
