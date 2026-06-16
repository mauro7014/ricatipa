export function Nosotras() {
  return (
    <div className="min-h-screen bg-linen pt-16">

      {/* Hero */}
      <div className="relative w-full h-64 md:h-80">
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1600&q=80"
          alt="Nosotras"
          className="w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 to-ink/50" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
          <p className="font-sans text-[10px] tracking-[0.4em] uppercase text-linen/70 mb-3">
            La historia detrás de cada prenda
          </p>
          <h1 className="font-display text-4xl md:text-6xl font-light text-linen tracking-widest">
            Nosotras
          </h1>
        </div>
      </div>

      {/* Historia */}
      <div className="max-w-3xl mx-auto px-6 py-16">
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-stone mb-6">
          Nuestra historia
        </p>

        <h2 className="font-display text-3xl font-light text-ink mb-8 leading-tight">
          Nacimos del amor por la artesanía y el respeto por la tierra
        </h2>

        <div className="flex flex-col gap-6">
          <p className="font-sans text-sm text-earth leading-relaxed">
            RICATIPA nació en Rosario, Argentina, de las manos de Romina — diseñadora, artesana y soñadora. Lo que empezó como un proyecto personal se convirtió en una marca que celebra la moda lenta, el trabajo artesanal y la belleza de lo natural.
          </p>
          <p className="font-sans text-sm text-earth leading-relaxed">
            Cada prenda RICATIPA es pensada con tiempo, creada con amor y diseñada para acompañarte durante años. No seguimos tendencias — creamos piezas que trascienden las temporadas y se convierten en parte de tu historia.
          </p>
          <p className="font-sans text-sm text-earth leading-relaxed">
            Trabajamos con artesanas de distintas regiones de Argentina y Latinoamérica, valorando su trabajo, su cultura y su conocimiento ancestral. Cada bordado, cada tejido, cada detalle lleva la huella de manos que trabajan con pasión.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="w-16 h-px bg-sand mx-auto" />

      {/* Valores */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="font-sans text-[10px] tracking-[0.3em] uppercase text-stone mb-10 text-center">
          Lo que nos mueve
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {[
            {
              title: 'Artesanía',
              text: 'Cada prenda es hecha a mano por artesanas que llevan el conocimiento de generaciones. Valoramos el tiempo y el talento que hay detrás de cada pieza.',
            },
            {
              title: 'Sostenibilidad',
              text: 'Usamos solo materiales naturales y procesos de bajo impacto ambiental. La moda puede ser bella y responsable al mismo tiempo.',
            },
            {
              title: 'Durabilidad',
              text: 'Diseñamos para que nuestras prendas duren décadas, no temporadas. La mejor moda sostenible es la que no necesitás reemplazar.',
            },
          ].map(function(val) {
            return (
              <div key={val.title} className="text-center">
                <h3 className="font-display text-2xl font-light text-ink mb-4">
                  {val.title}
                </h3>
                <p className="font-sans text-xs text-earth leading-relaxed">
                  {val.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Foto + cita */}
      <div className="bg-cream py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col md:flex-row gap-10 items-center">
          <div className="w-full md:w-1/2 h-64 overflow-hidden flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=600&q=80"
              alt="Romina"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div className="flex flex-col gap-4">
            <p className="font-display text-2xl font-light text-ink italic leading-relaxed">
              "Quiero que cada mujer que use una prenda RICATIPA sienta que lleva consigo un pedazo de historia, de tierra y de amor."
            </p>
            <p className="font-sans text-[10px] tracking-widest uppercase text-stone">
              — Romina, fundadora de RICATIPA
            </p>
          </div>
        </div>
      </div>

    </div>
  )
}