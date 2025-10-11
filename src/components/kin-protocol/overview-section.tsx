"use client";

import { AnimatedFadeIn, AnimatedStagger } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, HandHeart, Shield, TrendingUp, Globe, Zap } from "lucide-react";

const keyPoints = [
  {
    icon: <Users className="w-6 h-6" />,
    title: "Tri-Party Model",
    description: "Borrowers, Lenders, and Vouchers work together in perfect harmony to create a balanced ecosystem."
  },
  {
    icon: <HandHeart className="w-6 h-6" />,
    title: "Trust-Based Lending",
    description: "Reputation and community backing replace traditional collateral requirements."
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Risk Management",
    description: "Advanced slashing mechanisms and vouch coverage protect all participants."
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "NFT-Backed Contracts",
    description: "Loan agreements minted as tradable NFTs with complete on-chain transparency."
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Global Inclusion",
    description: "Access to capital for underserved communities regardless of traditional banking access."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Dynamic Vouching",
    description: "Flexible voucher offers with customizable risk parameters and fee structures."
  }
];

export function KinProtocolOverviewSection() {
  return (
    <div className="space-y-12">
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            Revolutionizing DeFi Lending Through Trust
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            KIN Protocol transforms the lending landscape by introducing a revolutionary undercollateralized system 
            where reputation, relationships, and community trust become the new form of collateral. 
            By leveraging on-chain mechanisms and a unique tri-party model, we unlock financial opportunities 
            for millions who have been excluded from traditional and current DeFi lending systems.
          </p>
        </div>
      </AnimatedFadeIn>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {keyPoints.map((point, index) => (
          <AnimatedFadeIn key={index} delay={0.2 + index * 0.1} direction="up">
            <Card className="relative overflow-hidden border-primary/20 hover:border-primary/40 transition-colors h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {point.icon}
                  </div>
                  <CardTitle className="text-lg">{point.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {point.description}
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>

      <AnimatedFadeIn delay={0.8}>
        <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 text-center">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-background/80 rounded-full">
              <Badge variant="secondary" className="mr-2">
                Core Principle
              </Badge>
              <span className="text-sm font-medium">The Vision</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              "In KIN, your reputation is your real collateral."
            </h3>
            <p className="text-lg text-muted-foreground">
              We're building a world where access to capital is determined by trust, community backing, 
              and proven reliability — not by the assets you already own. KIN Protocol redefines 
              undercollateralized lending by removing centralized gatekeepers, empowering borrowers, 
              and creating a fully transparent, market-driven ecosystem.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <Badge variant="outline" className="px-3 py-1">No Native Token</Badge>
              <Badge variant="outline" className="px-3 py-1">Borrower Empowerment</Badge>
              <Badge variant="outline" className="px-3 py-1">On-Chain Trust</Badge>
              <Badge variant="outline" className="px-3 py-1">Tradable NFTs</Badge>
            </div>
          </div>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={1.0}>
        <div className="grid gap-8 lg:grid-cols-2">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Users className="w-4 h-4 text-green-600" />
                </div>
                For the Underserved
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Enable individuals in developing regions to secure funding without traditional collateral, 
                fostering entrepreneurship and local economic growth.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  No banking requirements
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Community-based verification
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                  Micro-enterprise support
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-4 h-4 text-blue-600" />
                </div>
                For DeFi Power Users
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Advanced lending strategies with customizable parameters, secondary market liquidity, 
                and sophisticated risk management tools.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Customizable loan terms
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  NFT tradability
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  Dynamic incentives
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </AnimatedFadeIn>
    </div>
  );
}