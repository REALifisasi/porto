import { useEffect, useRef, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [hidden, setHidden] = useState(false)
  const lastY = useRef(0)

  useEffect(() => {
    lastY.current = window.scrollY
    const onScroll = () => {
      const y = window.scrollY
      if (open) {
        lastY.current = y
        return
      }
      if (y > lastY.current && y > 120) setHidden(true)
      else if (y < lastY.current) setHidden(false)
      lastY.current = y
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [open])

  const { t } = useLanguage()
  const navLinks = t.nav.links
  return (
    <>
    <header
      onMouseEnter={() => setHidden(false)}
      className={`sticky top-0 z-50 border-b border-border bg-background shadow-none transition-transform duration-300 ${hidden && !open ? '-translate-y-full' : 'translate-y-0'}`}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-white"
      >
        {t.nav.skipToContent}
      </a>
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#top" className="font-pixel text-lg font-bold tracking-wider text-foreground interactive-focus rounded-md">
          RNF<span className="text-primary">.</span>
        </a>
        <nav aria-label={t.nav.mainLabel} className="hidden items-center gap-6 lg:flex">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold uppercase tracking-wider text-foreground transition-all duration-200 hover:text-primary interactive-focus rounded-md"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-muted text-foreground interactive-focus"
            aria-expanded={open}
            aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>
      {open ? (
        <nav aria-label={t.nav.mobileLabel} className="border-t border-border bg-background px-4 py-4 lg:hidden">
          <ul className="flex flex-col gap-3">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-2 py-2 text-sm font-semibold uppercase tracking-wider interactive-focus"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      ) : null}
    </header>
    {hidden && !open ? (
      <div aria-hidden="true" onMouseEnter={() => setHidden(false)} className="fixed inset-x-0 top-0 z-40 h-8" />
    ) : null}
    </>
  )
}
