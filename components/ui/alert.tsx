import * as React from 'react';
import { AlertCircle, CheckCircle, Info, TriangleAlert } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'info' | 'success' | 'warning' | 'couples';
  title?: string;
}

export function Alert({ className, variant = 'info', title, children, ...props }: AlertProps) {
  const icons = {
    info: <Info className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />,
    success: <CheckCircle className="w-5 h-5 text-teal-600 dark:text-teal-400 shrink-0" />,
    warning: <TriangleAlert className="w-5 h-5 text-amber-600 dark:text-amber-400 shrink-0" />,
    couples: <AlertCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 shrink-0" />,
  };

  const variants = {
    info: 'bg-emerald-50/80 dark:bg-emerald-950/30 border-emerald-200 dark:border-emerald-900 text-emerald-950 dark:text-emerald-200',
    success: 'bg-teal-50/80 dark:bg-teal-950/30 border-teal-200 dark:border-teal-900 text-teal-950 dark:text-teal-200',
    warning: 'bg-amber-50/80 dark:bg-amber-950/30 border-amber-200 dark:border-amber-900 text-amber-950 dark:text-amber-200',
    couples: 'bg-rose-50/80 dark:bg-rose-950/30 border-rose-200 dark:border-rose-900 text-rose-950 dark:text-rose-200',
  };

  return (
    <div
      className={cn('flex items-start gap-3 p-4 rounded-xl border text-sm', variants[variant], className)}
      {...props}
    >
      {icons[variant]}
      <div className="space-y-1">
        {title && <h4 className="font-semibold leading-none tracking-tight">{title}</h4>}
        <div className="text-xs sm:text-sm leading-relaxed opacity-90">{children}</div>
      </div>
    </div>
  );
}
