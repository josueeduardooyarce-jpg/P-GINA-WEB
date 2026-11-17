'use client'

import { MotionConfig } from 'framer-motion'
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react'
import { defaultLocale, dictionaries, locales, type Dictionary, type Locale } from '@/lib/i18n'

type I18nContextValue = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Dictionary
}

const I18nContext = createContext<I18nContextValue | null>(null)
const STORAGE_KEY = 'locale'

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(defaultLocale)

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY)
    if (stored && (locales as readonly string[]).includes(stored)) {
      setLocaleState(stored as Locale)
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = locale
  }, [locale])

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
  }, [])

  const value = useMemo(
    () => ({ locale, setLocale, t: dictionaries[locale] }),
    [locale, setLocale],
  )

  return (
    <I18nContext.Provider value={value}>
      <MotionConfig reducedMotion="user">{children}</MotionConfig>
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (!context) throw new Error('useI18n must be used within I18nProvider')
  return context
}
