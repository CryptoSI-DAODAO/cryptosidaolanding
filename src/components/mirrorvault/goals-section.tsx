"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { AnimatedSection, AnimatedStagger, AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { Target, Users, Shield, Zap } from "lucide-react";

export function MirrorVaultGoalsSection() {
  const goals = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Empower Followers",
      description: "Give users safe access to professional trading strategies without giving up custody of their funds.",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      metrics: [
        { label: "Risk Reduction", value: "100%" },
        { label: "Custody", value: "Self" }
      ]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Reward Proven Managers",
      description: "Provide on-chain performance-based income through transparent profit-sharing mechanisms.",
      color: "bg-green-500/10 text-green-500 border-green-500/20",
      metrics: [
        { label: "Performance Fees", value: "20%" },
        { label: "Transparency", value: "Full" }
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Establish Trust",
      description: "Build the first reputation-driven layer for decentralized trading performance through Aegis Score.",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      metrics: [
        { label: "Reputation", value: "On-chain" },
        { label: "Verification", value: "Cryptographic" }
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Simplify UX",
      description: "Deliver a sleek, DeFi-native dApp that allows 1-click following and instant portfolio mirroring.",
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      metrics: [
        { label: "Entry Barrier", value: "Minimal" },
        { label: "Following", value: "1-Click" }
      ]
    }
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {goals.map((goal, index) => (
          <AnimatedFadeIn key={index} delay={0.1 + index * 0.15} direction="up">
            <Card className={`h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 ${goal.color}`}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg ${goal.color.split(' ')[0]} ${goal.color.split(' ')[1]}`}>
                    {goal.icon}
                  </div>
                  <CardTitle className="text-xl">{goal.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {goal.description}
                </CardDescription>
                
                <div className="grid grid-cols-2 gap-4 pt-2">
                  {goal.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center">
                      <div className="text-2xl font-bold text-primary mb-1">{metric.value}</div>
                      <div className="text-xs text-muted-foreground">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>
      
      <AnimatedSection delay={0.7}>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">The Impact Vision</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <div className="max-w-4xl mx-auto space-y-6">
              <p className="text-lg text-muted-foreground">
                MirrorVault transforms copy trading from a black-box service into a transparent, 
                community-governed ecosystem where reputation is earned, not claimed, and where 
                both followers and managers benefit from aligned incentives.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-blue-500/10 rounded-full flex items-center justify-center mx-auto">
                    <Users className="w-8 h-8 text-blue-500" />
                  </div>
                  <h3 className="font-semibold">Democratized Access</h3>
                  <p className="text-sm text-muted-foreground">
                    Professional trading strategies accessible to everyone, regardless of capital size
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto">
                    <Shield className="w-8 h-8 text-green-500" />
                  </div>
                  <h3 className="font-semibold">Trustless System</h3>
                  <p className="text-sm text-muted-foreground">
                    No need to trust managers - verify their performance through on-chain data
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="w-16 h-16 bg-purple-500/10 rounded-full flex items-center justify-center mx-auto">
                    <Target className="w-8 h-8 text-purple-500" />
                  </div>
                  <h3 className="font-semibold">Meritocratic Rewards</h3>
                  <p className="text-sm text-muted-foreground">
                    Managers earn based on verifiable performance, not promises
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-background/50 rounded-lg">
                <h4 className="text-lg font-semibold text-primary mb-4">Core Principles</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Transparency in all operations</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Non-custodial by design</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Community-governed reputation</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0"></div>
                    <span>Automated profit distribution</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}