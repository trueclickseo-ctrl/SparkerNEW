import type { Metadata } from 'next';
import { Inter, Outfit } from 'next/font/google';
import '../globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CookieBanner } from '@/components/ui/cookie-banner';
import { getOrganizationSchema, getWebSiteSchema } from '@/lib/seo/jsonld';
import { constructMetadata } from '@/lib/seo/metadata';
import { LOCALES, isRTL, Locale } from '@/lib/i18n/config';

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

export async function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const resolvedParams = await params;
  return constructMetadata({
    title: 'Sparkers Games — Ultimate Couples & Party Games Hub',
    description: 'Discover interactive party games, icebreaker questions, couples intimacy card decks, and relationship quizzes.',
    path: `/${resolvedParams.locale}`,
    locale: resolvedParams.locale,
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const resolvedParams = await params;
  const locale = resolvedParams.locale as Locale;
  const rtl = isRTL(locale);
  const orgSchema = getOrganizationSchema();
  const websiteSchema = getWebSiteSchema();

  return (
    <html
      lang={locale}
      dir={rtl ? 'rtl' : 'ltr'}
      suppressHydrationWarning
      className={`${inter.variable} ${outfit.variable}`}
    >
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
      <body className="min-h-screen flex flex-col bg-emerald-50/40 text-slate-900 dark:bg-slate-950 dark:text-slate-100 font-sans antialiased selection:bg-emerald-200 selection:text-emerald-950">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <Header locale={locale} />
          <div className="flex-grow">{children}</div>
          <Footer locale={locale} />
          <CookieBanner />
        </ThemeProvider>
      </body>
    </html>
  );
}
