'use client';

import * as React from 'react';
import { Mail, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Newsletter() {
  const [submitted, setSubmitted] = React.useState(false);
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 my-16">
      <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-900 text-white shadow-2xl relative overflow-hidden text-center space-y-6">
        <div className="w-12 h-12 rounded-2xl bg-white/20 backdrop-blur-md text-white flex items-center justify-center mx-auto">
          <Mail className="w-6 h-6" />
        </div>

        <div className="max-w-xl mx-auto space-y-2">
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-tight">
            Get Weekly Free Decks & Date Ideas
          </h2>
          <p className="text-sm text-emerald-100 leading-relaxed">
            Join 45,000+ party hosts and couples receiving fresh questions, game variations, and relationship prompts every Thursday.
          </p>
        </div>

        {submitted ? (
          <div className="flex items-center justify-center gap-2 p-4 rounded-xl bg-white/20 text-white font-medium text-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-300" />
            Thank you! Check your inbox for your first free card deck pack.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address..."
              required
              className="flex-grow px-4 py-3 rounded-xl bg-white text-slate-900 placeholder:text-slate-400 text-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <Button type="submit" variant="default" size="md" className="bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold">
              Subscribe Free
            </Button>
          </form>
        )}

        <p className="text-[11px] text-emerald-200/80">
          No spam, ever. Unsubscribe anytime with one click.
        </p>
      </div>
    </section>
  );
}
