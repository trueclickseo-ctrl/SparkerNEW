import * as React from 'react';
import { SeoEntityModel, SeoRelatedLink } from '@/types/programmatic-seo';
import IntroBlock from './intro-block';
import RulesBlock from './rules-block';
import ExamplesBlock from './examples-block';
import TipsBlock from './tips-block';
import PrintableBlock from './printable-block';
import FaqBlock from './faq-block';
import LinkingBlock from './linking-block';
import AuthorBlock from './author-block';
import { getFAQSchema, getGameSchema, getHowToSchema, getWebPageSchema, getBreadcrumbSchema } from '@/lib/seo/jsonld';
import { Breadcrumbs } from '@/components/ui/breadcrumbs';

interface MasterPageTemplateProps {
  data: SeoEntityModel;
  locale: string;
  parentLink?: SeoRelatedLink;
  siblingLinks?: SeoRelatedLink[];
  childLinks?: SeoRelatedLink[];
  trendingLinks?: SeoRelatedLink[];
}

export default function MasterPageTemplate({
  data,
  locale,
  parentLink,
  siblingLinks = [],
  childLinks = [],
  trendingLinks = [],
}: MasterPageTemplateProps) {
  
  // ─── JSON-LD Structured Schemas ───
  const gameSchema = getGameSchema({
    name: data.title,
    description: data.introduction.slice(0, 150) + '...',
    url: data.path,
    numberOfPlayers: data.playerCount || '2+',
    genre: data.game,
  });

  const howToSchema = getHowToSchema({
    name: `How to Play ${data.title}`,
    description: `Official step-by-step game rules for ${data.title}.`,
    steps: data.rules.map((r, idx) => ({
      name: `Step ${idx + 1}`,
      text: r,
    })),
  });

  const faqSchema = getFAQSchema(data.faqs);

  const webPageSchema = getWebPageSchema({
    name: data.title,
    description: data.introduction.slice(0, 150) + '...',
    url: data.path,
  });

  const breadcrumbsList = [
    { name: 'Home', url: `/${locale}` },
    { name: 'Games Platform', url: `/${locale}/games/` },
  ];
  if (parentLink) {
    breadcrumbsList.push({ name: parentLink.title, url: parentLink.url });
  }
  breadcrumbsList.push({ name: data.title, url: `/${locale}${data.path}` });

  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbsList);

  return (
    <>
      {/* Dynamic JSON-LD markup scripts */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(gameSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Breadcrumbs items={breadcrumbsList} />

      <div className="space-y-12">
        {/* Intro Section */}
        <IntroBlock data={data} />

        {/* Dynamic game components */}
        <RulesBlock rules={data.rules} title={data.title} />

        <ExamplesBlock prompts={data.prompts} title={data.title} />

        <TipsBlock tips={data.tips} />

        {/* Printable deck module */}
        <PrintableBlock title={data.title} prompts={data.prompts} />

        {/* FAQs */}
        <FaqBlock faqs={data.faqs} />

        {/* Dynamic linking grid */}
        <LinkingBlock
          data={data}
          locale={locale}
          parentLink={parentLink}
          siblingLinks={siblingLinks}
          childLinks={childLinks}
          trendingLinks={trendingLinks}
        />

        {/* Author / EEAT block */}
        <AuthorBlock data={data} />
      </div>
    </>
  );
}
