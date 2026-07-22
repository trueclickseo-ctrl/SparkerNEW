import Link from 'next/link';
import { Users, Heart, Sparkles, Building2, GraduationCap, Wine, Flame } from 'lucide-react';

export function AudienceSelector({ locale }: { locale: string }) {
  const audiences = [
    { name: 'Couples & Romantic', icon: <Heart className="w-5 h-5 text-rose-500" />, href: `/${locale}/couples`, count: '24 Decks', bg: 'hover:border-rose-300 dark:hover:border-rose-700' },
    { name: 'Party & Friends', icon: <Users className="w-5 h-5 text-indigo-500" />, href: `/${locale}/play?aud=friends`, count: '32 Decks', bg: 'hover:border-indigo-300 dark:hover:border-indigo-700' },
    { name: 'Teens & Fun', icon: <Sparkles className="w-5 h-5 text-amber-500" />, href: `/${locale}/play?aud=teens`, count: '15 Decks', bg: 'hover:border-amber-300 dark:hover:border-amber-700' },
    { name: 'Office Teams', icon: <Building2 className="w-5 h-5 text-teal-500" />, href: `/${locale}/play?aud=office`, count: '10 Decks', bg: 'hover:border-teal-300 dark:hover:border-teal-700' },
    { name: 'Classroom & Kids', icon: <GraduationCap className="w-5 h-5 text-emerald-500" />, href: `/${locale}/play?aud=kids`, count: '8 Decks', bg: 'hover:border-emerald-300 dark:hover:border-emerald-700' },
    { name: 'Drinking (21+)', icon: <Wine className="w-5 h-5 text-purple-500" />, href: `/${locale}/play?aud=drinking`, count: '12 Decks', bg: 'hover:border-purple-300 dark:hover:border-purple-700' },
    { name: 'Date Night & Flirty', icon: <Flame className="w-5 h-5 text-red-500" />, href: `/${locale}/couples?cat=date-night`, count: '18 Decks', bg: 'hover:border-red-300 dark:hover:border-red-700' },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center space-y-2 mb-8">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          Who Are You Playing With?
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Select an audience to filter instant digital card decks.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {audiences.map((item, idx) => (
          <Link
            key={idx}
            href={item.href}
            className={`flex flex-col items-center p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 shadow-sm transition-all duration-200 hover:-translate-y-1 ${item.bg} group`}
          >
            <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform mb-3">
              {item.icon}
            </div>
            <span className="text-xs font-semibold text-slate-900 dark:text-white text-center leading-snug">
              {item.name}
            </span>
            <span className="text-[10px] text-slate-400 dark:text-slate-500 mt-1 font-medium">
              {item.count}
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
}
