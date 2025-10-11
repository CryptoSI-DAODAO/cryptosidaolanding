"use client";

import { AnimatedFadeIn } from "../bitpact/shared/animated-section";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  TrendingUp, 
  Users, 
  DollarSign, 
  Award,
  Bus,
  PiggyBank,
  ArrowRight,
  Calculator
} from "lucide-react";

const tokenomicsPhases = [
  {
    phase: "Pre-Repayment Phase",
    duration: "Until initial loan fully repaid",
    dividendRate: "20-30%",
    description: "Accelerated payout incentivizes early investment and acknowledges initial risk",
    features: [
      "Higher dividend share of bus profits",
      "Priority access to new opportunities",
      "Enhanced governance rights"
    ],
    color: "text-green-600",
    bgColor: "bg-green-50"
  },
  {
    phase: "Perpetuity Phase",
    duration: "After loan repayment completion",
    dividendRate: "10-15%",
    description: "Sustainable long-term passive income from bus operations",
    features: [
      "Ongoing profit distribution",
      "Secondary market liquidity",
      "Network effect benefits"
    ],
    color: "text-blue-600",
    bgColor: "bg-blue-50"
  }
];

const valueDrivers = [
  {
    icon: <Bus className="w-6 h-6" />,
    title: "Real-World Asset Backing",
    description: "Each NFT represents a fractional stake in an actual revenue-generating bus",
    impact: "High"
  },
  {
    icon: <TrendingUp className="w-6 h-6" />,
    title: "Performance-Based Returns",
    description: "Dividends directly tied to individual bus operational profitability",
    impact: "High"
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Network Effects",
    description: "Growing fleet size increases platform value and liquidity",
    impact: "Medium"
  },
  {
    icon: <Award className="w-6 h-6" />,
    title: "Reputation Premium",
    description: "High-performing operators command premium NFT valuations",
    impact: "Medium"
  }
];

export function BusFiTokenomicsSection() {
  return (
    <div className="space-y-12">
      <AnimatedFadeIn>
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-headline tracking-tight text-foreground">
            Tokenomics: Fueling Growth and Returns
          </h3>
          <p className="max-w-[800px] mx-auto text-lg text-muted-foreground">
            The core of Bus-Fi's tokenomics revolves around its innovative Non-Fungible Token (NFT) system, 
            designed to democratize investment and ensure sustainable returns through a tiered dividend model 
            that aligns investor interests with operational success.
          </p>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={0.2}>
        <Card className="bg-gradient-to-r from-yellow-50 to-orange-50 border-yellow-200">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl" style={{ color: "#FFD600" }}>Tiered Dividend Distribution</CardTitle>
            <CardDescription className="text-lg">
              Smart incentives that reward early investors while ensuring long-term sustainability
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {tokenomicsPhases.map((phase, index) => (
                <Card key={index} className={`${phase.bgColor} border-2 ${phase.color.replace('text', 'border')}`}>
                  <CardHeader className="text-center">
                    <Badge className="mb-2 w-fit mx-auto" variant="outline">
                      Phase {index + 1}
                    </Badge>
                    <CardTitle className={`text-xl ${phase.color}`}>{phase.phase}</CardTitle>
                    <div className="text-3xl font-bold" style={{ color: "#FFD600" }}>
                      {phase.dividendRate}
                    </div>
                    <p className="text-sm text-muted-foreground">{phase.duration}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4 text-center">
                      {phase.description}
                    </p>
                    <div className="space-y-2">
                      {phase.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <ArrowRight className="w-3 h-3 text-yellow-600" />
                          <span className="text-xs">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <Calculator className="w-4 h-4 text-yellow-600" />
                <span className="text-sm font-medium">Net Operational Profits</span>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                All dividend calculations are based on net operational profits after expenses
              </p>
            </div>
          </CardContent>
        </Card>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={0.4}>
        <div className="space-y-6">
          <h4 className="text-xl font-semibold text-center text-foreground">NFT Value Drivers</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {valueDrivers.map((driver, index) => (
              <AnimatedFadeIn key={index} delay={0.5 + index * 0.1} direction="up">
                <Card className="text-center h-full hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="mx-auto w-12 h-12 rounded-full bg-yellow-50 flex items-center justify-center mb-3">
                      <div className="text-yellow-600">{driver.icon}</div>
                    </div>
                    <CardTitle className="text-sm">{driver.title}</CardTitle>
                    <Badge variant="outline" className="text-xs">
                      {driver.impact} Impact
                    </Badge>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-xs">
                      {driver.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedFadeIn>
            ))}
          </div>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={0.6}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-gradient-to-br from-green-50 to-emerald-50 border-green-200">
            <CardHeader>
              <CardTitle className="text-xl text-green-700 dark:text-green-400 flex items-center gap-2">
                <PiggyBank className="w-5 h-5" />
                Investor Benefits
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Initial ROI Potential</span>
                  <span className="text-sm font-bold text-green-600">25-35% APR</span>
                </div>
                <Progress value={75} className="h-2" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Long-term Yield</span>
                  <span className="text-sm font-bold text-green-600">12-18% APR</span>
                </div>
                <Progress value={60} className="h-2" />
                
                <div className="flex justify-between items-center">
                  <span className="text-sm">Liquidity Premium</span>
                  <span className="text-sm font-bold text-green-600">5-10% Premium</span>
                </div>
                <Progress value={40} className="h-2" />
              </div>
              
              <div className="pt-2">
                <p className="text-xs text-muted-foreground">
                  Returns are performance-based and may vary based on individual bus operations and market conditions.
                </p>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-br from-blue-50 to-cyan-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-xl text-blue-700 dark:text-blue-400 flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Economic Model
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="space-y-3">
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Bus Operating Revenue</span>
                    <span className="text-xs text-blue-600">100%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{width: '100%'}}></div>
                  </div>
                </div>
                
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Operating Expenses</span>
                    <span className="text-xs text-gray-600">40-50%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-gray-400 h-2 rounded-full" style={{width: '45%'}}></div>
                  </div>
                </div>
                
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">NFT Holder Dividends</span>
                    <span className="text-xs text-green-600">20-30%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{width: '25%'}}></div>
                  </div>
                </div>
                
                <div className="p-3 bg-white rounded-lg shadow-sm">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-sm font-medium">Operator Profit</span>
                    <span className="text-xs text-yellow-600">20-40%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{width: '30%'}}></div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </AnimatedFadeIn>

      <AnimatedFadeIn delay={0.8}>
        <Card className="border-l-4 border-l-yellow-400">
          <CardContent className="pt-6">
            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Risk & Return Profile</h4>
              <p className="text-sm text-muted-foreground">
                Bus-Fi NFTs offer a unique blend of financial return and direct social impact by empowering 
                communities through improved transportation infrastructure. While carrying real-world asset risks 
                distinct from low-risk digital finance, they provide:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">RWA</div>
                  <div className="text-xs text-muted-foreground">Real-World Asset Backing</div>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">Tangible</div>
                  <div className="text-xs text-muted-foreground">Physical Infrastructure</div>
                </div>
                <div className="text-center p-3 bg-yellow-50 rounded-lg">
                  <div className="text-2xl font-bold text-yellow-600">Impact</div>
                  <div className="text-xs text-muted-foreground">Social & Financial Returns</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </AnimatedFadeIn>
    </div>
  );
}