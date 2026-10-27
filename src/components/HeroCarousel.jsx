import { useCallback, useEffect, useState } from 'react'
import Icon from './Icon'
import { EMBLEM_URL, heroSlides } from '../data'

const AUTOPLAY_MS = 5500

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)
  // Cambiar este valor reinicia el temporizador (igual que el startAutoPlay original)
  const [tick, setTick] = useState(0)

  const goTo = useCallback((index) => {
    setCurrent((index + heroSlides.length) % heroSlides.length)
    setTick((t) => t + 1)
  }, [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % heroSlides.length)
    }, AUTOPLAY_MS)
    return () => clearInterval(id)
  }, [paused, tick])

  return (
    <section className="relative w-full overflow-hidden bg-inverse-surface text-inverse-on-surface">
      <div
        className="relative w-full aspect-[16/9] md:aspect-[21/9] min-h-[380px] md:min-h-[480px] lg:min-h-[560px] max-h-[680px] flex items-center justify-center bg-inverse-surface overflow-hidden"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {heroSlides.map((slide, i) => (
          <div
            key={slide.label}
            className={
              'absolute inset-0 w-full h-full transition-opacity duration-700 flex items-center justify-center overflow-hidden bg-inverse-surface ' +
              (i === current ? 'opacity-100 z-20' : 'opacity-0 z-10 pointer-events-none')
            }
          >
            <img src={slide.src} alt={slide.alt} className="w-full h-full object-cover" />
          </div>
        ))}

        <button
          aria-label="Diapositiva anterior"
          onClick={() => goTo(current - 1)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-sm bg-surface/20 hover:bg-primary text-on-primary backdrop-blur-md flex items-center justify-center transition-all"
        >
          <Icon name="chevron_left" className="text-2xl" />
        </button>
        <button
          aria-label="Siguiente diapositiva"
          onClick={() => goTo(current + 1)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 w-12 h-12 rounded-sm bg-surface/20 hover:bg-primary text-on-primary backdrop-blur-md flex items-center justify-center transition-all"
        >
          <Icon name="chevron_right" className="text-2xl" />
        </button>

        <div className="absolute bottom-3 left-0 right-0 z-30 w-full max-w-[1280px] mx-auto px-gutter flex items-center justify-between pointer-events-none">
          <div className="hidden sm:flex items-center gap-space-sm bg-inverse-surface/60 backdrop-blur-md px-space-sm py-space-xs rounded-sm">
            <img alt="Básculas la Mejor Logo Emblem" className="w-10 h-7 object-contain" src={EMBLEM_URL} />
            <span className="font-label-sm text-label-sm text-primary-fixed-dim uppercase tracking-wider">
              Metrología Pesada de Confianza
            </span>
          </div>

          <div className="flex items-center gap-space-xs mx-auto sm:mx-0 bg-inverse-surface/80 backdrop-blur-md p-space-xs rounded-sm flex-wrap justify-center pointer-events-auto">
            {heroSlides.map((slide, i) => (
              <button
                key={slide.label}
                onClick={() => goTo(i)}
                aria-label={`Ir a la diapositiva ${i + 1}: ${slide.label}`}
                className={
                  'px-space-xs py-1 rounded-sm text-center font-label-sm text-label-sm transition-all flex items-center gap-1 ' +
                  (i === current
                    ? 'bg-primary text-on-primary'
                    : 'bg-surface-container-highest/30 text-surface-container-high hover:bg-surface-container-highest/60')
                }
              >
                <span>{String(i + 1).padStart(2, '0')}</span>
                <span className="hidden md:inline text-[10px]">{slide.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}