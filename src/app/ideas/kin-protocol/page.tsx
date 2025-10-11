import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { KinProtocolHeroSection } from "@/components/kin-protocol/hero-section";
import { KinProtocolOverviewSection } from "@/components/kin-protocol/overview-section";
import { KinProtocolGoalsSection } from "@/components/kin-protocol/goals-section";
import { KinProtocolEcosystemSection } from "@/components/kin-protocol/ecosystem-section";
import { KinProtocolFeaturesSection } from "@/components/kin-protocol/features-section";
import { KinProtocolRiskManagementSection } from "@/components/kin-protocol/risk-management-section";
import { KinProtocolReputationSection } from "@/components/kin-protocol/reputation-section";
import { KinProtocolSmartContractsSection } from "@/components/kin-protocol/smart-contracts-section";
import { KinProtocolLoanLifecycleSection } from "@/components/kin-protocol/loan-lifecycle-section";
import { KinProtocolReputationEndowmentSection } from "@/components/kin-protocol/reputation-endowment-section";
import { KinProtocolMilestonesSection } from "@/components/kin-protocol/milestones-section";
import { KinProtocolFAQSection } from "@/components/kin-protocol/faq-section";
import { CollapsibleSection } from "@/components/bitpact/shared/collapsible-section";
import { StructuredData } from "@/components/seo/structured-data";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "KIN Protocol - Decentralized Undercollateralized Borrowing | CryptoSI",
  description: "KIN Protocol is a decentralized, undercollateralized lending platform designed to unlock trust-based lending in DeFi. Built on a tri-party model—Borrowers, Lenders, and Vouchers—KIN leverages on-chain mechanisms like vouch staking, slashing penalties, and NFT-backed loan contracts to create a transparent, flexible, and community-driven ecosystem.",
  keywords: ["DeFi", "Undercollateralized Lending", "Reputation", "Vouching", "NFT", "Smart Contracts", "CryptoSI"],
  openGraph: {
    type: 'article',
    title: 'KIN Protocol - Decentralized Undercollateralized Borrowing',
    description: 'KIN Protocol is a decentralized, undercollateralized lending platform designed to unlock trust-based lending in DeFi. Built on a tri-party model—Borrowers, Lenders, and Vouchers.',
    url: 'https://cryptosi.dao/ideas/kin-protocol',
    images: [
      {
        url: 'https://cryptosi.dao/images/kinlogotrans.png',
        width: 1200,
        height: 630,
        alt: 'KIN Protocol - Decentralized Undercollateralized Borrowing',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'KIN Protocol - Decentralized Undercollateralized Borrowing',
    description: 'KIN Protocol is a decentralized, undercollateralized lending platform designed to unlock trust-based lending in DeFi.',
    images: ['https://cryptosi.dao/images/kinlogotrans.png'],
  },
  alternates: {
    canonical: 'https://cryptosi.dao/ideas/kin-protocol',
  },
};

export default function KinProtocolPage() {
  const breadcrumbData = [
    { name: 'Home', url: 'https://cryptosi.dao' },
    { name: 'Ideas', url: 'https://cryptosi.dao/ideas' },
    { name: 'KIN Protocol', url: 'https://cryptosi.dao/ideas/kin-protocol' },
  ];

  const projectData = {
    title: 'KIN Protocol - Decentralized Undercollateralized Borrowing',
    description: 'KIN Protocol is a decentralized, undercollateralized lending platform designed to unlock trust-based lending in DeFi. Built on a tri-party model—Borrowers, Lenders, and Vouchers—KIN leverages on-chain mechanisms like vouch staking, slashing penalties, and NFT-backed loan contracts to create a transparent, flexible, and community-driven ecosystem.',
    url: 'https://cryptosi.dao/ideas/kin-protocol',
    image: 'https://cryptosi.dao/images/kinlogotrans.png',
    datePublished: '2024-01-01',
    dateModified: new Date().toISOString(),
    tags: ['DeFi', 'Undercollateralized Lending', 'Reputation', 'Vouching', 'NFT', 'Smart Contracts', 'CryptoSI'],
  };

  return (
    <div className="flex flex-col min-h-screen">
      <StructuredData type="breadcrumb" data={{ breadcrumbs: breadcrumbData }} />
      <StructuredData type="project" data={projectData} />
      <Header />
      <main className="flex-1">
        <KinProtocolHeroSection />
        
        <CollapsibleSection
          title="🪙 Overview"
          subtitle="KIN Protocol is a decentralized, undercollateralized lending platform designed to unlock trust-based lending in DeFi. Built on a tri-party model—Borrowers, Lenders, and Vouchers—KIN leverages on-chain mechanisms like vouch staking, slashing penalties, and NFT-backed loan contracts to create a transparent, flexible, and community-driven ecosystem."
          defaultExpanded={true}
        >
          <KinProtocolOverviewSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🎯 Goals"
          subtitle="KIN Protocol is built on fundamental goals that address the core challenges in decentralized lending"
          className="bg-muted/30"
        >
          <KinProtocolGoalsSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🌐 Tri-Party Ecosystem"
          subtitle="A unique ecosystem bringing together Borrowers, Lenders, and Vouchers in perfect harmony"
        >
          <KinProtocolEcosystemSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="⚡ Key Features"
          subtitle="Innovative features that set KIN Protocol apart from traditional lending platforms"
          className="bg-muted/30"
        >
          <KinProtocolFeaturesSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="⚖️ Risk Management"
          subtitle="Comprehensive risk mitigation strategies protecting all participants"
        >
          <KinProtocolRiskManagementSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="📊 Reputation Framework"
          subtitle="The KIN Reputation Score (KRS) and third-party integrations building trust"
          className="bg-muted/30"
        >
          <KinProtocolReputationSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🏗️ Smart Contracts: The Magnificent 7"
          subtitle="Core smart contracts powering the KIN Protocol ecosystem"
        >
          <KinProtocolSmartContractsSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🔄 Loan Lifecycle"
          subtitle="Complete flow from loan creation to repayment with visual representation"
          className="bg-muted/30"
        >
          <KinProtocolLoanLifecycleSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="💖 Reputation Endowment"
          subtitle="The eternal bond system that represents a voucher's established reputation"
        >
          <KinProtocolReputationEndowmentSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="🚀 Milestones"
          subtitle="Our roadmap to revolutionizing undercollateralized lending"
          className="bg-muted/30"
        >
          <KinProtocolMilestonesSection />
        </CollapsibleSection>
        
        <CollapsibleSection
          title="Frequently Asked Questions"
          subtitle="Common questions about KIN Protocol answered"
        >
          <KinProtocolFAQSection />
        </CollapsibleSection>
      </main>
      <Footer />
    </div>
  );
}