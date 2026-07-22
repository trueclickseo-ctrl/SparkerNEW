import { NextResponse } from 'next/server';
import { BLOG_POSTS } from '@/lib/data/blog-posts';

export const dynamic = 'force-static';

export async function GET() {
  const siteUrl = 'https://sparkersgames.com';

  const itemsXml = BLOG_POSTS.map(
    (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${siteUrl}/en/blog/${post.slug}</link>
      <guid>${siteUrl}/en/blog/${post.slug}</guid>
      <pubDate>${new Date(post.publishedAt).toUTCString()}</pubDate>
      <description><![CDATA[${post.excerpt}]]></description>
    </item>`
  ).join('');

  const rssXml = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Sparkers Games Blog and Party Guides</title>
    <link>${siteUrl}</link>
    <description>Latest relationship advice, party icebreakers, and card game strategies from Sparkers Games.</description>
    <language>en-us</language>
    ${itemsXml}
  </channel>
</rss>`;

  return new NextResponse(rssXml.trim(), {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 's-maxage=3600, stale-while-revalidate',
    },
  });
}
