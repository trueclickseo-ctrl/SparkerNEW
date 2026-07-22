export const LOCALES = ['en'] as const;

export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const RTL_LOCALES: string[] = [];

export const LOCALE_NAMES: Record<string, { name: string; nativeName: string; flag: string; currency: string }> = {
  en: { name: 'English', nativeName: 'English', flag: '🇺🇸', currency: 'USD' },
};

export function isRTL(locale: string): boolean {
  return RTL_LOCALES.includes(locale);
}
