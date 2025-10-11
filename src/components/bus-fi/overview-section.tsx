"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { AnimatedSection, AnimatedStagger, AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { Bus, Users, TrendingUp, Shield, Globe, Zap } from "lucide-react";

export function BusFiOverviewSection() {
  const features = [
    {
      icon: <Bus className="w-6 h-6" />,
      title: "Asset Tokenization",
      description: "Representing ownership or investment in buses through NFTs, making investment more accessible",
      color: "text-yellow-600"
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "DAO Governance",
      description: "Community-driven decision making for project operations and fund allocation",
      color: "text-blue-500"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Dynamic Dividends",
      description: "Tiered payout structure with higher returns during initial repayment phase",
      color: "text-green-500"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reputation System",
      description: "On-chain tracking of bus operator performance and repayment history",
      color: "text-purple-500"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Real-World Impact",
      description: "Directly addressing transportation infrastructure needs in African communities",
      color: "text-orange-500"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Hedera Network",
      description: "Built on efficient, low-cost blockchain technology for maximum accessibility",
      color: "text-cyan-500"
    }
  ];

  return (
    <div className="space-y-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <AnimatedFadeIn key={index} delay={0.1 + index * 0.1} direction="up">
            <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <CardHeader className="text-center">
                <div className={`mx-auto w-12 h-12 rounded-full bg-muted flex items-center justify-center mb-4 ${feature.color}`}>
                  {feature.icon}
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          </AnimatedFadeIn>
        ))}
      </div>
      
      <AnimatedSection delay={0.7}>
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl" style={{ color: "#FFD600" }}>The Bus-Fi Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Bus-Fi transforms transportation financing by connecting global capital with local impact. 
              By tokenizing real-world bus assets and implementing transparent profit-sharing mechanisms, 
              we create a sustainable model that benefits investors, operators, and communities alike.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold" style={{ color: "#FFD600" }}>100%</div>
                <div className="text-sm text-muted-foreground">Transparent Operations</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold" style={{ color: "#FFD600" }}>20-30%</div>
                <div className="text-sm text-muted-foreground">Initial Dividend Rate</div>
              </div>
              <div className="text-center space-y-2">
                <div className="text-3xl font-bold" style={{ color: "#FFD600" }}>∞</div>
                <div className="text-sm text-muted-foreground">Community Impact</div>
              </div>
            </div>
            
            <div className="mt-8 flex justify-center">
              <Badge className="text-base px-6 py-2 bg-yellow-100 text-yellow-800 border-yellow-200">
                Bus-Fi doesn't just fund buses — it builds communities
              </Badge>
            </div>
          </CardContent>
        </Card>
      </AnimatedSection>
      
      <AnimatedSection delay={0.9}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-xl text-green-700 dark:text-green-400">For Investors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Own fractional shares of real-world assets</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Receive transparent dividend payments</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Trade NFTs on secondary markets</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Drive real social impact with investment</span>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-700 dark:text-blue-400">For Bus Operators</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Access decentralized funding sources</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Build on-chain reputation for future funding</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Maintain operational independence</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                <span className="text-sm">Participate in community governance</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedSection>
    </div>
  );
}