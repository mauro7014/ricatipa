import { useRef, useState, useCallback } from 'react'

interface UseScrollSnapReturn {
  containerRef:  React.RefObject<HTMLDivElement>
  activeIndex:   number
  scrollTo:      (index: number) => void
  scrollNext:    () => void
  scrollPrev:    () => void
  canScrollNext: boolean
  canScrollPrev: boolean
}

export function useScrollSnap(total: number): UseScrollSnapReturn {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const scrollTo = useCallback((index: number) => {
    const container = containerRef.current
    if (!container) return
    const width = container.clientWidth
    container.scrollTo({ left: width * index, behavior: 'smooth' })
    setActiveIndex(index)
  }, [])

  const scrollNext = useCallback(() => {
    if (activeIndex < total - 1) scrollTo(activeIndex + 1)
  }, [activeIndex, total, scrollTo])

  const scrollPrev = useCallback(() => {
    if (activeIndex > 0) scrollTo(activeIndex - 1)
  }, [activeIndex, scrollTo])

  return {
    containerRef,
    activeIndex,
    scrollTo,
    scrollNext,
    scrollPrev,
    canScrollNext: activeIndex < total - 1,
    canScrollPrev: activeIndex > 0,
  }
}
