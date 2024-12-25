import Link from "next/link"

import { Button } from "./ui/button"
import { ContainerInner, ContainerOuter } from "@/components/Container"

import { MailIcon } from "lucide-react"
import { GithubIcon, InstagramIcon, LinkedinIcon, XTwitterIcon } from "./icons"

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Button variant="link" className="p-0" asChild>
      <Link href={href} className="internal-link highlight">
        {children}
      </Link>
    </Button>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-start">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/about">About</NavLink>
                <NavLink href="/articles">Articles</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/uses">Uses</NavLink>
                {process.env.NODE_ENV === "development" && (
                  <>
                    <NavLink href="/job-hunt">Job Hunt</NavLink>
                    <NavLink href="/speaking">Speaking</NavLink>
                  </>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <ul className="-mr-2 flex items-center justify-center gap-1 md:items-end md:justify-end">
                  <li>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="mailto:kikogoncalves@gmail.com" target="_blank" rel="noopener noreferrer">
                        <MailIcon />
                      </Link>
                    </Button>
                  </li>

                  <li>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://www.twitter.com/kikogoncalves_" target="_blank" rel="noopener noreferrer">
                        <XTwitterIcon />
                      </Link>
                    </Button>
                  </li>

                  <li>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://www.instagram.com/kikogoncalves_" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                      </Link>
                    </Button>
                  </li>

                  <li>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://www.github.com/kiko-g" target="_blank" rel="noopener noreferrer">
                        <GithubIcon />
                      </Link>
                    </Button>
                  </li>

                  <li>
                    <Button variant="ghost" size="icon" asChild>
                      <Link href="https://www.linkedin.com/in/kikogoncalves/" target="_blank" rel="noopener noreferrer">
                        <LinkedinIcon />
                      </Link>
                    </Button>
                  </li>
                </ul>

                <p className="text-sm text-zinc-400 dark:text-zinc-500">
                  &copy; {new Date().getFullYear()} Francisco Gonçalves
                </p>
              </div>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
