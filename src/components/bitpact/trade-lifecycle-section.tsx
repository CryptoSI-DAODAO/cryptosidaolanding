"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "./shared/animated-section";
import { 
  ArrowRight, 
  User, 
  DollarSign, 
  Shield, 
  FileText,
  CheckCircle,
  AlertCircle,
  Users,
  Bitcoin
} from "lucide-react";

export function BitpactTradeLifecycleSection() {
  const lifecycleSteps = [
    {
      step: 1,
      title: "Seller Posts Offer",
      description: "Fiat method, price, chosen arbiters.",
      icon: <User className="w-6 h-6" />,
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      details: "Seller creates trade offer with specific terms"
    },
    {
      step: 2,
      title: "Buyer Accepts",
      description: "Buyer accepts with chosen arbiter.",
      icon: <User className="w-6 h-6" />,
      color: "bg-green-500/10 text-green-500 border-green-500/20",
      details: "Buyer agrees to terms and selects arbiter"
    },
    {
      step: 3,
      title: "Trade Initiated",
      description: "Initiates trade, deposits BTC into multisig.",
      icon: <Bitcoin className="w-6 h-6" />,
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      details: "Buyer locks Bitcoin in 2-of-3 multisig"
    },
    {
      step: 4,
      title: "Fiat Payment",
      description: "Buyer sends fiat (bank, cash, whatever method agreed).",
      icon: <DollarSign className="w-6 h-6" />,
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      details: "Off-chain payment according to agreed method"
    },
    {
      step: 5,
      title: "BTC Release",
      description: "Seller signs release once confirmed, or buyer requests arbitration.",
      icon: <Shield className="w-6 h-6" />,
      color: "bg-cyan-500/10 text-cyan-500 border-cyan-500/20",
      details: "Normal flow: seller releases after payment confirmation"
    },
    {
      step: 6,
      title: "Dispute (if needed)",
      description: "Both sides submit evidence, arbiter makes ruling.",
      icon: <AlertCircle className="w-6 h-6" />,
      color: "bg-red-500/10 text-red-500 border-red-500/20",
      details: "Arbiter reviews evidence and makes decision"
    },
    {
      step: 7,
      title: "Arbiter Resolution",
      description: "Signs release with winner, posts report to Arweave.",
      icon: <Users className="w-6 h-6" />,
      color: "bg-indigo-500/10 text-indigo-500 border-indigo-500/20",
      details: "Arbiter enforces fair outcome and documents decision"
    },
    {
      step: 8,
      title: "Reputation Update",
      description: "Both parties review each other, logs updated on IPFS.",
      icon: <FileText className="w-6 h-6" />,
      color: "bg-emerald-500/10 text-emerald-500 border-emerald-500/20",
      details: "Reputation scores updated for future trades"
    }
  ];

  const flowTypes = [
    {
      title: "Normal Trade Flow",
      description: "Smooth completion without disputes",
      steps: [1, 2, 3, 4, 5, 8],
      color: "text-green-500"
    },
    {
      title: "Dispute Flow",
      description: "When arbitration is needed",
      steps: [1, 2, 3, 4, 5, 6, 7, 8],
      color: "text-orange-500"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Flow Visualization */}
      <AnimatedSection delay={0.1}>
        <Card className="bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">Trade Flow Diagram</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <div className="flex items-center justify-between min-w-max py-8">
                {lifecycleSteps.map((step, index) => (
                  <div key={step.step} className="flex items-center">
                    <div className="text-center space-y-2">
                      <div className={`w-16 h-16 rounded-full ${step.color} flex items-center justify-center mx-auto`}>
                        {step.icon}
                      </div>
                      <div className="text-xs font-medium max-w-20">
                        {step.title}
                      </div>
                      <Badge variant="outline" className="text-xs">
                        Step {step.step}
                      </Badge>
                    </div>
                    {index < lifecycleSteps.length - 1 && (
                      <ArrowRight className="w-6 h-6 text-muted-foreground mx-2 flex-shrink-0" />
                    )}
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {flowTypes.map((flow, index) => (
                <div key={index} className="p-4 bg-background/50 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <div className={`w-3 h-3 rounded-full ${flow.color === 'text-green-500' ? 'bg-green-500' : 'bg-orange-500'}`}></div>
                    <h4 className={`font-semibold ${flow.color}`}>{flow.title}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{flow.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {flow.steps.map((stepNum) => (
                      <Badge key={stepNum} variant="secondary" className="text-xs">
                        {stepNum}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
      
      {/* Detailed Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {lifecycleSteps.map((step, index) => (
          <AnimatedFadeIn key={step.step} delay={0.1 + index * 0.1} direction="up">
            <Card className={`h-full border-2 ${step.color} hover:shadow-lg transition-all duration-300`}>
              <CardHeader className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    Step {step.step}
                  </Badge>
                </div>
                <div className={`mx-auto w-12 h-12 rounded-full ${step.color.split(' ')[0]} ${step.color.split(' ')[1]} flex items-center justify-center mb-3`}>
                  {step.icon}
                </div>
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
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
      
      <AnimatedSection delay={0.3}>
        <Card className="border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">Key Features of the Lifecycle</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="font-semibold">Multisig Protection</h4>
                <p className="text-sm text-muted-foreground">
                  Bitcoin is secured in 2-of-3 multisig throughout the trade
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold">Fair Arbitration</h4>
                <p className="text-sm text-muted-foreground">
                  Bonded arbiters ensure disputes are resolved fairly
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-purple-500" />
                </div>
                <h4 className="font-semibold">Reputation Tracking</h4>
                <p className="text-sm text-muted-foreground">
                  Every trade contributes to immutable reputation scores
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <h4 className="text-lg font-semibold text-primary mb-4">Treasury Management</h4>
              <p className="text-muted-foreground mb-4">
                Initially controlled by multisig dev council → later upgraded to full DAO for:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Arbiter onboarding / community rating</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Protocol fee adjustments</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Feature development funding</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <span>Ecosystem growth incentives</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}