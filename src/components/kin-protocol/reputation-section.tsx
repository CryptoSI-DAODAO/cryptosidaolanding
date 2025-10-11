"use client";

import { AnimatedFadeIn, AnimatedStagger } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Star, 
  Shield, 
  Users, 
  CheckCircle, 
  Award,
  TrendingUp,
  Database,
  UserCheck,
  Globe
} from "lucide-react";

const integrations = [
  {
    icon: <Database className="w-6 h-6" />,
    title: "🧬 Galxe",
    description: "Verifies web3 credentials using SBTs and showcases borrower participation in key ecosystems.",
    features: [
      "Web3 credential verification",
      "Ecosystem participation tracking",
      "Optimism & Arbitrum integration",
      "Soul Bound Tokens (SBTs)"
    ],
    benefits: [
      "On-chain activity proof",
      "Ecosystem reputation",
      "Cross-platform recognition"
    ]
  },
  {
    icon: <UserCheck className="w-6 h-6" />,
    title: "🛡️ Civic",
    description: "Optional KYC verification for risk-averse lenders with anti-fraud tools.",
    features: [
      "Optional identity verification",
      "Anti-fraud CAPTCHA",
      "Liveness checks",
      "Privacy-preserving verification"
    ],
    benefits: [
      "Enhanced trust signals",
      "Fraud prevention",
      "Risk assessment improvement"
    ]
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "🔍 Ontology",
    description: "ONT ID supports decentralized identity and OScore provides on-chain credit scoring.",
    features: [
      "ONT ID decentralized identity",
      "OScore credit scoring",
      "On-chain credit history",
      "Cross-chain reputation"
    ],
    benefits: [
      "Comprehensive credit profile",
      "Decentralized identity",
      "Credit score portability"
    ]
  }
];

const krsLevels = [
  {
    grade: "A",
    description: "Excellent reputation with proven track record",
    color: "green",
    requirements: "95+ score, 10+ successful loans, <5% late payments",
    benefits: ["Best loan terms", "Lower voucher fees", "Priority access"]
  },
  {
    grade: "B", 
    description: "Good reputation with solid history",
    color: "blue",
    requirements: "80-94 score, 5+ successful loans, <15% late payments",
    benefits: ["Competitive terms", "Standard fees", "Good access"]
  },
  {
    grade: "C",
    description: "Fair reputation building history",
    color: "yellow",
    requirements: "65-79 score, 2+ successful loans, <25% late payments",
    benefits: ["Standard terms", "Higher fees", "Limited access"]
  },
  {
    grade: "D",
    description: "Poor reputation needing improvement",
    color: "orange",
    requirements: "50-64 score, limited history, high late payments",
    benefits: ["Restricted terms", "Highest fees", "Limited access"]
  },
  {
    grade: "F",
    description: "Very poor reputation or new user",
    color: "red",
    requirements: "<50 score or no history",
    benefits: ["Very restricted", "Maximum fees", "Minimal access"]
  }
];

