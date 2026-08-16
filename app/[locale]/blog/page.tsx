'use client';

import * as React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BLOG_POSTS } from '@/lib/data/blog-posts';
import { FileText, ArrowRight, Clock, User, Sparkles, BookOpen } from 'lucide-react';

export default function BlogIndexPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = React.use(params);
  const locale = resolvedParams.locale;

  const [selectedCat, setSelectedCat] = React.useState('all');

  const categories = ['all', ...Array.from(new Set(BLOG_POSTS.map((p) => p.category)))];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    return selectedCat === 'all' || post.category === selectedCat;
  });

  return (
    <>
      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${locale}` },
          { name: 'Blog', url: `/${locale}/blog` },
        ]}
      />

      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-slate-200 dark:border-slate-800 pb-6">
        <div>
          <Badge variant="default" className="mb-2">
            <FileText className="w-3.5 h-3.5" /> Sparkers Journal
          </Badge>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white">
            Party Guides, Icebreakers &amp; Connection Rituals
          </h1>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Expert guides on workplace icebreakers, team building, relationship intimacy, and party game strategies.
          </p>
        </div>
      </div>

      {/* Categories Bar */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-3 py-1.5 text-xs font-semibold rounded-full transition-colors cursor-pointer ${
              selectedCat === cat
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {cat === 'all' ? 'All Posts' : cat}
          </button>
        ))}
      </div>

      {/* Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
        {filteredPosts.map((post) => {
          const isPillar = post.slug === 'icebreakers-for-work';
          return (
            <Card
              key={post.slug}
              variant="default"
              className={`flex flex-col justify-between transition-all duration-200 ${
                isPillar
                  ? 'md:col-span-2 border-2 border-emerald-500/80 dark:border-emerald-500/60 bg-emerald-50/30 dark:bg-emerald-950/20 shadow-md'
                  : 'hover:border-slate-300 dark:hover:border-slate-700'
              }`}
            >
              <CardHeader>
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    {isPillar ? (
                      <Badge variant="default" className="bg-emerald-600 text-white font-bold">
                        <BookOpen className="w-3.5 h-3.5" /> 📌 Pillar Guide
                      </Badge>
                    ) : (
                      <Badge variant={post.category === 'Couples Advice' ? 'couples' : post.category === 'Icebreakers & Social' ? 'default' : 'play'}>
                        {post.category}
                      </Badge>
                    )}
                  </div>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>
                <CardTitle className={`mt-3 ${isPillar ? 'text-2xl sm:text-3xl font-extrabold text-emerald-950 dark:text-emerald-300' : 'text-xl'}`}>
                  {post.title}
                </CardTitle>
                <CardDescription className={isPillar ? 'text-sm text-slate-700 dark:text-slate-300 leading-relaxed' : ''}>
                  {post.excerpt}
                </CardDescription>
              </CardHeader>

              <CardFooter className="flex items-center justify-between pt-4">
                <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
                  <User className="w-3.5 h-3.5 text-emerald-600" /> {post.author.name}
                  {post.author.role ? ` (${post.author.role})` : ''}
                </div>
                <Link href={`/${locale}/blog/${post.slug}`}>
                  <Button variant={isPillar ? 'default' : 'default'} size="sm" className={isPillar ? 'bg-emerald-600 hover:bg-emerald-700 text-white' : ''}>
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </>
  );
}
