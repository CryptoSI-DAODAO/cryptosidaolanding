"use client";

import { AnimatedFadeIn, AnimatedStagger } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Award, 
  Shield, 
  TrendingUp, 
  Infinity, 
  DollarSign,
  CheckCircle,
  ArrowUpRight,
  ArrowDownRight,
  PiggyBank,
  Heart
} from "lucide-react";

const endowmentTypes = [
  {
    type: "Vouch Collateral",
    subtitle: "Loan-Specific Bond",
    icon: <Shield className="w-6 h-6" />,
    description: "Vouchers stake tokens directly backing a borrower's specific loan, serving as a financial backstop for the loan's duration.",
    characteristics: [
      "Temporary backing for individual loans",
      "Risk exposure limited to loan duration",
      "Max Slash Amount defines risk ceiling",
      "Upfront fees received immediately",
      "Unslashed tokens returned on successful repayment"
    ],
    benefits: [
      "Direct loan participation",
      "Immediate fee income",
      "Clear risk parameters",
      "Short-term commitment"
    ],
    duration: "Loan duration (typically 1-12 months)"
  },
  {
    type: "Reputation Endowment",
    subtitle: "Eternal Bond",
    icon: <Infinity className="w-6 h-6" />,
    description: "Permanent capital that generates sustainable rewards forever, representing a voucher's established reputation in the ecosystem.",
    characteristics: [
      "Permanently locked principal",
      "Perpetual reward generation",
      "Health score tracking (51-100 range)",
      "Compoundable or withdrawable rewards",
      "Represents long-term trustworthiness"
    ],
    benefits: [
      "Passive income forever",
      "Reputation representation",
      "Capital efficiency through 50% utilization",
      "Growing influence in ecosystem"
    ],
    duration: "Perpetual"
  }
];

const synergisticUsage = [
  {
    title: "50% Utilization Rule",
    description: "Vouchers can use up to 50% of their Reputation Endowment as Vouch Collateral for new loans",
    icon: <TrendingUp className="w-5 h-5" />,
    example: "10 ETH endowment can back 5 ETH in loans without new capital"
  },
  {
    title: "Capital Efficiency",
    description: "Existing reputation becomes productive capital, reducing the need for new funding",
    icon: <DollarSign className="w-5 h-5" />,
    example: "Monetize long-term trustworthiness immediately"
  },
  {
    title: "Risk Management",
    description: "Strategic risk management for vouchers while boosting overall liquidity",
    icon: <Shield className="w-5 h-5" />,
    example: "Balance between earning and preserving reputation capital"
  },
  {
    title: "Ecosystem Growth",
    description: "Reinforces voucher standing while increasing available loan backing",
    icon: <Heart className="w-5 h-5" />,
    example: "Creates virtuous cycle of trust and capital availability"
  }
];

const healthScoreLevels = [
  {
    range: "91-100",
    status: "Excellent",
    description: "Optimal health with significant buffer above minimum",
    color: "green",
    utilization: "Can safely utilize 50% for loans"
  },
  {
    range: "76-90",
    status: "Good", 
    description: "Healthy endowment with comfortable margin",
    color: "blue",
    utilization: "Recommended 40% utilization"
  },
  {
    range: "61-75",
    status: "Moderate",
    description: "Adequate health, monitor closely",
    color: "yellow",
    utilization: "Conservative 30% utilization"
  },
  {
    range: "51-60",
    status: "Minimum",
    description: "At minimum threshold, add more capital",
    color: "orange",
    utilization: "Very limited 20% utilization"
  }
];

