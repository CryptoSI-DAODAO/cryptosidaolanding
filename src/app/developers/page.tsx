import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { DeveloperHeroSection } from "@/components/developers/hero-section";
import { DeveloperRevenueSection } from "@/components/developers/revenue-section";
import { DeveloperHowItWorksSection } from "@/components/developers/how-it-works-section";
import { DeveloperOpportunitiesSection } from "@/components/developers/opportunities-section";
import { DeveloperBenefitsSection } from "@/components/developers/benefits-section";
import { DeveloperApplicationSection } from "@/components/developers/application-section";
import { DeveloperFAQSection } from "@/components/developers/faq-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Developer Partnerships | CryptoSI DAO",
  description: "Partner with CryptoSI DAO and earn up to 50% of revenues from dApps you help build. Join our ecosystem of innovative Web3 projects.",
  keywords: ["Web3 development", "DAO partnerships", "DeFi development", "Revenue sharing", "CryptoSI"],
};

export default function DevelopersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <DeveloperHeroSection />
        <DeveloperRevenueSection />
        <DeveloperHowItWorksSection />
        <DeveloperOpportunitiesSection />
        <DeveloperBenefitsSection />
        <DeveloperApplicationSection />
        <DeveloperFAQSection />
      </main>
      <Footer />
    </div>
  );
}