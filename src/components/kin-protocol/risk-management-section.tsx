"use client";

import { AnimatedFadeIn, AnimatedStagger } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  TrendingDown,
  Users,
  DollarSign,
  Lock,
  Activity
} from "lucide-react";

const riskMechanisms = [
  {
    icon: <TrendingDown className="w-6 h-6" />,
    title: "Incremental Voucher Slashing",
    description: "Missed payments trigger gradual slashing rather than total loss, giving borrowers recovery time.",
    details: [
      "Gradual penalty progression",
      "Recovery opportunities",
      "Proportional risk distribution",
      "Time-based resolution"
    ],
    severity: "medium",
    impact: "Balanced protection for all parties"
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Full Principal Protection",
    description: "If vouchers fully cover the loan amount through max slashing, the lender's principal is guaranteed.",
    details: [
      "Risk-free lending options",
      "Full coverage requirements",
      "Conservative investment choice",
      "Predictable returns"
    ],
    severity: "low",
    impact: "Attracts risk-averse capital"
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Capped Vouch Coverage",
    description: "Borrowers can't over-insure their loans—vouch backing is capped to the loan principal.",
    details: [
      "Prevents over-insurance",
      "Market-based risk pricing",
      "Efficient capital allocation",
      "Systemic risk reduction"
    ],
    severity: "low",
    impact: "Maintains market efficiency"
  }
];

const riskLevels = [
  {
    level: "Conservative",
    description: "Full principal protection with established voucher backing",
    color: "green",
    apr: "4-6%",
    risk: "Minimal",
    suitable: "Risk-averse lenders, institutional capital"
  },
  {
    level: "Balanced",
    description: "Partial coverage with reputable vouchers and moderate slashing",
    color: "blue", 
    apr: "8-12%",
    risk: "Moderate",
    suitable: "Most lenders, balanced portfolios"
  },
  {
    level: "Opportunistic",
    description: "Higher risk with potential for greater returns",
    color: "orange",
    apr: "15-25%",
    risk: "Higher",
    suitable: "Experienced DeFi users, high-risk tolerance"
  }
];

export function KinProtocolRiskManagementSection() {
  return (
    <div className="space-y-12">
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            Comprehensive Risk Management
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            KIN Protocol implements sophisticated risk mitigation strategies that protect all participants 
            while maintaining the flexibility needed for undercollateralized lending. Our multi-layered approach 
            ensures that risks are properly distributed, managed, and priced.
          </p>
        </div>
      </AnimatedFadeIn>

      <div className="grid gap-8 lg:grid-cols-3">
        {riskMechanisms.map((mechanism, index) => (
          <AnimatedFadeIn key={index} delay={0.2 + index * 0.1} direction="up">
            <Card className={`relative overflow-hidden border-${mechanism.severity === 'low' ? 'green' : mechanism.severity === 'medium' ? 'yellow' : 'red'}-500/20 hover:border-${mechanism.severity === 'low' ? 'green' : mechanism.severity === 'medium' ? 'yellow' : 'red'}-500/40 transition-all duration-300 h-full`}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className={`p-2 bg-${mechanism.severity === 'low' ? 'green' : mechanism.severity === 'medium' ? 'yellow' : 'red'}-500/10 rounded-lg text-${mechanism.severity === 'low' ? 'green' : mechanism.severity === 'medium' ? 'yellow' : 'red'}-600`}>
                    {mechanism.icon}
                  </div>
                  <CardTitle className="text-lg">{mechanism.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {mechanism.description}
                </CardDescription>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">Key Features</h4>
                  <ul className="space-y-1">
                    {mechanism.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-2 border-t border-border/50">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="text-xs">
                      Impact: {mechanism.impact}
                    </Badge>
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
                Risk Tiers
              </Badge>
              <span className="text-sm font-medium">Choose Your Risk Level</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              Risk-Adjusted Returns
            </h3>
            <p className="text-lg text-muted-foreground">
              KIN Protocol offers multiple risk tiers to suit different investor preferences. 
              From conservative, fully-protected loans to higher-yield opportunities, 
              there's a risk level for every type of lender.
            </p>
            
            <div className="grid gap-6 md:grid-cols-3 pt-6">
              {riskLevels.map((level, index) => (
                <div key={index} className="text-center space-y-4 p-6 bg-background/60 rounded-xl border border-border/50">
                  <div className={`w-16 h-16 mx-auto bg-${level.color}-500/10 rounded-full flex items-center justify-center`}>
                    <Shield className={`w-8 h-8 text-${level.color}-600`} />
                  </div>
                  <h4 className="font-bold text-lg">{level.level}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {level.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">APR</span>
                      <span className="font-semibold">{level.apr}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Risk</span>
                      <Badge variant="secondary" className="text-xs">{level.risk}</Badge>
                    </div>
                  </div>
                  <div className="text-xs text-muted-foreground pt-2 border-t border-border/50">
                    {level.suitable}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={0.8}>
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-primary" />
                Slashing Mechanics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">First Missed Payment</span>
                    <span className="text-sm text-muted-foreground">10% slash</span>
                  </div>
                  <Progress value={10} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Second Missed Payment</span>
                    <span className="text-sm text-muted-foreground">25% total</span>
                  </div>
                  <Progress value={25} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Third Missed Payment</span>
                    <span className="text-sm text-muted-foreground">50% total</span>
                  </div>
                  <Progress value={50} className="h-2" />
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Full Default</span>
                    <span className="text-sm text-muted-foreground">Max slash amount</span>
                  </div>
                  <Progress value={100} className="h-2" />
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Slashed funds are sent directly to lenders proportionally to their loan exposure.
              </p>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-primary" />
                Risk Mitigation Features
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  {
                    title: "Reputation-Based Filtering",
                    description: "Lenders can filter loans by KRS scores and voucher quality"
                  },
                  {
                    title: "Diversified Vouch Pools",
                    description: "Multiple vouchers spread risk across the ecosystem"
                  },
                  {
                    title: "Transparent Metrics",
                    description: "All risk parameters are visible before funding"
                  },
                  {
                    title: "Emergency Controls",
                    description: "Protocol-level safeguards against systemic risks"
                  }
                ].map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-sm">{feature.title}</h4>
                      <p className="text-xs text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={1.0}>
        <Card className="border-primary/20 bg-muted/30">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Participant Protection
            </CardTitle>
            <CardDescription className="text-base">
              How each party is protected in the KIN ecosystem
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3">
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-green-500/10 rounded-full flex items-center justify-center">
                  <DollarSign className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold">Lender Protection</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Voucher backing</li>
                  <li>• Slashing recovery</li>
                  <li>• Risk transparency</li>
                  <li>• NFT liquidity</li>
                </ul>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold">Voucher Protection</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Risk caps</li>
                  <li>• Gradual slashing</li>
                  <li>• Upfront fees</li>
                  <li>• Diversification</li>
                </ul>
              </div>
              
              <div className="text-center space-y-3">
                <div className="w-12 h-12 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold">Borrower Protection</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• No collateral loss</li>
                  <li>• Recovery periods</li>
                  <li>• Fair terms</li>
                  <li>• Privacy options</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedFadeIn>
    </div>
  );
}