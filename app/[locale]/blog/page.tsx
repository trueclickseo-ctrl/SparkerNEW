'use client';

import * as React from 'react';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BLOG_POSTS } from '@/lib/data/blog-posts';
import { FileText, ArrowRight, Clock, User } from 'lucide-react';

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
              Party Guides & Relationship Advice
            </h1>
            <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
              Expert articles on connection rituals, party hosting, and communication strategy.
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
                  ? 'bg-emerald-600 text-white'
                  : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {cat === 'all' ? 'All Posts' : cat}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
          {filteredPosts.map((post) => (
            <Card key={post.slug} variant="default" className="flex flex-col justify-between">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge variant={post.category === 'Couples Advice' ? 'couples' : 'play'}>
                    {post.category}
                  </Badge>
                  <span className="flex items-center gap-1 text-xs text-slate-400">
                    <Clock className="w-3.5 h-3.5" /> {post.readTime}
                  </span>
                </div>
                <CardTitle className="mt-3 text-xl">{post.title}</CardTitle>
                <CardDescription>{post.excerpt}</CardDescription>
              </CardHeader>

              <CardFooter className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <User className="w-3.5 h-3.5 text-emerald-600" /> {post.author.name}
                </div>
                <Link href={`/${locale}/blog/${post.slug}`}>
                  <Button variant="default" size="sm">
                    Read Article <ArrowRight className="w-3.5 h-3.5" />
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      
    </>
  );
}
