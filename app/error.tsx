'use client';

import * as React from 'react';
import { Button } from '@/components/ui/button';
import { RotateCcw, AlertTriangle } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error('Unhandled app exception:', error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 text-center">
      <div className="max-w-md space-y-6">
        <div className="w-14 h-14 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-600 flex items-center justify-center mx-auto shadow-md">
          <AlertTriangle className="w-7 h-7" />
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">
            Something Went Wrong
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            An unexpected error occurred while rendering this session.
          </p>
        </div>

        <Button variant="default" size="md" onClick={() => reset()}>
          <RotateCcw className="w-4 h-4" /> Try Again
        </Button>
      </div>
    </div>
  );
}
