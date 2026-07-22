import * as React from 'react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Mail, MessageSquare, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default async function ContactPage({
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
          { name: 'Contact Us', url: `/${locale}/contact` },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow space-y-10">
        <div className="text-center space-y-4">
          <Badge variant="couples" className="px-3 py-1 text-xs">
            <Mail className="w-3.5 h-3.5 mr-1" /> Support &amp; Enquiries
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact Us
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 max-w-xl mx-auto leading-relaxed">
            Have a suggestion for a new game deck, partnership inquiry, or technical feedback? We’d love to hear from you!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Details Info */}
          <div className="space-y-6 md:col-span-1">
            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm">
                <Mail className="w-4 h-4" /> Email Us
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                support@sparkersgames.com
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-indigo-600 font-bold text-sm">
                <MessageSquare className="w-4 h-4" /> Game Deck Requests
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                cards@sparkersgames.com
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-2">
              <div className="flex items-center gap-2 text-amber-600 font-bold text-sm">
                <MapPin className="w-4 h-4" /> Website
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400">
                https://sparkersgames.com
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
            <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">Send Us a Message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Your Name</label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    required
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Subject</label>
                <input
                  type="text"
                  placeholder="Deck Suggestion / General Inquiry"
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Your Message</label>
                <textarea
                  rows={4}
                  placeholder="Share your thoughts or card ideas with us..."
                  required
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <Send className="w-4 h-4" /> Send Message
              </button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
