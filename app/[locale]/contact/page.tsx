import { constructMetadata } from '@/lib/seo/metadata';
import ContactClient from './contact-client';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  return constructMetadata({
    title: 'Contact Us — Sparkers Games Suggestions & Help',
    description: 'Get in touch with the Sparkers Games team. Send us your feedback, custom card deck ideas, business suggestions, or technical support requests.',
    path: '/contact/',
    locale: resolvedParams.locale,
    ogImageSlug: 'contact',
  });
}

export default async function ContactPage({ params }: PageProps) {
  const resolvedParams = await params;
  return <ContactClient locale={resolvedParams.locale} />;
}
