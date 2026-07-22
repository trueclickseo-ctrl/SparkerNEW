'use client';

import * as React from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { Globe } from 'lucide-react';
import { LOCALES, LOCALE_NAMES, Locale } from '@/lib/i18n/config';

export function LocaleSwitcher({ currentLocale }: { currentLocale: Locale }) {
  const router = useRouter();
  const pathname = usePathname();

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const nextLocale = e.target.value;
    // Guard against null pathname during static rendering / transitions
    const safePath = pathname || '/';
    const segments = safePath.split('/').filter((_, i) => i > 0 || safePath !== '/');
    if ((LOCALES as readonly string[]).includes(segments[1])) {
      segments[1] = nextLocale;
    } else {
      segments.splice(1, 0, nextLocale);
    }
    const nextPath = segments.join('/') || `/${nextLocale}`;
    router.push(nextPath);
  };

  return (
    <div className="relative inline-flex items-center">
      <Globe className="w-4 h-4 absolute left-2.5 text-slate-500 pointer-events-none z-10" />
      <select
        value={currentLocale}
        onChange={handleSelect}
        aria-label="Select Language"
        className="appearance-none pl-8 pr-7 py-1.5 text-xs font-medium rounded-lg bg-emerald-50/80 text-emerald-950 border border-emerald-200 hover:bg-emerald-100 dark:bg-slate-800 dark:text-slate-200 dark:border-slate-700 dark:hover:bg-slate-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 cursor-pointer"
      >
        {LOCALES.map((loc) => {
          const info = LOCALE_NAMES[loc];
          return (
            <option key={loc} value={loc}>
              {info.flag} {info.nativeName} ({loc})
            </option>
          );
        })}
      </select>
    </div>
  );
}
