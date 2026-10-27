import { Link } from 'react-router-dom'
import Icon from './Icon'
import { branches, footerBadges, footerLinks } from '../data'

export default function Footer() {
  return (
    <footer className="w-full bg-inverse-surface text-inverse-on-surface pt-space-xl pb-space-lg">
      <div className="w-full max-w-[1280px] mx-auto px-gutter">
        {/* Sellos */}
        <div className="bg-surface-container-lowest/5 rounded-sm p-space-md mb-space-xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md items-center text-center md:text-left">
            {footerBadges.map((b) => (
              <div key={b.title} className="flex items-center justify-center md:justify-start gap-space-sm">
                <Icon name={b.icon} className={`${b.color} text-3xl`} />
                <div>
                  <div className="font-label-md text-label-md text-on-primary uppercase font-bold">{b.title}</div>
                  <p className="font-body-sm text-body-sm text-surface-variant">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-xl mb-space-xl lg:grid-cols-4">
          <div className="lg:col-span-2 space-y-space-md">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-sm bg-primary flex items-center justify-center text-on-primary font-headline-sm text-headline-sm">
                BLM
              </div>
              <span className="font-headline-sm text-headline-sm tracking-tight text-on-primary uppercase">
                BÁSCULAS LA MEJOR
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-surface-variant max-w-sm">
              Líderes en ingeniería metrológica, suministro, instalación y mantenimiento de sistemas de pesaje dinámico y
              estático. Equipos certificados para agroindustria, minería, logística portuaria y manufactura.
            </p>
            <div className="pt-space-xs">
              <span className="font-label-md text-label-md text-on-primary uppercase block mb-space-xs">
                Atención Inmediata de Emergencias
              </span>
              <div className="flex items-center gap-space-xs text-primary-fixed-dim font-headline-sm text-headline-sm">
                <Icon name="call" />
                <span>+57 310 987 6543</span>
              </div>
              <p className="font-body-sm text-body-sm text-surface-variant">Central de Operaciones Técnicas 24 Horas</p>
            </div>
          </div>

          <div>
            <h4 className="font-label-lg text-label-lg text-on-primary uppercase mb-space-md">Sistemas &amp; Equipos</h4>
            <ul className="space-y-space-xs font-body-sm text-body-sm text-surface-variant">
              {footerLinks.map((l) => (
                <li key={l}>
                  <Link className="hover:text-on-primary transition-colors" to="/productos">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-label-lg text-label-lg text-on-primary uppercase mb-space-md">Sucursales &amp; Cobertura</h4>
            <ul className="space-y-space-sm font-body-sm text-body-sm text-surface-variant">
              {branches.map((b) => (
                <li key={b.city} className="flex flex-col">
                  <span className="text-on-primary font-bold">{b.city}</span>
                  <span>{b.address}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal */}
        <div className="pt-space-lg border-t border-surface-variant/20 flex flex-col md:flex-row items-center justify-between gap-space-md font-body-sm text-body-sm text-surface-variant">
          <div>
            © 2024 Básculas la Mejor S.A.S. (BLM) - Todos los derechos reservados. Registro Nacional de Metrología Legal.
          </div>
          <div className="flex items-center gap-space-md">
            <span>Política de Tratamiento de Datos</span>
            <span>Certificados de Calidad</span>
            <span>Aviso Legal</span>
          </div>
        </div>
      </div>
    </footer>
  )
}