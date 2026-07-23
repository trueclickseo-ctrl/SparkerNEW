import Image from 'next/image';
import { Star } from 'lucide-react';

export function Testimonials() {
  const reviews = [
    {
      name: 'Elena & Marcus',
      role: 'Long Distance Couple',
      comment: 'The 89 Intimacy Deck completely transformed our remote date nights! The question depth is unmatched.',
      rating: 5,
      avatar: '/images/testimonial-elena.jpg',
    },
    {
      name: 'David K.',
      role: 'College Event Host',
      comment: 'We used Truth or Dare Classic for our campus mixer. Zero awkward silences — instant party energy!',
      rating: 5,
      avatar: '/images/testimonial-david.jpg',
    },
    {
      name: 'Sophia M.',
      role: 'HR & Office Manager',
      comment: 'Office Team Icebreakers gave our remote employees an engaging, fun way to connect every Friday.',
      rating: 5,
      avatar: '/images/testimonial-sophia.jpg',
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center space-y-2 mb-12">
        <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">
          Loved by Party Hosts &amp; Couples Worldwide
        </h2>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Over 500,000+ game sessions played globally.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {reviews.map((rev, idx) => (
          <div
            key={idx}
            className="p-6 rounded-2xl bg-white dark:bg-slate-900 border border-emerald-100 dark:border-slate-800 shadow-sm space-y-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
          >
            {/* Stars */}
            <div className="flex items-center gap-1 text-amber-400">
              {Array.from({ length: rev.rating }).map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-sm text-slate-700 dark:text-slate-300 italic leading-relaxed">
              &quot;{rev.comment}&quot;
            </p>

            {/* Avatar + Name */}
            <div className="flex items-center gap-3 pt-2 border-t border-slate-100 dark:border-slate-800">
              <Image
                src={rev.avatar}
                alt={rev.name}
                width={44}
                height={44}
                className="w-11 h-11 rounded-full object-cover border-2 border-emerald-100 dark:border-slate-700 shrink-0"
              />
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm">{rev.name}</h4>
                <span className="text-xs text-slate-400 dark:text-slate-500">{rev.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
