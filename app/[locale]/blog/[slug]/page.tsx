import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BLOG_POSTS } from '@/lib/data/blog-posts';
import { FileText, Clock, User, Calendar, ArrowLeft } from 'lucide-react';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostDetailPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);

  if (!post) notFound();

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Person',
      name: post.author.name,
      jobTitle: post.author.role,
    },
    publisher: {
      '@id': 'https://sparkers.games/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://sparkers.games/${resolvedParams.locale}/blog/${post.slug}`,
    },
  };

  return (
    <div className="flex flex-col min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${resolvedParams.locale}` },
          { name: 'Blog', url: `/${resolvedParams.locale}/blog` },
          { name: post.title, url: `/${resolvedParams.locale}/blog/${post.slug}` },
        ]}
      />

      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex-grow space-y-8">
        <Link href={`/${resolvedParams.locale}/blog`}>
          <Button variant="outline" size="sm">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Button>
        </Link>

        <div className="space-y-4">
          <Badge variant="default" className="w-max">
            <FileText className="w-3.5 h-3.5" /> {post.category}
          </Badge>

          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-b border-slate-200 dark:border-slate-800 pb-4">
            <span className="flex items-center gap-1"><User className="w-3.5 h-3.5 text-emerald-600" /> {post.author.name} ({post.author.role})</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {post.publishedAt}</span>
            <span>•</span>
            <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" /> {post.readTime}</span>
          </div>
        </div>

        <div className="prose dark:prose-invert max-w-none text-slate-700 dark:text-slate-300 space-y-4 whitespace-pre-line text-base leading-relaxed">
          {post.content}
        </div>

        <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} variant="amber">
              #{tag}
            </Badge>
          ))}
        </div>
      </main>
    </div>
  );
}
