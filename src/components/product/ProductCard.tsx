import { useState } from 'react'
import { ShoppingBag, Heart } from 'lucide-react'
import type { Product } from '../../types'
import { Badge } from '../ui/Badge'
import { formatPrice } from '../../data/products'
import { clsx } from 'clsx'

interface ProductCardProps {
  product: Product
  onSelect: (product: Product) => void
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  const [imageIndex, setImageIndex] = useState(0)
  const [liked, setLiked] = useState(false)
  const [imageLoaded, setImageLoaded] = useState(false)

  return (
    <article
      className="relative flex-shrink-0 w-full h-full cursor-pointer group"
      onClick={function() { onSelect(product) }}
      onMouseEnter={function() { if (product.images.length > 1) setImageIndex(1) }}
      onMouseLeave={function() { setImageIndex(0) }}
    >
      <div className="absolute inset-0 bg-sand overflow-hidden">
        {!imageLoaded && (
          <div className="absolute inset-0 bg-sand animate-pulse" />
        )}
        <img
          src={product.images[imageIndex]}
          alt={product.name}
          onLoad={function() { setImageLoaded(true) }}
          className={clsx(
            'w-full h-full object-cover transition-all duration-600 group-hover:scale-105',
            imageLoaded ? 'opacity-100' : 'opacity-0'
          )}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/70 via-ink/10 to-transparent" />
      </div>

      <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
        {product.isNew && <Badge label="Nuevo" variant="new" />}
        {product.isBestseller && <Badge label="Mas vendido" variant="bestseller" />}
        {product.stock <= 3 && <Badge label={'Ultimas ' + product.stock} variant="limited" />}
      </div>

      <button
        onClick={function(e) { e.stopPropagation(); setLiked(!liked) }}
        className="absolute top-6 right-6 z-10 p-2 rounded-full bg-linen/20 backdrop-blur-sm hover:bg-linen/40 transition-all duration-300"
      >
        <Heart
          size={18}
          strokeWidth={1.5}
          className={liked ? 'fill-copper stroke-copper' : 'stroke-linen'}
        />
      </button>

      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-10">
        <p className="font-sans text-[10px] tracking-widest uppercase text-linen/60 mb-2">
          {product.category} - {product.material}
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-light text-linen mb-1 leading-tight">
          {product.name}
        </h2>
        <p className="font-sans text-xs text-linen/70 tracking-wider mb-4">
          {product.subtitle}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-display text-2xl font-light text-linen">
            {formatPrice(product.price, product.currency)}
          </span>
          <button
            onClick={function(e) { e.stopPropagation(); onSelect(product) }}
            className="flex items-center gap-2 bg-linen/10 backdrop-blur-sm border border-linen/30 text-linen px-4 py-2.5 hover:bg-linen hover:text-ink transition-all duration-300"
          >
            <ShoppingBag size={14} strokeWidth={1.5} />
            <span className="font-sans text-[10px] tracking-widest uppercase">Ver producto</span>
          </button>
        </div>
        <div className="flex gap-1.5 mt-4">
          {product.sizes.map(function(size) {
            return (
              <span
                key={size.label}
                className={clsx(
                  'font-sans text-[9px] tracking-wider uppercase px-1.5 py-0.5 border',
                  size.available
                    ? 'border-linen/40 text-linen/60'
                    : 'border-linen/10 text-linen/20 line-through'
                )}
              >
                {size.label}
              </span>
            )
          })}
        </div>
      </div>
    </article>
  )
}