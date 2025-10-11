"use client";

import { useState } from "react";
import { AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { StructuredData } from "@/components/seo/structured-data";
import {
  ChevronDown,
  ChevronUp,
  HelpCircle,
  Users,
  Shield,
  DollarSign,
  TrendingUp,
  Award,
  Clock,
  AlertCircle
} from "lucide-react";

const faqCategories = [
  {
    category: "General",
    icon: <HelpCircle className="w-5 h-5" />,
    color: "blue",
    questions: [
      {
        q: "What is KIN Protocol?",
        a: "KIN Protocol is a decentralized, undercollateralized lending platform built on a tri-party model of Borrowers, Lenders, and Vouchers. It enables trust-based lending where reputation serves as collateral, allowing users to access capital without traditional collateral requirements."
      },
      {
        q: "How does undercollateralized lending work?",
        a: "Instead of requiring borrowers to deposit collateral worth more than their loan, KIN uses voucher backing and reputation scores to mitigate risk. Vouchers stake their own tokens to back borrowers, and if the borrower defaults, vouchers' stakes are slashed to repay lenders."
      },
      {
        q: "What makes KIN different from other DeFi lending protocols?",
        a: "KIN Protocol combines several unique features: a tri-party model, reputation-based lending, NFT-backed loan contracts, no native token requirement, and a sophisticated reputation endowment system. This creates a more inclusive and flexible lending ecosystem."
      },
      {
        q: "Is KIN Protocol safe to use?",
        a: "KIN implements multiple layers of security including smart contract audits, risk management mechanisms, gradual slashing, and optional full principal protection. However, like all DeFi protocols, users should understand the risks and start with small amounts."
      }
    ]
  },
  {
    category: "Borrowers",
    icon: <Users className="w-5 h-5" />,
    color: "green",
    questions: [
      {
        q: "How do I get started as a borrower?",
        a: "Start by connecting your wallet and integrating reputation credentials from Galxe, Civic, or Ontology. Create a loan request with your desired terms, attract voucher backing, and once funded, receive your loan. Build your reputation through timely repayments for better future terms."
      },
      {
        q: "What loan terms can I set?",
        a: "As a borrower, you have full control over loan amount, APR, repayment schedule, and funding window. You can also create a Preferred Vouch Profile to guide potential vouchers on your ideal risk and fee structures."
      },
      {
        q: "Do I need to provide any collateral?",
        a: "No, KIN Protocol is specifically designed for undercollateralized lending. Instead of traditional collateral, you need to attract voucher backing and build a good reputation score to access loans."
      },
      {
        q: "What happens if I miss a payment?",
        a: "Missed payments trigger incremental slashing of voucher stakes, giving you recovery time. However, consistent late payments will damage your KRS score and make future borrowing more difficult. Full default results in maximum slashing up to preset caps."
      },
      {
        q: "How can I improve my borrowing terms?",
        a: "Build your reputation through timely repayments, integrate third-party credentials, increase your KRS score, and establish relationships with reliable vouchers. Higher reputation scores unlock better APRs and terms."
      }
    ]
  },
  {
    category: "Lenders",
    icon: <DollarSign className="w-5 h-5" />,
    color: "purple",
    questions: [
      {
        q: "How do I lend on KIN Protocol?",
        a: "Browse available loans on the marketplace, review borrower reputation scores and voucher backing, assess the risk level, and fund loans that match your risk-return preferences. You'll receive NFT representations of your loan positions."
      },
      {
        q: "What are the risk levels for lenders?",
        a: "KIN offers three risk tiers: Conservative (full principal protection, 4-6% APR), Balanced (partial protection, 8-12% APR), and Opportunistic (higher risk, 15-25% APR). Choose based on your risk tolerance."
      },
      {
        q: "How is my principal protected?",
        a: "Through voucher backing and slashing mechanisms. If a borrower defaults, vouchers' stakes are slashed incrementally to repay lenders. Full principal protection is available when vouchers fully cover the loan amount."
      },
      {
        q: "Can I sell my loan positions?",
        a: "Yes! Each loan creates an NFT that represents your position. These NFTs can be traded on secondary markets, providing liquidity and allowing you to exit positions before loan maturity."
      },
      {
        q: "What returns can I expect?",
        a: "Returns vary based on risk level and loan terms. Conservative loans offer 4-6% APR with minimal risk, while higher-risk opportunities can provide 15-25% APR. Your actual returns depend on loan performance and any secondary market trading."
      }
    ]
  },
  {
    category: "Vouchers",
    icon: <Shield className="w-5 h-5" />,
    color: "orange",
    questions: [
      {
        q: "What is a voucher and what do they do?",
        a: "Vouchers are participants who stake their tokens to back borrowers, taking on calculated risk in exchange for fees and reputation rewards. They're essential for enabling undercollateralized lending by providing risk coverage."
      },
      {
        q: "How do I become a voucher?",
        a: "Start by building your reputation through successful participation in the ecosystem. Stake whitelisted tokens (CRDD, LISA, ETH, USDS), set your risk parameters, and begin backing borrowers who meet your criteria."
      },
      {
        q: "What tokens can I use for vouching?",
        a: "KIN Protocol supports multiple whitelisted tokens including CRDD, LISA, ETH, USDS, and other approved assets. This provides flexibility and avoids forcing users into new token ecosystems."
      },
      {
        q: "How much can I earn as a voucher?",
        a: "Vouchers earn through multiple streams: upfront fees paid by borrowers, reputation endowment rewards from successful loans, and potential APR sharing. Returns vary based on risk parameters and loan performance."
      },
      {
        q: "What is the Reputation Endowment?",
        a: "The Reputation Endowment is a permanent vault where your voucher rewards accumulate. The principal is locked forever, but generates sustainable yields that you can compound or withdraw, representing your established reputation."
      }
    ]
  },
  {
    category: "Technical",
    icon: <Award className="w-5 h-5" />,
    color: "red",
    questions: [
      {
        q: "What blockchain is KIN Protocol built on?",
        a: "KIN Protocol is designed to be blockchain-agnostic but will initially launch on Ethereum and EVM-compatible chains with mature DeFi infrastructure. The architecture supports multi-chain expansion."
      },
      {
        q: "What are the Magnificent 7 smart contracts?",
        a: "The seven core contracts powering KIN: Kin Protocol (main), Loan Contracts, Collateral Contract, Credit Bureau, Rep_Endowment, Credit_Bureau_Ledger, and Rep_Endowment_Ledger. Each has a specific role in the ecosystem."
      },
      {
        q: "How does the KRS (KIN Reputation Score) work?",
        a: "KRS is a dynamic credit score (F-A grades) calculated from payment history (40%), loan value (25%), third-party data (20%), vouching activity (10%), and ecosystem participation (5%). Scores decay over time, allowing recovery from past issues."
      },
      {
        q: "Are the smart contracts audited?",
        a: "Yes, all smart contracts undergo comprehensive security audits by reputable firms before mainnet deployment. We also implement bug bounty programs and ongoing security monitoring."
      },
      {
        q: "What happens if funds get trapped in contracts?",
        a: "KIN has two safety mechanisms: a 6-year forfeit rule where unclaimed funds go to the CryptoSI DAO treasury, and a DAO intervention mechanism for exceptional circumstances through community voting."
      }
    ]
  }
];

export function KinProtocolFAQSection() {
  const [openCategory, setOpenCategory] = useState<string | null>("General");
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const toggleQuestion = (questionKey: string) => {
    const newOpen = new Set(openQuestions);
    if (newOpen.has(questionKey)) {
      newOpen.delete(questionKey);
    } else {
      newOpen.add(questionKey);
    }
    setOpenQuestions(newOpen);
  };

  // Prepare FAQ data for structured data
  const faqStructuredData = {
    faqs: faqCategories.flatMap(category =>
      category.questions.map(faq => ({
        question: faq.q,
        answer: faq.a,
      }))
    ),
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
            Find answers to common questions about KIN Protocol. Whether you're a borrower, 
            lender, or voucher, we've got you covered with comprehensive information about 
            how the ecosystem works.
          </p>
        </div>
      </AnimatedFadeIn>

      <div className="grid gap-6 lg:grid-cols-2">
        {faqCategories.map((category, index) => (
          <AnimatedFadeIn key={index} delay={0.1 * index}>
            <Card className="border-primary/20 overflow-hidden">
              <CardHeader 
                className="cursor-pointer hover:bg-muted/50 transition-colors"
                onClick={() => setOpenCategory(openCategory === category.category ? null : category.category)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 bg-${category.color}-500/10 rounded-lg text-${category.color}-600`}>
                      {category.icon}
                    </div>
                    <CardTitle className="text-lg">{category.category}</CardTitle>
                    <Badge variant="secondary" className="text-xs">
                      {category.questions.length} questions
                    </Badge>
                  </div>
                  <Button variant="ghost" size="sm">
                    {openCategory === category.category ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </Button>
                </div>
              </CardHeader>
              
              {openCategory === category.category && (
                <CardContent className="space-y-3">
                  {category.questions.map((faq, faqIndex) => {
                    const questionKey = `${category.category}-${faqIndex}`;
                    const isOpen = openQuestions.has(questionKey);
                    
                    return (
                      <div key={faqIndex} className="border border-border/50 rounded-lg overflow-hidden">
                        <Button
                          variant="ghost"
                          className="w-full justify-between p-4 h-auto hover:bg-muted/30"
                          onClick={() => toggleQuestion(questionKey)}
                        >
                          <span className="text-left font-medium text-sm">{faq.q}</span>
                          {isOpen ? (
                            <ChevronUp className="w-4 h-4 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-4 h-4 flex-shrink-0" />
                          )}
                        </Button>
                        {isOpen && (
                          <div className="px-4 pb-4">
                            <p className="text-sm text-muted-foreground leading-relaxed">
                              {faq.a}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </CardContent>
              )}
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>

      <AnimatedFadeIn delay={0.6}>
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center border border-primary/10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-background/80 rounded-full">
              <Badge variant="outline" className="mr-2 border-primary/20 text-primary">
                Need More Help?
              </Badge>
              <span className="text-sm font-medium">We're here to support you</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Still Have Questions?
            </h3>
            <p className="text-lg text-muted-foreground">
              Can't find the answer you're looking for? Our community and support team are here to help. 
              Join our Discord, participate in governance discussions, or reach out directly.
            </p>
            
            <div className="grid gap-4 md:grid-cols-3 pt-6">
              <div className="text-center space-y-2 p-4 bg-background/60 rounded-lg border border-border/50">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Users className="w-6 h-6" />
                </div>
                <h4 className="font-semibold">Community</h4>
                <p className="text-sm text-muted-foreground">Join our Discord community for real-time help</p>
              </div>
              
              <div className="text-center space-y-2 p-4 bg-background/60 rounded-lg border border-border/50">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <Clock className="w-6 h-6" />
                </div>
                <h4 className="font-semibold">Documentation</h4>
                <p className="text-sm text-muted-foreground">Explore our detailed technical documentation</p>
              </div>
              
              <div className="text-center space-y-2 p-4 bg-background/60 rounded-lg border border-border/50">
                <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <h4 className="font-semibold">Governance</h4>
                <p className="text-sm text-muted-foreground">Participate in protocol decisions and improvements</p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={0.8}>
        <Card className="border-primary/20 bg-muted/30">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              Quick Start Guide
            </CardTitle>
            <CardDescription className="text-base">
              Get started with KIN Protocol in 3 simple steps
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h4 className="font-semibold">Connect & Verify</h4>
                <p className="text-sm text-muted-foreground">
                  Connect your wallet and integrate reputation credentials from Galxe, Civic, or Ontology to establish your identity.
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h4 className="font-semibold">Choose Your Role</h4>
                <p className="text-sm text-muted-foreground">
                  Whether you're borrowing, lending, or vouching, find opportunities that match your goals and risk tolerance.
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h4 className="font-semibold">Build & Grow</h4>
                <p className="text-sm text-muted-foreground">
                  Participate actively, build your reputation, and grow your influence in the KIN ecosystem.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedFadeIn>
    </div>
  );
}