"use client";

import { AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Shield, Users, DollarSign, HandHeart, AlertCircle } from "lucide-react";

const ecosystemRoles = [
  {
    icon: <DollarSign className="w-8 h-8" />,
    title: "💰 Lenders",
    color: "green",
    description: "Fund loans directly and earn fixed APR returns while choosing risk levels based on voucher backing.",
    features: [
      "Direct loan funding",
      "Fixed APR returns",
      "Risk-based selection",
      "NFT tradability",
      "Principal protection options"
    ],
    benefits: [
      "Transparent risk assessment",
      "Secondary market liquidity",
      "Flexible risk profiles",
      "Passive income generation"
    ]
  },
  {
    icon: <HandHeart className="w-8 h-8" />,
    title: "🔗 Vouchers",
    color: "blue",
    description: "Stake tokens to back borrowers, earning fees and reputation endowment rewards while assuming calculated risk.",
    features: [
      "Token staking (CRDD, LISA, ETH, USDS)",
      "Customizable risk parameters",
      "Upfront fee collection",
      "Reputation endowment building",
      "Risk-based rewards"
    ],
    benefits: [
      "Multiple income streams",
      "Reputation accumulation",
      "Community influence",
      "Risk customization"
    ]
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "👤 Borrowers",
    color: "purple",
    description: "Access capital without full collateral by attracting vouchers and offering competitive loan terms.",
    features: [
      "Set custom loan terms",
      "Attract voucher backing",
      "Build reputation over time",
      "No collateral requirements",
      "Flexible repayment schedules"
    ],
    benefits: [
      "Capital access without collateral",
      "Customizable loan terms",
      "Reputation building",
      "Community support network"
    ]
  }
];

export function KinProtocolEcosystemSection() {
  return (
    <div className="space-y-12">
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            The Tri-Party Ecosystem
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            KIN Protocol's revolutionary tri-party model creates a balanced ecosystem where each participant 
            plays a crucial role. By aligning incentives across Borrowers, Lenders, and Vouchers, we create 
            a self-sustaining system that benefits everyone involved.
          </p>
        </div>
      </AnimatedFadeIn>

      <div className="grid gap-8 lg:grid-cols-3">
        {ecosystemRoles.map((role, index) => (
          <AnimatedFadeIn key={index} delay={0.2 + index * 0.1}>
            <Card className={`relative overflow-hidden border-${role.color}-500/20 hover:border-${role.color}-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-${role.color}-500/10 h-full`}>
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-${role.color}-500 to-${role.color}-600`}></div>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-3 bg-${role.color}-500/10 rounded-lg text-${role.color}-600`}>
                    {role.icon}
                  </div>
                  <CardTitle className="text-xl">{role.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <CardDescription className="text-base leading-relaxed">
                  {role.description}
                </CardDescription>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Key Features
                  </h4>
                  <ul className="space-y-2">
                    {role.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className={`w-1.5 h-1.5 bg-${role.color}-500 rounded-full`}></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    Benefits
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {role.benefits.map((benefit, idx) => (
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

      <AnimatedFadeIn delay={0.6}>
        <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 text-center border border-primary/10">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-background/80 rounded-full">
              <Badge variant="outline" className="mr-2 border-primary/20 text-primary">
                Ecosystem Balance
              </Badge>
              <span className="text-sm font-medium">Perfect Harmony</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              How the Three Parties Work Together
            </h3>
            <p className="text-lg text-muted-foreground">
              The magic of KIN Protocol lies in how these three roles create a virtuous cycle. 
              Borrowers get access to capital, Lenders earn returns with protected principal, 
              and Vouchers build reputation while earning fees. Everyone wins.
            </p>
            
            <div className="grid gap-6 md:grid-cols-3 pt-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
                  <DollarSign className="w-8 h-8 text-green-600" />
                </div>
                <h4 className="font-semibold">Lenders Provide Capital</h4>
                <p className="text-sm text-muted-foreground">
                  Fund loans with confidence through voucher backing and transparent risk assessment
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center">
                  <HandHeart className="w-8 h-8 text-blue-600" />
                </div>
                <h4 className="font-semibold">Vouchers Provide Trust</h4>
                <p className="text-sm text-muted-foreground">
                  Stake tokens to back borrowers, earning fees while building reputation
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-16 h-16 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-purple-600" />
                </div>
                <h4 className="font-semibold">Borrowers Drive Growth</h4>
                <p className="text-sm text-muted-foreground">
                  Access capital for growth and build reputation through successful repayments
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={0.8}>
        <Card className="border-border/50 bg-muted/30">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="w-5 h-5 text-primary" />
              Why This Model Works
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Risk Distribution</h4>
                <p className="text-sm text-muted-foreground">
                  Risk is distributed across multiple vouchers rather than concentrated on a single party, 
                  making the system more resilient and sustainable.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Incentive Alignment</h4>
                <p className="text-sm text-muted-foreground">
                  All participants have aligned incentives - borrowers want to repay, lenders want returns, 
                  and vouchers want successful outcomes to grow their reputation.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Community Governance</h4>
                <p className="text-sm text-muted-foreground">
                  The ecosystem self-regulates through reputation mechanisms and community-driven decision making, 
                  reducing the need for centralized oversight.
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="font-semibold text-foreground">Scalable Trust</h4>
                <p className="text-sm text-muted-foreground">
                  As more participants join and build reputation, the system becomes more robust and can 
                  handle larger volumes of undercollateralized loans safely.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedFadeIn>
    </div>
  );
}