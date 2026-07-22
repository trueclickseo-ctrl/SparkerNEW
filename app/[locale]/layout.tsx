import type { Metadata } from 'next';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { CookieBanner } from '@/components/ui/cookie-banner';
import { constructMetadata } from '@/lib/seo/metadata';
import { LOCALES, isRTL, Locale } from '@/lib/i18n/config';
import LocaleHtmlSync from '@/app/[locale]/locale-html-sync';

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
  const dir = isRTL(locale) ? 'rtl' : 'ltr';

  return (
    <>
      <LocaleHtmlSync locale={locale} dir={dir} />
      <Header locale={locale} />
      <main className="flex-grow">{children}</main>
      <Footer locale={locale} />
      <CookieBanner />
    </>
  );
}