export function KinProtocolReputationEndowmentSection() {
  return (
    <div className="space-y-12">
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            Reputation Endowment System
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            The Reputation Endowment is KIN Protocol's revolutionary dual-system approach to reputation capital. 
            It combines temporary loan-specific backing with permanent reputation representation, 
            creating a sustainable ecosystem where trust becomes a productive, self-reinforcing asset.
          </p>
        </div>
      </AnimatedFadeIn>

      <div className="grid gap-8 lg:grid-cols-2">
        {endowmentTypes.map((endowment, index) => (
          <AnimatedFadeIn key={index} delay={0.2 + index * 0.1} direction="up">
            <Card className={`relative overflow-hidden border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 h-full`}>
              <CardHeader className="pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg text-primary">
                    {endowment.icon}
                  </div>
                  <div>
                    <CardTitle className="text-lg">{endowment.type}</CardTitle>
                    <CardDescription className="text-sm font-medium text-primary">
                      {endowment.subtitle}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-base leading-relaxed">
                  {endowment.description}
                </CardDescription>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground text-sm">Key Characteristics</h4>
                  <ul className="space-y-1">
                    {endowment.characteristics.map((characteristic, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-3 h-3 text-green-500" />
                        {characteristic}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-foreground text-sm">Benefits</h4>
                  <div className="flex flex-wrap gap-1">
                    {endowment.benefits.map((benefit, idx) => (
                      <Badge key={idx} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-border/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">Duration</span>
                    <Badge variant="outline" className="text-xs">
                      {endowment.duration}
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
                Synergy
              </Badge>
              <span className="text-sm font-medium">Dual System Integration</span>
            </div>
            <h3 className="text-2xl font-bold text-foreground">
              How Both Systems Work Together
            </h3>
            <p className="text-lg text-muted-foreground">
              The genius of the Reputation Endowment system lies in how these two mechanisms 
              complement each other, creating a virtuous cycle where reputation becomes increasingly 
              valuable and productive over time.
            </p>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 pt-6">
              {synergisticUsage.map((usage, index) => (
                <div key={index} className="text-center space-y-3 p-4 bg-background/60 rounded-lg border border-border/50">
                  <div className="w-12 h-12 mx-auto bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {usage.icon}
                  </div>
                  <h4 className="font-semibold text-sm">{usage.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {usage.description}
                  </p>
                  <div className="text-xs text-primary font-medium">
                    {usage.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={0.8}>
        <div className="space-y-6">
          <div className="text-center space-y-2">
            <h3 className="text-xl font-bold text-foreground">Health Score System</h3>
            <p className="text-muted-foreground">Endowment health ranges from 51-100, indicating buffer above minimum requirements</p>
          </div>
          
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {healthScoreLevels.map((level, index) => (
              <Card key={index} className={`relative overflow-hidden border-${level.color}-500/20 hover:border-${level.color}-500/40 transition-all duration-300`}>
                <div className={`absolute top-0 left-0 w-full h-1 bg-${level.color}-500`}></div>
                <CardHeader className="pb-3 text-center">
                  <div className={`w-12 h-12 mx-auto bg-${level.color}-500/10 rounded-full flex items-center justify-center`}>
                    <span className={`text-lg font-bold text-${level.color}-600`}>{level.range}</span>
                  </div>
                  <CardTitle className="text-lg">{level.status}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <p className="text-sm text-muted-foreground text-center">
                    {level.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Recommended Utilization</span>
                    </div>
                    <Badge variant="outline" className="w-full justify-center text-xs">
                      {level.utilization}
                    </Badge>
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
                Growth Mechanics
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-4">
                {[
                  {
                    title: "Reward Compounding",
                    description: "Endowment rewards can be compounded to accelerate growth",
                    progress: 100,
                    icon: <ArrowUpRight className="w-4 h-4 text-green-500" />
                  },
                  {
                    title: "Successful Vouching",
                    description: "Successful loan backing adds to reputation capital",
                    progress: 75,
                    icon: <ArrowUpRight className="w-4 h-4 text-green-500" />
                  },
                  {
                    title: "Market Appreciation",
                    description: "Underlying asset value appreciation increases endowment value",
                    progress: 50,
                    icon: <ArrowUpRight className="w-4 h-4 text-green-500" />
                  },
                  {
                    title: "Slashing Events",
                    description: "Failed loans temporarily reduce health score",
                    progress: 25,
                    icon: <ArrowDownRight className="w-4 h-4 text-red-500" />
                  }
                ].map((mechanic, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-2">
                      {mechanic.icon}
                      <span className="text-sm font-medium">{mechanic.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">{mechanic.description}</p>
                    <Progress value={mechanic.progress} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/20">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <PiggyBank className="w-5 h-5 text-primary" />
                Economic Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                {[
                  {
                    title: "Perpetual Income",
                    description: "Endowments generate sustainable passive income forever",
                    icon: <Infinity className="w-4 h-4 text-purple-500" />
                  },
                  {
                    title: "Capital Efficiency",
                    description: "Same capital earns both from staking and vouching",
                    icon: <DollarSign className="w-4 h-4 text-green-500" />
                  },
                  {
                    title: "Reputation Monetization",
                    description: "Turn trust and reliability into productive assets",
                    icon: <Award className="w-4 h-4 text-blue-500" />
                  },
                  {
                    title: "Ecosystem Influence",
                    description: "Larger endowments grant greater protocol influence",
                    icon: <Shield className="w-4 h-4 text-orange-500" />
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

      <AnimatedFadeIn delay={1.2}>
        <Card className="border-primary/20 bg-muted/30">
          <CardHeader className="text-center">
            <CardTitle className="flex items-center justify-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              The Vision: Reputation as Collateral
            </CardTitle>
            <CardDescription className="text-base">
              How KIN Protocol transforms trust into a permanent, productive asset class
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The Reputation Endowment system represents a paradigm shift in how we think about 
              trust and capital. By making reputation a permanent, productive asset, KIN Protocol 
              creates a system where good behavior is perpetually rewarded, and trust becomes 
              the foundation of a new financial ecosystem.
            </p>
            <div className="flex flex-wrap gap-3 justify-center pt-4">
              <Badge variant="outline" className="px-3 py-1">🌱 Perpetual Growth</Badge>
              <Badge variant="outline" className="px-3 py-1">💎 Capital Efficiency</Badge>
              <Badge variant="outline" className="px-3 py-1">🏛️ Trust Foundation</Badge>
              <Badge variant="outline" className="px-3 py-1">🔄 Sustainable Rewards</Badge>
            </div>
          </CardContent>
        </Card>
      </AnimatedFadeIn>
    </div>
  );
}