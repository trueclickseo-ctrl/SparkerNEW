'use client';

import * as React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  isVisible: boolean;
  onClose: () => void;
}

export function Toast({ message, type = 'success', isVisible, onClose }: ToastProps) {
  React.useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(onClose, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 text-white shadow-xl dark:bg-emerald-900 border border-slate-700 animate-in slide-in-from-bottom-5 duration-200">
      {type === 'success' ? (
        <CheckCircle className="w-4 h-4 text-emerald-400" />
      ) : (
        <XCircle className="w-4 h-4 text-rose-400" />
      )}
      <span className="text-sm font-medium">{message}</span>
    </div>
  );
}
