'use client';

import * as React from 'react';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, CheckCircle, RotateCcw } from 'lucide-react';

interface Question {
  id: number;
  text: string;
  options: { text: string; language: 'words' | 'time' | 'gifts' | 'service' | 'touch' }[];
}

const QUIZ_QUESTIONS: Question[] = [
  {
    id: 1,
    text: 'What makes you feel most loved by your partner after a stressful day?',
    options: [
      { text: 'Hearing "I appreciate everything you do and I am proud of you."', language: 'words' },
      { text: 'Putting phones away and spending uninterrupted one-on-one time together.', language: 'time' },
      { text: 'Receiving a thoughtful surprise treat or small token of affection.', language: 'gifts' },
      { text: 'They take care of dinner or handle household chores without being asked.', language: 'service' },
      { text: 'A long warm hug, holding hands, or cuddling on the couch.', language: 'touch' },
    ],
  },
  {
    id: 2,
    text: 'Which gesture would hurt your feelings the most if neglected?',
    options: [
      { text: 'Harsh criticisms or lack of verbal affirmation.', language: 'words' },
      { text: 'Partner distracted by work or phones during date night.', language: 'time' },
      { text: 'Special occasions or anniversaries passed by without any thought.', language: 'gifts' },
      { text: 'Leaving all responsibilities for me to handle alone.', language: 'service' },
      { text: 'Physical distance, coldness, or lack of physical contact.', language: 'touch' },
    ],
  },
];

export default function LoveLanguageQuizPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams.locale;

  const [answers, setAnswers] = React.useState<Record<number, string>>({});
  const [completed, setCompleted] = React.useState(false);

  const handleSelect = (qId: number, lang: string) => {
    setAnswers({ ...answers, [qId]: lang });
  };

  const calculateResults = () => {
    const counts = { words: 0, time: 0, gifts: 0, service: 0, touch: 0 };
    Object.values(answers).forEach((lang) => {
      if (lang in counts) counts[lang as keyof typeof counts]++;
    });
    return counts;
  };

  const results = calculateResults();

  return (
    <div className="flex flex-col min-h-screen">
      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Quizzes', url: `/${locale}/quizzes` },
          { name: 'Love Language Quiz', url: `/${locale}/quizzes/love-language` },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow space-y-8">
        <div className="text-center space-y-3">
          <Badge variant="couples" className="px-3 py-1">
            <Heart className="w-3.5 h-3.5" /> Relationship Assessment
          </Badge>
          <h1 className="text-3xl font-heading font-extrabold text-slate-900 dark:text-white">
            Love Language Quiz
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Answer these questions to discover how you and your partner give and receive love.
          </p>
        </div>

        {!completed ? (
          <div className="space-y-6">
            {QUIZ_QUESTIONS.map((q) => (
              <Card key={q.id} variant="couples">
                <CardHeader>
                  <CardTitle className="text-lg">Question {q.id} of {QUIZ_QUESTIONS.length}</CardTitle>
                  <p className="text-sm font-medium text-slate-800 dark:text-slate-200 mt-1">{q.text}</p>
                </CardHeader>
                <CardContent className="space-y-2">
                  {q.options.map((opt, idx) => {
                    const isSelected = answers[q.id] === opt.language;
                    return (
                      <button
                        key={idx}
                        onClick={() => handleSelect(q.id, opt.language)}
                        className={`w-full text-left p-3.5 text-xs sm:text-sm rounded-xl border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-rose-600 text-white border-rose-600 font-semibold shadow-sm'
                            : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-rose-300'
                        }`}
                      >
                        {opt.text}
                      </button>
                    );
                  })}
                </CardContent>
              </Card>
            ))}

            <Button
              variant="couples"
              size="lg"
              className="w-full"
              disabled={Object.keys(answers).length < QUIZ_QUESTIONS.length}
              onClick={() => setCompleted(true)}
            >
              <CheckCircle className="w-5 h-5" /> Calculate My Results
            </Button>
          </div>
        ) : (
          <Card variant="couples" className="p-8 text-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-rose-100 dark:bg-rose-950 text-rose-600 flex items-center justify-center mx-auto">
              <Heart className="w-6 h-6 fill-current" />
            </div>

            <div className="space-y-2">
              <h2 className="text-2xl font-bold font-heading text-slate-900 dark:text-white">
                Your Love Language Breakdown
              </h2>
              <p className="text-xs text-slate-500">Based on your choices, here is your primary profile:</p>
            </div>

            <div className="space-y-3 max-w-md mx-auto text-left">
              {Object.entries(results).map(([lang, score]) => (
                <div key={lang} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold uppercase text-slate-700 dark:text-slate-300">
                    <span>{lang}</span>
                    <span>{score} pts</span>
                  </div>
                  <div className="w-full h-2 rounded-full bg-slate-100 dark:bg-slate-800 overflow-hidden">
                    <div
                      className="h-full bg-rose-500 transition-all duration-500"
                      style={{ width: `${(score / QUIZ_QUESTIONS.length) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" size="md" onClick={() => { setAnswers({}); setCompleted(false); }}>
              <RotateCcw className="w-4 h-4" /> Retake Quiz
            </Button>
          </Card>
        )}
      </main>
    </div>
  );
}
