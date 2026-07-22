'use client';

import * as React from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  React.useEffect(() => {
    console.error('Global error:', error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen flex items-center justify-center bg-slate-900 text-white p-6 text-center font-sans">
        <div className="space-y-4 max-w-md">
          <h1 className="text-2xl font-bold">Sparkers Games — Application Error</h1>
          <p className="text-sm text-slate-400">A critical system exception occurred.</p>
          <button
            onClick={() => reset()}
            className="px-4 py-2 rounded-xl bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-500 cursor-pointer"
          >
            Reset Application State
          </button>
        </div>
      </body>
    </html>
  );
}
