import { ButtonHTMLAttributes, ReactNode } from 'react'
import { clsx } from 'clsx'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline'
  size?:    'sm' | 'md' | 'lg'
  children: ReactNode
  fullWidth?: boolean
}

export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  children,
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={clsx(
        'inline-flex items-center justify-center font-sans font-medium transition-all duration-300',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-bark focus-visible:ring-offset-2',
        'disabled:opacity-40 disabled:cursor-not-allowed',
        {
          // Variants
          'bg-ink text-linen hover:bg-earth tracking-elegant uppercase text-xs':
            variant === 'primary',
          'bg-cream text-ink border border-sand hover:bg-sand tracking-elegant uppercase text-xs':
            variant === 'secondary',
          'text-bark hover:text-ink underline underline-offset-4 tracking-elegant uppercase text-xs':
            variant === 'ghost',
          'border border-ink text-ink hover:bg-ink hover:text-linen tracking-elegant uppercase text-xs':
            variant === 'outline',

          // Sizes
          'px-4 py-2':   size === 'sm',
          'px-6 py-3':   size === 'md',
          'px-8 py-4':   size === 'lg',

          // Full width
          'w-full': fullWidth,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
