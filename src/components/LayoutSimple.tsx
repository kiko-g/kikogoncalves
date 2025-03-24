import { Container } from "@/components/Container"

export function LayoutSimple({ title, intro, children }: { title: string; intro: string; children?: React.ReactNode }) {
  return (
    <Container className="mt-12 sm:mt-20">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">{title}</h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">{intro}</p>
      </header>
      {children && <section className="mt-6 sm:mt-10">{children}</section>}
    </Container>
  )
}
