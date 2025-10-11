"use client";

import { useState } from "react";
import { AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { StructuredData } from "@/components/seo/structured-data";
import {
  ChevronDown,
  ChevronUp,
  Bus,
  Users,
  Shield,
  DollarSign,
  Globe,
  TrendingUp,
  Award,
  Clock
} from "lucide-react";

const faqCategories = [
  {
    category: "General",
    icon: <Bus className="w-5 h-5" />,
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    category: "Investment",
    icon: <DollarSign className="w-5 h-5" />,
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    category: "Technology",
    icon: <Shield className="w-5 h-5" />,
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    category: "Operations",
    icon: <Users className="w-5 h-5" />,
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  }
];

const faqs = [
  {
    question: "What is Bus-Fi and how does it work?",
    answer: "Bus-Fi is a decentralized crowdfunding platform built on the Hedera network that finances bus networks in underserved African communities. Investors fund bus operations through NFT purchases and receive dividends from the bus's operational profits. The platform uses blockchain technology to ensure transparency, while a reputation system incentivizes reliable performance from bus operators.",
    category: "General"
  },
  {
    question: "How do I invest in a bus through Bus-Fi?",
    answer: "Investing is simple: 1) Browse available bus projects with detailed operator profiles and financial projections, 2) Select your investment amount and purchase Bus-Fi NFTs representing fractional ownership, 3) Receive automated dividend payments to your wallet, 4) Track performance through your dashboard or trade NFTs on secondary markets.",
    category: "Investment"
  },
  {
    question: "What are the expected returns on investment?",
    answer: "Returns are performance-based and tiered: During the pre-repayment phase (until the initial loan is fully repaid), NFT holders receive 20-30% of net operational profits. After repayment, they receive 10-15% in perpetuity. Actual returns depend on individual bus performance, route profitability, and operational efficiency.",
    category: "Investment"
  },
  {
    question: "How is the reputation system calculated?",
    answer: "The reputation system uses multiple weighted factors: Timely repayments (40%), Performance metrics like bus efficiency and revenue (25%), Community engagement in DAO governance (15%), Transparency through regular reporting (10%), and Longevity in the ecosystem (10%). Scores range from 0-100 and directly impact funding opportunities and terms.",
    category: "Technology"
  },
  {
    question: "What happens if a bus operator defaults on payments?",
    answer: "Bus-Fi implements multiple protection mechanisms: 1) Thorough vetting of operators before listing, 2) Reputation-based access to funding, 3) Smart contract-enforced payment schedules, 4) Community-driven dispute resolution through DAO governance, 5) Secondary market liquidity for investors to exit positions if needed.",
    category: "Operations"
  },
  {
    question: "How are dividends calculated and distributed?",
    answer: "Dividends are calculated automatically by smart contracts based on net operational profits (revenue minus expenses). The system determines each NFT holder's share based on their ownership percentage and the current dividend phase. Payments are distributed automatically to the wallet address associated with each NFT.",
    category: "Investment"
  },
  {
    question: "Can I sell my Bus-Fi NFT on secondary markets?",
    answer: "Yes, Bus-Fi NFTs are designed to be liquid assets that can be traded on secondary markets. The value of NFTs may appreciate based on the operator's reputation, bus performance, and overall platform success. All transfers are recorded on the Hedera blockchain for full transparency.",
    category: "Investment"
  },
  {
    question: "How does Bus-Fi ensure transparency and prevent fraud?",
    answer: "Transparency is built into the core architecture: 1) All transactions are recorded on the immutable Hedera ledger, 2) Smart contracts automate calculations and distributions, 3) Regular performance reporting is required from operators, 4) Community governance provides oversight, 5) Third-party audits of financial data are conducted periodically.",
    category: "Technology"
  },
  {
    question: "What is the role of the DAO in Bus-Fi?",
    answer: "The DAO (Decentralized Autonomous Organization) allows NFT holders to participate in key platform decisions, including: 1) Approving new bus operators, 2) Setting dividend distribution parameters, 3) Managing treasury funds for platform development, 4) Resolving disputes between parties, 5) Voting on protocol upgrades and changes.",
    category: "Operations"
  },
  {
    question: "How are bus operators selected and vetted?",
    answer: "Operators undergo a comprehensive vetting process: 1) Background checks and financial history review, 2) Route analysis and market potential assessment, 3) Vehicle inspection and maintenance records, 4) Business plan evaluation, 5) Community references and reputation checks. Only qualified operators with proven track records are listed on the platform.",
    category: "Operations"
  },
  {
    question: "What currencies are used for investments and payments?",
    answer: "Bus-Fi operates on the Hedera network and primarily uses HBAR for transactions. However, the platform is designed to support stablecoins and other major cryptocurrencies to ensure accessibility for global investors. Local currency conversions are handled through integrated payment partners for bus operations.",
    category: "General"
  },
  {
    question: "How does Bus-Fi impact local communities?",
    answer: "Bus-Fi creates multiple positive impacts: 1) Improved transportation access for underserved communities, 2) Economic opportunities for local entrepreneurs, 3) Job creation in the transportation sector, 4) Technology transfer and blockchain education, 5) Financial inclusion through access to global capital markets, 6) Community wealth building through shared ownership.",
    category: "General"
  }
];

function FAQItem({ question, answer, isOpen, onToggle }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  return (
    <Card className="mb-4 overflow-hidden">
      <CardHeader 
        className="cursor-pointer hover:bg-muted/50 transition-colors"
        onClick={onToggle}
      >
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg">{question}</CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="outline" className="text-xs">Click to expand</Badge>
            {isOpen ? (
              <ChevronUp className="w-5 h-5 text-muted-foreground" />
            ) : (
              <ChevronDown className="w-5 h-5 text-muted-foreground" />
            )}
          </div>
        </div>
      </CardHeader>
      {isOpen && (
        <CardContent>
          <CardDescription className="text-base leading-relaxed">
            {answer}
          </CardDescription>
        </CardContent>
      )}
    </Card>
  );
}

export function BusFiFAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0])); // First item open by default
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  const filteredFAQs = selectedCategory === "All" 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const categories = ["All", ...faqCategories.map(cat => cat.category)];

  // Prepare FAQ data for structured data
  const faqStructuredData = {
    faqs: faqs.map(faq => ({
      question: faq.question,
      answer: faq.answer,
    })),
  };

  return (
    <div className="space-y-8">
      {/* FAQ Structured Data */}
      <StructuredData type="faq" data={faqStructuredData} />
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            Frequently Asked Questions
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            Find answers to common questions about Bus-Fi, from investment mechanics 
            to technical implementation and community impact.
          </p>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={0.2}>
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <Badge
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className="cursor-pointer px-4 py-2"
              style={{
                backgroundColor: selectedCategory === category ? "#FFD600" : undefined,
                color: selectedCategory === category ? "#212121" : undefined
              }}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </Badge>
          ))}
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={0.3}>
        <div className="max-w-4xl mx-auto">
          {filteredFAQs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.has(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={0.5}>
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardHeader className="text-center">
            <CardTitle className="text-xl" style={{ color: "#FFD600" }}>Still Have Questions?</CardTitle>
            <CardDescription className="text-base">
              We're here to help you understand Bus-Fi and explore investment opportunities
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold mb-2">Community Support</h4>
                <p className="text-sm text-muted-foreground">
                  Join our Discord community to connect with other investors and operators
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold mb-2">Investment Guidance</h4>
                <p className="text-sm text-muted-foreground">
                  Access detailed guides and tutorials for getting started with Bus-Fi
                </p>
              </div>
              
              <div className="text-center">
                <div className="mx-auto w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <Award className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold mb-2">Technical Documentation</h4>
                <p className="text-sm text-muted-foreground">
                  Review our comprehensive technical documentation and smart contract audits
                </p>
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge variant="outline" className="px-4 py-2 bg-white">
                  <Clock className="w-3 h-3 mr-1" />
                  24/7 Support
                </Badge>
                <Badge variant="outline" className="px-4 py-2 bg-white">
                  <Globe className="w-3 h-3 mr-1" />
                  Multi-Language Support
                </Badge>
                <Badge variant="outline" className="px-4 py-2 bg-white">
                  <Shield className="w-3 h-3 mr-1" />
                  Secure Platform
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedFadeIn>
    </div>
  );
}