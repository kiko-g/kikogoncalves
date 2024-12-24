import { Button } from '@/components/Button'
import { MailIcon } from '@/components/Icons'

export function Newsletter() {
  return (
    <form
      action="/thank-you"
      className="rounded-2xl border border-navy-100 bg-navy-25 p-6 dark:border-navy-700/40 dark:bg-white/[3%]"
    >
      <h2 className="flex text-sm font-semibold text-navy-900 dark:text-navy-100">
        <MailIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Stay up to date</span>
      </h2>
      <p className="mt-2 text-sm text-navy-600 dark:text-navy-400">
        Get notified when I publish something new, and unsubscribe at any time.
      </p>
      <div className="mt-6 flex">
        <input
          type="email"
          placeholder="Email address"
          aria-label="Email address"
          required
          className="min-w-0 flex-auto appearance-none rounded-md border border-navy-900/10 bg-white px-3 py-[calc(theme(spacing.2)-1px)] shadow-md shadow-navy-800/5 placeholder:text-navy-400 focus:border-indigo-500 focus:outline-none focus:ring-4 focus:ring-indigo-500/10 dark:border-navy-700 dark:bg-navy-700/[0.15] dark:text-navy-200 dark:placeholder:text-navy-500 dark:focus:border-indigo-400 dark:focus:ring-indigo-400/10 sm:text-sm"
        />
        <Button type="submit" className="ml-4 flex-none">
          Join
        </Button>
      </div>
    </form>
  )
}
