import { cn } from "@/lib/utils"

export function Bubble({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode
  variant?: "default" | "muted" | "light" | "active" | "outline"
  className?: string
}) {
  return (
    <span
      className={cn(
        "flex items-center gap-1 rounded-full border-0 bg-gradient-to-r px-1.5 py-[1px] leading-none",
        variant === "default" &&
          "border-slate-500/10 bg-slate-700 text-white dark:border-slate-100 dark:bg-slate-100 dark:text-slate-900",
        variant === "light" && "bg-emerald-700/10 dark:bg-emerald-500/30",
        variant === "muted" && "border-zinc-600/10 bg-zinc-600/10 dark:border-zinc-500/20 dark:bg-zinc-500/20",
        variant === "active" && "bg-emerald-700 text-white dark:bg-emerald-500/30 dark:text-white",
        variant === "outline" &&
          "border border-zinc-300 bg-transparent hover:bg-zinc-100 dark:border-zinc-200/10 dark:bg-zinc-800/10 dark:hover:bg-zinc-800",
        className,
      )}
    >
      {children}
    </span>
  )
}
