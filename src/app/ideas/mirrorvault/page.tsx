import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MirrorVaultHeroSection } from "@/components/mirrorvault/hero-section";
import { MirrorVaultOverviewSection } from "@/components/mirrorvault/overview-section";
import { MirrorVaultGoalsSection } from "@/components/mirrorvault/goals-section";
import { MirrorVaultSpecificationsSection } from "@/components/mirrorvault/specifications-section";
import { MirrorVaultAegisScoreSection } from "@/components/mirrorvault/aegis-score-section";
import { MirrorVaultCooloffSection } from "@/components/mirrorvault/cooloff-section";
import { MirrorVaultTechnicalStackSection } from "@/components/mirrorvault/technical-stack-section";
import { MirrorVaultMilestonesSection } from "@/components/mirrorvault/milestones-section";
import { MirrorVaultChainsSection } from "@/components/mirrorvault/chains-section";
import { MirrorVaultDemoSection } from "@/components/mirrorvault/demo-section";
import { MirrorVaultFAQSection } from "@/components/mirrorvault/faq-section";
import { CollapsibleSection } from "@/components/bitpact/shared/collapsible-section";
import { StructuredData } from "@/components/seo/structured-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "MirrorVault - Decentralized Copy Trading Protocol | CryptoSI",
  description: "MirrorVault is a decentralized, non-custodial copy-trading protocol built for Ethereum and EVM-compatible networks. Follow verified traders and automatically mirror their strategies on-chain.",
  keywords: ["DeFi", "Copy Trading", "Ethereum", "Smart Contracts", "Vaults", "Aegis Score", "Non-custodial"],
  openGraph: {
    type: 'article',
    title: 'MirrorVault - Decentralized Copy Trading Protocol',
    description: 'MirrorVault is a decentralized, non-custodial copy-trading protocol built for Ethereum and EVM-compatible networks. Follow verified traders and automatically mirror their strategies on-chain.',
    url: 'https://cryptosi.dao/ideas/mirrorvault',
    images: [
      {
        url: 'https://cryptosi.dao/images/mirrorvaultlogotrans.png',
        width: 1200,
        height: 630,
        alt: 'MirrorVault - Decentralized Copy Trading Protocol',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MirrorVault - Decentralized Copy Trading Protocol',
    description: 'MirrorVault is a decentralized, non-custodial copy-trading protocol built for Ethereum and EVM-compatible networks.',
    images: ['https://cryptosi.dao/images/mirrorvaultlogotrans.png'],
  },
  alternates: {
    canonical: 'https://cryptosi.dao/ideas/mirrorvault',
  },
};

export default function MirrorVaultPage() {
  const breadcrumbData = [
    { name: 'Home', url: 'https://cryptosi.dao' },
    { name: 'Ideas', url: 'https://cryptosi.dao/ideas' },
    { name: 'MirrorVault', url: 'https://cryptosi.dao/ideas/mirrorvault' },
  ];

  const projectData = {
    title: 'MirrorVault - Decentralized Copy Trading Protocol',
    description: 'MirrorVault is a decentralized, non-custodial copy-trading protocol built for Ethereum and EVM-compatible networks. It allows followers to deposit into smart-contract vaults managed by verified traders whose trades are automatically mirrored on-chain in real time.',
    url: 'https://cryptosi.dao/ideas/mirrorvault',
    image: 'https://cryptosi.dao/images/mirrorvaultlogotrans.png',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    tags: ['DeFi', 'Copy Trading', 'Ethereum', 'Smart Contracts', 'Vaults', 'Aegis Score', 'Non-custodial'],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData type="breadcrumb" data={{ breadcrumbs: breadcrumbData }} />
      <StructuredData type="project" data={projectData} />
      <Header />
      <main className="flex-1">
        <MirrorVaultHeroSection />
        
        <CollapsibleSection
          title="🪙 Overview"
          subtitle="MirrorVault is a decentralized, non-custodial copy-trading protocol built for Ethereum and EVM-compatible networks. It allows followers to deposit into smart-contract vaults managed by verified traders whose trades are automatically mirrored on-chain in real time."
          defaultExpanded={true}
        >
          <MirrorVaultOverviewSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🎯 Goals"
          subtitle="MirrorVault is built on four fundamental goals that address the core challenges in decentralized copy trading"
          className="bg-muted/30"
        >
          <MirrorVaultGoalsSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="⚙️ Specifications"
          subtitle="Technical specifications designed for maximum security, transparency, and performance"
        >
          <MirrorVaultSpecificationsSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="📊 Aegis Score: Reputation System"
          subtitle="A comprehensive on-chain reputation layer that tracks manager performance, risk, and credibility"
          className="bg-muted/30"
        >
          <MirrorVaultAegisScoreSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🧊 Cool-Off Take-Profits System"
          subtitle="An innovative safeguard that ensures fairness and accountability after each trading cycle"
        >
          <MirrorVaultCooloffSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🛠️ Technical Stack"
          subtitle="Built with industry-leading tools and technologies for maximum security and performance"
          className="bg-muted/30"
        >
          <MirrorVaultTechnicalStackSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🚀 Milestones"
          subtitle="Our roadmap to revolutionizing decentralized copy trading"
        >
          <MirrorVaultMilestonesSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🌐 Chains & Launch Strategy"
          subtitle="Strategic deployment on select EVM chains with mature DeFi infrastructure"
          className="bg-muted/30"
        >
          <MirrorVaultChainsSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🎮 Interactive Demo"
          subtitle="Experience the MirrorVault copy trading process step by step"
          className="bg-gradient-to-br from-primary/5 to-secondary/5"
          defaultExpanded={true}
        >
          <MirrorVaultDemoSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="Frequently Asked Questions"
          subtitle="Common questions about MirrorVault answered"
          className="bg-muted/30"
        >
          <MirrorVaultFAQSection />
        </CollapsibleSection>
      </main>
      <Footer />
    </div>
  );
}