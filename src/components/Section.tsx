import { useId } from 'react'

export function Section({ title, children }: { title: string; children: React.ReactNode }) {
  let id = useId()

  return (
    <section aria-labelledby={id} className="md:border-l md:border-navy-200 md:pl-6 md:dark:border-navy-700/40">
      <div className="grid max-w-3xl grid-cols-1 items-baseline gap-y-8 md:grid-cols-4">
        <h2 id={id} className="text-sm font-semibold text-primary-500 dark:text-primary-500">
          {title}
        </h2>
        <div className="md:col-span-3">{children}</div>
      </div>
    </section>
  )
}
