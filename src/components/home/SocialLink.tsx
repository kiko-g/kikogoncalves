import Link from "next/link"

export function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="size-5 fill-zinc-500 transition group-hover:fill-indigo-500 dark:fill-zinc-400 dark:group-hover:fill-white" />
    </Link>
  )
}
