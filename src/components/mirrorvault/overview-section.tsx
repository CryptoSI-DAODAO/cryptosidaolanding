"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedStagger, AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { Shield, TrendingUp, Users, Clock, BarChart3, Globe } from "lucide-react";

export function MirrorVaultOverviewSection() {
  const features = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "ERC-4626 Vaults",
      description: "Industry-standard vault architecture where users deposit assets with full control",
      color: "text-blue-500"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Non-custodial Control",
      description: "Users maintain full custody of their funds at all times",
      color: "text-green-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Real-time Mirroring",
      description: "Trades are automatically mirrored on-chain as they happen",
      color: "text-purple-500"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Aegis Reputation",
      description: "On-chain reputation system tracking manager performance and credibility",
      color: "text-orange-500"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Weekly Crystallization",
      description: "Profits are realized weekly with transparent fee distribution",
      color: "text-cyan-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Cross-chain Ready",
      description: "Deployable on Ethereum, Base, Arbitrum, and other EVMs",
      color: "text-indigo-500"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <AnimatedFadeIn key={index} delay={0.1 + index * 0.1} direction="up">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className={`mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>
      
      <AnimatedSection delay={0.7}>
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">The MirrorVault Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              MirrorVault bridges the trust gap in decentralized trading by merging transparency, automation, and reputation. 
              Followers trade with confidence, managers earn on merit, and the protocol grows into the go-to hub for on-chain copy trading.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Non-custodial</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">0</div>
                <div className="text-sm text-muted-foreground">Counterparty Risk</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Transparency</div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Badge className="text-base px-6 py-2 bg-primary/10 text-primary border-primary/20">
                MirrorVault doesn't require trust — it provides proof
              </Badge>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
      
      <AnimatedSection delay={0.9}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-green-500/5 to-emerald-500/5 border-green-500/20">
            <CardHeader>
              <CardTitle className="text-xl text-green-700 dark:text-green-400">For Followers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Access professional trading strategies</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Maintain full custody of funds</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Transparent performance tracking</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Community-driven protection mechanisms</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-500/5 to-cyan-500/5 border-blue-500/20">
            <CardHeader>
              <CardTitle className="text-xl text-blue-700 dark:text-blue-400">For Managers</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Performance-based income</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Build on-chain reputation</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">No direct fund management</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Automated profit sharing</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  );
}