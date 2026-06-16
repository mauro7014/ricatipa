import { ShoppingCart, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useCart } from '../../hooks/useCart'
import { useNavigate } from 'react-router-dom'

interface HeaderProps {
  onCartOpen: () => void
}

export function Header({ onCartOpen }: HeaderProps) {
  const { totalItems } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const navigate = useNavigate()

  const links = ['Coleccion', 'Materiales', 'Nosotras']

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
            {links.map(function(link) {
              return (
                <a key={link} href="#" className="font-sans text-xs tracking-widest text-bark hover:text-ink transition-colors duration-300 uppercase">
                  {link}
                </a>
              )
            })}
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
              aria-label="Carrito"
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
            {links.map(function(link) {
              return (
                <a key={link} href="#" onClick={function() { setMenuOpen(false) }} className="font-sans text-sm tracking-widest text-bark uppercase">
                  {link}
                </a>
              )
            })}
            <button
              onClick={function() { setMenuOpen(false); navigate('/admin') }}
              className="font-sans text-sm tracking-widest text-bark uppercase text-left"
            >
              Panel
            </button>
          </nav>
        </div>
      )}
    </>
  )
}