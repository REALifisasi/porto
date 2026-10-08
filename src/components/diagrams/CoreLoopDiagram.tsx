import { useLanguage } from '../../i18n/LanguageContext'

export default function CoreLoopDiagram() {
  const { t } = useLanguage()
  const layers = t.diagrams.coreLoopLayers.map((l, i) => ({
    ...l,
    bg: i === 0 ? 'bg-white' : i === 1 ? 'bg-blue-50' : 'bg-foreground text-white',
  }))
  return (
    <div className="rounded-lg bg-white p-6 shadow-none sm:p-8" role="img" aria-label={t.diagrams.coreLoopAria}>
      <p className="font-pixel text-xs font-semibold uppercase tracking-wider text-foreground/70">{t.diagrams.coreLoopTitle}</p>
      <div className="mt-4 flex flex-col items-stretch gap-2">
        {layers.map((l, i) => (
          <div key={l.label}>
            <div className={`rounded-md px-4 py-3 text-center shadow-none ${l.bg} ${i === 2 ? '' : 'border-2 border-foreground/10'}`}>
              <p className="text-base font-extrabold tracking-tightest">{l.label}</p>
              <p className={`text-sm ${i === 2 ? 'text-white/80' : 'text-foreground/70'}`}>{l.desc}</p>
            </div>
            {i < layers.length - 1 ? (
              <div aria-hidden="true" className="flex justify-center py-1 text-xl font-bold text-foreground">
                ↓
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  )
}
