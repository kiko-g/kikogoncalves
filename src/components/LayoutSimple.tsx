import { Container } from '@/components/Container'

export function LayoutSimple({ title, intro, children }: { title: string; intro: string; children?: React.ReactNode }) {
  return (
    <Container className="mt-16 sm:mt-32">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-navy-800 dark:text-navy-100 sm:text-5xl">{title}</h1>
        <p className="mt-6 text-base text-navy-600 dark:text-navy-400">{intro}</p>
      </header>
      {children && <div className="mt-16 sm:mt-20">{children}</div>}
    </Container>
  )
}