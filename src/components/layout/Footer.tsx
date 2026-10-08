import { useLanguage } from '../../i18n/LanguageContext'

export default function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-foreground py-8 text-white shadow-none">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6 lg:px-8">
        <p className="text-sm font-medium">{t.footer.copyright}</p>
        <p className="font-pixel text-xs uppercase tracking-wider text-white/70">{t.footer.tagline}</p>
      </div>
    </footer>
  )
}
