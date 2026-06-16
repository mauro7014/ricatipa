import { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { products as initialProducts } from '../data/products'
import type { Product } from '../types'

interface StoreState {
  products: Product[]
  heroImage: string
  heroTitle: string
  heroSubtitle: string
  heroTag: string
  materialesTexto: string
  materialesHero: string
  nosotrasTexto: string
  nosotrasHero: string
  nosotrasQuote: string
  galeriaImages: string[]
}

interface StoreContextValue {
  store: StoreState
  updateStore: (updates: Partial<StoreState>) => void
  updateProduct: (product: Product) => void
  addProduct: (product: Product) => void
}

const defaultStore: StoreState = {
  products: initialProducts,
  heroImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80',
  heroTitle: 'RICATIPA',
  heroSubtitle: 'Moda artesanal y sostenible',
  heroTag: 'Nueva colección',
  materialesTexto: 'En RICATIPA trabajamos exclusivamente con materiales naturales y sostenibles. Cada fibra es elegida por su calidad, su origen ético y su impacto mínimo en el medio ambiente.',
  materialesHero: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80',
  nosotrasTexto: 'RICATIPA nació en Rosario, Argentina, de las manos de Romina — diseñadora, artesana y soñadora. Lo que empezó como un proyecto personal se convirtió en una marca que celebra la moda lenta, el trabajo artesanal y la belleza de lo natural.',
  nosotrasHero: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1600&q=80',
  nosotrasQuote: 'Quiero que cada mujer que use una prenda RICATIPA sienta que lleva consigo un pedazo de historia, de tierra y de amor.',
  galeriaImages: [
    'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
    'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80',
    'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80',
    'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&q=80',
    'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80',
    'https://images.unsplash.com/photo-1475180429745-7b1a22bc92d0?w=400&q=80',
    'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80',
    'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80',
  ],
}

const StoreContext = createContext<StoreContextValue | null>(null)

export function StoreProvider({ children }: { children: ReactNode }) {
  const [store, setStore] = useState<StoreState>(function() {
    try {
      const saved = localStorage.getItem('ricatipa_store')
      if (saved) return JSON.parse(saved)
    } catch {}
    return defaultStore
  })

  useEffect(function() {
    localStorage.setItem('ricatipa_store', JSON.stringify(store))
  }, [store])

  function updateStore(updates: Partial<StoreState>) {
    setStore(function(prev) { return { ...prev, ...updates } })
  }

  function updateProduct(product: Product) {
    setStore(function(prev) {
      return {
        ...prev,
        products: prev.products.map(function(p) {
          return p.id === product.id ? product : p
        }),
      }
    })
  }

  function addProduct(product: Product) {
    setStore(function(prev) {
      return { ...prev, products: [...prev.products, product] }
    })
  }

  return (
    <StoreContext.Provider value={{ store, updateStore, updateProduct, addProduct }}>
      {children}
    </StoreContext.Provider>
  )
}

export function useStore() {
  const ctx = useContext(StoreContext)
  if (!ctx) throw new Error('useStore debe usarse dentro de StoreProvider')
  return ctx
}