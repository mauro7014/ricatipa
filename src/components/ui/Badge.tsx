import { clsx } from 'clsx'

interface BadgeProps {
  label:    string
  variant?: 'new' | 'bestseller' | 'limited' | 'default'
  className?: string
}

export function Badge({ label, variant = 'default', className }: BadgeProps) {
  return (
    <span
      className={clsx(
        'inline-block font-sans text-[10px] font-medium tracking-widest uppercase px-2 py-1',
        {
          'bg-ink text-linen':        variant === 'new',
          'bg-copper text-linen':     variant === 'bestseller',
          'bg-sage text-linen':       variant === 'limited',
          'bg-sand text-bark':        variant === 'default',
        },
        className
      )}
    >
      {label}
    </span>
  )
}
