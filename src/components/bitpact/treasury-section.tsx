"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn, AnimatedStagger } from "./shared/animated-section";
import { 
  PiggyBank, 
  Users, 
  TrendingUp, 
  Shield,
  ArrowRight,
  CheckCircle,
  Settings,
  Wallet
} from "lucide-react";

export function BitpactTreasurySection() {
  const treasuryFunctions = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "Arbiter Onboarding",
      description: "Managing the registration and verification of new arbiters",
      details: "Vetting process and bond requirements",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Community Rating",
      description: "Overseeing the performance rating system for arbiters",
      details: "Quality assurance and dispute resolution metrics",
      color: "bg-green-500/10 text-green-500 border-green-500/20"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Protocol Governance",
      description: "Managing fee structures and protocol parameters",
      details: "Economic incentives and sustainability",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20"
    },
    {
      icon: <Wallet className="w-6 h-6" />,
      title: "Development Funding",
      description: "Allocating resources for protocol improvement and ecosystem growth",
      details: "Feature development and partnerships",
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20"
    }
  ];

  const governanceEvolution = [
    {
      phase: "Phase 1: Development Council",
      description: "Initially controlled by multisig dev council",
      features: [
        "3-of-5 multisig wallet",
        "Core developer team",
        "Rapid decision making",
        "Initial protocol bootstrapping"
      ],
      status: "current",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    },
    {
      phase: "Phase 2: DAO Transition",
      description: "Gradual transition to community governance",
      features: [
        "Token-based voting",
        "Community proposals",
        "Arbiter council elections",
        "Treasury management by DAO"
      ],
      status: "upcoming",
      color: "bg-green-500/10 text-green-500 border-green-500/20"
    }
  ];

  const treasuryAllocation = [
    { category: "Arbiter Incentives", percentage: 40, color: "bg-blue-500" },
    { category: "Development", percentage: 30, color: "bg-purple-500" },
    { category: "Marketing", percentage: 15, color: "bg-orange-500" },
    { category: "Reserve", percentage: 15, color: "bg-green-500" }
  ];

  return (
    <div className="space-y-12">
      {/* Treasury Functions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {treasuryFunctions.map((function_item, index) => (
          <AnimatedFadeIn key={index} delay={0.1 + index * 0.1} direction="up">
            <Card key={index} className={`h-full border-2 ${function_item.color} hover:shadow-lg transition-all duration-300`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${function_item.color.split(' ')[0]} ${function_item.color.split(' ')[1]}`}>
                    {function_item.icon}
                  </div>
                  <CardTitle className="text-lg">{function_item.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="text-base">
                  {function_item.description}
                </CardDescription>
                <div className="text-sm text-muted-foreground italic">
                  {function_item.details}
                </div>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>
      
      {/* Governance Evolution */}
      <AnimatedSection delay={0.3}>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Governance Evolution</CardTitle>
            <CardDescription className="text-lg">
              From centralized control to full decentralization
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {governanceEvolution.map((phase, index) => (
                <Card key={index} className={`border-2 ${phase.color}`}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{phase.phase}</CardTitle>
                      <Badge variant={phase.status === 'current' ? 'default' : 'secondary'}>
                        {phase.status === 'current' ? 'Current' : 'Planned'}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <CardDescription className="text-base">
                      {phase.description}
                    </CardDescription>
                    <ul className="space-y-1">
                      {phase.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
      
      {/* Treasury Allocation */}
      <AnimatedSection delay={0.5}>
        <Card className="border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">Treasury Allocation</CardTitle>
            <CardDescription>
              Strategic distribution of protocol fees for sustainable growth
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="space-y-4">
                {treasuryAllocation.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{item.category}</span>
                      <span className="font-bold">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
                      <div
                        className={`h-full ${item.color} transition-all duration-500`}
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">50%</div>
                  <div className="text-sm text-muted-foreground">Protocol Fees</div>
                  <div className="text-xs text-muted-foreground">To Treasury</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">∞</div>
                  <div className="text-sm text-muted-foreground">Sustainability</div>
                  <div className="text-xs text-muted-foreground">Self-funding</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">0</div>
                  <div className="text-sm text-muted-foreground">External Funding</div>
                  <div className="text-xs text-muted-foreground">Needed</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-sm text-muted-foreground">Transparent</div>
                  <div className="text-xs text-muted-foreground">On-chain</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}