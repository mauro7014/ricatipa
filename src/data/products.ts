import type { Product } from '../types'

export const products: Product[] = [
  {
    id: 'p001',
    name: 'Vestido Pampa',
    subtitle: 'Lino crudo, corte recto',
    description:
      'Tejido a mano en talleres de la región. El lino crudo respira con el cuerpo y gana carácter con cada lavado. Corte recto, largo midi, escote en V suave y mangas amplias. Una prenda que dura décadas.',
    price: 189000,
    currency: 'ARS',
    category: 'vestidos',
    material: 'lino',
    sizes: [
      { label: 'XS', available: true  },
      { label: 'S',  available: true  },
      { label: 'M',  available: true  },
      { label: 'L',  available: false },
      { label: 'XL', available: true  },
    ],
    images: [
      'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800&q=80',
      'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80',
    ],
    tags: ['lino', 'midi', 'minimalista'],
    isNew: true,
    isBestseller: false,
    stock: 8,
  },
  {
    id: 'p002',
    name: 'Blusa Ceibo',
    subtitle: 'Algodón orgánico, bordado artesanal',
    description:
      'Bordado a mano por artesanas del norte argentino. Cada pieza lleva horas de trabajo y es única. Algodón 100% orgánico certificado, suave al tacto, fresco en verano.',
    price: 98000,
    currency: 'ARS',
    category: 'blusas',
    material: 'algodón orgánico',
    sizes: [
      { label: 'XS', available: false },
      { label: 'S',  available: true  },
      { label: 'M',  available: true  },
      { label: 'L',  available: true  },
      { label: 'XL', available: false },
    ],
    images: [
      'https://images.unsplash.com/photo-1485968579580-b6d095142e6e?w=800&q=80',
      'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=800&q=80',
    ],
    tags: ['bordado', 'artesanal', 'algodón'],
    isNew: false,
    isBestseller: true,
    stock: 5,
  },
  {
    id: 'p003',
    name: 'Abrigo Andes',
    subtitle: 'Lana merino, tejido a telar',
    description:
      'Tejido en telar tradicional con lana merino de la Patagonia. Cálido, liviano y con la textura irregular que solo da el trabajo manual. Un abrigo que mejora con los años.',
    price: 312000,
    currency: 'ARS',
    category: 'abrigos',
    material: 'lana merino',
    sizes: [
      { label: 'S',  available: true },
      { label: 'M',  available: true },
      { label: 'L',  available: true },
      { label: 'XL', available: true },
    ],
    images: [
      'https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=800&q=80',
      'https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=800&q=80',
    ],
    tags: ['lana', 'patagonia', 'abrigo'],
    isNew: false,
    isBestseller: true,
    stock: 3,
  },
  {
    id: 'p004',
    name: 'Falda Quebracho',
    subtitle: 'Lino y cáñamo, plisado natural',
    description:
      'Mezcla de lino y cáñamo con caída suave. El plisado es natural, resultado del proceso de acabado sin químicos. Largo hasta el tobillo, cintura elástica cómoda.',
    price: 134000,
    currency: 'ARS',
    category: 'faldas',
    material: 'lino',
    sizes: [
      { label: 'XS', available: true  },
      { label: 'S',  available: true  },
      { label: 'M',  available: false },
      { label: 'L',  available: true  },
      { label: 'XL', available: true  },
    ],
    images: [
      'https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=800&q=80',
      'https://images.unsplash.com/photo-1475180429745-7b1a22bc92d0?w=800&q=80',
    ],
    tags: ['falda', 'cáñamo', 'plisado'],
    isNew: true,
    isBestseller: false,
    stock: 6,
  },
  {
    id: 'p005',
    name: 'Pantalón Algarrobo',
    subtitle: 'Algodón orgánico, corte palazzo',
    description:
      'Corte palazzo amplio, tiro alto y bolsillos profundos. Algodón orgánico stonewashed para un look usado y natural desde el primer día. Cómodo para trabajar, elegante para salir.',
    price: 156000,
    currency: 'ARS',
    category: 'pantalones',
    material: 'algodón orgánico',
    sizes: [
      { label: 'XS', available: true  },
      { label: 'S',  available: false },
      { label: 'M',  available: true  },
      { label: 'L',  available: true  },
      { label: 'XL', available: true  },
    ],
    images: [
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?w=800&q=80',
      'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=800&q=80',
    ],
    tags: ['palazzo', 'stonewashed', 'tiro alto'],
    isNew: false,
    isBestseller: false,
    stock: 10,
  },
  {
    id: 'p006',
    name: 'Capa Alpaca',
    subtitle: 'Alpaca premium, pieza única',
    description:
      'Tejida con fibra de alpaca peruana de primera calidad. Ultra suave, sin picazón, reguladora de temperatura. Cada capa es una pieza numerada y certificada. Edición limitada de 20 unidades.',
    price: 445000,
    currency: 'ARS',
    category: 'abrigos',
    material: 'alpaca',
    sizes: [
      { label: 'S', available: true },
      { label: 'M', available: true },
      { label: 'L', available: true },
    ],
    images: [
      'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
      'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=800&q=80',
    ],
    tags: ['alpaca', 'edición limitada', 'premium'],
    isNew: true,
    isBestseller: false,
    stock: 2,
  },
]

export const getProductById = (id: string): Product | undefined =>
  products.find(p => p.id === id)

export const formatPrice = (price: number, currency: string): string => {
  if (currency === 'ARS') {
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: 'ARS',
      minimumFractionDigits: 0,
    }).format(price)
  }
  return `${currency} ${price.toLocaleString()}`
}