export function KinProtocolReputationSection() {
  return (
    <div className="space-y-12">
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            KIN Reputation Score (KRS) Framework
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            The KIN Reputation Score is a comprehensive on-chain credit scoring system that aggregates 
            third-party credentials, on-chain history, and loan repayment data. This dynamic score adjusts 
            with each loan cycle, creating an evolving trust metric that serves as the foundation for 
            undercollateralized lending in the KIN ecosystem.
          </p>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={0.2}>
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center border border-primary/10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-background/80 rounded-full">
              <Badge variant="outline" className="mr-2 border-primary/20 text-primary">
                Core Principle
              </Badge>
              <span className="text-sm font-medium">Reputation is Collateral</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              How KRS Works
            </h3>
            <p className="text-lg text-muted-foreground">
              KRS calculates scores using multiple weighted factors that decay over time, allowing users 
              to recover from past issues while rewarding consistent positive behavior. The system is 
              transparent, auditable, and designed to be fair to all participants.
            </p>
            
            <div className="grid gap-6 md:grid-cols-3 pt-6">
              {[
                {
                  title: "Payment History",
                  weight: "40%",
                  description: "On-time payments, consistency, recovery from defaults"
                },
                {
                  title: "Loan Value",
                  weight: "25%", 
                  description: "Total value borrowed and successfully repaid"
                },
                {
                  title: "Third-Party Data",
                  weight: "20%",
                  description: "Galxe, Civic, Ontology integrations"
                },
                {
                  title: "Vouching Activity",
                  weight: "10%",
                  description: "Successful voucher backing and reputation"
                },
                {
                  title: "Ecosystem Participation",
                  weight: "5%",
                  description: "Protocol governance and community involvement"
                }
              ].map((factor, index) => (
                <div key={index} className="text-center space-y-2 p-4 bg-background/60 rounded-lg border border-border/50">
                  <div className="text-2xl font-bold text-primary">{factor.weight}</div>
                  <h4 className="font-semibold">{factor.title}</h4>
                  <p className="text-xs text-muted-foreground">{factor.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedFadeIn>

      <div className="grid gap-8 lg:grid-cols-3">
        {integrations.map((integration, index) => (
          <AnimatedFadeIn key={index} delay={0.4 + index * 0.1} direction="up">
            <Card className="relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full">
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {integration.icon}
                  </div>
                  <CardTitle className="text-lg">{integration.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {integration.description}
                </CardDescription>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">Key Features</h4>
                  <ul className="space-y-1">
                    {integration.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Benefits</h4>
                  <div className="flex flex-wrap gap-1">
                    {integration.benefits.map((benefit, idx) => (
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
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-foreground">KRS Grade Levels</h3>
            <p className="text-muted-foreground">From F to A, with A being the best reputation score</p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-5">
            {krsLevels.map((level, index) => (
              <Card key={index} className={`relative overflow-hidden border-${level.color}-500/20 hover:border-${level.color}-500/40 transition-all duration-300`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-${level.color}-500`}></div>
                <CardHeader className="pb-3 text-center">
                  <div className={`w-12 h-12 mx-auto bg-${level.color}-500/10 rounded-full flex items-center justify-center`}>
                    <span className={`text-2xl font-bold text-${level.color}-600`}>{level.grade}</span>
                  </div>
                  <CardTitle className="text-lg">Grade {level.grade}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground text-center">
                    {level.description}
                  </p>
                  <div className="text-xs text-muted-foreground space-y-1">
                    <p><strong>Requirements:</strong></p>
                    <p>{level.requirements}</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-xs font-semibold">Benefits:</p>
                    <ul className="text-xs text-muted-foreground space-y-0.5">
                      {level.benefits.map((benefit, idx) => (
                        <li key={idx}>• {benefit}</li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={1.0}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Score Recovery Mechanism
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                KRS includes a time-based decay system that allows users to recover from past issues:
              </p>
              <div className="space-y-3">
                {[
                  {
                    title: "Positive Behavior Impact",
                    description: "Recent positive actions have higher weight than historical ones",
                    progress: 100
                  },
                  {
                    title: "Negative Impact Decay",
                    description: "Past defaults and late payments lose impact over time",
                    progress: 75
                  },
                  {
                    title: "Recovery Acceleration",
                    description: "Consistent good behavior accelerates score recovery",
                    progress: 60
                  }
                ].map((mechanism, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{mechanism.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{mechanism.description}</p>
                    <Progress value={mechanism.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                Reputation Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  {
                    title: "Better Loan Terms",
                    description: "Higher KRS scores qualify for lower APRs and better conditions",
                    icon: <Star className="w-4 h-4 text-yellow-500" />
                  },
                  {
                    title: "Lower Vouch Fees",
                    description: "Vouchers charge lower fees to high-reputation borrowers",
                    icon: <TrendingUp className="w-4 h-4 text-green-500" />
                  },
                  {
                    title: "Increased Access",
                    description: "Higher scores unlock larger loan amounts and more opportunities",
                    icon: <Shield className="w-4 h-4 text-blue-500" />
                  },
                  {
                    title: "Community Trust",
                    description: "Build social capital that extends beyond financial benefits",
                    icon: <Users className="w-4 h-4 text-purple-500" />
                  }
                ].map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-0.5">{benefit.icon}</div>
                    <div>
                      <h4 className="font-medium text-sm">{benefit.title}</h4>
                      <p className="text-xs text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedFadeIn>
    </div>
  );
}