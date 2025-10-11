"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedStagger, AnimatedFadeIn } from "./shared/animated-section";
import {
  Shield,
  Bitcoin,
  FileText,
  Users,
  Star,
  TrendingUp,
  AlertCircle,
  CheckCircle
} from "lucide-react";

export function BitpactArbitersSection() {
  const arbiterFeatures = [
    {
      icon: <Bitcoin className="w-6 h-6" />,
      title: "BTC Bond Required",
      description: "Arbiters must stake a BTC bond (e.g., 0.1 BTC) to register.",
      details: "Financial commitment ensures skin in the game",
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20"
    },
    {
      icon: <AlertCircle className="w-6 h-6" />,
      title: "Slashable Bonds",
      description: "Bonds are slashable if arbiters act dishonestly (via DAO or proof-of-misconduct).",
      details: "Economic penalties for bad behavior",
      color: "bg-red-500/10 text-red-500 border-red-500/20"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Always Paid",
      description: "Always paid 50% of protocol fees per trade — even if no dispute arises.",
      details: "Incentivizes active participation and attention",
      color: "bg-green-500/10 text-green-500 border-green-500/20"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Mandatory Reports",
      description: "Required to publish a signed arbitration report on every trade they oversee.",
      details: "Transparency in all arbitration activities",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20"
    }
  ];

  const profileMetrics = [
    { label: "Total Trades Arbitrated", value: "127", icon: <Users className="w-4 h-4" /> },
    { label: "Win/Loss Decisions", value: "98/29", icon: <TrendingUp className="w-4 h-4" /> },
    { label: "Dispute Rate", value: "23%", icon: <AlertCircle className="w-4 h-4" /> },
    { label: "Reputation Score", value: "4.8/5", icon: <Star className="w-4 h-4" /> }
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {arbiterFeatures.map((feature, index) => (
          <AnimatedFadeIn key={index} delay={0.1 + index * 0.1} direction="up">
            <Card className={`h-full hover:shadow-lg transition-all duration-300 border-2 ${feature.color}`}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg ${feature.color.split(' ')[0]} ${feature.color.split(' ')[1]}`}>
                    {feature.icon}
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
                <div className="text-sm text-muted-foreground italic">
                  {feature.details}
                </div>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>
      
      <AnimatedSection delay={0.3}>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Arbiter Profile Dashboard</CardTitle>
            <CardDescription className="text-lg">
              Every arbiter maintains a transparent, publicly accessible profile
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {profileMetrics.map((metric, index) => (
                <div key={index} className="text-center space-y-2">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    {metric.icon}
                    <Badge variant="secondary" className="text-xs">
                      {metric.label}
                    </Badge>
                  </div>
                  <div className="text-2xl font-bold">{metric.value}</div>
                </div>
              ))}
            </div>
            
            <div className="bg-background/50 rounded-lg p-6">
              <h4 className="text-lg font-semibold text-primary mb-4">Why Arbiters Get Paid Always</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Incentivizes them to stay attentive and responsive</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Prevents laziness or "free rider" arbiters</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Only show up when a case goes bad</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Makes arbitration a profession — not a hobby</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
      
      <AnimatedSection delay={0.5}>
        <Card className="border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">Arbiter Accountability</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center">
                  <AlertCircle className="w-6 h-6 text-red-500" />
                </div>
                <h4 className="font-semibold">Financial Risk</h4>
                <p className="text-sm text-muted-foreground">
                  Bonded arbiters have real financial stake in honest behavior
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <FileText className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="font-semibold">Public Records</h4>
                <p className="text-sm text-muted-foreground">
                  All reports permanently stored on Arweave for public scrutiny
                </p>
              </div>
              
              <div className="text-center space-y-2">
                <div className="mx-auto w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold">Community Oversight</h4>
                <p className="text-sm text-muted-foreground">
                  DAO governance ensures arbiter quality and accountability
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  );
}