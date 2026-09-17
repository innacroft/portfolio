import { createContext, useContext, useEffect, useMemo, useState } from 'react'

const KEY = 'inna-portfolio-lang'
const I18nContext = createContext(null)

/** Un valor traducible es { en, es }. Cualquier otra cosa se devuelve tal cual. */
export function pick(value, lang) {
  if (value && typeof value === 'object' && !Array.isArray(value) && 'en' in value) {
    return value[lang] ?? value.en
  }
  return value
}

export function I18nProvider({ children }) {
  const [lang, setLang] = useState('en')

  // El idioma guardado manda; si no hay, se usa el del navegador.
  useEffect(() => {
    let stored = null
    try {
      stored = localStorage.getItem(KEY)
    } catch {
      /* modo privado o storage bloqueado: se queda en inglés */
    }
    if (stored === 'en' || stored === 'es') {
      setLang(stored)
    } else if (typeof navigator !== 'undefined' && navigator.language?.startsWith('es')) {
      setLang('es')
    }
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(KEY, lang)
    } catch {
      /* si no se puede guardar, el cambio igual aplica en esta sesión */
    }
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((l) => (l === 'en' ? 'es' : 'en')),
      t: (v) => pick(v, lang),
    }),
    [lang],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n debe usarse dentro de <I18nProvider>')
  return ctx
}
