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
  {
    id: 5,
    text: 'When you are feeling down, what do you crave most from your partner?',
    options: [
      { text: 'Reassuring words that remind me I am loved and capable.', language: 'words' },
      { text: 'Them sitting with me, fully present, listening without distractions.', language: 'time' },
      { text: 'A small comfort gift — even something tiny like my favorite snack.', language: 'gifts' },
      { text: 'Them stepping in to handle my tasks or responsibilities to ease my load.', language: 'service' },
      { text: 'Physical comfort — a hug, a gentle touch on the shoulder, or holding my hand.', language: 'touch' },
    ],
  },
  {
    id: 6,
    text: 'Which of these means the most to you in a relationship?',
    options: [
      { text: 'Hearing "I love you" often and receiving sincere compliments.', language: 'words' },
      { text: 'My partner making time for me even when life is busy.', language: 'time' },
      { text: 'Thoughtful tokens that show they remember what I love.', language: 'gifts' },
      { text: 'Acts of kindness that make my day easier without me asking.', language: 'service' },
      { text: 'Frequent physical closeness and affectionate touch.', language: 'touch' },
    ],
  },
  {
    id: 7,
    text: 'When celebrating an achievement, what kind of recognition means the most?',
    options: [
      { text: 'A genuine, enthusiastic "I am so proud of you — you did amazing!"', language: 'words' },
      { text: 'A dedicated celebration dinner where it is just the two of us.', language: 'time' },
      { text: 'A meaningful gift or keepsake to commemorate the milestone.', language: 'gifts' },
      { text: 'My partner helping wrap up remaining tasks so I can fully relax.', language: 'service' },
      { text: 'A big, warm hug and celebratory kiss.', language: 'touch' },
    ],
  },
  {
    id: 8,
    text: 'What is your favorite kind of everyday gesture from your partner?',
    options: [
      { text: 'Leaving encouraging sticky notes or sending sweet texts throughout the day.', language: 'words' },
      { text: 'Having a daily check-in conversation where we truly talk and listen.', language: 'time' },
      { text: 'Bringing home something small they picked up thinking of me.', language: 'gifts' },
      { text: 'Making coffee without being asked or handling a chore I hate.', language: 'service' },
      { text: 'A random hug from behind or gentle squeeze of my hand while passing.', language: 'touch' },
    ],
  },
  {
    id: 9,
    text: 'What would make your partner\'s apology feel the most sincere?',
    options: [
      { text: 'A heartfelt verbal acknowledgment of what went wrong and how they will change.', language: 'words' },
      { text: 'Setting aside quality time to talk it through without distractions.', language: 'time' },
      { text: 'A thoughtful gesture or small gift that shows they put effort into making it right.', language: 'gifts' },
      { text: 'Taking on extra responsibilities to make my life easier during a tough time.', language: 'service' },
      { text: 'A sincere, comforting embrace that shows they truly mean it.', language: 'touch' },
    ],
  },
  {
    id: 10,
    text: 'Imagine your ideal Valentine\'s Day — what would matter most to you?',
    options: [
      { text: 'A handwritten love letter expressing exactly how they feel about me.', language: 'words' },
      { text: 'A full day dedicated entirely to spending time together with no phone interruptions.', language: 'time' },
      { text: 'A carefully chosen gift that perfectly reflects my personality and interests.', language: 'gifts' },
      { text: 'Having all the household chores done so we can enjoy the day stress-free.', language: 'service' },
      { text: 'Lots of physical closeness — dancing, cuddling, and hand-holding all day.', language: 'touch' },
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
