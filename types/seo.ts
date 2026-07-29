export interface BaseMetadataInput {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
  ogType?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  noIndex?: boolean;
  locale?: string;
  author?: string;
  publisher?: string;
  themeColor?: string;
  ogImageSlug?: string;
}

export interface TopicClusterInfo {
  clusterId: string;
  clusterName: string;
  pillarUrl: string;
  relatedUrls: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface HowToStep {
  name: string;
  text: string;
  url?: string;
  image?: string;
}
