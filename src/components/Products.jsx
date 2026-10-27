import { Link } from 'react-router-dom'
import Icon from './Icon'
import { products } from '../data'

function ProductCard({ product }) {
  return (
    <div className="bg-surface-container-lowest rounded-sm shadow-xs hover:shadow-lg transition-all flex flex-col overflow-hidden">
      <div className="relative h-56 bg-surface-container">
        <div
          className="absolute inset-0 bg-cover bg-center"
          role="img"
          aria-label={product.name}
          style={{ backgroundImage: `url("${product.image}")` }}
        />
        <div className="absolute top-3 left-3 bg-inverse-surface text-inverse-on-surface font-label-sm text-label-sm px-space-xs py-1 rounded-sm">
          {product.capacity}
        </div>
        <div className={`absolute top-3 right-3 font-label-sm text-label-sm px-space-xs py-1 rounded-sm ${product.badgeClass}`}>
          {product.badge}
        </div>
      </div>

      <div className="p-space-md flex-1 flex flex-col justify-between">
        <div>
          <span className="font-label-sm text-label-sm text-tertiary uppercase font-bold tracking-wider">
            {product.category}
          </span>
          <h4 className="font-headline-sm text-headline-sm text-on-surface mt-1 mb-space-xs">{product.name}</h4>
          <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">{product.description}</p>
          <div className="grid grid-cols-2 gap-space-xs bg-surface-container-low p-space-xs rounded-sm font-label-sm text-label-sm text-on-surface-variant mb-space-md">
            {product.specs.map(([label, value]) => (
              <div key={label}>
                <span className="text-tertiary font-bold">{label}</span> {value}
              </div>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-space-sm pt-space-xs">
          <Link
            to="/contacto"
            className="flex-1 text-center py-space-xs px-space-sm rounded-sm bg-primary hover:bg-primary-container text-on-primary font-label-md text-label-md transition-colors"
          >
            Cotizar Sistema
          </Link>
          <button
            title="Descargar Ficha Técnica PDF"
            aria-label="Descargar Ficha Técnica PDF"
            className="p-space-xs rounded-sm bg-surface-container hover:bg-surface-container-high text-on-surface transition-colors"
          >
            <Icon name="picture_as_pdf" className="text-[20px]" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Products() {
  return (
    <section className="w-full py-space-xl bg-background" id="productos">
      <div className="w-full max-w-[1280px] mx-auto px-gutter">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-xl gap-space-md">
          <div>
            <span className="font-label-md text-label-md text-primary uppercase font-bold tracking-widest block mb-space-xs">
              Catálogo de Productos
            </span>
            <h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
              Sistemas de Pesaje de Alta Precisión
            </h3>
          </div>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-md">
            Hardware industrial de estándar aeroespacial y celdas certificadas, preparadas para ambientes corrosivos y
            ciclos 24/7 sin pérdida de repetibilidad.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-space-lg">
          {products.map((p) => (
            <ProductCard key={p.name} product={p} />
          ))}
        </div>
      </div>
    </section>
  )
}