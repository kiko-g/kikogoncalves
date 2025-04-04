import { Button } from "@/components/ui/button"

import { MailIcon } from "lucide-react"

export function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-zinc-100 bg-zinc-25 p-6 dark:border-zinc-700/40 dark:bg-white/[3%]"
    >
      <h2 className="flex items-center gap-3 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <MailIcon className="size-5 flex-none" />
        <span>Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-zinc-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-zinc-800/5 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none focus:ring-4 focus:ring-blue-500/10 dark:border-zinc-700 dark:bg-zinc-700/[0.15] dark:text-zinc-200 dark:placeholder:text-zinc-500 dark:focus:border-blue-400 dark:focus:ring-blue-400/10 sm:text-sm"
        />

        <Button variant="default" type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}
