"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { 
  Shield, 
  TrendingUp, 
  Award, 
  BarChart3, 
  Clock, 
  CheckCircle,
  AlertTriangle,
  Star
} from "lucide-react";

export function MirrorVaultAegisScoreSection() {
  const scoreComponents = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Performance Metrics",
      description: "Tracks win rate, average returns, and consistency over time",
      weight: "35%",
      color: "bg-green-500/10 text-green-500 border-green-500/20",
      details: [
        "Risk-adjusted returns (Sharpe ratio)",
        "Maximum drawdown analysis",
        "Monthly/quarterly performance"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Risk Assessment",
      description: "Evaluates trading strategy risk and position management",
      weight: "30%",
      color: "bg-blue-500/10 text-blue-500 border-blue-500/20",
      details: [
        "Position sizing consistency",
        "Stop-loss adherence",
        "Leverage utilization patterns"
      ]
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Experience & Tenure",
      description: "Considers manager's track record length and activity",
      weight: "20%",
      color: "bg-purple-500/10 text-purple-500 border-purple-500/20",
      details: [
        "Active trading duration",
        "Total volume traded",
        "Market conditions navigated"
      ]
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Community Trust",
      description: "Incorporates follower feedback and retention rates",
      weight: "15%",
      color: "bg-orange-500/10 text-orange-500 border-orange-500/20",
      details: [
        "Follower retention metrics",
        "Community reputation score",
        "Dispute resolution history"
      ]
    }
  ];

  const scoreRanges = [
    { range: "900-1000", level: "Legendary", color: "bg-gradient-to-r from-yellow-400 to-orange-400", description: "Top 1% of managers" },
    { range: "800-899", level: "Elite", color: "bg-gradient-to-r from-purple-400 to-pink-400", description: "Top 5% of managers" },
    { range: "700-799", level: "Expert", color: "bg-gradient-to-r from-blue-400 to-cyan-400", description: "Top 15% of managers" },
    { range: "600-699", level: "Proven", color: "bg-gradient-to-r from-green-400 to-emerald-400", description: "Consistent performers" },
    { range: "500-599", level: "Emerging", color: "bg-gradient-to-r from-gray-400 to-slate-400", description: "Building track record" },
    { range: "0-499", level: "Unproven", color: "bg-gradient-to-r from-red-400 to-orange-400", description: "Limited history" }
  ];

  return (
    <div className="space-y-12">
      <AnimatedSection delay={0.1}>
        <Card className="bg-gradient-to-r from-primary/10 to-secondary/10 border-primary/30">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">What is Aegis Score?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              The Aegis Score is MirrorVault's on-chain reputation system that provides a comprehensive, 
              transparent assessment of manager performance, risk management, and credibility. 
              It's calculated automatically from on-chain data and cannot be manipulated.
            </p>
            <div className="mt-6 flex justify-center">
              <Badge className="text-base px-6 py-2 bg-primary/10 text-primary border-primary/20">
                🛡️ Aegis: The shield of reputation in DeFi
              </Badge>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {scoreComponents.map((component, index) => (
          <AnimatedFadeIn key={index} delay={0.2 + index * 0.1} direction="up">
            <Card className={`h-full hover:shadow-lg transition-all duration-300 border-2 ${component.color}`}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${component.color.split(' ')[0]} ${component.color.split(' ')[1]}`}>
                      {component.icon}
                    </div>
                    <div>
                      <CardTitle className="text-lg">{component.title}</CardTitle>
                      <Badge variant="secondary" className="mt-1">
                        {component.weight} weight
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <CardDescription className="text-base">
                  {component.description}
                </CardDescription>
                <div className="space-y-2">
                  {component.details.map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <CheckCircle className="w-3 h-3 text-primary mt-0.5 flex-shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>

      <AnimatedSection delay={0.6}>
        <Card className="border-primary/20">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-primary">Aegis Score Levels</CardTitle>
            <CardDescription>
              Managers are ranked based on their comprehensive Aegis Score
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {scoreRanges.map((range, index) => (
                <AnimatedFadeIn key={index} delay={0.1 + index * 0.05} direction="up">
                  <Card className={`h-full border-2 ${range.color} bg-background/50`}>
                    <CardHeader className="text-center pb-3">
                      <div className={`w-16 h-16 mx-auto rounded-full ${range.color} flex items-center justify-center`}>
                        <span className="text-white font-bold text-lg">{range.level.charAt(0)}</span>
                      </div>
                      <CardTitle className="text-lg">{range.level}</CardTitle>
                      <Badge variant="outline" className="w-fit mx-auto">
                        {range.range}
                      </Badge>
                    </CardHeader>
                    <CardContent className="text-center">
                      <CardDescription className="text-sm">
                        {range.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </AnimatedFadeIn>
              ))}
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>

      <AnimatedSection delay={0.8}>
        <Card className="bg-gradient-to-br from-muted/50 to-background">
          <CardHeader className="text-center">
            <CardTitle className="text-xl text-primary">Key Benefits</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                  <Star className="w-6 h-6 text-green-500" />
                </div>
                <h4 className="font-semibold">Transparent Selection</h4>
                <p className="text-sm text-muted-foreground">
                  Followers can make informed decisions based on verifiable on-chain data
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-blue-500/10 rounded-full flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-500" />
                </div>
                <h4 className="font-semibold">Dynamic Updates</h4>
                <p className="text-sm text-muted-foreground">
                  Scores update in real-time as managers execute trades and performance changes
                </p>
              </div>
              
              <div className="text-center space-y-3">
                <div className="mx-auto w-12 h-12 bg-purple-500/10 rounded-full flex items-center justify-center">
                  <Shield className="w-6 h-6 text-purple-500" />
                </div>
                <h4 className="font-semibold">Risk Management</h4>
                <p className="text-sm text-muted-foreground">
                  Helps followers assess and manage their exposure to different risk profiles
                </p>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-background/50 rounded-lg">
              <h4 className="text-lg font-semibold text-primary mb-4">Score Calculation Example</h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between text-sm">
                  <span>Performance Score (35%):</span>
                  <span className="font-medium">850 × 0.35 = 297.5</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Risk Score (30%):</span>
                  <span className="font-medium">780 × 0.30 = 234.0</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Experience Score (20%):</span>
                  <span className="font-medium">700 × 0.20 = 140.0</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span>Community Score (15%):</span>
                  <span className="font-medium">820 × 0.15 = 123.0</span>
                </div>
                <div className="border-t pt-3 mt-3">
                  <div className="flex items-center justify-between font-semibold">
                    <span>Total Aegis Score:</span>
                    <span className="text-primary text-lg">794.5 (Elite)</span>
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