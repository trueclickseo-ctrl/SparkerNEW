import * as React from 'react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { FileText, ShieldCheck, Scale, AlertCircle } from 'lucide-react';

export default async function TermsOfServicePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Terms of Service', url: `/${locale}/terms` },
        ]}
      />

      
        <div className="text-center space-y-4">
          <Badge variant="couples" className="px-3 py-1 text-xs">
            <Scale className="w-3.5 h-3.5 mr-1" /> Legal Terms &amp; Usage
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Terms of Service
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last Updated: July 2026 • Effective Immediately
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-8 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-indigo-600" /> 1. Acceptance of Terms
            </h2>
            <p>
              By accessing and using <strong>Sparkers Games</strong> (sparkersgames.com), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to abide by these terms, please do not use this site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-600" /> 2. Safe Space &amp; Age Guidance
            </h2>
            <p>
              Our platform offers game decks tailored for various audiences (family-friendly, educational, party, and 18+ adult categories). Users must exercise discretion when selecting adult or spicy categories.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-amber-600" /> 3. Intellectual Property &amp; Content
            </h2>
            <p>
              All original prompt datasets, card deck engines, UI assets, and logos on Sparkers Games are protected by intellectual property laws. Content may not be scraped or republished without explicit permission.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">4. Modifications</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of the platform constitutes acceptance of revised terms.
            </p>
          </section>
        </div>
      
    </>
  );
}
