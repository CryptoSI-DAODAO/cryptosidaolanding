import type {Metadata} from 'next';
import { Toaster } from "@/components/ui/toaster"
import './globals.css';
import { ORG_SCHEMA, WEBSITE_SCHEMA } from '@/lib/seo-config';

export const metadata: Metadata = {
  title: {
    default: 'CryptoSI DAO Hub',
    template: '%s | CryptoSI DAO Hub'
  },
  description: 'The central hub for the CryptoSI Decentralized Autonomous Organization, featuring dApp portfolio, governance, financial reporting, and more.',
  keywords: 'CryptoSI, DAO, Decentralized Autonomous Organization, DeFi, dApp, governance, cryptocurrency, blockchain, web3',
  authors: [{ name: 'CryptoSI DAO' }],
  creator: 'CryptoSI DAO',
  publisher: 'CryptoSI DAO',
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
    creator: '@cryptosi_dao',
    site: '@cryptosi_dao',
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/images/favicons/site.webmanifest" />
        <link rel="shortcut icon" href="/images/favicons/favicon.ico" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Anton&family=Poppins:wght@400;500;600;700&display=swap" rel="stylesheet" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_SCHEMA) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_SCHEMA) }}
        />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
