import Link from 'next/link'

import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="transition hover:text-primary-500 dark:hover:text-primary-400">
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-navy-100 pb-16 pt-10 dark:border-navy-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-navy-800 dark:text-navy-200">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/uses">Uses</NavLink>
                {process.env.NODE_ENV === 'development' && (
                  <>
                    <NavLink href="/job-hunt">Job Hunt</NavLink>
                    <NavLink href="/speaking">Speaking</NavLink>
                  </>
                )}
              </div>
              <p className="text-sm text-navy-400 dark:text-navy-500">
                &copy; {new Date().getFullYear()} Francisco Gonçalves. All rights reserved.
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
