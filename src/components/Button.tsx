import Link from 'next/link'
import clsx from 'clsx'

const variantStyles = {
  primary: `bg-navy-800 font-semibold text-navy-100 hover:bg-navy-700 active:bg-navy-800 active:text-navy-100/70 dark:bg-navy-700 dark:hover:bg-navy-600 dark:active:bg-navy-700 dark:active:text-navy-100/70`,
  secondary: `bg-navy-50 font-medium text-navy-900 hover:bg-navy-100 active:bg-navy-100 active:text-navy-900/60 dark:bg-navy-800/50 dark:text-navy-300 dark:hover:bg-navy-800 dark:hover:text-navy-50 dark:active:bg-navy-800/50 dark:active:text-navy-50/70`,
}

type ButtonProps = {
  variant?: keyof typeof variantStyles
} & ((React.ComponentPropsWithoutRef<'button'> & { href?: undefined }) | React.ComponentPropsWithoutRef<typeof Link>)

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  className = clsx(
    'inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none',
    variantStyles[variant],
    className,
  )

  return typeof props.href === 'undefined' ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  )
}
