"use client";

import { AnimatedFadeIn, AnimatedStagger } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Settings, 
  Image as ImageIcon, 
  Shield, 
  Zap, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  AlertCircle
} from "lucide-react";

const features = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Borrower-Led Loan Creation",
    description: "Borrowers set their own terms—loan amount, APR, repayment schedule, and funding window.",
    details: [
      "Customizable loan parameters",
      "Preferred Vouch Profile settings",
      "Flexible repayment schedules",
      "Market-driven interest rates"
    ],
    benefits: [
      "Empowerment through choice",
      "Competitive terms through competition",
      "Tailored financing solutions"
    ]
  },
  {
    icon: <Settings className="w-6 h-6" />,
    title: "Dynamic Vouching System",
    description: "Vouchers submit custom offers with risk parameters, fees, and reward structures.",
    details: [
      "Max Slash Amount configuration",
      "Upfront Fee negotiation",
      "APR Share or Bonus Pool options",
      "Competitive voucher marketplace"
    ],
    benefits: [
      "Risk customization",
      "Fee competition",
      "Flexible reward structures"
    ]
  },
  {
    icon: <ImageIcon className="w-6 h-6" />,
    title: "NFT-Backed Loan Contracts",
    description: "When fully funded, an NFT is minted containing all loan terms and participant identities.",
    details: [
      "Complete loan terms encoded",
      "Lender, voucher, borrower identities",
      "Vouch coverage parameters",
      "Secondary market tradability"
    ],
    benefits: [
      "Liquidity through trading",
      "Transparent ownership",
      "Composability with DeFi"
    ]
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "No Native Token",
    description: "Uses existing tokens (CRDD, LISA, ETH, USDS) for staking and vouching.",
    details: [
      "Multi-token support",
      "No new tokenomics complexity",
      "Immediate utility with established assets",
      "Reduced regulatory complexity"
    ],
    benefits: [
      "Simplified ecosystem",
      "Immediate adoption",
      "Reduced speculation"
    ]
  }
];

const uniqueAspects = [
  {
    title: "Borrower Empowerment",
    description: "Unlike traditional lending where terms are dictated by lenders, KIN puts borrowers in control of their financing needs.",
    icon: <Users className="w-5 h-5" />
  },
  {
    title: "On-Chain-Only Trust",
    description: "No KYC, no off-chain agreements—everything is enforced through smart contracts and on-chain reputation.",
    icon: <Shield className="w-5 h-5" />
  },
  {
    title: "Dynamic Incentives",
    description: "Multi-layered incentive structures create aligned interests across all participants.",
    icon: <TrendingUp className="w-5 h-5" />
  }
];

export function KinProtocolFeaturesSection() {
  return (
    <div className="space-y-12">
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            Innovative Features Setting KIN Apart
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            KIN Protocol introduces groundbreaking features that revolutionize undercollateralized lending. 
            Each feature is designed to solve specific challenges while creating a more inclusive, 
            efficient, and trustworthy financial ecosystem.
          </p>
        </div>
      </AnimatedFadeIn>

      <div className="grid gap-8 lg:grid-cols-2">
        {features.map((feature, index) => (
          <AnimatedFadeIn key={index} delay={0.2 + index * 0.1} direction="up">
            <Card className="relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">Key Components</h4>
                  <ul className="space-y-1">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Benefits</h4>
                  <div className="flex flex-wrap gap-1">
                    {feature.benefits.map((benefit, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>

      <AnimatedFadeIn delay={0.8}>
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center border border-primary/10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-background/80 rounded-full">
              <Badge variant="outline" className="mr-2 border-primary/20 text-primary">
                Differentiation
              </Badge>
              <span className="text-sm font-medium">What Makes KIN Unique</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Beyond Traditional Lending
            </h3>
            <p className="text-lg text-muted-foreground">
              KIN Protocol redefines undercollateralized lending by removing centralized gatekeepers, 
              empowering borrowers, and creating a fully transparent, market-driven ecosystem. 
              It's designed for DeFi power users who crave flexibility, composability, and deeper 
              financial strategies—without sacrificing trust or security.
            </p>
            
            <div className="grid gap-6 md:grid-cols-3 pt-6">
              {uniqueAspects.map((aspect, index) => (
                <div key={index} className="text-center space-y-3 p-6 bg-background/60 rounded-xl border border-border/50">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {aspect.icon}
                  </div>
                  <h4 className="font-semibold">{aspect.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {aspect.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={1.0}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-primary" />
                Competitive Advantages
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Lower borrowing costs through competition",
                  "Faster loan processing with automation",
                  "Greater accessibility than traditional finance",
                  "Enhanced transparency through on-chain records",
                  "Reduced counterparty risk via smart contracts"
                ].map((advantage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{advantage}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Solving Real Problems
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  "Eliminates overcollateralization requirements",
                  "Reduces reliance on traditional credit scoring",
                  "Enables cross-border lending seamlessly",
                  "Creates liquid markets for illiquid loans",
                  "Builds portable reputation systems"
                ].map((solution, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-muted-foreground">{solution}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={1.2}>
        <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
          <CardHeader className="text-center">
            <CardTitle className="text-xl">Example Flow</CardTitle>
            <CardDescription className="text-base">
              See how KIN Protocol works in practice
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  step: "1",
                  title: "Borrower Creates Loan",
                  description: "10 ETH at 12% APR with custom terms"
                },
                {
                  step: "2", 
                  title: "Vouchers Apply",
                  description: "X stakes 4 ETH (10% slash, 1% fee)"
                },
                {
                  step: "3",
                  title: "Loan Funded",
                  description: "NFT minted with all terms encoded"
                },
                {
                  step: "4",
                  title: "Active Trading",
                  description: "NFT trades on secondary markets"
                }
              ].map((step, index) => (
                <div key={index} className="text-center space-y-2 p-4 bg-background/60 rounded-lg border border-border/50">
                  <div className="w-8 h-8 mx-auto bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {step.step}
                  </div>
                  <h4 className="font-semibold text-sm">{step.title}</h4>
                  <p className="text-xs text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
            <div className="text-center pt-4">
              <Button variant="outline" className="group">
                View Complete Lifecycle
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </CardContent>
        </Card>
      </AnimatedFadeIn>
    </div>
  );
}