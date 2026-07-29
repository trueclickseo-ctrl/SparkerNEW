import * as React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart, Dices, Sliders, ArrowRight } from 'lucide-react';
import { constructMetadata } from '@/lib/seo/metadata';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  return constructMetadata({
    title: 'Interactive Relationship Quizzes & Game Generators',
    description: 'Assess your love style or use our custom party wheel spinner and nickname generator tools.',
    path: '/quizzes/',
    locale: resolvedParams.locale,
    ogImageSlug: 'quizzes-index',
    keywords: ['relationship quiz', 'love languages', 'couple nickname generator', 'random wheel spinner'],
  });
}

export default async function QuizzesHubPage({ params }: PageProps) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale;

  const tools = [
    {
      id: 'love-language',
      name: 'Love Language Quiz',
      category: 'Relationship Quiz',
      description: 'Find out your primary love language (Words, Time, Gifts, Service, Touch) with immediate breakdown.',
      href: `/${locale}/quizzes/love-language/`,
      badge: 'Most Popular',
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      variant: 'couples' as const,
    },
    {
      id: 'couple-name',
      name: 'Couple Name Generator',
      category: 'Generator Utility',
      description: 'Blend partner names into adorable and fun couple nicknames instantly.',
      href: `/${locale}/generators/couple-name/`,
      badge: 'Interactive',
      icon: <Sliders className="w-6 h-6 text-teal-500" />,
      variant: 'default' as const,
    },
    {
      id: 'wheel-spinner',
      name: 'Random Wheel Spinner',
      category: 'Party Generator',
      description: 'Custom decision wheel for dares, party turns, and game picking.',
      href: `/${locale}/generators/wheel-spinner/`,
      badge: 'HTML5 Canvas',
      icon: <Dices className="w-6 h-6 text-indigo-500" />,
      variant: 'play' as const,
    },
  ];

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Quizzes & Generators', url: `/${locale}/quizzes` },
        ]}
      />

      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <Badge variant="amber" className="px-3 py-1">
          <Sparkles className="w-3.5 h-3.5" /> Interactive Tools & Assessments
        </Badge>
        <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
          Quizzes & Decision Generators
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400">
          Psychology-backed relationship quizzes and custom party randomizers designed for couples and groups.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
        {tools.map((tool) => (
          <Card key={tool.id} variant={tool.variant} className="flex flex-col justify-between">
            <CardHeader>
              <div className="flex items-center justify-between">
                <Badge variant={tool.variant}>{tool.category}</Badge>
                <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-100 text-amber-900 dark:bg-amber-950/60 dark:text-amber-300">
                  {tool.badge}
                </span>
              </div>
              <div className="p-3 rounded-2xl bg-slate-100 dark:bg-slate-800 w-max mt-3">
                {tool.icon}
              </div>
              <CardTitle className="mt-2">{tool.name}</CardTitle>
              <CardDescription>{tool.description}</CardDescription>
            </CardHeader>

            <CardFooter>
              <Link href={tool.href} className="w-full">
                <Button variant={tool.variant} size="sm" className="w-full">
                  Launch Tool <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
