import { Globe } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'
import { languages } from '../../i18n/translations'

export default function LanguageToggle({ compact = false, floating = false }: { compact?: boolean; floating?: boolean }) {
  const { lang, setLang } = useLanguage()

  return (
    <div
      role="group"
      aria-label="Language / Bahasa"
      className={`inline-flex items-center rounded-full border p-1 backdrop-blur ${
        floating
          ? 'fixed bottom-5 right-5 z-50 border-foreground/10 bg-white/95 shadow-xl'
          : 'border-border bg-muted'
      } ${compact ? 'w-full' : ''}`}
    >
      <span className={`flex items-center pl-2 pr-1 ${floating ? 'text-foreground' : 'text-foreground/60'}`} aria-hidden="true">
        <Globe size={16} strokeWidth={2.25} />
      </span>
      {languages.map((l) => {
        const active = l.code === lang
        return (
          <button
            key={l.code}
            type="button"
            onClick={() => setLang(l.code)}
            aria-pressed={active}
            aria-label={l.label}
            title={l.label}
            className={`h-9 rounded-full px-3 text-xs font-bold uppercase tracking-wider transition-all duration-200 interactive-focus ${
              active ? 'bg-foreground text-white shadow-none' : 'text-foreground/70 hover:text-foreground'
            } ${compact ? 'flex-1' : ''}`}
          >
            {l.shortLabel}
          </button>
        )
      })}
    </div>
  )
}
