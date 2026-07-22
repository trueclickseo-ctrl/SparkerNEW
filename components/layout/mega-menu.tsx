import Link from 'next/link';
import { Gamepad2, Heart, BookOpen, Sparkles, ChevronRight } from 'lucide-react';

export function MegaMenu({ locale, onClose }: { locale: string; onClose?: () => void }) {
  const categories = [
    {
      title: 'Play Platform',
      icon: <Gamepad2 className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      description: 'Party card decks, icebreakers & group games',
      href: `/${locale}/play`,
      items: [
        { name: 'Kids & Family', href: `/${locale}/play?aud=kids` },
        { name: 'Teens & Party', href: `/${locale}/play?aud=teens` },
        { name: 'Office & Classroom', href: `/${locale}/play?aud=office` },
        { name: 'Drinking Games (21+)', href: `/${locale}/play?aud=drinking` },
      ],
    },
    {
      title: 'Couples Hub',
      icon: <Heart className="w-5 h-5 text-rose-600 dark:text-rose-400" />,
      description: '89 Framework romantic & intimacy prompts',
      href: `/${locale}/couples`,
      items: [
        { name: '🔥 Gen Z & Vibe Check', href: `/${locale}/couples?cat=gen-z` },
        { name: '📖 Love Stories & Lore', href: `/${locale}/couples?cat=romantic-stories` },
        { name: '💕 Romantic Decks', href: `/${locale}/couples?cat=romantic` },
        { name: '🌶️ Spicy & After Dark', href: `/${locale}/couples?cat=spicy-teasers` },
        { name: '🔮 Deep Intimacy', href: `/${locale}/couples?cat=deep` },
      ],
    },
    {
      title: 'Quizzes & Generators',
      icon: <Sparkles className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      description: 'Interactive relationship scores & randomizers',
      href: `/${locale}/quizzes`,
      items: [
        { name: 'Love Language Quiz', href: `/${locale}/quizzes/love-language` },
        { name: 'Attachment Style Quiz', href: `/${locale}/quizzes/attachment-style` },
        { name: 'Couple Name Generator', href: `/${locale}/generators/couple-name` },
        { name: 'Wheel Spinner', href: `/${locale}/generators/wheel-spinner` },
      ],
    },
    {
      title: 'Encyclopedia & Guides',
      icon: <BookOpen className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      description: 'Game rules, variations & party strategy',
      href: `/${locale}/encyclopedia`,
      items: [
        { name: 'Truth or Dare Rules', href: `/${locale}/encyclopedia/truth-or-dare` },
        { name: 'Never Have I Ever Guide', href: `/${locale}/encyclopedia/never-have-i-ever` },
        { name: 'Would You Rather Variations', href: `/${locale}/encyclopedia/would-you-rather` },
        { name: 'Charades Rules', href: `/${locale}/encyclopedia/charades` },
      ],
    },
  ];

  return (
    <div className="absolute top-full left-0 w-full bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border-b border-emerald-100 dark:border-slate-800 shadow-2xl p-6 z-50 animate-in fade-in zoom-in-95 duration-150">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {categories.map((cat, idx) => (
          <div key={idx} className="space-y-3">
            <Link
              href={cat.href}
              onClick={onClose}
              className="flex items-center gap-2.5 font-heading font-bold text-slate-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
            >
              <div className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:scale-105 transition-transform">
                {cat.icon}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span>{cat.title}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <p className="text-[11px] font-normal text-slate-500 dark:text-slate-400">
                  {cat.description}
                </p>
              </div>
            </Link>

            <ul className="space-y-1.5 pl-9 rtl:pl-0 rtl:pr-9">
              {cat.items.map((item, itemIdx) => (
                <li key={itemIdx}>
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="text-xs text-slate-600 dark:text-slate-400 hover:text-emerald-700 dark:hover:text-emerald-300 block py-1 hover:translate-x-0.5 rtl:hover:-translate-x-0.5 transition-transform"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
