import * as React from 'react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Sparkles, Heart, Shield, Target, Users, Mail } from 'lucide-react';
import Link from 'next/link';

export default async function AboutPage({
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
          { name: 'About Sparkers Games', url: `/${locale}/about` },
        ]}
      />

      
        {/* Hero Section */}
        <div className="text-center space-y-4">
          <Badge variant="amber" className="px-3 py-1 text-xs">
            <Sparkles className="w-3.5 h-3.5 mr-1" /> Our Mission & Vision
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            About Sparkers<span className="text-amber-500">.games</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
            We build meaningful, interactive, and entertaining digital card games designed to bring people together — from long-distance lovers to lively classroom brainstorming sessions.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-rose-100 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 flex items-center justify-center">
              <Heart className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Couples 89 Framework</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Pioneering deeper emotional intimacy, flirty chemistry, and love lore through structured conversation deck frameworks.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">555+ Truth or Dare Hub</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Curating original, double-entendre, and party-tested prompts across 8 master categories for icebreakers and group fun.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">Educational &amp; Brain Gym</h3>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Empowering students, educators, and creative teams with 25-card lateral thinking and debate decks.
            </p>
          </div>
        </div>

        {/* Story Section */}
        <div className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-900/60 border border-slate-200/80 dark:border-slate-800 space-y-4">
          <h2 className="text-2xl font-heading font-bold text-slate-900 dark:text-white">Why We Built Sparkers Games</h2>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            In an increasingly digital world dominated by passive scrolling, genuine human conversation has become rare. Sparkers Games was created to solve this by transforming phones, laptops, and tablets into digital card decks that spark laughter, deep reflection, and memorable stories.
          </p>
          <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
            Our platform operates with 100% free digital access, zero mandatory downloads, and privacy-first local browser state storage.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center pt-4">
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors"
          >
            <Mail className="w-4 h-4" /> Get in Touch with Our Team
          </Link>
        </div>
      
    </>
  );
}
