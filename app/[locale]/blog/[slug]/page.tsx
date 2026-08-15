import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BLOG_POSTS } from '@/lib/data/blog-posts';
import { getFAQSchema } from '@/lib/seo/jsonld';
import { FileText, Clock, User, Calendar, ArrowLeft } from 'lucide-react';
import React from 'react';

import { constructMetadata } from '@/lib/seo/metadata';

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const resolvedParams = await params;
  const post = BLOG_POSTS.find((p) => p.slug === resolvedParams.slug);
  if (!post) return {};
  return constructMetadata({
    title: post.metaTitle || post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}/`,
    locale: resolvedParams.locale,
    ogType: 'article',
    publishedTime: post.publishedAt,
    ogImageSlug: `blog-${post.slug}`,
    keywords: post.tags,
  });
}

function renderBold(text: string, keyPrefix: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={`${keyPrefix}-b-${i}`} className="font-bold text-slate-900 dark:text-white">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

function renderFormattedInline(text: string, locale: string) {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts: React.ReactNode[] = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(renderBold(text.substring(lastIndex, match.index), `text-${lastIndex}`));
    }

    const linkText = match[1];
    let href = match[2];

    if (href.startsWith('https://sparkersgames.com') || href.startsWith('http://sparkersgames.com')) {
      href = href.replace(/^https?:\/\/sparkersgames\.com/, '');
    }

    const isExternal = href.startsWith('http://') || href.startsWith('https://');

    if (isExternal) {
      parts.push(
        <a
          key={`link-${match.index}`}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-purple-600 dark:text-purple-400 font-semibold underline hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
        >
          {renderBold(linkText, `linktext-${match.index}`)}
        </a>
      );
    } else {
      parts.push(
        <Link
          key={`link-${match.index}`}
          href={href}
          className="text-purple-600 dark:text-purple-400 font-semibold underline hover:text-purple-800 dark:hover:text-purple-300 transition-colors"
        >
          {renderBold(linkText, `linktext-${match.index}`)}
        </Link>
      );
    }

    lastIndex = linkRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    parts.push(renderBold(text.substring(lastIndex), `text-${lastIndex}`));
  }

  return parts;
}

function renderMarkdownContent(content: string, locale: string) {
  const blocks = content.split(/\n\n+/);

  return blocks.map((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return null;

    if (trimmed.startsWith('### ')) {
      const headingText = trimmed.replace(/^###\s+/, '');
      return (
        <h3 key={idx} className="text-xl sm:text-2xl font-heading font-bold text-slate-900 dark:text-white mt-8 mb-3">
          {renderFormattedInline(headingText, locale)}
        </h3>
      );
    }

    if (trimmed.startsWith('## ')) {
      const headingText = trimmed.replace(/^##\s+/, '');
      return (
        <h2 key={idx} className="text-2xl sm:text-3xl font-heading font-extrabold text-slate-900 dark:text-white mt-10 mb-4">
          {renderFormattedInline(headingText, locale)}
        </h2>
      );
    }

    if (trimmed.startsWith('|') && trimmed.includes('|')) {
      const lines = trimmed.split('\n').filter((l) => l.trim().startsWith('|'));
      if (lines.length >= 2) {
        const headerCells = lines[0].split('|').slice(1, -1).map((c) => c.trim());
        const dataRows = lines.slice(2).map((line) => line.split('|').slice(1, -1).map((c) => c.trim()));
        return (
          <div key={idx} className="my-6 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-xs">
            <table className="w-full text-left text-sm border-collapse min-w-[500px]">
              <thead className="bg-purple-50 dark:bg-purple-950/40 text-purple-950 dark:text-purple-200 border-b border-slate-200 dark:border-slate-800">
                <tr>
                  {headerCells.map((h, hIdx) => (
                    <th key={hIdx} className="px-4 py-3 font-bold">
                      {renderFormattedInline(h, locale)}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 dark:divide-slate-800 bg-white dark:bg-slate-900">
                {dataRows.map((row, rIdx) => (
                  <tr key={rIdx} className="hover:bg-slate-50 dark:hover:bg-slate-800/50">
                    {row.map((cell, cIdx) => (
                      <td key={cIdx} className="px-4 py-3 text-slate-700 dark:text-slate-300">
                        {renderFormattedInline(cell, locale)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
    }

    if (trimmed.startsWith('- ') || trimmed.startsWith('* ')) {
      const items = trimmed.split('\n').filter((l) => l.trim().startsWith('- ') || l.trim().startsWith('* '));
      return (
        <ul key={idx} className="list-disc list-inside space-y-2 my-4 text-slate-700 dark:text-slate-300">
          {items.map((item, iIdx) => (
            <li key={iIdx} className="leading-relaxed">
              {renderFormattedInline(item.replace(/^[-*]\s+/, ''), locale)}
            </li>
          ))}
        </ul>
      );
    }

    if (/^\d+\.\s+/.test(trimmed)) {
      const items = trimmed.split('\n').filter((l) => /^\d+\.\s+/.test(l.trim()));
      return (
        <ol key={idx} className="list-decimal list-outside ml-5 space-y-2 my-4 text-slate-700 dark:text-slate-300">
          {items.map((item, iIdx) => (
            <li key={iIdx} className="leading-relaxed pl-1">
              {renderFormattedInline(item.replace(/^\d+\.\s+/, ''), locale)}
            </li>
          ))}
        </ol>
      );
    }

    return (
      <p key={idx} className="text-slate-700 dark:text-slate-300 leading-relaxed text-base">
        {renderFormattedInline(trimmed, locale)}
      </p>
    );
  });
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
      '@id': 'https://sparkersgames.com/#organization',
    },
    publisher: {
      '@id': 'https://sparkersgames.com/#organization',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://sparkersgames.com/${resolvedParams.locale}/blog/${post.slug}`,
    },
  };

  const faqSchema = post.faqs ? getFAQSchema(post.faqs) : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      <Breadcrumbs
        items={[
          { name: 'Home', url: `/${resolvedParams.locale}` },
          { name: 'Blog', url: `/${resolvedParams.locale}/blog` },
          { name: post.title, url: `/${resolvedParams.locale}/blog/${post.slug}` },
        ]}
      />

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
          <span className="flex items-center gap-1">
            <User className="w-3.5 h-3.5 text-emerald-600" /> {post.author.name} ({post.author.role})
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Calendar className="w-3.5 h-3.5" /> {post.publishedAt}
          </span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" /> {post.readTime}
          </span>
        </div>
      </div>

      <div className="prose dark:prose-invert max-w-none space-y-4 text-base leading-relaxed">
        {renderMarkdownContent(post.content, resolvedParams.locale)}
      </div>

      <div className="pt-6 border-t border-slate-200 dark:border-slate-800 flex flex-wrap gap-2">
        {post.tags.map((tag) => (
          <Badge key={tag} variant="amber">
            #{tag}
          </Badge>
        ))}
      </div>
    </>
  );
}
