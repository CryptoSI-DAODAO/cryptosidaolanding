"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { 
  Globe, 
  Rocket, 
  ArrowRight, 
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Network
} from "lucide-react";

export function MirrorVaultChainsSection() {
  const launchPhases = [
    {
      phase: "Phase 1",
      status: "current",
      icon: <Rocket className="w-6 h-6" />,
      title: "Base Network",
      description: "Initial deployment on Base leveraging GMX Multichain capability",
      features: [
        "Low gas fees and fast transactions",
        "Deep liquidity via GMX Multichain",
        "Strong ecosystem support",
        "Seamless connectivity to GMX's existing pools"
      ],
      benefits: [
        "Cost-effective for users",
        "Established liquidity infrastructure",
        "Growing DeFi ecosystem",
        "Ethereum L2 security"
      ],
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      timeline: "Q1 2024"
    },
    {
      phase: "Phase 2",
      status: "upcoming",
      icon: <Globe className="w-6 h-6" />,
      title: "Multi-Chain Expansion",
      description: "Roll out to additional chains where GMX supports Multichain",
      features: [
        "Arbitrum deployment",
        "Avalanche integration",
        "Cross-chain vault operations",
        "Unified Aegis reputation system"
      ],
      benefits: [
        "Access to diverse user bases",
        "Risk diversification across chains",
        "Optimal routing for trades",
        "Increased total addressable market"
      ],
      color: "bg-green-500/10 text-green-500 border-green-500/20",
      timeline: "Q2 2024"
    }
  ];

  const chainAdvantages = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Liquidity Leverage",
      description: "GMX's existing depths extended to Base via Multichain"
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Low Friction",
      description: "Base deployment gives followers cheaper gas costs and faster UX"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Unified Reputation",
      description: "Managers build reputation that spans all deployed chains"
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: "Scalable Expansion",
      description: "Same pattern (vault + adapter) rolls out to new chains as GMX adds them"
    }
  ];

  const technicalIntegration = [
    {
      title: "Vault Logic",
      description: "Deposits, share accounting, profit crystallization, reputation updating",
      location: "On Base contracts"
    },
    {
      title: "Data Sync",
      description: "PnL, positions, and trading data bridged from GMX infrastructure",
      location: "Cross-chain messaging"
    },
    {
      title: "Trading Execution",
      description: "Managers execute trades via GMX's adapter interface",
      location: "Base network"
    },
    {
      title: "Reputation System",
      description: "Unified Aegis scoring across all chains",
      location: "Shared registry"
    }
  ];

  return (
    <div className="space-y-12">
      <AnimatedSection delay={0.1}>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">🌐 Chains & Launch Strategy</CardTitle>
            <CardDescription className="text-lg">
              Strategic deployment on select EVM chains with mature DeFi infrastructure
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto">
              MirrorVault will launch strategically on select EVM chains where DeFi infrastructure is mature 
              and perp liquidity is strong, maximizing reach, liquidity, and operational safety.
            </p>
          </CardContent>
        </Card>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {launchPhases.map((phase, index) => (
          <AnimatedFadeIn key={index} delay={0.2 + index * 0.2} direction="up">
            <Card className={`h-full hover:shadow-lg transition-all duration-300 border-2 ${phase.color}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${phase.color.split(' ')[0]} ${phase.color.split(' ')[1]}`}>
                      {phase.icon}
                    </div>
                    <div>
                      <CardTitle className="text-xl">{phase.title}</CardTitle>
                      <Badge variant="outline" className="mt-1">
                        {phase.timeline}
                      </Badge>
                    </div>
                  </div>
                  <Badge variant={phase.status === 'current' ? 'default' : 'secondary'}>
                    {phase.status === 'current' ? 'Current' : 'Upcoming'}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base">
                  {phase.description}
                </CardDescription>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {phase.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm text-foreground">Benefits:</h4>
                  <ul className="space-y-1">
                    {phase.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>

      <AnimatedSection delay={0.6}>
        <Card className="border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">Why This Approach Works</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {chainAdvantages.map((advantage, index) => (
                <AnimatedFadeIn key={index} delay={0.1 + index * 0.1} direction="up">
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        {advantage.icon}
                      </div>
                      <CardTitle className="text-lg">{advantage.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {advantage.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedFadeIn>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      <AnimatedSection delay={0.8}>
        <Card className="bg-gradient-to-br from-muted/50 to-background">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">Technical Integration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {technicalIntegration.map((integration, index) => (
                <AnimatedFadeIn key={index} delay={0.1 + index * 0.1} direction="up">
                  <Card className="p-6">
                    <div className="space-y-3">
                      <h4 className="font-semibold text-lg text-primary">{integration.title}</h4>
                      <p className="text-sm text-muted-foreground">{integration.description}</p>
                      <Badge variant="outline" className="w-fit">
                        {integration.location}
                      </Badge>
                    </div>
                  </Card>
                </AnimatedFadeIn>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-background/50 rounded-lg">
              <h4 className="text-lg font-semibold text-primary mb-4">Cross-Chain Architecture</h4>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Globe className="w-6 h-6 text-blue-500" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold">Shared Registry</h5>
                    <p className="text-sm text-muted-foreground">
                      Unified manager and vault registry across all chains
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold">Cross-Chain Reputation</h5>
                    <p className="text-sm text-muted-foreground">
                      Aegis Score aggregates performance across all deployed chains
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-purple-500" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold">Asset Bridging</h5>
                    <p className="text-sm text-muted-foreground">
                      Seamless asset movement between chains for optimal execution
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-500 mb-2">Base</div>
                <div className="text-sm text-muted-foreground">Launch Network</div>
                <Badge variant="secondary" className="mt-2">Q1 2024</Badge>
              </Card>
              
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-green-500 mb-2">Arbitrum</div>
                <div className="text-sm text-muted-foreground">Expansion Target</div>
                <Badge variant="secondary" className="mt-2">Q2 2024</Badge>
              </Card>
              
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-purple-500 mb-2">Avalanche</div>
                <div className="text-sm text-muted-foreground">Future Expansion</div>
                <Badge variant="secondary" className="mt-2">Q3 2024</Badge>
              </Card>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}