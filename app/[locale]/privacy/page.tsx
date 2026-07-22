import * as React from 'react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Privacy Policy', url: `/${locale}/privacy` },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow space-y-10">
        <div className="text-center space-y-4">
          <Badge variant="amber" className="px-3 py-1 text-xs">
            <Shield className="w-3.5 h-3.5 mr-1" /> Data Protection &amp; Privacy
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Privacy Policy
          </h1>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Last Updated: July 2026 • Effective Immediately
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-8 text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Lock className="w-5 h-5 text-emerald-600" /> 1. Commitment to User Privacy
            </h2>
            <p>
              At <strong>Sparkers Games</strong> (sparkersgames.com), accessible from https://sparkersgames.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document outlines the types of information collected and how it is used.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <Eye className="w-5 h-5 text-indigo-600" /> 2. Information We Collect
            </h2>
            <p>
              Sparkers Games is designed as a client-side digital card application. We do NOT require users to create an account, log in, or submit personal identification to play game decks.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-xs text-slate-600 dark:text-slate-400">
              <li><strong>Local Game Progress:</strong> Your card shuffles, favorite bookmarks, and deck progress are saved strictly inside your local web browser storage (localStorage).</li>
              <li><strong>Standard Analytics:</strong> Like most websites, we may utilize standard non-personally identifiable server logs (browser type, IP address, referring pages) strictly for website performance optimization.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white flex items-center gap-2">
              <FileText className="w-5 h-5 text-amber-600" /> 3. Cookies &amp; Third-Party Services
            </h2>
            <p>
              We do not track user identities across external websites. Any third-party links (such as merchant links to physical card products on Amazon) are subject to the respective privacy policies of those external merchant sites.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">4. Contacting Privacy Support</h2>
            <p>
              If you have additional questions or require more information about our Privacy Policy, please contact us via email at <strong>privacy@sparkersgames.com</strong>.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
