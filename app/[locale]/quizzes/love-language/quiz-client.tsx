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
  {
    id: 3,
    text: 'How do you most like to show your partner that you care?',
    options: [
      { text: 'Write them a heartfelt note or tell them exactly why they mean the world to me.', language: 'words' },
      { text: 'Plan a special activity or outing just for the two of us.', language: 'time' },
      { text: 'Surprise them with something they mentioned wanting weeks ago.', language: 'gifts' },
      { text: 'Handle something difficult on their to-do list without being asked.', language: 'service' },
      { text: 'Hold their hand, give them a massage, or just sit close to them.', language: 'touch' },
    ],
  },
  {
    id: 4,
    text: 'What does a perfect weekend with your partner look like to you?',
    options: [
      { text: 'Sharing stories, deep conversations, and lots of compliments.', language: 'words' },
      { text: 'A whole day with zero distractions — just us exploring somewhere new.', language: 'time' },
      { text: 'Exchanging small meaningful gifts or finding something special for each other.', language: 'gifts' },
      { text: 'Cooking together, fixing things around the house, taking care of each other.', language: 'service' },
      { text: 'Lazy mornings cuddling in bed or evening walks hand-in-hand.', language: 'touch' },
    ],
  },
];

export default function LoveLanguageQuizClient({ locale }: { locale: string }) {
  const [currentIdx, setCurrentIdx] = React.useState(0);
  const [scores, setScores] = React.useState<Record<string, number>>({
    words: 0,
    time: 0,
    gifts: 0,
    service: 0,
    touch: 0,
  });
  const [isFinished, setIsFinished] = React.useState(false);

  const handleAnswer = (lang: 'words' | 'time' | 'gifts' | 'service' | 'touch') => {
    setScores((prev) => ({ ...prev, [lang]: prev[lang] + 1 }));
    if (currentIdx < QUIZ_QUESTIONS.length - 1) {
      setCurrentIdx((prev) => prev + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleReset = () => {
    setCurrentIdx(0);
    setScores({ words: 0, time: 0, gifts: 0, service: 0, touch: 0 });
    setIsFinished(false);
  };

  const getDominantLanguage = () => {
    let dominant = 'words';
    let maxScore = -1;
    for (const [lang, score] of Object.entries(scores)) {
      if (score > maxScore) {
        maxScore = score;
        dominant = lang;
      }
    }
    return {
      words: 'Words of Affirmation 💬',
      time: 'Quality Time ⏰',
      gifts: 'Receiving Gifts 🎁',
      service: 'Acts of Service 🛠️',
      touch: 'Physical Touch 🤝',
    }[dominant] || 'Words of Affirmation';
  };

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Quizzes', url: `/${locale}/quizzes` },
          { name: 'Love Language Quiz', url: `/${locale}/quizzes/love-language` },
        ]}
      />

      <div className="max-w-2xl mx-auto space-y-6">
        <div className="text-center space-y-2">
          <Badge variant="couples" className="px-3 py-1">
            <Heart className="w-3.5 h-3.5" /> Love Style Assessment
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
            What Is Your Love Language?
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Answer these simple relationship scenarios to discover your primary emotional language.
          </p>
        </div>

        {!isFinished ? (
          <Card variant="default">
            <CardHeader className="border-b border-slate-100 dark:border-slate-800 pb-4">
              <div className="flex justify-between items-center text-xs text-slate-400 font-semibold">
                <span>QUESTION {currentIdx + 1} OF {QUIZ_QUESTIONS.length}</span>
                <span>{Math.round(((currentIdx) / QUIZ_QUESTIONS.length) * 100)}% COMPLETE</span>
              </div>
              <CardTitle className="text-lg sm:text-xl text-slate-900 dark:text-white mt-2">
                {QUIZ_QUESTIONS[currentIdx].text}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 pt-6">
              {QUIZ_QUESTIONS[currentIdx].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt.language)}
                  className="w-full text-left p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-rose-400 hover:bg-rose-50/30 dark:hover:bg-slate-800 text-sm font-medium text-slate-700 dark:text-slate-300 transition-all cursor-pointer hover:-translate-y-0.5"
                >
                  {opt.text}
                </button>
              ))}
            </CardContent>
          </Card>
        ) : (
          <Card variant="couples" className="text-center space-y-6 p-8">
            <div className="p-4 rounded-full bg-rose-100 dark:bg-rose-950 w-max mx-auto text-rose-600">
              <CheckCircle className="w-12 h-12" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-heading font-extrabold text-slate-900 dark:text-white">
                Your Primary Love Language is:
              </h2>
              <p className="text-3xl font-heading font-black text-rose-600 dark:text-rose-400">
                {getDominantLanguage()}
              </p>
            </div>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
              This suggests you feel most connected and loved when your partner expresses affection through this primary channel. Share this quiz with your partner to compare scores!
            </p>
            <div className="pt-4 flex justify-center gap-4">
              <Button variant="couples" onClick={handleReset} className="cursor-pointer">
                <RotateCcw className="w-4 h-4" /> Retake Quiz
              </Button>
            </div>
          </Card>
        )}
      </div>
    </>
  );
}
