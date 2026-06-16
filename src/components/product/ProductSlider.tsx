import { useRef, useState, useCallback, useEffect } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import type { Product } from '../../types'
import { ProductCard } from './ProductCard'

interface ProductSliderProps {
  products: Product[]
  onSelect: (product: Product) => void
}

export function ProductSlider({ products, onSelect }: ProductSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  const handleScroll = useCallback(function() {
    const el = containerRef.current
    if (!el) return
    const index = Math.round(el.scrollLeft / el.clientWidth)
    setActiveIndex(index)
  }, [])

  useEffect(function() {
    const el = containerRef.current
    if (!el) return
    el.addEventListener('scroll', handleScroll, { passive: true })
    return function() { el.removeEventListener('scroll', handleScroll) }
  }, [handleScroll])

  const scrollTo = useCallback(function(index: number) {
    const el = containerRef.current
    if (!el) return
    el.scrollTo({ left: el.clientWidth * index, behavior: 'smooth' })
    setActiveIndex(index)
  }, [])

  function scrollPrev() { if (activeIndex > 0) scrollTo(activeIndex - 1) }
  function scrollNext() { if (activeIndex < products.length - 1) scrollTo(activeIndex + 1) }

  return (
    <div className="relative w-full h-screen overflow-hidden">

      <div
        ref={containerRef}
        className="flex w-full h-full overflow-x-scroll hide-scrollbar"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {products.map(function(product) {
          return (
            <div
              key={product.id}
              className="flex-shrink-0 w-full h-full"
              style={{ scrollSnapAlign: 'start' }}
            >
              <ProductCard product={product} onSelect={onSelect} />
            </div>
          )
        })}
      </div>

      <button
        onClick={scrollPrev}
        disabled={activeIndex === 0}
        className="hidden md:flex absolute left-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-linen/10 backdrop-blur-sm border border-linen/20 text-linen hover:bg-linen/25 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
      >
        <ChevronLeft size={18} strokeWidth={1.5} />
      </button>

      <button
        onClick={scrollNext}
        disabled={activeIndex === products.length - 1}
        className="hidden md:flex absolute right-6 top-1/2 -translate-y-1/2 z-20 w-10 h-10 items-center justify-center bg-linen/10 backdrop-blur-sm border border-linen/20 text-linen hover:bg-linen/25 transition-all duration-300 disabled:opacity-0 disabled:pointer-events-none"
      >
        <ChevronRight size={18} strokeWidth={1.5} />
      </button>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
        {products.map(function(_, i) {
          return (
            <button
              key={i}
              onClick={function() { scrollTo(i) }}
              className={i === activeIndex ? 'w-6 h-1.5 bg-linen' : 'w-1.5 h-1.5 bg-linen/40 hover:bg-linen/70'}
            />
          )
        })}
      </div>

      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-20">
        <span className="font-sans text-[10px] tracking-widest text-linen/50 uppercase">
          {String(activeIndex + 1).padStart(2, '0')} / {String(products.length).padStart(2, '0')}
        </span>
      </div>

    </div>
  )
}