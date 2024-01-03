import { Container } from '@/components/Container'

export function SimpleLayout({ title, intro, children }: { title: string; intro: string; children?: React.ReactNode }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-navy-800 dark:text-navy-100 text-4xl font-bold tracking-tight sm:text-5xl">{title}</h1>
        <p className="text-navy-600 dark:text-navy-400 mt-6 text-base">{intro}</p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}
