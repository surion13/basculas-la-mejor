import Icon from './Icon'
import { featuredClient, industries } from '../data'

export default function Clients() {
  return (
    <section className="w-full py-space-xl bg-background" id="clientes">
      <div className="w-full max-w-[1280px] mx-auto px-gutter">
        <div className="max-w-2xl mb-space-xl">
          <span className="font-label-md text-label-md text-primary uppercase font-bold tracking-widest block mb-space-xs">
            Confianza Comprobada
          </span>
          <h3 className="font-headline-lg text-headline-lg text-on-surface tracking-tight mb-space-xs">
            Empresas Líderes que Confían en Básculas la Mejor
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Más de 500 industrias mineras, agroindustriales, logísticas y alimentarias confían su pesaje en nuestras
            soluciones y programas de calibración continua.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-space-md mb-space-xl">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className={
                'bg-surface-container-low p-space-md rounded-sm flex flex-col items-center justify-center text-center ' +
                (ind.wide ? 'col-span-2 md:col-span-1' : '')
              }
            >
              <Icon name={ind.icon} className={`${ind.color} text-3xl mb-space-xs`} />
              <span className="font-label-md text-label-md font-bold text-on-surface">{ind.title}</span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">{ind.text}</span>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center">
          <div className="bg-surface-container-lowest p-space-lg rounded-sm shadow-xs hover:shadow-md transition-all flex flex-col items-center justify-center max-w-sm w-full text-center">
            <div className="h-28 w-full flex items-center justify-center mb-space-sm">
              <img src={featuredClient.logo} alt="Crepes & Waffles Logo" className="h-full w-full object-contain" />
            </div>
            <span className="font-headline-sm text-headline-sm tracking-wider text-on-surface uppercase font-bold">
              {featuredClient.name}
            </span>
            <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-widest mt-1">
              {featuredClient.tag}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}