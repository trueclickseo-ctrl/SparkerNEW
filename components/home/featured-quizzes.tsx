import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Sliders, Dices } from 'lucide-react';

export function FeaturedQuizzes({ locale }: { locale: string }) {
  const tools = [
    {
      title: 'Love Language Quiz',
      description: 'Discover how you and your partner express & receive love.',
      icon: <Heart className="w-6 h-6 text-rose-500" />,
      href: `/${locale}/quizzes/love-language`,
      btnText: 'Start Quiz',
      variant: 'couples' as const,
    },
    {
      title: 'Attachment Style Quiz',
      description: 'Analyze secure, anxious, and avoidant relationship behaviors.',
      icon: <Sparkles className="w-6 h-6 text-amber-500" />,
      href: `/${locale}/quizzes/attachment-style`,
      btnText: 'Start Quiz',
      variant: 'default' as const,
    },
    {
      title: 'Couple Name Generator',
      description: 'Blend partner names into cute & hilarious couple nicknames.',
      icon: <Sliders className="w-6 h-6 text-teal-500" />,
      href: `/${locale}/generators/couple-name`,
      btnText: 'Generate Names',
      variant: 'default' as const,
    },
    {
      title: 'Random Wheel Spinner',
      description: 'Customizable decision wheel for dare picks and game modes.',
      icon: <Dices className="w-6 h-6 text-indigo-500" />,
      href: `/${locale}/generators/wheel-spinner`,
      btnText: 'Spin Wheel',
      variant: 'play' as const,
    },
  ];

  return (
    <section className="bg-slate-100/60 dark:bg-slate-900/40 py-16 px-4 sm:px-6 lg:px-8 my-12 border-y border-slate-200/60 dark:border-slate-800">
      <div className="max-w-7xl mx-auto space-y-8">
        <div className="text-center space-y-2 max-w-2xl mx-auto">
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
            Quizzes & Interactive Generators
          </h2>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Psychology-backed relationship quizzes and random decision utilities.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tools.map((tool, idx) => (
            <Card key={idx} variant="glass" className="flex flex-col justify-between">
              <CardHeader>
                <div className="p-3 rounded-2xl bg-white dark:bg-slate-800 shadow-sm w-max mb-3">
                  {tool.icon}
                </div>
                <CardTitle>{tool.title}</CardTitle>
                <CardDescription>{tool.description}</CardDescription>
              </CardHeader>
              <CardFooter>
                <Link href={tool.href} className="w-full">
                  <Button size="sm" variant={tool.variant} className="w-full">
                    {tool.btnText}
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
