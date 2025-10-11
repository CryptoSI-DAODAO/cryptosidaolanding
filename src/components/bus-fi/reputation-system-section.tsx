"use client";

import { AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Star, 
  TrendingUp, 
  Shield, 
  Users, 
  Award,
  CheckCircle,
  AlertCircle,
  Clock
} from "lucide-react";

const reputationLevels = [
  {
    level: "Bronze",
    score: "0-25",
    color: "bg-orange-500",
    benefits: ["Basic funding access", "Standard dividend rates", "Community voting rights"]
  },
  {
    level: "Silver",
    score: "26-50",
    color: "bg-gray-500",
    benefits: ["Increased funding limits", "5% dividend bonus", "Priority support"]
  },
  {
    level: "Gold",
    score: "51-75",
    color: "bg-yellow-500",
    benefits: ["Premium funding access", "10% dividend bonus", "Reduced fees", "Enhanced visibility"]
  },
  {
    level: "Platinum",
    score: "76-100",
    color: "bg-purple-500",
    benefits: ["Unlimited funding access", "15% dividend bonus", "Zero fees", "VIP support", "Governance leadership"]
  }
];

const reputationFactors = [
  {
    icon: <CheckCircle className="w-5 h-5" />,
    title: "Timely Repayments",
    description: "Consistent on-time loan repayments",
    weight: "40%",
    impact: "High"
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Performance Metrics",
    description: "Bus operational efficiency and revenue generation",
    weight: "25%",
    impact: "High"
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Community Engagement",
    description: "Active participation in DAO governance",
    weight: "15%",
    impact: "Medium"
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: "Transparency",
    description: "Regular reporting and documentation",
    weight: "10%",
    impact: "Medium"
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: "Longevity",
    description: "Length of time in the ecosystem",
    weight: "10%",
    impact: "Low"
  }
];

export function BusFiReputationSystemSection() {
  return (
    <div className="space-y-12">
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            The On-Chain Reputation System
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            A core innovation of Bus-Fi is its on-chain reputation system that tracks and publicly records 
            the performance of bus financiers. This mechanism creates trust, incentivizes reliability, and 
            directly impacts funding opportunities.
          </p>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={0.2}>
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl" style={{ color: "#FFD600" }}>How Reputation Works</CardTitle>
            <CardDescription className="text-lg">
              Building trust through transparent, verifiable performance tracking
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Reputation Scoring</h4>
                <p className="text-sm text-muted-foreground">
                  Each bus financier maintains a dynamic reputation score (0-100) that updates in real-time 
                  based on their performance metrics and behavior within the ecosystem.
                </p>
                <div className="space-y-2">
                  {reputationFactors.map((factor, index) => (
                    <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg shadow-sm">
                      <div className="p-2 bg-yellow-50 text-yellow-600 rounded-lg">
                        {factor.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h5 className="font-medium text-sm">{factor.title}</h5>
                          <Badge variant="outline" className="text-xs">{factor.weight}</Badge>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{factor.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground">Funding Impact</h4>
                <p className="text-sm text-muted-foreground">
                  Higher reputation scores directly translate to better funding terms and 
                  increased investor confidence, creating a virtuous cycle of reliability and growth.
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Funding Access</span>
                      <span className="text-xs text-green-600">+300%</span>
                    </div>
                    <Progress value={75} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Platinum vs Bronze level access</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Interest Rates</span>
                      <span className="text-xs text-green-600">-50%</span>
                    </div>
                    <Progress value={50} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Rate reduction for top performers</p>
                  </div>
                  
                  <div className="p-4 bg-white rounded-lg shadow-sm">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Investor Trust</span>
                      <span className="text-xs text-green-600">+200%</span>
                    </div>
                    <Progress value={90} className="h-2" />
                    <p className="text-xs text-muted-foreground mt-1">Investor confidence score</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={0.4}>
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-center text-foreground">Reputation Levels & Benefits</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {reputationLevels.map((level, index) => (
              <AnimatedFadeIn key={index} delay={0.5 + index * 0.1} direction="up">
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-3">
                      <div className={`w-16 h-16 rounded-full ${level.color} flex items-center justify-center`}>
                        <Star className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    <CardTitle className="text-lg">{level.level}</CardTitle>
                    <Badge variant="outline" className="mx-auto">Score: {level.score}</Badge>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {level.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center gap-2">
                          <CheckCircle className="w-3 h-3 text-green-500" />
                          <span className="text-xs text-muted-foreground">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedFadeIn>
            ))}
          </div>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={0.8}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-xl text-green-700 dark:text-green-400 flex items-center gap-2">
                <Award className="w-5 h-5" />
                Benefits for Financiers
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Lower borrowing costs with higher reputation</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Access to larger funding pools</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Priority processing for loan applications</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Enhanced visibility to potential investors</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Governance privileges in DAO decisions</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-700 dark:text-blue-400 flex items-center gap-2">
                <Shield className="w-5 h-5" />
                Benefits for Investors
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Data-driven investment decisions</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Reduced default risk through reputation filtering</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Transparent performance tracking</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Aligned incentives through reputation-based returns</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Community-driven risk assessment</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={1.0}>
        <Card className="border-l-4 border-l-yellow-400">
          <CardContent className="pt-6">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Building Trust Through Transparency</h4>
                <p className="text-sm text-muted-foreground">
                  The reputation system is designed to be completely transparent and algorithmic, eliminating 
                  subjective bias and creating a meritocratic ecosystem where performance is the sole 
                  determinant of success. All reputation data is publicly verifiable on the Hedera blockchain.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedFadeIn>
    </div>
  );
}