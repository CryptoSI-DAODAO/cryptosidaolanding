export const SEO_CONFIG = {
  title: 'CryptoSI DAO Hub',
  titleTemplate: '%s | CryptoSI DAO',
  description: 'The central hub for the CryptoSI Decentralized Autonomous Organization, featuring dApp portfolio, governance, financial reporting, and more.',
  canonical: 'https://cryptosi.dao',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://cryptosi.dao',
    siteName: 'CryptoSI DAO Hub',
    title: 'CryptoSI DAO Hub',
    description: 'The central hub for the CryptoSI Decentralized Autonomous Organization, featuring dApp portfolio, governance, financial reporting, and more.',
    images: [
      {
        url: 'https://cryptosi.dao/images/daohero.png',
        width: 1200,
        height: 630,
        alt: 'CryptoSI DAO Hub - Decentralized Collaboration Platform',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@cryptosi_dao',
    site: '@cryptosi_dao',
    cardType: 'summary_large_image',
  },
  additionalMetaTags: [
    {
      name: 'keywords',
      content: 'CryptoSI, DAO, Decentralized Autonomous Organization, DeFi, dApp, governance, cryptocurrency, blockchain, web3',
    },
    {
      name: 'author',
      content: 'CryptoSI DAO',
    },
    {
      property: 'article:author',
      content: 'CryptoSI DAO',
    },
  ],
  additionalLinkTags: [
    {
      rel: 'canonical',
      href: 'https://cryptosi.dao',
    },
  ],
};

export const PROJECT_SEO_CONFIG = {
  bitpact: {
    title: 'Bitpact - Decentralized P2P Bitcoin Protocol',
    description: 'BitPact is a decentralized P2P Bitcoin protocol where trades are more than transactions — they\'re pacts. Enforced by multisig, protected by bonded arbiters, and immortalized through immutable reputation.',
    keywords: ['Bitcoin', 'P2P', 'DeFi', 'Decentralized', 'Trading', 'Multisig', 'Arbitration', 'CryptoSI'],
    image: 'https://cryptosi.dao/images/bitpactlogotrans.png',
  },
  'bus-fi': {
    title: 'Bus-Fi - Decentralized Bus Network Funding',
    description: 'Bus-Fi is a decentralized crowdfunding platform built on the Hedera network, designed to finance the acquisition and operation of bus networks in underserved African communities.',
    keywords: ['DeFi', 'Real-World Assets', 'Hedera', 'Transportation', 'Africa', 'NFT', 'Crowdfunding', 'Financial Inclusion'],
    image: 'https://cryptosi.dao/images/busfitrans.png',
  },
  'kin-protocol': {
    title: 'KIN Protocol - Decentralized Undercollateralized Borrowing',
    description: 'KIN Protocol is a decentralized, undercollateralized lending platform designed to unlock trust-based lending in DeFi. Built on a tri-party model—Borrowers, Lenders, and Vouchers.',
    keywords: ['DeFi', 'Undercollateralized Lending', 'Reputation', 'Vouching', 'NFT', 'Smart Contracts', 'CryptoSI'],
    image: 'https://cryptosi.dao/images/kinlogotrans.png',
  },
  mirrorvault: {
    title: 'MirrorVault - Decentralized Asset Protection',
    description: 'MirrorVault provides decentralized asset protection through innovative smart contract mechanisms and community governance.',
    keywords: ['DeFi', 'Asset Protection', 'Smart Contracts', 'Decentralized', 'Security', 'CryptoSI'],
    image: 'https://cryptosi.dao/images/mirrorvaultlogotrans.png',
  },
};

// Helper function to create metadata for pages
export function createPageMetadata(options: {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article';
}) {
  const baseUrl = 'https://cryptosi.dao';
  const defaultImage = 'https://cryptosi.dao/images/daohero.png';
  
  return {
    title: options.title,
    description: options.description,
    keywords: options.keywords?.join(', ') || 'CryptoSI, DAO, Decentralized Autonomous Organization, DeFi, dApp, governance, cryptocurrency, blockchain, web3',
    openGraph: {
      type: options.type || 'website',
      locale: 'en_US',
      url: options.url || baseUrl,
      title: options.title,
      description: options.description,
      images: [
        {
          url: options.image || defaultImage,
          width: 1200,
          height: 630,
          alt: options.title,
          type: 'image/png',
        },
      ],
      siteName: 'CryptoSI DAO Hub',
    },
    twitter: {
      handle: '@cryptosi_dao',
      site: '@cryptosi_dao',
      cardType: 'summary_large_image',
    },
    alternates: {
      canonical: options.url || baseUrl,
    },
  };
}

export const ORG_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'CryptoSI DAO',
  description: 'A Decentralized Autonomous Organization focused on building innovative DeFi solutions and dApps',
  url: 'https://cryptosi.dao',
  logo: {
    '@type': 'ImageObject',
    url: 'https://cryptosi.dao/images/crddlogotrans.png',
    width: 512,
    height: 512,
  },
  sameAs: [
    'https://twitter.com/cryptosi_dao',
    'https://discord.gg/VSPUucsyvn',
    'https://github.com/CryptoSI-DAODAO',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'community support',
    availableLanguage: 'English',
  },
};

export const WEBSITE_SCHEMA = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'CryptoSI DAO Hub',
  description: 'The central hub for the CryptoSI Decentralized Autonomous Organization',
  url: 'https://cryptosi.dao',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://cryptosi.dao/search?q={search_term_string}',
    'query-input': 'required name=search_term_string',
  },
};