import * as React from 'react';
import Link from 'next/link';
import { EDUCATIONAL_DECKS } from '@/lib/data/educational-games';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { GraduationCap, Brain, Users, ArrowRight, Lightbulb } from 'lucide-react';

export default async function EducationalDirectoryPage({
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
          { name: 'Educational & Brain Gym', url: `/${locale}/educational` },
        ]}
      />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow space-y-10">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <Badge variant="amber" className="px-3 py-1 text-xs">
            <GraduationCap className="w-3.5 h-3.5 mr-1" /> Educational & Brainstorming Hub
          </Badge>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-extrabold text-slate-900 dark:text-white tracking-tight">
            Academic, Teacher & Brainstorming Decks
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base leading-relaxed">
            Curated prompt decks with 25 questions each for school classrooms, university seminars, faculty reflections, student study breaks, and creative brain exercise gyms.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {EDUCATIONAL_DECKS.map((deck) => (
            <Card key={deck.id} className="hover:border-amber-300 dark:hover:border-amber-700 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between">
              <CardHeader className="space-y-2">
                <div className="flex items-center justify-between">
                  <Badge variant="couples">{deck.audience}</Badge>
                  {deck.badge && <Badge variant="amber">{deck.badge}</Badge>}
                </div>
                <CardTitle className="text-xl font-bold font-heading text-slate-900 dark:text-white">
                  {deck.title}
                </CardTitle>
                <CardDescription className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">
                  {deck.shortDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-4 text-xs text-slate-500 dark:text-slate-400">
                  <span className="flex items-center gap-1"><Brain className="w-3.5 h-3.5 text-amber-500" /> {deck.prompts.length} Digital Cards</span>
                  <span className="flex items-center gap-1"><Lightbulb className="w-3.5 h-3.5 text-amber-500" /> 100% Free</span>
                </div>
                <Link
                  href={`/${locale}/educational/${deck.id}`}
                  className="w-full py-2 px-4 rounded-xl bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <span>Play Digital Deck ({deck.prompts.length} Cards)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
}
