import { ShoppingCart, Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { useNavigate, useLocation } from 'react-router-dom'

interface HeaderProps {
  onCartOpen: () => void
}

const categories = ['Todos', 'Vestidos', 'Blusas', 'Pantalones', 'Faldas', 'Abrigos', 'Accesorios']

export function Header({ onCartOpen }: HeaderProps) {
  const { totalItems } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [colOpen, setColOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  function handleCategory(cat: string) {
    setColOpen(false)
    setMenuOpen(false)
    if (location.pathname !== '/') {
      navigate('/')
    }
    const event = new CustomEvent('filter-category', { detail: cat.toLowerCase() })
    window.dispatchEvent(event)
  }

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-linen/90 backdrop-blur-sm border-b border-sand/50">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

          <a href="/" className="flex flex-col leading-none">
            <span className="font-display text-2xl font-light tracking-widest text-ink">
              RICATIPA
            </span>
            <span className="font-sans text-[9px] tracking-[0.3em] text-stone uppercase mt-0.5">
              moda artesanal
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">

            {/* Colección desplegable */}
            <div className="relative">
              <button
                onClick={function() { setColOpen(!colOpen) }}
                className="flex items-center gap-1 font-sans text-xs tracking-widest text-bark hover:text-ink transition-colors duration-300 uppercase"
              >
                Colección
                <ChevronDown size={12} strokeWidth={1.5} className={colOpen ? 'rotate-180 transition-transform duration-200' : 'transition-transform duration-200'} />
              </button>
              {colOpen && (
                <div className="absolute top-8 left-0 bg-linen border border-sand shadow-lg py-2 min-w-36 z-50">
                  {categories.map(function(cat) {
                    return (
                      <button
                        key={cat}
                        onClick={function() { handleCategory(cat) }}
                        className="w-full text-left px-4 py-2 font-sans text-[10px] tracking-widest uppercase text-stone hover:text-ink hover:bg-cream transition-colors duration-200"
                      >
                        {cat}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>

            <button
              onClick={function() { navigate('/materiales') }}
              className="font-sans text-xs tracking-widest text-bark hover:text-ink transition-colors duration-300 uppercase"
            >
              Materiales
            </button>

            <button
              onClick={function() { navigate('/nosotras') }}
              className="font-sans text-xs tracking-widest text-bark hover:text-ink transition-colors duration-300 uppercase"
            >
              Nosotras
            </button>

            <button
              onClick={function() { navigate('/admin') }}
              className="font-sans text-xs tracking-widest text-bark hover:text-ink transition-colors duration-300 uppercase"
            >
              Panel
            </button>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={onCartOpen}
              className="relative p-2 text-ink hover:text-bark transition-colors duration-300"
            >
              <ShoppingCart size={22} strokeWidth={1.5} />
              {totalItems > 0 && (
                <span className="absolute -top-0.5 -right-0.5 bg-ink text-linen text-[9px] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                  {totalItems > 9 ? '9+' : totalItems}
                </span>
              )}
            </button>

            <button
              onClick={function() { setMenuOpen(!menuOpen) }}
              className="md:hidden p-2 text-ink"
            >
              {menuOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>

        </div>
      </header>

      {menuOpen && (
        <div className="fixed top-16 left-0 right-0 z-40 bg-linen border-b border-sand md:hidden">
          <nav className="flex flex-col px-6 py-6 gap-5">
            <div className="flex flex-col gap-2">
              <p className="font-sans text-[10px] tracking-widest uppercase text-stone">Colección</p>
              {categories.map(function(cat) {
                return (
                  <button
                    key={cat}
                    onClick={function() { handleCategory(cat) }}
                    className="font-sans text-sm tracking-widest text-bark uppercase text-left pl-3"
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
            <button onClick={function() { setMenuOpen(false); navigate('/materiales') }} className="font-sans text-sm tracking-widest text-bark uppercase text-left">
              Materiales
            </button>
            <button onClick={function() { setMenuOpen(false); navigate('/nosotras') }} className="font-sans text-sm tracking-widest text-bark uppercase text-left">
              Nosotras
            </button>
            <button onClick={function() { setMenuOpen(false); navigate('/admin') }} className="font-sans text-sm tracking-widest text-bark uppercase text-left">
              Panel
            </button>
          </nav>
        </div>
      )}
    </>
  )
}