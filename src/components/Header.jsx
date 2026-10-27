import { Link, NavLink } from 'react-router-dom'
import Icon from './Icon'
import { LOGO_URL, navLinks } from '../data'

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md shadow-[0_1px_8px_rgba(14,36,58,0.06)]">
      {/* Barra superior */}
      <div className="bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm py-space-xs">
        <div className="w-full max-w-[1280px] mx-auto px-gutter flex items-center justify-between">
          <span>SISTEMA DE GESTIÓN METROLÓGICA CERTIFICADO ISO/IEC 17025 &amp; OIML R76</span>
          <div className="flex items-center gap-space-md">
            <span className="flex items-center gap-space-xs">
              <Icon name="support_agent" className="text-[14px]" /> Soporte 24/7 Línea Nacional: 01-8000-PESAJE
            </span>
            <span className="hidden md:inline-block text-outline-variant">|</span>
            <span className="hidden md:inline-flex items-center gap-space-xs">
              <Icon name="verified" className="text-[14px]" /> Laboratorio de Metrología Acreditado
            </span>
          </div>
        </div>
      </div>

      {/* Navegación principal */}
      <div className="h-20 w-full max-w-[1280px] mx-auto px-gutter flex items-center justify-between">
        <Link className="flex items-center gap-space-sm" to="/">
          <img src={LOGO_URL} alt="Básculas la Mejor" className="h-12 w-auto object-contain py-0.5" />
        </Link>

        <nav className="hidden xl:flex items-center gap-space-md font-label-md text-label-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.label}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                'px-space-xs py-space-xs transition-colors ' +
                (isActive
                  ? 'bg-surface-container text-primary font-label-lg rounded-sm'
                  : 'text-on-surface-variant hover:text-on-surface')
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-space-md">
          <a
            aria-label="Carrito de compras"
            title="Carrito de compras"
            href="#"
            className="relative inline-flex items-center justify-center w-10 h-10 rounded-sm bg-surface-container hover:bg-surface-container-high text-on-surface hover:text-primary transition-colors"
          >
            <Icon name="shopping_cart" className="text-[22px]" />
            <span className="absolute -top-1 -right-1 flex items-center justify-center w-5 h-5 rounded-full bg-primary text-on-primary text-[10px] font-bold font-label-sm shadow-xs">
              1
            </span>
          </a>
          <Link
            to="/contacto"
            className="hidden sm:inline-flex items-center justify-center bg-primary hover:bg-primary-container text-on-primary hover:text-on-primary-container font-label-lg text-label-lg px-space-md py-space-sm rounded-sm transition-all shadow-[0_1px_3px_rgba(14,36,58,0.12)]"
          >
            <Icon name="calculate" className="mr-space-xs text-[18px]" /> Cotizar Equipos / Soporte
          </Link>
        </div>
      </div>
    </header>
  )
}