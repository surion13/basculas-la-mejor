import Icon from './Icon'
import { stats } from '../data'

export default function Stats() {
  return (
    <section className="w-full bg-surface-container-low py-space-xl">
      <div className="w-full max-w-[1280px] mx-auto px-gutter">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {stats.map((s) => (
            <div key={s.title} className="p-space-lg rounded-sm bg-surface shadow-xs flex flex-col justify-between">
              <div className="flex items-center justify-between mb-space-sm">
                <span className="font-label-sm text-label-sm text-tertiary uppercase tracking-wider font-bold">
                  {s.title}
                </span>
                <Icon name={s.icon} className={`${s.iconColor} text-2xl`} />
              </div>
              <div className="font-headline-xl text-headline-xl text-on-surface font-extrabold mb-space-xs tracking-tight">
                {s.value}
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}