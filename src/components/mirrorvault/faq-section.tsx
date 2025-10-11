"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { StructuredData } from "@/components/seo/structured-data";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  BarChart3,
  AlertTriangle,
  CheckCircle,
  Globe
} from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  icon: React.ReactNode;
}

export function MirrorVaultFAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "What makes MirrorVault different from other copy trading platforms?",
      answer: "MirrorVault is fully decentralized and non-custodial, meaning your funds never leave the smart contract vault. We feature the Aegis Score reputation system, transparent fee structures, weekly profit crystallization, and the innovative Cool-Off Take-Profits mechanism that gives followers veto power over suspicious outcomes. All operations are on-chain and verifiable.",
      category: "General",
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: 2,
      question: "How does the Aegis Score work?",
      answer: "The Aegis Score is a comprehensive on-chain reputation system that evaluates managers based on four key components: Performance Metrics (35%), Risk Assessment (30%), Experience & Tenure (20%), and Community Trust (15%). Scores range from 0-1000, with levels like Legendary (900-1000), Elite (800-899), Expert (700-799), and so on. The score updates automatically based on on-chain trading data.",
      category: "Reputation",
      icon: <BarChart3 className="w-5 h-5" />
    },
    {
      id: 3,
      question: "What is the Cool-Off Take-Profits System?",
      answer: "The Cool-Off Take-Profits System is a unique safety mechanism where after each 30-day trading epoch, there's a 7-day cooling period. During this time, followers can withdraw funds or vote HOLD if they suspect issues. If 50% or more of vault shares vote HOLD, the vault freezes and manager fees remain locked until the HOLD ratio drops below 50%. This gives the community control over fee distribution.",
      category: "Safety",
      icon: <Clock className="w-5 h-5" />
    },
    {
      id: 4,
      question: "How are performance fees calculated?",
      answer: "Performance fees (typically 20%) are calculated weekly using a high-water mark mechanism. This means managers only receive fees on profits that exceed the previous highest vault value. Fees are crystallized every 7 days and distributed to managers. The high-water mark ensures managers don't get paid for simply recovering losses.",
      category: "Fees",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      id: 5,
      question: "What assets can I deposit into MirrorVault vaults?",
      answer: "Initially, MirrorVault supports ETH and USDC deposits. Vaults are ERC-4626 compliant, making them compatible with the broader DeFi ecosystem. Each vault may have specific asset requirements based on the manager's trading strategy. We plan to expand asset support based on community demand and liquidity availability.",
      category: "Assets",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 6,
      question: "How do managers execute trades?",
      answer: "Managers execute trades through whitelisted DEX or perpetual protocol adapters. They can long/short ETH-USD pairs with up to 5x leverage. Managers can initiate trades but cannot withdraw follower funds from vaults. All trades are executed on-chain and automatically mirrored proportionally for all followers in the vault.",
      category: "Trading",
      icon: <TrendingUp className="w-5 h-5" />
    },
    {
      id: 7,
      question: "Can I withdraw my funds at any time?",
      answer: "Yes, you can withdraw your funds at any time outside of the brief Cool-Off periods. During the 7-day cool-off after each epoch, you can still withdraw, but you should consider the community voting status. There are no lock periods or withdrawal restrictions, maintaining the non-custodial nature of the protocol.",
      category: "Withdrawals",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 8,
      question: "What security measures are in place?",
      answer: "MirrorVault implements multiple security layers: ERC-4626 standard vaults, circuit breakers, slippage guards, position limits, emergency pause functionality, and comprehensive smart contract audits. The Cool-Off mechanism adds community-driven protection. All contracts are audited by reputable firms and subject to ongoing security monitoring.",
      category: "Security",
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: 9,
      question: "How does cross-chain functionality work?",
      answer: "MirrorVault is designed for cross-chain deployment with a unified reputation system. We're launching on Base first (via GMX Multichain), then expanding to Arbitrum, Avalanche, and other EVM chains. The Aegis Score and manager reputation span across all chains, allowing managers to build credibility regardless of where they operate.",
      category: "Technical",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 10,
      question: "What happens if a manager performs poorly?",
      answer: "If a manager underperforms, their Aegis Score will decrease, making it harder to attract new followers. Followers can withdraw their funds at any time. In extreme cases of poor performance or suspicious activity, the community can trigger the Cool-Off mechanism to freeze fee payments. Poor performance is permanently recorded on-chain, affecting the manager's long-term reputation.",
      category: "Risk",
      icon: <AlertTriangle className="w-5 h-5" />
    },
    {
      id: 11,
      question: "How are managers verified?",
      answer: "Managers go through a verification process that includes identity verification, trading history analysis, and initial stake requirements. They must demonstrate a track record of successful trading and commit to the protocol's standards. Once verified, managers are continuously evaluated based on their on-chain performance and community feedback.",
      category: "Verification",
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      id: 12,
      question: "What are the gas fees like?",
      answer: "Gas fees vary depending on the network. By launching on Base first, we benefit from lower gas costs and faster transactions compared to Ethereum mainnet. Deposits, withdrawals, and trade execution all incur gas fees, but these are minimized through efficient contract design and batch operations where possible.",
      category: "Costs",
      icon: <DollarSign className="w-5 h-5" />
    }
  ];

  const categories = [...new Set(faqItems.map(item => item.category))];

  const filteredItems = faqItems; // You can add filtering logic here if needed

  // Prepare FAQ data for structured data
  const faqStructuredData = {
    faqs: faqItems.map(item => ({
      question: item.question,
      answer: item.answer,
    })),
  };

  return (
    <div className="space-y-12">
      {/* FAQ Structured Data */}
      <StructuredData type="faq" data={faqStructuredData} />
      {/* Category Filter */}
      <AnimatedSection delay={0.1}>
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((category) => (
            <Badge key={category} variant="secondary" className="px-3 py-1">
              {category}
            </Badge>
          ))}
        </div>
      </AnimatedSection>
      
      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto space-y-4">
        {filteredItems.map((item, index) => (
          <AnimatedFadeIn key={item.id} delay={0.1 + index * 0.05} direction="up">
            <Card className="border-primary/20 hover:shadow-lg transition-all duration-300">
              <CardHeader
                className="cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-primary/10 rounded-lg text-primary">
                      {item.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg text-left">{item.question}</CardTitle>
                      <Badge variant="outline" className="mt-1 text-xs">
                        {item.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="ml-4">
                    {openItems.includes(item.id) ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>
              </CardHeader>
              
              {openItems.includes(item.id) && (
                <CardContent className="pt-0">
                  <CardDescription className="text-base leading-relaxed">
                    {item.answer}
                  </CardDescription>
                </CardContent>
              )}
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>
      
      <AnimatedSection delay={0.3}>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">Still Have Questions?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-6">
              Can't find the answer you're looking for? Join our community and ask directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                📧 support@mirrorvault.io
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                💬 Discord Community
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                📖 Documentation
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                🐦 Twitter Updates
              </Badge>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
      
      <AnimatedSection delay={0.4}>
        <Card className="border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-lg text-primary">Quick Links</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="font-semibold">Security</h4>
                <p className="text-sm text-muted-foreground">
                  Learn about our security measures and audit reports
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold">Analytics</h4>
                <p className="text-sm text-muted-foreground">
                  Access detailed performance metrics and analytics
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-500" />
                </div>
                <h4 className="font-semibold">Community</h4>
                <p className="text-sm text-muted-foreground">
                  Join our growing community of traders and followers
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}