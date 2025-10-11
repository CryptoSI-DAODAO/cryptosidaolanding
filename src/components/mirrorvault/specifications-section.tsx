"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedStagger, AnimatedFadeIn } from "../bitpact/shared/animated-section";
import {
  Archive,
  TrendingUp,
  DollarSign,
  Shield,
  AlertTriangle,
  Globe
} from "lucide-react";

export function MirrorVaultSpecificationsSection() {
  const specifications = [
    {
      icon: <Archive className="w-6 h-6" />,
      title: "Vault Architecture",
      description: "ERC-4626 vaults where users deposit assets (ETH, USDC) and managers trade through approved adapters.",
      details: "Industry-standard vault interface with automatic share accounting and deposit/withdraw tracking",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Trading Logic",
      description: "Managers can long/short ETH–USD pairs using up to 5x leverage, only via whitelisted DEX or Perp adapters.",
      details: "Controlled exposure with predefined trading pairs and leverage limits for risk management",
      color: "bg-green-500/10 text-green-500 border-green-500/20"
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Profit Sharing",
      description: "Performance fees (e.g., 20%) crystallize every 7 days if the vault's value exceeds its high-water mark.",
      details: "High-water mark ensures managers only get paid for new profits, not recovered losses",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reputation Layer",
      description: "A smart contract maintains on-chain records of manager performance, risk, and credibility.",
      details: "Comprehensive scoring system that tracks win rate, risk-adjusted returns, and consistency",
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Risk Controls",
      description: "Managers can trade but not withdraw follower funds; built-in circuit breakers and slippage guards protect users.",
      details: "Multiple layers of protection including position limits, stop-loss mechanisms, and emergency pauses",
      color: "bg-red-500/10 text-red-500 border-red-500/20"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cross-Chain Ready",
      description: "Deployable on Ethereum, Base, Arbitrum, and other EVMs with shared registry and scoring logic.",
      details: "Unified reputation system across all supported chains with seamless asset bridging",
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20"
    }
  ];

  const technicalHighlights = [
    { label: "Vault Standard", value: "ERC-4626", icon: <Archive className="w-4 h-4" /> },
    { label: "Max Leverage", value: "5x", icon: <TrendingUp className="w-4 h-4" /> },
    { label: "Fee Schedule", value: "Weekly", icon: <DollarSign className="w-4 h-4" /> },
    { label: "Risk Management", value: "Multi-layer", icon: <Shield className="w-4 h-4" /> }
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specifications.map((spec, index) => (
          <AnimatedFadeIn key={index} delay={0.1 + index * 0.1} direction="up">
            <Card className={`h-full hover:shadow-lg transition-all duration-300 border-2 ${spec.color}`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${spec.color.split(' ')[0]} ${spec.color.split(' ')[1]}`}>
                    {spec.icon}
                  </div>
                  <CardTitle className="text-lg">{spec.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="text-base">
                  {spec.description}
                </CardDescription>
                <div className="text-sm text-muted-foreground italic">
                  {spec.details}
                </div>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>
      
      <AnimatedSection delay={0.7}>
        <Card className="bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Technical Architecture</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {technicalHighlights.map((highlight, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    {highlight.icon}
                    <Badge variant="secondary" className="text-xs">
                      {highlight.label}
                    </Badge>
                  </div>
                  <div className="text-sm font-medium">{highlight.value}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-background/50 rounded-lg">
              <h4 className="text-lg font-semibold text-primary mb-4">Key Technical Features</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Gas-optimized vault operations</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Real-time price oracles</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Automated fee crystallization</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Slippage protection mechanisms</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Emergency pause functionality</span>
                </div>
                <div className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                  <span>Cross-chain message passing</span>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-4">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-blue-500">ETH</div>
                  <div className="text-sm text-muted-foreground">Primary Asset</div>
                  <div className="text-xs text-muted-foreground">Native trading pair</div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-green-500">USDC</div>
                  <div className="text-sm text-muted-foreground">Stable Asset</div>
                  <div className="text-xs text-muted-foreground">Stable trading pair</div>
                </div>
              </Card>
              
              <Card className="p-4">
                <div className="text-center space-y-2">
                  <div className="text-2xl font-bold text-purple-500">5x</div>
                  <div className="text-sm text-muted-foreground">Max Leverage</div>
                  <div className="text-xs text-muted-foreground">Controlled exposure</div>
                </div>
              </Card>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}