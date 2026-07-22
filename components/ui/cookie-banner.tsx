'use client';

import * as React from 'react';
import { Cookie, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function CookieBanner() {
  const show = React.useSyncExternalStore(
    () => () => {},
    () => typeof window !== 'undefined' && !localStorage.getItem('sparkers-cookie-consent'),
    () => false
  );

  const [dismissed, setDismissed] = React.useState(false);

  if (!show || dismissed) return null;

  const handleAccept = () => {
    localStorage.setItem('sparkers-cookie-consent', 'accepted');
    setDismissed(true);
  };

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 z-50 max-w-md rounded-2xl bg-white dark:bg-slate-900 border border-emerald-100 dark:border-slate-800 shadow-2xl p-5 space-y-3 animate-in slide-in-from-bottom-5 duration-200">
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2.5">
          <div className="p-2 rounded-xl bg-amber-100 text-amber-800 dark:bg-amber-950/60 dark:text-amber-300">
            <Cookie className="w-5 h-5" />
          </div>
          <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
            Cookie & Privacy Preference
          </h4>
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="p-1 text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
          aria-label="Dismiss cookie notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
        Sparkers Games uses cookies and local session storage to save game progress, favorite decks, and locale preferences in accordance with GDPR.
      </p>

      <div className="flex justify-end gap-2 pt-1">
        <Button size="sm" variant="default" onClick={handleAccept}>
          Accept All Cookies
        </Button>
      </div>
    </div>
  );
}
