import { useEffect } from 'react'
import { clsx } from 'clsx'

interface OverlayProps {
  isOpen:   boolean
  onClose:  () => void
  blur?:    boolean
  opacity?: 'light' | 'medium' | 'dark'
}

export function Overlay({ isOpen, onClose, blur = false, opacity = 'medium' }: OverlayProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div
      onClick={onClose}
      className={clsx(
        'fixed inset-0 z-40 transition-opacity duration-400',
        {
          'backdrop-blur-sm':  blur,
          'bg-ink/20':         opacity === 'light',
          'bg-ink/50':         opacity === 'medium',
          'bg-ink/80':         opacity === 'dark',
        },
        'animate-fade-in'
      )}
      aria-hidden="true"
    />
  )
}
