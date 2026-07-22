'use client';

import { useEffect } from 'react';

export default function LocaleHtmlSync({ locale, dir }: { locale: string; dir: string }) {
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = dir;
  }, [locale, dir]);

  return null;
}
