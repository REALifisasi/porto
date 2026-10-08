import { useLanguage } from '../../i18n/LanguageContext'

const statStyles = ['bg-blue-500 text-white', 'bg-amber-400 text-foreground', 'bg-emerald-400 text-foreground']

export default function StatTriad() {
  const { t } = useLanguage()
  const stats = t.diagrams.stats.map((s, i) => ({ ...s, bg: statStyles[i % statStyles.length] }))
  return (
    <div className="rounded-lg bg-white p-6 shadow-none sm:p-8" role="img" aria-label={t.diagrams.statTriadAria}>
      <p className="font-pixel text-xs font-semibold uppercase tracking-wider text-foreground/70">{t.diagrams.statTriadTitle}</p>
      <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
        {stats.map((s) => (
          <div key={s.label} className={`rounded-md px-4 py-4 text-center shadow-none ${s.bg}`}>
            <p className="text-lg font-extrabold">{s.label}</p>
            <p className={`mt-1 text-sm ${s.bg.includes('white') ? 'text-white/85' : 'text-foreground/80'}`}>{s.desc}</p>
          </div>
        ))}
      </div>
      <p className="mt-4 text-center text-sm text-foreground/70">{t.diagrams.statTriadFootnote}</p>
    </div>
  )
}
