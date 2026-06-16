
import { X, ShoppingCart, Trash2, Plus, Minus } from 'lucide-react'
import { useCart } from '../../hooks/useCart'
import { formatPrice } from '../../data/products'

interface CartDrawerProps {
  isOpen: boolean
  onClose: () => void
}

export function CartDrawer({ isOpen, onClose }: CartDrawerProps) {
  const { items, totalItems, totalPrice, removeItem, updateQty } = useCart()

  if (!isOpen) return null

  return (
    <>
      <div
        className="fixed inset-0 z-50 bg-ink/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="fixed top-0 right-0 bottom-0 z-50 w-full max-w-md bg-linen flex flex-col shadow-2xl animate-slide-in-right">

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-sand">
          <div className="flex items-center gap-3">
            <ShoppingCart size={18} strokeWidth={1.5} className="text-ink" />
            <span className="font-sans text-xs tracking-widest uppercase text-ink">
              Carrito
            </span>
            {totalItems > 0 && (
              <span className="bg-ink text-linen text-[9px] font-medium w-5 h-5 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone hover:text-ink transition-colors duration-200"
          >
            <X size={18} strokeWidth={1.5} />
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-6">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <ShoppingCart size={40} strokeWidth={1} className="text-sand" />
              <p className="font-sans text-xs tracking-widest uppercase text-stone">
                Tu carrito está vacío
              </p>
              <button
                onClick={onClose}
                className="font-sans text-[10px] tracking-widest uppercase text-bark underline underline-offset-4 hover:text-ink transition-colors duration-200"
              >
                Seguir comprando
              </button>
            </div>
          ) : (
            <div className="flex flex-col gap-6">
              {items.map(function(item) {
                return (
                  <div key={item.product.id + item.selectedSize} className="flex gap-4">
                    <img
                      src={item.product.images[0]}
                      alt={item.product.name}
                      className="w-20 h-24 object-cover flex-shrink-0 bg-sand"
                    />
                    <div className="flex-1 flex flex-col">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h4 className="font-display text-lg font-light text-ink leading-tight">
                            {item.product.name}
                          </h4>
                          <p className="font-sans text-[10px] tracking-wider text-stone uppercase mt-0.5">
                            Talle: {item.selectedSize}
                          </p>
                        </div>
                        <button
                          onClick={function() { removeItem(item.product.id, item.selectedSize) }}
                          className="p-1 text-stone hover:text-ink transition-colors duration-200 flex-shrink-0"
                        >
                          <Trash2 size={14} strokeWidth={1.5} />
                        </button>
                      </div>

                      <div className="flex items-center justify-between mt-auto pt-3">
                        <div className="flex items-center border border-sand">
                          <button
                            onClick={function() { updateQty(item.product.id, item.selectedSize, item.quantity - 1) }}
                            className="w-8 h-8 flex items-center justify-center text-stone hover:text-ink transition-colors duration-200"
                          >
                            <Minus size={12} strokeWidth={1.5} />
                          </button>
                          <span className="w-8 h-8 flex items-center justify-center font-sans text-xs text-ink">
                            {item.quantity}
                          </span>
                          <button
                            onClick={function() { updateQty(item.product.id, item.selectedSize, item.quantity + 1) }}
                            className="w-8 h-8 flex items-center justify-center text-stone hover:text-ink transition-colors duration-200"
                          >
                            <Plus size={12} strokeWidth={1.5} />
                          </button>
                        </div>
                        <span className="font-display text-lg font-light text-ink">
                          {formatPrice(item.product.price * item.quantity, item.product.currency)}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>

        {/* Footer con total y checkout */}
        {items.length > 0 && (
          <div className="px-6 py-6 border-t border-sand flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-sans text-[10px] tracking-widest uppercase text-stone">
                Total
              </span>
              <span className="font-display text-2xl font-light text-ink">
                {formatPrice(totalPrice, 'ARS')}
              </span>
            </div>
            <p className="font-sans text-[9px] tracking-wider text-stone/60 uppercase">
              Envío calculado al finalizar la compra
            </p>
            <button className="w-full bg-ink text-linen px-6 py-4 font-sans text-xs tracking-widest uppercase hover:bg-earth transition-colors duration-300">
              Finalizar compra
            </button>
            <button
              onClick={onClose}
              className="w-full border border-sand text-stone px-6 py-3 font-sans text-xs tracking-widest uppercase hover:border-bark hover:text-bark transition-colors duration-300"
            >
              Seguir comprando
            </button>
          </div>
        )}

      </div>
    </>
  )
}