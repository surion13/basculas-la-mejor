import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import { solutionOptions } from '../data'

const inputClass =
  'w-full px-space-sm py-2 rounded-sm bg-surface-container-low text-on-surface font-body-sm text-body-sm focus:outline-hidden focus:ring-2 focus:ring-tertiary'
const labelClass = 'block font-label-md text-label-md text-on-surface uppercase mb-1'

function Field({ label, children }) {
  return (
    <div>
      <label className={labelClass}>{label}</label>
      {children}
    </div>
  )
}

export default function QuoteSection() {
  const [sent, setSent] = useState(false)
  const timeoutRef = useRef(null)

  useEffect(() => () => clearTimeout(timeoutRef.current), [])

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí iría el envío real (fetch/axios) a tu backend o servicio de correo.
    e.currentTarget.reset()
    setSent(true)
    clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setSent(false), 6000)
  }

  return (
    <section className="w-full py-space-xl bg-inverse-surface text-inverse-on-surface" id="cotizador-rapido">
      <div className="w-full max-w-[1280px] mx-auto px-gutter">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
          {/* Texto + contacto */}
          <div className="lg:col-span-6 space-y-space-md pr-0 lg:pr-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-sm bg-primary text-on-primary font-label-sm text-label-sm uppercase font-bold tracking-wider">
              <Icon name="bolt" className="text-[16px]" /> Respuesta Técnica Inmediata
            </div>
            <h3 className="font-headline-lg text-headline-lg text-on-primary tracking-tight">
              ¿Necesitas Asesoría en Selección de Báscula o Calibración Urgente?
            </h3>
            <p className="font-body-lg text-body-lg text-surface-container-high leading-relaxed">
              Nuestros ingenieros metrólogos están disponibles 24/7 para evaluar su capacidad de carga requerida,
              condiciones de instalación civil o programar visitas con camión laboratorio móvil.
            </p>
            <div className="flex flex-col sm:flex-row gap-space-md pt-space-sm">
              <div className="flex items-start gap-space-sm flex-1">
                <Icon name="call_quality" className="text-primary-fixed-dim text-3xl" />
                <div>
                  <span className="font-label-sm text-label-sm text-surface-variant uppercase block">Línea Directa Nacional</span>
                  <div className="font-headline-sm text-headline-sm text-on-primary font-bold whitespace-nowrap">
                    +57 (601) 840-9000
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-space-sm flex-1 min-w-0">
                <Icon name="mark_email_read" className="text-tertiary-fixed-dim text-3xl" />
                <div className="min-w-0 flex-1">
                  <span className="font-label-sm text-label-sm text-surface-variant uppercase block">Ingeniería &amp; Proyectos</span>
                  <div className="font-headline-sm text-on-primary font-bold text-[16px] md:text-[18px] break-all leading-tight">
                    ventas@basculaslamejor.com
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Formulario */}
          <div className="lg:col-span-6">
            <div className="bg-surface-container-lowest text-on-surface p-space-lg rounded-sm shadow-xl">
              <div className="mb-space-md">
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-bold">Solicitud de Cotización en Línea</h4>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  Complete los datos y recibirá propuesta técnica económica en menos de 2 horas hábiles.
                </p>
              </div>

              <form className="space-y-space-sm" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                  <Field label="Nombre Completo *">
                    <input className={inputClass} placeholder="Ing. Alejandro Reyes" required type="text" />
                  </Field>
                  <Field label="Empresa / Razón Social *">
                    <input className={inputClass} placeholder="Agrícola Colombiana S.A.S." required type="text" />
                  </Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                  <Field label="Correo Electrónico *">
                    <input className={inputClass} placeholder="alejandro@empresa.com" required type="email" />
                  </Field>
                  <Field label="Teléfono / WhatsApp *">
                    <input className={inputClass} placeholder="+57 310 000 0000" required type="tel" />
                  </Field>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                  <Field label="Tipo de Solución Requerida *">
                    <select className={inputClass}>
                      {solutionOptions.map((o) => (
                        <option key={o}>{o}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Ciudad / Ubicación de Planta *">
                    <input className={inputClass} placeholder="Bogotá, Medellín, Cali, etc." required type="text" />
                  </Field>
                </div>
                <Field label="Detalles Técnicos o Requerimiento Específico">
                  <textarea
                    className={inputClass}
                    rows={3}
                    placeholder="Indicar capacidad deseada, condiciones de trabajo o fecha de auditoría de calibración..."
                  />
                </Field>

                <button
                  type="submit"
                  className="w-full py-space-sm rounded-sm bg-primary hover:bg-primary-container text-on-primary font-label-lg text-label-lg uppercase tracking-wider transition-all shadow-md flex items-center justify-center gap-space-xs"
                >
                  <Icon name="send" className="text-[20px]" /> Enviar Solicitud a Ingeniería
                </button>

                {sent && (
                  <div
                    role="status"
                    className="text-center p-space-xs rounded-sm bg-surface-container text-tertiary font-label-md text-label-md"
                  >
                    ✓ Solicitud recibida. Un asesor de ingeniería se comunicará brevemente.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}