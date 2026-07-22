'use client';

import * as React from 'react';
import Link from 'next/link';
import { ChevronRight, Home } from 'lucide-react';
import { getBreadcrumbSchema } from '@/lib/seo/jsonld';

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const schemaItems = [{ name: 'Home', url: '/' }, ...items];
  const breadcrumbSchema = getBreadcrumbSchema(schemaItems);

  return (
    <nav aria-label="Breadcrumb" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ol className="flex items-center space-x-2 rtl:space-x-reverse text-xs text-slate-500 dark:text-slate-400">
        <li>
          <Link href="/" className="hover:text-emerald-600 dark:hover:text-emerald-400 flex items-center gap-1">
            <Home className="w-3.5 h-3.5" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center space-x-2 rtl:space-x-reverse">
            <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0 rtl:rotate-180" />
            {idx === items.length - 1 ? (
              <span className="font-semibold text-slate-900 dark:text-white" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.url} className="hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
