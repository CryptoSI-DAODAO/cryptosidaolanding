import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BitpactHeroSection } from "@/components/bitpact/hero-section";
import { BitpactOverviewSection } from "@/components/bitpact/overview-section";
import { BitpactGoalsSection } from "@/components/bitpact/goals-section";
import { BitpactSpecificationsSection } from "@/components/bitpact/specifications-section";
import { BitpactCorePrincipleSection } from "@/components/bitpact/core-principle-section";
import { BitpactMilestonesSection } from "@/components/bitpact/milestones-section";
import { BitpactArbitersSection } from "@/components/bitpact/arbiters-section";
import { BitpactReputationSection } from "@/components/bitpact/reputation-section";
import { BitpactStorageSection } from "@/components/bitpact/storage-section";
import { BitpactFeeSection } from "@/components/bitpact/fee-section";
import { BitpactTradeLifecycleSection } from "@/components/bitpact/trade-lifecycle-section";
import { BitpactTreasurySection } from "@/components/bitpact/treasury-section";
import { BitpactPrivacySection } from "@/components/bitpact/privacy-section";
import { BitpactDemoSection } from "@/components/bitpact/demo-section";
import { BitpactFAQSection } from "@/components/bitpact/faq-section";
import { CollapsibleSection } from "@/components/bitpact/shared/collapsible-section";
import { StructuredData } from "@/components/seo/structured-data";
import { Metadata } from "next";
import { PROJECT_SEO_CONFIG } from "@/lib/seo-config";

export const metadata: Metadata = {
  title: "Bitpact - Decentralized P2P Bitcoin Protocol | CryptoSI",
  description: "BitPact is a decentralized P2P Bitcoin protocol where trades are more than transactions — they're pacts. Enforced by multisig, protected by bonded arbiters, and immortalized through immutable reputation.",
  keywords: ["Bitcoin", "P2P", "DeFi", "Decentralized", "Trading", "Multisig", "Arbitration"],
  openGraph: {
    type: 'article',
    title: 'Bitpact - Decentralized P2P Bitcoin Protocol',
    description: 'BitPact is a decentralized P2P Bitcoin protocol where trades are more than transactions — they\'re pacts. Enforced by multisig, protected by bonded arbiters, and immortalized through immutable reputation.',
    url: 'https://cryptosi.dao/ideas/bitpact',
    images: [
      {
        url: 'https://cryptosi.dao/images/bitpactlogotrans.png',
        width: 1200,
        height: 630,
        alt: 'Bitpact - Decentralized P2P Bitcoin Protocol',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bitpact - Decentralized P2P Bitcoin Protocol',
    description: 'BitPact is a decentralized P2P Bitcoin protocol where trades are more than transactions — they\'re pacts.',
    images: ['https://cryptosi.dao/images/bitpactlogotrans.png'],
  },
  alternates: {
    canonical: 'https://cryptosi.dao/ideas/bitpact',
  },
};

export default function BitpactPage() {
  const breadcrumbData = [
    { name: 'Home', url: 'https://cryptosi.dao' },
    { name: 'Ideas', url: 'https://cryptosi.dao/ideas' },
    { name: 'Bitpact', url: 'https://cryptosi.dao/ideas/bitpact' },
  ];

  const projectData = {
    title: 'Bitpact - Decentralized P2P Bitcoin Protocol',
    description: 'BitPact is a decentralized P2P Bitcoin protocol where trades are more than transactions — they\'re pacts. Enforced by multisig, protected by bonded arbiters, and immortalized through immutable reputation.',
    url: 'https://cryptosi.dao/ideas/bitpact',
    image: 'https://cryptosi.dao/images/bitpactlogotrans.png',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    tags: ['Bitcoin', 'P2P', 'DeFi', 'Decentralized', 'Trading', 'Multisig', 'Arbitration'],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData type="breadcrumb" data={{ breadcrumbs: breadcrumbData }} />
      <StructuredData type="project" data={projectData} />
      <Header />
      <main className="flex-1">
        <BitpactHeroSection />
        
        <CollapsibleSection
          title="🪙 Overview"
          subtitle="BitPact is a decentralized P2P Bitcoin protocol where trades are more than transactions — they're pacts. Enforced by multisig, protected by bonded arbiters, and immortalized through immutable reputation, BitPact brings honor, transparency, and cryptographic justice to peer-to-peer exchange."
          defaultExpanded={true}
        >
          <BitpactOverviewSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🎯 Goals"
          subtitle="BitPact is built on four fundamental goals that address the core challenges in P2P Bitcoin trading"
          className="bg-muted/30"
        >
          <BitpactGoalsSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="⚙️ Specifications"
          subtitle="Technical specifications designed for maximum security, decentralization, and user sovereignty"
        >
          <BitpactSpecificationsSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="📚 Core Principle: The Pact"
          subtitle="Every trade is more than a transaction — it's a digital oath between two sovereigns"
          className="bg-muted/30"
        >
          <BitpactCorePrincipleSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🚀 Milestones"
          subtitle="Our roadmap to revolutionizing P2P Bitcoin trading"
        >
          <BitpactMilestonesSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🛡️ Arbiters: Bonded + Transparent"
          subtitle="Professional arbiters with financial stakes and transparent accountability"
          className="bg-muted/30"
        >
          <BitpactArbitersSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="📚 The Pact System: How Reputation Works"
          subtitle="Every participant maintains a reputation log, stored off-chain in decentralized storage and linked to their public key"
        >
          <BitpactReputationSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🧾 Immutable Storage: IPFS + Arweave"
          subtitle="A hybrid storage system optimized for both accessibility and permanence"
          className="bg-muted/30"
        >
          <BitpactStorageSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="💸 Fee Structure"
          subtitle="Transparent and sustainable fee model designed to align incentives"
        >
          <BitpactFeeSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🧭 Trade Lifecycle"
          subtitle="Complete flow from offer creation to reputation update"
          className="bg-muted/30"
        >
          <BitpactTradeLifecycleSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="Treasury Management"
          subtitle="Sustainable governance and resource allocation for protocol growth"
        >
          <BitpactTreasurySection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🔐 Privacy Features"
          subtitle="Advanced privacy features designed for sovereign individuals"
          className="bg-muted/30"
        >
          <BitpactPrivacySection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🎮 Interactive Demo"
          subtitle="Experience the BitPact trading process step by step"
          className="bg-gradient-to-br from-primary/5 to-secondary/5"
          defaultExpanded={true}
        >
          <BitpactDemoSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="Frequently Asked Questions"
          subtitle="Common questions about BitPact answered"
          className="bg-muted/30"
        >
          <BitpactFAQSection />
        </CollapsibleSection>
      </main>
      <Footer />
    </div>
  );
}