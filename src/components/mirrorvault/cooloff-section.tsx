"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { 
  Clock, 
  Users, 
  Shield, 
  AlertTriangle, 
  CheckCircle, 
  ThumbsUp,
  ThumbsDown,
  Pause,
  TrendingUp
} from "lucide-react";

export function MirrorVaultCooloffSection() {
  const processSteps = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Epoch Trading",
      description: "30-day trading period where manager executes strategies",
      duration: "30 days",
      color: "bg-green-500/10 text-green-500 border-green-500/20",
      details: "Manager trades normally, followers can deposit/withdraw anytime"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Epoch End",
      description: "Trading stops, profits are calculated, fees are determined",
      duration: "Instant",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      details: "System calculates P&L and determines performance fees"
    },
    {
      icon: <Pause className="w-6 h-6" />,
      title: "Cool-Off Period",
      description: "7-day period where followers can withdraw or vote HOLD",
      duration: "7 days",
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      details: "No new trades, no new deposits, only withdrawals and voting"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Resolution",
      description: "Fees released or vault frozen based on community vote",
      duration: "Instant",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      details: "If HOLD < 50%, fees paid. If HOLD ≥ 50%, vault frozen"
    }
  ];

  const votingMechanics = [
    {
      icon: <ThumbsUp className="w-5 h-5" />,
      title: "Normal Operation",
      description: "HOLD votes < 50% of total shares",
      result: "Manager fees released, vault continues normally",
      color: "text-green-500"
    },
    {
      icon: <ThumbsDown className="w-5 h-5" />,
      title: "Community Veto",
      description: "HOLD votes ≥ 50% of total shares",
      result: "Vault frozen, fees locked until HOLD drops below 50%",
      color: "text-red-500"
    }
  ];

  const protections = [
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Transparency",
      description: "All voting is on-chain and publicly verifiable"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Democratic Control",
      description: "Followers collectively decide on fee release"
    },
    {
      icon: <AlertTriangle className="w-6 h-6" />,
      title: "Accountability",
      description: "Managers must maintain community trust beyond performance"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Deliberation Time",
      description: "7-day window allows careful consideration"
    }
  ];

  return (
    <div className="space-y-12">
      <AnimatedSection delay={0.1}>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">🧊 Cool-Off Take-Profits System</CardTitle>
            <CardDescription className="text-lg">
              An innovative safeguard that ensures fairness and accountability after each trading cycle
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground max-w-3xl mx-auto">
              The Cool-Off Take-Profits mechanism transforms profit realization into a community-audited event, 
              giving followers the power to veto suspicious outcomes while keeping the entire process automated and on-chain.
            </p>
          </CardContent>
        </Card>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {processSteps.map((step, index) => (
          <AnimatedFadeIn key={index} delay={0.2 + index * 0.1} direction="up">
            <Card className={`h-full hover:shadow-lg transition-all duration-300 border-2 ${step.color}`}>
              <CardHeader className="text-center">
                <div className={`mx-auto w-12 h-12 rounded-full ${step.color.split(' ')[0]} ${step.color.split(' ')[1]} flex items-center justify-center mb-3`}>
                  {step.icon}
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
                <Badge variant="secondary" className="w-fit mx-auto">
                  {step.duration}
                </Badge>
              </CardHeader>
              <CardContent className="text-center space-y-3">
                <CardDescription className="text-base">
                  {step.description}
                </CardDescription>
                <div className="text-sm text-muted-foreground italic">
                  {step.details}
                </div>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>

      <AnimatedSection delay={0.6}>
        <Card className="border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">Voting Mechanics</CardTitle>
            <CardDescription>
              Followers have two options during the cool-off period
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {votingMechanics.map((mechanic, index) => (
                <AnimatedFadeIn key={index} delay={0.1 + index * 0.1} direction="up">
                  <Card className={`h-full border-2 ${mechanic.color === 'text-green-500' ? 'bg-green-500/5 border-green-500/20' : 'bg-red-500/5 border-red-500/20'}`}>
                    <CardHeader>
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg ${mechanic.color === 'text-green-500' ? 'bg-green-500/10 text-green-500' : 'bg-red-500/10 text-red-500'}`}>
                          {mechanic.icon}
                        </div>
                        <div>
                          <CardTitle className="text-lg">{mechanic.title}</CardTitle>
                          <Badge variant="outline" className="mt-1">
                            {mechanic.description}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base">
                        {mechanic.result}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedFadeIn>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-background/50 rounded-lg">
              <h4 className="text-lg font-semibold text-primary mb-4">Voting Power Calculation</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Total Vault Shares:</span>
                  <span className="font-medium">1,000,000 shares</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>HOLD Votes:</span>
                  <span className="font-medium">450,000 shares</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>HOLD Percentage:</span>
                  <span className="font-medium text-green-500">45% (Below 50% threshold)</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex items-center justify-between font-semibold">
                    <span>Result:</span>
                    <span className="text-green-500">Fees released, vault continues</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      <AnimatedSection delay={0.8}>
        <Card className="bg-gradient-to-br from-muted/50 to-background">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">Key Protections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {protections.map((protection, index) => (
                <AnimatedFadeIn key={index} delay={0.1 + index * 0.05} direction="up">
                  <Card className="h-full text-center hover:shadow-lg transition-all duration-300">
                    <CardHeader>
                      <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                        {protection.icon}
                      </div>
                      <CardTitle className="text-lg">{protection.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-sm">
                        {protection.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedFadeIn>
              ))}
            </div>
            
            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="p-6 bg-blue-500/5 border-blue-500/20">
                <h4 className="text-lg font-semibold text-blue-700 dark:text-blue-400 mb-3">For Followers</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Can withdraw funds during cool-off if concerned</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Collective veto power over suspicious results</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
                    <span>Voting power proportional to share ownership</span>
                  </li>
                </ul>
              </Card>
              
              <Card className="p-6 bg-green-500/5 border-green-500/20">
                <h4 className="text-lg font-semibold text-green-700 dark:text-green-400 mb-3">For Managers</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Incentivizes transparent and fair trading</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Builds long-term trust with followers</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>Prevents front-running and malicious behavior</span>
                  </li>
                </ul>
              </Card>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}