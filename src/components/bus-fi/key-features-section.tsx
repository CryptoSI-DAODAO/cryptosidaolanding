"use client";

import { AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Bus, 
  Users, 
  Video, 
  Star, 
  ArrowRightLeft, 
  TrendingUp,
  Shield,
  Globe,
  Award
} from "lucide-react";

const keyFeatures = [
  {
    icon: <Bus className="w-8 h-8" />,
    title: "Asset Tokenization & Dynamic Dividend Distribution",
    description: "Bus-Fi tokenizes real-world assets (buses), representing ownership or investment through non-fungible tokens (NFTs). This makes investment more accessible and allows for fractional investment in essential transportation infrastructure.",
    details: [
      "Higher dividend payout during initial loan repayment (20-30% of profits)",
      "Standard payout rate after full repayment (10-15% of profits)",
      "Visual and metadata evolution based on performance"
    ],
    color: "text-blue-500",
    bgColor: "bg-blue-50"
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Decentralized Autonomous Organization (DAO)",
    description: "Bus-Fi envisions a DAO-governed investment pool, allowing funders (token holders) to participate in key decisions and project operations.",
    details: [
      "Community voting on major decisions",
      "External bidding for project roles (marketing, legal, technical)",
      "Transparent task assignment and payment automation"
    ],
    color: "text-purple-500",
    bgColor: "bg-purple-50"
  },
  {
    icon: <Video className="w-8 h-8" />,
    title: "Transparent Multimedia-Rich Loan Process",
    description: "Bus financiers seeking capital engage in a comprehensive and transparent pitch process with rich multimedia content.",
    details: [
      "High-quality images and explanatory videos",
      "Detailed route and market analysis",
      "Projected revenues and operational plans"
    ],
    color: "text-green-500",
    bgColor: "bg-green-50"
  },
  {
    icon: <Star className="w-8 h-8" />,
    title: "On-chain Reputation System",
    description: "A core innovation of Bus-Fi is its on-chain reputation system that tracks and publicly records the timely repayment performance of bus financiers.",
    details: [
      "Reputation scores based on repayment consistency",
      "Direct impact on future funding ability",
      "Public transparency for trust building"
    ],
    color: "text-yellow-500",
    bgColor: "bg-yellow-50"
  },
  {
    icon: <ArrowRightLeft className="w-8 h-8" />,
    title: "Secondary NFT Sale Market",
    description: "As bus assets are tokenized, a dynamic secondary market for these Bus-Fi NFTs will inherently exist, providing liquidity for initial investors.",
    details: [
      "Liquidity for initial investors",
      "Fractional ownership trading",
      "Democratized access to investment opportunities"
    ],
    color: "text-orange-500",
    bgColor: "bg-orange-50"
  }
];

const futureFeatures = [
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Evolving NFTs",
    description: "NFTs that visually evolve based on real-world performance and milestones"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Financier Leaderboard",
    description: "Public ranking system showcasing top-performing financiers"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Multiple Language Support",
    description: "Multi-language interface for maximum African market reach"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Financier Underwriters/Bonds",
    description: "Additional security mechanisms through collateral requirements"
  }
];

export function BusFiKeyFeaturesSection() {
  return (
    <div className="space-y-12">
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            Innovative Features Driving Real-World Impact
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            Bus-Fi introduces groundbreaking features that combine the best of DeFi innovation with real-world 
            transportation infrastructure needs. Each feature is designed to maximize impact, ensure sustainability, 
            and create value for all participants in the ecosystem.
          </p>
        </div>
      </AnimatedFadeIn>

      <div className="space-y-8">
        {keyFeatures.map((feature, index) => (
          <AnimatedFadeIn key={index} delay={0.2 + index * 0.1} direction="up">
            <Card className="overflow-hidden border-l-4 border-l-yellow-400 hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-lg ${feature.bgColor} ${feature.color} flex-shrink-0`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-yellow-400 rounded-full flex-shrink-0"></div>
                      <span className="text-sm text-muted-foreground">{detail}</span>
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
            <CardTitle className="text-2xl" style={{ color: "#FFD600" }}>Future Feature Roadmap</CardTitle>
            <CardDescription className="text-lg">
              Exciting innovations planned for future Bus-Fi iterations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {futureFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-white rounded-lg shadow-sm">
                  <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
                    {feature.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center">
              <Badge className="text-base px-6 py-2 bg-yellow-100 text-yellow-800 border-yellow-200">
                Expanded NFT Utility: Financier Network Share
              </Badge>
              <p className="mt-4 text-sm text-muted-foreground max-w-2xl mx-auto">
                Future iterations of Bus-FI NFTs will provide holders with a small, perpetual share of the profits 
                generated by all buses managed by the financier they initially invested with, mitigating "sunset" risk 
                and ensuring long-term value.
              </p>
            </div>
          </CardContent>
        </Card>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={1.0}>
        <div className="text-center space-y-4">
          <h4 className="text-xl font-bold text-foreground">Bus-Fi embodies the spirit of the Hedera Africa Hackathon</h4>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            By building a meaningful solution that aims to mobilize Africa's growing tech talent and change the world 
            through Web3 innovation, Bus-Fi represents the perfect intersection of technology, finance, and social impact.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Badge variant="outline" className="px-4 py-2">Real-World Assets</Badge>
            <Badge variant="outline" className="px-4 py-2">Financial Inclusion</Badge>
            <Badge variant="outline" className="px-4 py-2">Community Trust</Badge>
            <Badge variant="outline" className="px-4 py-2">Sustainable Impact</Badge>
          </div>
        </div>
      </AnimatedFadeIn>
    </div>
  );
}