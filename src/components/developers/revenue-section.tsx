"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "@/components/bitpact/shared/animated-section";
import { 
  DollarSign, 
  Users, 
  TrendingUp, 
  PiggyBank,
  Calculator,
  ArrowRight,
  Code,
  Shield
} from "lucide-react";

export function DeveloperRevenueSection() {
  const revenueModels = [
    {
      title: "Model 1: Treasury Share Partnership",
      description: "For projects integrated into existing protocols like BitPact",
      icon: <PiggyBank className="w-6 h-6" />,
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      features: [
        "50% of Treasury Portion (25% of total fees)",
        "Arbiter fees remain unchanged (50% of total fees)",
        "DAO retains 25% for operations",
        "Integrated into existing ecosystem"
      ],
      example: "BitPact: 1% fee → 0.5% arbiter → 0.25% developer → 0.25% DAO"
    },
    {
      title: "Model 2: Standalone Partnership",
      description: "For completely new dApps and protocols",
      icon: <Code className="w-6 h-6" />,
      color: "bg-green-500/10 text-green-500 border-green-500/20",
      features: [
        "50% of total revenue",
        "Custom revenue structure",
        "Full creative control",
        "Direct DAO partnership"
      ],
      example: "New dApp: Custom fee → 50% developer → 50% DAO"
    }
  ];

  const revenueExample = {
    volume: "$1,000,000",
    model1: {
      totalFee: "$10,000",
      arbiter: "$5,000",
      developer: "$2,500",
      dao: "$2,500"
    },
    model2: {
      totalFee: "$10,000",
      developer: "$5,000",
      dao: "$5,000"
    }
  };

  const benefits = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Passive Income",
      description: "Earn revenue for the lifetime of the dApp"
    },
    {
      icon: <Calculator className="w-5 h-5" />,
      title: "Transparent Tracking",
      description: "All revenue tracked on-chain in real-time"
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Smart Contract Protection",
      description: "Automated payments secured by smart contracts"
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Performance Bonuses",
      description: "Additional rewards for exceptional performance"
    }
  ];

  return (
    <section id="revenue" className="w-full py-12 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <AnimatedFadeIn delay={0.1}>
            <h2 className="text-3xl font-headline tracking-tighter sm:text-5xl">Revenue Sharing Model</h2>
          </AnimatedFadeIn>
          <AnimatedFadeIn delay={0.2}>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              We offer two flexible partnership models to ensure fair compensation for developer contributions
            </p>
          </AnimatedFadeIn>
        </div>
        
        {/* Revenue Models */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {revenueModels.map((model, index) => (
            <AnimatedFadeIn key={index} delay={0.3 + index * 0.1} direction="up">
              <Card className={`h-full border-2 ${model.color} hover:shadow-lg transition-all duration-300`}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-3 rounded-lg ${model.color.split(' ')[0]} ${model.color.split(' ')[1]}`}>
                      {model.icon}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl">{model.title}</CardTitle>
                      <CardDescription className="text-base mt-1">
                        {model.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-2">
                    {model.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="p-3 bg-background/50 rounded-lg">
                    <div className="text-xs text-muted-foreground mb-1">Example:</div>
                    <div className="text-sm font-mono">{model.example}</div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedFadeIn>
          ))}
        </div>
        
        {/* Revenue Example */}
        <AnimatedSection delay={0.5}>
          <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30 mb-12">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-primary">Monthly Revenue Example</CardTitle>
              <CardDescription className="text-lg">
                Based on $1,000,000 monthly trading volume
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">Model 1: Treasury Share</Badge>
                    <div className="text-3xl font-bold text-primary mb-2">$2,500</div>
                    <div className="text-sm text-muted-foreground">Developer Monthly Earnings</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-muted rounded">
                      <span className="text-sm">Trading Volume</span>
                      <span className="font-bold">{revenueExample.volume}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-primary/5 rounded">
                      <span className="text-sm">Total Fees (1%)</span>
                      <span className="font-bold">{revenueExample.model1.totalFee}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted rounded">
                      <span className="text-sm">Arbiter (50%)</span>
                      <span className="font-bold">{revenueExample.model1.arbiter}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-500/10 rounded">
                      <span className="text-sm">Developer (25%)</span>
                      <span className="font-bold text-green-500">{revenueExample.model1.developer}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted rounded">
                      <span className="text-sm">DAO (25%)</span>
                      <span className="font-bold">{revenueExample.model1.dao}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="text-center">
                    <Badge variant="secondary" className="mb-2">Model 2: Standalone</Badge>
                    <div className="text-3xl font-bold text-primary mb-2">$5,000</div>
                    <div className="text-sm text-muted-foreground">Developer Monthly Earnings</div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center p-2 bg-muted rounded">
                      <span className="text-sm">Trading Volume</span>
                      <span className="font-bold">{revenueExample.volume}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-primary/5 rounded">
                      <span className="text-sm">Total Fees (1%)</span>
                      <span className="font-bold">{revenueExample.model2.totalFee}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-green-500/10 rounded">
                      <span className="text-sm">Developer (50%)</span>
                      <span className="font-bold text-green-500">{revenueExample.model2.developer}</span>
                    </div>
                    <div className="flex justify-between items-center p-2 bg-muted rounded">
                      <span className="text-sm">DAO (50%)</span>
                      <span className="font-bold">{revenueExample.model2.dao}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
        
        {/* Benefits */}
        <AnimatedSection delay={0.6}>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-primary mb-2">Why Partner With Us?</h3>
            <p className="text-muted-foreground">Beyond just revenue sharing</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <AnimatedFadeIn key={index} delay={0.7 + index * 0.1} direction="up">
                <Card className="text-center h-full border-primary/20 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6 space-y-4">
                    <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary">
                      {benefit.icon}
                    </div>
                    <h4 className="font-semibold">{benefit.title}</h4>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              </AnimatedFadeIn>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}