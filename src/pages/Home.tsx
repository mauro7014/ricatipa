import { useState } from 'react'
import { products } from '../data/products'
import type { Product } from '../types'
import { formatPrice } from '../data/products'
import { ShoppingBag, X, ZoomIn } from 'lucide-react'
import { useCart } from '../hooks/useCart'

export function Home() {
  const [selected, setSelected] = useState<Product | null>(null)
  const [selectedSize, setSelectedSize] = useState<string>('')
  const { addItem } = useCart()

  function handleAddToCart() {
    if (!selected || !selectedSize) return
    addItem(selected, selectedSize)
    setSelected(null)
    setSelectedSize('')
  }

  return (
    <div className="min-h-screen flex flex-col bg-linen">

      <div className="relative w-full" style={{ height: '65vh' }}>
        <img
          src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80"
          alt="RICATIPA"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/30 via-transparent to-ink/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-linen/70 mb-3">
            Nueva colección
          </p>
          <h1 className="font-display text-5xl md:text-7xl font-light text-linen tracking-widest mb-4">
            RICATIPA
          </h1>
          <p className="font-sans text-xs tracking-widest uppercase text-linen/60">
            Moda artesanal y sostenible
          </p>
        </div>
      </div>

      <div className="py-10 px-6">
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-stone mb-6">
          Colección
        </p>
        <div className="flex gap-4 overflow-x-scroll hide-scrollbar pb-4" style={{ scrollSnapType: 'x mandatory' }}>
          {products.map(function(product) {
            return (
              <div
                key={product.id}
                className="flex-shrink-0 relative cursor-pointer group"
                style={{ width: '280px', height: '380px', scrollSnapAlign: 'start' }}
                onClick={function() { setSelected(product); setSelectedSize('') }}
              >
                <div className="w-full h-full overflow-hidden bg-sand">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/60 via-transparent to-transparent" />
                </div>

                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-linen/20 backdrop-blur-sm p-2">
                    <ZoomIn size={14} className="text-linen" strokeWidth={1.5} />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="font-sans text-[9px] tracking-widest uppercase text-linen/60 mb-1">
                    {product.category}
                  </p>
                  <h3 className="font-display text-xl font-light text-linen mb-1">
                    {product.name}
                  </h3>
                  <p className="font-display text-sm text-linen/80">
                    {formatPrice(product.price, product.currency)}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {selected && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-ink/70 backdrop-blur-sm"
            onClick={function() { setSelected(null) }}
          />
          <div className="relative z-10 w-full h-full md:w-auto md:h-auto md:max-w-4xl md:max-h-[90vh] bg-linen flex flex-col md:flex-row overflow-hidden">

            <div className="relative w-full md:w-1/2 h-64 md:h-auto">
              <img
                src={selected.images[0]}
                alt={selected.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1 flex flex-col p-8 overflow-y-auto">
              <button
                onClick={function() { setSelected(null) }}
                className="absolute top-4 right-4 p-2 bg-linen/80 hover:bg-linen transition-colors duration-200"
              >
                <X size={18} strokeWidth={1.5} className="text-ink" />
              </button>

              <p className="font-sans text-[9px] tracking-widest uppercase text-stone mb-2">
                {selected.category} — {selected.material}
              </p>
              <h2 className="font-display text-3xl font-light text-ink mb-1">
                {selected.name}
              </h2>
              <p className="font-sans text-xs text-bark tracking-wider mb-4">
                {selected.subtitle}
              </p>
              <p className="font-sans text-sm text-earth leading-relaxed mb-6">
                {selected.description}
              </p>
              <p className="font-display text-2xl text-ink mb-6">
                {formatPrice(selected.price, selected.currency)}
              </p>

              <div className="mb-6">
                <p className="font-sans text-[9px] tracking-widest uppercase text-stone mb-3">
                  Talle
                </p>
                <div className="flex gap-2 flex-wrap">
                  {selected.sizes.map(function(size) {
                    return (
                      <button
                        key={size.label}
                        disabled={!size.available}
                        onClick={function() { setSelectedSize(size.label) }}
                        className={
                          'px-4 py-2 font-sans text-xs tracking-wider border transition-all duration-200 ' +
                          (!size.available
                            ? 'border-sand text-stone/40 line-through cursor-not-allowed'
                            : selectedSize === size.label
                            ? 'border-ink bg-ink text-linen'
                            : 'border-stone text-bark hover:border-ink hover:text-ink')
                        }
                      >
                        {size.label}
                      </button>
                    )
                  })}
                </div>
              </div>

              <button
                onClick={handleAddToCart}
                disabled={!selectedSize}
                className="flex items-center justify-center gap-3 bg-ink text-linen px-6 py-4 font-sans text-xs tracking-widest uppercase hover:bg-earth transition-colors duration-300 disabled:opacity-40 disabled:cursor-not-allowed mt-auto"
              >
                <ShoppingBag size={16} strokeWidth={1.5} />
                {selectedSize ? 'Agregar al carrito' : 'Selecciona un talle'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}