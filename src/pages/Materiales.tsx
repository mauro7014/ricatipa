export function Materiales() {
  return (
    <div className="min-h-screen bg-linen pt-16">

      {/* Hero */}
      <div className="relative w-full h-64 md:h-80">
        <img
          src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1600&q=80"
          alt="Nuestro trabajo"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 to-ink/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-linen/70 mb-3">
            Artesanía y sostenibilidad
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-light text-linen tracking-widest">
            Nuestro Trabajo
          </h1>
        </div>
      </div>

      {/* Texto intro */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-stone mb-6">
          Materiales
        </p>
        <h2 className="font-display text-3xl font-light text-ink mb-8 leading-tight">
          Cada prenda cuenta una historia de la tierra que la vio nacer
        </h2>
        <p className="font-sans text-sm text-earth leading-relaxed mb-6">
          En RICATIPA trabajamos exclusivamente con materiales naturales y sostenibles. Cada fibra es elegida por su calidad, su origen ético y su impacto mínimo en el medio ambiente.
        </p>
        <p className="font-sans text-sm text-earth leading-relaxed">
          Nuestras prendas están diseñadas para durar décadas, no temporadas. Creemos en la moda lenta, en el valor del trabajo artesanal y en la belleza de lo imperfecto.
        </p>
      </div>

      {/* Materiales */}
      <div className="max-w-6xl mx-auto px-6 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              name: 'Lino',
              origin: 'Europa',
              description: 'La fibra más antigua del mundo. Fresca en verano, cálida en invierno. Mejora con cada lavado y dura décadas.',
              image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=600&q=80',
            },
            {
              name: 'Algodón Orgánico',
              origin: 'Norte Argentino',
              description: 'Cultivado sin pesticidas ni químicos. Suave al tacto, transpirable y completamente biodegradable.',
              image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=600&q=80',
            },
            {
              name: 'Lana Merino',
              origin: 'Patagonia',
              description: 'De ovejas criadas en libertad en la Patagonia argentina. Ultra suave, reguladora de temperatura y antibacterial.',
              image: 'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=600&q=80',
            },
            {
              name: 'Seda Natural',
              origin: 'Brasil',
              description: 'Producida de forma ética y sostenible. Luminosa, suave y con una caída incomparable.',
              image: 'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=600&q=80',
            },
            {
              name: 'Alpaca',
              origin: 'Perú',
              description: 'Fibra premium de los Andes. Sin picazón, más cálida que la lana y con una suavidad excepcional.',
              image: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&q=80',
            },
            {
              name: 'Cáñamo',
              origin: 'Argentina',
              description: 'La fibra del futuro. Resistente, antibacterial y con la menor huella de carbono entre los textiles naturales.',
              image: 'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=600&q=80',
            },
          ].map(function(mat) {
            return (
              <div key={mat.name} className="group">
                <div className="overflow-hidden h-48 mb-4">
                  <img
                    src={mat.image}
                    alt={mat.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <p className="font-sans text-[9px] tracking-widest uppercase text-stone mb-1">
                  Origen: {mat.origin}
                </p>
                <h3 className="font-display text-xl font-light text-ink mb-2">
                  {mat.name}
                </h3>
                <p className="font-sans text-xs text-earth leading-relaxed">
                  {mat.description}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Galería fotos y videos */}
      <div className="bg-cream py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-stone mb-8 text-center">
            Galería
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80',
              'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&q=80',
              'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&q=80',
              'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&q=80',
              'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=400&q=80',
              'https://images.unsplash.com/photo-1475180429745-7b1a22bc92d0?w=400&q=80',
              'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80',
              'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&q=80',
            ].map(function(img, i) {
              return (
                <div key={i} className="overflow-hidden aspect-square">
                  <img
                    src={img}
                    alt={'Galería ' + (i + 1)}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 cursor-pointer"
                  />
                </div>
              )
            })}
          </div>
        </div>
      </div>

    </div>
  )
}