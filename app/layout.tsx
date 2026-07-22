import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { getOrganizationSchema, getWebSiteSchema } from '@/lib/seo/jsonld';
import { constructMetadata } from '@/lib/seo/metadata';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata: Metadata = constructMetadata({
  title: 'Sparkers Games — Ultimate Couples & Party Games Hub',
  description: 'Discover interactive party games, icebreaker questions, couples intimacy card decks, and relationship quizzes designed for joyful connections.',
  path: '/',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${outfit.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-screen flex flex-col text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans antialiased selection:bg-violet-200 selection:text-violet-950">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
