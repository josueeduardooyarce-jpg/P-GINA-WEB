import { en } from './en'
import { es, type Dictionary } from './es'

export const locales = ['es', 'en'] as const
export type Locale = (typeof locales)[number]
export const defaultLocale: Locale = 'es'

export const dictionaries: Record<Locale, Dictionary> = { es, en }

export type { Dictionary }
