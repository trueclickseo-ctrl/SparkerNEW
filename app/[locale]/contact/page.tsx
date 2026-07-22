'use client';

import * as React from 'react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Mail, Sparkles, Send, CheckCircle2, HeartHandshake, ShieldCheck, MessageSquarePlus, ExternalLink } from 'lucide-react';

export default function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams.locale;

  const [submitted, setSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const targetEmail = 'trueclickseo@gmail.com';
  const mailtoSubject = encodeURIComponent(
    formData.subject
      ? `Message from Sparkers Games - ${formData.subject}`
      : 'Message from Sparkers Games'
  );
  const mailtoBody = encodeURIComponent(
    `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
  );
  const mailtoUrl = `mailto:${targetEmail}?subject=${mailtoSubject}&body=${mailtoBody}`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Trigger direct email opening
    window.location.href = mailtoUrl;
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Contact Us', url: `/${locale}/contact` },
        ]}
      />

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow space-y-10">
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <Badge variant="couples" className="px-3 py-1 text-xs">
            <Sparkles className="w-3.5 h-3.5 mr-1" /> Get in Touch with Sparkers
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Contact &amp; Feedback Hub
          </h1>
          <p className="text-base text-slate-600 dark:text-slate-300 leading-relaxed">
            Have an idea for a custom card deck, partnership, or suggestion for Sparkers Games? Send a direct email to <strong>trueclickseo@gmail.com</strong>!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Info Side Column */}
          <div className="space-y-4 md:col-span-1">
            <div className="p-5 rounded-2xl bg-gradient-to-tr from-amber-50 to-orange-50 dark:from-slate-900 dark:to-slate-800 border border-amber-200/80 dark:border-amber-900/50 space-y-2.5">
              <div className="flex items-center gap-2 text-amber-700 dark:text-amber-400 font-bold text-sm">
                <MessageSquarePlus className="w-4 h-4" /> Request a Custom Deck
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Want a unique Truth or Dare category or a custom couples framework? Send us your prompt ideas!
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-tr from-rose-50 to-pink-50 dark:from-slate-900 dark:to-slate-800 border border-rose-200/80 dark:border-rose-900/50 space-y-2.5">
              <div className="flex items-center gap-2 text-rose-700 dark:text-rose-400 font-bold text-sm">
                <HeartHandshake className="w-4 h-4" /> Community First
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Sparkers Games is built for real human connection. Every prompt dataset is hand-curated and community verified.
              </p>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-tr from-emerald-50 to-teal-50 dark:from-slate-900 dark:to-slate-800 border border-emerald-200/80 dark:border-emerald-900/50 space-y-2.5">
              <div className="flex items-center gap-2 text-emerald-700 dark:text-emerald-400 font-bold text-sm">
                <Mail className="w-4 h-4" /> Direct Contact Email
              </div>
              <p className="text-xs font-semibold text-slate-800 dark:text-slate-200 select-all">
                trueclickseo@gmail.com
              </p>
              <a
                href={`mailto:${targetEmail}?subject=Message%20from%20Sparkers%20Games`}
                className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <span>Click to Email Directly</span> <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Interactive Form & Action Box */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">Send Us a Direct Email</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Fill in your details below to compose and send your email to <strong>trueclickseo@gmail.com</strong>.</p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-emerald-950 dark:text-emerald-200">
                  Email Prepared!
                </h3>
                <p className="text-xs text-emerald-800 dark:text-emerald-300 max-w-md mx-auto leading-relaxed">
                  If your email app didn&apos;t automatically launch, click the button below to open Gmail or your mail app directly:
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={mailtoUrl}
                    className="py-2.5 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center gap-1.5 transition-colors"
                  >
                    <Mail className="w-4 h-4" /> Open Email Client Now
                  </a>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs text-slate-600 dark:text-slate-400 hover:underline"
                  >
                    Edit Form
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Your Name</label>
                    <input
                      type="text"
                      placeholder="e.g. Alex Smith"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Your Email Address</label>
                    <input
                      type="email"
                      placeholder="alex@example.com"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Subject</label>
                  <input
                    type="text"
                    placeholder="New Card Deck Suggestion / Feedback"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Your Message</label>
                  <textarea
                    rows={4}
                    placeholder="Type your message, prompt ideas, or feedback..."
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" /> Send Email to trueclickseo@gmail.com
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
