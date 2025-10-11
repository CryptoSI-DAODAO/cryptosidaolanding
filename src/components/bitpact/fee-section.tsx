"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "./shared/animated-section";
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  PiggyBank,
  Calculator,
  ArrowRight
} from "lucide-react";

export function BitpactFeeSection() {
  const feeBreakdown = [
    {
      recipient: "Arbiter",
      share: "0.50%",
      description: "Paid on every trade",
      icon: <Users className="w-6 h-6" />,
      color: "bg-green-500/10 text-green-500 border-green-500/20",
      details: "Incentivizes active participation and attention"
    },
    {
      recipient: "Protocol Treasury",
      share: "0.50%",
      description: "Used for infrastructure, bug bounties, incentives",
      icon: <PiggyBank className="w-6 h-6" />,
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      details: "Funds protocol development and ecosystem growth"
    }
  ];

  const whyArbitersPaid = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Incentivizes Attention",
      description: "Keeps arbiters engaged and responsive to trade needs"
    },
    {
      icon: <Calculator className="w-5 h-5" />,
      title: "Prevents Free Riding",
      description: "Eliminates arbiters who only show up for disputes"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Professionalizes Role",
      description: "Makes arbitration a sustainable career, not a hobby"
    }
  ];

  const exampleTrade = {
    amount: "1 BTC",
    totalFee: "0.01 BTC",
    arbiterFee: "0.005 BTC",
    treasuryFee: "0.005 BTC",
    fiatValue: "~$270"
  };

  return (
    <div className="space-y-12">
      <AnimatedSection delay={0.1}>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 mb-12">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Flat Protocol Fee</CardTitle>
            <CardDescription className="text-lg">
              Simple, predictable pricing: 1% of trade value (BTC)
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <div className="text-4xl font-bold text-primary mb-2">1%</div>
              <div className="text-muted-foreground">of trade value</div>
            </div>
            
            <div className="bg-background/50 rounded-lg p-4">
              <p className="text-sm text-muted-foreground text-center">
                Collected directly in escrow at time of trade completion
              </p>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <AnimatedFadeIn delay={0.2} direction="left">
          <Card className={`h-full border-2 ${feeBreakdown[0].color} hover:shadow-lg transition-all duration-300`}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-lg ${feeBreakdown[0].color.split(' ')[0]} ${feeBreakdown[0].color.split(' ')[1]}`}>
                  {feeBreakdown[0].icon}
                </div>
                <div>
                  <CardTitle className="text-xl">{feeBreakdown[0].recipient}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{feeBreakdown[0].share}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <CardDescription className="text-base">
                {feeBreakdown[0].description}
              </CardDescription>
              <div className="text-sm text-muted-foreground italic">
                {feeBreakdown[0].details}
              </div>
            </CardContent>
          </Card>
        </AnimatedFadeIn>
        
        <AnimatedFadeIn delay={0.3} direction="right">
          <Card className={`h-full border-2 ${feeBreakdown[1].color} hover:shadow-lg transition-all duration-300`}>
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-lg ${feeBreakdown[1].color.split(' ')[0]} ${feeBreakdown[1].color.split(' ')[1]}`}>
                  {feeBreakdown[1].icon}
                </div>
                <div>
                  <CardTitle className="text-xl">{feeBreakdown[1].recipient}</CardTitle>
                  <div className="text-2xl font-bold text-primary">{feeBreakdown[1].share}</div>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <CardDescription className="text-base">
                {feeBreakdown[1].description}
              </CardDescription>
              <div className="text-sm text-muted-foreground italic">
                {feeBreakdown[1].details}
              </div>
            </CardContent>
          </Card>
        </AnimatedFadeIn>
      </div>
      
      <AnimatedSection delay={0.4}>
        <Card className="border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">Example Trade Breakdown</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="font-medium">Trade Amount</span>
                  <span className="font-bold">{exampleTrade.amount}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-primary/5 rounded-lg">
                  <span className="font-medium">Total Fee (1%)</span>
                  <span className="font-bold text-primary">{exampleTrade.totalFee}</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-muted rounded-lg">
                  <span className="font-medium">Fiat Value</span>
                  <span className="font-bold">{exampleTrade.fiatValue}</span>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="text-center mb-4">
                  <div className="text-sm text-muted-foreground mb-2">Fee Distribution</div>
                  <div className="flex items-center justify-center gap-2">
                    <Badge variant="secondary" className="px-3 py-1">
                      Arbiter: {exampleTrade.arbiterFee}
                    </Badge>
                    <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    <Badge variant="secondary" className="px-3 py-1">
                      Treasury: {exampleTrade.treasuryFee}
                    </Badge>
                  </div>
                </div>
                
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="w-full bg-background rounded-full h-4 overflow-hidden">
                    <div className="h-full flex">
                      <div className="bg-green-500" style={{ width: '50%' }}></div>
                      <div className="bg-blue-500" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                  <div className="flex justify-between text-xs text-muted-foreground mt-2">
                    <span>50% Arbiter</span>
                    <span>50% Treasury</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
      
      <AnimatedSection delay={0.5}>
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">🔁 Why Arbiters Get Paid Always</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {whyArbitersPaid.map((reason, index) => (
                <div key={index} className="text-center space-y-3">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                    {reason.icon}
                  </div>
                  <h4 className="font-semibold">{reason.title}</h4>
                  <p className="text-sm text-muted-foreground">{reason.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-6 bg-background/50 rounded-lg text-center">
              <p className="text-muted-foreground">
                This fee structure ensures that arbiters are financially motivated to provide excellent service
                and remain actively engaged in the ecosystem, rather than only participating when disputes arise.
              </p>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}