"use client";

import { AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Network, Cpu, Database, Shield, Globe, Users } from "lucide-react";

const specifications = [
  {
    icon: <Network className="w-6 h-6" />,
    title: "Track Alignment",
    description: "Onchain Finance & Real-World Assets (RWA) track",
    details: [
      "Financial Inclusion through decentralized lending/funding",
      "Asset Tokenization by tokenizing real-world assets like buses",
      "Decentralized Financial Systems with DAO-governed investment pools"
    ],
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: <Cpu className="w-6 h-6" />,
    title: "Technology Stack",
    description: "Built on the Hedera network for maximum efficiency",
    details: [
      "Hedera Distributed Ledger Technology",
      "Low-cost, high-speed transactions",
      "Enterprise-grade security and governance"
    ],
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: <Database className="w-6 h-6" />,
    title: "Core Functionality",
    description: "Essential features for decentralized bus funding",
    details: [
      "Decentralized Funding Platform for P2P investment in real-world assets",
      "Asset Tokenization representing ownership through tokens",
      "Reputation System tracking repayments and performance"
    ],
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Integration Needs",
    description: "Off-chain components for real-world operations",
    details: [
      "Connection to actual bus operations for revenue collection",
      "Asset performance tracking systems",
      "Simulated data integration for hackathon demonstration"
    ],
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Governance Model",
    description: "Community-driven decision making",
    details: [
      "DAO-governed investment pools",
      "Token holder voting rights",
      "Performance-based influence on governance"
    ],
    color: "text-cyan-500",
    bgColor: "bg-cyan-50"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Target Market",
    description: "Focus on underserved African communities",
    details: [
      "Underserved African communities",
      "Local bus operators and entrepreneurs",
      "Impact investors seeking RWA opportunities"
    ],
    color: "text-red-500",
    bgColor: "bg-red-50"
  }
];

export function BusFiSpecificationsSection() {
  return (
    <div className="space-y-8">
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            Technical Specifications
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            Bus-Fi is designed with a robust technical architecture that ensures security, scalability, 
            and real-world applicability. Built on the Hedera network, our specifications address the unique 
            challenges of funding transportation infrastructure in emerging markets.
          </p>
        </div>
      </AnimatedFadeIn>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {specifications.map((spec, index) => (
          <AnimatedFadeIn key={index} delay={0.1 + index * 0.1} direction="up">
            <Card className="h-full hover:shadow-lg transition-all duration-300 border-l-4 border-l-yellow-400">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${spec.bgColor} ${spec.color}`}>
                    {spec.icon}
                  </div>
                  <CardTitle className="text-lg">{spec.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-sm leading-relaxed">
                  {spec.description}
                </CardDescription>
                <div className="space-y-2">
                  {spec.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-xs text-muted-foreground">{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>

      <AnimatedFadeIn delay={0.8}>
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl" style={{ color: "#FFD600" }}>Hackathon Focus</CardTitle>
            <CardDescription className="text-lg">
              Strategic priorities for the Hedera Africa Hackathon 2025
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Technical Priorities</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-white">Core Smart Contracts</Badge>
                    <span className="text-sm text-muted-foreground">Tokenization & investment logic</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-white">Reputation Engine</Badge>
                    <span className="text-sm text-muted-foreground">Performance tracking system</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-white">UI/UX Design</Badge>
                    <span className="text-sm text-muted-foreground">Investor & operator portals</span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Demonstration Strategy</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-white">Mock Data</Badge>
                    <span className="text-sm text-muted-foreground">Simulated repayment events</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-white">Visual Demo</Badge>
                    <span className="text-sm text-muted-foreground">End-to-end user journey</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="outline" className="bg-white">Impact Metrics</Badge>
                    <span className="text-sm text-muted-foreground">Social & financial KPIs</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center pt-4">
              <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                The hackathon demonstration will focus on showcasing the mechanism and potential impact, 
                with simulated off-chain data integration to prove the concept's viability.
              </p>
            </div>
          </CardContent>
        </Card>
      </AnimatedFadeIn>
    </div>
  );
}