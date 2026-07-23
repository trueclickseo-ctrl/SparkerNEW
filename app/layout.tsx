import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import Script from 'next/script';
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
  path: '/en',
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-XXXXXXXXXX';

const softwareAppSchema = {
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  '@id': 'https://sparkersgames.com/#app',
  name: 'Sparkers Games',
  applicationCategory: 'GameApplication',
  operatingSystem: 'Web Browser',
  url: 'https://sparkersgames.com',
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'USD',
  },
  description:
    '89+ interactive party and couples games, love language quizzes, icebreakers, and card generators. Free, no download required.',
  publisher: {
    '@id': 'https://sparkersgames.com/#organization',
  },
};

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
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareAppSchema) }}
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-screen flex flex-col text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans antialiased selection:bg-violet-200 selection:text-violet-950"
      >
        {/* GA4 — async, non-blocking */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
          strategy="afterInteractive"
        />
        <Script id="ga4-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}', { page_path: window.location.pathname });
          `}
        </Script>

        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
