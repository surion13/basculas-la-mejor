import Icon from './Icon'
import { certifications, partners } from '../data'

export default function Partners() {
  return (
    <section className="w-full py-space-xl bg-surface-container" id="aliados">
      <div className="w-full max-w-[1280px] mx-auto px-gutter">
        <div className="text-center max-w-3xl mx-auto mb-space-xl">
          <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-sm bg-tertiary/10 text-tertiary font-label-sm text-label-sm uppercase font-bold tracking-widest mb-space-xs">
            <Icon name="handshake" className="text-[16px]" /> Respaldo Global
          </div>
          <h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-sm">
            Nuestros Aliados Tecnológicos y de Metrología
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Respaldados por marcas líderes mundiales en celdas de carga, indicadores y metrología legal, asegurando
            repuestos originales y certificaciones internacionales directas.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-space-md items-center mb-space-xl">
          {partners.map((p) => (
            <div
              key={p.name}
              className={
                'bg-surface-container-lowest p-2 rounded-sm shadow-xs flex items-center justify-center h-36 md:h-40 hover:shadow-md transition-all overflow-hidden ' +
                (p.wide ? 'col-span-2 sm:col-span-1' : '')
              }
            >
              <img src={p.src} alt={p.name} className={`w-full object-contain ${p.imgClass}`} />
            </div>
          ))}
        </div>

        <div className="bg-surface-container-highest p-space-md rounded-sm flex flex-wrap items-center justify-around gap-space-md">
          {certifications.map((c) => (
            <div key={c.title} className="flex items-center gap-space-xs text-on-surface">
              <Icon name={c.icon} className={`${c.color} text-3xl`} />
              <div>
                <div className="font-label-md text-label-md font-bold uppercase">{c.title}</div>
                <div className="font-body-sm text-body-sm text-on-surface-variant">{c.text}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}