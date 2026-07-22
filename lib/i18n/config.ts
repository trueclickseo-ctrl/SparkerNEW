export const LOCALES = [
  'en', 'zh-Hans', 'es', 'ar', 'pt', 'fr', 'ja', 'ru', 'de', 'ko',
  'id', 'tr', 'it', 'vi', 'pl', 'nl', 'th', 'uk', 'cs', 'ro',
  'el', 'hu', 'sv', 'da', 'fi', 'nb', 'hr'
] as const;

export type Locale = typeof LOCALES[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const RTL_LOCALES: Locale[] = ['ar'];

export const LOCALE_NAMES: Record<Locale, { name: string; nativeName: string; flag: string; currency: string }> = {
  en: { name: 'English', nativeName: 'English', flag: '🇺🇸', currency: 'USD' },
  'zh-Hans': { name: 'Chinese (Simplified)', nativeName: '简体中文', flag: '🇨🇳', currency: 'CNY' },
  es: { name: 'Spanish', nativeName: 'Español', flag: '🇪🇸', currency: 'EUR' },
  ar: { name: 'Arabic', nativeName: 'العربية', flag: '🇸🇦', currency: 'SAR' },
  pt: { name: 'Portuguese', nativeName: 'Português', flag: '🇧🇷', currency: 'BRL' },
  fr: { name: 'French', nativeName: 'Français', flag: '🇫🇷', currency: 'EUR' },
  ja: { name: 'Japanese', nativeName: '日本語', flag: '🇯🇵', currency: 'JPY' },
  ru: { name: 'Russian', nativeName: 'Русский', flag: '🇷🇺', currency: 'RUB' },
  de: { name: 'German', nativeName: 'Deutsch', flag: '🇩🇪', currency: 'EUR' },
  ko: { name: 'Korean', nativeName: '한국어', flag: '🇰🇷', currency: 'KRW' },
  id: { name: 'Indonesian', nativeName: 'Bahasa Indonesia', flag: '🇮🇩', currency: 'IDR' },
  tr: { name: 'Turkish', nativeName: 'Türkçe', flag: '🇹🇷', currency: 'TRY' },
  it: { name: 'Italian', nativeName: 'Italiano', flag: '🇮🇹', currency: 'EUR' },
  vi: { name: 'Vietnamese', nativeName: 'Tiếng Việt', flag: '🇻🇳', currency: 'VND' },
  pl: { name: 'Polish', nativeName: 'Polski', flag: '🇵🇱', currency: 'PLN' },
  nl: { name: 'Dutch', nativeName: 'Nederlands', flag: '🇳🇱', currency: 'EUR' },
  th: { name: 'Thai', nativeName: 'ไทย', flag: '🇹🇭', currency: 'THB' },
  uk: { name: 'Ukrainian', nativeName: 'Українська', flag: '🇺🇦', currency: 'UAH' },
  cs: { name: 'Czech', nativeName: 'Čeština', flag: '🇨🇿', currency: 'CZK' },
  ro: { name: 'Romanian', nativeName: 'Română', flag: '🇷🇴', currency: 'RON' },
  el: { name: 'Greek', nativeName: 'Ελληνικά', flag: '🇬🇷', currency: 'EUR' },
  hu: { name: 'Hungarian', nativeName: 'Magyar', flag: '🇭🇺', currency: 'HUF' },
  sv: { name: 'Swedish', nativeName: 'Svenska', flag: '🇸🇪', currency: 'SEK' },
  da: { name: 'Danish', nativeName: 'Dansk', flag: '🇩🇰', currency: 'DKK' },
  fi: { name: 'Finnish', nativeName: 'Suomi', flag: '🇫🇮', currency: 'EUR' },
  nb: { name: 'Norwegian Bokmål', nativeName: 'Norsk bokmål', flag: '🇳🇴', currency: 'NOK' },
  hr: { name: 'Croatian', nativeName: 'Hrvatski', flag: '🇭🇷', currency: 'EUR' },
};

export function isRTL(locale: string): boolean {
  return RTL_LOCALES.includes(locale as Locale);
}
