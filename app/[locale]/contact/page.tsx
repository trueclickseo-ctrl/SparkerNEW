'use client';

import * as React from 'react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Mail, Sparkles, Send, CheckCircle2, HeartHandshake, ShieldCheck, MessageSquarePlus } from 'lucide-react';

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct mailto link targetting trueclickseo@gmail.com with custom subject
    const targetEmail = 'trueclickseo@gmail.com';
    const emailSubject = encodeURIComponent(
      formData.subject
        ? `Message from Sparkers Games - ${formData.subject}`
        : 'Message from Sparkers Games'
    );
    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open default mail client directly
    window.location.href = `mailto:${targetEmail}?subject=${emailSubject}&body=${emailBody}`;
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
            Have an idea for a custom card deck, partnership, or suggestion for Sparkers Games? We read every single message!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Fun & Interesting Info Cards (No Dummy Emails) */}
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
                <ShieldCheck className="w-4 h-4" /> 100% Direct Delivery
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                Your message is dispatched straight to our core team at <strong>trueclickseo@gmail.com</strong>.
              </p>
            </div>
          </div>

          {/* Interactive Contact Form */}
          <div className="md:col-span-2 p-8 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm space-y-6">
            <div className="space-y-1">
              <h2 className="text-xl font-heading font-bold text-slate-900 dark:text-white">Send Us a Direct Message</h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">Fill in the details below and hit send!</p>
            </div>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-200 dark:border-emerald-800 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 dark:bg-emerald-900 text-emerald-600 dark:text-emerald-300 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-heading font-bold text-lg text-emerald-950 dark:text-emerald-200">
                  Message Dispatched!
                </h3>
                <p className="text-xs text-emerald-800 dark:text-emerald-300 max-w-md mx-auto leading-relaxed">
                  Your email client has opened with your message pre-filled to <strong>trueclickseo@gmail.com</strong> with the subject <em>&quot;Message from Sparkers Games&quot;</em>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-emerald-700 dark:text-emerald-400 underline cursor-pointer"
                >
                  Send another message
                </button>
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
                    <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Email Address</label>
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
                  <Send className="w-4 h-4" /> Send Message to trueclickseo@gmail.com
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
