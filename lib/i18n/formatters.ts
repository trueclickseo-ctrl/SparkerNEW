import { Locale, LOCALE_NAMES } from './config';

export function formatNumber(value: number, locale: Locale): string {
  try {
    return new Intl.NumberFormat(locale).format(value);
  } catch {
    return value.toLocaleString();
  }
}

export function formatDate(date: Date | string | number, locale: Locale): string {
  const d = typeof date === 'string' || typeof date === 'number' ? new Date(date) : date;
  try {
    return new Intl.DateTimeFormat(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    }).format(d);
  } catch {
    return d.toDateString();
  }
}

export function formatCurrency(amount: number, locale: Locale, currencyOverride?: string): string {
  const currency = currencyOverride || LOCALE_NAMES[locale]?.currency || 'USD';
  try {
    return new Intl.NumberFormat(locale, {
      style: 'currency',
      currency,
    }).format(amount);
  } catch {
    return `${currency} ${amount}`;
  }
}
