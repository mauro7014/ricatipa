import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { LogOut, Image, Package, Type } from 'lucide-react'
import { products as initialProducts } from '../data/products'
import type { Product } from '../types'

export function AdminPanel() {
  const navigate = useNavigate()
  const [tab, setTab] = useState<'hero' | 'productos' | 'textos'>('productos')
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [editing, setEditing] = useState<Product | null>(null)
  const [heroUrl, setHeroUrl] = useState('https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1600&q=80')
  const [heroPreview, setHeroPreview] = useState(heroUrl)

  function handleLogout() {
    localStorage.removeItem('ricatipa_admin')
    navigate('/admin')
  }

  function handleSaveProduct() {
    if (!editing) return
    setProducts(products.map(function(p) {
      return p.id === editing.id ? editing : p
    }))
    setEditing(null)
  }

  return (
    <div className="min-h-screen bg-linen">

      {/* Header panel */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-ink text-linen px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg tracking-widest">RICATIPA</span>
          <span className="font-sans text-[9px] tracking-widest uppercase text-linen/40">Admin</span>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 font-sans text-[10px] tracking-widest uppercase text-linen/60 hover:text-linen transition-colors duration-200"
        >
          <LogOut size={14} strokeWidth={1.5} />
          Salir
        </button>
      </header>

      <div className="pt-14 flex h-screen">

        {/* Sidebar */}
        <aside className="w-48 bg-charcoal text-linen flex flex-col pt-6 flex-shrink-0">
          {[
            { id: 'hero',      label: 'Foto Hero',   icon: Image   },
            { id: 'productos', label: 'Productos',   icon: Package },
            { id: 'textos',    label: 'Textos',      icon: Type    },
          ].map(function(item) {
            return (
              <button
                key={item.id}
                onClick={function() { setTab(item.id as 'hero' | 'productos' | 'textos') }}
                className={
                  'flex items-center gap-3 px-6 py-4 font-sans text-[10px] tracking-widest uppercase transition-colors duration-200 text-left ' +
                  (tab === item.id ? 'bg-bark text-linen' : 'text-linen/50 hover:text-linen hover:bg-linen/5')
                }
              >
                <item.icon size={14} strokeWidth={1.5} />
                {item.label}
              </button>
            )
          })}
        </aside>

        {/* Contenido */}
        <main className="flex-1 overflow-y-auto p-8">

          {/* TAB HERO */}
          {tab === 'hero' && (
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-light text-ink mb-6">Foto Hero</h2>
              <div className="mb-4">
                <label className="font-sans text-[10px] tracking-widest uppercase text-stone block mb-2">
                  URL de la imagen
                </label>
                <input
                  type="text"
                  value={heroUrl}
                  onChange={function(e) { setHeroUrl(e.target.value) }}
                  className="w-full bg-cream border border-sand px-4 py-3 font-sans text-sm text-ink focus:outline-none focus:border-bark"
                />
              </div>
              <button
                onClick={function() { setHeroPreview(heroUrl) }}
                className="bg-ink text-linen px-6 py-3 font-sans text-[10px] tracking-widest uppercase hover:bg-earth transition-colors duration-200 mb-6"
              >
                Previsualizar
              </button>
              <div className="w-full h-64 overflow-hidden">
                <img src={heroPreview} alt="Hero preview" className="w-full h-full object-cover" />
              </div>
            </div>
          )}

          {/* TAB PRODUCTOS */}
          {tab === 'productos' && !editing && (
            <div>
              <h2 className="font-display text-2xl font-light text-ink mb-6">Productos</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {products.map(function(product) {
                  return (
                    <div key={product.id} className="bg-cream border border-sand p-4">
                      <img
                        src={product.images[0]}
                        alt={product.name}
                        className="w-full h-40 object-cover mb-3"
                      />
                      <h3 className="font-display text-lg font-light text-ink mb-1">{product.name}</h3>
                      <p className="font-sans text-[10px] tracking-wider text-stone uppercase mb-3">{product.category}</p>
                      <button
                        onClick={function() { setEditing(product) }}
                        className="w-full bg-ink text-linen px-4 py-2 font-sans text-[10px] tracking-widest uppercase hover:bg-earth transition-colors duration-200"
                      >
                        Editar
                      </button>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

          {/* EDITOR PRODUCTO */}
          {tab === 'productos' && editing && (
            <div className="max-w-2xl">
              <button
                onClick={function() { setEditing(null) }}
                className="font-sans text-[10px] tracking-widest uppercase text-stone hover:text-ink transition-colors duration-200 mb-6 flex items-center gap-2"
              >
                ← Volver
              </button>
              <h2 className="font-display text-2xl font-light text-ink mb-6">Editar: {editing.name}</h2>

              <div className="flex flex-col gap-4">
                <div>
                  <label className="font-sans text-[10px] tracking-widest uppercase text-stone block mb-2">Nombre</label>
                  <input
                    type="text"
                    value={editing.name}
                    onChange={function(e) { setEditing({ ...editing, name: e.target.value }) }}
                    className="w-full bg-cream border border-sand px-4 py-3 font-sans text-sm text-ink focus:outline-none focus:border-bark"
                  />
                </div>

                <div>
                  <label className="font-sans text-[10px] tracking-widest uppercase text-stone block mb-2">Subtítulo</label>
                  <input
                    type="text"
                    value={editing.subtitle}
                    onChange={function(e) { setEditing({ ...editing, subtitle: e.target.value }) }}
                    className="w-full bg-cream border border-sand px-4 py-3 font-sans text-sm text-ink focus:outline-none focus:border-bark"
                  />
                </div>

                <div>
                  <label className="font-sans text-[10px] tracking-widest uppercase text-stone block mb-2">Descripción</label>
                  <textarea
                    value={editing.description}
                    onChange={function(e) { setEditing({ ...editing, description: e.target.value }) }}
                    rows={4}
                    className="w-full bg-cream border border-sand px-4 py-3 font-sans text-sm text-ink focus:outline-none focus:border-bark resize-none"
                  />
                </div>

                <div>
                  <label className="font-sans text-[10px] tracking-widest uppercase text-stone block mb-2">Precio</label>
                  <input
                    type="number"
                    value={editing.price}
                    onChange={function(e) { setEditing({ ...editing, price: Number(e.target.value) }) }}
                    className="w-full bg-cream border border-sand px-4 py-3 font-sans text-sm text-ink focus:outline-none focus:border-bark"
                  />
                </div>

                <div>
                  <label className="font-sans text-[10px] tracking-widest uppercase text-stone block mb-2">URL imagen principal</label>
                  <input
                    type="text"
                    value={editing.images[0]}
                    onChange={function(e) {
                      const imgs = [...editing.images]
                      imgs[0] = e.target.value
                      setEditing({ ...editing, images: imgs })
                    }}
                    className="w-full bg-cream border border-sand px-4 py-3 font-sans text-sm text-ink focus:outline-none focus:border-bark"
                  />
                  <img src={editing.images[0]} alt="preview" className="w-full h-40 object-cover mt-2" />
                </div>

                <div className="flex gap-3 pt-2">
                  <button
                    onClick={handleSaveProduct}
                    className="flex-1 bg-ink text-linen px-6 py-3 font-sans text-[10px] tracking-widest uppercase hover:bg-earth transition-colors duration-200"
                  >
                    Guardar cambios
                  </button>
                  <button
                    onClick={function() { setEditing(null) }}
                    className="flex-1 bg-sand text-ink px-6 py-3 font-sans text-[10px] tracking-widest uppercase hover:bg-stone hover:text-linen transition-colors duration-200"
                  >
                    Cancelar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* TAB TEXTOS */}
          {tab === 'textos' && (
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl font-light text-ink mb-6">Textos de la tienda</h2>
              <div className="flex flex-col gap-4">
                <div>
                  <label className="font-sans text-[10px] tracking-widest uppercase text-stone block mb-2">Nombre de la marca</label>
                  <input
                    type="text"
                    defaultValue="RICATIPA"
                    className="w-full bg-cream border border-sand px-4 py-3 font-sans text-sm text-ink focus:outline-none focus:border-bark"
                  />
                </div>
                <div>
                  <label className="font-sans text-[10px] tracking-widest uppercase text-stone block mb-2">Subtítulo hero</label>
                  <input
                    type="text"
                    defaultValue="Moda artesanal y sostenible"
                    className="w-full bg-cream border border-sand px-4 py-3 font-sans text-sm text-ink focus:outline-none focus:border-bark"
                  />
                </div>
                <div>
                  <label className="font-sans text-[10px] tracking-widest uppercase text-stone block mb-2">Texto nueva colección</label>
                  <input
                    type="text"
                    defaultValue="Nueva colección"
                    className="w-full bg-cream border border-sand px-4 py-3 font-sans text-sm text-ink focus:outline-none focus:border-bark"
                  />
                </div>
                <button className="bg-ink text-linen px-6 py-3 font-sans text-[10px] tracking-widest uppercase hover:bg-earth transition-colors duration-200 mt-2">
                  Guardar textos
                </button>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  )
}