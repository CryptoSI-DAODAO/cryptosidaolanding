"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "./shared/animated-section";
import { StructuredData } from "@/components/seo/structured-data";
import {
  ChevronDown,
  ChevronUp,
  Shield,
  Bitcoin,
  Users,
  DollarSign,
  FileText,
  Lock,
  Globe
} from "lucide-react";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  category: string;
  icon: React.ReactNode;
}

export function BitpactFAQSection() {
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
      question: "What makes BitPact different from other P2P trading platforms?",
      answer: "BitPact is built on three core principles: (1) Bitcoin-native with no wrapped assets, (2) Bonded arbiters who are financially incentivized to act fairly, and (3) Immutable reputation systems stored on decentralized storage. Unlike centralized exchanges, BitPact never takes custody of your funds and provides cryptographic proof for all actions.",
      category: "General",
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: 2,
      question: "How does the 2-of-3 multisig work?",
      answer: "In BitPact's multisig system, three keys are involved: the buyer's key, the seller's key, and the arbiter's key. To release funds from escrow, any two of these three keys must sign the transaction. This ensures that no single party can unilaterally access the funds, while still allowing for dispute resolution through the arbiter.",
      category: "Technical",
      icon: <Lock className="w-5 h-5" />
    },
    {
      id: 3,
      question: "What happens if there's a dispute?",
      answer: "When a dispute occurs, both parties submit evidence to the bonded arbiter. The arbiter reviews the evidence, makes a ruling, and signs the transaction to release funds to the winning party. The arbiter's decision and reasoning are permanently stored on Arweave, creating a transparent and immutable record of the resolution.",
      category: "Disputes",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 4,
      question: "How are arbiters selected and what prevents them from being biased?",
      answer: "Arbiters must stake BTC as a bond, which can be slashed if they act dishonestly. They're always paid 50% of the protocol fee regardless of disputes, incentivizing active participation. The community can vote on arbiter performance, and their complete history of decisions is publicly visible, creating strong accountability.",
      category: "Arbitration",
      icon: <Users className="w-5 h-5" />
    },
    {
      id: 5,
      question: "Is BitPact really trustless?",
      answer: "BitPact minimizes trust through cryptographic proof and economic incentives. While you need to trust that the arbiter will act honestly (backed by their bond), the system is designed so that bad behavior is economically disincentivized and publicly visible. All actions are verifiable on-chain, and reputation is immutable.",
      category: "Security",
      icon: <Shield className="w-5 h-5" />
    },
    {
      id: 6,
      question: "What are the fees and how are they distributed?",
      answer: "BitPact charges a flat 1% protocol fee on the trade value. This fee is split equally: 0.5% goes to the arbiter (paid on every trade, not just disputes) and 0.5% goes to the protocol treasury for development, infrastructure, and ecosystem growth. Fees are collected directly in escrow at trade completion.",
      category: "Fees",
      icon: <DollarSign className="w-5 h-5" />
    },
    {
      id: 7,
      question: "How is reputation data stored and why is it immutable?",
      answer: "Reputation data is stored using a hybrid approach: IPFS for active review logs (fast access) and Arweave for final arbitration reports (permanent storage). Each entry is cryptographically signed by the reviewer, making it tamper-proof. This creates a permanent, verifiable history of each participant's trading behavior.",
      category: "Reputation",
      icon: <FileText className="w-5 h-5" />
    },
    {
      id: 8,
      question: "Can I remain anonymous while using BitPact?",
      answer: "BitPact supports pseudonymous trading using public keys. Future versions will include enhanced privacy features like stealth reviews (only hashes visible unless disputed), Tor routing for darknet access, and zero-knowledge reputation proofs that allow you to prove trading history without revealing specific details.",
      category: "Privacy",
      icon: <Globe className="w-5 h-5" />
    },
    {
      id: 9,
      question: "What Bitcoin wallets are compatible with BitPact?",
      answer: "BitPact supports any PSBT-compatible wallet, including hardware wallets like Trezor and Ledger, and software wallets like Electrum, Sparrow, and Wasabi. The system is designed to work with standard Bitcoin infrastructure without requiring custom wallet software.",
      category: "Technical",
      icon: <Bitcoin className="w-5 h-5" />
    },
    {
      id: 10,
      question: "How does the DAO governance work?",
      answer: "Initially, BitPact is governed by a multisig development council. Over time, control will transition to a full DAO where token holders can vote on protocol parameters, arbiter approval, and treasury allocation. This gradual decentralization ensures stability during early development while moving toward full community governance.",
      category: "Governance",
      icon: <Users className="w-5 h-5" />
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
                📧 support@bitpact.io
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                💬 Discord Community
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-sm">
                📖 Documentation
              </Badge>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}