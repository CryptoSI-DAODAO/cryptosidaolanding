interface BreadcrumbItem {
  name: string;
  url: string;
}

interface FAQItem {
  question: string;
  answer: string;
}

interface StructuredDataProps {
  type: 'breadcrumb' | 'faq' | 'article' | 'project';
  data?: {
    breadcrumbs?: BreadcrumbItem[];
    faqs?: FAQItem[];
    title?: string;
    description?: string;
    url?: string;
    image?: string;
    datePublished?: string;
    dateModified?: string;
    author?: string;
    category?: string;
    tags?: string[];
  };
}

export function StructuredData({ type, data }: StructuredDataProps) {
  let structuredData: object = {};

  switch (type) {
    case 'breadcrumb':
      if (data?.breadcrumbs) {
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: data.breadcrumbs.map((item, index) => ({
            '@type': 'ListItem',
            position: index + 1,
            name: item.name,
            item: item.url,
          })),
        };
      }
      break;

    case 'faq':
      if (data?.faqs) {
        structuredData = {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.faqs.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: faq.answer,
            },
          })),
        };
      }
      break;

    case 'article':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: data?.title,
        description: data?.description,
        url: data?.url,
        image: data?.image,
        datePublished: data?.datePublished,
        dateModified: data?.dateModified,
        author: {
          '@type': 'Organization',
          name: data?.author || 'CryptoSI DAO',
        },
        publisher: {
          '@type': 'Organization',
          name: 'CryptoSI DAO',
          logo: {
            '@type': 'ImageObject',
            url: 'https://cryptosi.dao/images/crddlogotrans.png',
          },
        },
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': data?.url,
        },
        ...(data?.category && { articleSection: data.category }),
        ...(data?.tags && { keywords: data.tags.join(', ') }),
      };
      break;

    case 'project':
      structuredData = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: data?.title,
        description: data?.description,
        url: data?.url,
        image: data?.image,
        applicationCategory: 'DeFi',
        operatingSystem: 'Web',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        author: {
          '@type': 'Organization',
          name: 'CryptoSI DAO',
        },
        publisher: {
          '@type': 'Organization',
          name: 'CryptoSI DAO',
        },
        datePublished: data?.datePublished,
        dateModified: data?.dateModified,
        ...(data?.tags && { keywords: data.tags.join(', ') }),
      };
      break;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}