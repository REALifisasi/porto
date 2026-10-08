import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'
import { translations } from './translations'
import type { Content, Language } from './translations'

interface LanguageContextValue {
  lang: Language
  setLang: (l: Language) => void
  toggle: () => void
  t: Content
}

const LanguageContext = createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = 'rafi-portfolio-lang'

function getInitialLang(): Language {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved === 'id' || saved === 'en') return saved
  } catch {
  }
  const nav = typeof navigator !== 'undefined' ? navigator.language.toLowerCase() : 'id'
  return nav.startsWith('en') ? 'en' : 'id'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(getInitialLang)

  const setLang = useCallback((l: Language) => {
    setLangState(l)
    try {
      localStorage.setItem(STORAGE_KEY, l)
    } catch {
    }
  }, [])

  const toggle = useCallback(() => {
    setLangState((prev) => {
      const next: Language = prev === 'id' ? 'en' : 'id'
      try {
        localStorage.setItem(STORAGE_KEY, next)
      } catch {
      }
      return next
    })
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo<LanguageContextValue>(
    () => ({ lang, setLang, toggle, t: translations[lang] }),
    [lang, setLang, toggle],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
