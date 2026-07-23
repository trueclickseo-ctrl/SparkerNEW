import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
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
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Educational & Brain Gym', url: `/${locale}/educational` },
        ]}
      />

      
        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto mb-12">
          <div className="text-center lg:text-left space-y-4">
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
          {/* Educational Image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-900/10 border border-amber-100 dark:border-slate-800">
              <Image
                src="/images/educational-students.jpg"
                alt="College students engaged in a classroom icebreaker discussion"
                width={560}
                height={320}
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/30 to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-sm px-3 py-2 rounded-xl shadow-lg border border-amber-100 dark:border-slate-700">
                <span className="text-lg">🎓</span>
                <div>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">5 Academic Decks</p>
                  <p className="text-[10px] text-slate-500">125 curated classroom prompts</p>
                </div>
              </div>
            </div>
          </div>
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
      
    </>
  );
}
